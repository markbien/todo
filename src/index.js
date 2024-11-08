import "./style.css";
import initializeWebsiteDom from "./modules/dom/landing-page.js";
import {
  createAddProject,
  createAddDetails,
  createEditDetails,
} from "./modules/dom/div-input.js";
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
import todo from "./modules/todo.js";
import { createCard } from "./modules/dom/main-div.js";

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
  projectName = projectName.trim();
  const newId = generateId(projectName);

  if (showProjectNameAlreadyExists(projectName) === true) return false;
  if (projectName === '') {
    alert('Please enter a valid project name.');
    return false;
  }

  const newProject = project(newId, projectName);
  projectCollection.addProject(newProject); // Add project to collection
  // projectCollection.printProjectDetails();

  const newProjectDOM = createProjectDom(newId, projectName);
  addProjectToNavInDOM(newProjectDOM); // Add project to DOM, will still need to add eventlisteners here

  addEventToDeleteProject(newProjectDOM, newId);
  addEventToEditProject(newProjectDOM);

  newProjectDOM.addEventListener("click", function () {
    loadTodos(newId, this);
  });

  exportDataToStorage(projectCollection);

  return true;
}

function generateId(projectName) {
  return projectName.replaceAll(" ", "").toLowerCase();
}

function loadProjects(projectCollection) {
  projectCollection.printAll().forEach((newProject) => {
    if (newProject.id === "default") {
      const defaultProject = createDefaultProject(
        newProject.id,
        newProject.name
      );
      addProjectToNavInDOM(defaultProject);

      const cardContainer = document.querySelector(".card-container");
      cardContainer.textContent = "";

      // This is to load the Default's todos first
      newProject.todos.forEach(() => {
        loadTodos(newProject.id);
      });

      defaultProject.addEventListener("click", () => {
        clearActiveProject();

        document.querySelector(".project-container").dataset.activeProject =
          "default";
        document
          .querySelector("[data-project-id='default']")
          .classList.add("active");
        loadTodos(newProject.id);
      });
    } else {
      const newProjectDOM = createProjectDom(newProject.id, newProject.name);
      addProjectToNavInDOM(newProjectDOM);

      newProjectDOM.addEventListener("click", function () {
        clearActiveProject();
        document.querySelector(".project-container").dataset.activeProject =
          newProject.id;
        document
          .querySelector(`[data-project-id='${newProject.id}']`)
          .classList.add("active");

        clearCardContainer();
        newProject.todos.forEach(() => {
          loadTodos(newProject.id);
        });
      });

      addEventToDeleteProject(newProjectDOM, newProject.id);
      addEventToEditProject(newProjectDOM);
    }
  });
}

function clearActiveProject() {
  const projectContainer = document.querySelector(".project-container");
  const projects = projectContainer.firstChild.childNodes;
  projects.forEach((project) => {
    project.classList.remove("active");
  });
}

function loadTodos(projectId) {
  clearCardContainer();

  const projectIndex = projectCollection.findProjectIndex(projectId);
  const todoArr = projectCollection.getProject(projectIndex).getTodos();
  todoArr.forEach((todo) => {
    const newCard = createCard(
      todo.id,
      todo.title,
      todo.description,
      todo.dueDate,
      todo.completionStatus
    );
    if (todo.completionStatus === "true") {
      const todoDom = newCard.firstChild.firstChild;
      todoDom.childNodes[0].classList.add("completed");
      todoDom.childNodes[1].classList.add("completed");
      todoDom.childNodes[2].classList.add("completed");
    }

    const cardContainer = document.querySelector(".card-container");
    cardContainer.appendChild(newCard);

    const deleteImg = newCard.lastChild.lastChild;
    addEventToDeleteATodo(
      deleteImg,
      projectIndex,
      todo.id,
      cardContainer,
      newCard
    );

    const editImg = newCard.lastChild.firstChild;
    addEventToEditATodo(
      editImg,
      todo.title,
      todo.description,
      todo.dueDate,
      todo.completionStatus
    );
  });
}

function addEventToDeleteATodo(
  img,
  projectIndex,
  todoId,
  cardContainer,
  newCard
) {
  img.addEventListener("click", function () {
    const currentTodoIndex = projectCollection
      .getProject(projectIndex)
      .getTodoIndexById(todoId);
    projectCollection.getProject(projectIndex).removeATodo(currentTodoIndex);
    cardContainer.removeChild(newCard);
    exportDataToStorage(projectCollection);
  });
}

function addEventToEditATodo(
  img,
  currentTitle,
  currentDescription,
  currentDueDate,
  currentStatus
) {
  img.addEventListener("click", function () {
    if (document.body.lastChild.classList.contains("add-details")) return; // Ensure no duplicate edit window appears
    const editDetails = createEditDetails(
      currentTitle,
      currentDescription,
      currentDueDate,
      currentStatus
    );
    const todoFromStorageCompletionStatus =
      img.parentElement.parentElement.dataset.completionStatus;
    if (todoFromStorageCompletionStatus === "true") {
      editDetails.lastChild.childNodes[3].childNodes[1].checked = true;
    }

    document.body.appendChild(editDetails);

    const saveChangesBtn = editDetails.lastChild.lastChild;
    saveChangesBtn.addEventListener("click", () => {
      const todo = img.parentElement.parentElement;
      const todoId = todo.dataset.todoId;
      const newTitle = editDetails.lastChild.childNodes[0].lastChild.value;
      const newDescription =
        editDetails.lastChild.childNodes[1].lastChild.value;
      const newDueDate = editDetails.lastChild.childNodes[2].lastChild.value;
      const newStatus = document
        .querySelector('input[name="status"]:checked')
        .getAttribute("id");

      const projectId =
        document.querySelector(".project-container").dataset.activeProject;
      const projectIndex = projectCollection.findProjectIndex(projectId);
      const currentTodo = projectCollection
        .getProject(projectIndex)
        .getTodo(todoId);
      currentTodo.setTitle(newTitle);
      currentTodo.setDescription(newDescription);
      currentTodo.setDueDate(newDueDate);
      currentTodo.setStatus(newStatus);

      todo.firstChild.firstChild.childNodes[0].textContent = newTitle;
      todo.firstChild.firstChild.childNodes[1].textContent = newDescription;
      todo.firstChild.firstChild.childNodes[2].textContent = newDueDate;
      todo.dataset.completionStatus = newStatus;

      if (newStatus === "true") {
        todo.firstChild.firstChild.childNodes[0].classList.add("completed");
        todo.firstChild.firstChild.childNodes[1].classList.add("completed");
        todo.firstChild.firstChild.childNodes[2].classList.add("completed");
      } else {
        todo.firstChild.firstChild.childNodes[0].classList.remove("completed");
        todo.firstChild.firstChild.childNodes[1].classList.remove("completed");
        todo.firstChild.firstChild.childNodes[2].classList.remove("completed");
      }

      exportDataToStorage(projectCollection);
      document.body.removeChild(editDetails);
    });
  });
}

function addEventToDeleteProject(newProjectDOM, newId) {
  const deleteImg = newProjectDOM.lastChild.lastChild;
  deleteImg.addEventListener("click", function (e) {
    e.stopPropagation();
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
    if (inputText.value.trim() === "") {
      alert("Please enter a valid project name.");
      return;
    }
    if (showProjectNameAlreadyExists(inputText.value)) return;

    const currentProject = projectCollection.getProject(
      projectCollection.findProjectIndex(oldId)
    );

    currentProject.setName(inputText.value.trim());

    const newProjectDOM = createProjectDom(oldId, inputText.value.trim());
    addProjectToNavInDOM(newProjectDOM);
    addEventToEditProject(newProjectDOM);
    addEventToDeleteProject(newProjectDOM, oldId);

    newProjectDOM.addEventListener("click", function () {
      loadTodos(oldId, this);
    });

    const parentContainer = editCurrentProjectDOM.parentElement;
    parentContainer.removeChild(editCurrentProjectDOM);

    projectCollection.printProjectDetails();

    exportDataToStorage(projectCollection);
  });
}

const addTodoBtn = document.querySelector("#add-todo");
addTodoBtn.addEventListener("click", function () {
  if (document.body.lastChild.classList.contains("add-details") === true)
    return; // Prevent duplicate add todo window

  const currentProjectSelectedDOM =
    document.querySelector(".project-container");
  const currentProjectId = currentProjectSelectedDOM.dataset.activeProject;
  const currentProjectIndex =
    projectCollection.findProjectIndex(currentProjectId);

  const addTodoWindow = createAddDetails();
  document.body.appendChild(addTodoWindow);

  const addTodoBtn = addTodoWindow.lastChild.lastChild;
  addTodoBtn.addEventListener("click", function () {
    const title = document.querySelector("#title").value;
    const id = generateId(title);
    const description = document.querySelector("#description").value;
    const dueDate = document.querySelector("#due-date").value;

    // Make control statement to ensure that all fields are completed

    const newTodo = todo(id, title, description, dueDate);

    projectCollection.getProject(currentProjectIndex).addATodo(newTodo);

    // load todo in page
    const cardContainer = document.querySelector(".card-container");
    const newCard = createCard(
      newTodo.getId(),
      newTodo.getTitle(),
      newTodo.getDescription(),
      newTodo.getDueDate(),
      false
    );
    cardContainer.appendChild(newCard);

    const deleteImg = newCard.lastChild.lastChild;
    const editImg = newCard.lastChild.firstChild;
    const projectIndex = projectCollection.findProjectIndex(currentProjectId);

    addEventToDeleteATodo(deleteImg, projectIndex, id, cardContainer, newCard);
    addEventToEditATodo(editImg, title, description, dueDate, false);

    exportDataToStorage(projectCollection);

    document.body.removeChild(addTodoWindow);
  });
});

document.querySelector(".logo").addEventListener("click", function () {
  // console.log(projectCollection.getProject(0).getTodos());
  console.log(projectCollection.printAll());
});

function clearCardContainer() {
  const cardContainer = document.querySelector(".card-container");
  cardContainer.textContent = "";
}
