import { Animal } from './Animal.js'
class Fish extends Animal {
    constructor(name, color) {
        super(name, color);
        this.breed = 'Fish';
        this.environment = 'water';
        this.material = 'scales';
        this.sound = 'Bul bul 🐠🐟...';
        this.canSwim = true;
    }
        voice() {
            console.log(`${this.breed} ${this.name} says: ${this.sound}`);
        }
    
        introduce() {
            console.log(`Hi, I am ${this.name}, my ${this.material} is ${this.color} color and I say ${this.sound}`);
        }
        swimAway() {
            if (!this.canSwim){
            console.log(`This ${this.breed} can/'t swim..`);
            return false;
            }
            console.log(`${this.name} swim away...`);  
        }   
    }
    
export { Fish }