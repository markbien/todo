import { createDiv } from './dom-elements.js';
import editIcon from '../../images/edit.png';
import trashIcon from '../../images/trash.png';

export const createProjectDom = (projectId, projectName) => {
  const li = document.createElement('li');
  li.classList.add('project');
  li.dataset.projectId = projectId;

  const title = document.createElement('p');
  title.textContent = projectName;
  title.classList.add('project-title');

  const div = createDiv();
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