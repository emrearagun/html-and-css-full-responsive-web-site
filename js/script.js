const menuBtn = document.querySelector("#menu-btn");
const searchBtn = document.querySelector("#search-btn");
const cartBtn = document.querySelector("#cart-btn");
const cartItem = document.querySelector(".cart-items-container");
const searchForm = document.querySelector(".search-form");
const navbar = document.querySelector(".navbar");


searchBtn.addEventListener("click", function (e) {
  e.stopPropagation();
  searchForm.classList.toggle("active");
  cartItem.classList.remove("active");
});

cartBtn.addEventListener("click", function (e) {
  e.stopPropagation();
  cartItem.classList.toggle("active");
  searchForm.classList.remove("active");
});

document.addEventListener("click", function (e) {
  if (
    !e.composedPath().includes(searchBtn) &&
    !e.composedPath().includes(searchForm)
  ) {
    searchForm.classList.remove("active");
  }

  if (
    !e.composedPath().includes(cartBtn) &&
    !e.composedPath().includes(cartItem)
  ) {
    cartItem.classList.remove("active");
  }
});


menuBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    navbar.classList.toggle("active");
    searchForm.classList.remove("active");
    cartItem.classList.remove("active");
  });
  
  document.addEventListener("click", function (e) {
    if (!e.composedPath().includes(menuBtn) && !e.composedPath().includes(navbar)) {
      navbar.classList.remove("active");
    }
  });
  
