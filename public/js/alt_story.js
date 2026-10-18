// ALTERNATE STORY 
function diceroll() {
    var main = document.getElementById("main");
    var bg = document.getElementById("everything");
    var error = document.getElementById("error");
    var collapse = document.getElementById("collapsible");

    // Generates a random number between 0-99 
    var roll = Math.floor(Math.random() * 100);
    console.log(roll);

    function error_show() {
        everything.style.backgroundColor = "black";
        main.style.display = "none";

        if (collapse !== null) {
            collapse.style.display = "none";
        }

        var stickers = document.getElementsByClassName("sticker");
        for (index = 0; index < stickers.length; index++) {
            stickers[index].style.display = "none";
        }

        error.style.display = "block";
    }

    if (roll === 1) {
        error_show();
    } else if (roll === 12) {
        error_show();
    } else if (roll === 55) {
        error_show();
    } else if (roll === 10) {
        error_show();
    }
}

function alt_show() {
    var null_sfx = new Audio ("/assets/audio/sfx/null.wav");
    null_sfx.volume = 0.15;
    
    var alt = document.getElementById("alt");
    var error = document.getElementById("error");

    error.style.display = "none";
    alt.style.display = "block";

    null_sfx.play();
}

function kick() {
    var trigger = document.getElementById("kick_zone");

    var timer = new Audio("/assets/audio/sfx/timer.wav");
    timer.volume = 0.5; 

    times_run = 0;

    function play_timer_sfx() {
        const timeout = setTimeout(play_timer_sfx, 1000);
        if (times_run < 2) {
            timer.play();
            times_run += 1;
        }   else if (times_run >= 2) {
                clearTimeout(timeout);
                window.open("/html/index.html", "_self");
            }
        }

    trigger.onmouseenter = null;
    window.alert("ERROR:\ PAGE DOES NOT EXIST.\ REDIRECTING NOW...");
    timer.play();
    setTimeout(play_timer_sfx, 1000);
}