
const getButton = document.getElementById("get-button");
const sendButton = document.getElementById("send-button");


const sendRequest = (method, url, data) => {
    const promise = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();

        // GET, POST, PUT,DELETE,OPTIONS, HEAD

        xhr.open(method, url);
        xhr.responseType = 'json';
        xhr.setRequestHeader("Content-type", "application/json");
        xhr.send(data);

        xhr.onload = function () {
            if (xhr.status >= 400) {
                reject(xhr.response)
            } else {
                resolve(xhr.response);
            }

        };

        xhr.onerror = function () {
            rej("Something was wrong!!!")
        }
    });
    return promise;
};

const getData = () => {
    sendRequest("GET", "https://jsonplaceholder.typicode.com/todos/1")
        .then((responseData) => {
            console.log(responseData);
        })



};

const sendData = () => {
    sendRequest("POST", "https://jsonplaceholder.typicode.com/posts", JSON.stringify({
        title: "foo",
        body: "bar",
        userId: 1,
    }))
        .then((responseData) => {
            console.log(responseData);
        }).catch(err => {
            console.log(err);

        })



};


getButton.addEventListener("click", getData);
sendButton.addEventListener("click", sendData);









































