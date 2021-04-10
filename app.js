const menuBtn = document.querySelector(".menuBtn");
const sideNav = document.querySelector(".sideNav");
const shrink = document.querySelector(".shrink");
const navbar = document.querySelector(".navbar");

document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("scroll", () => {
    if (window.scrollY >= 80) {
      navbar.classList.add("shrink");
    } else {
      navbar.classList.remove("shrink");
    }
  });

  menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    sideNav.classList.toggle("active");
  });
});
