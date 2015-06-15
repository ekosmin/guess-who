///<reference path="phaser/typescript/phaser.d.ts"/>
///<reference path="Level.ts"/>
///<reference path="Person.ts"/>
module Main {

    export class Console extends Phaser.Text {

        private static MARGINS = 5;
        private static STYLE;

        constructor(level: Level) {
            super(level.game, Console.MARGINS, Console.getHeight(level), "testing", Console.getStyle());
        }

        private static getHeight(level: Level): number {
            var lastButton: Button = level.buttons.getAt(level.buttons.length - 1);
            return lastButton.y + lastButton.height;
        }

        private static getStyle() {
            return {font: "32px Arial", fill: "#FFFFFF", align: "center",
                wordWrap: true, wordWrapWidth: Game.WIDTH - Console.MARGINS * 2};
        }

    }
}