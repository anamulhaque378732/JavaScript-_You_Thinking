

function copyToClipBoard(str) {

    const element = document.createElement("textarea");
    element.value = str;
    document.body.appendChild(element);
    element.select();
    document.execCommand("copy");
    document.body.removeChild(element);

};



function handleClick() {
    const text = document.getElementById("text");

    copyToClipBoard(text.innerText);

};

const number = document.querySelector("#number").valueAsNumber;

//console.log( number);









