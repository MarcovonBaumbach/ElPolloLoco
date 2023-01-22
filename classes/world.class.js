/**
 * class for the entire playable world
 */
class World {
    clouds = level1.clouds;
    character = new Character();
    endboss = new Endboss();
    enemies = level1.enemies;
    coins = level1.coins;
    coinSound = new Audio('./audio/coin.mp3');
    bottles = level1.bottles;
    bottleSound = new Audio('./audio/bottle.mp3');
    backgroundObjects = level1.backgroundObjects;
    world_end_x = (this.backgroundObjects.length - 4) / 4 * 719;
    ctx;
    canvas;
    keyboard;
    camera_x;
    statusBar = new StatusBar();
    bottleBar = new BottleBar();
    coinBar = new CoinBar();
    throwableObjects = [];
    startScreen = new StartScreen();
    endScreen = new EndScreen();
    gameMusic = new Audio('./audio/music.mp3');

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d'); //allows you to "draw" objects on the canvas
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
    }

    /**
     * creating new instance of World in character to access keyboard
     */
    setWorld() {
        this.character.world = this;
        this.endScreen.world = this;
        this.enemies.forEach((enemy) => {
            enemy.world = this;
        });
    }

    /**
     * draws elements on the canvas
     */
    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); //Clearing last Frame, before drawing a new one
        if (this.startScreen.startScreenActive) {
            this.addToMap(this.startScreen);
        } else {
            this.ctx.translate(this.camera_x, 0);
            this.addObjectsToMap(this.backgroundObjects);
            this.addObjectsToMap(this.clouds);
            this.addObjectsToMap(this.coins);
            this.addObjectsToMap(this.bottles);
            this.addToMap(this.character);
            this.addToMap(this.endboss);
            this.addObjectsToMap(this.throwableObjects);
            this.addObjectsToMap(this.enemies);
            this.ctx.translate(-this.camera_x, 0);
            //----space for fixed objects--------------
            this.addToMap(this.statusBar);
            this.addToMap(this.bottleBar);
            this.addToMap(this.coinBar);
            this.addToMap(this.endScreen);
        }

        let self = this;                           //requestAnimationFrame doesn't know *this*, so you need to store it in a variable    
        requestAnimationFrame(function () {         //draw() gets called over and over, as often as the GPU allows
            self.draw();
        });
    }

    /**
     * Looping through Array of object and add to map
     * @param {Array} object 
     */
    addObjectsToMap(object) {
        object.forEach(o => {
            this.addToMap(o);
        });
    }

    /**
     * Add an object to the canvas
     * @param {variable} object 
     */
    addToMap(object) {
        if(object.img) {
            this.mirrorImage(object);
            this.ctx.drawImage(object.img, object.x, object.y, object.width, object.height);
            object.drawObjectBorder(this.ctx);
            this.undoMirrorImage(object);
        }
    }

    run() {
        setInterval(() => {
            if (this.character.x > (this.endboss.x - 80)) {
                this.character.x = this.endboss.x - 80;
            }
            this.checkChickenKilled();
        }, 30);
        setInterval(() => {
            this.checkCollisions();
            this.checkThrowObjects();
            this.collectObject(this.bottles, this.bottleBar);
            this.collectObject(this.coins, this.coinBar);
            this.checkEnterPressed();
            this.checkGameOver();
        }, 200);
    }

    checkGameOver() {
        if(this.endScreen.deleteEnemies) {
            this.enemies = [];
            this.gameMusic.pause();
        }
        if (this.endScreen.lost) {
            this.gameMusic.pause();
        }
    }

    startGame() {
        this.startScreen.startScreenActive = false;
        this.enemies.forEach((enemy => {
            enemy.speed = 0.5 + Math.random();
        }))
        this.gameMusic.play();
    }

    checkEnterPressed() {
        if (this.keyboard.ENTER) {
            this.startGame();
        }
    }

    checkThrowObjects() {
        if (this.keyboard.SPACE && this.bottleBar.amount > 0) {
            let bottle = new ThrowableObject(this.character.x + 75, this.character.y + 120);
            this.throwableObjects.push(bottle);
            this.bottleBar.amount--;
            this.bottleBar.setAmount();
        }
    }

    checkCollisions() {
        this.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy) && !this.character.isAboveGround() && !enemy.dead) {
                this.character.hit();
                this.statusBar.setPercentage(this.character.energy);
            }
        });
        this.throwableObjects.forEach((throwableObject) => {
            if (this.endboss.isCollidingEndboss(throwableObject)) {
                this.endboss.hit();
                throwableObject.bottleRotation = false;
            }
        });
        this.characterCollidingWithEndboss();
    }

    checkChickenKilled() {
        this.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy) && this.character.isAboveGround() && this.character.speedY < 0) {
                enemy.dead = true;
            }
        });
    }

    characterCollidingWithEndboss() {
        if (this.character.isColliding(this.endboss) && !this.endboss.isDead()) {
            this.character.hit();
            this.statusBar.setPercentage(this.character.energy);
        }
    }

    collectObject(object, bar) {
        for (let i = 0; i < object.length; i++) {
            if (this.character.isColliding(object[i]) && bar.amount < 5) {
                if(object == this.bottles){
                    this.bottleSound.play();
                }
                if(object == this.coins){
                    this.coinSound.play();
                }
                object.splice(i, 1);
                bar.amount++;
                bar.setAmount();
            }
        }
    }

    /**
     *  checking if character is moving LEFT, than mirror image
     * @param {variable} object 
     */
    mirrorImage(object) {
        if (object.otherDirection) {
            this.ctx.save();
            this.ctx.translate(object.width, 0);
            this.ctx.scale(-1, 1);
            object.x = object.x * -1;
        }
    }

    /**
     * resetting image mirroring
     * @param {variable} object 
     */
    undoMirrorImage(object) {
        if (object.otherDirection) {
            this.ctx.restore();
            object.x = object.x * -1;
        }
    }

}