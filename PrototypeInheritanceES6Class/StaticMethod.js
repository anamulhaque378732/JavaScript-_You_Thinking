class Person { // parent class
    constructor(name, age) {
        this.name = name; //property
        this.age = age;
    }
    eat() { //method
        console.log(`${this.name} is eating`);
    }

    static isEqualAge(Cricketer1, Cricketer2) {
        return Cricketer1.age === Cricketer2.age;

    };

};

let sakib = new Person("sakib", 20);
let tamim = new Person("tamim", 30);

//console.log(Person.isEqualAge(sakib, tamim));











