/**
 * Class for properties of coins
 */
class Coin extends MovableObject {
    width = 100;
    height = 100;

    constructor() {
        super().loadImage('./img/8_coin/coin_1.png');
        this.x = 200 + Math.random() * 3000;
        this.y = 50 + Math.random() * 150;
    }
}