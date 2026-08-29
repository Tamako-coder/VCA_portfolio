// ===== Hero background video: force autoplay (home page only) =====
const heroVideo = document.getElementById('heroVideo');
if (heroVideo) {
  heroVideo.muted = true; // required for autoplay in most browsers
  const tryPlay = () => {
    const p = heroVideo.play();
    if (p && typeof p.catch === 'function') {
      p.catch(() => {
        // Autoplay blocked — start on first user interaction as a fallback.
        const resume = () => {
          heroVideo.play().finally(() => {
            document.removeEventListener('click', resume);
            document.removeEventListener('touchstart', resume);
            document.removeEventListener('scroll', resume);
          });
        };
        document.addEventListener('click', resume, { once: true });
        document.addEventListener('touchstart', resume, { once: true });
        document.addEventListener('scroll', resume, { once: true });
      });
    }
  };
  if (heroVideo.readyState >= 2) {
    tryPlay();
  } else {
    heroVideo.addEventListener('loadeddata', tryPlay, { once: true });
  }
}

// ===== Mobile burger menu =====
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    menuToggle.classList.toggle('open', open);
    menuToggle.setAttribute('aria-expanded', String(open));
  });

  // Close the menu after tapping a link (mobile)
  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      menuToggle.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// ===== Scroll reveal =====
const revealTargets = document.querySelectorAll('.section, .values');
revealTargets.forEach((el) => el.classList.add('reveal'));

const revealObserver = new IntersectionObserver(
  (entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

revealTargets.forEach((el) => revealObserver.observe(el));

// ===== Footer year =====
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// ===== Portfolio Carousel (mobile only) =====
if (document.querySelector('.portfolio-swiper')) {
  const portfolioSwiper = new Swiper('.portfolio-swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    speed: 800,
    effect: 'slide',
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
}

