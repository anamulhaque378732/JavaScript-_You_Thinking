
// explicit binding
// ---------------- 1 .call--------
// var printName = function (v1, v2, v3) {
//     console.log(`${this.name} is ${v1}, ${v2}, ${v3}`)

// };


// var sakib = {
//     name: "sakib",
//     age: 35,

// };
// var v1 = "HandSome";
// var v2 = "All Rounder";
// var v3 = "Best Player";

// printName.call(sakib, v1, v2, v3);



// ---------- 2 .apply------------

// var printName = function (v1, v2, v3) {
//     console.log(`${this.name} is ${v1}, ${v2}, ${v3}`)

// };


// var sakib = {
//     name: "sakib",
//     age: 35,

// };
// var v1 = "HandSome";
// var v2 = "All Rounder";
// var v3 = "Best Player";
// var v = [v1, v2, v3];
// printName.apply(sakib, v);

// ------------ 3 .bind -----------

var printName = function (v1, v2, v3) {
    console.log(`${this.name} is ${v1}, ${v2}, ${v3}`)

};


var sakib = {
    name: "sakib",
    age: 35,

};
var v1 = "HandSome";
var v2 = "All Rounder";
var v3 = "Best Player";

var newFuc = printName.bind(sakib, v1, v2, v3);
newFuc();


