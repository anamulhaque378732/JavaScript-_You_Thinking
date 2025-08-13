class Person { // parent class
    constructor(name, age) {
        this.name = name; // property
        this.age = age; //property
    }
    //method
    eat() {
        console.log(`${this.name} is eating`);
    }

    // get setName() { //getter
    //     return this.name;
    // };


    set setName(name) {
        this.name = name;

    };


};

let sakib = new Person("sakib", 20);
//console.log(sakib.setName);

sakib.setName = "Tamim";
// console.log(sakib.name);








