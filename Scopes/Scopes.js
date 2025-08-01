'use strict'
var x = 23;
parent scopes
function myFunc() {
    // myFunc ar scopes
    var y = 10;
    console.log(`${x} from myFunc`);
};
myFunc();
console.log(x);


// parent scopes
function myFunction() {
    // myFunc ar scopes
    let x = 10;
    console.log(`${x} from myFunc`);
};
myFunction()
console.log(x);








