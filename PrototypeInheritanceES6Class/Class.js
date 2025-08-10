// ----------------- prototype  -----------------

// function Person(name, age) {
//     this.name = name;
//     this.age = age;

// };
// Person.prototype = {
//     paly: function () {
//         console.log(`${this.name} is playing`);

//     }
// };
// const sakib = new Person("Shakb", 35);
// console.log(sakib);

// const tamim = new Person("Shakb", 35);
// console.log(tamim);

// sakib.paly()



// function Person(name, age) {
//     this.name = name;
//     this.age = age;

// };

// const anamul = new Person("anamul", 25);
// var f = function Person() {

// };

// console.dir(f);
// Object.prototype.sumit = function () {
//     console.log("i am anamul");

// };

// var p = {};
// p.sumit();

// ---------------------------- prototype  inheritance ----------------
// function Person(name, age) { //parent class
//     this.name = name;
//     this.age = age;

// };

// function Cricketer(name, age, type, country) { // sub class
//     Person.call(this);

//     this.name = name;
//     this.age = age;
//     this.type = type;
//     this.country = country;



// };
// Person.prototype = {
//     eat: function () {
//         console.log(`${this.name} is eating`);

//     }
// };
// Cricketer.prototype = Object.create(Person.prototype);

// Cricketer.prototype.constructor = Cricketer;
// Cricketer.prototype.play = function () {
//     console.log(`${this.name} is playing`);

// };

// let anamul = new Cricketer("anamul", 25, 'all rounder', "bangladesh");

// console.log(anamul.eat(), anamul.play());


// ------------- convert to class ------- 
class Person { // parent class
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat() {
        console.log(`${this.name} is eating`);
    }

};

class Cricketer extends Person { //sun class
    constructor(name, age, type, country) {
        super(name, age);
        this.name = name;
        this.age = age;
        this.type = type;
        this.country = country;
    }
    play() {
        console.log(`${this.name} is playing`);

    }
};
let anamul = new Cricketer("anamul", 25, 'all rounder', "bangladesh");

// console.log(anamul.);

let tamim = new Person('tamil', 35);
tamim.eat();



























































