/*
Given an array of sorted numbers and a target sum, find a pair in the array whose sum 
is equal to the given target.

Write a function to return the indices of the two numbers (i.e. the pair) such 
that they add up to the given target.
*/

// works for unsorted or sorted, O(n2)
const pairTargetNaive = (arr, target) => {
  for(let i = 0; i < arr.length; i++) {
    for(let j = 1; j < arr.length; j++) {
      let sum = arr[i] + arr[j]
      if(sum === target) return [i, j]
    }
  }
  return null 
}

console.log( pairTargetNaive( [2, 4, 9, 11, 16, 20], 31) )


// only works on sorted, O(n) 
const pairTargetBinSearch = (arr, target) => {
  let leftPtr = 0
  let rightPtr = arr.length - 1
  
  while ( leftPtr < rightPtr ) {
    currentSum = arr[leftPtr] + arr[rightPtr] 
    if(currentSum < target) leftPtr++
    if(currentSum > target) rightPtr--
    if(currentSum === target) return [leftPtr, rightPtr]
  }
  return [-1,-1]
}

console.log( pairTargetBinSearch( [2, 4, 9, 11, 16, 20], 31) )