
// two types of data types : Primitive , Reference
/** primitive are 6 types
 * string
 * number
 * boolean
 * null
 * undefined
 * symbol
 *
 */
/**Reference   types
 * object
 * array
 * function
 * date
 *
 *
 */




let a = ["sakib", 'tamim']
let b = a;
a.push("anamul") // mutate/change
a = []; //assignment
// console.log(a);
// console.log(b);


let language = {
    name: "Javascript",
    estd: "1995",
    libraries: ["react", "next", "node"],

};
let language2 = { ...language };//immutably

language.libraries.push("angular")

// immutably = not change;

// console.log(language);
// console.log(language2);



var name1 = "sakib";
// console.dir(name1);

var name2 = new String("Anamul") // wrapper type
// console.log(name2.charAt(2));

let bb = "banana";
bb.test = "orange";

// console.log(bb);

// pass by reference / pass by value




let cc = 1;
let change = (val) => {
    val.num = 2; //assignment
};
change(cc) // pass by reference
console.log(cc);





























