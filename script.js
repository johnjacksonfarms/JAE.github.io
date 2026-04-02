document.addEventListener('DOMContentLoaded', function() {

  /* NAV SCROLL */
  const nav = document.getElementById('nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 40);
    });
  }

  /* MOBILE HAMBURGER */
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => navLinks.classList.remove('open'));
    });
  }

  /* HERO */
  const heroTitle = document.getElementById('hero-title');
  const heroSub = document.getElementById('hero-subtitle');
  if (heroTitle) heroTitle.innerText = SITE_CONFIG.heroTitle;
  if (heroSub) heroSub.innerText = SITE_CONFIG.heroSubtitle;

  /* STATS BAR */
  const statsBar = document.getElementById('stats-bar');
  if (statsBar && SITE_CONFIG.stats) {
    SITE_CONFIG.stats.forEach(stat => {
      const item = document.createElement('div');
      item.className = 'stat-item';
      item.innerHTML = `<span class="stat-value">${stat.value}</span><span class="stat-label">${stat.label}</span>`;
      statsBar.appendChild(item);
    });
  }

  /* SERVICES */
  const servicesContainer = document.getElementById('services-container');
  if (servicesContainer && SITE_CONFIG.services) {
    SITE_CONFIG.services.forEach(service => {
      const card = document.createElement('div');
      card.className = 'service-card reveal';
      card.innerHTML = `
        <span class="service-icon">${service.icon}</span>
        <div class="service-title">${service.title}</div>
        <p class="service-desc">${service.description}</p>
      `;
      servicesContainer.appendChild(card);
    });
  }

  /* PORTFOLIO */
  const portfolioContainer = document.getElementById('portfolio-container');
  if (portfolioContainer && SITE_CONFIG.portfolio) {
    SITE_CONFIG.portfolio.forEach(item => {
      const card = document.createElement('div');
      card.className = 'portfolio-card reveal';
      card.innerHTML = `
        <span class="portfolio-category">${item.category}</span>
        <div class="portfolio-title">${item.title}</div>
        <p class="portfolio-desc">${item.description}</p>
        <span class="portfolio-status">${item.status}</span>
      `;
      portfolioContainer.appendChild(card);
    });
  }

  /* ABOUT */
  const aboutText = document.getElementById('about-text');
  if (aboutText) aboutText.innerText = SITE_CONFIG.aboutText;

  /* CONTACT */
  const contactContainer = document.getElementById('contact-email');
  if (contactContainer && SITE_CONFIG.emails) {
    SITE_CONFIG.emails.forEach(email => {
      const block = document.createElement('div');
      block.className = 'email-block';
      block.innerHTML = `
        <span class="email-label">${email.label}</span>
        <a class="email-link" href="mailto:${email.address}">${email.address}</a>
      `;
      contactContainer.appendChild(block);
    });
  }

  /* FOOTER */
  const footerText = document.getElementById('footer-text');
  if (footerText) {
    footerText.innerText = '© ' + new Date().getFullYear() + ' ' + SITE_CONFIG.name + '. All rights reserved.';
  }

  /* SCROLL REVEAL */
  const reveals = document.querySelectorAll('.reveal');
  if (reveals.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    reveals.forEach(el => observer.observe(el));
  }

});
