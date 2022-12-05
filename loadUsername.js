const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"; 
const USERNAME_KEY = "username";


function onLoginSubmit(event) { 
    event.preventDefault();  //submit의 기본동작(새로고침) 막는다.
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY,username);

    paintGreetings(username);
}
const savedUsername = localStorage.getItem(USERNAME_KEY);

//환영인사를 보여주는 함수
function paintGreetings(username) {
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello! [${username}].`;
}

if(savedUsername === null) {
    //show the form.
    loginForm.classList.remove("hidden");
    loginForm.addEventListener("submit",onLoginSubmit);
} else {
    //show the greetings.
    paintGreetings(savedUsername);
}


