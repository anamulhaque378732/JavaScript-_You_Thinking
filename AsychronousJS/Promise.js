// ------------- 1 --------------
// const hasMeeting = false;
// const meeting = new Promise((resolve, reject) => {
//     // do some thing
//     if (!hasMeeting) {
//         const meetingDetails = {
//             name: "Technical meeting",
//             location: "Google meet",
//             time: "10.00 pm"
//         };
//         resolve(meetingDetails)
//     } else {
//         reject(new Error("Meeting already scheduled"))
//     };
// });





// meeting
//     .then((res) => {
//         //resolve data
//         console.log((JSON.stringify(res)));
//     }).catch((err) => {
//         // reject data
//         console.log(err.message);
//     });

// console.log('Hello');


// ------------------- 2 ------------
const hasMeeting = true;
const meeting = new Promise((resolve, reject) => {
    // do some thing
    if (!hasMeeting) {
        const meetingDetails = {
            name: "Technical meeting",
            location: "Google meet",
            time: "10.00 pm"
        };
        resolve(meetingDetails)
    } else {
        reject(new Error("Meeting already scheduled"))
    };
});


const addToCalender = (meetingDetails) => {
    // option 1
    // return new Promise((resolve, reject) => {

    // const calender = `${meetingDetails.name} has been scheduled on ${meetingDetails.location} at ${meetingDetails.time}`;
    // resolve(calender);

    // });
    // option -2 
    const calender = `${meetingDetails.name} has been scheduled on ${meetingDetails.location} at ${meetingDetails.time}`;
    return Promise.resolve(calender);
};


meeting
    .then(addToCalender)
    .then((res) => {
        //resolve data
        console.log(res);
    }).catch((err) => {
        // reject data
        console.log(err.message);
    });

console.log('Hello');
























