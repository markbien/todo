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
  const getTodoIndexById = todoId => {
    return listOfTodos.findIndex(todo => {
      return todo.getId() === todoId;
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
  const printDetails = ()=> {
    console.log(`ID: ${getId()}\nName: ${getName()}`);
  };

  const getTodos = () => {
    return listOfTodos.map(todo => {
      return {
        id: todo.getId(),
        title: todo.getTitle(),
        description: todo.getDescription(),
        dueDate: todo.getDueDate(),
        completionStatus: todo.getStatus(),
      };
    });
  };

  const getTodo = (todoId) => {
    return listOfTodos.find(todo => {
      return todo.getId() === todoId;
    })
  };

  return {
    getId,
    getName,
    setName,
    addATodo,
    getTodoIndex,
    removeATodo,
    printTodos,
    printDetails,
    getTodos,
    getTodoIndexById,
    getTodo
  }
}