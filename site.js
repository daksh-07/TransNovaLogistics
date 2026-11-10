/* TransNova independent design concept. Only original-site information and photos.
   Future approved video integration point: .hero-visual-inner; retain poster and reduced-motion fallback. */
(() => {
  'use strict';
  const menuButton = document.querySelector('#menu-toggle');
  const menu = document.querySelector('#mobile-navigation');
  const setMenu = (open) => {
    document.body.classList.toggle('menu-open', open);
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    menu.inert = !open;
    if (!open) menuButton.focus({ preventScroll: true });
  };
  menuButton.addEventListener('click', () => setMenu(!document.body.classList.contains('menu-open')));
  menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false)));
  window.addEventListener('keydown', event => {
    if (event.key === 'Escape' && document.body.classList.contains('menu-open')) setMenu(false);
  });
  const breakpoint = window.matchMedia('(min-width: 851px)');
  if (breakpoint.addEventListener) breakpoint.addEventListener('change', event => {
    if (event.matches && document.body.classList.contains('menu-open')) setMenu(false);
  });

  document.documentElement.classList.add('has-motion');
  const reveal = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    }), { threshold: .11, rootMargin: '0px 0px 15px 0px' });
    reveal.forEach(element => observer.observe(element));
  } else reveal.forEach(element => element.classList.add('is-visible'));

  const gallery = [
    { url: 'https://cloud.katana.nexigen.digital/katana/5ozBrS6MzncrUaGjnxJCVrTz92WWCTLftDbB06SR.webp', title: 'Premium Furniture Delivery' },
    { url: 'https://cloud.katana.nexigen.digital/katana/yAEGdFmosfU09n3DAdpWn50Ltx2opykpTCaUC0C4.webp', title: 'Furniture Assembly & Installation' },
    { url: 'https://cloud.katana.nexigen.digital/katana/JQg28pZeGNDFLDLYv9MEeSbDZdweSjNAb6UIrB1z.webp', title: 'Professional Customer Service' }
  ];
  const lightbox = document.querySelector('#lightbox');
  const image = document.querySelector('#lightbox-img');
  const caption = document.querySelector('#lightbox-caption');
  const count = document.querySelector('#lightbox-count');
  const close = document.querySelector('#lightbox-close');
  const prev = document.querySelector('#lightbox-prev');
  const next = document.querySelector('#lightbox-next');
  let index = 0;
  let opener = null;
  const render = () => {
    image.src = gallery[index].url;
    image.alt = gallery[index].title + ', original TransNova website photograph';
    caption.textContent = gallery[index].title;
    count.textContent = String(index + 1).padStart(2, '0') + ' / ' + String(gallery.length).padStart(2, '0');
  };
  const open = (i, element) => {
    index = i;
    opener = element;
    render();
    lightbox.hidden = false;
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.classList.add('lightbox-open');
    document.querySelector('main').inert = true;
    document.querySelector('.site-header').inert = true;
    close.focus();
  };
  const dismiss = () => {
    lightbox.hidden = true;
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('lightbox-open');
    document.querySelector('main').inert = false;
    document.querySelector('.site-header').inert = false;
    if (opener) opener.focus({ preventScroll: true });
  };
  const shift = delta => {
    index = (index + delta + gallery.length) % gallery.length;
    render();
  };
  document.querySelectorAll('.gallery-open').forEach(button => button.addEventListener('click', () => open(Number(button.dataset.gallery), button)));
  close.addEventListener('click', dismiss);
  prev.addEventListener('click', () => shift(-1));
  next.addEventListener('click', () => shift(1));
  lightbox.addEventListener('click', event => { if (event.target === lightbox) dismiss(); });
  window.addEventListener('keydown', event => {
    if (lightbox.hidden) return;
    if (event.key === 'Escape') dismiss();
    else if (event.key === 'ArrowLeft') shift(-1);
    else if (event.key === 'ArrowRight') shift(1);
    else if (event.key === 'Tab') {
      const focusables = [close, prev, next];
      const step = event.shiftKey ? -1 : 1;
      const targetIndex = focusables.indexOf(document.activeElement) + step;
      if (targetIndex === focusables.length || targetIndex < 0) {
        event.preventDefault();
        focusables[(targetIndex + focusables.length) % focusables.length].focus();
      }
    }
  });

  // No network calls, persistence or actual form submission. Client consent required to enable.
  const form = document.querySelector('#demo-form');
  form.addEventListener('submit', event => {
    event.preventDefault();
    const feedback = document.querySelector('#form-feedback');
    form.querySelectorAll('[aria-invalid]').forEach(el => el.removeAttribute('aria-invalid'));
    let firstInvalid = null;
    for (const field of form.querySelectorAll('[required]')) {
      if (!field.checkValidity()) {
        field.setAttribute('aria-invalid', 'true');
        if (!firstInvalid) firstInvalid = field;
      }
    }
    if (firstInvalid) {
      feedback.textContent = 'Please complete the required fields with a valid email address. Nothing has been sent.';
      firstInvalid.focus();
      return;
    }
    feedback.textContent = 'Demo only: no enquiry has been sent or saved. Please contact TransNova using their official phone or email.';
  });
})();
