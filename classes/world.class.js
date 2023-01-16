/**
 * class for the entire playable world
 */
class World {
    clouds = level1.clouds;
    character = new Character();
    endboss = new Endboss();
    enemies = level1.enemies;
    coins = level1.coins;
    bottles = level1.bottles;
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
    }

    /**
     * draws elements on the canvas
     */
    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); //Clearing last Frame, before drawing a new one

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

        let self = this;                           //requestAnimationFrame doesn't know *this*, so you need to store it in a variable    
        requestAnimationFrame(function() {         //draw() gets called over and over, as often as the GPU allows
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
        this.mirrorImage(object);
        this.ctx.drawImage(object.img, object.x, object.y, object.width, object.height);
        object.drawObjectBorder(this.ctx);
        this.undoMirrorImage(object);
    }

    run() {
        setInterval(() => {
            this.checkCollisions();
            this.checkThrowObjects();
            this.collectObject(this.bottles, this.bottleBar);
            this.collectObject(this.coins, this.coinBar);
        }, 200);
    }

    checkThrowObjects() {
        if(this.keyboard.SPACE && this.bottleBar.amount > 0) {
            let bottle = new ThrowableObject(this.character.x + 75, this.character.y + 120);
            this.throwableObjects.push(bottle);
            this.bottleBar.amount--;
            this.bottleBar.setAmount();
        }
    }

    checkCollisions() {
        this.enemies.forEach((enemy) => {
            if(this.character.isColliding(enemy)) {
              this.character.hit();
              this.statusBar.setPercentage(this.character.energy);
              console.log('warning collision', this.character.energy);
            }
        });
        if(this.character.isColliding(this.endboss) && !this.endboss.isDead()) {
            this.character.hit();
            this.statusBar.setPercentage(this.character.energy);
            console.log('warning collision', this.character.energy);
        }
        this.throwableObjects.forEach((throwableObject) => {
            if(this.endboss.isCollidingEndboss(throwableObject)) {
              this.endboss.hit();
              console.log('endboss hit', this.endboss.energy);
            }
        });
    }

    collectObject(object, bar) {
        for(let i = 0; i < object.length; i++)
        {
            if(this.character.isColliding(object[i]) && bar.amount < 5) {
              object.splice(i, 1);
              bar.amount++;
              bar.setAmount();
              console.log('warning collision', bar.amount);
            }
        }
    }

    /**
     *  checking if character is moving LEFT, than mirror image
     * @param {variable} object 
     */
    mirrorImage(object) {
        if(object.otherDirection) {
            this.ctx.save();
            this.ctx.translate(object.width, 0);
            this.ctx.scale(-1,1);
            object.x = object.x * -1;
        }
    }

    /**
     * resetting image mirroring
     * @param {variable} object 
     */
    undoMirrorImage(object) {
        if(object.otherDirection) {
            this.ctx.restore();
            object.x = object.x * -1;
        } 
    }

}