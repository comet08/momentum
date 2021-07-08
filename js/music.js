const music_prev = document.querySelector("#music_prev")
const music_next = document.querySelector("#music_next")
const music_play = document.querySelector("#music_play")

const audio =  new Audio();

const music_list = ['media/lizzysvoice.mp3', 'media/paintonme.mp3', 'media/different.mp3'];

let turn = 0, isPlaying=0;
audio.loop = true;
audio.src = music_list[turn];
audio.volume = 0.2;

function handling(){
    if(isPlaying){
        audio.pause();
        isPlaying = false;
    }
    else{
        audio.play();
        isPlaying=true;
    }
}


function next(){
    turn = (turn+1)%music_list.length;
    audio.src = music_list[turn];
    audio.play();
}

function prev(){
    if(turn == 0)
        turn = music_list.length-1;
    else
        turn = (turn-1)%music_list.length;
    audio.src = music_list[turn];
    audio.play();
}


music_next.addEventListener('click', next);
music_play.addEventListener('click', handling);
music_prev.addEventListener('click', prev);

