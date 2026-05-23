document.addEventListener('DOMContentLoaded', () => {

  const prefersReducedMotion = window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ─────────────────────────────────────────────
     ACTIVE NAV LINK
  ───────────────────────────────────────────── */
  const currentPage = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .dropdown-menu a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });

  /* ─────────────────────────────────────────────
     SCROLL-TRIGGERED NAV SHADOW
  ───────────────────────────────────────────── */
  const nav = document.querySelector('.nav');
  if (nav) {
    const onScroll = () => {
      if (window.scrollY > 8) nav.style.boxShadow = '0 2px 12px rgba(31,61,58,0.08)';
      else nav.style.boxShadow = 'none';
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ─────────────────────────────────────────────
     DESKTOP DROPDOWN NAV
  ───────────────────────────────────────────── */
  function setDropdown(dd, open) {
    dd.classList.toggle('open', open);
    const toggle = dd.querySelector('.dropdown-toggle');
    if (toggle) toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  }
  function closeAllDropdowns() {
    document.querySelectorAll('.nav-dropdown.open').forEach(d => setDropdown(d, false));
  }

  document.querySelectorAll('.nav-dropdown').forEach(dd => {
    const toggle = dd.querySelector('.dropdown-toggle');
    const menu   = dd.querySelector('.dropdown-menu');
    if (!toggle || !menu) return;

    // Toggle on click
    toggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = dd.classList.contains('open');
      closeAllDropdowns();
      setDropdown(dd, !isOpen);
    });

    // Hover (desktop UX) — only on devices that actually hover
    if (window.matchMedia('(hover: hover)').matches) {
      dd.addEventListener('mouseenter', () => setDropdown(dd, true));
      dd.addEventListener('mouseleave', () => setDropdown(dd, false));
    }
  });

  // Close dropdown on outside click
  document.addEventListener('click', closeAllDropdowns);

  /* ─────────────────────────────────────────────
     MOBILE DRAWER
  ───────────────────────────────────────────── */
  const toggle     = document.querySelector('.nav-toggle');
  const drawer     = document.querySelector('.mobile-drawer');
  const overlay    = document.querySelector('.mobile-menu-overlay');
  const closeBtn   = document.querySelector('.mobile-drawer-close');

  function openDrawer() {
    if (!drawer || !overlay) return;
    overlay.style.display = 'block';
    requestAnimationFrame(() => {
      overlay.classList.add('open');
      drawer.classList.add('open');
    });
    document.body.style.overflow = 'hidden';
    toggle && toggle.setAttribute('aria-expanded', 'true');
    if (closeBtn) closeBtn.focus();
  }
  function closeDrawer() {
    if (!drawer || !overlay) return;
    const wasOpen = drawer.classList.contains('open');
    overlay.classList.remove('open');
    drawer.classList.remove('open');
    document.body.style.overflow = '';
    toggle && toggle.setAttribute('aria-expanded', 'false');
    // hide overlay after transition
    setTimeout(() => { overlay.style.display = 'none'; }, 300);
    if (wasOpen && toggle) toggle.focus();
  }

  toggle  && toggle.addEventListener('click', openDrawer);
  closeBtn && closeBtn.addEventListener('click', closeDrawer);
  overlay  && overlay.addEventListener('click', closeDrawer);

  // Close drawer when a navigation link inside it is followed
  drawer && drawer.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => closeDrawer());
  });

  /* ─────────────────────────────────────────────
     ESCAPE KEY — close dropdowns and drawer
  ───────────────────────────────────────────── */
  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    closeAllDropdowns();
    if (drawer && drawer.classList.contains('open')) closeDrawer();
  });

  /* ─────────────────────────────────────────────
     SCROLL REVEAL (Intersection Observer)
  ───────────────────────────────────────────── */
  const revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealEls.forEach(el => observer.observe(el));
  }

  /* ─────────────────────────────────────────────
     ANIMATED STAT COUNTERS
  ───────────────────────────────────────────── */
  function animateCounter(el, target, suffix, duration) {
    let start = null;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      el.textContent = Math.floor(eased * target) + suffix;
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }

  const statsBar = document.querySelector('.stats-bar');
  if (statsBar) {
    const statsObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        document.querySelectorAll('[data-count]').forEach(el => {
          const target   = parseInt(el.dataset.count, 10);
          const suffix   = el.dataset.suffix || '';
          if (prefersReducedMotion) {
            el.textContent = target + suffix;
          } else {
            animateCounter(el, target, suffix, 1400);
          }
        });
        statsObserver.disconnect();
      }
    }, { threshold: 0.5 });
    statsObserver.observe(statsBar);
  }

  /* ─────────────────────────────────────────────
     BACK TO TOP BUTTON
  ───────────────────────────────────────────── */
  const backBtn = document.querySelector('.back-to-top');
  if (backBtn) {
    window.addEventListener('scroll', () => {
      backBtn.classList.toggle('visible', window.scrollY > 400);
    }, { passive: true });
    backBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
    });
  }

  /* ─────────────────────────────────────────────
     FOOTER YEAR
  ───────────────────────────────────────────── */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

});
