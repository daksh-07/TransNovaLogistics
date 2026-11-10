# TransNova — independent redesign demonstration

**Important:** This is an unsolicited demo by Everest Marketing, not TransNova's official website and not an authorised replacement. Its form never sends, stores or forwards enquiries. The preview is `noindex` and should be distributed privately for review.

## Run locally

No paid services, build step, runtime library, tracking or API key required.

```sh
python3 -m http.server 3000
```

Open `http://localhost:3000`. Deploy the same static files to the **existing** Vercel project on a non-production preview deployment.

## Design implementation

- Fully responsive editorial homepage; desktop and mobile navigation.
- Original gallery images from `cloud.katana.nexigen.digital` as referenced on the client's existing website. Images remain hosted by the original source; verify remote availability and usage permission before presenting to the client.
- CSS image and text reveals, intersection observer scroll reveals; reduced-motion alternatives.
- Keyboard-accessible gallery dialogue with Escape, arrow keys and focus restoration.
- Contact links verified from existing site; enquiry form validates but transmits **nothing**.
- Semantic HTML, accessible labels, focus states, `noindex` meta / header / `robots.txt`.
- No invented customer reviews, service areas, certifications, project counts, or founding year.
- Future approved video: see the comment in `site.js` near `.hero-visual-inner`.

See `SOURCE_CONTENT.md`, `DESIGN_RESEARCH.md`, `QA.md`.