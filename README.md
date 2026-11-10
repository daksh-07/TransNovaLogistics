# TransNova — independent website redesign demonstration

This is an unapproved acquisition demo made for Everest Marketing. It is **not** the official TransNova website. Do not deploy it to `transnovalogistics.com.au`.

## Pages

- `/` — editorial homepage
- `/services/` — overview of **verified** original services
- `/services/premium-furniture-delivery/` — existing Premium Furniture Delivery
- `/services/furniture-assembly-installation/` — existing Furniture Assembly & Installation
- `/our-work/` — authentic original-site photographs and categories
- `/about/` — exact original company story and vector-traced user-supplied logo
- `/our-standards/` — original operational standards
- `/contact/` — verified contact details and **non-sending** demo form

These are **not** invented new services, service areas or marketing promises. See `SOURCE_CONTENT.md` for provenance. Design research and references are documented in `DESIGN_RESEARCH.md`.

## Implementation

Plain HTML, CSS, and JavaScript. No framework, build command, paid service, analytics, API or backend. Each page is an actual folder with its own `index.html`. Absolute root links support Vercel static hosting. Run locally using `python3 -m http.server 3000` at the project root.

The actual logo provided in a screenshot was reconstructed as `/assets/transnova-logo.svg` using contour-based SVG vectorization. The horizontal small-size adaptation is `/assets/transnova-wordmark.svg`. These are **approximations** pending the original vector file from the business, not a claim that the editable source logo was supplied.

The gallery uses original CDN URLs extracted from the original live site. If they cannot load, the design uses abstract brand typography, not stock photos or fabricated work. Image buttons that cannot load become disabled. Ask for genuine asset files before client handover.

UI includes semantic navigation, responsive layouts, labelled buttons, a keyboard-accessible native dialog, focus handling, scroll motion with reduced-motion respect, and mobile form validation. The form intentionally has no HTTP submission or data collection.

`robots.txt`, an HTML `noindex` directive and `X-Robots-Tag` prevent competition with the live client website. Preview GitHub feature branch only: `feat/premium-homepage-demo` in the existing `daksh-07/TransNovaLogistics` repository.

## Future client video

The `site.js` comment identifies the hero media integration point. No client video has been supplied and no fake footage is included. Approval, source asset and accessibility review are required before replacing the hero image.
