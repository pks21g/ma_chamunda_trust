const overlay = document.getElementById("popupOverlay");
const popup = document.getElementById("popupBox");
const closeBtn = document.getElementById("closePopup");
window.onload = () => {
  setTimeout(() => {
    overlay.style.display = "flex";
  }, 500);
};
closeBtn.onclick = () => {
  overlay.style.display = 'none'
}

