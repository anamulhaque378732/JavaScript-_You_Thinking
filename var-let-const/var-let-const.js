

// -----open scope----
if (true) {
    var varVariable = "This is var";
    var varVariable = "This is var again";
    var varVariable = "This is var again and again";
};
console.log(varVariable);


// ----block scope---

if (true) {
    let letVariable = "This is let";
    letVariable = "this is let again"


    console.log(letVariable);
};


//----block scope-----

if (true) {
    const constVariable = {
        name: "This is const",
        age: 26
    };
    constVariable.name = "js";

    console.log(constVariable);
};















