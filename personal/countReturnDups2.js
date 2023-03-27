// /*
//  Count the number of Duplicates
//  Write a function that will return the count of distinct case-insensitive 
//  alphabetic characters and numeric digits that occur more than once in the 
//  input string. The input string can be assumed to contain only alphabets 
//  (both uppercase and lowercase) and numeric digits
//  Example
//  "abcde" -> 0 # no characters repeats more than once
//  "aabbcde" -> 2 # 'a' and 'b'
//  "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
//  "indivisibility" -> 1 # 'i' occurs six times
//  "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
//  "aA11" -> 2 # 'a' and '1'
//  "ABBA" -> 2 # 'A' and 'B' each occur twice
// */


function duplicateCount(string){
  const countMap = {}

  // remove spaces and make lowercase
  const noSpaceStr = string.split(' ').join('').toLowerCase()

  // convert string to array
  const strToArray = [...noSpaceStr]

  // frequency map FOR OF for ARRAY
  for( let letter of strToArray) {
    countMap[letter] = ( countMap[letter] || 0) + 1
  }
  
  // total up the dups
  let dupChars = 0 
  for( let key in countMap) {
    if( countMap[key] > 1) {
      dupChars++
    }
  }

  return dupChars
}

console.log( duplicateCount("aabbcde") ) // 2
console.log( duplicateCount("aabBcde") ) // 2 
console.log(duplicateCount("indivisibility")) // 1
console.log( duplicateCount("Indivisibilities") ) // 2
console.log( duplicateCount("aA11") ) // 2
console.log( duplicateCount("ABBA") ) // 2
