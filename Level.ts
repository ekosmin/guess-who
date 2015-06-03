///<reference path="phaser/typescript/phaser.d.ts"/>
module Main {

    export class Level extends Phaser.State {

        private background: Phaser.Sprite;

        create() {
            this.background = this.add.sprite(0, 0, 'level1');
            this.background.width = this.game.world.width;
            this.background.height = this.game.world.height;
        }


    }

}