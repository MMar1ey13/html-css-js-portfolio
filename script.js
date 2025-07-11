function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Close menu when clicking outside
document.addEventListener("click", (e) => {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  if (!icon.contains(e.target) && !menu.contains(e.target)) {
    menu.classList.remove("open");
    icon.classList.remove("open");
  }
});

// Intersection Observer for fade-in animation
function handleIntersection(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("in-view");
    } else {
      entry.target.classList.remove("in-view");
    }
  });
}

const observer = new IntersectionObserver(handleIntersection, {
  root: null,
  rootMargin: "0px",
  threshold: 0.3,
});

const sectionsToAnimate = document.querySelectorAll("section");

sectionsToAnimate.forEach((section) => {
  section.classList.add("fade-in");
  observer.observe(section);
});
