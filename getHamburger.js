var menu_icon = document.getElementById("menu-icon");
menu_icon.addEventListener("click", () => {
  if (menu_icon.src.includes("/assets/hamburger.svg")) {
    menu_icon.src = "/assets/trisul.svg";
  } else {
    menu_icon.src = "/assets/hamburger.svg";
  }
});
