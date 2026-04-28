# tracebook.ai — landing page

Single-page static landing site for Tracebook. Pure HTML + Tailwind via
CDN. No build step, no JS framework, no runtime dependencies. Hosted on
GitHub Pages.

## Files

```
index.html                One-page site, ~700 lines.
assets/
  demo-conversation.json  Hero chat-replay transcript.
  retrieval-marketing.mp4 1:27 sales reel.
  retrieval-explainer.mp4 3:36 technical pipeline walkthrough.
  vocab-explainer.mp4     3:30 vocabulary catalog explainer.
  mriiot-logo-glow.png    Publication mark, bottom-right of every page.
.nojekyll                 Tells GH Pages to skip Jekyll processing.
_config.yml               Same intent — no theme, no plugins.
PLAN.md                   Original scope doc + sample copy.
```

## Local preview

```sh
# any static server. python is fine.
python -m http.server -d . 8000
# → http://localhost:8000
```

## Deploy

Push to `main`. GitHub Pages serves from the repo root. Add a `CNAME`
file when the apex domain is wired up.

## Updating the demo chat

The transcript is **inlined** into `index.html` inside a
`<script id="chat-transcript" type="application/json">` block — that
keeps the page working when opened directly via `file://` (no local
server needed). The sibling `assets/demo-conversation.json` is the
canonical schema reference but isn't fetched at runtime.

Schema:

```json
{
  "machine": { "model": "...", "serial": "...", "customer": "..." },
  "turns": [
    {
      "role": "user" | "assistant",
      "delay_ms": 800,                  // wait before this turn appears
      "thinking_ms": 2000,              // assistant only — typing-dots beat
      "text": "markdown-ish text",      // **bold**, numbered lists supported
      "citations": [                    // assistant only
        { "n": 1, "type": "manual" | "drawing" | "historical_case" | "youtube" | "document",
          "title": "...", "page": "p178" }
      ],
      "resolved": true                  // optional — flips footer status to "resolved"
    }
  ]
}
```
