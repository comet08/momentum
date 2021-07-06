const loginForm = document.querySelector("#loginForm");
const loginInput = document.querySelector("#loginForm input");
const greeting = document.querySelector("#greeting");
const console = document.querySelector("#command");
function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add("hidden");

    const username = loginInput.value;
    localStorage.setItem("username", username);
    login(username);
}

function login(username){
    greeting.innerText = `* ${username}'s ToDoList *`;
    greeting.classList.remove("hidden");
    console.innerText = `${username}@comet:~$`
}



const username = localStorage.getItem("username");

if(username === null){
    // 저장된 이름이 없으면 login Form 이 노출되도록
    loginForm.classList.remove("hidden");
    loginForm.addEventListener("submit", onLoginSubmit);
}
else
    login(username);
