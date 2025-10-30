
const worker = new Worker('worker.js');

const bgButton = document.getElementById('bgButton');
const totalButton = document.getElementById("total");


totalButton.addEventListener("click", () => {


    worker.postMessage("hello worker please do the work for me");




});
worker.onmessage = function (message) {

    console.log(` the total is ${message.data}`);

};

bgButton.addEventListener("click", () => {
    if (document.body.style.background !== "green") {
        document.body.style.background = "green";
    } else {
        document.body.style.background = "blue";
    };

});













