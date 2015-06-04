///<reference path="phaser/typescript/phaser.d.ts"/>
///<reference path="Level.ts"/>
///<reference path="Button.ts"/>
module Main {

    export class Person extends Phaser.Sprite {

        public static HEIGHT: number = 150;
        public static WIDTH: number = 100;

        private level: Level;
        private sound: Phaser.Sound;
        private button: Button;

        constructor(level: Level, nameIndex: number, x: number, y: number) {
            super(level.game, x, y, Person.checkSpriteIndex(nameIndex), 0);
            this.width = Person.WIDTH;
            this.height = Person.HEIGHT;
            this.sound = level.game.add.audio(Person.checkSpriteIndex(nameIndex));

            this.button = new Button(level, this);
            level.buttons.add(this.button);

            this.inputEnabled = true;
            this.events.onInputDown.add(this.playSound, this);
        }

        public toggleVisible(): void {
            this.visible = !this.visible;
        }

        private playSound(): void {
            this.sound.play();
        }

        /**
         * Checks the given index is valid, and returns the sprite name if so
         * @throws Error if the index is invalid
         */
        private static checkSpriteIndex(index: number): string {
            var spriteName: string = Name[index];
            if (Name[index] == null) {
                throw Error("Invalid Name index: " + index);
            } else {
                return spriteName;
            }
        }
    }

    export enum Name {
        ALEX, ANITA, PETER, ERIC, CHARLES,
        SAM, JOE, MARIA, PHILIP, RICHARD,
        SUSAN, MAX, ALFRED, ROBERT, FRANS,
        CLAIRE, PAUL, BILL, DAVID, BERNARD,
        GEORGE, TOM, HERMAN, ANNE
    }
}