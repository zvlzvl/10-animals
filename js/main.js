import { Dog } from './components/Dog.js';
import { Nemo } from './components/Nemo.js';
import { GoldFish } from './components/GoldFish.js';

const rexas = new Dog('Rexas', 'brown');
const nemo = new Nemo('Nemo', 'blue');
const ariele = new GoldFish('Ariele', 'blue');

nemo.voice();
nemo.introduce();

console.log(ariele);
ariele.voice();
ariele.introduce();
ariele.makeWish('Gyvo drakono');