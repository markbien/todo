const createDiv = (newClass) => {
  const div = document.createElement('div');
  div.classList.add(newClass);
  return div;
}

const createLabel = (labelFor, labelText) => {
  const label = document.createElement('label');
  label.setAttribute('for', labelFor);
  label.textContent = labelText;
  return label;
};

const createInputText = (inputId, placeholder) => {
  const input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.setAttribute('id', inputId);;
  input.setAttribute('placeholder', placeholder);

  return input;
};

const createTextArea = () => {
  const textarea = document.createElement('textarea');
  textarea.setAttribute('id', 'description');
  textarea.setAttribute('placeholder', 'Enter a new description...');
  textarea.setAttribute('rows', '12');

  return textarea;
};

const createInputDate = (inputId) => {
  const input = document.createElement('input');
  input.setAttribute('type', 'date');
  input.setAttribute('id', inputId);

  return input;
};

const createInputRadio = (inputName, inputId) => {
  const input = document.createElement('input');
  input.setAttribute('type', 'radio');
  input.setAttribute('name', inputName);
  input.setAttribute('id', inputId);

  return input;
};

const createInputSubmit = (inputId, value) => {
  const input = document.createElement('input');
  input.setAttribute('id', inputId);
  input.setAttribute('type', 'submit');
  input.setAttribute('value', value);

  return input;
};