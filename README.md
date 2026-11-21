# Houssem Eddin Jlassi — Portfolio

A personal portfolio for Houssem Eddin Jlassi, a software engineering student and
full-stack developer based in Tunis, Tunisia. The site is built around a single
real project — an email templates management platform built during a PFA
internship at Vermeg — and an editorial, engineering-focused visual direction.

## Stack

- **Next.js 16** (App Router, Turbopack)
- **React 19**
- **TypeScript**
- **Tailwind CSS 4**
- **Motion** for restrained, reduced-motion-aware animation
- **Lucide** for interface icons

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
npx tsc --noEmit
```

## Content

All copy lives in typed modules under `content/`:

| File | Purpose |
| --- | --- |
| `content/site.ts` | Name, title, email, social links, navigation, CV path, site URL |
| `content/profile.ts` | Hero intro, about paragraphs, facts, principles |
| `content/skills.ts` | Skill groups and technologies |
| `content/experience.ts` | Internship entries |
| `content/education.ts` | Education entries |
| `content/projects.ts` | Featured project and full case study |

Shared types live in `types/content.ts`. Update content there rather than
editing section components.

## Assets

### CV

The CV button only renders when a real PDF exists at:

```
public/cv/houssem-jlassi-cv.pdf
```

Drop the file in and it appears in the hero automatically. No code change is
needed.

### Project screenshots

Screenshots are discovered automatically from:

```
public/projects/email-templates/
```

Any `.png`, `.jpg`, `.jpeg`, `.webp`, or `.avif` file in that directory is
picked up, sorted by filename, and shown in the case study. Until screenshots
exist, the site uses a CSS interface schematic rather than fabricated images.

Recommended: 16:10 or wider captures, at least 1600px wide.

## Architecture

```
app/
  layout.tsx              Root shell, fonts, metadata, JSON-LD, theme script
  page.tsx                Home page composition
  projects/email-templates-platform/  Static case study route
  opengraph-image.tsx     Generated Open Graph image
  sitemap.ts, robots.ts   SEO routes
  manifest.ts             Web app manifest
  icon.svg                Favicon / app icon
  not-found.tsx           404 page
components/
  contact/                Mailto composer and copy-email control
  icons/                  Inline brand SVGs
  layout/                 Header, footer, theme script and toggle
  project/                Project card, schematic, screenshots, case study
  sections/               Page sections
  ui/                     Buttons, badges, headings, reveal, container
content/                  Typed site content
lib/                      Small utilities and asset detection
types/                    Shared content types
```

## Theming

The site is dark by default. A small inline script in `app/layout.tsx` applies
the saved `localStorage.theme` value (or the system preference) before first
paint, so there is no flash. Tokens are defined in `app/globals.css` for both
`[data-theme="dark"]` (default) and `[data-theme="light"]`.

## Contact form

The contact form does not post to a server. It validates the fields in the
browser and opens a pre-filled `mailto:` draft using the visitor's mail client.
A copy-email fallback and direct contact cards are provided for clients without
a configured mail handler.

## Security

`next.config.ts` sets:

- `Content-Security-Policy`
- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy`
- `Cross-Origin-Opener-Policy: same-origin`
- `Strict-Transport-Security`

`poweredByHeader` is disabled. External links use `rel="noopener noreferrer"`.

## Deployment

The site is designed for Vercel, with production on `main`.

1. Import the repository into Vercel.
2. Set `NEXT_PUBLIC_SITE_URL` to the production domain.
3. Deploy.

Update `site.url` in `content/site.ts` or the environment variable to match the
final domain so canonical links, the sitemap, and social images stay correct.

## Notes

- The case study intentionally omits client data, credentials, and proprietary
  source code.
- No certifications, testimonials, statistics, or screenshots are invented.
- `AGENTS.md` is generated/maintained by `next dev`; keep it committed.
