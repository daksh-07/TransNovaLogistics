# Quality assurance / handover

## Automated / local checks — performed on 10 November 2026

- Static HTML/CSS/JS, with no npm dependencies and no build necessary. `node --check site.js` passed.
- Page contains source-verified work labels, contact links, business background, standards, image source URLs and demo-only form.
- Native `details` accordion; browser validation + `aria-invalid` and live message; no form network request. Browser automation confirmed invalid-form feedback.
- Browser automation confirmed gallery open, ArrowRight advancing image count, Escape close, and mobile navigation opening/closing. Background is inert when dialog is open.
- Reduced-motion CSS and observer fallback; semantic landmarks and skip link. Without JavaScript, all page content remains visible.
- SEO isolation: robots meta, robots.txt, Vercel X-Robots-Tag.
- Headless Chromium layout checks at **320 × 740, 390 × 844, 768 × 1024, 1440 × 900** found **no horizontal document overflow and no JavaScript page exceptions**. This was a local markup/content-injection test, not a remote browser load.

## Manual verification tasks prior to sharing (not confirmed yet)

1. Open Vercel preview in iPhone-sized and desktop browsers, inspect photography and actual colour matches. Source CDN imagery could not be inspected at full size through the content extraction interface; check aspect/crops on real devices.
2. Test menu, `tel:` / `mailto:` links, gallery opening, arrows, keyboard close, validation feedback, and headings.
3. Verify no console errors, broken original CDN image URLs, overflows or missing fonts.
4. Confirm preview is publicly viewable by intended recipient or use Vercel's authorised share option; deployment protection may require login.
5. Confirm business permission to reuse work-gallery images; keep preview separate and noindexed.
6. Secure business approval and a secure enquiry endpoint before a future production launch.

## Known limitations

- This **demo does not send or save enquiries**, by design.
- No client video yet. Integration point documented in JS.
- CDN images remain on the client's original hosting provider. In this testing environment, outbound requests to original image URLs were blocked; therefore **image load success, actual crops, dimensions and full visual QA could not be verified**. The image-bearing screens cannot be approved solely on these screenshots.
- Contact details and claims reflect homepage snapshot of 10 November 2026; refresh audit before go-live.
- Formal accessibility audit, Lighthouse, external image network inspection and real-device QA have not been performed and must not be claimed as complete.
