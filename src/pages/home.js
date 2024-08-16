import homeImage from "../../images/foodsie.png";

const homeImg = document.createElement("img");

homeImg.src = homeImage;

export const loadHome = () => {
  const content = document.querySelector("#content");

  const header1 = document.createElement("h1");
  header1.textContent = "Restaurant";
  header1.style.textAlign = "center";
  const someText = document.createElement("p");
  someText.textContent =
    "This is some restaurant text on the homepage bla bla bla";
  someText.style.textAlign = "center";
  const someFooter = document.createElement("div");
  someFooter.textContent = "Footer la la la";
  someFooter.style.textAlign = "center";

  content.append(header1);
  content.append(someText);
  content.append(someFooter);
};
