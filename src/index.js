import "./style.css";
import initializeWebsiteDom from "./modules/dom/landing-page.js";
import { createAddProject } from "./modules/dom/div-input.js";
import createProjectCollection from "./modules/project-collection.js";
import project from "./modules/project.js";
import { createDefaultProject, addProjectToNavInDOM } from "./modules/dom/nav.js";
import { createProjectDom } from "./modules/dom/project-dom.js";
import { importDataFromStorage, exportDataToStorage } from "./modules/storage.js";

initializeWebsiteDom();
const projectCollection = initializeStorage();

loadProjects(projectCollection);

function initializeStorage(){
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
    const projectName = document.querySelector('#project-name');
    if (saveNewProjectToCollection(projectName.value) === false) return; // Make sure that ID doesn't already exists

    removeAddProjectDiv();
  });
}

function saveNewProjectToCollection(projectName){
  const newId = generateId(projectName);  
  
  if (projectCollection.findProjectIndex(newId) !== -1) {
    alert('Project Name already exists. Choose another name.');
    return false;
  }

  const newProject = project(newId, projectName);
  projectCollection.addProject(newProject); // Add project to collection
  projectCollection.printProjectDetails();
  
  addProjectToNavInDOM(createProjectDom(newId, projectName)); // Add project to DOM, will still need to add eventlisteners here

  exportDataToStorage(projectCollection);

  return true;
}

function generateId(projectName) {
  return projectName.replaceAll(' ', '').toLowerCase();
}

function loadProjects(projectCollection){
  projectCollection.mapProjectNameAndId().forEach(project => {
    if (project.id === 'default') addProjectToNavInDOM(createDefaultProject(project.id, project.name));
    else addProjectToNavInDOM(createProjectDom(project.id, project.name));
  });
}