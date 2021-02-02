import { Animal } from './Animal.js'
class Fish extends Animal {
    constructor(name, color) {
        super(name, color);
        this.breed = 'Fish';
        this.environment = 'water';
        this.material = 'scales';
        this.sound = 'Bul bul 🐠🐟...';
    }
        voice() {
            console.log(`${this.breed} ${this.name} says: ${this.sound}`);
        }
    
        introduce() {
            console.log(`Hi, I am ${this.name}, my ${this.material} is ${this.color} color and I say ${this.sound}`);
        }
    }
    
export { Fish }