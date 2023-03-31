/*

Given an array of strings words and two different strings that 
ALREADY EXIST in the array word1 and word2, return the shortest 
distance between these two words in the list.

Pattern: Two Pointers

Algorithm: 

1 Initialize two variables position1 and position2 to store the 
  positions of word1 and word2 in the words list, respectively. 
  Initialize these variables to -1 which means that the words haven't been found yet

2 Initialize a variable shortestDistance with the length of the words list as 
  the initial value. This value will be updated later in the loop as the shortest 
  distance is found.

3 Loop through the words list and for each word, check if it is word1 or word2. 
     If it is word1, update position1 with the current index. 
     If it is word2, update position2 with the current index.

4 If both position1 and position2 have been updated, that means both word1 and 
  word2 have been found in the words list. 
    In this case, update the shortestDistance 
    with the absolute difference of the positions of word1 and word2.

5. Repeat steps 3 and 4 until the end of the words list is reached.

6. Return the final value of shortestDistance as the result

Use of the two pointers:

In this case, both pointer store the existence state and the poisiton of word 1
or word 2.

*/


class Solution {
  shortestDistance(words, word1, word2) {
    let word1pos = -1 // -1 is not found state
    let word2pos = -1 // -1 is not found state
    let shortestDist = words.length // starting shortest dist is full length of words arr

    for( let i = 0; i < words.length; i++ ) {
      // check each position to see if either word 1 or word 2
      if( words[i] === word1) { 
        word1pos = i; 
      } else if ( words[i] === word2 ) { 
        word2pos = i; 
      }
 
      // if both words are found ... 
      if( word1pos !== -1 && word2pos !== -1 ) {
        // Math min will always choose the smaller value, hence the shortest distance
        shortestDist = Math.min( shortestDist, Math.abs(word1pos - word2pos) )
      } 
    }

    return shortestDist
  }
}

const solution = new Solution();

// Test case 1
const words1 = ["the", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"];
const word11 = "fox";
const word21 = "dog";
const expectedOutput1 = 5;
const actualOutput1 = solution.shortestDistance(words1, word11, word21);
console.log("Test case 1:", expectedOutput1 === actualOutput1, actualOutput1);

// Test case 2
const words2 = ["a", "b", "c", "d", "a", "b"];
const word12 = "a";
const word22 = "b";
const expectedOutput2 = 1;
const actualOutput2 = solution.shortestDistance(words2, word12, word22);
console.log("Test case 2:", expectedOutput2 === actualOutput2, actualOutput2);

// Test case 3
const words3 = ["a", "c", "d", "b", "a"];
const word13 = "a";
const word23 = "b";
const expectedOutput3 = 1;
const actualOutput3 = solution.shortestDistance(words3, word13, word23);
console.log("Test case 3:", expectedOutput3 === actualOutput3, actualOutput3);

// Test case 4
const words4 = ["a", "b", "c", "d", "e"];
const word14 = "a";
const word24 = "e";
const expectedOutput4 = 4;
const actualOutput4 = solution.shortestDistance(words4, word14, word24);
console.log("Test case 4:", expectedOutput4 === actualOutput4, actualOutput4);
