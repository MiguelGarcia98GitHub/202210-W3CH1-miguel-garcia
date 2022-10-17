import { Character } from './character.js';
export class Warrior extends Character {
    constructor(name, family, age, weapon, dexterity) {
        super(name, family, age);
        this.weapon = weapon;
        this.message = 'Primero pego y luego pregunto';
        this.dexterity = dexterity;
    }
    communicate() {
        return this.message;
    }
}
