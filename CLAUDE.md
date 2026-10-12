# sports2

Personal sports-schedule site (Swedish UI) hosted on GitHub Pages. Plain HTML/CSS/JavaScript — no build step, no package manager, no tests.

## Running locally

Serve the repo root with any static server and open it in a browser:

```bash
python3 -m http.server 8000
```

Then visit http://localhost:8000/. Opening the HTML files directly via `file://` mostly works, but the Supabase-backed pages behave best over HTTP.

## Deployment

Every push to `main` deploys the whole repo root to GitHub Pages (`.github/workflows/deploy.yml`). There is no staging — anything merged to `main` is live. Work on a branch and open a PR.

## Layout

- `index.html` + `app.js` + `styles.css` — the main schedule app.
  - `app.js` starts with one hard-coded data array per sport (`biathlonSchedule`, `f1Schedule`, `allsvenskanSchedule`, …), followed by a `create<Sport>Table` / `display<Sport>Schedule` pair per sport, `getAllEvents()` / `displayOverview()` for the "Översikt" tab, and the nav click handler at the bottom that maps `data-team` to a display function.
  - Off-season sports stay in the code but their nav buttons are hidden with `style="display:none"` in `index.html`.
- `vm/` — VM-tipset 2026, a World Cup prediction game for a group of friends.
  - `tipping.html` / `tipping.js` / `tipping.css` — the player-facing app.
  - `admin.html` / `admin.js` / `admin.css` — admin page for entering results.
  - `group-stats.html` — standalone stats page.
  - `flags/` — country flag images.
- `allsvenskan.html`, `nfl-playoffs.html` — standalone pages with inline scripts.
- `murder-mystery.html`, `mystery-2.html` — standalone React games, transpiled in the browser via Babel standalone and styled with the Tailwind CDN.

## Data and backend

- Schedules in `app.js` are static data, edited by hand.
- `vm/` and `allsvenskan.html` use Supabase (`supabase-js@2` from jsDelivr). Tables: `players`, `match_tips`, `match_results`, `group_tips`, `medal_tips`, `medal_results`, `allsvenskan_standings`. The anon key is in the client code, so access control depends on Supabase row-level security.
- `vm/tipping.js` stores UI state in `localStorage` under `wc26-*` keys, always wrapped in `try/catch`.

## Adding or updating a sport in the main app

1. Add or edit the `<sport>Schedule` array near the top of `app.js`, matching the shape of existing entries.
2. Add `create<Sport>Table` and `display<Sport>Schedule` functions next to the others.
3. Include its events in `getAllEvents()` if they should appear in the overview.
4. Add a `.team-btn` with a `data-team` value in `index.html`, and a branch for it in the nav click handler at the bottom of `app.js`.

## Conventions

- UI text is in Swedish; dates are written Swedish-style (e.g. "29 november") and parsed by `parseDate()` in `app.js`.
- 4-space indentation, vanilla JS (no modules, no framework) in `app.js` and `vm/`.
- The site is mainly used on phones (installed as a home-screen web app), so check changes at mobile width.
- No automated tests: verify changes by loading the affected page in a browser and checking the console for errors.
