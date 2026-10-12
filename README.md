# sports2

A personal sports-schedule site with a Swedish UI, hosted on GitHub Pages at https://dannebq.github.io/sports2/.

It is plain HTML, CSS and JavaScript, with no build step and no dependencies to install.

## What's here

| Path | Description |
| --- | --- |
| `index.html`, `app.js`, `styles.css` | The main schedule app: an overview ("Översikt") plus per-sport tabs (F1, Allsvenskan, Svenska Cupen, Diamond League, handball, Fotbolls-VM, and off-season winter sports). |
| `vm/tipping.html` | VM-tipset 2026, a World Cup prediction game for a group of friends. |
| `vm/admin.html` | Admin page for entering VM-tipset results. |
| `vm/group-stats.html` | Stats page for VM-tipset. |
| `allsvenskan.html` | Allsvenskan standings. |
| `nfl-playoffs.html` | NFL playoffs bracket/schedule. |
| `murder-mystery.html`, `mystery-2.html` | Standalone React mystery games. |

## Running locally

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000/.

## Backend

Schedules in `app.js` are static data, edited by hand. VM-tipset and `allsvenskan.html` store data in [Supabase](https://supabase.com/). The anon key is in the client code, so access control relies on Supabase row-level security.

## Deployment

Every push to `main` deploys the repo root to GitHub Pages via `.github/workflows/deploy.yml`. There is no staging, so make changes on a branch and open a pull request.

See [CLAUDE.md](CLAUDE.md) for more detail on the code layout and conventions.
