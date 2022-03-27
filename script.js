const botaoMenu = document.querySelector(".header__menu-items--pop-up-button");
const menu = document.querySelector(".header__menu-items--pop-up");

botaoMenu.addEventListener("click", () => {
  menu.classList.toggle("header__menu-items--pop-up-enable");
});
