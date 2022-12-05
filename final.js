const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input"); 
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];  //변환할 수 있도록 let 으로 변경.

function saveTodos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

//.filter() 함수 -> 배열에 사용하면 모든 요소에 적용. 
//필터안에 함수가 false를 반환하면 그 요소를 빼고 배열을 새로 만들어서 반환.
function afilter(todo) {
    const li = document.querySelector("li");
    return todo.Id !== li.id;
}

function deleteTodo(event){
    //어떤 버튼이 클릭되었는지 확인해보자 -> event.target.parentElement 
    const li = event.target.parentElement;
    console.log(li.id);
    li.remove();
    toDos = toDos.filter((toDo) => toDo.Id !== parseInt(li.id));
    //li.id의 타입은 String이고 객체에 저장 되어 있는 Id의 타입은 number!
    //parseInt() 메서드로 number 타입으로 변경하는 작업 필요!
    saveTodos();
}

function paintToDo(newTodo) { 
    const li = document.createElement("li");
    li.id = newTodo.Id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click",deleteTodo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
    console.log(li);
}
function handleToDoSubmit(event) {
    event.preventDefault();
    // console.log(toDoInput.value);
    const newTodo = toDoInput.value;
    const newTodoObject = {
        text : newTodo,
        Id : Date.now()
    }
    toDoInput.value = "";  //입력하고 엔터 후 입력창 비우기.
    toDos.push(newTodoObject);

    paintToDo(newTodoObject);
    saveTodos();
}
toDoForm.addEventListener("submit",handleToDoSubmit);

function sayHello(item) { //담겨있는 item을 호출할 때 item 사용
    console.log("hello", item);
}

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos)
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}
