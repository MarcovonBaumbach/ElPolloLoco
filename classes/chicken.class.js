/**
 * class for the animated chickens
 */
class Chicken extends MovableObject {
    y = 365;
    width = 80;
    height = 70;
    speed = 0;
    IMAGES_WALKING = [
        './img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        './img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        './img/3_enemies_chicken/chicken_normal/1_walk/3_w.png'
    ];
    audio = new Audio('./audio/chicken.mp3');
    world;

    constructor() {
        super().loadImage('./img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.loadImages(this.IMAGES_WALKING);
        this.x = 400 + Math.random() * 3000;
        this.animateChicken();
    }

    animateChicken() {
        this.audio.pause();
        setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);
            //this.audio.play();
        }, 200);
        setInterval(() => {
                this.moveLeft();
        }, 30)
    }
}