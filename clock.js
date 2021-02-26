/* div js-clock 에 시계 효과를 넣는 파일
날짜 정보를 받아서 변수에 저장,출력하는 함수를 만들고
함수를 주기적으로 작동시키는 방법으로 구현*/

const clockTitle = document.querySelector(".clockTitle");
const dateInfo = document.querySelector(".dateInfo");

function printDate(){
    const newDate = new Date();
    var year = newDate.getFullYear();
    var month = newDate.getMonth();
    var date = newDate.getDate();

    dateInfo.innerText = `${year} 년 ${month+1} 월 ${date} 일 입니다.`;   
}

function printClock(){
    const newDate = new Date();
    var hours = newDate.getHours();
    var minutes = newDate.getMinutes();
    var seconds = newDate.getSeconds();

    clockTitle.innerText = `${hours<10?`0${hours}`:hours}:${
        minutes<10?`0${minutes}`:minutes}:${
            seconds<10?`0${seconds}`:seconds}`;
}

function init(){
    printDate();
    setInterval(printClock,100);
}

init();