// const ProcessOrder = (customer) => {
//     console.log("Processing order the customer  1");
//     setTimeout(() => {
//         console.log("cooking complete");
//     }, 3000);
//     console.log("order process for the customer 1");
// };
// console.log("take order the customer 1 ");
// ProcessOrder();
// console.log("complete order for customer 1");

const takeOrder = (customer, callback) => {
    console.log(`Take order for ${customer}`);
    callback(customer);
};

const processOrder = (customer, callback) => {
    console.log(`Processing order for ${customer}`);

    setTimeout(() => {
        console.log("Cooking complete");
        console.log(`Order processed for ${customer}`);
        callback(customer);
    }, 3000);
};

const completeOrder = (customer) => {
    console.log(`Completed order for ${customer}`);

};

takeOrder("Customer - 1", (customer) => {
    processOrder(customer, (customer) => {
        completeOrder(customer);
    });
}); //call back hell


console.log('Hello');














