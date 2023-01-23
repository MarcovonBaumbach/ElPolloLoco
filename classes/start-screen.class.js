/**
 * class for properties of the starting screen
 */
class StartScreen extends DrawableObject {
    startScreenActive = true;
    width = 720;
    height = 480;
    x = 0;
    y = 0;

    constructor() {
        super().loadImage('img/9_intro_outro_screens/start/startscreen_1.png');
    }
}