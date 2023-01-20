class Bottle extends MovableObject {
    width = 100;
    height = 100;
    y = 340;
    BOTTLE_IMAGES = [
        'img/6_salsa_bottle/1_salsa_bottle_on_ground.png',
        'img/6_salsa_bottle/2_salsa_bottle_on_ground.png'
    ];

    constructor() {
        super();
        this.loadImage(this.randomBottleImage());
        this.x = 1500 + Math.random() * 1500;
    }

    randomBottleImage() {
        let randomNumber = Math.random();
        if(randomNumber > 0.5) {
            return this.BOTTLE_IMAGES[0];
        } else {
            return this.BOTTLE_IMAGES[1];
        }
    }
}