///<reference path="phaser/typescript/phaser.d.ts"/>
///<reference path="Level.ts"/>
///<reference path="Person.ts"/>
///<reference path="Console.ts"/>
module Main {

    export class Guesser {

        private level: Level;

        constructor(level: Level) {
            this.level = level;

            this.level.console.setText("" + this.findRemainingWithTrait(Trait.CHEEKS));
        }

        private findRemainingWithTrait(trait: Trait): number {
            var allNames: Name[] = Traits.get(trait);
            var remaining: number = 0;
            for (var i: number = 0; i < allNames.length; i++) {
                var name: Name = allNames[i];
                var person: Person = this.level.nameToPerson[name];
                if (person.isVisible()) {
                    remaining++;
                }
            }

            return remaining;
        }

    }
}