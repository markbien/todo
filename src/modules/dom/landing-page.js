import createNav from "./nav";
import createMainDiv, { createCard } from "./main-div";

const nav = createNav();
const main = createMainDiv("Nov", "4", "Morning");

export default function initializeWebsiteDom() {
  document.body.appendChild(nav);
  document.body.appendChild(main);
}

// document.addEventListener("DOMContentLoaded", function () {
//   // const cardContainer = document.querySelector(".card-container");

//   const card1 = createCard(
//     12345,
//     "Clean aircon",
//     "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio veritatis enim minus? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio veritatis enim minus? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio veritatis enim minus?",
//     "2024-12-06"
//   );
  
//   // cardContainer.appendChild(card1);
// });