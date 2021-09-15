const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const loginBtn = loginForm.querySelector("button");

function onLoginBtnClick() {
    console.log(loginInput.value);
}

loginBtn.addEventListener("click", onLoginBtnClick);