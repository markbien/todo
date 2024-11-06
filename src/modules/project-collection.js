export default function projectCollection() {
  const collection = [];
  const addProject = project => collection.push(project);

  const findProjectId = projectId => {
    return collection.findIndex(project => {
      return project.getId() === projectId;
    });
  };

  const findProjectName = projectName => {
    return collection.findIndex(project => {
      return project.getName() === projectName;
    });
  }

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

  const mapProjectNameAndId = () => {
    return collection.map(project => {      
      return {
        id: project.getId(),
        name: project.getName(),
      };
    });
  };

  const getProject = index => {
    return collection[index];
  };

  const convertToJSON = () => {
    return JSON.stringify(mapProjectNameAndId());
  }

  return {
    addProject,
    findProjectId,
    findProjectName,
    removeProject,
    printProjectDetails,
    mapProjectName,
    getProject,
    convertToJSON,
    mapProjectNameAndId
  }
};