import { Dog } from './components/Dog.js';
import { Cat } from './components/Cat.js';
import { Hamster } from './components/Hamster.js';
import { Nemo } from './components/Nemo.js';
import { GoldFish } from './components/GoldFish.js';
import { Chicken } from './components/Chicken.js';
import { Parrot } from './components/Parrot.js';
import { Eagle } from './components/Eagle.js';
import { Dragonfly } from './components/Dragonfly.js';

const rexas = new Dog('Rexas', 'brown');
const kitty = new Cat('kitty', 'black and white');
const hamis = new Hamster('Hamis', 'brown');
const vistyte = new Chicken('Vistyte', 'white');
const kakadu = new Parrot('Kakadu', 'green');
const erelis = new Eagle('Erelis', 'grey');
const vabaliukas = new Dragonfly('Vabaliukas', 'light blue');
const nemo = new Nemo('Nemo', 'blue');
const ariele = new GoldFish('Ariele', 'blue');

rexas.voice();
rexas.introduce();

kitty.voice();
kitty.introduce();

hamis.voice();
hamis.introduce();
hamis.canEat();

console.log('------------------------------');

vistyte.voice();
vistyte.introduce();
vistyte.flyAway();

kakadu.voice();
kakadu.introduce();
kakadu.flyAway();

erelis.voice();
erelis.introduce();
erelis.flyAway();

vabaliukas.voice();
vabaliukas.introduce();
vabaliukas.isImposter();
vabaliukas.flyAway();

console.log('------------------------------');

nemo.voice();
nemo.introduce();
nemo.swimAway();

ariele.voice();
ariele.introduce();
ariele.makeWish('Gyvo drakono');
ariele.swimAway();



