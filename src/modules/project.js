export default function project(id, name){
  const getId = ()=> id;
  const getName = ()=> name;
  const setName = newName => name = newName;

  const listOfTodos = [];
  const addATodo = todo => listOfTodos.push(todo);
  const getTodoIndex = id => {
    return listOfTodos.findIndex(todo => {
      return todo.getId() === id;
    });
  };
  const removeATodo = index => {
    listOfTodos.splice(index, 1);
  };
  const printTodos = ()=> {
    listOfTodos.forEach(todo => {
      todo.printDetails();
    });
  };

  return {
    getId,
    getName,
    setName,
    addATodo,
    getTodoIndex,
    removeATodo,
    printTodos
  }
}