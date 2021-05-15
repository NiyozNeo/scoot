var burger = document.querySelector(".burger");
var nav = document.querySelector(".header__nav-wrapper");

burger.addEventListener("click", function () {
  burger.classList.toggle("burger--active");
  nav.classList.toggle("header__nav-wrapper--active");
})