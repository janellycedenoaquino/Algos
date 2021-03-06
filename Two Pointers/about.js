/* often useful when searching pairs in a sorted array or linked list; 
for example, when you have to compare each element of an array to its other elements.

SUITED FOR: 
-   sorted arrays (or Linked Lists) and need to find a set of elements that fulfill certain constraints
-   The set of elements in the array is a pair, a triplet, or even a subarray

LOOKING FOR QUESTIONS THAT ASK US TO FIND THE: 
-   pair, a triplet, or even a subarray NOT IN CONTIGOUS manner
-   a problem you would use two for loops for to keep track of a sum or multiple values you need to compare

QUESTION VARIANT:  
-   One slow-runner and the other fast-runner.
-   One pointer starts from the beginning while the other pointer starts from the end.


EXAMPLE QUESTIONS:
-   Given an array of sorted and a target sum find a pair in the array whose sum is equal to the given target

Remove Duplicates from Sorted Array
Two Sum II - Input array is sorted
Reverse Words in a String II
Rotate Array
Valid Palindrome
Container With Most Water
Product of Array Except Self


*/

/* STRUCTURE OF ALGORITHM */

// Using Two Pointer Technique
// NOT ALWAYS THE CASE but need a variable to store found values
// a start variable initialized at the beginning of the given array / list
// an end variable initialized to be the last index of the array / list
// a while loop where the start can't be larger than the end if so terminate
// inside the while loop if conditions that increment the start value if we are at a value smaller than our target value
// an if conditions that decrements the end value if we are at a value larger than our target value
// a condition that returns if we found our target unless need all occurences if so this condition will be to store the values found and we will return outside the loop

function Structure_of_Two_Pointer(array, k) {
  let occurances = []; // other examples: sum = 0,  or may no be needed at all...
  let start = 0;
  let end = array.length - 1;

  while (start < end) {
    if (array[start] + array[end] === k) {
      //return 1st occurence
      //   return "found first occurence! ", [array[start], array[end]];

      // return all found pairs
      console.log("found pair! ", [array[start], array[end]]);
      occurances.push([array[start], array[end]]);
      start++;
      end--;
    } else if (array[start] + array[end] < k) {
      start++;
    } else {
      end--;
    }
  }
  console.log("occurances: ", occurances);
  return occurances;
}

Structure_of_Two_Pointer([1, 2, 3, 4, 5, 6, 7, 8, 9], 11);
