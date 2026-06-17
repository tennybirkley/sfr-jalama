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
  const dots   = document.querySelectorAll('.slideshow__dot');

  if (slides.length > 1) {
    let current = 0;

    function goTo(index) {
      slides[current].classList.remove('is-active');
      dots[current].classList.remove('is-active');
      current = index;
      slides[current].classList.add('is-active');
      dots[current].classList.add('is-active');
    }

    // Dot click navigation
    dots.forEach((dot, i) => dot.addEventListener('click', () => {
      clearInterval(timer);
      goTo(i);
      timer = setInterval(advance, 4500);
    }));

    function advance() {
      goTo((current + 1) % slides.length);
    }

    let timer = setInterval(advance, 4500);
  }

});
