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
        this.loadImage(this.randomImage(this.BOTTLE_IMAGES));
        this.x = 1500 + Math.random() * 1500;
    }
}