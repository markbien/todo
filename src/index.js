import "./style.css";
import initializeWebsiteDom from "./modules/dom/landing-page.js";
import { createAddProject } from "./modules/dom/div-input.js";
import createProjectCollection from "./modules/project-collection.js";
import project from "./modules/project.js";
import {
  createDefaultProject,
  addProjectToNavInDOM,
  removeProjectFromNavInDOM,
} from "./modules/dom/nav.js";
import { createProjectDom, editProjectDom } from "./modules/dom/project-dom.js";
import {
  importDataFromStorage,
  exportDataToStorage,
} from "./modules/storage.js";

initializeWebsiteDom();
const projectCollection = initializeStorage();

loadProjects(projectCollection);

function initializeStorage() {
  const newProjectCollection = createProjectCollection();
  importDataFromStorage(newProjectCollection);
  return newProjectCollection;
}

document.addEventListener("DOMContentLoaded", function () {
  addEventListenerToNewProject();
});

function addEventListenerToNewProject() {
  const newProjectBtn = document.querySelector("#new-project");
  const projectContainer = document.querySelector(".project-container > ul");

  newProjectBtn.addEventListener("click", function () {
    if (document.querySelector(".add-project") !== null) return; // Make sure that add new project window is not duplicated;
    projectContainer.appendChild(createAddProject());

    attachEventRemoveDiv();
    attachEventSaveProject();
    console.log("test");
  });
}

function attachEventRemoveDiv() {
  const removeBtn = document.querySelector("#delete-new-project");
  removeBtn.addEventListener("click", function () {
    removeAddProjectDiv();
  });
}

function removeAddProjectDiv() {
  const projectContainer = document.querySelector(".project-container > ul");
  const addDiv = document.querySelector(".add-project");

  projectContainer.removeChild(addDiv);
}

function attachEventSaveProject() {
  const saveBtn = document.querySelector("#save-new-project");
  saveBtn.addEventListener("click", function () {
    // Add project here
    const projectName = document.querySelector("#project-name");
    if (saveNewProjectToCollection(projectName.value) === false) return; // Make sure that ID doesn't already exists

    removeAddProjectDiv();
  });
}

function showProjectNameAlreadyExists(newName) {
  if (projectCollection.findProjectName(newName) !== -1) {
    alert("Project name already exists. Choose another name.");
    return true;
  }
  return false;
}

function saveNewProjectToCollection(projectName) {
  const newId = generateId(projectName);

  if (showProjectNameAlreadyExists(projectName) === true) return false;

  const newProject = project(newId, projectName);
  projectCollection.addProject(newProject); // Add project to collection
  projectCollection.printProjectDetails();

  const newProjectDOM = createProjectDom(newId, projectName);
  addProjectToNavInDOM(newProjectDOM); // Add project to DOM, will still need to add eventlisteners here

  addEventToDeleteProject(newProjectDOM, newId);
  addEventToEditProject(newProjectDOM);

  exportDataToStorage(projectCollection);

  return true;
}

function generateId(projectName) {
  return projectName.replaceAll(" ", "").toLowerCase();
}

function loadProjects(projectCollection) {
  projectCollection.mapProjectNameAndId().forEach((project) => {
    if (project.id === "default"){
      const defaultProject = createDefaultProject(project.id, project.name)
      addProjectToNavInDOM(defaultProject);
      defaultProject.addEventListener('click', function(){
        loadTodos(project.id, this);
      });
    }
    else {
      const newProjectDOM = createProjectDom(project.id, project.name);
      addProjectToNavInDOM(newProjectDOM);
      addEventToDeleteProject(newProjectDOM, project.id);
      addEventToEditProject(newProjectDOM);

      newProjectDOM.addEventListener('click', function(){
        loadTodos(project.id,this);
      });
    }
  });
}

function loadTodos(projectId, currentDomSelected){
  const projectContainer = document.querySelector('.project-container');
  projectContainer.dataset.activeProject = projectId;

  const projects = projectContainer.firstChild.childNodes;
  projects.forEach(project => {
    project.classList.remove('active');
  });
  currentDomSelected.classList.add('active');
}

function addEventToDeleteProject(newProjectDOM, newId) {
  const deleteImg = newProjectDOM.lastChild.lastChild;
  deleteImg.addEventListener("click", function () {
    const index = projectCollection.findProjectIndex(newId);
    projectCollection.removeProject(index);
    exportDataToStorage(projectCollection);
    removeProjectFromNavInDOM(newProjectDOM);
  });
}

function addEventToEditProject(newProjectDOM) {
  const editImg = newProjectDOM.lastChild.firstChild;
  const projectId = newProjectDOM.dataset.projectId;
  const projectName = newProjectDOM.firstChild.textContent;

  editImg.addEventListener("click", function () {
    const editCurrentProjectDOM = editProjectDom(projectName, projectId);
    newProjectDOM.replaceWith(editCurrentProjectDOM);
    addEventToCloseTheEditProject(editCurrentProjectDOM, newProjectDOM);
    addEventToSaveChangesAndCloseTheEditProject(editCurrentProjectDOM);
  });
}

function addEventToCloseTheEditProject(editCurrentProjectDOM, newProjectDOM) {
  const closeBtn = editCurrentProjectDOM.lastChild.lastChild;
  closeBtn.addEventListener("click", function () {
    editCurrentProjectDOM.replaceWith(newProjectDOM);
  });
}

function addEventToSaveChangesAndCloseTheEditProject(editCurrentProjectDOM) {
  const saveBtn = editCurrentProjectDOM.lastChild.firstChild;
  // const oldName = document.querySelector("p.project-title > span").textContent;
  const oldId = editCurrentProjectDOM.dataset.projectId;

  saveBtn.addEventListener("click", function () {
    const inputText = editCurrentProjectDOM.childNodes[1];
    // const newId = generateId(inputText.value);
    if (inputText.value === "") {
      alert("Please enter a valid project name.");
      return;
    }
    if (showProjectNameAlreadyExists(inputText.value)) return;

    const currentProject = projectCollection.getProject(
      projectCollection.findProjectIndex(oldId)
    );

    currentProject.setName(inputText.value);

    const newProjectDOM = createProjectDom(oldId, inputText.value);
    addProjectToNavInDOM(newProjectDOM);
    addEventToEditProject(newProjectDOM);
    addEventToDeleteProject(newProjectDOM, oldId);

    const parentContainer = editCurrentProjectDOM.parentElement;
    parentContainer.removeChild(editCurrentProjectDOM);

    projectCollection.printProjectDetails();

    exportDataToStorage(projectCollection);
  });
}

const addTodoBtn = document.querySelector('#add-todo');
addTodoBtn.addEventListener('click', function(){
  const currentProjectSelected = document.querySelector('.project-container');
  console.log(currentProjectSelected.dataset.activeProject);
});