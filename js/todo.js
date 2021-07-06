const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input")
const todoList = document.querySelector("#todo-list");


let todos = [];

function saveTodos(){
    localStorage.setItem("todos", JSON.stringify(todos));
}

function deleteTodo(event){
    const li = event.target.parentElement;
    li.remove();
    todos = todos.filter((todo)=> todo.id !== parseInt(li.id));
    saveTodos();
}

function loadTodo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.innerText= "❌";
    span.innerText = newTodo.text;
    button.addEventListener("click", deleteTodo);
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}

function addTodo(event){
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";

    const newTodoObj = {
        text : newTodo,
        id : Date.now()
    }

    todos.push(newTodoObj);
    loadTodo(newTodoObj)
    saveTodos();
}

todoForm.addEventListener("submit", addTodo);

const todoDB = localStorage.getItem("todos");

if(todoDB !== null){
    todos = JSON.parse(todoDB);
    todos.map((todo)=>{ loadTodo(todo)});
}
