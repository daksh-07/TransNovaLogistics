# TransNova / Atelier edition

Independent eight-page acquisition demo for Everest Marketing. Existing repository, PR #1 and Vercel project `transnovalogistics`; preview only. Complete original logo, source-verified content, locally recovered source imagery and self-hosted OFL fonts.

Run locally: `python -m http.server 3000` from this directory. No build step or production form backend. Base layouts are `styles.css`, previous edition refinements `studio-v4.css`, current art direction `edition.css`. `site.js` owns core interactions; `studio-v4.js` owns manual care selection; `edition.js` owns current scroll choreography.

Read DESIGN_RESEARCH.md, SOURCE_CONTENT.md, MOTION_SYSTEM.md and QA.md for evidence and limitations. Browser checks under `checks/` require Playwright and Chromium (`/usr/bin/chromium` in the review environment). Run `node checks/responsive.cjs` and `node checks/interactions.cjs` with the local server running. Screenshots are under `screenshots/`.

All pages are noindex via HTML and Vercel response headers. Contact form never sends, logs or stores enquiries. Production publication, source-brand master replacement and enquiry integration require separate client authorization.
