// import { King } from './king';
/* eslint-disable linebreak-style */
export class Character {
    // friend: King | null;
    constructor(name, family, age) {
        this.name = name;
        this.family = family;
        this.age = age;
        this.lifeStatus = true;
        this.message = '';
        // this.friend = null;
    }
    communicate() {
        return '';
    }
    die() {
        this.lifeStatus = false;
    }
}
Character.serie = 'GoT';
