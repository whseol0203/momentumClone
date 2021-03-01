const toDoForm = document.querySelector(".js-toDoForm"),
    toDoList = toDoForm.querySelector(".js-toDoList"),
    toDoInput = toDoForm.querySelector(".addInput");


const TODOS_LS = "toDos";
const toDos = [];

function printToDo(text){
    const span = document.createElement("span");
    const delBtn = document.createElement("button");
    const li = document.createElement("li");
    
    span.innerText = text;
    delBtn.innerText = "⛔";
    
    li.appendChild(span);
    li.appendChild(delBtn);

    toDoList.appendChild(li);

    const toDoObj = {
        text : text,
        id : toDos.length + 1
    };

    toDos.push(toDoObj);
    
    
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value; 
    printToDo(currentValue);
    toDoInput.value = ""; 
}

function loadToDos(){
    const loadedToDos=localStorage.getItem(TODOS_LS);
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit",handleSubmit);
}

init();