class GameScene extends Phaser.Scene {
    constructor() {
        super({
            key: 'GameScene'
        });
    }

    preload(): void {
        this.load.image('sky', '/assets/sky.png');
        this.load.image('ground', '/assets/platform.png');
        this.load.image('star', '/assets/star.png');
        this.load.image('bomb', '/assets/bomb.png');
        this.load.image('gameOver', '/assets/gameOver.png');
        this.load.image('pressF5', '/assets/pressF5.png');
        this.load.spritesheet('dude', '/assets/dude.png', {
            frameWidth: 32,
            frameHeight: 48
        });
    }

    create(): void {
        // set sky
        this.add.image(400, 300, 'sky');
        this.add.image(400, 300, 'star');
       
    }

    update(): void {
    }
}

export default GameScene;
