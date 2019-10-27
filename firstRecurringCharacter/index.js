//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

const input = [2,5,5,2,3,5,1,2,4];

function firstRecurringCharacter(input) {
  let map = new Set(); // O(1)
  for(val of input) { // O(n)
    if (map.has(val)) { // O(1)
      return val; // O(1)
    }
    map.add(val); // O(1)
  }
  return undefined;
}

console.log(firstRecurringCharacter(input));

//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2