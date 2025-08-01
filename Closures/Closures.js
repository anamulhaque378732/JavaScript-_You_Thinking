// const num1 = 2;


// const sum = () => {
//     const num2 = 3;
//     return num1 + num2
// };

// console.dir(sum)



// const sum = (num1, num2) => {
//     return num1 + num2
// };


// console.dir(sum(2, 3));


// function bankAccount(initialBalance) {
//     let balance = initialBalance;

//     return function () {
//         return balance
//     };
// };



// let account = bankAccount(100000)

// console.dir(account);

function stopWatch() {

    var startTime = Date.now();


    function getDelay() {
        console.log(Date.now() - startTime);

    };
    return getDelay


};
var timer = stopWatch();

for (var i = 0; i < 10000000; i++) {
    var a = Math.random() * 100000;


};
console.dir(timer);
timer = null
timer()





























































