/*  Q1: 

Given a string find the length of the longest substring in it with no more than K distinct charcters.

we are expecting as input an array and a number K 
assume k is positive and the array is a valid array with a list of valid numbers both negative and positive 


ex: [2, 1, 5, 2, 3, 2], S=7

EXPECTED ANSWER: 2

explanation: subarray with maximum sum greater than or equal to 7 is [5, 2]

ex2: [2, 1, 5, 2, 8], S=7

EXPECTED ANSWER: 1

explanation: subarray with maximum sum greater than or equal to 7 is [8]

ex3: [3, 4, 1, 1, 6], S=8

EXPECTED ANSWER: 3

explanation: subarray with maximum sum greater than or equal to 8 is [3, 4, 1] OR [1, 1, 6]

*/
// Using brute-force

//code

// Using Sliding Window Technique
//we need
// a way of storing the minimum length we have found so far... expected answer needs to be in a number
// a window sum where we will be storing the sum of the iteration of S elements
// a window start that points to the front of the current window
// a window end that points to the end of the current window
// a loop that can iterate through array while saving the sum of each subarray
// we need another loop with a condition that checks our current sum is equal to or larger than S
// inside the condition we need to calculate and store the smallest sub array we've encountered
// we need to subtract the first value of the current subarray
// we need to change the index window start is in order to move to a different subarray
//outside that inner loop we need an if condition to check if the smallest value is still that initial value we had if so return 0 this means we didn't find anything that equaled or was larger than S
//outside the loop we return the sum which if broke out the loop means it is the largest we were able to find

//[2, 3, 4, 1, 5], K=2
const smallest_subarray_with_given_su = (array, S) => {
    let minimumLength = Infinity;
    let currentSum = 0;
    let windowStart = 0;
  
    for (let windowEnd = 0; windowEnd <= array.length - 1; windowEnd++) {
      currentSum += array[windowEnd];
  
      while (currentSum >= S) {
        minimumLength = Math.min(minimumLength, windowEnd - windowStart + 1);
        currentSum -= array[windowStart];
        windowStart += 1;
      }
    }
  
    console.log("minimum Length : ", minimumLength);
    if (minimumLength === Infinity) {
      return 0;
    }
    return minimumLength;
  };
  
  smallest_subarray_with_given_sum([2, 1, 5, 2, 3, 2], 7);
  smallest_subarray_with_given_sum([2, 1, 5, 2, 8], 7);