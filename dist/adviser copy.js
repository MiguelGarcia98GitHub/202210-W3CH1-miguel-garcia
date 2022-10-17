import { Character } from './character';
export class Adviser extends Character {
    constructor(name, family, age) {
        super(name, family, age);
        this.advisedPerson = '';
        this.message = 'No sé por qué, pero creo que voy a morir pronto';
    }
    communicate() {
        return this.message;
    }
}
