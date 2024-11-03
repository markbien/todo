import { createDiv, createPara } from "./dom-elements";
import logoIcon from '../../images/checklist.png';

export default function createNav(){
  const nav = document.createElement('nav');

  nav.appendChild(createLogo())
  nav.appendChild(createListContainer());;

  return nav;
}

function createLogo(){
  const logoDiv = createDiv('logo');
  const img = document.createElement('img');
  img.src = logoIcon;
  logoDiv.innerHTML = `Todoodoo`;
  logoDiv.appendChild(img);

  return logoDiv;
}

function createListContainer(){
  const listContainer = createDiv('list-container');

  const h2 = document.createElement('h2');
  h2.textContent = `My Projects`;

  listContainer.appendChild(h2);
  listContainer.appendChild(createProjectContainer());
  listContainer.appendChild(createNewProjectBtn());

  return listContainer;
}

function createNewProjectBtn() {
  const newProject = document.createElement('div');
  newProject.setAttribute('id', 'new-project');
  newProject.innerHTML = `<span>+</span> New Project`;

  return newProject;
}

function createProjectContainer(){
  const projecContainer = createDiv('project-container');
  const ul = document.createElement('ul');

  ul.appendChild(createDefaultProject());
  projecContainer.appendChild(ul);

  return projecContainer;
}

function createDefaultProject(){
  const defaultProject = document.createElement('li');
  defaultProject.classList.add('project');
  const defaultPara = createPara("project-title", "Default");
  defaultProject.appendChild(defaultPara);

  return defaultProject;
}