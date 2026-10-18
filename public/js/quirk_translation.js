// TYPING QUIRK TRANSLATION 
function brighteyes() {
    const brighteyes_dialogue = document.getElementsByClassName("txt_brighteyes");
    var bright_array = Array.from(brighteyes_dialogue);
    var bass = new Audio("/assets/audio/sfx/bass.wav")
    
    for (let index = 0; index < bright_array.length; index++) {
        bright_array[index].innerHTML = bright_array[index].innerHTML.replaceAll("z","s");
        bright_array[index].innerHTML = bright_array[index].innerHTML.replaceAll("Z","S");
    }
    bass.volume = 0.2;
    bass.play();

    event.currentTarget.style.display = "none";
}

