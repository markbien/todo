import { createDiv, createPara, createInputText, createLi } from './dom-elements.js';
import editIcon from '../../images/edit.png';
import trashIcon from '../../images/trash.png';
import checkIcon from '../../images/check.png';
import removeIcon from '../../images/remove.png';

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

export const editProjectDom = (currentProjectName, currentProjectId) => {
  const li = createLi('edit-project');
  li.dataset.projectId = currentProjectId;

  const projectTitle = createPara('project-title', "Edit this");
  projectTitle.innerHTML = `Old Name: <span>${currentProjectName}</span>`;

  const projectName = createInputText('project-name', 'Enter new project name...');

  const options = createDiv('options');
  const checkImg = document.createElement('img');
  checkImg.src = checkIcon;
  const removeImg = document.createElement('img');
  removeImg.src = removeIcon;

  options.appendChild(checkImg);
  options.appendChild(removeImg);

  li.appendChild(projectTitle);
  li.appendChild(projectName);
  li.appendChild(options);

  return li;
}