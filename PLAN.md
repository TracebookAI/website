# Tracebook landing page — plan

A single-page static landing site for `tracebook.ai`. Fast to ship, zero
runtime, hostable on GitHub Pages.

---

## Audience and positioning

**Primary audience:** owners / GMs / heads-of-service at small-to-mid
machine OEMs. People who personally answer customer 3 a.m. calls and
know which technician each kind of question routes to.

**Secondary:** technical leads at those OEMs who'll vet feasibility
("does this actually work with my PDFs?").

**Not the audience:** end customers of those OEMs. They land in the
deployed customer-portal, never the marketing site.

**Positioning, in one line:**

> AI tech support for machine OEMs. Your manuals, your tickets, your
> brand — answers grounded in your own documents.

**Differentiators worth leading with:**

1. **Single-tenant, white-label.** The customer-facing UI carries the
   OEM's brand and logo; data never crosses tenants.
2. **Grounded citations.** Every AI answer points back to a specific
   page of a specific manual. No hallucinated procedures.
3. **Tickets feed the loop.** Resolved support cases become
   structured KB entries that future customer chats retrieve from.
4. **Multi-modal.** Customer attaches a phone photo of an HMI screen
   or a 60-second video; the system describes it and uses that
   description in the search.
5. **Built by people who run a real one.** Royal Master Grinders is
   live on it; not a demo, not a deck.

---

## Page structure

One scrolling page. Sections in order:

```
┌─ HERO ────────────────────────────────────────────────────────┐
│  [eyebrow] AI tech support for machine OEMs                   │
│  [H1]      Your manuals.                                      │
│            Your customers.                                    │
│            Your brand.                                        │
│  [sub]     Tracebook turns your shelf of PDFs, your YouTube   │
│            backlog, and your historical tickets into a        │
│            sourced, cited AI tech support agent — under your  │
│            own logo and domain.                               │
│  [CTAs]    Book a demo · Watch the 4-minute walkthrough       │
│  [media]   embedded retrieval-explainer.mp4 (autoplay muted)  │
│                                                               │
│                                                          MIIOT│
└───────────────────────────────────────────────────────────────┘

┌─ THE PROBLEM ─────────────────────────────────────────────────┐
│  Three pain bullets, illustrated with editorial typography.   │
│  - It's 2 a.m. and the customer wants help                    │
│  - Your manuals are scattered across PDFs, drawings, videos,  │
│    and an inbox                                               │
│  - The same 30 questions get asked 100 times a year           │
└───────────────────────────────────────────────────────────────┘

┌─ HOW IT WORKS ────────────────────────────────────────────────┐
│  3 numbered steps with iconography:                           │
│   ① Upload your stuff (manuals, drawings, reference docs,     │
│     YouTube videos, historical case files).                   │
│   ② Customer asks a question — typed, image, or short video.  │
│   ③ AI answers with citations. Unresolved chats become        │
│     tickets routed to your team.                              │
└───────────────────────────────────────────────────────────────┘

┌─ FEATURE GRID (3×2) ──────────────────────────────────────────┐
│  Six tiles:                                                   │
│   - Cited answers, not guesses                                │
│   - Per-machine knowledge base                                │
│   - White-label brand and domain                              │
│   - Image + video understanding                               │
│   - Ticket → KB feedback loop                                 │
│   - Hosted on Google Cloud, your data, your tenant            │
└───────────────────────────────────────────────────────────────┘

┌─ LIVE CUSTOMER (case study lite) ─────────────────────────────┐
│  "Royal Master Grinders has been live on Tracebook since      │
│   {date}. {N} machines, {M} manuals, {Q} customer chats."     │
│  Royal Master logo + a one-line quote (placeholder until we   │
│  get one from John).                                          │
└───────────────────────────────────────────────────────────────┘

┌─ TECHNICAL DEPTH (collapsible) ───────────────────────────────┐
│  For the secondary audience. One paragraph + three links:     │
│   - The retrieval pipeline (embed retrieval-explainer.mp4)    │
│   - The vocabulary catalog (embed vocab-explainer.mp4)        │
│   - "How ingestion works" — link to public doc snippet        │
└───────────────────────────────────────────────────────────────┘

┌─ PRICING (placeholder) ───────────────────────────────────────┐
│  No published numbers in v1. Soft framing:                    │
│   "Per-OEM SaaS. Pricing scales with your machine fleet and   │
│    document volume. Reach out for a quote."                   │
│  Single button: "Get a quote".                                │
└───────────────────────────────────────────────────────────────┘

┌─ FAQ (5-7 entries) ───────────────────────────────────────────┐
│  - Where does my data live?                                   │
│  - What happens if the AI doesn't know the answer?            │
│  - How long does setup take?                                  │
│  - Do you train on my data?                                   │
│  - What machines / industries does this work for?             │
│  - Can I use my own logo / domain?                            │
│  - What does it cost?                                         │
└───────────────────────────────────────────────────────────────┘

┌─ CONTACT / CTA ───────────────────────────────────────────────┐
│  Big editorial:                                               │
│   "Want to see it on your data?"                              │
│   button:    Email cmisztur@mriiot.com                        │
└───────────────────────────────────────────────────────────────┘

┌─ FOOTER ──────────────────────────────────────────────────────┐
│  Tracebook, a publication of MRIIOT.                          │
│  © 2026 · Privacy · Terms (link out — placeholders for now)   │
└───────────────────────────────────────────────────────────────┘
```

---

## Aesthetic direction

Reuse the **retrieval-explainer** editorial-lab aesthetic so the site,
the videos, and the product all read as one publication.

- **Palette:** paper `#FAF8F3` background, deep ink `#1A1A1A` body,
  gold `#D4A93C` accent, dense-coral `#E84F3D` for problem framing,
  visual-forest `#2D6E47` for resolution states.
- **Type:** Fraunces (display, italic + opsz/SOFT/WONK axes), Public
  Sans (body), JetBrains Mono (technical labels).
- **Layout:** generous margins, single-column hero, hairline rules,
  numbered chapters in mono. No card shadows; structure via 1px ink
  borders. Logo bug bottom-right with multiply-blend, like the videos.
- **Motion:** minimal. One hairline rule sweep on scroll into each
  section. No parallax, no Lottie, no scroll-jacking.

---

## Tech stack

**Pure static HTML + Tailwind via CDN.** No build step, no JS bundler,
no React. Reasoning:

1. The site is content, not an app. A build step adds setup cost
   without buying anything for v1.
2. Hosting on GitHub Pages from `main` is a one-line config.
3. Edits propagate via `git push` with no rebuild dance.

```
website/
├── index.html              one file, ~600 lines
├── assets/
│   ├── logo-tracebook.svg  (need to create — sibling of MRIIOT bug)
│   ├── logo-mriiot.png     (copy from marketing/remotion/app/public)
│   ├── favicon.svg
│   ├── og-image.png        (1200×630 for social previews)
│   ├── retrieval-explainer.mp4   (copy from marketing/.../out/)
│   └── vocab-explainer.mp4       (copy from marketing/.../out/)
├── _config.yml             Jekyll/GH Pages config (just disables jekyll)
├── CNAME                   tracebook.ai
└── README.md               (one paragraph, this PLAN.md replaces real docs)
```

**Why Tailwind CDN over hand-rolled CSS:** the editorial aesthetic
needs a lot of utility-class precision (margin scales, letter-spacing
options) that's tedious in vanilla CSS but trivial with Tailwind. CDN
keeps the no-build property.

**Why one HTML file:** zero include / partial complexity. Easy diffs.
If we ever need a /privacy or /terms page, those become sibling
files — trivial.

---

## Domain + hosting

Two paths, ranked by speed-to-live:

1. **GitHub Pages on the existing repo** (recommended for v1)
   - Settings → Pages → branch `main`, folder `/`
   - Add a `CNAME` file with `tracebook.ai`
   - Point the domain's apex A records at GitHub's IPs (`185.199.108.153`
     family) and `www` CNAME at `tracebookai.github.io`
   - HTTPS handled automatically by GitHub via Let's Encrypt
   - Cost: $0
   - Deploy: `git push` to `main`

2. **Cloudflare Pages** (defer unless we need edge functions)
   - Same source repo, build command `none`, output dir `/`
   - Slightly faster CDN globally; nicer rollback UI
   - Adds a third party to manage. Worth it later if we add forms,
     analytics, A/B tests.

---

## Copy direction

The site must read like the retrieval-explainer videos sound: precise,
unhurried, a little dry. **Not** SaaS marketing fluff.

- **Avoid:** "Revolutionary", "AI-powered", "leverage", "unlock", any
  exclamation marks.
- **Lean into:** specific numbers, real terms (manuals, schematics,
  drawings, ticket #4521), the kind of language an OEM service manager
  uses with a customer on the phone.
- **Tone reference:** the meeting transcript with John, not a Stripe
  homepage.

Sample copy (heroes, taglines, FAQ answers) lives in §"Sample copy" at
the bottom of this plan.

---

## What's NOT in v1

Scope discipline. The following are explicitly deferred:

- **Live form on the page.** Email link only. Forms imply an
  inbox-watcher; we don't have one.
- **Analytics.** No GA, no Plausible, no anything. Add when there are
  enough referrers to bother measuring.
- **A blog.** No news / changelog section. If we ship one later it
  goes at `/blog/`, not on the index.
- **Authenticated demo.** No "request access" flow. The contact link
  goes to email; demos are scheduled by hand.
- **i18n.** English only.
- **Dark mode.** The editorial aesthetic is paper-on-ink — light mode
  by design.

---

## Sequencing

**Round 1 (1 day):** scaffold + hero + footer + ship to GitHub Pages
under the apex domain. Even with placeholder body copy, the hero +
brand + video makes it deck-worthy.

**Round 2 (½ day):** problem, how it works, feature grid. Real copy.

**Round 3 (½ day):** customer logo strip, technical depth, FAQ, CTA.

**Round 4 (¼ day):** OG/Twitter card image, favicon, polish pass,
performance check (Lighthouse target: 100/100/100/100).

Total: ~2.25 working days from "go" to public.

---

## Sample copy

Drafts you can edit or trash before I lock them in.

### Hero

> **eyebrow:** AI tech support for machine OEMs
>
> **H1:** Your manuals. Your customers. Your brand.
>
> **sub:** Tracebook turns your shelf of PDFs, your YouTube backlog,
> and your resolved-ticket history into a sourced, cited AI tech
> support agent — running under your own logo and domain.

### The problem

> **It's 2 a.m. and the customer wants help.**
> Your service manager is asleep. The right answer is in a 400-page
> manual that nobody else on the team has read cover-to-cover. The
> customer ends up off-spec or off-line until morning.

> **Your knowledge is scattered.**
> Manuals in Dropbox, drawings on a shared drive, training videos on
> YouTube, the *real* answers in a five-year-old email thread. Even
> your senior tech can't find the one PDF where it's documented.

> **The same questions, again and again.**
> "Linear motor not moving" comes in twelve times a year. The fix is
> always the cable transport module. Nobody wrote it down.

### How it works

> **① You upload what you've got.**
> PDFs of operating manuals, electrical schematics, mechanical
> drawings. YouTube links. Photos of HMI screens. Resolved ticket
> threads from your past customer support work. We index all of it,
> by machine model and customer.

> **② Your customer asks a question.**
> Typed, or as a phone photo of a fault screen, or as a 30-second
> video clip of the noise the machine is making. The system reads it,
> retrieves the relevant pages of the relevant manuals, and answers.

> **③ Every claim is cited.**
> The answer points back to the exact page of the exact document.
> If the AI doesn't know, the chat escalates into a ticket routed
> to your team. Every resolved ticket becomes a new entry in the
> knowledge base, so the next customer with the same question
> doesn't have to wait.

### FAQ stubs

- **Where does my data live?** In your dedicated tenant on Google
  Cloud. Each OEM is a separately deployed instance. Your data does
  not cross tenant boundaries.
- **What happens if the AI doesn't know the answer?** The chat
  escalates into a ticket. A real technician on your team takes over;
  the customer can attach files; the conversation continues until
  resolved. The resolved ticket becomes structured knowledge for
  future chats.
- **Do you train on my data?** No. Your data is not used to train
  any third-party model. Inference happens on Google Vertex AI;
  retrieval happens against your tenant's own vector index.
- **How long does setup take?** Two weeks for a typical OEM with
  ~10 machines and ~50 manuals. The bulk of the time is uploading
  content, which we can run alongside you.

---

## Open questions

Things I'd like your call on before scaffolding:

1. **Domain:** is `tracebook.ai` registered? If not, who's registering
   it and on which account?
2. **Royal Master case study:** OK to mention by name + one quote, or
   keep generic ("a precision-grinder OEM with 50+ machines deployed")
   until we have written approval from John?
3. **Embedded videos:** ship `retrieval-explainer.mp4` (3:36, technical
   depth) and `vocab-explainer.mp4` (3:30, training)? Or hero-only
   with the marketing piece (`retrieval-marketing.mp4`, 1:27, sales)?
4. **Logo:** does Tracebook have a wordmark distinct from the MRIIOT
   bug, or do we generate one in the same editorial Fraunces italic
   style as the video titles?
5. **Email destination:** `cmisztur@mriiot.com` for v1, or do we want
   `hello@tracebook.ai` set up with a forwarder?

If you say "go" without answering, I'll default: domain TBD (placeholder
GH-pages URL), Royal Master generic until quote arrives, all three
videos linked but only the marketing piece embedded in hero, generated
wordmark, your email.
