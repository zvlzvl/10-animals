class Pet {
    constructor(name, color) {
        this.breed = 'unknow animal';
        this.enviroment = 'land';
        this.name = name;
        this.color = color;
        this.sound = 'Miau au nom 🐕‍🦺🐈🐹!';
    }

    voice() {
        console.log(`${this.breed} ${this.name} says: ${this.sound}`);
    }

    introduce() {
        console.log(`Hi, I am ${this.name}, my fur is ${this.color} color and I say ${this.sound}`);
    }
}

export { Pet }