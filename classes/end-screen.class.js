class EndScreen extends MovableObject {
    IMAGE_END = 'img/9_intro_outro_screens/game_over/game over.png';
    IMAGE_LOST = 'img/9_intro_outro_screens/game_over/you lost.png';
    deleteEnemies = false;
    lost = false;
    world;
    width = 720;
    height = 480;
    x = 0;
    y = 0;
    gameLostScore = new Audio('./audio/gameLost.mp3');
    gameOverScore = new Audio('./audio/gameOver.mp3');

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
        this.world.character.hurtSound = '';
        
        setTimeout(() => {
            this.img = new Image();
            this.img.src = this.IMAGE_END;
            this.deleteEnemies = true;   
            this.gameOverScore.play();
   
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 5000);
        }, 1000);
    }

    gameLost() {
        this.world.character.hurtSound = '';

        setTimeout(() => {
            this.img = new Image();
            this.img.src = this.IMAGE_LOST;
            this.lost = true;     
            this.gameLostScore.play();
    
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 5000);
        }, 1000);
    }
}

