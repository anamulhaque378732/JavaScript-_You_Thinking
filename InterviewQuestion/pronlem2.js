// 1.000count duplicate element in an array

const numbers = [1, 2, 1, 2, 1, 3, 3, 2, 6, 5, 4, 6, 5, 6, 4, 8, 8, 9, 10];



function countDuplication(data) {
    const output = {};

    // logic here
    // data.map(d => {

    //     output[d] = (output[d] || 0) + 1;
    //     // console.log(output[d]);

    // });

    data.forEach(d => {

        output[d] = (output[d] || 0) + 1;
        // console.log(output[d]);

    });

    return output;
}

//console.log(countDuplication(numbers));

//2.000 reverse words in a string


const str = "I Love Bangladesh";
// result= "I evoL hsedalgnaB"


function reverseStr(data) {

    const dataAsArray = data.split(" ");

    const result = dataAsArray.map((d) => {

        return d.split("").reverse().join("")

    });

    return result.join(" ");
};


//console.log(reverseStr(str));

/////3.000 sorting words by length in a sentence by ascending order and decending order

const str2 = "Java is a programming language";
// output = "a is java language programming";



function sortWordsByLength(str) {
    const dataAsArray = str.split(" ");

    dataAsArray.sort((a, b) => {
        //return a.length - b.length;
        return b.length - a.length
    });

    return dataAsArray.join(" ");
};


//console.log(sortWordsByLength(str2));






