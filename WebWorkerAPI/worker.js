
// self.onmessage = function (message) {

// }
onmessage = function (message) {
    console.log("worker has started working.....");
    let total = 0;
    for (let i = 0; i < 1000000000; i++) {
        total += i
    };
    console.log("Worker has finished the work");

    postMessage(total)
};




































