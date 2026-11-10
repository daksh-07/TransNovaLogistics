# TransNova redesign — design research and creative rationale

Reviewed 10 November 2026. These are visual and UX **references only**. No layouts, logos, code, assets or non-TransNova business claims were copied. Where direct interactive behaviour could not be independently inspected, analysis describes reported design approach, not a verified implementation detail.

## Reference matrix

| Reference & link | Hero / hierarchy | Imagery & palette | Motion / transitions | Navigation / mobile / credibility | Relevant lesson |
|---|---|---|---|---|---|
| [Vooma — NOOON](https://www.nooon.studio/projects/vooma) | Strong Swiss-minimal type and narrative sequencing | Freight conveyed by abstract shapes and a precise identity | Case study describes animated evolving orange rectangle | Enterprise sales flow with clear information hierarchy; case study shows mobile presentation | Treat motion as storytelling, not ornament; for TransNova use **real photos** instead of Vooma's abstractions |
| [Freight Consolidators — Parentheses](https://www.parentheses.studio/work/freight-consolidators) | Client and scope clearly defined; structured service architecture | High-contrast project showcase | Strong visual sequence (per case study presentation) | Research, wireframing and testing made navigation support diverse users | Clear service navigation and careful sequencing make logistics easy to understand |
| [Viamaster — Bluestone98](https://www.bluestone98.com/work/viamaster/) | Logistics information prioritised for the customer | Original photography and film backed by brand work | Visual storytelling cited in designer's project narrative | Structured service areas, contact pathways; Awwwards nomination claimed by agency | Authentic business photography matters more than fake cinematic footage |
| [Abels concept — Netdesignr](https://dribbble.com/shots/26949297-Abels-The-Art-of-Moving-Website-Redesign) | Elegant editorial type and spacious luxury hierarchy | Dark navy / pale blue-grey concept palette | Concept presentation only; runtime motion unverified | Compact enquiry idea; design concept, not proven live site | Calm visual lightness and a clear premium-service message |
| [BCI Worldwide — Digital Silk](https://www.digitalsilk.com/case-studies/bci-worldwide/) | Portfolio-forward logistics architecture | Project-specific photography, product stories | Runtime interactions unverified | Location-first planning and real work examples | A company's existing work should carry its credibility |
| [United Carriers — project narrative](https://unitedcarriers.com/insights/how-an-australian-freight-forwarders-website-unexpectedly-went-viral) | Freight journey framed as an interactive story | Three-dimensional logistics visualisations | Reported 3D/WebGL elements and awards recognition | Custom digital presence, but performance/resource trade-offs apply | Distinctive detail works when meaningful; reject heavy 3D for a small photo-based demo |
| [Western Alliance Logistics — Casa Media](https://casamedia.com/projects/western-alliance-logistics/) | Clear corporate value story rather than generic truck template | Purposeful branding avoids anonymous stock photo mood | Case study describes animated bespoke one-page site | Service and contact journey are structured | Avoid freight-template clichés even for a logistics company |
| [OnLogistics — S Evans Design](https://www.sophie-evans.com/work/onlogistics) | One consistent editorial brand story | Industrial mark / brand guidelines | Specific motion performance not independently verified | Service / site architecture makes inquiry easy | Identity and content need consistency, not just a new page skin |
| [Modus Projects — Overflow](https://overflow.agency/cases/modus-projects) | Large product and project-led visual presentation | Premium architectural material imagery | Describes scroll-driven hero treatment | Reusable design system and accessible CMS as site grows | An editorial photo-based scroll narrative fits furniture-handling photography |
| [Elios — LAIN](https://lainagency.com/works/elios) | Industrial grid and typographic clarity | Container markings as a coherent design language | Motion not verified from text alone | Direct route to relevant service | Only visual motifs that match the business belong in the system |
| [BoxLogic — ExtraDigital](https://www.extradigital.co.uk/case-studies/design/boxlogic/) | Modern B2B confidence from clear hierarchy | Progressive identity and disciplined layout | No particular animation verified | Supports a managed, direct enquiry path | Strong information hierarchy beats novelty when evidence is limited |

## Chosen direction: “quiet precision”

**Hero alternatives considered:** (1) full-bleed dark cinematic overlay, (2) warm editorial split canvas with oversized original slogan and authentic work photo, (3) typographic black-and-white mural. Chosen: **(2)** for the strongest combined legibility, mobile adaptability and real-work evidence. The selected photo is tied directly to the existing “Premium Furniture Delivery” service tile.

**Typography:** DM Sans + DM Serif Display (Google Fonts, open font families served via Google Fonts; fallback Arial/Georgia). A disciplined neutral sans for systems, generous character-spacing in section labels and an occasional italic serif for emphasis. Editorial—not generic SaaS cards. Font network load is optional; local fallbacks work.

**Colours:** warm mineral paper `#f1f0eb`, dark evergreen-charcoal `#18201e`, neutral ecru, muted stone `#a68f72`. This is a **supporting redesign palette** pending visual confirmation of the official logo colours, not a claim to be the existing brand system. The original logo should be reviewed by the client before approval.

**Photography:** reuse three original work images from the client site and the first homepage image. Use object-fit crops, varied aspect ratios, open space and genuine original gallery captions. Images are never replaced by stock imagery or generated projects.

**Motion:** CSS initial text-mask reveal and photo curtain; IntersectionObserver section entrance; modest image zoom on hover; actual keyboard/touch gallery interactions. Reduced-motion removes all animation. No autoplay video or artificial preloader.

**Navigation and conversion:** compact editorial header; accessible full-screen mobile navigation; anchor-based scroll; verified telephone and email; a clearly labelled **non-sending** demo form. Client consent and a secure destination are required before enabling enquiries.

**Mobile:** change composition, not simply scale desktop. Text precedes photo; large tap targets; single-column gallery; self-contained menu and modal; no horizontal scrolling.

**Constraints:** Build remains a single homepage; no speculative content, expanded services, testimonials, pricing, marketing statistics, new SEO pages or geographic claims.