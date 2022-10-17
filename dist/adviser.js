import { Character } from './character.js';
export class Adviser extends Character {
    constructor(name, family, age, advisedPerson) {
        super(name, family, age);
        this.advisedPerson = advisedPerson;
        this.message = 'No sé por qué, pero creo que voy a morir pronto';
    }
    communicate() {
        return this.message;
    }
}
