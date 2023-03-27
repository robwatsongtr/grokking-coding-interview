// Take an input string, return what letters are duplicated and how many of them

/*
Algo

1. Remove spaces from input string and make lowercase 
2. Convert string to array
3. Create a hash map that counts how many of each letter of the alphabet are in the string
4. Return the letters that are greater than count of 1 and how many of them there are 

*/

const countAndReturnDuplicates = (str) => {

  // Remove spaces from input string and make lowercase
  const noSpaceStr = str.split(' ').join('').toLowerCase()

  // Convert string to array
  const strToArray = [...noSpaceStr]

  // Create a hash map that counts how many of each letter of the alphabet are in the string 
  let countMap = {}
  for( let letter of strToArray) {
    countMap[letter] = (countMap[letter] || 0) + 1
  }

  console.log(countMap)

  // Return the letters that are greater than count of 1 and how many of them there are
  // by deleting all the letters that only appear once 
  for( let key in countMap ) {
    if( countMap[key] === 1) {
      delete countMap[key]
    }
  }

  return countMap
}


console.log( countAndReturnDuplicates('ab cd ee fa g') )




