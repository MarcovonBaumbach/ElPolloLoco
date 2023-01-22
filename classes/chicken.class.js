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
        super();
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGE_DEAD);
        this.x = 400 + Math.random() * 3000;
        this.animateChicken();
    }

    /**
     * Runs the animations of the chickens
     */
    animateChicken() { 
        setInterval(() => {
            if(!this.dead) {
                this.playAnimation(this.IMAGES_WALKING);
                this.moveLeft();
            } else {
                this.playAnimation(this.IMAGE_DEAD);
                this.y = 380;
            }
        }, 30);
    }
}