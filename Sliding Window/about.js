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

function Structure_of_Sliding_Window(K, array) {
  const result = []; // other examples maxSum = -infinity, minimumLength = -infinity, smallestNum = infinity etc...
  let windowSum = 0;
  let windowStart = 0;

  for (windowEnd = 0; windowEnd < array.length; windowEnd++) {
    windowSum += arr[windowEnd];

    if (windowEnd >= K - 1) {
      maxSum = Math.max(maxSum, windowSum);
      windowSum -= arr[windowStart];
      windowStart += 1;
    }
  }
  return maxSum;
}
