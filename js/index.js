const navToggle = document.querySelector(".navToggle");
const containerHeaderNavMenu = document.querySelector(".containerHeaderNavMenu");

navToggle.addEventListener("click", () => {
  containerHeaderNavMenu.classList.toggle("containerHeaderNavMenu_visible");
});