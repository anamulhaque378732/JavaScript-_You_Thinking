// custom Iterator

//console.log([..."hello"]); [ 'h', 'e', 'l', 'l', 'o' ];

let name = "Anamul";
//console.dir(String);


String.prototype[Symbol.iterator] = function () {
    let count = this.length;
    return {
        next() {
            // return a object {done:false/true, value:"JS"}
            if (count > 0) {
                count--;
                return { done: false, value: "JS" };
            }
            return { done: true };
        }
    };
};

//console.log([..."hello"]);

function range(start, end, step) {
    let current = start;
    return {
        [Symbol.iterator]: function () {
            return {
                next() {
                    let result;
                    if (current <= end) {
                        result = {
                            done: false,
                            value: current
                        };
                        current += step;
                        return result;


                    }
                    return {
                        done: true
                    };
                }
            };
        }
    };
};

console.log([...range(100, 1000, 5)]);










