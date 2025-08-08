document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('nav-menu');
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!expanded));
      navMenu.classList.toggle('is-open');
    });
  }

  const billingToggle = document.querySelector('.pricing .billing-toggle');
  const pricingGrid = document.querySelector('.pricing__grid');
  const valueEls = document.querySelectorAll('.price__value');
  if (billingToggle && pricingGrid && valueEls.length) {
    billingToggle.addEventListener('click', (e) => {
      const btn = e.target.closest('.toggle');
      if (!btn) return;
      document.querySelectorAll('.billing-toggle .toggle').forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      const mode = btn.getAttribute('data-billing');
      pricingGrid.setAttribute('data-billing-state', mode);
      valueEls.forEach(el => {
        const m = el.getAttribute('data-price-monthly');
        const y = el.getAttribute('data-price-yearly');
        el.textContent = mode === 'yearly' ? y : m;
      });
    });
  }

  const ctaForm = document.querySelector('.cta__form');
  if (ctaForm) {
    ctaForm.addEventListener('submit', () => {
      const email = document.getElementById('workEmail')?.value || '';
      alert(`Спасибо! Мы отправили приглашение на ${email}.`);
    });
  }
});