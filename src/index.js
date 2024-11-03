import './style.css';
import initializeWebsiteDom from './modules/dom/landing-page.js';
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