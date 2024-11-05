import project from "./project";

export function importDataFromStorage(storage){
  checkThatStorageExists();
  let projectCollection = JSON.parse(localStorage.getItem('projectCollection'));
  checkThatDefaultProjectExists(projectCollection);
  projectCollection.forEach(item => {
    storage.addProject(project(item.id, item.name));
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