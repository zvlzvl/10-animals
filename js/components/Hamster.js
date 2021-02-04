import { Pet } from './Pet.js'
class Hamster extends Pet {
    constructor(name, color, canEatTillDeath) {
        super(name, color)
        this.breed = "Hamster"
        this.sound = 'Nom nom 🐹🐹!';
        this.canEatTillDeath = canEatTillDeath ?? true;
      
    }
       
    canEat() {
        if (!this.canEatTillDeath){
        console.log(`${this.breed} eats small portions`);
        return false;
        }
        console.log(`${this.breed} eats till death..`);  
    }   
}
export { Hamster }