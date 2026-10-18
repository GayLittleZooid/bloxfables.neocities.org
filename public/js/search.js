// SEARCH KEYWORDS 
function search() {
    var input = document.getElementById("search");
    var input_filtered = input.value.toUpperCase();

    var error = new Audio("/assets/audio/sfx/kerplunk.wav");
    error.volume = 0.2;
    var click = new Audio("/assets/audio/sfx/button.wav");
    click.volume = 0.15;

    if (input_filtered === "AFYPPCB NGXXY") {
        click.play();
        window.open("/html/secrets/bitter_nostalgia.html");
        input.value = "";
    } else {
        error.play();
        input.value = "";
    }
}