export default function projectCollection() {
  const collection = [];
  const addProject = project => collection.push(project);

  const findProjectIndex = projectName => {
    return collection.findIndex(project => {
      return project.getId() === projectName;
    });
  };

  const removeProject = index => {
    collection.splice(index, 1);
  }

  const printProjectDetails = () =>{
    return collection.forEach(project => {
      project.printDetails();
    });
  }

  const mapProjectName = () => {
    return collection.map(project => {
      return project.getId();
    });
  }

  const getProject = index => {
    return collection[index];
  };

  return {
    addProject,
    findProjectIndex,
    removeProject,
    printProjectDetails,
    mapProjectName,
    getProject,
  }
};