/*로컬스토리지에 사용자 이름을 받고 저장*/
const form = document.querySelector(".form");
const input = form.querySelector("input");
const greeting = document.querySelector(".greetings");

const CUR_USER = "currentUser",
    SHOWING_CN = "showing";


    
    
function addCurrentUser(text){
    localStorage.setItem(CUR_USER,text);
}
    
function handleSubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    printUserName(currentValue);
    addCurrentUser(currentValue);
}
    
function askName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit",handleSubmit);
}
    
    
//이름을 출력해 줄것임 
function printUserName(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText=`Hello ${text}`;
}

function loadName(){
    const currentUser = localStorage.getItem(CUR_USER);
    if(currentUser === null){
        //currentUser 가 없을 경우
        askName();
    }
    else{
        //currentUser 가 있을 경우
        printUserName(currentUser);
    }
}

function init(){
    loadName();
}

init();