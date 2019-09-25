import 'phaser';
import GameScene from './scenes/gameScene';

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: GameScene,
    physics: {
        default: 'arcade',
        arcade: {
          gravity: {
            y: 350
          },
          debug: false
        }
    }
};

new Phaser.Game(config);
