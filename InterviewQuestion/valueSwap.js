// 1. how can we swap values
//[1, 2, 3, 4, 5, 6]; --> [5,2,3,4,1]

const arr = [1, 2, 3, 4, 5, 6];

// 1.1 temp variable
// let temp = arr[0];
// arr[0] = arr[4];
// arr[4] = temp;
//console.log(arr);


// 1.2  array destructuring

//[arr[0], arr[4]] = [arr[4], arr[0]]

//console.log(arr);


//1.3  math

let a = 1;
let b = 6;
b = a + (a = b) - b;

//console.log(a, b);




// 2.how to copy things from clipboard












//3.  destructuring aliases


const language = {
    name: "JS",
    founded: "1995",
    founder: "brendan Eich"

};


const { name, founded } = language;
//console.log(name, founded);
const { name: languageName, founded: creatorName } = language;
//console.log(languageName, creatorName);




//4. get value as a data type

// <input id="number" value="123" type="number"   />





//5. remove duplicate from array
const array = [1, 2, 2, 3, 3, 4, 4, 5, 5] //-->[1,2,3,4,5];

//console.log([...new Set(array)]);





// 6. compare two array by value

//compare ([1,3],[1,5]) false

const arr1 = [1, 2];
const arr2 = [1, 2];

const hasSameElements = (arr1, arr2) => {
    return arr1.length === arr2.length && arr1.every((v, i) => v === arr2[i]);



};
//console.log(hasSameElements(arr1, arr2));





// 7.  shuffling an array
const numbers = [1, 2, 3, 4, 5]

//console.log(numbers.sort(() => Math.random() - 0.5));




// 8. using comma operator

//  x=(2,3) --> what is the output of x here

let x = 1;
x = (x++, x);
//console.log(x);


let y = (2, 3)
//console.log(y);



let aa = [[1, 2, 3, 4], [3, 4, 5], [5, 6], [7]];
for (let i = 0, j = 3; i <= 3; i++, j--) {

    console.log(`aa[${i}][${j}] = ${aa[i][j]}`);



};













































