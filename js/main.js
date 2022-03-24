// Navbar

const header = document.querySelector(".header"),
  navbar = document.querySelector(".header--navbar__nav"),
  openNavBtn = document.querySelector(".header .nav--icon i"),
  closeNavBtn = document.querySelector(".header .close-btn");

window.addEventListener("scroll", () => {
  header.classList.toggle("on-scroll", window.scrollY > 0);
});

function openNav(btn) {
  btn.addEventListener("click", (e) => {
    navbar.classList.add("open-nav");
  });
}

function closeNav(btn) {
  btn.addEventListener("click", (e) => {
    navbar.classList.remove("open-nav");
  });
}

openNav(openNavBtn);
closeNav(closeNavBtn);

window.addEventListener("click", (e) => {
  if (e.target !== navbar && e.target !== openNavBtn) {
    navbar.classList.remove("open-nav");
  }
});
