import { createDiv } from "./dom-elements"

export default function createMainDiv(month, day, time){
  const mainDiv = createDiv('main');

  mainDiv.appendChild(createGreetings(month, day, time));
  mainDiv.appendChild(createMainContainer());

  return mainDiv;
}

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

function createMainContainer(){
  const mainContainerDiv = createDiv('main-container')
  
  const addTodoDiv = createDiv('add-todo')
  addTodoDiv.textContent = `+ Add Todo`;

  const cardContainerUl = document.createElement('ul');
  cardContainerUl.classList.add('card-container');

  mainContainerDiv.appendChild(addTodoDiv);
  mainContainerDiv.appendChild(cardContainerUl);

  return mainContainerDiv;
}

