

function* Generator(a, b) {
    let k = yield a + b;
    let m = yield a + b + k;
    let l = yield a + b + k + m;
    yield a + b + k + m + l;
};

let iterator = Generator(10, 20);
console.log(iterator.next());
console.log(iterator.next(40));
console.log(iterator.next(100));
console.log(iterator.next(1000));

























