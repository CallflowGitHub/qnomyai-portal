# Q-nomy AI Portal — Agent Instructions

Static vanilla JS/HTML/CSS portal. No build step, no framework, no dependencies, no backend. Current version: **V1.2.0**.

## Overview

The portal is a multi-section single-page app with four tabs: **Weekly Brief**, **AI Projects**, **Skills Repo**, and **Model Comparison**. Weekly Brief and Model Comparison are fully implemented; AI Projects and Skills Repo show a "coming soon" placeholder. Both Weekly Brief and Model Comparison support bilingual display (English / Hebrew) via `data-en` / `data-he` attributes and a per-panel language toggle bar.

## Architecture

| File | Role |
|------|------|
| [js/news.js](js/news.js) | **News data** — edit this to add/update articles. Defines `NEWS_ITEMS` (current week) and `ARCHIVE_WEEKS` (history). Supports bilingual `{ en: "...", he: "..." }` objects for `title`, `description`, and `category`. |
| [js/model-data.js](js/model-data.js) | **Model Comparison data** — defines the `MODEL_COMPARISON` global with `coding` and `text` leaderboard sections. Edit here to update rankings. |
| [js/app.js](js/app.js) | **App logic** — tab switching, language toggle, renders all cards/sections and comparison tables into DOM, handles toggle interactions, date display. |
| [css/styles.css](css/styles.css) | **CSS entry point** — imports the split CSS modules below. |
| [css/base.css](css/base.css) | Base reset, CSS variables (colors, spacing), header, footer, shared utilities. |
| [css/brief.css](css/brief.css) | Styles specific to the Weekly Brief panel (cards, archive, filter bar). |
| [css/comparison.css](css/comparison.css) | Styles specific to the Model Comparison panel (leaderboard table, hero, badges). |
| [css/responsive.css](css/responsive.css) | Media queries and responsive overrides for all panels. |
| [index.html](index.html) | **Structure** — sticky header, tab nav, four tab panels, footer. Script load order matters. |
| [assets/](assets/) | **Images** — logo PNG and coming-soon image referenced across the site. |

**Script load order** (must be preserved):
```html
<script src="js/news.js"></script>        <!-- defines NEWS_ITEMS, ARCHIVE_WEEKS globals -->
<script src="js/model-data.js"></script>  <!-- defines MODEL_COMPARISON global -->
<script src="js/app.js"></script>         <!-- consumes those globals -->
```

## Common Tasks

**Add a news item**: Push an object to `NEWS_ITEMS` in [js/news.js](js/news.js). Bilingual fields are supported:
```js
{
  title:       { en: "...", he: "..." },
  description: { en: "...", he: "..." },
  category:    { en: "Research", he: "מחקר" },
  date: "Apr 28, 2026",
  source: "Source Name",
  url: "https://..."   // optional
}
```
Plain strings are also accepted. `url` is optional. `category` drives the badge color (no enum — any string works).

**Move current items to archive**: Move `NEWS_ITEMS` contents into a new entry in `ARCHIVE_WEEKS` in [js/news.js](js/news.js). The `week` field also supports bilingual:
```js
{ week: { en: "Week of Apr 21, 2026", he: "שבוע 21 באפריל 2026" }, items: [ /* moved items */ ] }
```

**Change colors**: Modify CSS variables in `:root` in [css/styles.css](css/styles.css). Key vars: `--orange` (`#ff6a00`), `--bg-base`, `--bg-card`.

**Modify card layout/template**: Edit `buildCard()` in [js/app.js](js/app.js).

**Update Model Comparison data**: Edit the `MODEL_COMPARISON` object in [js/model-data.js](js/model-data.js). Each leaderboard section has a `columns` array and a `rows` array. Bilingual strings (`{ en: "...", he: "..." }`) are supported in row cells.

**Add a new portal section**: Add a tab button in `index.html` (inside `.tab-nav-inner`) and a corresponding `<div class="tab-panel tab-panel--hidden" id="panel-xxx">` block. The tab switching logic in `app.js` is data-driven and will pick it up automatically.

**Add a language toggle to a panel**: Copy the `.lang-toggle-bar` block from `panel-brief` or `panel-compare` and paste it at the top of the new panel. No JS changes needed — `setLanguage()` targets all `.lang-btn` elements document-wide.

**Implement a "coming soon" panel**: Add a `<div class="comingsoon-wrap"><img src="assets/qnomyai_comingsoon.png" ...></div>` inside the panel.

## Conventions

- **HTML safety**: Always use `escHtml()` (defined in [js/app.js](js/app.js)) when inserting text into DOM. Never bypass this.
- **Bilingual text**: Use `data-en="..."` / `data-he="..."` attributes on elements that need language switching. The `setLanguage()` function in `app.js` reads these and updates `textContent` site-wide, sets `dir` (RTL/LTR) on panels, and keeps all `.lang-btn` active states in sync.
- **Language toggle placement**: Each panel that supports bilingual content has its own `.lang-toggle-bar` at the top. All toggle buttons share the same `.lang-btn` class — clicking any one updates the whole site.
- **Interactivity state**: `aria-expanded="true|false"` on buttons is the source of truth for toggle state — check/set this, not a separate variable.
- **Collapse animation**: Add/remove `.collapsed` CSS class to show/hide sections. Do not use `display:none` or inline styles.
- **Tab panels**: Use `tab-panel--hidden` class to hide non-active panels. The tab switching logic in `app.js` manages this automatically.
- **Scope isolation**: [js/app.js](js/app.js) uses IIFE `(function(){ ... })()` — maintain this pattern in new scripts.
- **No globals**: Do not add properties to `window` or declare globals, except for the `NEWS_ITEMS`/`ARCHIVE_WEEKS` data contract between [news.js](news.js) and [app.js](app.js).

## Running Locally

```bash
python -m http.server 8000
# or
npx http-server
```
VS Code `launch.json` is pre-configured — press **F5** to launch Chrome.

## Deployment

Drop all files on any static host (Netlify, Vercel, GitHub Pages, S3). No build step needed.
