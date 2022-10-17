import { Adviser } from './adviser.js';
import { King } from './king.js';
import { Squire } from './squire.js';
import { Warrior } from './warrior.js';

// 6
export const characters = [
    new King('Joffrey', 'Baratheon', 54, 4),
    new Warrior('Jaime', 'Lannister', 40, 'sword', 7),
    new Warrior('Daenerys', 'Targaryen', 30, 'sword', 6),
    new Adviser('Tyrion', 'Lannister', 36, 'Pepe'),
    new Squire('Bronn', '', 28, 'Pepe', 8),
];

// characters[0].friend = characters[1];

console.log(characters);
