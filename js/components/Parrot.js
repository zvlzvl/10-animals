import { Bird } from './Bird.js';
class Parrot extends Bird {
    constructor(name, color) {
        super(name, color)
        this.sound = 'Hello hello 🦜...';
    }
    }
    
export { Parrot }