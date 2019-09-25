class GameScene extends Phaser.Scene {
    private platforms: Phaser.Physics.Arcade.StaticGroup;

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

        // set platforms
        this.platforms = this.physics.add.staticGroup();
        this.platforms
            .create(400, 568, 'ground')
            .setScale(2)
            .refreshBody();
        this.platforms.create(600, 400, 'ground');
        this.platforms.create(50, 250, 'ground');
        this.platforms.create(750, 220, 'ground');      
    }

    update(): void {
    }
}

export default GameScene;
