export default function initSmoothScroll() {
  // Selectiong Internal Links
  const internalLinks = document.querySelectorAll('[data-menu="smoothScroll"] a[href^="#"]');
  // Event's callback function
  function scrollToSection(event) {
    event.preventDefault();
    // getting clicked target's href
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    section.scrollIntoView({// native animation function
      block: 'start',
      behavior: 'smooth',
    });
  }
  // Verifying
  if (internalLinks.length) {
    // Adding event's to each internal link
    internalLinks.forEach((link) => {
      link.addEventListener('click', scrollToSection);
    });
  }
}
