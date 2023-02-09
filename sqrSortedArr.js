/*
Given a sorted array, create a new array containing squares of all the
numbers of the input array in the sorted order.

The catch is that there can be negative numbers.

Algorithm: 

Use two pointers starting at both ends of the array.

At each iteration, whichever pointer gives the bigger square,
we will add that pointer to the result array, then move to
the next/previous poitner.



*/

const squareSortedArr = (arr) => {
  let resultArray = []
  let lptr = 0
  let rptr = arr.length - 1

  while( lptr <= rptr) {
    console.log(resultArray)
    let leftSqr = arr[lptr] * arr[lptr]
    let rightSqr = arr[rptr] * arr[rptr]

    if( Math.max(leftSqr) > Math.max(rightSqr) ) {
      resultArray.unshift(leftSqr) 
      lptr++
    } else {
      resultArray.unshift(rightSqr)
      rptr--
    }

  }
 
  return resultArray

} 

console.log(squareSortedArr([-2, -1, 0, 2, 3]))