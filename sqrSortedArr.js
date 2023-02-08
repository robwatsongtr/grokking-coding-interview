/*
Given a sorted array, create a new array containing squares of all the
numbers of the input array in the sorted order.

The catch is that there can be negative numbers.

Algorithm: 

Find the first index of the first non-negative number.

Define two pointers to iterate the array

  First Pointer will move forward to iterate the non negative numbers
  Second Poitner will move backwards to iterate the negative numbers

  At every step/iteration, the square of the first pointer will be
  compared to the square of the second number, and whichever number is 
  bigger will be added to the output array. 


*/

const squareSortedArr = (arr) => {
  let outputArray = []
  let firstNonNegNumIdx = 0

  // iterate to find the index of the first non negative number 
  for( let i = 0; i < arr.length; i++ ) {
    if( arr[i] < 0 ) firstNonNegNumIdx++
  }

  // define two pointers starting at the index of the first non negative number
  let leftPtr = firstNonNegNumIdx
  let rightPtr = firstNonNegNumIdx

  console.log(`leftPtr ${leftPtr}`, `rightPtr ${rightPtr}`)

  while( rightPtr !== arr.length && leftPtr !== 0) {
    let sqrLeftPtr = arr[leftPtr] * arr[leftPtr]
    let sqrRightPtr = arr[rightPtr] * arr[rightPtr]

    outputArray.push(Math.max(sqrLeftPtr,sqrRightPtr))

    rightPtr++
    leftPtr--
  }

  return outputArray

} 

console.log(squareSortedArr([-2, -1, 0, 2, 3]))