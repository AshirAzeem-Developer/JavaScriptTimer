var sec = 60;
var miliSec = 10;

var displayHrs = document.getElementById('displayHrs');
var displayMin = document.getElementById('displayMinute');
var displaySec = document.getElementById('displaySec');
var displayMiliSec = document.getElementById('displayMilliSecond');




var interval;
function timer() {
    var inpHr = document.getElementById('inpHrs');
    var inpMin = document.getElementById('inpMin');
    var min = +inpMin.value;
    var hrs = inpHr.value;
    miliSec--;
    if (miliSec == 0) {
        miliSec = 10;
        sec--;
        if (sec == 0) {
            sec = 60;
            min--;
            if (min == 0) {
                min = 60;
                hrs--;
                if (hrs == 0 && min == 0 && sec == 0 && miliSec == 0) {
                    clearInterval(interval);
                    alert("Times Up");
                    return;
                }
            }
        }
    }
    displayHrs.innerHTML = hrs;
    displayMiliSec.innerHTML = miliSec;
    displaySec.innerHTML = sec;
    displayMin.innerHTML = min;
}
function startTimer() {
    interval = setInterval(function () {
        timer();
    }, 100);
}

function pauseTimer() {
    clearInterval(interval);
}
function resetTimer() {
    pauseTimer();
    min = 00;
    sec = 00;
    hrs = 00;
    miliSec = 00;
    displayMiliSec.innerHTML = miliSec;
    displayHrs.innerHTML = hrs;
    displayMin.innerHTML = min;
    displaySec.innerHTML = sec;
}