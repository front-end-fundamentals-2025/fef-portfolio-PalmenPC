const themeButton = document.getElementById("theme-button");
const bodyElement = document.querySelector("body");
const headerElement = document.querySelector("header");
const footerElement = document.querySelector("footer");

themeButton.addEventListener("click", () => {
  bodyElement.classList.toggle("light-mode");
  headerElement.classList.toggle("light-mode-navigation");
  footerElement.classList.toggle("light-mode-navigation");
});
