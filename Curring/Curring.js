// curring
function multiply(a, b, c) {
    return a * b * c;
};

function curriedMultiply(a) {
    return function (b) {
        return function (c) {
            return a * b * c;
        };
    };
};

//console.log(curriedMultiply(4)(5)(6));

let step1 = curriedMultiply(5);
let step2 = step1(4);
let step3 = step2(6)

//console.log(step3);

function discount(disc) {
    return (price) => {
        return price - price * disc
    };
};
let twentyPercentDiscount = discount(0.2);//partial function

//let customer1d = tenPercentDiscount(700);
//let customer2D = twentyPercentDiscount(1200); //partial function
//console.log(customer2D);









