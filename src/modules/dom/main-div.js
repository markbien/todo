import { createDiv } from "./dom-elements"

function createGreetings(month, day, time){
  const greetingsDiv = createDiv('greetings');

  const dateDom = createDateDom(month, day);
  const mainGreetingDom = createMainGreeting(time);

  greetingsDiv.appendChild(dateDom);
  greetingsDiv.appendChild(mainGreetingDom);

  return greetingsDiv;
}

function createDateDom(month, day){
  const dateDiv = createDiv("date");

  const monthDiv = createDiv("date-month");
  monthDiv.textContent = month;

  const dayDiv = createDiv('date-today');
  dayDiv.textContent = day;

  dateDiv.appendChild(monthDiv);
  dateDiv.appendChild(dayDiv);

  return dateDiv;
}

function createMainGreeting(time){
  const mainGreetingDiv = createDiv('main-greeting');

  const greetingDiv = createDiv();
  greetingDiv.innerHTML = `Good <span>${time}</span>.`;

  const planDiv = createDiv();
  planDiv.textContent = `What's your plan for today?`;

  mainGreetingDiv.appendChild(greetingDiv);
  mainGreetingDiv.appendChild(planDiv);

  return mainGreetingDiv;
}