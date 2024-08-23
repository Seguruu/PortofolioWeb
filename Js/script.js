// Toogle Class Active
const navbarNav = document.querySelector(".navbar-nav");

// Ketika Hamburger Menu di Click
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Ketika Yang di Klik Bukan bagian dari hamburger menu dan juga icon navbar hamburger menu maka humburger menu akan hidden
const hamburger = document.querySelector("#hamburger-menu");
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
