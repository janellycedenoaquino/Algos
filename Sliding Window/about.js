/* This patter is a good approach for when we are asked to find or calculate something
among all the contiguous subarrays(or sublist) of a given size. EXAMPLE PROBLEMS BELOW
SUITED FOR: 
-   things we iterate over sequentially
-   contiguous sequence of elements
-   strings, arrays, linked list

LOOKING FOR QUESTIONS THAT ASK US TO FIND THE: 
-   min, max, shortest, longest, contains following char...
-   maybe we need to calculate something ex: max sum of contigous sub array
 
QUESTION VARIANT:  

Fixed length:
-   max sum subarray of size K


Dynamic variant: 
-   smallest sum that is greater or equal to some value S


Dynamic variant with auxillary data structure:
-   longest substring with no more than k distinct characters


String permutation:
-   trying to find existing of input string against another string


commonalities:
-   Everything grouped sequentially
-   words: Longest  /   Smallest    /   Containes   / maximize  /   minimize


EXAMPLE QUESTIONS:

-   GIVEN AN ARRAY, FIND THE AVERAGE OF ALL CONTIGOUS SUB ARRAYS OF SIZE K IN IT.

-   GIVEN AN ARRAY OF POSITIVE NUMBERS AND A POSITIVE NUMBER K FIND THE MAXIMUM SUM 
OF ANY CONTIGOUS SUBARRAY OF SIZE K

-   GIVEN AN ARRAY OF POSITIVE NUMBERS AND A POSITIVE NUMBER S FIND THE LENGTH 
OF THE SMALLEST CONTIGOUS SUBARRAY WHOSE SUM IS GREATER THAN OR EQUAL TO S. 
RETURN 0 IF NO SUCH SUBARRAY EXISTS

-   GIVEN A STRING, FIND THE LENGTH OF THE LONGEST SUBSTRING IN IT WITH NO MORE THAN K DISTINCT CHARACTERS.


*/

/* STRUCTURE OF ALGORITHM */
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

function Structure_of_Sliding_Window(K, array) {
  let maxSum = -Infinity; // other examples:  result = [], maxSum = -infinity, minimumLength = infinity, smallestNum = infinity etc...
  let windowSum = 0; //used to calculate the sum or used as a way to keep track of current subarray
  let windowStart = 0; //the first index of the subarray

  for (windowEnd = 0; windowEnd < array.length; windowEnd++) {
    windowSum += arr[windowEnd]; // adding new item until we reach k limit

    if (windowEnd >= K - 1) {
      // if we reach a number <= k we will reach this condition delete the first item and calculate the next
      maxSum = Math.max(maxSum, windowSum);
      windowSum -= arr[windowStart];
      windowStart += 1;
    }
  }
  return maxSum; // when we reach here it'll mean our
}
