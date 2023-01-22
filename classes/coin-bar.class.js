/**
 * Status bar that shows you how many coins have been collected
 */
class CoinBar extends DrawableObject {
    IMAGES = [
        'img/7_statusbars/1_statusbar/1_statusbar_coin/orange/0.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/orange/20.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/orange/40.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/orange/60.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/orange/80.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/orange/100.png'
    ];
    width = 200;
    height = 50;
    x = 460;
    y = 10;

    constructor() {
        super();
        this.loadImages(this.IMAGES);
        this.setAmount();
    }
}