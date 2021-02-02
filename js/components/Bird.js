import { Animal } from './Animal.js'
class Bird extends Animal {
    constructor(name, color) {
        super(name, color)
        this.breed = 'Bird';
        this.environment = 'oras';
        this.material = 'feathers';
        this.sound = 'cyp hello kvi 🐓🦜🦅...';
    }
        voice() {
            console.log(`${this.breed} ${this.name} says: ${this.sound}`);
        }
    
        introduce() {
            console.log(`Hi, I am ${this.name}, my ${this.material} is ${this.color} color and I say ${this.sound}`);
        }
    }
    
export { Bird }