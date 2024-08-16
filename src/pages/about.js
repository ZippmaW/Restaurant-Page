export const loadAbout = () => {
  const content = document.querySelector("#content");

  const header = document.createElement("div");
  header.textContent = "About Page";
  header.style.textAlign = "center";

  const mainText = document.createElement("div");
  mainText.textContent = "Some information and stuff";
  mainText.style.textAlign = "center";

  content.append(header);
  content.append(mainText);
};
