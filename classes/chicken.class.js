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
    IMAGE_DEAD = ['img/3_enemies_chicken/chicken_normal/2_dead/dead.png'];
    world;
    dead = false;

    constructor() {
        super().loadImage(this.IMAGE_DEAD);
        this.loadImages(this.IMAGES_WALKING);
        this.x = 400 + Math.random() * 3000;
        this.animateChicken();
    }

    animateChicken() {
        if(!this.dead) {
            setInterval(() => {
                this.playAnimation(this.IMAGES_WALKING);
            }, 200);
            setInterval(() => {
                this.moveLeft();
            }, 30)
        }
        if (this.dead) {
            setInterval(() => {
                this.playAnimation(this.IMAGE_DEAD);
            }, 200);
        }
    }
}