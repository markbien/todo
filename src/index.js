import "./style.css";
import initializeWebsiteDom from "./modules/dom/landing-page.js";
import { createAddProject } from "./modules/dom/div-input.js";
import createProjectCollection from "./modules/project-collection.js";
import project from "./modules/project.js";
import { createDefaultProject, addProjectToNavInDOM } from "./modules/dom/nav.js";

initializeWebsiteDom();
const projectCollection = initializeStorage();

loadDefaultProject(projectCollection) // Load default project here

function initializeStorage(){
  // this is where we can load from JSON later
  return createProjectCollection();
}

document.addEventListener("DOMContentLoaded", function () {
  addEventListenerToNewProject();
});

function loadDefaultProject(projectCollection){
  let defaultIndex = projectCollection.findProjectIndex('default');
  if (defaultIndex === -1) { // Create "Default" project
    const defaultProject = project(generateId("Default"), "Default");
    projectCollection.addProject(defaultProject);
    defaultIndex = projectCollection.findProjectIndex('default');
  }

  // Get from storage > Add Default project to DOM
  const defaultProject = projectCollection.getProject(defaultIndex);
  const defaultProjectDOM = createDefaultProject(defaultProject.getId(), defaultProject.getName());
  addProjectToNavInDOM(defaultProjectDOM);
}

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
  
  return true;
}

function generateId(projectName) {
  return projectName.replaceAll(' ', '').toLowerCase();
}