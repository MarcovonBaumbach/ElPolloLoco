/**
 * class for all moving objects
 */
class MovableObject extends DrawableObject {
    speed = 0.5;
    speedY = 0;
    acceleration = 3;
    energy = 100;
    lastHit = 0;
    timePassed = 0;
    hurtSound = new Audio('./audio/hurt.mp3');

    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 40);
    }

    isAboveGround() {
        if (this instanceof ThrowableObject) { // throwable Objects should always fall
            return true;
        } else {
            return this.y < 140;
        }
    }

    hit() {
        this.energy -= 2;
        if(this.hurtSound != '') {
            this.hurtSound.play();
        }
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    isHurt() {
        this.timePassed = (new Date().getTime() - this.lastHit); //difference in milliseconds 
        return this.timePassed < 250;
    }

    isDead() {
        return this.energy == 0;
    }

    moveRight() {
        this.x += this.speed;
    }

    moveLeft() {
        this.x -= this.speed;
    }

    playAnimation(images) {
        let i = this.currentImage % images.length; // creating a loop: 5 % 6 -> 5; 6 % 6 -> 0; 7 % 6 -> 1
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    jump() {
        this.speedY = 30;
    }
        
    randomImage(image) {
        let randomNumber = Math.random();
        if(randomNumber > 0.5) {
            return image[0];
        } else {
            return image[1];
        }
    }

    //checking if objects are colliding with Character
    isColliding(obj) {
        return (this.x + this.width - 20) >= obj.x && (this.x + 20) <= (obj.x + obj.width) &&
            (this.y + this.height - 10) >= obj.y && (this.y + 160) <= (obj.y + obj.height);
    }

    //checking if objects are colliding with Endboss
    isCollidingEndboss(obj) {
        return (this.x + this.width - 20) >= obj.x && (this.x + 40) <= (obj.x + obj.width) &&
            (this.y + this.height - 20) >= obj.y && (this.y + 20) <= (obj.y + obj.height);
    }
}