// Mobile nav toggle
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.nav-hamburger');
  const mobileNav = document.querySelector('.nav-mobile');

  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      mobileNav.classList.toggle('is-open');
      const isOpen = mobileNav.classList.contains('is-open');
      hamburger.setAttribute('aria-expanded', isOpen);
    });
  }
});
