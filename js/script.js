const hamburger = document.querySelector('.header-burger');
const navigation = document.querySelector('.navigation');

hamburger.addEventListener("click", () => {
   hamburger.classList.toggle("active");
   navigation.classList.toggle("active");
})