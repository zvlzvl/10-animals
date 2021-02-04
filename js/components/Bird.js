import { Animal } from './Animal.js'
class Bird extends Animal {
    constructor(name, color) {
        super(name, color)
        this.breed = 'Bird';
        this.environment = 'oras';
        this.material = 'feathers';
        this.sound = 'cyp hello kvi 🐓🦜🦅...';
        this.wingsCount = 2;
        this.canFly = true;
    }
        voice() {
            console.log(`${this.breed} ${this.name} says: ${this.sound}`);
        }
    
        introduce() {
            console.log(`Hi, I am ${this.name}, my ${this.material} is ${this.color} color i have ${this.wingsCount} wings and I say ${this.sound}`);
        }
       
        flyAway() {
        if (!this.canFly){
        console.log(`This ${this.breed} can/'t fly..`);
        return false;
        }
        console.log(`Fly away...`);  
    }   
}
    
    
export { Bird }