// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// SOLUTION 1:
// function chunk(array, size) {
//     let anotherArray = new Array();
//     let chunked = [];
//     let count = 0;

//     for (var i = 0; i < array.length; i++) {
//         if (((i + 1) % size === 0) || (i === (array.length - 1))) {
//             chunked.push(array[i]);
//             anotherArray[count] = chunked;
//             chunked = [];
//             count++;
//         } else {
//             chunked.push(array[i]);
//         }
//     }

//     return anotherArray;
// }.


// SOLUTION 2
// function chunk(array, size) {
//     const chunked = [];

//     for (let element of array) {
//         const last = chunked[chunked.length - 1];
//         if (!last || last.length === size) {
//             chunked.push([element]);
//         } else {
//             last.push(element);
//         }
//     }
//     return chunked;
// };


// FINAL SOLUTION 3:
function chunk(array, size) {
    let chunked = []
    let index = 0;

    while (index < array.length) {
        chunked.push(array.slice(index, size + index))
        index = size + index
    }

    return chunked
}

module.exports = chunk;
