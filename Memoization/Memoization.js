function add(...x) {
    console.log(x);

    return x.reduce((sum, current) => sum + current)
};
// console.log(add(10));
// console.log(add(10));
// console.log(add(10));
// console.log(add(10));

// higher order function
const memo = (func) => {
    const cache = {};
    return function (...x) {
        const key = JSON.stringify(x);
        console.log(key);

        if (cache[key]) {

            return cache[key];
        } else {

            const result = func(...x);
            cache[key] = result;
            return result;
        };
    };
};


const calculate = memo(add);
console.log(calculate(10, 20, 30, 40));
// console.log(calculate(10));
// console.log(calculate(10));



















