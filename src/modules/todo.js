export default function todo(title, description, dueDate){
  const getTitle = ()=> title;
  const getDescription = ()=> description;
  const getDueDate = ()=> dueDate;
  
  const setTitle = newTitle => title = newTitle;
  const setDescription = newDesc => description = newDesc;
  const setDueDate = newDueDate => dueDate = newDueDate;

  return {
    getTitle,
    getDescription,
    getDueDate,
    setTitle,
    setDescription,
    setDueDate
  }
}