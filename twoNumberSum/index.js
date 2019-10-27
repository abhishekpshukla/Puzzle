// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

const nums = [2, 7, 11, 15];
const target = 13;


// Solution 1: With O(n) notaion
function twoSumSolutionOne(number, target) {
  for(let i=0; i < number.length; i++) {
    for (let j=i+1; j < number.length; j++) {
      if ((number[i] + number[j]) === target) {
        return [i, j];
      }
    }
  }
  return false;
};
// O(n*n) nested loop
// 
// console.log(twoSumSolutionOne(nums, target));


// Given nums = [2, 7, 11, 15], target = 18,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

// 16
// 11

const numbers = [2, 7, 11, 15];
const tar = 13;

// Solution 201
// This solution I avoided nested loop...
function twoSumSolutionTwo(numbers, tar) {
  let newObj = {}; // O(1)
  for(let i=0; i < numbers.length; i++) { //O(n)
    if (newObj.hasOwnProperty(numbers[i])) {  //O(1)
      return [newObj[numbers[i]], i]; //O(1)
    }
    newObj[target - numbers[i]] = i;    // O(1)
  }
  return false;
};
// O(n*n) nested loop
// const nums = [2, 7, 11, 15];
// const target = 13;

console.log(twoSumSolutionTwo(numbers, tar));
