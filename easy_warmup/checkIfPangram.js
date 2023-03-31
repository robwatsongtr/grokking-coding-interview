/*

A pangram is a sentence where every letter of the English alphabet appears at least once.

Given a string sentence containing English letters (lower or upper-case), 
return true if sentence is a pangram, or false otherwise

Algo:

1. Remove spaces from input string and make lowercase 
2. Convert string to array
3. remove duplicates using set 



*/



class Solution {
  
  checkIfPangram(sentence) {
    // Remove spaces from input string and make lowercase 
    const noSpaceStr = sentence.split(' ').join('').toLowerCase()

    // Convert string to array
    const strToArray = [...noSpaceStr]

    // remove duplicates using set 
    const uniqueChars = [...new Set(strToArray)]

    // will store only alphabetic characters 
    let onlyAlpha = []

    // loop through uniqueChars array and push into new array only alphabetic characters
    for( let i = 0; i < uniqueChars.length; i++ ) {
      if( uniqueChars[i].match(/[a-z]/i) ) {
        onlyAlpha.push(uniqueChars[i])  
      }
    }

    // return true if all 26 charaters of alphabet are prestent 
    if(onlyAlpha.length === 26) return true 

    return false;
  }

}


const solution = new Solution()

console.log( solution.checkIfPangram(' bcdefghijklmnopq rstuvwxyzBCDEFGHIJKLMNOPQRSTUVWXYZs '))