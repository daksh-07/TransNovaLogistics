# Motion system

## Opening / 4.6 seconds

CSS `edition-enter` introduces the context rail and title at 0–1.35s. `edition-frame` opens the photograph from a central vertical mask at .35–2.25s. Supporting copy enters at 1–2.2s; the complete logo at 1.6–2.8s; the lower contact rail completes at 2.8–4.6s. No loading overlay, input lock or forced wait. Content exists in HTML before scripts.

## Scroll compositions

`edition.js` coalesces passive scroll events into a single animation frame. The hero photograph translates within an overflow-clipped frame only while visible. The care chapter draws original decorative furniture line art with stroke dash offset; desktop progress advances three published service-standard scenes. Hover or keyboard focus suspends automatic selection so users retain control. All controls work manually on touch and desktop. These drawings are illustrative, not operational schematics or claims about client projects.

## Interaction

Original `site.js` handles viewport reveals, menu, gallery and local form validation. Native dialog gives modal focus containment; Escape and arrow keys operate the gallery. Native details controls standards. CSS handles image scale, service states and cross-document view transitions where supported. Unsupported view transitions degrade to standard navigation. No smooth-scroll library or new framework dependency.

## Reduced motion and performance

CSS disables animations, transitions and smooth scrolling under prefers-reduced-motion; JS skips scroll-linked work and responds to preference changes. Important content remains visible without JS. Transforms/opacity dominate; clip-path is limited to the initial image reveal, SVG drawing to the care chapter. No continuous filter/blur work added. Self-hosted fonts use swap; hero image has dimensions and high priority; later images remain lazy. No measured 60fps or Lighthouse claim is made. Native-device profiling remains a handover task.
