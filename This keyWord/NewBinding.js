// new binding

function Person(name, age) {

    // let this = Object.create(null)
    this.name = name;
    this.age = age;
    console.log(`${name} is a ${age} years old`);
    //return this;
};
var sakib = new Person("sakib", 35);




















