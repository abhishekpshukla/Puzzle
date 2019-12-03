// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    let newStr = str[0].toUpperCase();

    for (let char = 1; char < str.length; char++) {
        newStr += (str[char-1] === ' ') ? str[char].toUpperCase() : str[char];
    }
    return newStr;
}


// Solution 1: [Working]
// function capitalize(str) {
    
//     const abc = str.split(" ").map((word) => {
//         return word.charAt(0).toUpperCase() + word.substr(1);
//     })
//     return abc.join(' ');
// }
module.exports = capitalize;
