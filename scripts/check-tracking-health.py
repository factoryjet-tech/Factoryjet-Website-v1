#!/usr/bin/env python3
"""Tracking health check: GTM container + GA4, verified against what is LIVE.

WHY THIS EXISTS
---------------
FactoryJet's analytics have broken and been "fixed" repeatedly. Every recurrence
shares one property: nothing ever checked the LIVE state, so a break was only
noticed weeks later when someone looked at a report and found a hole.

Two confirmed recurrences:

  2026-07-06  page_view went to zero and stayed there for a month. Cause: the GTM
              container had 11 tags and NO GA4 configuration tag. Every GA4 tag was
              an EVENT tag (`gaawe`) carrying measurementIdOverride, so click and
              form events kept recording while page_view silently died. Nothing in
              GA4's UI says "you have no config tag".

  2026-08-04  A workspace named `fix-ga4-pageview-2026-08-04` containing exactly the
              right fix was created and NEVER PUBLISHED. It sat there for two days.
              Editing a GTM workspace changes nothing until you publish a version.

Run this after ANY tracking change, and on a schedule. It exits non-zero on a real
break so it can be wired into a cron or a scheduled agent.

USAGE
-----
    python3 scripts/check-tracking-health.py

Requires the service-account key (kept OUTSIDE the repo, path below) which holds
GTM account admin + container publish, and GA4 read. Deliberately NOT part of
`npm run prebuild`: CI has no credentials, and a check that cannot run in CI must
not be able to block a deploy.
"""
import sys, os, json, datetime

# ── Interpreter bootstrap ────────────────────────────────────────────────────
# This machine's `python3` resolves to /usr/local/bin/python3, which is 3.7.4 and
# end-of-life. The Google client libraries publish no 3.7 wheels, so pip there
# tries to compile grpcio from source and fails on a permissions error. Rather
# than make that anyone's problem, re-exec into the repo-local venv (built from
# Homebrew's 3.11) whenever the current interpreter cannot import the clients.
# Set up once with:  scripts/setup-tracking-venv.sh
_VENV_PY = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
                        ".venv-tracking", "bin", "python")
if os.environ.get("_FJ_TRACKING_BOOTSTRAPPED") != "1":
    try:
        import googleapiclient  # noqa: F401
        import google.analytics.data_v1beta  # noqa: F401
        import google.analytics.admin  # noqa: F401
    except ImportError:
        if os.path.exists(_VENV_PY) and os.path.abspath(sys.executable) != os.path.abspath(_VENV_PY):
            os.environ["_FJ_TRACKING_BOOTSTRAPPED"] = "1"
            os.execv(_VENV_PY, [_VENV_PY, os.path.abspath(__file__)] + sys.argv[1:])
        print("Google client libraries are not importable and .venv-tracking is missing.\n"
              "Run this once:\n"
              "    bash scripts/setup-tracking-venv.sh")
        sys.exit(2)

KEY = "/Users/bhaveshbarot/FactoryJet/secrets/factoryjet-seo-7fa130b491b8.json"
GTM_ACCOUNT = "accounts/6332650021"
GTM_CONTAINER = f"{GTM_ACCOUNT}/containers/239923059"
GTM_PUBLIC_ID = "GTM-PKWD8SHF"
GA4_PROPERTY = "properties/516928458"
MEASUREMENT_ID = "G-N40S2Q8E1J"

# Events that represent a lead. Each MUST be flagged as a GA4 key event, or Google
# Ads is optimising against a signal that does not exist. This is exactly how 22
# real leads went uncounted in July 2026 after Lead_Form_FactoryJet was renamed to
# generate_lead and nobody re-flagged the new name.
LEAD_EVENTS = {"generate_lead", "book_call_click", "whatsapp_click", "email_click", "phone_click"}

failures, warnings, notes = [], [], []


def fail(m): failures.append(m)
def warn(m): warnings.append(m)
def note(m): notes.append(m)


def main():
    try:
        from google.oauth2 import service_account
        from googleapiclient.discovery import build
        from google.analytics.data_v1beta import BetaAnalyticsDataClient
        from google.analytics.data_v1beta.types import RunReportRequest, DateRange, Dimension, Metric
        from google.analytics.admin import AnalyticsAdminServiceClient
    except ImportError as e:
        print(f"missing dependency: {e}\n"
              f"  pip install google-api-python-client google-analytics-data google-analytics-admin")
        return 2

    # ── GTM ──────────────────────────────────────────────────────────────────
    tm_creds = service_account.Credentials.from_service_account_file(
        KEY, scopes=["https://www.googleapis.com/auth/tagmanager.readonly"])
    tm = build("tagmanager", "v2", credentials=tm_creds, cache_discovery=False)

    live = tm.accounts().containers().versions().live(parent=GTM_CONTAINER).execute()
    version_id = live.get("containerVersionId")
    tags = live.get("tag", [])
    note(f"GTM live version {version_id} ({live.get('name','unnamed')}), {len(tags)} tags")

    # CHECK 1 — the break that started all of this.
    config_tags = [t for t in tags if t["type"] in ("googtag", "gaawc")]
    if not config_tags:
        fail("NO GA4 configuration tag in the LIVE container. page_view cannot fire. "
             "This is the exact 2026-07-06 break. Add a Google tag (type googtag) with "
             f"tagId {MEASUREMENT_ID} on an All Pages trigger, then PUBLISH it.")
    for t in config_tags:
        if t.get("paused"):
            fail(f"GA4 config tag '{t['name']}' is PAUSED in the live container.")
        if not t.get("firingTriggerId"):
            fail(f"GA4 config tag '{t['name']}' has NO firing trigger, so it never runs.")
        ids = [p.get("value") for p in t.get("parameter", []) if p.get("key") in ("tagId", "measurementId")]
        if MEASUREMENT_ID not in ids:
            fail(f"GA4 config tag '{t['name']}' points at {ids}, expected {MEASUREMENT_ID}.")
        else:
            note(f"config tag OK: '{t['name']}' -> {MEASUREMENT_ID}, triggers {t.get('firingTriggerId')}")

    # CHECK 1b — the Google tag MUST fire on Initialization, not Page View.
    #
    # Learned the hard way on 2026-08-07. Version 10 was published via the API with
    # the config tag on trigger 11 ("All Pages", a Page View trigger). Tag Assistant
    # reported it as fired and Succeeded, the container looked correct in every API
    # check, and not a single page_view reached GA4. Rebuilding the identical tag in
    # the GTM UI produced the SAME single tagId parameter but a different trigger:
    # 2147479573, the built-in Initialization - All Pages. Initialization runs before
    # Page View, which is where measurement configuration belongs.
    #
    # The trap is that nothing surfaces this. The tag reports success either way.
    INIT_TRIGGERS = {"2147479573", "2147479572"}  # Initialization - All Pages / Consent Init
    for t in config_tags:
        trigs = set(t.get("firingTriggerId") or [])
        if trigs and not (trigs & INIT_TRIGGERS):
            fail(f"GA4 config tag '{t['name']}' fires on trigger(s) {sorted(trigs)}, not on "
                 f"Initialization. A Google tag on a Page View trigger reports 'Succeeded' "
                 f"in Tag Assistant and still delivers no page_view. Repoint it at "
                 f"'Initialization - All Pages'.")

    # CHECK 2 — a paused GA4 event tag is a silently missing conversion.
    for t in [t for t in tags if t["type"] == "gaawe"]:
        if t.get("paused"):
            fail(f"GA4 event tag '{t['name']}' is PAUSED in the live container.")

    # CHECK 3b — THE ONE THAT EXPLAINS THE REPEAT OUTAGES. Found 2026-08-07.
    #
    # A GTM workspace is an independent COPY of the container, not a view onto it.
    # Publishing from a workspace replaces the live container with that copy. So a
    # workspace created before a tag was added does not merely lack that tag: publish
    # from it and the tag is DELETED from the live site, silently, as a side effect of
    # whatever unrelated change was being shipped.
    #
    # That is what we found: live version 10 had 12 tags including the GA4 Google tag,
    # while 'Default Workspace' still held the pre-fix 9. Anyone touching that
    # workspace and hitting Submit would have reverted the fix without ever seeing it.
    # It also explains why Preview looked broken while the live container was correct.
    #
    # Fix when this fires: sync the workspace (GTM shows a "sync" prompt), or delete it
    # if it is abandoned. Never publish from a workspace that is behind.
    live_tag_names = {t["name"] for t in tags}
    for ws in tm.accounts().containers().workspaces().list(parent=GTM_CONTAINER).execute().get("workspace", []):
        try:
            ws_tags = tm.accounts().containers().workspaces().tags().list(
                parent=ws["path"]).execute().get("tag", [])
        except Exception:
            continue
        missing = live_tag_names - {t["name"] for t in ws_tags}
        if missing:
            fail(f"workspace '{ws['name']}' is BEHIND the live container: it is missing "
                 f"{len(missing)} live tag(s) ({', '.join(sorted(missing))}). Publishing "
                 f"from it would DELETE them from the live site. Sync or delete that "
                 f"workspace now.")

    # CHECK 3 — unpublished workspace changes. This is the 2026-08-04 failure mode:
    # the fix existed and was never published, so the container kept serving the break.
    for ws in tm.accounts().containers().workspaces().list(parent=GTM_CONTAINER).execute().get("workspace", []):
        try:
            st = tm.accounts().containers().workspaces().getStatus(path=ws["path"]).execute()
        except Exception:
            continue
        pending = st.get("workspaceChange", [])
        if pending:
            names = []
            for ch in pending:
                for k in ("tag", "trigger", "variable"):
                    if k in ch:
                        names.append(f"{ch.get('changeStatus')} {k} '{ch[k].get('name')}'")
            warn(f"workspace '{ws['name']}' has {len(pending)} UNPUBLISHED change(s): {'; '.join(names)}. "
                 f"Nothing in a workspace affects the live site until a version is published.")

    # ── GA4 ──────────────────────────────────────────────────────────────────
    ro = service_account.Credentials.from_service_account_file(
        KEY, scopes=["https://www.googleapis.com/auth/analytics.readonly"])
    data = BetaAnalyticsDataClient(credentials=ro)

    rep = data.run_report(RunReportRequest(
        property=GA4_PROPERTY,
        date_ranges=[DateRange(start_date="7daysAgo", end_date="yesterday")],
        dimensions=[Dimension(name="eventName")],
        metrics=[Metric(name="eventCount"), Metric(name="keyEvents")], limit=50))
    counts = {r.dimension_values[0].value: (int(r.metric_values[0].value), float(r.metric_values[1].value))
              for r in rep.rows}

    # Last-fired DATE per event, over a window long enough to see a stale event.
    # A 7-day SUM cannot tell "firing today" from "fired once a week ago and has
    # been dead since", and that is exactly how CHECK 4b below went quiet on
    # 2026-08-10: two leftover events from the 2026-08-07 manual test kept the
    # 7-day sum non-zero while page_view had been at zero for 36 days.
    last_rep = data.run_report(RunReportRequest(
        property=GA4_PROPERTY,
        date_ranges=[DateRange(start_date="28daysAgo", end_date="today")],
        dimensions=[Dimension(name="eventName"), Dimension(name="date")],
        metrics=[Metric(name="eventCount")], limit=2000))
    last_fired: dict[str, datetime.date] = {}
    for r in last_rep.rows:
        if int(r.metric_values[0].value) <= 0:
            continue
        ev, raw = r.dimension_values[0].value, r.dimension_values[1].value
        try:
            d = datetime.datetime.strptime(raw, "%Y%m%d").date()
        except ValueError:
            continue
        if ev not in last_fired or d > last_fired[ev]:
            last_fired[ev] = d

    TODAY = datetime.date.today()

    def _last(events) -> "datetime.date | None":
        seen = [last_fired[e] for e in events if e in last_fired]
        return max(seen) if seen else None

    def _ago(d) -> str:
        return "never in 28 days" if d is None else f"{d:%Y-%m-%d} ({(TODAY - d).days}d ago)"

    # CHECK 4 — the outcome check. Everything above can look right and still not work.
    #
    # Three windows, because one is not enough. The 7-day window ENDS YESTERDAY (GA4
    # has no complete "today"), so on the day you publish a fix it cannot possibly
    # show the fix working, and reporting a bare FAIL there is misleading. Today and
    # realtime cover the gap. Realtime is the only one that reflects a change made
    # minutes ago.
    from google.analytics.data_v1beta.types import RunRealtimeReportRequest

    pv_7d = counts.get("page_view", (0, 0))[0]

    today_rep = data.run_report(RunReportRequest(
        property=GA4_PROPERTY,
        date_ranges=[DateRange(start_date="today", end_date="today")],
        dimensions=[Dimension(name="eventName")],
        metrics=[Metric(name="eventCount")], limit=50))
    pv_today = sum(int(r.metric_values[0].value) for r in today_rep.rows
                   if r.dimension_values[0].value == "page_view")

    rt = data.run_realtime_report(RunRealtimeReportRequest(
        property=GA4_PROPERTY, metrics=[Metric(name="screenPageViews")], limit=1))
    pv_rt = sum(int(r.metric_values[0].value) for r in rt.rows) if rt.rows else 0

    # How long has the current container version been live? GTM fingerprints are
    # epoch milliseconds. A fix published an hour ago has not had time to prove itself.
    try:
        published = datetime.datetime.fromtimestamp(int(live["fingerprint"]) / 1000)
        hours_live = (datetime.datetime.now() - published).total_seconds() / 3600
    except Exception:
        published, hours_live = None, 999

    if pv_rt or pv_today:
        note(f"page_view IS arriving (realtime {pv_rt}, today {pv_today}, last 7 days {pv_7d})")
    elif pv_7d:
        note(f"page_view last 7 days: {pv_7d} (none yet today, which is normal on low traffic)")
    elif hours_live < 48:
        warn(f"No page_view in any window, but the live container is only "
             f"{hours_live:.1f}h old ({published:%Y-%m-%d %H:%M}). Too early to call it. "
             f"Google caches gtm.js, so returning visitors keep the old container for a "
             f"while. Re-run tomorrow. If it is still zero then, it is a real break.")
    else:
        fail("GA4 recorded ZERO page_view in the last 7 days, today, and realtime, and "
             "the container has been live for more than 48h. Pageviews are genuinely "
             "not arriving.")

    # CHECK 4b — the sharpest signature available, and the one that named this bug.
    #
    # Two families of event reach GA4 by DIFFERENT paths:
    #   - page_view / scroll / user_engagement come from the gtag RUNTIME, which only
    #     exists if the Google tag (googtag) actually executes.
    #   - generate_lead / *_click come from standalone GTM event tags carrying
    #     measurementIdOverride, which send with no config tag present at all.
    # So "conversions are fine, therefore tracking is fine" is a trap: the standalone
    # tags kept working for a solid month while the Google tag was simply gone.
    # Measured 2026-08-07: page_view last fired 2026-07-05, scroll and user_engagement
    # last fired 2026-07-07, while generate_lead never stopped.
    # Compare LAST-FIRED DATES, never 7-day sums. A single manual test leaves
    # runtime events sitting in a sum window for a week and masks a live break.
    RUNTIME = ("page_view", "scroll", "user_engagement")
    STANDALONE = ("generate_lead", "book_call_click", "whatsapp_click", "email_click")
    STALE_DAYS = 2  # standalone traffic today + runtime silent this long = broken

    runtime_last, standalone_last = _last(RUNTIME), _last(STANDALONE)
    runtime_age = None if runtime_last is None else (TODAY - runtime_last).days

    if standalone_last is not None and (TODAY - standalone_last).days <= STALE_DAYS \
            and (runtime_age is None or runtime_age > STALE_DAYS) and hours_live >= 48:
        fail(f"Google tag runtime is DEAD. Standalone GTM event tags last delivered "
             f"{_ago(standalone_last)}, but page_view/scroll/user_engagement last "
             f"delivered {_ago(runtime_last)}. Those only come from the gtag runtime, "
             f"so the Google tag is not executing for real users even though "
             f"conversions look healthy. Check the Google tag's LINKED DESTINATIONS "
             f"in Google Ads -> Tools -> Google tag; that is invisible to this script "
             f"and to the GTM API, and it is where the 2026-07 break actually lived.")
    elif runtime_age is not None and runtime_age <= STALE_DAYS:
        note(f"gtag runtime alive: page_view/scroll/user_engagement last fired "
             f"{_ago(runtime_last)}")
    else:
        warn(f"gtag runtime last fired {_ago(runtime_last)} and standalone tags "
             f"{_ago(standalone_last)}. Not enough recent traffic to judge.")

    # CHECK 5 — a lead event that fires but is not flagged is invisible to Ads bidding.
    admin = AnalyticsAdminServiceClient(credentials=service_account.Credentials.from_service_account_file(
        KEY, scopes=["https://www.googleapis.com/auth/analytics.readonly"]))
    flagged = {}
    for k in admin.list_key_events(parent=GA4_PROPERTY):
        flagged[k.event_name] = k.create_time
    for ev in sorted(LEAD_EVENTS):
        fired = counts.get(ev, (0, 0))[0]
        if ev not in flagged:
            (fail if fired else warn)(
                f"lead event '{ev}' is NOT a GA4 key event"
                + (f" and fired {fired}x in the last 7 days, so those leads are not counted "
                   f"as conversions and Google Ads cannot bid on them." if fired
                   else " (it also did not fire this week, so this may be intentional)."))
        else:
            note(f"key event registered: {ev} (since {flagged[ev]:%Y-%m-%d})")

    # CHECK 6 — a retired event still flagged is how a renamed conversion hides a real one.
    for ev, created in flagged.items():
        if ev in ("purchase",) or ev in LEAD_EVENTS:
            continue
        if counts.get(ev, (0, 0))[0] == 0:
            warn(f"key event '{ev}' is still flagged but has not fired in 7 days. If it was "
                 f"renamed, retire it so reports do not split across the old and new name.")

    # ── report ───────────────────────────────────────────────────────────────
    print("=" * 72)
    print(f"TRACKING HEALTH  {datetime.date.today()}  container {GTM_PUBLIC_ID} / {GA4_PROPERTY}")
    print("=" * 72)
    for n in notes:    print(f"  ok    {n}")
    for w in warnings: print(f"  WARN  {w}")
    for f in failures: print(f"  FAIL  {f}")
    print("-" * 72)
    if failures:
        print(f"{len(failures)} failure(s), {len(warnings)} warning(s). Tracking is BROKEN.")
        return 1
    print(f"0 failures, {len(warnings)} warning(s). Tracking is healthy.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
