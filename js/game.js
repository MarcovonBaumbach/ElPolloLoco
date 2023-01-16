let canvas;
let world;
let keyboard = new Keyboard();

/**
 * loading the canvas on page load
 */
function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
}

window.addEventListener('keydown', (event) => {
    if (event.code == 'ArrowLeft' && !world.character.isDead()) {
        keyboard.LEFT = true;
    }
    if (event.code == 'ArrowRight' && !world.character.isDead()) {
        keyboard.RIGHT = true;
    }
    if (event.code == 'ArrowUp' && !world.character.isDead()) {
        keyboard.UP = true;
    }
    if (event.code == 'ArrowDown' && !world.character.isDead()) {
        keyboard.DOWN = true;
    }
    if (event.code == 'Space' && !world.character.isDead()) {
        keyboard.SPACE = true;
    }
    console.log(event);
});

window.addEventListener('keyup', (event) => {
    if (event.code == 'ArrowLeft') {
        keyboard.LEFT = false;
    }
    if (event.code == 'ArrowRight') {
        keyboard.RIGHT = false;
    }
    if (event.code == 'ArrowUp') {
        keyboard.UP = false;
    }
    if (event.code == 'ArrowDown') {
        keyboard.DOWN = false;
    }
    if (event.code == 'Space') {
        keyboard.SPACE = false;
    }
    console.log(event);
});