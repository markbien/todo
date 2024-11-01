import { createDiv } from './dom-elements.js';
import editIcon from '../../images/edit.png';
import trashIcon from '../../images/trash.png';

export const createProjectDom = (projectName) => {
  const li = document.createElement('li');
  li.classList.add('project');

  const title = document.createElement('p');
  title.textContent = projectName;

  const div = createDiv("test");
  const editImg = document.createElement('img');
  editImg.src = editIcon;
  const trashImg = document.createElement('img');
  trashImg.src = trashIcon;

  li.appendChild(title);
  li.appendChild(div);
  div.appendChild(editImg);
  div.appendChild(trashImg);

  return li;
};