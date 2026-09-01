# ERPNext Deployment Spec (factoryjet-prod-1)

> Status: **spec only, nothing executed.** Written 2026-08-09.
> Target host: `factoryjet-prod-1` / `95.216.140.168` (SSH alias `factoryjet`).
> Nothing in this document touches SeenInSearch, mission-control, or their databases.

---

## 1. What we are building and why

One self-hosted Frappe site running four apps, giving FactoryJet leads, deals, books,
invoices and support tickets in a single system that Claude Code can operate over MCP.

| App | License | Purpose |
|---|---|---|
| `frappe` v16 | MIT | Framework, users, RBAC, REST API |
| `erpnext` v16.31.1 | GPL-3.0 | Accounting, bookkeeping, invoices, quotations, multi-currency |
| `crm` (main) | AGPL-3.0 | Kanban lead/deal pipeline |
| `helpdesk` (main) | AGPL-3.0 | Customer support tickets |

Every one is fully open source with no paid tier, no license key and no gated features.
AGPL imposes no obligation on us because we self-host internally and do not resell.

**Why both ERPNext and Frappe CRM.** ERPNext's built-in CRM is the traditional
Lead to Opportunity to Quotation flow and is clunky for daily selling. Frappe CRM adds the
clean Kanban pipeline and syncs bidirectionally with ERPNext, so a won deal converts straight
into a quotation or sales order. That sync **only works when both apps live on the same site**,
which is why they are installed together from the start rather than added later.

### Decisions already made

| Decision | Choice | Reason |
|---|---|---|
| Database | **MariaDB 11.8** | ERPNext v16 Postgres support is emerging, not the beaten path. Not putting the books on it. |
| DB placement | **New dedicated container** | SeenInSearch's postgres:16 is not touched. |
| Reverse proxy | **Existing native Caddy** | Already terminating TLS on 80/443 for three sites. |
| Internal port | **127.0.0.1:8080** | 3000, 3001, 8025 are taken. Localhost-bound, matching existing services. |
| Swap | **Add 4GB** | Host currently has zero swap. Frappe workers are memory-spiky. |

---

## 2. Host capacity (measured 2026-08-09)

```
Ubuntu 26.04 LTS, kernel 7.0.0-15-generic
8 vCPU | 15.2 GB RAM (2.1 GB used, 13.5 GB available) | 150 GB disk (55 GB used, 90 GB free)
Swap: none
Docker 29.6.1 | Caddy native on :80/:443, admin on 127.0.0.1:2019
```

Running already: `seen-in-search-prod-{web,worker,backup,postgres}`, `mission-control-{app,postgres}`, `mailer`.
Caddy serves `app.factoryjet.com` (:3000), `app.seeninsearch.com` (:3001),
`mail.flyingpixel.in` (:8025), `dantal.demo.factoryjet.com`.

ERPNext needs 4 GB minimum and is comfortable at 8 GB. We have 13.5 GB free, so it fits.
Step 5 caps its containers so it can never starve SeenInSearch.

---

## 3. Pre-flight

```bash
ssh factoryjet 'free -h; df -h /; docker ps --format "{{.Names}}"; ss -tln | grep -E ":8080|:3306"'
```

Abort if `:8080` or `:3306` is already bound. Both were free at time of writing.

---

## 4. Step 1 — Add swap

Zero swap on a box running a live product is the single biggest risk in this deploy.

```bash
ssh factoryjet '
sudo fallocate -l 4G /swapfile &&
sudo chmod 600 /swapfile &&
sudo mkswap /swapfile &&
sudo swapon /swapfile &&
echo "/swapfile none swap sw 0 0" | sudo tee -a /etc/fstab &&
sudo sysctl -w vm.swappiness=10 &&
echo "vm.swappiness=10" | sudo tee /etc/sysctl.d/99-swappiness.conf &&
swapon --show'
```

Verify: `free -h` shows 4.0Gi swap.

---

## 5. Step 2 — DNS

Add in Cloudflare for `factoryjet.com`:

```
Type: A    Name: erp    Content: 95.216.140.168    Proxy: DNS only (grey cloud)
```

Grey cloud so Caddy's ACME HTTP-01 challenge resolves directly. Match whatever the existing
`app.factoryjet.com` record does; if that one is proxied and working, proxied is fine here too.

Wait for propagation before Step 8:

```bash
dig +short erp.factoryjet.com
```

---

## 6. Step 3 — Build the custom image

The stock `frappe/erpnext` image contains frappe and erpnext **only**. Adding `crm` and
`helpdesk` requires a layered build.

```bash
ssh factoryjet
sudo mkdir -p /opt/erpnext && sudo chown "$USER" /opt/erpnext && cd /opt/erpnext
git clone --depth 1 https://github.com/frappe/frappe_docker.git
cd frappe_docker
```

Create `apps.json`:

```json
[
  { "url": "https://github.com/frappe/erpnext",  "branch": "version-16" },
  { "url": "https://github.com/frappe/crm",      "branch": "main" },
  { "url": "https://github.com/frappe/helpdesk", "branch": "main" }
]
```

Branch names verified against the GitHub API on 2026-08-09: `erpnext` releases from
`version-16`; `crm` and `helpdesk` use `main` as their stable branch (their *default* branch is
`develop`, which we deliberately avoid).

Build:

```bash
docker build \
  --no-cache \
  --build-arg=FRAPPE_PATH=https://github.com/frappe/frappe \
  --build-arg=FRAPPE_BRANCH=version-16 \
  --secret=id=apps_json,src=apps.json \
  --tag=factoryjet/erpnext:v16 \
  --file=images/layered/Containerfile .
```

`apps.json` goes through `--secret`, not `--build-arg`, so it never lands in image history.

> **Highest-risk step.** `crm` and `helpdesk` on `main` must compile against Frappe v16.
> If the build fails, drop `helpdesk` first and rebuild, then `crm`. An erpnext-only image is a
> perfectly good day-one fallback; both apps can be added later with `bench get-app`.

---

## 7. Step 4 — Environment file

`/opt/erpnext/erpnext.env` (chmod 600):

```env
ERPNEXT_VERSION=v16
CUSTOM_IMAGE=factoryjet/erpnext
CUSTOM_TAG=v16
PULL_POLICY=never

DB_PASSWORD=<generate: openssl rand -base64 32>

HTTP_PUBLISH_PORT=8080
UPSTREAM_REAL_IP_ADDRESS=127.0.0.1
UPSTREAM_REAL_IP_HEADER=X-Forwarded-For

GUNICORN_WORKERS=4
GUNICORN_THREADS=4
GUNICORN_TIMEOUT=120
PROXY_READ_TIMEOUT=120s
CLIENT_MAX_BODY_SIZE=50m

FRAPPE_SITE_NAME_HEADER=erp.factoryjet.com
```

`GUNICORN_WORKERS=4` is a deliberate override. The upstream formula `(2 × cores) + 1` would
give 17 workers on this 8-core box and eat memory SeenInSearch needs.

---

## 8. Step 5 — Compose

Generate the resolved config:

```bash
cd /opt/erpnext/frappe_docker
docker compose --project-name erpnext \
  --env-file /opt/erpnext/erpnext.env \
  -f compose.yaml \
  -f overrides/compose.mariadb.yaml \
  -f overrides/compose.redis.yaml \
  -f overrides/compose.noproxy.yaml \
  config > /opt/erpnext/erpnext.yaml
```

Then edit `/opt/erpnext/erpnext.yaml` and apply two changes:

**a) Bind the published port to localhost only.** `compose.noproxy.yaml` publishes on all
interfaces by default, which would expose ERPNext directly to the internet on :8080, bypassing
Caddy. Under `services.frontend.ports`:

```yaml
    ports:
      - "127.0.0.1:8080:8080"
```

**b) Cap resources** so this stack can never starve the live products:

```yaml
    deploy:
      resources:
        limits:
          memory: 2G     # backend, and each of queue-short / queue-long / scheduler
```

Apply the memory limit to `backend`, `queue-short`, `queue-long`, `scheduler` and `db`
(give `db` 2G as well). Total ceiling lands around 10 GB, inside our 13.5 GB headroom.

Bring it up:

```bash
docker compose --project-name erpnext -f /opt/erpnext/erpnext.yaml up -d
docker compose --project-name erpnext -f /opt/erpnext/erpnext.yaml ps
```

---

## 9. Step 6 — Create the site and install apps

```bash
docker compose --project-name erpnext -f /opt/erpnext/erpnext.yaml exec backend \
  bench new-site erp.factoryjet.com \
    --mariadb-user-host-login-scope=% \
    --db-root-password '<DB_PASSWORD>' \
    --admin-password '<generate a strong one>' \
    --install-app erpnext \
    --install-app crm \
    --install-app helpdesk \
    --set-default
```

Store the admin password in your password manager. Do not reuse `DB_PASSWORD`.

App URLs once live:
- ERPNext desk: `https://erp.factoryjet.com/app`
- Frappe CRM: `https://erp.factoryjet.com/crm`
- Helpdesk: `https://erp.factoryjet.com/helpdesk`

---

## 10. Step 7 — Caddy

Append to `/etc/caddy/Caddyfile`, matching the existing style:

```caddy
erp.factoryjet.com {
	reverse_proxy 127.0.0.1:8080
}
```

No `tls internal`. This is a public domain, so Caddy provisions a real Let's Encrypt cert
automatically, same as the other three sites.

```bash
sudo caddy validate --config /etc/caddy/Caddyfile
sudo systemctl reload caddy
curl -sI https://erp.factoryjet.com | head -1
```

`caddy validate` before reload. A malformed Caddyfile takes down SeenInSearch's TLS too.

---

## 11. Step 8 — Restricted API user for MCP

**This is the safety boundary.** Frappe enforces permissions server-side by role, so whatever
this user cannot do in the UI, Claude Code cannot do through MCP, regardless of which tools the
MCP server advertises. Restricting here is what matters; restricting at the MCP layer is not.

In ERPNext desk:

1. **Role List → New**: `AI Agent`.
2. **Role Permissions Manager**, grant to `AI Agent`:
   - Read + Write + Create: `Lead`, `Deal`, `CRM Lead`, `CRM Deal`, `Contact`, `Address`,
     `Customer`, `Task`, `ToDo`, `Note`, `Communication`, `HD Ticket`
   - Read only: `Sales Invoice`, `Quotation`, `Sales Order`, `Payment Entry`, `Journal Entry`,
     `GL Entry`, `Item`, `Company`
   - **No Write, no Submit, no Cancel, no Delete on anything in the read-only list.**
3. **User → New**: `ai-agent@factoryjet.com`, type System User, role `AI Agent` only.
   Explicitly do not grant System Manager or Accounts User.
4. On that user: **Settings → API Access → Generate Keys**. Save the API Key and API Secret.

Net effect: the agent runs the pipeline and reads the books, and cannot post to the general
ledger or submit an invoice.

---

## 12. Step 9 — Wire MCP to Claude Code

Server: [`@casys/mcp-erpnext`](https://github.com/Casys-AI/mcp-erpnext), MIT, 124 tools,
supports self-hosted instances. It is a small project (68 stars), which is acceptable precisely
because Frappe's RBAC from Step 8 is doing the real enforcement.

Add to the project's `.mcp.json`:

```json
{
  "mcpServers": {
    "erpnext": {
      "command": "npx",
      "args": ["-y", "@casys/mcp-erpnext"],
      "env": {
        "ERPNEXT_URL": "https://erp.factoryjet.com",
        "ERPNEXT_API_KEY": "${ERPNEXT_API_KEY}",
        "ERPNEXT_API_SECRET": "${ERPNEXT_API_SECRET}"
      }
    }
  }
}
```

Keys go in the untracked local env, never committed. Confirm `.mcp.json` secrets handling
matches how the repo already stores DataForSEO and Runware credentials.

> Known upstream caveat: the maintainer warns that running behind a load balancer without a
> shared replay store can double-submit retried writes. We run a single instance with no load
> balancer, so this does not apply. Do not scale the MCP server horizontally.

---

## 13. Step 10 — Lead capture integration

Current flow in [`src/utils/submitLead.ts`](../src/utils/submitLead.ts):
form → `POST /api/notify-lead` (Cloudflare edge function) → Firestore REST + Resend email,
with a best-effort client Firestore write as backup.

Add a **third, fire-and-forget** write inside the same edge function, to
`POST https://erp.factoryjet.com/api/resource/CRM Lead` with
`Authorization: token <key>:<secret>`.

Rules for this change:
- It must not be awaited on the critical path, and must not gate the response.
- Bound it with the same `AbortController` timeout pattern already used for `postNotifyLead`.
- If ERPNext is down the lead is still saved to Firestore and still emailed. **The existing
  dual-path safety net from the 2026-06-22 incident must remain exactly as it is.**
- Reuse the existing `docId` as an idempotency key so retries never create duplicate leads.

Backfill afterwards: one-off script reading the Firestore `contactus` collection into
`CRM Lead`, keyed on `docId` so it is safely re-runnable.

---

## 14. Backups

MariaDB volume plus the `sites` volume (which holds uploaded files) both need covering.

```bash
# nightly, via cron on the host
docker compose --project-name erpnext -f /opt/erpnext/erpnext.yaml exec -T backend \
  bench --site erp.factoryjet.com backup --with-files
```

Backups land in the `sites` volume under `.../private/backups`. Copy them off-box to the same
destination the existing `seen-in-search-prod-backup-1` container uses, and prune beyond 14 days.
**A backup you have never restored is not a backup.** Do one test restore before the books go in.

---

## 15. Verification checklist

- [ ] `free -h` shows 4 GB swap active
- [ ] `dig +short erp.factoryjet.com` returns 95.216.140.168
- [ ] `docker compose -p erpnext ... ps` shows all services healthy
- [ ] `ss -tln | grep 8080` shows `127.0.0.1:8080`, **not** `0.0.0.0:8080`
- [ ] `curl -sI https://erp.factoryjet.com` returns 200 with a valid Let's Encrypt cert
- [ ] `/crm` and `/helpdesk` both load
- [ ] `docker ps` still shows all four SeenInSearch containers up
- [ ] `curl -sI https://app.seeninsearch.com` still returns 200 (Caddy reload did no harm)
- [ ] `free -h` shows at least 3 GB still available under load
- [ ] MCP: agent can create a test Lead
- [ ] MCP: agent is **refused** when attempting to submit a Sales Invoice
- [ ] One backup taken and test-restored

---

## 16. Rollback

Fully reversible. Nothing here mutates existing services.

```bash
docker compose --project-name erpnext -f /opt/erpnext/erpnext.yaml down     # keeps volumes
docker compose --project-name erpnext -f /opt/erpnext/erpnext.yaml down -v  # destroys data
sudo sed -i '/erp.factoryjet.com/,+2d' /etc/caddy/Caddyfile
sudo caddy validate --config /etc/caddy/Caddyfile && sudo systemctl reload caddy
```

Swap can stay regardless; the box should have had it all along.

---

## 17. Risks

| Risk | Severity | Mitigation |
|---|---|---|
| `crm`/`helpdesk` `main` fails to build against Frappe v16 | High | Drop apps one at a time; erpnext-only is a valid day one. Test before Caddy is wired. |
| Port published on 0.0.0.0, exposing ERPNext directly | High | Explicit `127.0.0.1:8080` binding in Step 5a; verification checklist asserts it. |
| Memory pressure kills a SeenInSearch container | Medium | 4 GB swap, per-service memory limits, `GUNICORN_WORKERS=4` instead of 17. |
| Bad Caddyfile edit drops TLS for all sites | Medium | `caddy validate` before every reload; rollback is a two-line sed. |
| Agent writes bad data into the books | Medium | Frappe RBAC denies all accounting writes to the `AI Agent` role. |
| `main` is a moving branch, builds are not reproducible | Low | Record the resolved commit SHAs after build; pin to tags at the next rebuild. |

---

## 18. Open decision (does not block the deploy)

**Which legal entity and base currency the books are set up for.** This sets the Chart of
Accounts and tax configuration and is expensive to redo, but it is a post-install config step,
so the deploy can proceed without it.

- *India entity, INR base, GST enabled* — ERPNext ships a full India compliance module (GST,
  GSTIN, e-invoicing, TDS). Clients in the US, UK and UAE still get billed in their own currency
  through multi-currency, with INR as the reporting currency.
- *US entity, USD base, no GST* — simplest Chart of Accounts. Correct if FactoryJet invoices US
  clients from a US entity and India is a cost centre.
- *Two companies in one instance* — ERPNext supports this with consolidated reporting. Correct
  only if you genuinely invoice from two entities today.

Recommend confirming with your accountant before running the Company setup wizard. Until then,
the CRM, helpdesk and lead capture are all fully usable.
