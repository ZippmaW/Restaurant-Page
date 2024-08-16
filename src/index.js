import "./styles.css";
import { loadHome } from "./pages/home";
import { loadMenu } from "./pages/menu";
import { loadAbout } from "./pages/about";

const content = document.querySelector("#content");

const home = document.querySelector("#home");
const menu = document.querySelector("#menu");
const about = document.querySelector("#about");

loadHome();

home.addEventListener("click", () => {
  content.textContent = "";
  loadHome();
});

menu.addEventListener("click", () => {
  content.textContent = "";
  loadMenu();
});

about.addEventListener("click", () => {
  content.textContent = "";
  loadAbout();
});
