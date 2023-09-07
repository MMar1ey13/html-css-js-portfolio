function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
// Function to add 'in-view' class when an element enters the viewport
function handleIntersection(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
    } else {
      entry.target.classList.remove('in-view');
    }
  });
}

// Create an Intersection Observer
const observer = new IntersectionObserver(handleIntersection, {
  root: null, // Use the viewport as the root
  rootMargin: '0px', // No margin
  threshold: 0.3, // 30% of the element must be visible to trigger
});

// Select the sections you want to animate
const sectionsToAnimate = document.querySelectorAll('section');

// Observe each section
sectionsToAnimate.forEach((section) => {
  observer.observe(section);
});

