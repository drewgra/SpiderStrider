class End extends Phaser.Scene {
    constructor() {
        super("endScene");
    }

    preload(){
        // load assets
        this.load.image('gameover', './assets/gameover.png');
    }

    create() {
        this.title = this.add.tileSprite(0, 0, 3840, 480, 'gameover').setOrigin(0, 0);

        // borders
        this.add.rectangle(0, 0, 10, game.config.height, 0x5e5e5e).setOrigin(0, 0);
        this.add.rectangle(0, game.config.height - 10, game.config.width, 10, 0x5e5e5e).setOrigin(0, 0);
        this.add.rectangle(0, 0, game.config.width, 10, 0x5e5e5e).setOrigin(0, 0);
        this.add.rectangle(game.config.width - 10, 0, 10, game.config.height, 0x5e5e5e).setOrigin(0, 0);
        
        // define keys
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

        //clock text config for score
        let timeConfig = {
          fontFamily: 'Courier',
          fontSize: '35px',
          fontStyle: 'bold',
          stroke: '#000000',
          strokeThickness: 6,
          fill: '#ff0000',
          align: 'left',
          padding: {
              top: 5,
              bottom: 5,
          },
          fixedWidth: 250
      }

      //display score under game over text
    }

    update() {
      if (Phaser.Input.Keyboard.JustDown(keySPACE)) {
        //this.sound.play('sfx_beep');  
        this.scene.start("menuScene");  
      }
    }
}