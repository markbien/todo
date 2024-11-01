import { createDiv, createLabel, createInputText, createTextArea, createInputDate, createInputRadio, createInputSubmit } from './dom-elements';

function createDivInputText(labelFor, labelText, inputId, placeholder){
  const div = createDiv('div-input');
  const label = createLabel(labelFor, labelText);
  const input = createInputText(inputId, placeholder);

  div.appendChild(label);
  div.appendChild(input);

  return div;
}

function createDivTextArea(){
  const div = createDiv('div-input');
  const label = createLabel('description', 'Description');
  const textarea = createTextArea();

  div.appendChild(label);
  div.appendChild(textarea);

  return div;
}

function createDivInputDate(labelFor, labelText, inputId){
  const div = createDiv('div-input');
  const label = createLabel(labelFor, labelText);
  const date = createInputDate(inputId);

  div.appendChild(label);
  div.appendChild(date);

  return div;
}

function createDivInputRadio(){
  const div = createDiv('div-radio');
  div.textContent = 'Completed';

  const radioTrue = createInputRadio('status', 'true');
  const labelTrue = createLabel('true', 'Yes');

  const radioFalse = createInputRadio('status', 'false');
  const labelFalse = createLabel('false', 'No');

  div.appendChild(radioTrue);
  div.appendChild(labelTrue);
  div.appendChild(radioFalse);
  div.appendChild(labelFalse);

  return div;
}

export function createAddDetails(){
  const divAddDetails = createDiv('add-details');

  const form = document.createElement('form');
  form.setAttribute('action', '#');
  form.setAttribute('data-to-do-id','Test ID');

  const divTitle = createDivInputText('title', 'Title', 'title', 'Enter a new title...');
  const divDescription = createDivTextArea();
  const divDueDate = createDivInputDate('due-date', 'Due Date', 'due-date');
  const divStatus = createDivInputRadio();
  const inputSubmit = createInputSubmit('add-todo-btn', 'Add new todo');

  form.appendChild(divTitle);
  form.appendChild(divDescription);
  form.appendChild(divDueDate);
  form.appendChild(divStatus);
  form.appendChild(inputSubmit);

  divAddDetails.appendChild(form);

  return divAddDetails;
}