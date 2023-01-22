/**
 * class to create the clouds
 */
class Cloud extends MovableObject {
    width = 500;
    height = 270;
    y = 30;
    IMAGES = [
      'img/5_background/layers/4_clouds/1.png',
      'img/5_background/layers/4_clouds/2.png'
    ]

    constructor() {
        super().loadImage(this.randomImage(this.IMAGES));
        this.x = Math.random() * 6000;
        this.speed = 0.2 + Math.random();
        this.animateCloud();
    }

    /**
     * Animates cloud movements
     */
    animateCloud() {
      setInterval(() => {
        this.moveLeft();
      }, 40);
    }
}