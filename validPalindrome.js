/*
A phrase is a palindrome if, after converting all uppercase letters into 
lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

Pattern: 

Two pointers.

One pointer will start from the beginning of the string 
and the other from the end of the string.

The pointers move towards each other, skipping non-alphanumeric characters, 
until they meet in the middle or one of the pointers points to an 
non-alphanumeric character that is different from its counterpart at the other end.

If all characters are the same and both pointers meet in the middle, 
the string is a palindrome.

*/


const isPalindrome = (s) => {
  // Remove spaces, make lowercase, strip non alphanumeric characters 
  const processedStr = s.split(' ').join('').toLowerCase().replace(/\W/g, '')

  // convert to array 
  const strToArray = [...processedStr]

  // intialize two pointers
  let lptr = 0
  let rptr = strToArray.length - 1

  while( lptr < rptr ) {
    if( strToArray[lptr] !== strToArray[rptr] ) return false
    lptr++
    rptr--
  }
  
  return true;
};



// input.replace(/\W/g, '')

console.log( isPalindrome('A man, a plan, a canal, Panama!') )