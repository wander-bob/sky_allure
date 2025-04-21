const menuBtn = document.getElementById("menu-btn");

const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelectorAll(".line")


function changeBtn(isOpen) {
  menuBtnIcon[0].style.transform = isOpen ? "rotate(135deg) translate(5px, -5px)" : "rotate(0deg) translate(0)";
  menuBtnIcon[1].style.transform = isOpen ? "translateX(100px)" : "translateX(0px)";
  menuBtnIcon[2].style.transform = isOpen ? "rotate(-135deg) translate(5px, 5px)" : "rotate(0deg) translate(0)";
}

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");
  const isOpen = navLinks.classList.contains("open");
  changeBtn(isOpen);
})

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  changeBtn(false)
})

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000
}

ScrollReveal().reveal(".header_image img", {
  ...scrollRevealOption,
  orgin: "right"
})

ScrollReveal().reveal(".header_content h1", {
  ...scrollRevealOption,
  delay: 500
})

ScrollReveal().reveal(".header_content p", {
  ...scrollRevealOption,
  delay: 1000
})

ScrollReveal().reveal(".header_content form", {
  ...scrollRevealOption,
  delay: 1500
})

ScrollReveal().reveal(".header_content .bar", {
  ...scrollRevealOption,
  delay: 2000
})

ScrollReveal().reveal(".header_image_card", {
  duration: 1000,
  interval: 500,
  delay: 2500,
})