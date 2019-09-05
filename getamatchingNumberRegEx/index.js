/*
Using the provided array, create a second array that only includes the numbers with the 801 area code. (The area code is the first 3 numbers.)
*/

let phoneNums = ["801-766-9754", "801-545-5454", "435-666-1212", "801-796-8010", "435-555-9801", "801-009-0909", "435-222-8013", "801-777-6655"];

// Solution 2:
// filter() creates a new array with elements that fall under a given criteria from an existing array:
function matchingNumber(array) {
    return phoneNums.filter(number => /^801/.test(number));
};

module.exports = matchingNumber;
// console.log(matchingNumber(phoneNums));

// SOLUTION 1 with match
// let matchingNumber = [];
// phoneNums.forEach((number) => {
//     if (number.match(regExAreaCode)) {
//       matchingNumber.push(number);
//     }
// });
