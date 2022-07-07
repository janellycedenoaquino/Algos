/*  Q1: 

Given a string find the length of the longest substring in it with no more than K distinct charcters.

assume input will always be string

ex: "araaci", K=2

EXPECTED ANSWER: 4

explanation: substring with no more than 2 different characters is "araa".



ex2: "araaci",  K=1

EXPECTED ANSWER: 2

explanation: substring with no more than 2 different characters is "aa".



ex3:  "cbbebi",  K=3

EXPECTED ANSWER: 5

explanation:   substring with no more than 2 different characters is "cbbeb" & "bbebi".

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

const longest_substring_with_k_distinct = (str, k) => {
  let charFrequency = {};
  let maxLength = 0;
  let windowStart = 0;

  for (let windowEnd = 0; windowEnd <= str.length - 1; windowEnd++) {
    const currChar = str[windowEnd];

    if (!currChar in charFrequency) {
      charFrequency[currChar] = 0;
    }

    charFrequency[currChar] += 1;

    while (Object.keys(charFrequency).length > k) {
      const frontChar = str[windowStart];

      charFrequency[frontChar] -= 1;
      if (charFrequency[frontChar] === 0) {
        delete charFrequency[frontChar];
      }
      windowStart += 1;
    }
    console.log("maxLength ", maxLength);
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }

  console.log("maxLength: ", maxLength);
  return maxLength;
};

longest_substring_with_k_distinct("araaci", 2);
longest_substring_with_k_distinct("araaci", 1);
