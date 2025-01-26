// Copy Menu
function copyMenu() {
  // copy inside .dpt-cat to .departments
  let dptCategory = document.querySelector(".dpt-cat");
  let dptPlace = document.querySelector(".departments");
  dptPlace.innerHTML = dptCategory.innerHTML;

  //   copy inside nav to nav
  let mainNav = document.querySelector(".header-nav nav");
  let navPlace = document.querySelector(".off-canvas nav");
  navPlace.innerHTML = mainNav.innerHTML;

  //   copy .header-top .wrapper to .the-top-nav
  let topNav = document.querySelector(".header-top .wrapper");
  let topPlace = document.querySelector(".off-canvas .the-top-nav");
  topPlace.innerHTML = topNav.innerHTML;
}
copyMenu();

// Show mobile menu
const menuButton = document.querySelector(".trigger"),
  closeButton = document.querySelector(".t-close"),
  addClass = document.querySelector(".site");

menuButton.addEventListener("click", function () {
  addClass.classList.toggle("show-menu");
});

closeButton.addEventListener("click", function () {
  addClass.classList.remove("show-menu");
});

// Show sub menu on mobile
// const subMenu = document.querySelectorAll(".has-child .icon-small");
// subMenu.forEach((menu) => menu.addEventListener("click", toggle));

// function toggle(e) {
//   e.preventDefault();
//   subMenu.forEach((item) =>
//     item != this ? item.closest(".has-child").classList.remove("expand") : null
//   );
//   if (this.closest(".has-child").classList != "expand");
//   this.closest(".has-child").classList.toggle("expand");
// }

const subMenu = document.querySelectorAll(".has-child .icon-small");

subMenu.forEach((menu) => menu.addEventListener("click", toggle));

function toggle(e) {
  e.preventDefault();
  subMenu.forEach((item) => {
    if (item !== this) {
      item.closest(".has-child").classList.remove("expand");
    }
  });
  this.closest(".has-child").classList.toggle("expand");
}

// Slider
const swiper = new Swiper(".swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
});

// Show search
// Show search
const searchButton = document.querySelector(".t-search"),
  tClose = document.querySelector(".search-close"),
  showClass = document.querySelector(".site");

searchButton.addEventListener("click", function() {
  showClass.classList.toggle("show-search");
});

tClose.addEventListener("click", function () {
  showClass.classList.remove("show-search");
});