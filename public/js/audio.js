// Audio Javascrpit 
function play_hover() {
    // Storing the Hover SFX
    var sfx_hover = new Audio("/assets/audio/sfx/scroll.wav");
    sfx_hover.volume = 0.2;
    sfx_hover.play();
}

function play_click() {
    // Storing the Clicking SFX
    var sfx_click = new Audio("/assets/audio/sfx/button.wav");
    sfx_click.volume = 0.15;
    sfx_click.play();
}

function play_error() {
    // Storing the ERROR sfx
    var sfx_error = new Audio ("/assets/audio/sfx/kerplunk.wav");
    sfx_error.volume = 0.2;
    sfx_error.play();
}