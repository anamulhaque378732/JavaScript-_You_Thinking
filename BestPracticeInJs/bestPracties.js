// 1. naming variable : meaning full name


//bad practices
const dayssl = 10;
let ok;
if (dayssl < 30) {
    ok = true;
};
// god practices
const max_allowed_login_expiration_days = 30;
let daysSinceLastLogin = 10;
const inUserLoggedIn = daysSinceLastLogin < max_allowed_login_expiration_days;

// 2.avoid extra word 
let nameValue;
let theProduct;
// good practices
let name;
let product;



//3.  variable ar name amn vabe dite hbe jeno purpose mne rakte pare;



// bad practices 

const products = ["T-shit", "shoes", "Watch", "bags"];

products.forEach((p) => {
    doSomething();
    // what does 'p' stand for
    doSomethingElse(p);
});

// good practices
products.forEach((product) => {
    doSomething();
    doSomethingElse(product);

});



// 3. don't add unnecessary content

// bad practices
const product = {
    productId: 1,
    productName: "T-shirt",
    productPrice: 250,
    productUnit: 25;
};


// good practices
const t_shirt = {
    id: 1,
    name: "T-shirt",
    price: 250,
    unites: 25,

};

// 4. get function name is long and descriptive

// bad practices
function email(user) {
    // implementation;
};


// good practices
function sendEmailToUser(email) {
    // implementation
};

// 5. avoid much arguments in function

// bad practices
function getProducts(fields, fromDate, toDate) {
    // implementation
};
// good 
function getProduct({ fields, fromDate, toDate }) {
    // implementation
};

// bad
function createShape(type) {
    const shapeType = type || "circle";
};

// good


function createShape(type = "circle") {
    // ..........
};

// bad
function createFile(name, isPublic) {
    if (isPublic) {
        fs.create(`./public/${name}`);
    } else {
        fs.create(name);
    };
};

//good
function createFile(name) {
    fs.create(name);

};

function createPublicFile(name) {
    createFile(`./public/${name}`);
};



// 6. akta function ar vitor multiple kaj na korai valo

// bad
function notifyUser(users) {
    users.forEach((user) => {
        const userRecord = database.lookup(user);

        if (userRecord.isVerified()) {
            notifyUser(user)
        };

    });
};

// good

function notifyVerifiedUsers(users) {
    users.filter(isUserVerified).forEach(notify)
};


function isUserVerified(user) {
    const userRecord = database.lookup(user);
    return userRecord.isVerified();

};

// 7. type checking.always check strong type

1 == "1"//true
1 === "1"//false
0 == false//true
0 === false//false
const val = "136";
if (val == "136") {
    // reachable
    console.log(`1..${val}`);

};
if (val == 136) {
    //reachable
    console.log(`2.${val}`);


};
if (val === "136") {
    //reachable
    console.log(`3.${val}`);


};
if (val === 136) {
    //reachable
    console.log(`4.${val}`);
};

// 8.set  default object value please use "Object.assign"

// bad 
const shapeConfig = {
    type: "circle",
    width: 150,
    height: null
};

function createShape(config) {
    config.type = config.type || "circle";
    config.width = config.width || 300;
    config.height = config.height || 300;
};
createShape(shapeConfig);

// good

const shapeConfig = {
    type: "Circle",
    width: 150,
    //exclude the "height" key

};

function createShape(config) {
    config = Object.assign(
        {
            type: "Circle",
            width: 300,
            height: 300
        },
        config
    );
};

createShape(shapeConfig)
