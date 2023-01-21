let newBackgroundObject = [];

const level1 = new Level(
    [
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin()
    ],
    [
        new Bottle(),
        new Bottle(),
        new Bottle(),
        new Bottle(),
        new Bottle(),
        new Bottle(),
        new Bottle(),
        new Bottle()
    ],
    [
        new Cloud()
    ],
    newBackgroundObject,
);

pushObjects();

function pushObjects() {

    for(let i = 0; i < 6; i += 2) {
        newBackgroundObject.push(new BackgroundObject('img/5_background/layers/air.png', i * 719));
        newBackgroundObject.push(new BackgroundObject('img/5_background/layers/3_third_layer/1.png', i * 719));
        newBackgroundObject.push(new BackgroundObject('img/5_background/layers/2_second_layer/1.png', i * 719));
        newBackgroundObject.push(new BackgroundObject('img/5_background/layers/1_first_layer/1.png', i * 719));

        newBackgroundObject.push(new BackgroundObject('img/5_background/layers/air.png', (i + 1) * 719));
        newBackgroundObject.push(new BackgroundObject('img/5_background/layers/3_third_layer/2.png', (i + 1) * 719));
        newBackgroundObject.push(new BackgroundObject('img/5_background/layers/2_second_layer/2.png', (i + 1) * 719));
        newBackgroundObject.push(new BackgroundObject('img/5_background/layers/1_first_layer/2.png', (i + 1) * 719));

    }
}