const result = "ANAMUL" / 5; // NaN
const weird = NaN;
//console.log(weird === weird); //false

const result1 = "anamul" / 5; //NaN
const result2 = "sumona" / 3; //NaN


//console.log(result1 === result2);

const array = [NaN];
const result4 = array.includes(NaN);
console.log(result4); // true

//same value zero algorithm

const sameValueZeroAlgorithm = (a, b) => {
    if ((a === b) || (Number.isNaN(a) && Number.isNaN(b))) {
        return true;
    }
    return false;
}































