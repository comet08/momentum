const commandForm = document.querySelector("#commandForm");
const command_input = document.querySelector("#commandForm input");
const command_res = document.querySelector("#command_res");

const pallete = document.querySelector("#pallete");
const music = document.querySelector("#music_container");

const command_arr = [pallete, music];

const command_list = ["pallete", "help", "music"]
//

//palleteR, palleteG, palleteB, help, music

const hidden = "hidden";

function clear(){
    command_arr.map((obj)=>obj.classList.add(hidden));
}

function handleCommand(event){
    event.preventDefault();
    const cinput = command_input.value;
    command_input.value = "";
    if(cinput === "clear"){
        localStorage.removeItem("command");
        clear();
    }
    else if(command_list.indexOf(cinput)>=0){
        localStorage.setItem("command", cinput);
        executing(cinput);
    }
    else;
        // 없는 명령어 처리
  
}

function executing(c){
    window.console.log(c)
    clear();
    if(c === "pallete"){
        pallete.classList.remove(hidden);        
    }
    if(c === "music"){
        music.classList.remove(hidden);
    }
    
}


const command = localStorage.getItem("command");
command_input.focus();
commandForm.addEventListener("submit", handleCommand);


if(command !== null)
    executing(command);


