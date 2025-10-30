
const list = document.getElementById("list")

list.addEventListener("click", (e) => {
    // all event
    // e.target.style.backgroundColor = 'red';
    // console.dir(e.target);

    // only particular event

    // if (e.target.matches("li")) {
    //     e.target.style.backgroundColor = 'red';
    // };

    // different color in different li
    if (e.target.matches("li")) {
        if (e.target.innerText === "Javascript") {
            e.target.style.backgroundColor = 'red';
        } else {
            e.target.style.backgroundColor = 'green';
        }

    }
}

);

function addElement() {

    const newElement = document.createElement('li');
    newElement.textContent = "Golang";
    list.appendChild(newElement)

};










