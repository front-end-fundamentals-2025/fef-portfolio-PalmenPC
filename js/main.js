const themeButton = document.getElementById("theme-button");
const bodyElement = document.querySelector("body");

themeButton.addEventListener("click", () => {
  bodyElement.classList.toggle("light-mode");
});
