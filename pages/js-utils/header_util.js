
var ham = document.querySelector(".ham-menu");
var nav_items = document.querySelector(".navigation-items");
var lines = document.querySelectorAll(".lines");
ham.addEventListener("click", () => {
  nav_items.classList.toggle("active");
  ham.classList.toggle("active");
});

