// 9. don't pollute global prototypes


// bad
Array.prototype.myFunction = function myFunction() {
    //   implementation  
};

// good
class myArray extends Array {
    myFunc() {

        // implementation
    };
};


// 10.  conditional shorthand

// bad
if (isValid === true) {
    // do something
};
if (isValid === false) {
    // do something
};

// good
if (isValid) {
    // do something
};
if (!isValid) {
    // do something 
};


// 11. use method chaining

// bad 
class Product {
    constructor(name) {
        this.name = name;
    };
    setUnits(units) {
        this.units = units;
    };
    setPrice(price) {
        this.price = price;
    };
    save() {
        console.log(this.name, this.price, this.units);

    };
};

const product = new Product("Bag");
product.setPrice(23.5);
product.setUnits(23.5);
product.save(23.5);

// good

class Product {
    constructor(name) {
        this.name = name;
        return this;
    };
    setUnits(units) {
        this.units = units;
        return this;
    };
    setPrice(price) {
        this.price = price;
        return this;
    };
    save() {
        console.log(this.name, this.price, this.units);

    };
};
const product = new Product("T-Shirt").setPrice(600).setUnits(2).save();

// 11. avoid eval()

eval(alert('hi'););


// 12. use curly braces, don't omit curly braces and use shorthand
// 1.

// bad

if (someVariableExists)
    x = false;
// 2.

if (someVariableExists)
    x = false;
anotherFunctionalCall();

// one might think that the code above would be equivalent to:

// good

if (someVariableExists) {
    x = false;
    anotherFunctionalCall();
};

// 13. prototypes method
// Add methods on the .prototype when writing constructors

// bad practices

function Player(name, age) {
    this.name = name;
    this.age = age;
    this.play = function () {
        console.log(`${this.name} is playing`);

    }
};

// good 

function Player(name, age) {
    this.name = name;
    this.age = age;
};
Player.prototype.play = function () {
    console.log(`${this.name} is playing`);

};

let sakib = new Player("sakib", 35);

sakib.play();

// 14. for loop

// Declare variable Outside of the for statement

// bad

for (let i = 0; i < someArray.length; i++) {
    let container = document.getElementById("container");
    container.innerHTML += "My number :" + i;
    console.log(i);

}


// good

let container = document.getElementById("container");
let length = someArray.length;

for (let i = 0; i < length; i++) {
    container.innerHTML += "my number" + i;
    console.log(i);

};

// 15. use let const, use let,const as muc as possible instead of var

// 16. var usage

// bad
var someItem = "some string";
var anotherItem = "Another String";
var oneMoreItem = "oneMore String";

// better

var someItem = "Some string",
    anotherItem = "another Item",
    oneMoreItem = " one more item";


// 17.  always use semicolon
// bad 
let someItems = "Some items"
function doSomething() {
    return 'Something'
}

// good 

let someItems = "Some items";
function doSomething() {
    return 'Something';
};

// 18. use IIFE ="immediately invoked function expression"

(function doSomething() {
    return {
        name: "anamul",
        lastName: "haque"
    };
})();


// 19.  module pattern 

// Avoid using global

// bad

let current = null;
function init() {
    // do something
};

function verify() {
    // do something
};

// good


const myModule = (function () {
    let current = null;

    function init() {
        // do Something
        console.log("init");

    };
    function change() {
        // do something
    };
    function verify() {
        // do something
    };
    return {
        init,
        change,
        present: current
    }
})();
myModule.init();

// 20. script src tag

// avoid language attribute
// bad
<script type="text/javascript" language="javascript" src=""></script>
    // good
<script  src=""></script>









