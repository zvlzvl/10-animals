
class Animal {
    constructor(name, color) {
        this.breed = 'unknow animal';
        this.enviroment = 'unknown env';
        this.material = 'fur, scales, feathers'
        this.name = name;
        this.color = color;
        this.sound = 'Any';
    }

    voice() {
        console.log(`${this.breed} ${this.name} says: ${this.sound}`);
    }

    introduce() {
        console.log(`Hi, I am ${this.name}, my ${this.material} is ${this.color} color and I say ${this.sound}`);
    }
}

export { Animal }