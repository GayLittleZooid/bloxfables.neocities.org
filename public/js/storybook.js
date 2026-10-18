// Storybook JS
    // Audios
    var sfx_click = new Audio("/assets/audio/sfx/button.wav");
    sfx_click.volume = 0.15;
    
    var sfx_error = new Audio ("/assets/audio/sfx/kerplunk.wav");
    sfx_error.volume = .2;

    const srcs = [
        "/assets/img/graphics/story/blox_fables/prologue/storybook/1.png",
        "/assets/img/graphics/story/blox_fables/prologue/storybook/1A.png",
        "/assets/img/graphics/story/blox_fables/prologue/storybook/1B.png",
        "/assets/img/graphics/story/blox_fables/prologue/storybook/2A.png",
        "/assets/img/graphics/story/blox_fables/prologue/storybook/2B.png",
        "/assets/img/graphics/story/blox_fables/prologue/storybook/3A.png",
        "/assets/img/graphics/story/blox_fables/prologue/storybook/3B.png",
        "/assets/img/graphics/story/blox_fables/prologue/storybook/4A.png",
        "/assets/img/graphics/story/blox_fables/prologue/storybook/4B.png",
        "/assets/img/graphics/story/blox_fables/prologue/storybook/5A.png",
        "/assets/img/graphics/story/blox_fables/prologue/storybook/5B.png",
        "/assets/img/graphics/story/blox_fables/prologue/storybook/6A.png",
        "/assets/img/graphics/story/blox_fables/prologue/storybook/6B.png",
        "/assets/img/graphics/story/blox_fables/prologue/storybook/7A.png",
        "/assets/img/graphics/story/blox_fables/prologue/storybook/7B.png",
        "/assets/img/graphics/story/blox_fables/prologue/storybook/8A.png",
        "/assets/img/graphics/story/blox_fables/prologue/storybook/8B.png",
        "/assets/img/graphics/story/blox_fables/prologue/storybook/8C.png",
        "/assets/img/graphics/story/blox_fables/prologue/storybook/8D.png",
        "/assets/img/graphics/story/blox_fables/prologue/storybook/8E.png",
        "/assets/img/graphics/story/blox_fables/prologue/storybook/9.png",
        "/assets/img/graphics/story/blox_fables/prologue/storybook/10.png",
        "/assets/img/graphics/story/blox_fables/prologue/storybook/11.png"
    ];

    var book = document.getElementById("storybook");
    var next = document.getElementById("next");
    var prev = document.getElementById("prev");

    const turn_cap = srcs.length - 1;
    let current_place = 0;

    next.addEventListener("mousedown", next_page);
    prev.addEventListener("mousedown", next_page);

    function next_page() {
        // Playing Click SFX 
        
        // If its the NEXT button
        if (event.currentTarget === next) {
            if (current_place < turn_cap) {
                // Moving Forward
                current_place++;
                // Changing Src
                book.src = srcs[current_place];
                sfx_click.play();
            }
            else if (current_place === turn_cap) {
                sfx_error.play();
            }
        }

        // if its the PREV button
        else if (event.currentTarget === prev) {
            if (current_place === 0) {
                sfx_error.play();
            }
            else {
                // Moves Back
                current_place--;
                book.src = srcs[current_place];
                sfx_click.play();
            }
        }
    };