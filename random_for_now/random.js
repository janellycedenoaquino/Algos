/*Given a String S, reverse the string without reversing its individual words. Words are separated by dots.

Example 1:

Input:
S = i.like.this.program.very.much
Output: much.very.program.this.like.i
Explanation: After reversing the whole
string(not individual words), the input
string becomes
much.very.program.this.like.i
Example 2:

Input:
S = pqr.mno
Output: mno.pqr
Explanation: After reversing the whole
string , the input string becomes
mno.pqr

Your Task:
You dont need to read input or print anything. 
Complete the function reverseWords() which takes string S as input parameter and returns a string containing the words in reversed order. 
Each word in the returning string should also be separated by '.' 


Expected Time Complexity: O(|S|)
Expected Auxiliary Space: O(|S|)


Constraints:
1 <= |S| <= 2000 

//no input other than strings
//using  built in methods
//no manipulations w methods



check for the input 



*/

// const reverseString1 = (s) => {
//   return s.split(".").reverse().join(".");
// };

const reverseString = (s) => {
  let reversed = [];
  let finalString = "";
  let pointerOne = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === ".") {
      reversed.push(s.substring(pointerOne, i));
      pointerOne = i + 1;
    }
  }

  for (let i = reversed.length - 1; i >= 0; i--) {
    if (i === 0) {
      finalString += reversed[i];
    } else {
      finalString += reversed[i] + ".";
    }
  }
  console.log(finalString);
  return finalString;
};

reverseString("i.like.this.program.very.much");


//___________________________________________________________________________________________________________________________________________________

/*Given a array of N strings, find the longest common prefix among all strings present in the array.

Example 1:

Input:
N = 4
arr[] = {geeksforgeeks, geeks, geek, geezer}
Output: gee
Explanation: "gee" is the longest common
prefix in all the given strings.
Example 2:

Input: 
N = 2
arr[] = {hello, world}
Output: -1
Explanation: There's no common prefix
in the given strings.

Your Task:
You don't need to read input or print anything. Your task is to complete the function longestCommonPrefix() which takes the string array arr[] and its size N as inputs and returns the longest common prefix common in all the strings in the array. If there's no prefix common in all the strings, return "-1".


Expected Time Complexity: O(N*max(|arri|)).
Expected Auxiliary Space: O(max(|arri|)) for result.


Constraints:
1 ≤ N ≤ 103
1 ≤ |arri| ≤ 103

*/






const  First_Unique_Character_in_a_String = (s) =>{
    if (s.length <= 1) return -1;

    for( let i = 0; i < s.length; i++) {
       const letter = s[i]

       if(s.indexOf(letter) === s.lastIndexOf(letter)) return i
   }

   return -1

};

console.log(First_Unique_Character_in_a_String("aabb"))


console.log(First_Unique_Character_in_a_String("leetcode"))


console.log(First_Unique_Character_in_a_String("loveleetcode"))





