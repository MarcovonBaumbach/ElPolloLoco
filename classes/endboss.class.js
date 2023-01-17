class Endboss extends MovableObject {
    IMAGES_ALERT = [
       'img/4_enemie_boss_chicken/2_alert/G5.png',
       'img/4_enemie_boss_chicken/2_alert/G6.png',
       'img/4_enemie_boss_chicken/2_alert/G7.png',
       'img/4_enemie_boss_chicken/2_alert/G8.png',
       'img/4_enemie_boss_chicken/2_alert/G9.png',
       'img/4_enemie_boss_chicken/2_alert/G10.png',
       'img/4_enemie_boss_chicken/2_alert/G11.png',
       'img/4_enemie_boss_chicken/2_alert/G12.png'
    ]
    IMAGES_HURT = [
        'img/4_enemie_boss_chicken/4_hurt/G21.png',
        'img/4_enemie_boss_chicken/4_hurt/G21.png',
        'img/4_enemie_boss_chicken/4_hurt/G21.png'
    ];
    IMAGES_DEAD = [
        'img/4_enemie_boss_chicken/5_dead/G24.png',
        'img/4_enemie_boss_chicken/5_dead/G25.png',
        'img/4_enemie_boss_chicken/5_dead/G26.png'
    ];
    IMAGES_ATTACK = [
        'img/4_enemie_boss_chicken/3_attack/G13.png',
        'img/4_enemie_boss_chicken/3_attack/G14.png',
        'img/4_enemie_boss_chicken/3_attack/G15.png',
        'img/4_enemie_boss_chicken/3_attack/G16.png',
        'img/4_enemie_boss_chicken/3_attack/G17.png',
        'img/4_enemie_boss_chicken/3_attack/G18.png',
        'img/4_enemie_boss_chicken/3_attack/G19.png',
        'img/4_enemie_boss_chicken/3_attack/G20.png'
    ];
    IMAGES_WALK = [
        'img/4_enemie_boss_chicken/1_walk/G1.png',
        'img/4_enemie_boss_chicken/1_walk/G2.png',
        'img/4_enemie_boss_chicken/1_walk/G3.png',
        'img/4_enemie_boss_chicken/1_walk/G4.png'
    ];
    width = 250;
    energy = 20;
    attackTime = 0;
    speed = 5;

    constructor() {
        super().loadImage('./img/4_enemie_boss_chicken/2_alert/G5.png');
        this.loadImages(this.IMAGES_ALERT);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_ATTACK);
        this.loadImages(this.IMAGES_WALK);
        this.x = 3500;
        this.animateEndboss();
    }

    animateEndboss() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_ALERT);
            if (this.isHurt()) {
                this.playAnimation(this.IMAGES_HURT);
                this.endbossAttacks();
            }
            if (this.isDead()) {
                this.playAnimation(this.IMAGES_DEAD);
                this.IMAGES_DEAD = ['img/4_enemie_boss_chicken/5_dead/G26.png'];
            }
        }, 200);
    }

    endbossAttacks() {
        this.attackTime = 0;
        setTimeout(() => {
            setInterval(() => {
                if(this.attackTime < 15 && this.energy > 0) {
                    this.playAnimation(this.IMAGES_ATTACK); 
                    this.attackTime++;
                }
            }, 200);
            setInterval(() => {
                if(this.attackTime >= 15 && this.attackTime < 100) {
                    this.playAnimation(this.IMAGES_WALK); 
                    this.moveLeft();
                    this.attackTime++;
                }
            }, 50);
        }, 300);
    }
}