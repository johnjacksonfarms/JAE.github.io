/* NAV SCROLL */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
});
 
/* MOBILE HAMBURGER */
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
 
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
 
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});
 
/* HERO */
document.getElementById('hero-title').innerText = SITE_CONFIG.heroTitle;
document.getElementById('hero-subtitle').innerText = SITE_CONFIG.heroSubtitle;
 
/* STATS BAR */
const statsBar = document.getElementById('stats-bar');
SITE_CONFIG.stats.forEach(stat => {
  const item = document.createElement('div');
  item.className = 'stat-item';
  item.innerHTML = `<span class="stat-value">${stat.value}</span><span class="stat-label">${stat.label}</span>`;
  statsBar.appendChild(item);
});
 
/* SERVICES */
const servicesContainer = document.getElementById('services-container');
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
 
/* PORTFOLIO */
const portfolioContainer = document.getElementById('portfolio-container');
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
 
/* ABOUT */
document.getElementById('about-text').innerText = SITE_CONFIG.aboutText;
 
/* CONTACT */
const contactContainer = document.getElementById('contact-email');
SITE_CONFIG.emails.forEach(email => {
  const block = document.createElement('div');
  block.className = 'email-block';
  block.innerHTML = `
    <span class="email-label">${email.label}</span>
    <a class="email-link" href="mailto:${email.address}">${email.address}</a>
  `;
  contactContainer.appendChild(block);
});
 
/* FOOTER */
document.getElementById('footer-text').innerText =
  '© ' + new Date().getFullYear() + ' ' + SITE_CONFIG.name + '. All rights reserved.';
 
/* SCROLL REVEAL */
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });
 
reveals.forEach(el => observer.observe(el));
 
