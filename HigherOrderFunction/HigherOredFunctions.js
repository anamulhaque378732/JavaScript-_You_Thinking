// var a = function hello() {
//     console.log("hallow world");

// };
// console.dir(a);

// var str = {
//     name: "Bangladesh"
// }

// console.dir(str);


// function hello() {
//     return function () {
//         console.log("Anamul");

//     };

// };

// hello()();


// example - 1 without higher order function
// var numbers = [1, 2, 3, 4, 5, 6]


// var result = [];

// for (let i = 0; i < numbers.length; i++) {
//     result.push(numbers[i] * 2);
// }

// console.log(result);

// // example 1 with higher order function

// var result2 = numbers.map(number => number * 5)

// console.log(result2);

// example -2 without higher order function

// var players = [
//     { name: "Sakib0", avg: 38 },
//     { name: "tamim", avg: 35 },
//     { name: "Musfiq", avg: 36 },
//     { name: "mahmudulla", avg: 37.75 }
// ];

// var updatedPlayers = [];
// for (let i = 0; i < players.length; i++) {

//     if (players[i].avg >= 37) {
//         updatedPlayers.push(players[i])
//     };


// };

// console.log(updatedPlayers);




// example -2 with higher order function


// var players = [
//     { name: "Sakib0", avg: 38 },
//     { name: "tamim", avg: 35 },
//     { name: "Musfiq", avg: 36 },
//     { name: "mahmudulla", avg: 37.75 }
// ];

// const updatedPlayers = players.filter(player => player.avg >= 37);


// console.log(updatedPlayers);

//  example 3 array.map() built in me

const languages = ["JavaScript", "Python", "PHP", "C"];

function mapAnamul(arr, fn) {

    const newArray = [];

    for (let i = 0; i < arr.length; i++) {
        newArray.push(fn(arr[i]));
    };

    return newArray;
};


const myArray = mapAnamul(languages, function (language) {
    return language.length;
});

console.log(myArray);
