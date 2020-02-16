import { generateId } from "../utils.js";


export default class TaskTodo 
{
    constructor(data)
    {
        this._id = data._id || generateId();
        this.completed = data.completed;
        this.user = data.user;
        this.description =  data.description;
        
    }

    get TaskTodoTemplate()
    {   
        
        
        return `
            <div class="row p-2">
				<div class="col-12 col-md-6">
                    <p>${this.description}</p>
				</div>
				<div class="col-12 col-md-3">
                    <p>
                        <label>Completed?  </label>
                        <input id = '${this._id}' onclick = "app.todoController.updateCheckboxStatus('${this._id}',${this.completed})" type = "checkbox">
                    </p>
				</div>
				<div class="col-12 col-md-3">
                    <p class = "p-delete">
                        <button onclick = "app.todoController.deleteTodo('${this._id}')" class="btn-delete">Delete</button>
                    </p>
				</div>	
            </div>
        
        `
        
    }
    

}