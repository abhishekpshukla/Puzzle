// flatten([1,2,3, [1,2, [3,2,1]], 8, [9,10, [11,12]]])
// Expected: [ 1, 2, 3, 1, 2, 3, 2, 1, 8, 9, 10, 11, 12 ]
// Question: Flatten deep nested array in single array
// Don't use Array.flat(Infinity)


const flattenValue = ((array) => {
    let result = [];
    const flatten = (array) => {
      array.forEach(a => (Array.isArray(a)) ? flatten(a) : result.push(a));
      return result
    }
    return flatten(array);
  })([1,2,3, [1,2, [3,2,1]], 8, [9,10, [11,12]]]);
  
  console.log(flattenValue);