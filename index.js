const clock = document.querySelector(".clock");

let sec = 0,
    min = 0,
    hour = 0,
    intervalId;

const startStopwatch = () => {
    intervalId = setInterval(() => {
        if(sec < 59) {
            sec++;
        } else if(min >= 59) {
            hour++;
            min = 0;
        }

        else {
            sec = 0;
            min++;
        }

        clock.innerText = `${String(hour).padStart(2,"0")} : ${String(min).padStart(2,"0")} : ${String(sec).padStart(2,"0")}`;

    },1000);
}



const stopStopwatch = () => {
    clearInterval(intervalId);
}