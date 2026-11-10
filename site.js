/* TransNova — progressive, purposeful interface motion.
   No invented video or photos. All large photography is linked to the original source.
   The contact form is deliberately a no-network demonstration. */
(() => {
  'use strict';

  const menuButton = document.querySelector('#nav-toggle');
  const mobileMenu = document.querySelector('#mobile-nav');
  const header = document.querySelector('.site-header');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const setMenu = (open, restoreFocus = false) => {
    document.body.classList.toggle('menu-open', open);
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    mobileMenu.inert = !open;
    if (!open && restoreFocus) menuButton.focus({preventScroll:true});
  };
  menuButton.addEventListener('click', () => setMenu(!document.body.classList.contains('menu-open')));
  mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setMenu(false)));
  window.matchMedia('(min-width: 921px)').addEventListener('change', e => {
    if (e.matches) setMenu(false);
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && document.body.classList.contains('menu-open')) setMenu(false, true);
  });

  // Scroll motion: a slim accurate progress indicator and restrained stage translation.
  const progress = document.querySelector('#progress-bar');
  let raf = null;
  const updateScroll = () => {
    raf = null;
    const available = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    const scrollY = window.scrollY;
    const progressPercentage = Math.max(0, Math.min(100, scrollY / available * 100));
    progress.style.width = `${progressPercentage}%`;
    header.classList.toggle('has-scrolled', scrollY > 28);
    if (!reduceMotion.matches && document.body.dataset.page === 'home') {
      document.documentElement.style.setProperty('--scroll-offset', `${Math.min(90, scrollY * .115)}px`);
    }
  };
  window.addEventListener('scroll', () => {
    if (raf === null) raf = requestAnimationFrame(updateScroll);
  }, {passive:true});
  window.addEventListener('resize', updateScroll, {passive:true});
  updateScroll();

  // Section entrances: genuine visible motion, not fake loading placeholders.
  const reveals = Array.from(document.querySelectorAll('.reveal'));
  if ('IntersectionObserver' in window && !reduceMotion.matches) {
    document.documentElement.classList.add('js-motion');
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      }
    }, {threshold: 0.07, rootMargin:'0px 0px -30px 0px'});
    reveals.forEach(el => observer.observe(el));
  } else {
    reveals.forEach(el => el.classList.add('in-view'));
  }

  // Direct links to original business media. Their host may be unreachable outside its own site.
  document.querySelectorAll('.photo-window img').forEach(img => {
    const pane = img.closest('.photo-window');
    const loaded = () => pane.classList.add('photo-loaded');
    const failed = () => {
      pane.classList.add('photo-unavailable');
      if (pane.matches('button.gallery-trigger')) {
        pane.disabled = true;
        pane.setAttribute('aria-label', 'Original TransNova photograph currently unavailable');
        pane.style.cursor = 'default';
      }
    };
    if (img.complete) {
      img.naturalWidth > 0 ? loaded() : failed();
    } else {
      img.addEventListener('load', loaded, {once:true});
      img.addEventListener('error', failed, {once:true});
    }
  });

  const photographs = [
    ['https://cloud.katana.nexigen.digital/katana/5ozBrS6MzncrUaGjnxJCVrTz92WWCTLftDbB06SR.webp', 'Premium Furniture Delivery'],
    ['https://cloud.katana.nexigen.digital/katana/yAEGdFmosfU09n3DAdpWn50Ltx2opykpTCaUC0C4.webp', 'Furniture Assembly & Installation'],
    ['https://cloud.katana.nexigen.digital/katana/JQg28pZeGNDFLDLYv9MEeSbDZdweSjNAb6UIrB1z.webp', 'Professional Customer Service']
  ];
  const modal = document.querySelector('#gallery-dialog');
  const modalImage = document.querySelector('#gallery-image');
  const modalPosition = document.querySelector('#gallery-position');
  const closeButton = document.querySelector('#gallery-close');
  const previous = document.querySelector('#gallery-prev');
  const next = document.querySelector('#gallery-next');
  let current = 0;
  let opener = null;
  const show = () => {
    const record = photographs[current];
    modalImage.src = record[0];
    modalImage.alt = `${record[1]} — original TransNova website image`;
    modalPosition.textContent = `${String(current + 1).padStart(2,'0')} / 03`;
  };
  const open = (n, node) => {
    current = n;
    opener = node;
    show();
    modal.showModal();
    document.body.classList.add('dialog-open');
    closeButton.focus();
  };
  const close = () => {
    if (modal.open) modal.close();
    document.body.classList.remove('dialog-open');
    opener?.focus({preventScroll:true});
  };
  const move = n => {
    current = (current + n + photographs.length) % photographs.length;
    show();
  };
  document.querySelectorAll('.gallery-trigger').forEach(node => node.addEventListener('click', () => {
    if (!node.disabled) open(Number(node.dataset.gallery), node);
  }));
  closeButton.addEventListener('click', close);
  previous.addEventListener('click', () => move(-1));
  next.addEventListener('click', () => move(1));
  modal.addEventListener('cancel', e => {e.preventDefault(); close()});
  modal.addEventListener('click', e => {if (e.target === modal) close()});
  document.addEventListener('keydown', e => {
    if (!modal.open) return;
    if (e.key === 'ArrowLeft') move(-1);
    if (e.key === 'ArrowRight') move(1);
  });

  // Demo form: local browser validity only; never send, store or log personal information.
  const form = document.querySelector('#demo-form');
  form?.addEventListener('submit', e => {
    e.preventDefault();
    const feedback = document.querySelector('#form-feedback');
    form.querySelectorAll('[aria-invalid]').forEach(el => el.removeAttribute('aria-invalid'));
    let invalid = null;
    for (const control of form.querySelectorAll('[required]')) {
      if (!control.checkValidity()) {
        control.setAttribute('aria-invalid', 'true');
        if (!invalid) invalid = control;
      }
    }
    if (invalid) {
      feedback.textContent = 'Please complete all required fields correctly. Nothing has been sent.';
      invalid.focus();
    } else {
      feedback.textContent = 'This is a design preview. No enquiry has been sent or saved. Please use the official contact details.';
    }
  });
})();
