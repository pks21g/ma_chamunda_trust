const contact = document.getElementById("contact");
const cl = document.getElementById("cl");
const show = document.getElementById("contact-banner");
contact.addEventListener(
  "click",
  () => {
    event.preventDefault();
    if (show.style.display == "flex") show.style.display = "none";
    else {
      show.style.display = "flex";
    }
  },
  500
);
cl.addEventListener('click', () =>{
  show.style.display = 'none';
})
