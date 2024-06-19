const tasks = document.querySelector("#tasks");
const taskList = [];

function loadTasks(taskList){
    let index = 0;
    taskList.forEach(task=>{
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

  return taskContainer;
}

taskList.push("Clear aircon filter");
taskList.push("Clear electric fans (1st floor and 2nd floor");
taskList.push("Prepare furbabies' foods");

loadTasks(taskList);

const deleteButtons = tasks.querySelectorAll(".task > img");


deleteButtons.forEach(job => {
    job.addEventListener("click", ()=>{
        const task = job.parentElement;
        const taskId = task.getAttribute("id");

        deleteTaskFromList(taskId);
        removeTaskFromDOM(job);
    });
});

function deleteTaskFromList(index)
{
    const deletedTask = taskList.splice(index, 1);
}

function removeTaskFromDOM(taskElement){
    const task = taskElement.parentElement;
    const taskContainer = task.parentElement
    taskContainer.removeChild(task);
}