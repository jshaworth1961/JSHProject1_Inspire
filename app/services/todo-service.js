import TaskTodo from "../models/todo.js"
import _store from "../store.js";


// @ts-ignore
const _todoApi = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/John/todos/", //for testing only using James
  timeout: 8000
});

class TodoService {

  constructor()
  {
    console.log("You are in the TodoService constructor");
  }
  getTodos() {
    console.log("in todo-service getTodos()");

      _todoApi
        .get("")
        .then(res =>
        {
          //debugger;
          console.log('LINE 25 res.data.data is',res.data.data);
          
          let todos = res.data.data.map(t => new TaskTodo(t));
          console.log('LINE 27 todos are',todos);

          _store.commit("todos",todos);

          console.log('LINE31 in Todo Service getTodos', todos);

        });
        

    /*
    todoApi.get();
    //TODO Handle this response from the server
    */
  }

  addTodo(newTaskTodo)
  {
    _todoApi
    .post("",newTaskTodo)
    .then(res =>
    {
      let newApiTaskTodo = new TaskTodo(res.data.data);
      console.log(newApiTaskTodo);
      let todos = [..._store.State.todos,newApiTaskTodo];
      console.log("todos in todo-service addToDo is",todos);
      _store.commit("todos",todos);
    })
    .catch(error =>
    {
      console.error(error);
    })
  }
deleteTodo(id)
{
  _todoApi
  .delete(id)
  .then(()=>
  {
    let filteredTodos = _store.State.todos.filter(t=>t._id != id);
    console.log(filteredTodos);
    _store.commit("todos",filteredTodos);
  })
}

  updateCheckboxStatus(id,event)
  {
    event.preventDefault();

    let todo = _store.State.todos.find(t => t._id == id)
    
    todo.completed = !todo.completed
    // let checkboxId = todo.checkboxId;
    // console.log('checkboxId is ',checkboxId);

    // console.log('in updateCheckboxStatus todo-service',id,update);

    
    // if (update == false)
    // {
    //   update = true;
    //   //document.getElementById(checkboxId).checked = true;
    //   todo.completed = true;
    // }
    // else
    // {
    //   update = false;
    //   //document.getElementById(checkboxId).checked = false;
    //   todo.completed = false;
    // }
    

    // console.log('UPDATE IS NOW',update);

    _todoApi
    .put(id,todo)
    .then(res =>
    {
      // let todos = _store.State.todos;
      // let todo = _store.State.todos.find(t => t._id == id);
      // //console.log('in updateCheckboxStatus in todo-controller',todo);
      // todo.completed = update;
      // console.log('todo.completed is',todo.completed);

      // todos.forEach(t=>
      // {
      //   if(t == t._id)
      //   {
      //     t.completed = update;
          _store.commit("todos",_store.State.todos);
      //   }
      // })
      
      /*
      for(let prop in update)
      {
        console.log('in prop')
        console.log('the prop is ',prop);
        todo[prop] = comp[prop];
        _store.commit("todos", _store.State.todos);
      }
      */

      console.log('_store.State.todos',_store.State.todos)
      
      
    })
    .catch(error =>
    {
      console.error(error);
    });

   

    

    

  }


  /*
  addTodoAsync(todo) {
    todoApi.post("", todo);
    //TODO Handle this response from the server (hint: what data comes back, do you want this?)
  }

  toggleTodoStatusAsync(todoId) {
    let todo = store.State.todos.find(todo => todo._id == todoId);
    //TODO Make sure that you found a todo,
    //		and if you did find one
    //		change its completed status to whatever it is not (ex: false => true or true => false)

    todoApi.put(todoId, todo);
    //TODO do you care about this data? or should you go get something else?
  }

  removeTodoAsync(todoId) {
    //TODO Work through this one on your own
    //		what is the request type
    //		once the response comes back, what do you need to insure happens?
  }
  */
}

const _todoService = new TodoService();
export default _todoService;
