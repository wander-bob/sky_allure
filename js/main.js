const menuBtn = document.getElementById("menu-btn");

const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelectorAll(".line");
const dateInput = document.getElementById("date");

function changeBtn(isOpen) {
  menuBtnIcon[0].style.transform = isOpen ? "rotate(135deg) translate(5px, -5px)" : "rotate(0deg) translate(0)";
  menuBtnIcon[1].style.transform = isOpen ? "translateX(100px)" : "translateX(0px)";
  menuBtnIcon[2].style.transform = isOpen ? "rotate(-135deg) translate(5px, 5px)" : "rotate(0deg) translate(0)";
}

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  const isOpen = navLinks.classList.contains("open");
  changeBtn(isOpen);
})

navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  changeBtn(false)
})

dateInput.addEventListener("input", (e) => {

});

dateInput.placeholder = Intl.DateTimeFormat("pt-BR", {
  dateStyle: "medium"
}).format(new Date())


ScrollReveal().reveal('.header_image_card-1', {
  delay: 375,
  scale: 1.5,
  distance: "15px"
});

ScrollReveal().reveal('.header_image_card-3', {
  delay: 300,
  scale: 1.5,
  distance: "15px"
});

ScrollReveal().reveal('.header_image_card-5', {
  delay: 450,
  scale: 1.5,
  distance: "20px"
});

ScrollReveal().reveal('.header_image_card-2', {
  delay: 600,
  scale: 1.5,
  distance: "20px"
});

ScrollReveal().reveal('.header_image_card-4', {
  delay: 500,
  scale: 1.5,
  distance: "20px"
});

ScrollReveal().reveal('.header_image_card-6', {
  delay: 700,
  scale: 1.5,
  distance: "20px"
});


ScrollReveal().reveal('.header_content h1', {
  delay: 250,
  distance: "50px"
});

ScrollReveal().reveal('.header_content p', {
  delay: 350,
  distance: "50px"
});
ScrollReveal().reveal('form', {
  delay: 750,
  distance: "50px"
});
