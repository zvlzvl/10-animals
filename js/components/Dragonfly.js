import { Bird } from './Bird.js';
class Dragonfly extends Bird {
    constructor(name, color, imposter) {
        super(name, color)
        this.sound = 'zzz zzz 🦟...';
        this.wingsCount = 4;
        this.imposter = imposter ?? true;
        
    }
       
    isImposter() {
        if (!this.imposter){
        console.log(`${this.breed} is not an imposter`);
        return false;
        }
        console.log(`this is not a ${this.breed} it is imposter chi chi..`);  
    }   
}
export { Dragonfly }