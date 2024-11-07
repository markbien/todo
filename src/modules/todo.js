export default function todo(id, title, description, dueDate){
  const getId = ()=> id;
  const getTitle = ()=> title;
  const getDescription = ()=> description;
  const getDueDate = ()=> dueDate;
  let isCompleted = false;
  const getStatus = () => isCompleted;
  
  const setTitle = newTitle => title = newTitle;
  const setDescription = newDesc => description = newDesc;
  const setDueDate = newDueDate => dueDate = newDueDate;
  const setStatus = newStatus => isCompleted = newStatus;

  const printDetails = ()=> {
    console.log(`ID: ${getId()}\nTitle: ${getTitle()}\nDescription: ${getDescription()}\nDue Date: ${getDueDate()}`);
  }

  return {
    getId,
    getTitle,
    getDescription,
    getDueDate,
    setTitle,
    setDescription,
    setDueDate,
    getStatus,
    setStatus,
    printDetails
  }
}