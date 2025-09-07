// Toggle Mobile Navigation Menu
function toggleMenu() {
  const nav = document.getElementById("nav");
  nav.classList.toggle("show");
}

// Close menu automatically when a link is clicked (mobile friendly)
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll("#nav a");
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      const nav = document.getElementById("nav");
      if (nav.classList.contains("show")) {
        nav.classList.remove("show");
      }
    });
  });
});

// Update footer year automatically
document.getElementById("year").textContent = new Date().getFullYear();
