///<reference path="phaser/typescript/phaser.d.ts"/>
module Main {

    export class Preloader extends Phaser.State {


        preload() {
            this.load.image('level1', 'assets/level1.png');
            this.load.image('button', 'assets/button.png');
            this.load.image('cross', 'assets/cross.png')

            this.load.audio('ALEX', 'assets/ALEX.m4a');

            for (var name in Name) {
                if (isNaN(parseInt(name))) {
                    this.load.image(name, 'assets/' + name + '.png');
                }
            }
        }

        create() {
            this.game.state.start('Level', true, false);
        }

    }

}