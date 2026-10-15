# Antigravity Task 6: API keys for the careers-bot ERPNext user

Paste everything below this line into Antigravity as one prompt.

---

You are setting up credentials for FactoryJet's hiring pipeline. Your job: generate an ERPNext API
key and secret for one user, `careers-bot@factoryjet.com`, store them in exactly two places, and
prove they work, without the secret ever appearing in a log, a file in a git repo, a screenshot, a
chat message or your final report. You are not writing website code and not changing ERPNext
configuration.

## 0. Ground rules (they override anything else)

1. **One user only.** Generate keys for `careers-bot@factoryjet.com` and nobody else. Never click
   "Generate Keys" or call `generate_keys` for `bhavesh@factoryjet.com`, `bhavesh.b@factoryjet.com`
   or `Administrator`. The live website contact form authenticates to ERPNext with one of those
   users' keys. Regenerating them silently breaks lead capture and nobody notices until leads stop.
2. **Generate once.** Every call to `generate_keys` replaces the secret. Generate one time, capture
   the result into shell variables, store it, verify it. Only generate again if storing failed and
   nothing was stored yet, and say so in the report.
3. **The secret is never shown.** Do not `echo` it, `cat` a file containing it, put it in a command
   argument (arguments show up in `ps` and shell history), paste it into a browser field, or take a
   screenshot while it is on screen. Pass it through stdin only. Turn off shell history for the
   session first: `set +o history` (bash) or `unsetopt HISTFILE` / `fc -p` (zsh).
4. **Do not change** the careers-bot user's roles (it must keep **HR User only**), any other user,
   any DocType, Custom Field, Web Form, System Settings, or anything in the website repo. Do not
   commit anything.
5. **Admin access.** Get ERPNext admin credentials (an Administrator API key and secret, or desk
   login) from Bhavesh through your environment or secret store. Never print them and never write
   them to a file.
6. **No invented results.** Every "done" claim in your report needs the command output that proves
   it (with secrets masked). End the report with a `NOT DONE:` line, even if it says
   `NOT DONE: nothing`. Plain English, no em dashes.

## 1. Facts (checked live on 2026-10-15)

- ERPNext: `https://erp.factoryjet.com`, Frappe 15.119.1, ERPNext 15.120.0, hrms 15.63.4, running on
  the **Contabo VPS 144.91.102.199**. (Older docs say Hetzner. They are wrong for ERPNext.)
- The user exists: `careers-bot@factoryjet.com`, full name "Careers Bot", System User, role
  **HR User** only, no password, no API key yet. Created 2026-10-15.
- The website is Cloudflare Pages project **`factoryjet-v2`**, the one with the `factoryjet.com`
  domain. (Correction 2026-10-15: this prompt first said `factoryjet`, copied from the
  `name = "factoryjet"` line in `wrangler.toml`. That project has not been deployed for 5 months and
  does not serve the site. Antigravity added the secrets to both, which is what saved the run.)
- The scoring worker will run on the Hetzner server `factoryjet-prod-1` (95.216.140.168, SSH alias
  `factoryjet`). It is not built yet; you only create its env file.
- Spec for the whole pipeline: `docs/HIRING-PIPELINE-SPEC.md` in the website repo. Read section 4.5
  and 5.1 for where these keys are used. Do not build anything from it.

## 2. Pre-checks (stop and report if any fails)

1. `curl -s -o /dev/null -w "%{http_code}" https://erp.factoryjet.com/api/method/ping` returns 200.
   If not, the Contabo VPS may be down (it was on 2026-10-15 over an unpaid invoice). Stop.
2. As Administrator, `GET /api/resource/User/careers-bot@factoryjet.com` and confirm: enabled 1,
   roles contain exactly one role, `HR User`, and `api_key` is empty. If `api_key` is already set,
   **stop and report**: someone generated keys already, and generating again would break them.
3. `cd /Users/bhaveshbarot/FactoryJet/website && npx wrangler whoami` shows a logged-in account that
   owns the `factoryjet-v2` Pages project, and `npx wrangler pages secret list --project-name factoryjet-v2`
   runs. If wrangler is not logged in, stop and ask Bhavesh to run `npx wrangler login`. Do not log
   in with credentials yourself.
4. `ssh factoryjet 'echo ok'` works.

## 3. Generate the key pair (once)

In one shell session with history off, as Administrator:

```bash
set +o history
RESP=$(curl -s -X POST "https://erp.factoryjet.com/api/method/frappe.core.doctype.user.user.generate_keys" \
  -H "Authorization: token ${ERP_ADMIN_KEY}:${ERP_ADMIN_SECRET}" \
  -H "Content-Type: application/json" \
  --data '{"user":"careers-bot@factoryjet.com"}')
CB_SECRET=$(printf '%s' "$RESP" | python3 -c 'import sys,json;print(json.load(sys.stdin)["message"]["api_secret"])')
CB_KEY=$(curl -s "https://erp.factoryjet.com/api/resource/User/careers-bot@factoryjet.com" \
  -H "Authorization: token ${ERP_ADMIN_KEY}:${ERP_ADMIN_SECRET}" \
  | python3 -c 'import sys,json;print(json.load(sys.stdin)["data"]["api_key"])')
unset RESP
printf 'key length %s, secret length %s\n' "${#CB_KEY}" "${#CB_SECRET}"
```

Only the lengths are printed. Both must be non-zero (Frappe keys are usually 15 characters). If the
call fails with a permission error, the admin credentials are not Administrator or System Manager:
stop and report.

The `ERP_ADMIN_KEY` / `ERP_ADMIN_SECRET` variables come from your secret store, not from a typed
literal.

## 4. Store the keys (two places, nowhere else)

### 4.1 Cloudflare Pages secrets, production

```bash
cd /Users/bhaveshbarot/FactoryJet/website
printf '%s' "$CB_KEY"    | npx wrangler pages secret put CAREERS_ERP_API_KEY    --project-name factoryjet-v2
printf '%s' "$CB_SECRET" | npx wrangler pages secret put CAREERS_ERP_API_SECRET --project-name factoryjet-v2
```

Production only. Do not add them to the Preview environment: preview builds must not create real
Job Applicants.

Do not touch any other existing secret (`ERPNEXT_API_KEY`, `ERPNEXT_API_SECRET`, `RESEND_API_KEY`,
`TURNSTILE_SECRET_KEY` and the rest). Do not redeploy; the next normal deploy picks the secrets up,
and the function that uses them is not built yet.

### 4.2 Hetzner env file for the future worker

```bash
ssh factoryjet 'sudo mkdir -p /opt/hiring && sudo chmod 700 /opt/hiring'
{ printf 'CAREERS_ERP_URL=https://erp.factoryjet.com\n'
  printf 'CAREERS_ERP_API_KEY=%s\n' "$CB_KEY"
  printf 'CAREERS_ERP_API_SECRET=%s\n' "$CB_SECRET"; } \
  | ssh factoryjet 'sudo tee /opt/hiring/.env > /dev/null && sudo chmod 600 /opt/hiring/.env'
ssh factoryjet 'sudo ls -l /opt/hiring/.env && sudo grep -c "^CAREERS_ERP_" /opt/hiring/.env'
```

Expected: `-rw-------` owned by root, and a count of `3`. Never `cat` the file.

If `/opt/hiring/.env` already exists, **stop and report** instead of overwriting it.

## 5. Verify (all four must pass)

1. **The key logs in as careers-bot:**
   ```bash
   curl -s https://erp.factoryjet.com/api/method/frappe.auth.get_logged_user \
     -H "Authorization: token ${CB_KEY}:${CB_SECRET}"
   ```
   Expected: `{"message":"careers-bot@factoryjet.com"}`.
2. **It can read Job Applicants:**
   `GET /api/resource/Job%20Applicant?limit_page_length=1` with the careers-bot token returns 200.
3. **It cannot read sales leads (least privilege):**
   `GET /api/resource/Lead?limit_page_length=1` with the careers-bot token returns **403**. If it
   returns 200, the user has more access than intended: report it, do not fix roles yourself.
4. **Cloudflare has both names:** `npx wrangler pages secret list --project-name factoryjet-v2` lists
   `CAREERS_ERP_API_KEY` and `CAREERS_ERP_API_SECRET` (values are hidden by wrangler).

Then clear the variables and restore history:

```bash
unset CB_KEY CB_SECRET
set -o history
```

## 6. Report back

Plain English, short, to Bhavesh:

- Pre-check results (2.1 to 2.4).
- Key generated: yes/no, with the two lengths. Never the values.
- Cloudflare: the `secret list` output lines for the two names.
- Hetzner: the `ls -l` line and the count.
- Verify 5.1 to 5.4: each with its response (`get_logged_user` output, the two HTTP codes, the
  secret names).
- `NOT DONE:` line.

Do not include the key, the secret, the admin credentials or any screenshot of the ERPNext API
Access popup.
