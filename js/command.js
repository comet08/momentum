const commandForm = document.querySelector("#commandForm");
const command_input = document.querySelector("#commandForm input");
const command_res = document.querySelector("#command-res");

const pallete = document.querySelector("#pallete");
const command_arr = [pallete];
const command_list = ["pallete", "help", "music"]
//

//palleteR, palleteG, palleteB, help, music

function handleCommand(){
    const cinput = command_input.value;

    if(cinput === "clear"){
        localStorage.removeItem("command");
       
        command_arr.map((obj)=>obj.classList.add("hidden"));
    }
    else if(command_list.indexOf(cinput)>=0){
        localStorage.setItem("command", cinput);
        executing(cinput);
    }
    else;
        // 없는 명령어 처리
  
}

function executing(c){
    if(c === "pallete"){
        pallete.classList.remove("hidden");        
    }
    
}


const command = localStorage.getItem("command");
command_input.focus();
commandForm.addEventListener("submit", handleCommand);


if(command !== null)
    executing(command);


