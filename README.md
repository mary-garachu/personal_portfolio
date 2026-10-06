# Mary Garachu — portfolio

Personal site for Mary Muthoni Garachu, front-end developer.
Live at <https://mary-garachu.netlify.app/>.

This is a plain static site: HTML, one CSS file and a three-line script.
There is **no build step, no framework and no dependencies** — every page's
content is in its HTML source, so search engines, link previews (LinkedIn,
WhatsApp, X) and simple fetchers all see the real content.

## Files

```
index.html                      Home: hero, work, route here, toolkit, contact
projects/<slug>/index.html      Case studies: nala-trails-safaris, spirealm, ezra-enterprise
404.html                        Netlify serves this for unknown URLs
assets/css/site.css             All styles (colour tokens at the top)
assets/js/site.js               Updates the footer year; the only script
assets/img/                     Portrait, project screenshots (webp), og-*.jpg link-preview images
favicon.svg
robots.txt, sitemap.xml         Crawling + sitemap (home and all three case studies)
netlify.toml                    Publish ".", no build command
```

## Run it locally

The home page works by just opening `index.html` in a browser. Links between
pages use folder URLs (`projects/spirealm/`), so to click around the whole site
serve the folder instead:

```sh
python3 -m http.server 8000
# then open http://localhost:8000
```

Any static file server works (`npx serve`, VS Code Live Server, …).

## Deploy to Netlify

`netlify.toml` sets **publish directory `.`** and a **no-op build command**
(`echo …`), and both override whatever is set in the Netlify dashboard. So:

1. Push to the branch Netlify deploys from (`master`). Done.

Don't change the command to `""`: Netlify treats an empty command as unset
and falls back to the dashboard's build command, which for this site was the
old React app's `npm run build` (that's what broke the first deploy). It's
also worth opening *Site configuration → Build & deploy* and clearing the old
build command and `build` publish directory so the dashboard doesn't
contradict the file.
Without Git: drag the project folder onto the Netlify "Deploys" page.

If the site ever moves off `mary-garachu.netlify.app`, update the URL in:
every page's `<link rel="canonical">`, `og:url`, `og:image` and
`twitter:image` tags, the JSON-LD on `index.html`, `robots.txt` and
`sitemap.xml`.

## Before publishing: TODO callouts

The case studies contain yellow-bordered boxes labelled
**"TODO — fill in before publishing"** wherever a fact wasn't available.
They're visible on the page on purpose. Replace each one with real content
(or delete it), and replace the "To be confirmed" values in each page's
meta block. To find them all:

```sh
grep -n 'class="todo"' projects/*/index.html
```

### Nala Trails Safaris — `projects/nala-trails-safaris/index.html` (6)

1. **Meta block** — your role; start/end dates; confirm the stack. (WordPress
   with a custom `nala-trails-safaris` theme on Understrap was read from the
   live site's source on 6 Oct 2026.) Add plugins/services you set up.
2. **The problem** — check against the client's real brief; add their goal.
3. **What I built** — confirm which listed features you built (they were taken
   from the live site/screenshot), and add what a screenshot can't show.
4. **Decision: "Search before scroll"** — why the trip search sits in the hero.
5. **Decision: "A custom theme rather than an off-the-shelf one"** — why.
6. **Results** — launch date, enquiries/bookings, speed scores, client quote.

### Spirealm — `projects/spirealm/index.html` (6)

1. **Meta block** — your role; dates; the stack (couldn't be checked).
   ⚠️ **spirealm.com did not resolve on 6 Oct 2026** (no such domain), so the
   "Live site" link is dead. Update it or remove it.
2. **The problem** — check against the real brief.
3. **What I built** — confirm; list the About/Services/Contact pages, forms etc.
4. **Decision: "Values ahead of services"** — why.
5. **Decision: "One colour, one photo"** — why, or swap for another decision.
6. **Results**.

### Ezra Enterprise — `projects/ezra-enterprise/index.html` (6)

1. **Meta block** — your role; dates; the stack (couldn't be checked).
   ⚠️ **ezraenterprise.co.ke did not resolve on 6 Oct 2026**, so the
   "Live site" link is dead. Update it or remove it.
2. **The problem** — check against the real brief.
3. **What I built** — confirm; list Subsidiaries/Projects/CSR/News pages etc.
4. **Decision: "Sectors as the opening structure"** — why the carousel is by sector.
5. **Decision: "Subsidiaries as a top-level section"** — why.
6. **Results**.

### Also worth a read

- **Narrative copy on the home page** (hero intro, "Route here" intro and the
  sentence under each timeline entry) was written from the facts in the old
  site. The facts are unchanged, but the voice is new — make sure it sounds
  like you.
- The old About text said "2 years of experience" and "over 10 projects in the
  past 2 years". It was written in 2024 and is now out of date, so it was left
  out. Add updated numbers if you want them.
- The case-study one-liners and "The problem" sections were inferred from the
  type of client and what the sites show; that's why each has a TODO.

## Editing

- **Colours** are tokens at the top of `assets/css/site.css`
  (`--court`, `--ink`, `--line`, `--paper`, `--lane`).
- **Fonts**: Anybody (headings, a variable-width face) and Source Serif 4
  (body), both from Google Fonts.
- **Adding a project**: copy a folder in `projects/`, update its `<title>`,
  description, canonical/OG tags and content; add a row to the Work section
  of `index.html`; add its URL to `sitemap.xml`; add a 1200×630 `og-<slug>.jpg`
  to `assets/img/` for link previews.
- **Images**: use webp for page images, and keep the `width`/`height`
  attributes so the layout doesn't jump while images load. Every image needs
  descriptive `alt` text.
