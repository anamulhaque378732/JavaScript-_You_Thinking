
"use strict";
var printName = function (name) {
    // console.log(this);
    //console.log(window === this);

    console.log(this.name);//undefined

};

var sakib = {
    name: "Sakib",


};

printName();










