///<reference path="phaser/typescript/phaser.d.ts"/>
///<reference path="Level.ts"/>
///<reference path="Button.ts"/>
module Main {

    export class Traits {

        public static get(trait: Trait): Name[] {
            switch (trait) {
                case Trait.HAT:
                    return [Name.ERIC, Name.MARIA, Name.CLAIRE, Name.BERNARD, Name.GEORGE];
                    break;
                case Trait.CHEEKS:
                    return [Name.ANITA, Name.PHILIP, Name.SUSAN, Name.ROBERT, Name.BILL];
                    break;
                default:
                    return [];
            }
        }

    }

    export enum Trait {
        HAT, EYES, NOSE, GLASSES, MOUSTACHE,
        GENDER, CHEEKS, SMILE, BEARD
    }

}