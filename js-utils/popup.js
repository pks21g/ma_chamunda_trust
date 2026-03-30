const overlay = document.getElementById("popupOverlay");
const popup = document.getElementById("popupBox");
const closeBtn = document.getElementById("closePopup");
window.onload = () => {
  setTimeout(() => {
    overlay.style.display = "flex";
  }, 500);
  document.body.classList.add('noscroll');
};
closeBtn.onclick = () => {
  overlay.style.display = 'none'
  document.body.classList.remove('noscroll');
}

