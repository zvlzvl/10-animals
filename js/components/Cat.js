class Cat {
    constructor(name, color) {
        this.name = name;
        this.color = color;
        this.sound = 'Miau miau 🐈🐈!';
    }

    voice() {
        console.log(`${this.name} says: ${this.sound}`);
    }

    introduce() {
        console.log(`Hi, I am ${this.name}, my fur is ${this.color} color and I say ${this.sound}`);
    }
}

export { Cat }