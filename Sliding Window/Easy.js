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
// we need to add the next value in order to move to a different subarray
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

find_Averages_of_Subarrays([1, 3, 2, 6, -1, 4, 1, 8, 2], 5);
