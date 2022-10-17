import { Character } from './character.js';
export class Squire extends Character {
    constructor(name, family, age, servingTo, pelotism) {
        super(name, family, age);
        this.message = 'Soy un loser';
        this.servingTo = servingTo;
        this.pelotism = pelotism;
    }
    communicate() {
        return this.message;
    }
}
