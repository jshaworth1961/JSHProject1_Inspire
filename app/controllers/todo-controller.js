import _todoService from "../services/todo-service.js";
import _store from "../store.js";

//TODO Create the render function
function _drawTodos() {
  let todoCount = 0;
  console.log("You are in todo-controller _drawTodos()")

  let todos = _store.State.todos;
  console.log("todos in _drawTodos()", _store.State.todos);

  let listTodos = document.getElementById("todos");
  let todoCountOutput = document.getElementById("todo-count");

  let str = "";

  todos.forEach(t => {

    let ID = t._id.toString();
    console.log('ID is ', ID);
    console.log('t.completed is ', t.completed)
    
    //document.getElementById(ID).checked = t.completed;
  
    todoCount++;
    console.log('t is', t);
    str += t.TaskTodoTemplate;
   

  })

  //console.log(str);
  console.log("todoCount is ", todoCount)

  listTodos.innerHTML = str;
  todoCountOutput.value = todoCount.toString();



}

export default class TodoController {
  constructor() {
    //TODO Remember to register your subscribers
    console.log("You are in the TodControllers constructor")
    _store.subscribe("todos", _drawTodos)
    this.getTodos();

  }

  getTodos() {
    console.log('in todo-controller getTodos()');
    _todoService.getTodos();


  }

  addTodo(event) {
    event.preventDefault();
    let formData = event.target;

    console.log("You are in todo-controller addTodo")
    
    let newTaskTodo = 
    {
      //TODO build the todo object from the data that comes into this method
        description: formData.todo.value,
        completed:false,
        user:'John'

    };

    console.log("newTaskTodo is",newTaskTodo)

    _todoService.addTodo(newTaskTodo);

    formData.reset();

    /*
    
    TodoService.addTodoAsync(newTaskTodo);
    */
  }

  deleteTodo(id)
  {

    _todoService.deleteTodo(id);

  }

  updateCheckboxStatus(id,completed)
  {

    console.log('in todo-controller updateCheckboxStatus',completed);

    _todoService.updateCheckboxStatus(id,completed);
  }

  //NOTE This method will pass an Id to your service for the TODO that will need to be toggled
  toggleTodoStatus(todoId) {
    TodoService.toggleTodoStatusAsync(todoId);
  }

  //NOTE This method will pass an Id to your service for the TODO that will need to be deleted
  removeTodo(todoId) {
    TodoService.removeTodoAsync(todoId);
  }
}
