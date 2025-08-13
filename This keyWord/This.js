//implicit binding
//explicit binding
//new binding
//window binding







// ----------------   1   -------------
// var sakib = { //implicit binding
//     name: "Sakib",
//     age: 35,
//     printPlayerName: function () {
//         console.log(this.name);

//     },
// };


// sakib.printPlayerName();
// ---------------  2 ---------------
// var printPlayerNameFunction = function (obj) {

//     obj.printPlayerName = function () {
//         console.log(this.name);

//     }
// };

// var sakib = { // this
//     name: "sakib",
//     age: 35,
// };
// var tamim = { // this
//     name: "tamimkib",
//     age: 35,
// };

// printPlayerNameFunction(sakib)
// printPlayerNameFunction(tamim)


// sakib.printPlayerName();
// tamim.printPlayerName();

// ----------------- 3 --------------


// var Person = function (name, age) {
//     return {
//         name: name,
//         age: age,
//         printName: function () {
//             console.log(this.name);

//         }
//     }
// };

// var sakib = Person("sakib", 35) // implicit this
// sakib.printName();

//  -------- 4 -----------


var Person = function (name, age) {
    return {
        name: name,
        age: age,
        printName: function () {
            console.log(this.name);

        },
        father: { //implicit this
            name: "mr Xx",
            printName: function () {
                console.log(this.name);

            }
        },
    };
};

var sakib = Person("sakib", 35) // implicit this
// sakib.father.printName();

