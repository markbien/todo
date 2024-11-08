export const createDiv = (newClass) => {
  const div = document.createElement('div');
  if (newClass !== undefined) div.classList.add(newClass);
  return div;
}

export const createLabel = (labelFor, labelText) => {
  const label = document.createElement('label');
  label.setAttribute('for', labelFor);
  label.textContent = labelText;
  return label;
};

export const createInputText = (inputId, placeholder) => {
  const input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.setAttribute('id', inputId);;
  input.setAttribute('placeholder', placeholder);

  return input;
};

export const createTextArea = () => {
  const textarea = document.createElement('textarea');
  textarea.setAttribute('id', 'description');
  textarea.setAttribute('placeholder', 'Enter a new description...');
  textarea.setAttribute('rows', '12');

  return textarea;
};

export const createInputDate = (inputId) => {
  const input = document.createElement('input');
  input.setAttribute('type', 'date');
  input.setAttribute('id', inputId);

  return input;
};

export const createInputRadio = (inputName, inputId) => {
  const input = document.createElement('input');
  input.setAttribute('type', 'radio');
  input.setAttribute('name', inputName);
  input.setAttribute('id', inputId);

  return input;
};

export const createInputSubmit = (inputId, value) => {
  const input = document.createElement('input');
  input.setAttribute('id', inputId);
  input.setAttribute('type', 'submit');
  input.setAttribute('value', value);

  return input;
};

export const createLi = (className) => {
  const li = document.createElement('li');
  li.classList.add(className);
  
  return li;
}

export const createPara = (className, text) => {
  const p = document.createElement('p');
  p.classList.add(className);
  p.textContent = text;

  return p;
}