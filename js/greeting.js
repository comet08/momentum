const loginForm = document.querySelector("#loginForm");
const loginInput = document.querySelector("#loginForm input");
const greeting = document.querySelector("#greeting");

function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add("hidden");

    const username = loginInput.value;
    localStorage.setItem("username", username);
    login(username);
}

function login(username){
    greeting.innerText = `Welcome ${username} !`;
    greeting.classList.remove("hidden");
}



const username = localStorage.getItem("username");

if(username === null){
    loginForm.classList.remove("hidden");
    loginForm.addEventListener("submit", onLoginSubmit);
}
else
    login(username);