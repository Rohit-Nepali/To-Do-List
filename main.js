//DOM selectors 
const todoInput = document.querySelector('.enterTask');
const btn = document.querySelector('.todo-btn');
const todoList = document.querySelector('.todo-list');


//Event Listeners
btn.addEventListener('click', addTask)

//Functions 
function addTask(event) {

    //prevent form from submitting
    event.preventDefault();

    //create to do div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo-cont");

    //create to do list
    const list = document.createElement('li');
    list.innerText = todoInput.value;
    list.classList.add("new-list");
    todoDiv.appendChild(list);

    todoList.appendChild(todoDiv);

    //clear the input value 
    todoInput.value = " ";
}

//delete functionality with right click 
window.addEventListener('contextmenu', (e) => {
    e.preventDefault();

    if (e.target.classList.contains("new-list")) {
        e.target.parentElement.remove( );
    }
    console.log("Right clicked..")
})


