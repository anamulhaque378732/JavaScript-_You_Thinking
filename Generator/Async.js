// async generator
const takeOrder = (customer) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`order taken from ${customer}`);

        }, 1000);
    });
};

const processOrder = (customer) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Order processed for ${customer}`);
        }, 2000);
    });
};

const completeOrder = (customer) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`order completed for ${customer}`);
        }, 3000)
    });
};


async function* solution(customer) {
    yield await takeOrder(customer);
    yield await processOrder(customer)
    yield await completeOrder(customer)


};


const gen = solution("karim")

// gen.next().then(({ value }) => console.log(value))
// gen.next().then(({ value }) => console.log(value))
// gen.next().then(({ value }) => console.log(value))

const promises = [gen.next(), gen.next(), gen.next()];

(async function () {

    for await (let p of promises) {
        console.log(element);
    }
})();



















