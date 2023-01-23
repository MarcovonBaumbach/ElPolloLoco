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

    /**
     * applies gravity to the character, to get him back down to the ground
     */
    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 40);
    }

    /**
     * checks if an object is above the ground, to apply gravity
     * @returns {boolean}
     * @returns {number}
     */
    isAboveGround() {
        if (this instanceof ThrowableObject) { // throwable Objects should always fall
            return true;
        } else {
            return this.y < 140;
        }
    }

    /**
     * checks if an object got hit
     */
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

    /**
     * checks if an object is hurt
     * @returns {number}
     */
    isHurt() {
        this.timePassed = (new Date().getTime() - this.lastHit); //difference in milliseconds 
        return this.timePassed < 250;
    }

    /**
     * checks if an object is dead and sets life energy to 0
     * @returns {number}
     */
    isDead() {
        return this.energy == 0;
    }

    /**
     * moving object in direction right at it's speed
     */
    moveRight() {
        this.x += this.speed;
    }

    /**
     * moving object in direction left at it's speed
     */
    moveLeft() {
        this.x -= this.speed;
    }

    /**
     * Looping through an Array of images to create the animation
     * @param {Array} images 
     */
    playAnimation(images) {
        let i = this.currentImage % images.length; // creating a loop: 5 % 6 -> 5; 6 % 6 -> 0; 7 % 6 -> 1
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    /**
     * setting the speed in Y direction when the character is jumping
     */
    jump() {
        this.speedY = 30;
    }
        
    /**
     * choosing an images randomly of an array containing 2 images
     * @param {Array} image 
     * @returns {string}
     */
    randomImage(image) {
        let randomNumber = Math.random();
        if(randomNumber > 0.5) {
            return image[0];
        } else {
            return image[1];
        }
    }

    /**
     * checking if objects are colliding with Character
     * @param {object} obj 
     * @returns {boolean}
     */
    isColliding(obj) {
        return (this.x + this.width - 20) >= obj.x && (this.x + 20) <= (obj.x + obj.width) &&
            (this.y + this.height - 10) >= obj.y && (this.y + 160) <= (obj.y + obj.height);
    }

    /**
     * checking if objects are colliding with Endboss
     * @param {object} obj 
     * @returns {boolean}
     */
    isCollidingEndboss(obj) {
        return (this.x + this.width - 20) >= obj.x && (this.x + 40) <= (obj.x + obj.width) &&
            (this.y + this.height - 20) >= obj.y && (this.y + 20) <= (obj.y + obj.height);
    }
}