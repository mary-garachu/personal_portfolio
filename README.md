# Mary Garachu — portfolio

Personal site for Mary Muthoni Garachu, front-end developer.
Live at <https://mary-garachu.netlify.app/>.

The home page is a React + Vite app. The case studies under `projects/` are
plain static HTML pages served as-is from `public/`.

## Files

```
index.html                      Vite entry: SEO meta tags, Open Graph, JSON-LD
src/main.jsx                    Imports organic-tokens.css + App.css, hydrates <App/>
src/entry-server.jsx            Renders <App/> to HTML for the pre-render step
scripts/prerender.js            Writes the rendered HTML into dist/index.html
src/App.jsx                     <Nav/> <main> sections </main> <Footer/>
src/data.js                     All home-page content (experience, projects, skills, …)
src/components/                 Nav, Hero, About, Experience, Projects, Skills, Contact, Footer
src/organic-tokens.css          Design tokens + .btn/.card/.tag/.washed classes
src/App.css                     Section styles (tokens only, no raw hex)
public/projects/<slug>/         Static case studies: nala-trails-safaris, spirealm, ezra-enterprise
public/404.html                 Netlify serves this for unknown URLs
public/assets/css/site.css      Styles for the case studies and 404 page
public/assets/js/site.js        Footer year on the case studies
public/assets/img/              Portrait, project screenshots (webp), og-*.jpg link-preview images
public/assets/Mary-Muthoni-Resume.pdf
public/favicon.svg, robots.txt, sitemap.xml
netlify.toml                    Build "npm run build", publish "dist"
```

## Run it locally

```sh
npm install
npm run dev        # dev server with hot reload
npm run build      # production build into dist/, home page pre-rendered
npm run preview    # serve dist/ locally
```

`npm run build` runs the normal client build, then an SSR build of
`src/entry-server.jsx`, then `scripts/prerender.js`, which puts the rendered
home page into `dist/index.html`. Crawlers and link previews see the full
content without running JavaScript; in the browser React hydrates it.

## Deploy to Netlify

`netlify.toml` sets **build command `npm run build`** and **publish directory
`dist`** (Node 22), and both override the Netlify dashboard. Push to the
branch Netlify deploys from (`master`).

If the site ever moves off `mary-garachu.netlify.app`, update the URL in:
the canonical, `og:url`, `og:image` and `twitter:image` tags in `index.html`
and in each `public/projects/*/index.html`, the JSON-LD in `index.html`,
`public/robots.txt` and `public/sitemap.xml`.

## Before publishing: TODO callouts

The case studies contain yellow-bordered boxes labelled
**"TODO — fill in before publishing"** wherever a fact wasn't available.
They're visible on the page on purpose. Replace each one with real content
(or delete it), and replace the "To be confirmed" values in each page's
meta block. To find them all:

```sh
grep -n 'class="todo"' public/projects/*/index.html
```

### Nala Trails Safaris — `public/projects/nala-trails-safaris/index.html` (6)

1. **Meta block** — your role; start/end dates; confirm the stack. (WordPress
   with a custom `nala-trails-safaris` theme on Understrap was read from the
   live site's source on 6 Oct 2026.) Add plugins/services you set up.
2. **The problem** — check against the client's real brief; add their goal.
3. **What I built** — confirm which listed features you built (they were taken
   from the live site/screenshot), and add what a screenshot can't show.
4. **Decision: "Search before scroll"** — why the trip search sits in the hero.
5. **Decision: "A custom theme rather than an off-the-shelf one"** — why.
6. **Results** — launch date, enquiries/bookings, speed scores, client quote.

### Spirealm — `public/projects/spirealm/index.html` (6)

1. **Meta block** — your role; dates; the stack (couldn't be checked).
   ⚠️ **spirealm.com did not resolve on 6 Oct 2026** (no such domain), so the
   "Live site" link is dead. Update it or remove it.
2. **The problem** — check against the real brief.
3. **What I built** — confirm; list the About/Services/Contact pages, forms etc.
4. **Decision: "Values ahead of services"** — why.
5. **Decision: "One colour, one photo"** — why, or swap for another decision.
6. **Results**.

### Ezra Enterprise — `public/projects/ezra-enterprise/index.html` (6)

1. **Meta block** — your role; dates; the stack (couldn't be checked).
   ⚠️ **ezraenterprise.co.ke did not resolve on 6 Oct 2026**, so the
   "Live site" link is dead. Update it or remove it.
2. **The problem** — check against the real brief.
3. **What I built** — confirm; list Subsidiaries/Projects/CSR/News pages etc.
4. **Decision: "Sectors as the opening structure"** — why the carousel is by sector.
5. **Decision: "Subsidiaries as a top-level section"** — why.
6. **Results**.

## Editing

- **Home-page content** lives in `src/data.js`.
- **Design system**: "Organic". Tokens and component classes are in
  `src/organic-tokens.css`; section styles in `src/App.css` use `var(--*)` only.
- **Adding a case study**: copy a folder in `public/projects/`, update its
  `<title>`, description, canonical/OG tags and content; add its URL to
  `public/sitemap.xml`; add a 1200×630 `og-<slug>.jpg` to `public/assets/img/`.
