// Set current year in footer
document.getElementById("y").textContent = new Date().getFullYear();

// Hide / show header on scroll
let lastScroll = 0;
let ticking = false;

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (!ticking) {
    window.requestAnimationFrame(() => {

      // Always show header when near top
      if (currentScroll <= 10) {
        header.classList.remove("header--hidden");
      }
      // Scrolling down → hide
      else if (currentScroll > lastScroll) {
        header.classList.add("header--hidden");
      }
      // Scrolling up → show
      else {
        header.classList.remove("header--hidden");
      }

      lastScroll = currentScroll;
      ticking = false;
    });

    ticking = true;
  }
});
