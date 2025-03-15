/* Theme Button */
const themeButton = document.getElementById("theme-button");
const headerElement = document.querySelector("header");
const bodyElement = document.querySelector("body");
const footerElement = document.querySelector("footer");

function lightMode() {
  localStorage.theme = "light";
  bodyElement.classList.add("light-mode");
  headerElement.classList.add("light-mode-navigation");
  footerElement.classList.add("light-mode-navigation");
}

function darkMode() {
  localStorage.theme = "dark";
  bodyElement.classList.remove("light-mode");
  headerElement.classList.remove("light-mode-navigation");
  footerElement.classList.remove("light-mode-navigation");
}

/* Retrieves the previously stored theme or enables dark mode */
let theme = localStorage.getItem("theme") || darkMode();

if (localStorage.theme === "dark") {
  darkMode();
} else if (localStorage.theme === "light") {
  lightMode();
}

themeButton.addEventListener("click", () => {
  if (localStorage.theme === "dark") {
    lightMode();
  } else if (localStorage.theme === "light") {
    darkMode();
  }
});
