// Symbols in JS
// dont create new keyword
const nam = new String("Anamul")
const name = "JS";
//const object = {
//     name: "JS",

// };

const symbols = Symbol("I am symbols 1");//symbols with description
const symbols1 = Symbol('i am symbols 2');

//console.log(symbols === symbols1); // false
//console.log(symbols == symbols1);
//console.log(symbols);
//console.log(symbols1);

const name2 = Symbol.for();//avoid better
const name3 = Symbol.for();

//console.log(name2 === name2);

const cricket = Symbol.for("This is cricket");

let test = "testestestest";


const object = {
    name: "Sakib",
    age: 36,
    [cricket]: 3,
    [test]: "dsfcadvb",
};
//console.log(object);

// Why need symbols .hide property
const person = {};
person.name = "Anamul";
person.age = "26";
person[Symbol("Founder")] = "Brendan Eich";
//console.log(person);
console.log(Object.keys(person));

// for (let key in person) {
//     console.log(key);

// };




























