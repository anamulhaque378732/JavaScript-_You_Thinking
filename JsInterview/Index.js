// let a = [1, 2];
// let b = [4, 5]


//console.log(a + b);

//console.log([] + []); //""
//console.log({} + []); //[object Object]

//console.log(true + 5); //6
//console.log(false + 5); //5

//// 2.

function myFunction() {
    //console.log(arguments);
    return "Bangladesh";

};
const string = myFunction`hello`; // "Bangladesh"

const string2 = myFunction(`hello`); // "
// Bangladesh"
//console.log(string, string2);

/////3.0 how to make all text content of a website editable




//4.0 what will be the output of below function

function b() {
    console.log(`the length is ${this.length}`);

};
let a = {
    length: 10,
    method: function (b) {
        arguments[0]();
    }
};

//a.method(b, 5);

// // 5.0  what will be the output of below function
const c = "constructor";
//console.log(c[c](01));


////6.0 what will be the output
//console.log(0.1 + .2);
//console.log(0.1 + 0.3);

//// 7. what will be the output

//console.log(("Bangladesh").__proto__.__proto__);
//console.log(("Bangladesh").__proto__);
//console.log(("Bangladesh").__proto__.__proto__.__proto__);


/////8.0 make a function that sorts its arguments without using loops

function myFunc() {

    return [].slice.call(arguments).sort();


};

//console.log(myFunc(4, 5, 6, 2, 1));






















































