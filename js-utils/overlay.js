const overlay = document.getElementById("bd-overlay");

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;
  if (scrollPosition >= 600 && scrollPosition <= 2230) {
    overlay.style.display = "flex";
  } else {
    overlay.style.display = "none";
  }
});
