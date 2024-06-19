const tasks = document.querySelector("#tasks");
let taskList = [];

function loadTasks(taskList) {
  tasks.innerHTML = "";

  let index = 0;
  taskList.forEach((task) => {
    tasks.appendChild(generateTask(task, index));
    index++;
  });
}

function generateTask(taskDesc, id) {
  const taskContainer = document.createElement("div");
  taskContainer.classList.add("task");
  taskContainer.setAttribute("id", id);

  const taskDescription = document.createElement("p");
  taskDescription.textContent = taskDesc;

  const deleteTaskButton = document.createElement("img");
  deleteTaskButton.src = "images/trash.png";

  taskContainer.appendChild(taskDescription);
  taskContainer.appendChild(deleteTaskButton);

  attachDeleteFunction(deleteTaskButton);

  return taskContainer;
}

// Add test data
taskList.push("Clear aircon filter");
taskList.push("Clear electric fans (1st floor and 2nd floor");
taskList.push("Prepare furbabies' foods");

// Load program
loadTasks(taskList);

const deleteButtons = tasks.querySelectorAll(".task > img");

function attachDeleteFunction(currElement) {
  currElement.addEventListener("click", () => {
    const task = currElement.parentElement;
    const taskId = task.getAttribute("id");

    deleteTaskFromList(taskId);
    removeTaskFromDOM(currElement);
  });
}

function deleteTaskFromList(index) {
  if (taskList.length === 1) taskList.pop();
  else taskList.splice(index, 1);
}

function removeTaskFromDOM(taskElement) {
  const task = taskElement.parentElement;
  const taskContainer = task.parentElement;
  taskContainer.removeChild(task);
}

function addTaskToList() {
  const newTask = document.querySelector("#newtask input[type=text]");
  if (!newTask.value) {
    return;
  }
  taskList.push(newTask.value);
  newTask.value = "";

  loadTasks(taskList);
}

const addButton = document.querySelector("#newtask button");
addButton.addEventListener("click", addTaskToList);
