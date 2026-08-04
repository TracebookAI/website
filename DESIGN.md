# tracebook.ai — 3-vertical hub redesign

Status: v0 IN PROGRESS · 2026-08-04 · supersedes PLAN.md (kept for
history — its single-page OEM landing becomes the /machine-oems
vertical).

## Why the rebuild

Tracebook is no longer one pitch. Three verticals, three audiences,
three demos:

| Vertical | Audience | The demo | AI presented as |
|---|---|---|---|
| `/machine-oems` | OEM owners / heads-of-service | support-demo instance | inline chat widget (v1) framed "what YOUR customers see, in YOUR brand" + "explore the full portal" demo login |
| `/maintenance` | plant / maintenance managers | maintenance-demo instance | guided WORKFLOW walkthrough (operator files ticket w/ photo → tech's Investigate-with-AI cited session) + live portal links w/ demo accounts. A lone chat box can't sell a two-sided workflow. |
| `/automotive` | everyone (the flagship wow) | automotive-demo instance (Viper manuals, Stellantis small-scale permission) | inline NO-LOGIN live search widget: model/year picker + one box, cited answer streams on the page (v1) |

The hub (`/`) sells the product line in one screen and routes by
audience; each vertical page carries its own story + demo.

## Stack

- **Astro** (static output — GitHub Pages stays the host, CNAME
  tracebook.ai unchanged). No client framework for v0; the existing
  vanilla-JS chat replay ports as-is (`is:inline`).
- **Styling**: same editorial system as today — Tailwind Play CDN +
  the paper/ink/gold palette config, Fraunces + Public Sans, dotted
  grid. Lives once in `src/layouts/Base.astro`. (A build-time
  Tailwind can replace the CDN later without touching content.)
- **Deploy**: GitHub Actions (withastro/action → Pages). NOTE: the
  repo currently deploys "from branch"; flipping Pages to
  workflow-builds happens at cutover time, deliberately — pushing
  main before the flip must not break the live site (the workflow is
  additive; the old index.html is removed only in this rebuild's
  commit, so the cutover IS the push+flip together).

## Site structure

```
src/layouts/Base.astro     head (fonts/palette/grid) + nav + footer + MRIIOT mark
src/pages/index.astro      HUB: hero, three vertical cards, condensed how-it-works, CTA
src/pages/machine-oems.astro   ported current landing (hero + chat replay, problem,
                               how, features, live customer, pricing, FAQ, CTA)
src/pages/maintenance.astro    workflow story: 3-step walkthrough (report → investigate
                               → knowledge that compounds), demo CTAs (disabled until VM)
src/pages/automotive.astro     search story: widget slot (placeholder until /api/demo/*),
                               how citations work, Stellantis-permission footnote
public/assets/*            existing videos/logos carried over
```

Nav (all pages): Machine OEMs · Maintenance Teams · Car Manuals (live
demo) · Get a demo (mailto, unchanged).

## The demo widget (v1 — not in this pass)

One embeddable bundle, one contract, two verticals:

- `<div data-tracebook-demo="automotive" data-api="https://search.automotive.demo.tracebook.ai">`
- Widget = slim search box + model/year picker + streamed cited
  answer (a distilled ChatSession, no auth UI).
- Talks to the instance's `/api/demo/*` no-auth surface (server-side
  demo-tenant impersonation, ephemeral TTL sessions, per-IP rate
  limit + Gemini token caps, CORS locked to https://tracebook.ai).
- Until that exists, both vertical pages ship a designed placeholder
  ("live demo coming online") so v0 never shows a broken box.

## v0 acceptance

- `astro build` green; pages render with the current visual language.
- Hub + three verticals + ported OEM content; all internal links work.
- Workflow file present but Pages cutover NOT flipped (explicit op).
- Old root index.html removed in the same commit (cutover atomicity).
