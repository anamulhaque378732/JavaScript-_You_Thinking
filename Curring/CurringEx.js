

function log(date, importance, message) {
    console.log(`${date.getHours()}: ${date.getMinutes()}:${date.getSeconds()} : ${importance} :${message}`);

};
let curriedLog = _.curry(log);

//curriedLog(new Date(), "DEBUG", 'Some Debug');

//curriedLog(new Date())("DEBUG")("Some debug");

let logNow = curriedLog(new Date())

//logNow("Info", "info message")

const multiply = (a) => (b) => (c) => a * b * c;
console.log(multiply(5)(6)(7));


