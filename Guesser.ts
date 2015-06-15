///<reference path="phaser/typescript/phaser.d.ts"/>
///<reference path="Level.ts"/>
///<reference path="Person.ts"/>
///<reference path="Console.ts"/>
module Main {

    export class Guesser {

        private level: Level;

        constructor(level: Level) {
            this.level = level;

            this.level.console.setText("Text from guesser");
        }

    }
}