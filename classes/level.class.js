class Level {
    clouds;
    coins;
    bottles;
    backgroundObjects;
    level_end_x = 4000;

    constructor(coins, bottles, clouds, backgroundObjects) {
        this.clouds = clouds;
        this.coins = coins;
        this.bottles = bottles;
        this.backgroundObjects = backgroundObjects;
    }
}