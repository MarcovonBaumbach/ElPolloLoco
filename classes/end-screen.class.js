class EndScreen extends MovableObject {
    IMAGE_END = 'img/9_intro_outro_screens/game_over/game over.png';
    IMAGE_LOST = 'img/9_intro_outro_screens/game_over/you lost.png';
    deleteEnemies = false;
    world;
    width = 720;
    height = 480;
    x = 0;
    y = 0;

    constructor() {
        super();
        this.checkGameOver();
    }

    checkGameOver() {
        setInterval(() => {
            if (this.world.character.isDead()) {
                this.img = new Image();
                this.img.src = this.IMAGE_LOST;
                setTimeout(() => {
                    window.location.href = 'index.html';
                }, 4000);
            }
            if (this.world.endboss.isDead()) {
                this.img = new Image();
                this.img.src = this.IMAGE_END;
                this.deleteEnemies = true;
                setTimeout(() => {
                    window.location.href = 'index.html';
                }, 4000);
            }
        }, 200);
    }
}

