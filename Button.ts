///<reference path="phaser/typescript/phaser.d.ts"/>
///<reference path="Level.ts"/>
///<reference path="Person.ts"/>
module Main {

    export class Button extends Phaser.Sprite {

        private level: Level;
        private person: Person;

        constructor(level: Level, person: Person) {
            super(level.game, 0, 0, 'button', 0);
            this.level = level;
            this.width = this.width/7;
            this.height = this.height/7;

            this.person = person;
            this.x = person.x + (person.width - this.width)/2;
            this.y = person.y + person.height;

            this.inputEnabled = true;
            this.events.onInputDown.add(this.togglePerson, this);
        }

        private togglePerson(): void {
            this.person.toggleVisible();
        }
    }
}