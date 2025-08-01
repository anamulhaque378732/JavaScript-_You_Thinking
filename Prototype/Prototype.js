
// let person = {};
// person.name = "Josim"
// person.ag = 30;
// person.eat = function () {
//     console.log(`person is eating`);

// };

// person.sleep = function () {
//     console.log("person i sleeping");

// };
// console.log(person);

// -----------------

// function Person(name, age) {
//     let person = {}
//     person.name = "Josim";
//     person.ag = 30;

//     person.eat = function () {
//         console.log("person is eating");

//     },

//         person.sleep = function () {
//             console.log("person i sleeping");

//         },
//         person.play = function () {
//             console.log("person is playing");

//         }

//     return person
// };

// const anamul = Person("Anamul", 30);
// const tamim = Person("tamim", 36)
// console.log(anamul, tamim);

// -------------------


// const personMethod = {
//     eat() {
//         console.log("person is eating");

//     },

//     sleep() {
//         console.log("person i sleeping");

//     },
//     play() {
//         console.log("person is playing");

//     }
// };
// function Person(name, age) {
//     let person = {};
//     person.name = name;
//     person.age = age;

//     person.eat = personMethod.eat;
//     person.sleep = personMethod.sleep;
//     person.play = personMethod.play;

//     return person;
// };

// const anamul2 = Person("Anamul", 30);
// const tamim2 = Person("tamim", 36);
// console.log(anamul2, tamim2);

// ----------------------- ------------------------


// const captain = {
//     name: 'Mashrafi',
//     age: 35,
//     country: "Bangladesh"
// };

// const player = Object.create(captain);


// console.log(player.age);

// ------------------------- Object.create()  --------

// constructor function start by capital letter

// function Person(name, age) {
//     let person = Object.create(Person.prototype)
//     person.name = name;
//     person.age = age;



//     return person;
// };
// Person.prototype = {
//     eat() {
//         console.log("Person is eating");

//     },

//     sleep() {
//         console.log("Person i sleeping");

//     },
//     play() {
//         console.log("Person is playing");

//     },


// };
// const anamul = Person("Anamul", 30);
// const tamim = Person("tamim", 36);


// ------------------  this            ------------------



// function PersonWithNew(name, age) {
//     // let this = Object.create(PersonWithNew.prototype) // line lekha lagbona
//     this.name = name;
//     this.age = age;
//     // add new property
//     this.contact = "012774521"


//     // return this; // lone lekha lagbona
// };

// PersonWithNew.prototype = {
//     eat() {
//         console.log("Person is eating");

//     },

//     sleep() {
//         console.log("Person i sleeping");

//     },
//     play() {
//         console.log("Person is playing");

//     },


// };



// const anamul2 = new PersonWithNew("Anamul", 30);
// anamul2.play()
// const tamim2 = new PersonWithNew("tamim", 36);


// ------------------- class -------------

class PersonWithClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    };


    eat() {
        console.log("Person is eating");

    };

    sleep() {
        console.log("Person i sleeping");

    };
    play() {
        console.log("Person is playing");

    };

};
const anamulHaque = new PersonWithClass("anamul", 26)
anamulHaque.play()
console.log(anamulHaque);






















