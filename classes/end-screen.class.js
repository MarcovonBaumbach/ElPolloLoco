class EndScreen extends MovableObject {
    IMAGE_END = 'img/9_intro_outro_screens/game_over/game over.png';
    IMAGE_LOST = 'img/9_intro_outro_screens/game_over/you lost.png';
    deleteEnemies = false;
    world;
    width = 720;
    height = 480;
    x = 0;
    y = 0;
    gameLostScore = new Audio('./audio/gameLost.mp3');

    constructor() {
        super();
        this.checkGameOver();
    }

    checkGameOver() {
        setInterval(() => {
            if (this.world.character.isDead()) {
                this.gameLost();
            }
            if (this.world.endboss.isDead()) {
                this.gameWon();
            }
        }, 200);
    }

    gameWon() {
        this.img = new Image();
        this.img.src = this.IMAGE_END;
        this.deleteEnemies = true;
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 4000);
    }

    gameLost() {
        this.img = new Image();
        this.img.src = this.IMAGE_LOST;
        this.world.gameMusic.pause();
        this.world.character.hurtSound = '';
        this.gameLostScore.play();
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 4000);
    }
}

