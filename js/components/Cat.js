import { Pet } from './Pet.js'
class Cat extends Pet {
    constructor(name, color) {
        super(name, color)
        this.breed = "Cat"
        this.sound = 'Miau miau 🐈🐈!';
    }
}
export { Cat }