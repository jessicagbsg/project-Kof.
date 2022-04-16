const menuButton = document.querySelector(".header__menu-items--pop-up-button");
const menu = document.querySelector(".header__menu-items--pop-up");

menuButton.addEventListener("click", () => {
  menu.classList.toggle("header__menu-items--pop-up-enable");
});

window.addEventListener("scroll", () => {
  menu.classList.remove("header__menu-items--pop-up-enable");
});
