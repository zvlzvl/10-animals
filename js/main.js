import { Dog } from './components/Dog.js';
import { Cat } from './components/Cat.js';
import { Hamster } from './components/Hamster.js';

const rexas = new Dog('Rexas', 'brown');
const pukis = new Cat('Pukis', 'white');
const jorkis = new Hamster('Jorkis', 'golden');

console.log(rexas);
console.log(pukis);
console.log(jorkis);

rexas.voice();
pukis.voice();
jorkis.voice();

rexas.introduce();
pukis.introduce();
jorkis.introduce();