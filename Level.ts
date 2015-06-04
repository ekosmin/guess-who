///<reference path="phaser/typescript/phaser.d.ts"/>
///<reference path="Person.ts"/>
module Main {

    export class Level extends Phaser.State {

        public faces: Phaser.Group;
        public buttons: Phaser.Group;

        private background: Phaser.Sprite;

        private static COLS: number = 8;

        create() {
            this.game.stage.backgroundColor = '#777777';

            this.faces = this.add.group();
            this.buttons = this.add.group();

            for (var nameIndex in Name) {
                // loop iterates over indices and strings; we use the indices
                if (!isNaN(parseInt(nameIndex))) {
                    this.placePerson(nameIndex);
                }
            }

            var key1 = this.game.input.keyboard.addKey(Phaser.Keyboard.R);
            key1.onDown.add(this.restart, this);
        }

        private placePerson(index: number) {
            var row: number = Math.floor(index / Level.COLS);
            var col: number = Math.floor(index % Level.COLS);

            var x: number = col * Person.WIDTH * 1.5;
            var y: number = row * Person.HEIGHT * 1.5;
            this.faces.add(new Person(this, index, x, y));
        }

        private restart(): void {
            this.game.state.start('Level', true, false);
        }

    }

}