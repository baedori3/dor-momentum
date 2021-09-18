const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
    event.preventDefault();  
    // 브라우저의 기본 동작 막기 (브라우저가 submit할 때 원래 하는 동작을 안하게 됨)
    loginForm.classList.add("hidden");
    const username = loginInput.value;
    greeting.innerText = `안녕하세요 ${username}님`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit);

