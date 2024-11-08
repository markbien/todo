import createNav from "./nav";
import createMainDiv from "./main-div";
import { format } from "date-fns";

const date = new Date();
const month = format(date, "MMM");
const day = format(date, "d");

const nav = createNav();
const main = createMainDiv(month, day, "Day");

export default function initializeWebsiteDom() {
  document.body.appendChild(nav);
  document.body.appendChild(main);
}