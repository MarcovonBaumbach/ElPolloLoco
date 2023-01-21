class DrawableObject {
    x = 120;
    y = 140;
    height = 300;
    width = 150;
    img;
    imageCache = [];
    currentImage = 0;
    amount = 0;

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    /**
    * Load Images in Array imageCache
    * @param {Array} arr ['img/img1.png', 'img/img2.png'...] 
    */
    loadImages(arr) {
        arr.forEach((path) => {
            this.img = new Image();
            this.img.src = path;
            this.imageCache[path] = this.img;
        });
    }

    //draw rectangle around the object, for collision detection
    drawObjectBorder(ctx) {
        if (this instanceof Character || this instanceof Chicken || this instanceof Bottle || this instanceof Coin) {
            ctx.beginPath();
            ctx.lineWidth = '2';
            ctx.strokeStyle = 'rgba(0, 0, 0, 0)';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }

    setAmount() {
        let path = this.IMAGES[this.amount];
        this.img = this.imageCache[path];
    }
}