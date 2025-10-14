// symbols in js
const myArr = [1, 2, 3, 4, 5, 6];
const includes = Symbol("My own array includes method");
Array.prototype[includes] = () => {
    console.log("this is my array includes function");

};



//console.log(myArr.includes(7));
myArr[includes](2);


const title = "Javascript";

// 1. title ke new String("Javascript")
// 2. convert parameter  into RegExp
// 3.RegExp er modde Symbol.search() er implementation ache kina



///console.dir(String);


//console.log(title.search(/script/));
//console.log(title.search("script"));
class Product {
    constructor(title) {
        this.title = title;
    }

    // implement search

    [Symbol.search](string) {
        return string.indexOf(this.title) >= 0 ? "Found" : "Not Found";
    }


};
const laptop = new Product("Laptop")
//console.log("HP Laptop".search(laptop));
function myFunc() {
    const pvt = Symbol("My private value");
    return {
        modify(object) {
            object[pvt] = true
        },

        output(object) {
            return object[pvt]
        }

    };
};

const value = myFunc();
const obj = { a: 1, b: 2 };

value.modify(obj);
console.log(value.output(obj));




console.log(obj);


delete obj['Symbol("My private value")'];
console.log(obj);












