# TransNova site — responsive/functional QA (revised)

Date: 10 November 2026. Automated browser render used headless Chromium with local HTML/CSS/JS injected (network routing for external images blocked). This establishes **local UI behaviour**, not a remote Lighthouse score or CDN image success.

## Pages and breakpoints

All eight pages were rendered at 1440×900, 768×1024, 390×844, and 320×700. Total: **32 viewport/page checks**. The automated DOM width tests returned zero horizontal overflow issues after correcting a too-long CTA heading at 320 px. The five-item navigation exists across all pages. Source robots metadata appears on each.

Screenshots captured for home, services, about, contact at desktop and iPhone widths. Mobile menu open/close via Escape passed. Contact form required-field validation passed. No injected-script exceptions reported.

## Design restrictions

- No visible `View image` overlays, directional-arrow glyphs or image captions.
- Original work headings and descriptions are text sections, not captions on photographs.
- Original services split into exactly two dedicated detail pages; 'Professional Customer Service' is treated as an original gallery category, not a new paid service.
- Source-level logo screenshot recreated as SVG; the original brand vector is not available.
- Active noindex in both meta and Vercel response config.
- Form never transmits or retains user data.

## Remaining checks / limitations

- The photo CDN failed DNS lookup in the testing container; authentic image-loading on a real browser is **not yet confirmed**. Visitors get the typographic brand fallback when unavailable. Seek approved originals before final client presentation.
- No full Lighthouse audit, video integration or user-approved production launch.
- Browser automation used inline CSS/JS due to the test environment blocking localhost HTTP; it does not substitute for checking the actual Vercel preview.
- Native gallery can be opened when source imagery loads; the remote image provider could not be tested here. Accessibility inspection should be repeated with real assets.
