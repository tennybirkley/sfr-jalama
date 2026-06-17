document.addEventListener('DOMContentLoaded', () => {

  // Mobile nav toggle
  const hamburger = document.querySelector('.nav-hamburger');
  const mobileNav = document.querySelector('.nav-mobile');

  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      mobileNav.classList.toggle('is-open');
      hamburger.setAttribute('aria-expanded', mobileNav.classList.contains('is-open'));
    });
  }

  // Slideshow
  const slides = document.querySelectorAll('.slideshow__slide');

  if (slides.length > 1) {
    let current = 0;

    function advance() {
      slides[current].classList.remove('is-active');
      current = (current + 1) % slides.length;
      slides[current].classList.add('is-active');
    }

    setInterval(advance, 4500);
  }

});
