let object = {
    value1: 1,
    value2: 2,
    value3: 3,
    value4: 4,
    value5: 5,
};

//console.log(Object.entries(object)); 

// iterator
Object.prototype[Symbol.iterator] = function () {
    const entries = Object.entries(this);
    let count = entries.length;
    let index = 0;
    return {
        next() {
            if (count > 0) {
                let result = { done: false, value: entries[index][1] };
                count--;
                index++;
                return result;
            };
            return { done: true };
        }
    };
};

for (let element of object) {
    //console.log(element);

};
//console.log([...object]);

//console.log({ ...object });

// generator
function* generator(obj) {
    const entries = Object.entries(obj);
    for (let element of entries) {
        yield element[1]
    };
    return "test";
};


const iterator = generator(object);
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

// for (let element of iterator) {
//     console.log(element);

// };
//console.log([...iterator]);










