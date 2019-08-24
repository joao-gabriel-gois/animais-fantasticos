export default function initScrollAnimation() {
// Selection scroll-animated sections
  const sections = document.querySelectorAll('[data-anime="scroll"]');
  // Creating Event's Callback function
  function animaScroll() {
    sections.forEach((section) => {
      // Setting the client window point to start scroll animation
      const isAnimatedPoint = (section.getBoundingClientRect().top - window.innerHeight * 0.57) < 0;
      // Activating it if it's time to
      if (isAnimatedPoint) { section.classList.add('active'); } else if (section.classList.contains('active')) {
        section.classList.remove('active');
      }
    });
  }
  // Verifying
  if (sections.length) {
  // Activating animation of first scroll-animated section
    sections[0].classList.add('active');
    // Adding scroll event to window to launch previous callback func.
    window.addEventListener('scroll', animaScroll);
  }
}
