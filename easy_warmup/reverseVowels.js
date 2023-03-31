/*

Given a string s, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both 
lower and upper cases, more than once.

The algorithm will start by initializing two pointers, "left" and "right" 
to the start and end of the string, respectively. The algorithm then uses 
these two pointers to traverse the string and skip over any non-vowel characters. 
When two vowels are found, the algorithm swaps them and updates the pointers. 
The process continues until the two pointers cross over each other.

Basically an 'in place swap'

Pattern: Two Pointers

*/

class Solution {

  reverseVowels(s) {
    // lookup array for vowels
    const vowelArr = [ 'a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U' ]

    // convert string to array
    const strToArray = [...s] 

    // define two pointers 
    let left = 0
    let right = strToArray.length - 1

    while( left < right ) {

      // increment the left pointer until a vowel is found
      while( left < right && (!vowelArr.includes(strToArray[left]) ) ) {
        left++
      }

      // decrement the right pointer until a vowel is found
      while( left < right && (!vowelArr.includes(strToArray[right])) ) {
        right--
      }

      // swap values of left and right using destructuring  
      [ strToArray[left], strToArray[right]] = [strToArray[right], strToArray[left] ]

      // keep moving pointers towards the middle  
      left++
      right--
    }

    return strToArray.join('')
  }
}


const sol = new Solution()

console.log( sol.reverseVowels('hello') )

// test cases
const solution = new Solution();

const s1 = "hello";
const expected_output1 = "holle";
const actual_output1 = solution.reverseVowels(s1);
console.log("Test Case 1: ", expected_output1 === actual_output1);

const s2 = "DesignGUrus";
const expected_output2 = "DusUgnGires";
const actual_output2 = solution.reverseVowels(s2);
console.log("Test Case 2: ", expected_output2 === actual_output2);

const s3 = "AEIOU";
const expected_output3 = "UOIEA";
const actual_output3 = solution.reverseVowels(s3);
console.log("Test Case 3: ", expected_output3 === actual_output3);

const s4 = "aA";
const expected_output4 = "Aa";
const actual_output4 = solution.reverseVowels(s4);
console.log("Test Case 4: ", expected_output4 === actual_output4);

const s5 = "";
const expected_output5 = "";
const actual_output5 = solution.reverseVowels(s5);
console.log("Test Case 5: ", expected_output5 === actual_output5);
