import "./style.css";
import initializeWebsiteDom from "./modules/dom/landing-page.js";
import { createAddProject } from "./modules/dom/div-input.js";
import createProjectCollection from "./modules/project-collection.js";
import project from "./modules/project.js";
import { createDefaultProject, addProjectToNavInDOM } from "./modules/dom/nav.js";
// import todo from './modules/todo.js';
// import project from './modules/project.js';
// import projectCollection from './modules/project-collection.js';

// const collection = projectCollection();

// const workProject = project(1, "Work");
// const task1 = todo(12345, "Restart laptop", "Restart laptop to speed up performance again", "Saturday");
// const task2 = todo(12346, "Shutdown laptop", "Shut down laptop during weekends", "Saturday");
// workProject.addATodo(task1);
// workProject.addATodo(task2);

// const homeProject = project(2, "Home");
// const task3 = todo(12347, "Clean aircon", "Clean aircon every week to prevent clogging", "Sunday");
// const task4 = todo(12348, "Remove molds", "Molds can accumulate due to rainy season and moist", "Sunday");
// homeProject.addATodo(task3);
// homeProject.addATodo(task4);

// collection.addProject(workProject);
// collection.addProject(homeProject);

// collection.printProjectDetails();
// workProject.printTodos();
// homeProject.printTodos();

// const shutdownIndex = workProject.getTodoIndex(12346);
// console.log(shutdownIndex);
// workProject.removeATodo(workProject.getTodoIndex(12346));
// workProject.printTodos();
// workProject.removeATodo(0);
// workProject.removeATodo(workProject.getTodoIndex(12346));
// console.log("-----");
// workProject.printTodos();
// console.log("-----");

// collection.printProjectDetails();
// collection.removeProject(0);
// collection.printProjectDetails();
// collection.removeProject(1);
// console.log("----")
// collection.printProjectDetails();

// import { createAddProject } from "./modules/dom/div-input";

// const ta = createAddDetails();
// document.body.appendChild(ta);

// const ul = document.querySelector('.project-container > ul');
// const addProject = createAddProject();
// ul.appendChild(addProject);;

initializeWebsiteDom();

function initializeStorage(){
  const projectCollection = createProjectCollection();
  loadDefaultProject(projectCollection);

  return projectCollection;
}

document.addEventListener("DOMContentLoaded", function () {
  addEventListenerToNewProject();
  // Load projects here
  initializeStorage();
});

function loadDefaultProject(projectCollection){
  const DEFAULT_PROJECT_INDEX = 0;
  const defaultIndex = projectCollection.findProjectIndex('Default');
  if (defaultIndex === -1) { // Create "Default" project
    const defaultProject = project(DEFAULT_PROJECT_INDEX, "Default");
    projectCollection.addProject(defaultProject);
  }

  // Get from storage > Add Default project to DOM
  const defaultProject = projectCollection.getProject(DEFAULT_PROJECT_INDEX);
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

    removeAddProjectDiv();
  });
}

function generateRandomIdFrom1(maxNumber){
  const randNum = Math.floor(Math.random() * maxNumber) + 1; // +1 to exclude 0 from results
  return randNum;
}