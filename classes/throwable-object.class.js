class ThrowableObject extends MovableObject {
    IMAGES = [
        'img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png'
    ];
    BOTTLE_SPLASH = [
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png',
    ]
    width = 100;
    height = 100;
    bottleRotation = true;
    splashSound = new Audio('./audio/splash.mp3');
    throwingSound = new Audio('./audio/throw.mp3');

    constructor(x, y) {
        super().loadImage('./img/6_salsa_bottle/salsa_bottle.png');
        this.loadImages(this.BOTTLE_SPLASH);
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
            if (this.y < 350 && this.bottleRotation) {
                this.x += 25;
                this.playAnimation(this.IMAGES);
                this.throwingSound.play();
            } else {
                this.playAnimation(this.BOTTLE_SPLASH);
                if(this.splashSound) {
                    this.throwingSound.pause();
                    this.splashSound.play();
                }
                this.splashSound = false;
            }
        }, 40);
    }
}