# QA / Atelier edition — 10 November 2026

## Performed

- Inspected repository branches, PR #1 and latest three READY Vercel preview deployments before editing. Continued latest feature head `2592644`.
- Chromium/Playwright responsive sweep: all eight routes at 1440 × 1000, 390 × 1000 and 320 × 1000. Zero horizontal overflow, zero page exceptions, zero broken source images after scrolling through lazy images. Empty dialog image before opening is intentionally excluded.
- Two visual passes: first full-page desktop/mobile contact sheets exposed lazy-image test gaps, overly strong quote treatment and caption clutter; second pass loaded all imagery, softened quote/type, removed visible gallery captions, refined mobile controls. Final screenshots stored in `screenshots/`.
- Actual scroll interaction: care scenes progressed 0 → 1 → 2; manual selection also passed. Hero observed after its opening animation. Reduced motion used for full-page capture and checked separately.
- Passed gallery open, next via keyboard, Escape close; standards details opening; mobile menu open and Escape; invalid and valid demo form states. No form endpoint or storage introduced.
- JavaScript syntax checks passed for all three scripts. All local href/src targets resolve; eight pages have noindex meta. Existing Vercel global noindex headers preserved.
- Original source re-fetched; all six CDN URLs appear in official HTML and returned 200; local WebP copies load. Font files and OFL licenses self-hosted.

## Limits

Chromium emulation is not testing physical iPhone/Android devices, Safari or Firefox. No Lighthouse score, measured 60fps, screen-reader audit or WCAG certification is claimed. Reference research was a visual/text/type study, not comprehensive interaction testing of every reference. All eight pages retain prior core layouts beneath current art direction; the home is substantially recomposed and assembly opening is now distinct from delivery.

Demo remains unapproved independent work. Contact form sends/stores nothing. Complete active logo is embedded raster inside SVG, not a fully redrawn vector. Source provenance of photos is verified against the business site; authorship and rights are not independently verified.
