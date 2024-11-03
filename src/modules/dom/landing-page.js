import createNav from "./nav";
import createMainDiv from "./main-div";

const nav = createNav();
const main = createMainDiv("Nov", "4", "Morning");

export default function initializeWebsiteDom() {
  document.body.appendChild(nav);
  document.body.appendChild(main);
}