// //remove falsy value from the array

Boolean(5 < 6) // true
Boolean(100 > 200); //false
const arr = ["anamul", NaN, false, true, undefined, "", null, 12, 26];


let fil = arr.filter(Boolean);
//console.log(fil);

// //Convert any value to boolean

// console.log(!!"anamul");
// console.log(!!11);
// console.log(!!0);
// console.log(!!undefined);

// // resizing any array

let array = ['anamul', 'sumona', 'raihan', 'moyazzem'];

array.length = 3;
array.length = 2;
//console.log(array);


//// how to flatten multi-dimensional array
// we can use array.flat() method to flatten one level array
let smile = ["a", ["b", "c"], "d", ["e"], "m"];

//console.log(smile.flat());

// multi level array
let smiles = ["a", ["b", ["h", "s"], "c"], "d", ["e"], "m"];

//console.log(smiles.flat(Infinity));

// // short conditional

const myCaptain = "Sumona";
// if (myCaptain === "Sumona") {

//     console.log("love");

// };
// if (myCaptain !== "Sumona") {
//     console.log("angry");

// };

//myCaptain === "Sumona" && console.log("Love");
//myCaptain === "Sumona" || console.log("angry");

///// replace all occurances of a string

const quote = "React is a js framework & this framework is the most popular front-end framework right now";

// replace all occurances of "framework" with 'library';

//console.log(quote.replace(/framework/g, 'library'));
// React is a js library & this library is the most popular front-end library right now

// //// 7. log values with variable names smartly

const library1 = "jQuery";
const library2 = "React";
//console.log(`library1 - ${library1}`); //library1 - jQuery

//console.log(`library2 - ${library2}`);//library2 - React

//console.log({ library1 }); //{ library1: 'jQuery' }

//console.log({ library2 }); //{ library2: 'React' }




// ////8. know performance of a task
// we can warp our task with performance.now();

const startTime = performance.now();
for (let i = 0; i <= 50000; i++) {
    console.log(i);

};
const endTime = performance.now();
console.log(`loop took ${endTime - startTime} ms to finished`);






