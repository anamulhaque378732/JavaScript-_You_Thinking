
function* generator() {
    yield 1;
    yield 2;
    return "I am finished";
    yield 3;
    yield 4;

};


let iterator = generator();
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());



// As generator function
// function *myGenerator() { };

// or
// function * myGenerator() { };

// or
// function * myGenerator() { };

// as generator method
// const myGenerator =function*() { };

// generator arrow Functions
// let myGenerator = * () => {};

// inside class
// class myClass(){
//     * myGenerator(){ };
// }

// inside object literal
// const myObject = {
//     *myGenerator() { };
// }




