export default function projectCollection() {
  const collection = [];
  const addProject = project => collection.push(project);
  const findProjectIndex = index => {
    return collection.findIndex(project => {
      return project.getId() === index;
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

  return {
    addProject,
    findProjectIndex,
    removeProject,
    printProjectDetails
  }
};