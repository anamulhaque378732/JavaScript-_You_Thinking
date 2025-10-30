const parent = document.getElementById("parent");
const form = document.getElementById("form");
const button = document.getElementById("button");

// bubbling

// parent.addEventListener('click', listener

// );

// form.addEventListener('click', listener

// );

// button.addEventListener('click', listener

// );

//event capturing pr trickling

// parent.addEventListener('click', listener, {
//     capture: true
// });

// form.addEventListener('click', listener, {
//     capture: true
// });

// button.addEventListener('click', listener, {
//     capture: true
// });



parent.addEventListener('click', listener);

form.addEventListener('click', listener, true);

button.addEventListener('click', listener);



function listener(event) {
    //console.log(this.tagName);
    //console.log(this);

    console.log(event.currentTarget.tagName);

}












































