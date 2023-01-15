class ThrowableObject extends MovableObject {
    IMAGES = [
        'img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png'
    ];
    width = 100;
    height = 100;

    constructor(x, y) {
        super().loadImage('./img/6_salsa_bottle/salsa_bottle.png');
        this.loadImages(this.IMAGES);
        this.x = x;
        this.y = y;
        this.throw();
    }

    throw() {
        this.speedY = 25;
        this.applyGravity();
        this.throwingAnimation();
    }

    throwingAnimation() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.x += 25;
                this.playAnimation(this.IMAGES);
            }
        }, 40);
    }
}