import { createDiv, createLabel, createInputText, createTextArea, createInputDate, createInputRadio, createInputSubmit } from './dom-elements';
import checkIcon from '../../images/check.png';
import removeIcon from '../../images/remove.png';

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
  const img = document.createElement('img');
  img.setAttribute('id', 'close-window');
  img.src = removeIcon;

  const form = document.createElement('form');
  form.setAttribute('action', '#');
  form.setAttribute('data-to-do-id','Test ID');

  const divTitle = createDivInputText('title', 'Title', 'title', 'Enter a new title...');
  const divDescription = createDivTextArea();
  const divDueDate = createDivInputDate('due-date', 'Due Date', 'due-date');
  const inputSubmit = createInputSubmit('add-todo-btn', 'Add new todo');

  form.appendChild(divTitle);
  form.appendChild(divDescription);
  form.appendChild(divDueDate);
  form.appendChild(inputSubmit);

  divAddDetails.appendChild(img);
  divAddDetails.appendChild(form);

  img.addEventListener('click', function(){
    this.parentElement.parentElement.removeChild(divAddDetails)
  });

  return divAddDetails;
}

export function createAddProject(){
  const li = document.createElement('li');
  li.classList.add('add-project');
  
  const inputProjectName = document.createElement('input');
  inputProjectName.setAttribute('type', 'text');
  inputProjectName.setAttribute('id', 'project-name');
  inputProjectName.setAttribute('placeholder', 'Enter project name...');

  const optionsDiv = createDiv('options');
  const saveBtn = document.createElement('img');
  saveBtn.setAttribute('id', 'save-new-project');
  saveBtn.src = checkIcon;
  const deleteBtn = document.createElement('img');
  deleteBtn.setAttribute('id', 'delete-new-project');
  deleteBtn.src = removeIcon;
  optionsDiv.appendChild(saveBtn);
  optionsDiv.appendChild(deleteBtn);

  li.appendChild(inputProjectName);
  li.appendChild(optionsDiv);

  return li;
}