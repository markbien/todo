import project from "./project";
import todo from "./todo";

export function importDataFromStorage(storage){
  checkThatStorageExists();
  let projectCollection = JSON.parse(localStorage.getItem('projectCollection'));
  checkThatDefaultProjectExists(projectCollection);

  projectCollection.forEach(proj => {
    const newProject = project(proj.id, proj.name);

    if (proj.todos !== undefined) {
      proj.todos.forEach(myTodo => {
        const newTodo = todo(myTodo.id, myTodo.title, myTodo.description, myTodo.dueDate)
        if (myTodo.completionStatus === 'true') newTodo.setStatus('true');
        newProject.addATodo(newTodo);
      });
    }

    storage.addProject(newProject);
  });

  return projectCollection;
}

export function exportDataToStorage(storage){
  localStorage.setItem("projectCollection", storage.convertToJSON());
}

function checkThatStorageExists(){
  let projectCollection = JSON.parse(localStorage.getItem('projectCollection'));
  if (projectCollection === null) {
    localStorage.setItem('projectCollection', '[]');
  }
}

function checkThatDefaultProjectExists(projectCollection){
  const index = projectCollection.findIndex(item => {
    return item.id === 'default';
  });

  if (index !== -1) return;
  const defaultProject = {
    id: 'default',
    name: 'Default',
  };

  projectCollection.unshift(defaultProject);
}