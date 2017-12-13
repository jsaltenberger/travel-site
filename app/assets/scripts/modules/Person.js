class Person {
    constructor(_name, _color) {
        this.name = _name;
        this.color = _color;
    }

    greet() {
        console.log(this.color);
    }
}

export default Person;