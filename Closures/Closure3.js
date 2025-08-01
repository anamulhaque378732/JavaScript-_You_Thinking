function apiFunction(url) {
    fetch(url)
        .then((res) => {
            console.log(res)
        }
        );


};


// apiFunction('https://jsonplaceholder.typicode.com/todos/1');


// console.log('i am here');


for (var i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log(i)
    }, 3000)

};

console.log("after for loop");





