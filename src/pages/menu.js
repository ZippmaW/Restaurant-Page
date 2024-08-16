export const loadMenu = () => {
  const content = document.querySelector("#content");
  const mainHeader = document.createElement("h1");
  mainHeader.textContent = "Menu";
  mainHeader.style.textAlign = "center";

  const dishes = document.createElement("div");
  dishes.classList.add("dishes");
  dishes.style.textAlign = "center";

  const dish1 = document.createElement("div");
  dish1.classList.add("meal-1");
  dish1.textContent = "Meal 1";

  const dish2 = document.createElement("div");
  dish2.classList.add("meal-2");
  dish2.textContent = "Meal 2";

  const dish3 = document.createElement("div");
  dish3.classList.add("meal-3");
  dish3.textContent = "Meal 3";

  const dish4 = document.createElement("div");
  dish4.classList.add("meal-4");
  dish4.textContent = "Meal 4";

  dishes.append(dish1, dish2, dish3, dish4);
  content.append(dishes);
};
