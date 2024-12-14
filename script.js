
let cseconds = 0;
let seconds = 0;
let minuts = 0;
let hours = 0;

let start_button = document.getElementById("start_button");
let stop_button = document.getElementById("stop_button");
let reset_button = document.getElementById("reset_button");
let csec = document.getElementById("csecs");
let sec = document.getElementById("secs");
let min = document.getElementById("mins");
let hour = document.getElementById("hours");
let time;

start_button.addEventListener("click" , () =>{
    time = setInterval(increase_time, 10);
})  

stop_button.addEventListener("click" , () =>{
    clearInterval(time);
})

reset_button.addEventListener("click" , () =>{
    cseconds = 0;
    seconds = 0;
    minuts = 0;
    hours = 0;


    csec.textContent = "0" + cseconds;
    sec.textContent = "0" + seconds;
    min.textContent = "0" + minuts;
    hour.textContent = "0" + hours;
})









function increase_time(){
    cseconds++;
    if(cseconds <= 9){
        csec.textContent = "0" + cseconds;
    }
    else if(cseconds >= 99){
        cseconds = 0;
        csec.textContent = "0" + cseconds;
        seconds++;
    }
    else{
        csec.textContent = cseconds;
    }




    if(seconds <= 9){
        sec.textContent = "0" + seconds;
    }
    else if(seconds >= 60){
        seconds = 0;
        sec.textContent = "0" + seconds;
        minuts++;
    }
    else{
        sec.textContent = seconds;
    }




    if(minuts <= 9){
        min.textContent = "0" + minuts;
    }
    else if(minuts >= 60){
        minuts = 0;
        min.textContent = "0" + minuts;
        hours++;
    }
    else{
        min.textContent = minuts;
    }




    if(hours <= 9){
        hour.textContent = "0" + hours;
    }
    else{
        hour.textContent = hours;
    }

    
    
}