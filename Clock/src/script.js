let hr = document.querySelector(".d-hour");
let min = document.querySelector(".d-min");
let sec = document.querySelector(".d-sec");

let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let seconds = document.getElementById("seconds");

let date = new Date;
let curHour = date.getHours();
let curMin = date.getMinutes();
let curSec = date.getSeconds();

setInterval(() => {
    curSec = curSec + 1

    if (curSec < 9) {
        sec.innerHTML = "0" + curSec.toString();
    }
    else if (curSec > 9 && curSec < 60) {
        sec.innerHTML = curSec;
    }
    else if (curSec == 60) {
        curSec = 0;
        sec.innerHTML = "00";
        curMin = curMin + 1
    }

    if (curMin < 9) {
        min.innerHTML = "0" + curMin.toString();
    }
    else if (curMin > 9 && curMin < 60) {
        min.innerHTML = curMin;
    }
    else if (curMin == 60) {
        curMin = 0;
        curHour = curHour + 1
    }

    if (curHour < 9) {
        hr.innerHTML = "0" + curHour.toString();
    }
    else if (curHour > 9 && curHour < 24) {
        hr.innerHTML = curHour;
    }
    else if (curHour == 24) {
        curHour = 0;
    }
    let calc_curHour = (curHour * 30) + (curMin / 2);
    let calc_curMin = (curMin * 6) + (curSec / 10);
    let calc_curSec = curSec * 6;
    hour.style.transform = `rotate(${calc_curHour}deg)`;
    minute.style.transform = `rotate(${calc_curMin}deg)`;
    seconds.style.transform = `rotate(${calc_curSec}deg)`;
}, 1000);