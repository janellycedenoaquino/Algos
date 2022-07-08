/*  Q1: 

Given an array of sorted numbers and a target sum, find a pair in the array whose sum is equal to the given target

write a f(x) to return the indices of the two numbers (i.e the pair) such that they add up to the given target 

ex: [1, 2, 3, 4, 6], target= 6

    2      +        4        = 6 
(index 1)       (index 3)    = [1,3]

EXPECTED ANSWER: [1, 3] 


ex2: [2, 5, 9, 11], target= 11

    2      +        9        = 11
(index 0)       (index 2)    = [0,2]

EXPECTED ANSWER: [0, 2] 

*/
/* Brute force */

/* Using Two Pointer Technique
// NOT ALWAYS THE CASE but need a variable to store found values
// a start variable initialized at the beginning of the given array / list
// an end variable initialized to be the last index of the array / list
// a while loop where the start can't be larger than the end if so terminate
// inside the while loop if conditions that increment the start value if we are at a value smaller than our target value
// an if conditions that decrements the end value if we are at a value larger than our target value
 a condition that returns if we found our target unless need all occurences if so this condition will be to store the values found and we will return outside the loop
*/

// [1, 2, 3, 4, 6], target = 6;
const pair_with_target_sum = (array, target) => {
  let start = 0;
  let end = array.length - 1;

  while (start < end) {
    if (array[start] + array[end] === target) {
      console.log([start, end]);
      return [start, end];
    } else if (array[start] + array[end] < target) {
      start++;
    } else {
      end--;
    }
  }
};

//   pair_with_target_sum([1, 2, 3, 4, 6], 6);

/* const pair_with_target_sum_all_occurences = (array, target) => {
//   let occurances = [];
//   let start = 0;
//   let end = array.length - 1;

//   while (start < end) {
//     if (array[start] + array[end] === target) {
//       occurances.push([start, end]);
//       start++;
//       end--;
//     } else if (array[start] + array[end] < target) {
//       start++;
//     } else {
//       end--;
//     }
//   }

//   console.log("all occurences: ", occurances);
//   return occurances;
// };
 pair_with_target_sum_all_occurences([2, 3, 4, 5, 6, 7, 8, 9], 11);
*/

/*  Q2: 

Given an array of sorted numbers remove all duplicates from it you should not use any extra space; after removing duplicates in place
return the new length of the array.


ex: [2, 3, 3, 3, 6, 9, 9]

[2, 3, 6, 9]
  
EXPECTED ANSWER: 4


ex2: [2, 2, 2, 11]

    [2, 11] 

EXPECTED ANSWER: 2

*/
/* Brute force */

/* Using Two Pointer Technique
// NOT ALWAYS THE CASE but need a variable to store found values
// a start variable initialized at the beginning of the given array / list
// an end variable initialized to be the last index of the array / list
// a while loop where the start can't be larger than the end if so terminate
// inside the while loop if conditions that increment the start value if we are at a value smaller than our target value
// an if conditions that decrements the end value if we are at a value larger than our target value
 a condition that returns if we found our target unless need all occurences if so this condition will be to store the values found and we will return outside the loop
*/

// [1, 2, 3, 4, 6], target = 6;
const pair_with_target_summ = (array, target) => {
  let queue = {};
  let start = 0;
  let end = array.length - 1;

  while (start < end) {
    if (array[start] + array[end] === target) {
      console.log([start, end]);
      return [start, end];
    } else if (array[start] + array[end] < target) {
      start++;
    } else {
      end--;
    }
  }
};
