// ===== CESI to Dublin 2026 - JS pour intégration React =====
(function () {
  let isScrolling = false;
  let animationTriggered = false;

  function initializeScrollEffects() {
    const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('is-visible');
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.fade-in-section, .slide-in-left, .slide-in-right');
    animatedElements.forEach((el) => observer.observe(el));

    // Révéler immédiatement les éléments déjà visibles au premier rendu
    const vh = window.innerHeight || document.documentElement.clientHeight;
    animatedElements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      const inView = rect.top < vh * 0.9 && rect.bottom > 0;
      if (inView) el.classList.add('is-visible');
    });

    const progressBar = document.querySelector('.progress-bar');
    if (progressBar) {
      const progressObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animationTriggered) {
            animateProgressBar();
            animationTriggered = true;
          }
        });
      }, { threshold: 0.5 });
      progressObserver.observe(progressBar);
    }
  }

  function animateProgressBar() {
    const progressBar = document.querySelector('.progress-bar');
    const targetWidth = 70;
    let currentWidth = 0;
    const increment = targetWidth / 100;
    const progressInterval = setInterval(() => {
      currentWidth += increment;
      if (currentWidth >= targetWidth) {
        currentWidth = targetWidth;
        clearInterval(progressInterval);
      }
      if (progressBar) {
        progressBar.style.width = currentWidth + '%';
        progressBar.setAttribute('aria-valuenow', String(currentWidth));
        const progressText = progressBar.querySelector('.progress-text');
        if (progressText) progressText.textContent = Math.round(currentWidth) + '%';
      }
    }, 20);
  }

  function initializeNavigation() {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    window.addEventListener('scroll', () => {
      if (!navbar) return;
      if (window.scrollY > 100) navbar.classList.add('navbar-scrolled');
      else navbar.classList.remove('navbar-scrolled');
    });
    navLinks.forEach((link) => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href') || '';
        if (href.startsWith('#')) {
          e.preventDefault();
          const targetId = href.substring(1);
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            const offsetTop = targetElement.offsetTop - 80;
            window.scrollTo({ top: offsetTop, behavior: 'smooth' });
            const navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarCollapse && navbarCollapse.classList.contains('show')) {
              const navbarToggler = document.querySelector('.navbar-toggler');
              if (navbarToggler) navbarToggler.dispatchEvent(new Event('click'));
            }
          }
        }
      });
    });
    window.addEventListener('scroll', () => {
      let current = '';
      const sections = document.querySelectorAll('section[id]');
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) current = section.getAttribute('id') || '';
      });
      navLinks.forEach((link) => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) link.classList.add('active');
      });
    });
  }

  function initializeContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitButton = contactForm.querySelector('button[type="submit"]');
      if (!submitButton) return;
      const originalText = submitButton.innerHTML;
      submitButton.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Envoi en cours...';
      submitButton.disabled = true;
      setTimeout(() => {
        showNotification('Message envoyé avec succès ! Nous vous répondrons bientôt.', 'success');
        contactForm.reset();
        submitButton.innerHTML = originalText;
        submitButton.disabled = false;
        submitButton.classList.add('btn-success');
        setTimeout(() => submitButton.classList.remove('btn-success'), 2000);
      }, 2000);
    });
  }

  function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `alert alert-${type} alert-dismissible fade show position-fixed`;
    notification.style.cssText = 'top: 100px; right: 20px; z-index: 9999; min-width: 300px; box-shadow: 0 10px 30px rgba(0,0,0,0.2);';
    notification.innerHTML = `${message}<button type="button" class="btn-close" data-bs-dismiss="alert"></button>`;
    document.body.appendChild(notification);
    setTimeout(() => notification.parentNode && notification.remove(), 5000);
  }

  function initializeDonationButtons() {
    const donationButtons = document.querySelectorAll('a[href*="helloasso"], a[href*="paypal"]');
    donationButtons.forEach((button) => {
      button.addEventListener('click', () => {
        button.style.transform = 'scale(0.95)';
        setTimeout(() => (button.style.transform = 'scale(1)'), 150);
      });
    });
  }

  function handleResize() {
    if (window.innerWidth < 768) {
      const heroSection = document.querySelector('.hero-section');
      if (heroSection) heroSection.style.backgroundAttachment = 'scroll';
    }
  }

  function debounce(func, wait) {
    let timeout;
    return function (...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  function throttle(func, limit) {
    let inThrottle;
    return function () {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
  }

  function boot() {
    initializeScrollEffects();
    initializeNavigation();
    initializeContactForm();
    initializeDonationButtons();
    window.addEventListener('scroll', throttle(() => {
      isScrolling = true;
      setTimeout(() => { isScrolling = false; }, 100);
    }, 16));
    window.addEventListener('resize', debounce(handleResize, 250));
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }

  // Exposer une API globale pour réinitialiser après rendu React
  window.CESIAnimations = {
    refresh: () => {
      try {
        initializeScrollEffects();
        initializeNavigation();
        initializeContactForm();
        initializeDonationButtons();
      } catch (e) {
        // éviter de casser l'app si indisponible
      }
    }
  };
})();


