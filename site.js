/* TransNova independent design concept by Everest Marketing.
   Future approved video can replace .hero-media img, retaining an authentic poster and
   reduced-motion fallback. No video has been supplied and none is represented as available. */
(() => {
  'use strict';
  const toggle = document.querySelector('.menu-toggle');
  const mobile = document.querySelector('#mobile-nav');
  const setMenu = (open, restore = true) => {
    document.body.classList.toggle('menu-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    mobile.inert = !open;
    if (!open && restore) toggle.focus({ preventScroll: true });
  };
  toggle.addEventListener('click', () => setMenu(!document.body.classList.contains('menu-open')));
  mobile.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false, false)));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && document.body.classList.contains('menu-open')) setMenu(false);
  });
  window.matchMedia('(min-width: 961px)').addEventListener('change', e => { if (e.matches) setMenu(false, false); });
  // Original photography may be unavailable outside the owner's website; retain a purposeful brand-based fallback.
  document.querySelectorAll('.media img').forEach(img => {
    const wrap = img.closest('.media');
    const ok = () => wrap.classList.add('media--loaded');
    const fail = () => {
      wrap.classList.add('media--failed');
      // Do not open a broken image. The underlying work-category content remains available.
      if (wrap.matches('button.gallery-trigger')) {
        wrap.disabled = true;
        wrap.setAttribute('aria-label','Original image unavailable from source');
      }
    };
    if (img.complete) img.naturalWidth > 0 ? ok() : fail();
    else { img.addEventListener('load',ok,{once:true}); img.addEventListener('error',fail,{once:true}); }
  });
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const reveals = [...document.querySelectorAll('.reveal')];
  if ('IntersectionObserver' in window && !reduce) {
    document.documentElement.classList.add('has-motion');
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
    }), { threshold: 0.08, rootMargin:'0px 0px 80px 0px' });
    reveals.forEach(el => observer.observe(el));
  }
  const gallery = [
    ['https://cloud.katana.nexigen.digital/katana/5ozBrS6MzncrUaGjnxJCVrTz92WWCTLftDbB06SR.webp','TransNova furniture delivery photograph'],
    ['https://cloud.katana.nexigen.digital/katana/yAEGdFmosfU09n3DAdpWn50Ltx2opykpTCaUC0C4.webp','TransNova assembly and installation photograph'],
    ['https://cloud.katana.nexigen.digital/katana/JQg28pZeGNDFLDLYv9MEeSbDZdweSjNAb6UIrB1z.webp','TransNova customer service photograph']
  ];
  const dialog = document.querySelector('#gallery-dialog');
  const bigImage = document.querySelector('#gallery-image');
  const count = document.querySelector('#gallery-position');
  const close = document.querySelector('#gallery-close');
  const back = document.querySelector('#gallery-prev');
  const next = document.querySelector('#gallery-next');
  let selected = 0, opener;
  const render = () => {
    bigImage.src=gallery[selected][0];
    bigImage.alt=gallery[selected][1];
    count.textContent=`${String(selected+1).padStart(2,'0')} / ${String(gallery.length).padStart(2,'0')}`;
  };
  document.querySelectorAll('.gallery-trigger').forEach(el => el.addEventListener('click', () => {
    if (el.disabled) return;
    selected=Number(el.dataset.gallery); opener=el; render(); dialog.showModal();
    document.body.classList.add('dialog-open'); close.focus();
  }));
  const dismiss = () => { dialog.close(); document.body.classList.remove('dialog-open'); opener?.focus({preventScroll:true}); };
  close.addEventListener('click',dismiss);
  dialog.addEventListener('cancel', e => {e.preventDefault();dismiss()});
  dialog.addEventListener('click', e => {if (e.target===dialog) dismiss()});
  const step = n => {selected=(selected+n+gallery.length)%gallery.length;render()};
  back.addEventListener('click',()=>step(-1));next.addEventListener('click',()=>step(1));
  document.addEventListener('keydown',e => {
    if (!dialog.open) return;
    if (e.key==='ArrowLeft') step(-1);
    if (e.key==='ArrowRight') step(1);
  });
  // Demonstration form: client information is NEVER transmitted, saved or forwarded.
  const form = document.querySelector('#demo-form');
  form?.addEventListener('submit', e => {
    e.preventDefault();
    const status=document.querySelector('#form-feedback');
    form.querySelectorAll('[aria-invalid]').forEach(el=>el.removeAttribute('aria-invalid'));
    let bad=null;
    for (const input of form.querySelectorAll('[required]')) {
      if (!input.checkValidity()) {input.setAttribute('aria-invalid','true');bad ||= input;}
    }
    if (bad) {status.textContent='Please complete the required fields correctly. No message has been sent.';bad.focus();return;}
    status.textContent='This is a design demonstration. Nothing was sent or saved. Please use TransNova’s official phone or email.';
  });
})();
