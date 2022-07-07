/*  Q1: 

Given an array find the average of all contigous subarrays of size k in it.

we are expecting as input an array and a number K 
assume k is positive and the array is a valid array with a list of valid numbers both negative and positive 


ex: [1, 3, 2, 6, -1, 4, 1, 8, 2], K=5

(1+3+2+6+ (-1) ) === 11/5 = 2.2

(3+2+6+ (-1) + 4 ) === 14/5 = 2.8

(2+6+ (-1) + 4 + 1 ) === 12/5 = 2.4

(6+ (-1) + 4 + 1 + 8 ) === 18/5 = 3.6

((-1) + 4 + 1 + 8  + 2) === 14/5 = 2.8


EXPECTED ANSWER: [2.2, 2.8, 2.4, 3.6, 2.8] 

*/
// Using brute-force

//code

// Using Sliding Window Technique
//we need
// a way of storing the average we are calculating... expected answer needs to be in an array
// a window sum where we will be storing the sum of the iteration of k elements
// a window start that points to the front of the current window
// a window end that points to the end of the current window
// a loop that can iterate through array while saving the average of each subarray
// we need a condition that checks we have the amount of elements needed to make a sub array
// inside the condition we need to calculate and store the current average
// we need to subtract the first value of the current subarray
// we need to change the index window start is in order to move to a different subarray
//outside the loop we return the average we have stored in an array

const find_Averages_of_Subarrays = (array, k) => {
  const windowAverage = [];
  let windowSum = 0;
  let windowStart = 0;

  for (let windowEnd = 0; windowEnd <= array.length - 1; windowEnd++) {
    windowSum += array[windowEnd];

    if (windowEnd >= k - 1) {
      windowAverage.push(windowSum / k);
      windowSum -= array[windowStart];
      windowStart++;
    }
  }
  console.log("windowAverage is: ", windowAverage);
  return windowAverage;
};

// find_Averages_of_Subarrays([1, 3, 2, 6, -1, 4, 1, 8, 2], 5);

/*  Q2: 

Given an array of positive numbers and a positive number k, find the maximum sum of any contigous subarray of size k

we are expecting as input an array and a number K 
assume k is positive and the array is a valid array with a list of valid numbers both negative and positive 


ex: [2, 1, 5, 1, 3, 2], K=3

EXPECTED ANSWER: 9 

explanation: subarray with maximum sum is [5, 1, 3]

ex2: [2, 3, 4, 1, 5], K=2

EXPECTED ANSWER: 7

explanation: subarray with maximum sum is [3, 4]

*/
// Using brute-force

//code

// Using Sliding Window Technique
//we need
// a way of storing the sum we are calculating... expected answer needs to be in a number
// a window sum where we will be storing the sum of the iteration of k elements
// a window start that points to the front of the current window
// a window end that points to the end of the current window
// a loop that can iterate through array while saving the sum of each subarray
// we need a condition that checks we have the amount of elements needed to make a sub array
// inside the condition we need to calculate and store the current sum if larger than the previous calculated
// we need to subtract the first value of the current subarray
// we need to change the index window start is in order to move to a different subarray
//outside the loop we return the sum which if broke out the loop means it is the largest we were able to find

//[2, 3, 4, 1, 5], K=2
const max_subarry_sum_of_size_k = (array, k) => {
  let maxSum = -Infinity; //7
  let currentSum = 0; // 0
  let windowStart = 0; // 2

  for (let windowEnd = 0; windowEnd <= array.length - 1; windowEnd++) {
    currentSum += array[windowEnd]; //5

    //3          //1
    if (windowEnd >= k - 1) {
      maxSum = Math.max(maxSum, currentSum);
      currentSum -= array[windowStart];
      windowStart++;
    }
  }
  console.log("maxSum : ", maxSum);
  return maxSum;
};

// max_subarry_sum_of_size_k([2, 3, 4, 1, 5], 2);

/*  Q3: 

Given an array of positive numbers and a positive number S, find the length of the smallest contigous subarray whose sum is greater than or equal to S.
return 0, if no such subarray exists 

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
const smallest_subarray_with_given_sum = (array, S) => {
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

// smallest_subarray_with_given_sum([2, 1, 5, 2, 3, 2], 7);
// smallest_subarray_with_given_sum([2, 1, 5, 2, 8], 7);

