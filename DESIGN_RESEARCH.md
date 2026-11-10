# TransNova / Atelier edition — design research

10 November 2026. Continued PR #1, branch `feat/premium-homepage-demo`, starting at `2592644` (latest matching READY Vercel deployment `dpl_CYX2ctM2QAmSDorcoa7sG9daAkbF`). Main contains only the initial README. No duplicate repository or hosting project created.

## Method and evidence

Opened references in Chromium at 1440 × 1000, extracted rendered text and computed type families, captured screenshots and visually reviewed a reference contact sheet. 19 URLs attempted; 15 returned substantive pages (including three discovery directories). Research depth varies: first-view compositions and case-study text were reviewed; comprehensive mobile, accessibility, performance and functional-motion audits of reference sites were **not** performed. Never infer functional animation from a static concept. Several first views were obstructed or incomplete; limitations below are deliberate.

| Reference | Observations and decision |
|---|---|
| [Vooma Case Study: 100%+ Traffic & 5x Conversions | NOOON](https://www.nooon.studio/projects/vooma) | Swiss hierarchy and mono indexing; motion is described by the case study, not independently validated in the live Vooma product. Adopt a coordinated opening, avoid AI/software visual metaphors. |
| [Freight Consolidators | Website design case study by Parentheses Studio for an international logistics and shipping company](https://www.parentheses.studio/work/freight-consolidators) | Grifo/Apercu editorial pairing; case study describes an Incoterms journey. Initial screenshot stayed in a loading/transition state. Adopt one continuous story, not its cargo artwork. |
| [Viamaster: Logistics Website Design Case Study | Bluestone98](https://www.bluestone98.com/work/viamaster/) | Degular display against restrained supporting type; original location photography carries credibility. Adopt authentic imagery; no invented fleet. |
| [https://dribbble.com/shots/26949297-Abels-The-Art-of-Moving-Website-Redesign](https://dribbble.com/shots/26949297-Abels-The-Art-of-Moving-Website-Redesign) | Unavailable/blank during browser attempt. No functional animation or visual conclusions claimed. |
| [https://www.vitra.com/](https://www.vitra.com/) | Unavailable/blank during browser attempt. No functional animation or visual conclusions claimed. |
| [FRAMA Official Site - Timeless Design & Honest Materials](https://framacph.com/) | Univers, warm materials, subdued navigation and clear product framing; shipping modal obscures parts of first view. Adopt natural colour and quiet rules. |
| [https://normcph.com/](https://normcph.com/) | Unavailable/blank during browser attempt. No functional animation or visual conclusions claimed. |
| [Cassina: italian design furniture and luxury interior design](https://www.cassina.com/) | Neue Haas Grotesk display, wide interior photography, white editorial surround; cookie layer present. Adopt expansive image crops. |
| [https://www.boffi.com/](https://www.boffi.com/) | Unavailable/blank during browser attempt. No functional animation or visual conclusions claimed. |
| [David Thulstrup — Architecture, Interiors & Design](https://www.davidthulstrup.com/) | Full-screen architecture image with extremely quiet navigation; observed computed type Inter/Helvetica. Adopt image confidence, keep navigation more explicit. |
| [Awwwards - Website Awards - Best Web Design Trends](https://www.awwwards.com/) | Discovery index: Inter Tight and strong title hierarchy; reviewed contemporary nominations and winners. This is a directory, not a verified transport experience. |
| [Best Website Design Inspiration | Siteinspire](https://www.siteinspire.com/) | Discovery index: Scto Grotesk A, tightly ordered typographic project grid; explored editorial and architecture categories. Adopt consistent indexing, not site layout. |
| [Recent — Design Inspiration](https://godly.website/) | Discovery index with compact reference grid. Useful for rejecting generic luminous effects; no linked experience motion verified. |
| [MUUTO.COM](https://www.muuto.com/) | EuclidFlex with Spectral; asymmetrical sofa editorial and supporting thumbnails. Adopt image/type scale contrast without copying composition. |
| [Aesop USA | Formulations for Skin, Hair & Body](https://www.aesop.com/) | SuisseIntl with Zapf-Humanist; warm cream, calm product storytelling. Adopt tonal restraint and comfortable reading copy. |
| [&Tradition](https://www.andtradition.com/) | Brandon Grotesque and Adobe Garamond; cookie modal limits first-view review. Serif/sans contrast informed pairing evaluation. |
| [Tecta : Home](https://www.tecta.de/en/) | FG-Book; full-width architectural image and minimal menu. Adopt confident framing, retain direct service access. |
| [Timeless modular design furniture | USM | USM](https://www.usm.com/) | Helvetica Neue Roman; exceptionally spare white navigation. Main image did not render in captured first view; do not infer motion. |
| [The project of living | Arper EN](https://www.arper.com/) | Futura LT / Helvetica Neue; furniture scene fills hero, thin display text, restrained green tonal relationship. Adopt palette discipline. |

## Synthesis

Furniture, space and care take priority over freight iconography. Retain the complete original black/cream/green logo. Wide authentic furniture imagery anchors the home opening; an offset original logo acts as a signature. Serif movement contrasts with a measured sans, while small mono indexes provide precision. Navigation remains plain and direct. Gallery imagery has no visible captions or overlays; accessible names remain.

Palette candidates evaluated in CSS: (1) existing cool sage/lime, (2) porcelain `#f3f0e9`, forest ink `#222722`, stone `#dedfce`, original lime accents, (3) deep navy, chalk and lime. Selected 2 for the strongest relationship to warm furniture imagery and the cream logo. Green marks identity and small states; dark chapters create rhythm.

Typography: tested existing DM Sans/Instrument Serif against Manrope/Instrument Serif, with IBM Plex Mono for indexing. Selected Manrope for open counters and distinctive geometric forms, Instrument Serif for narrow editorial italics. Compared reference commercial families above without copying or distributing their licensed files. All three selected families use SIL OFL; local files and license texts are under `assets/fonts`. Sentence case, separate display scales and softer tracking replace repeated uppercase posters. Mobile wrapping checked at 320 and 390px.

Motion uses CSS and a small requestAnimationFrame controller; GSAP would add weight without a useful advantage for these two sequences. Opening framing, typography and logo reveal finish in about 4.6 seconds without blocking input. Scroll links the image crop and care illustrations to reading progress. Native scrolling, native dialogs/details and reduced-motion support remain.
