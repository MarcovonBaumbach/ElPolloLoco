let canvas;
let world;
let keyboard = new Keyboard();

/**
 * loading the canvas on page load
 */
function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    pressDownMobile();
}


function pressDownMobile() {
    document.getElementById('left').addEventListener('touchstart', (e) => {
        e.preventDefault();
        if (!world.character.isDead() && !world.endboss.isDead() && !world.startScreen.startScreenActive) {
            keyboard.LEFT = true;
        }
    });
    document.getElementById('left').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.LEFT = false;
    });
    document.getElementById('right').addEventListener('touchstart', (e) => {
        e.preventDefault();
        if (!world.character.isDead() && !world.endboss.isDead() && !world.startScreen.startScreenActive) {
            keyboard.RIGHT = true;
        }
    });
    document.getElementById('right').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.RIGHT = false;
    });
    document.getElementById('up').addEventListener('touchstart', (e) => {
        e.preventDefault();
        if (!world.character.isDead() && !world.endboss.isDead() && !world.startScreen.startScreenActive) {
            keyboard.UP = true;
        }
    });
    document.getElementById('up').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.UP = false;
    });
    document.getElementById('throw').addEventListener('touchstart', (e) => {
        e.preventDefault();
        if (!world.character.isDead() && !world.endboss.isDead() && !world.startScreen.startScreenActive) {
            keyboard.SPACE = true;
        }
    });
    document.getElementById('throw').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.SPACE = false;
    });
}


window.addEventListener('keydown', (event) => {
    if (event.code == 'ArrowLeft' && !world.character.isDead() && !world.endboss.isDead() && !world.startScreen.startScreenActive) {
        keyboard.LEFT = true;
    }
    if (event.code == 'ArrowRight' && !world.character.isDead() && !world.endboss.isDead() && !world.startScreen.startScreenActive) {
        keyboard.RIGHT = true;
    }
    if (event.code == 'ArrowUp' && !world.character.isDead() && !world.endboss.isDead() && !world.startScreen.startScreenActive) {
        keyboard.UP = true;
    }
    if (event.code == 'ArrowDown' && !world.character.isDead() && !world.endboss.isDead() && !world.startScreen.startScreenActive) {
        keyboard.DOWN = true;
    }
    if (event.code == 'Space' && !world.character.isDead() && !world.endboss.isDead() && !world.startScreen.startScreenActive) {
        keyboard.SPACE = true;
    }
    if (event.code == 'Enter') {
        keyboard.ENTER = true;
    }
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
});