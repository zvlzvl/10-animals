import { Bird } from './Bird.js';
class Chicken extends Bird {
    constructor(name, color) {
        super(name, color)
        this.sound = 'cyp cyp 🐓...';
    }
    }
    
export { Chicken }