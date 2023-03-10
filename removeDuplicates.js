/*
Pattern: Two Pointer. 

Given an array of sorted numbers, remove all duplicate number instances from 
it in-place, such that each element appears only once. 

The relative order of the elements should be kept the same and you should not 
use any extra space so that that the solution have a space complexity of O(1).

First pointer: iterating the array
Second pointer: placing the next non-duplicate number.

Algorithm: Iterate the array, whenever we see a non-duplicate number 
we move it next to the last non-duplicate number we've seen. 

*/ 

const removeDuplicates = (arr) => {
  // index of the next non-duplicate element
  let nextNonDup = 1;
  let n = 0;
  while (n < arr.length) {
    console.log(`arr: ${arr}, arr[n]: ${arr[n]}, arr[nextNonDup]: ${arr[nextNonDup]}`)
    // If one before nextNonDup is different than next, 
    // copy over next to nextNonDup, and increment nextNonDu 
    // otherwise just increment next 
    if (arr[nextNonDup - 1] !== arr[n]) {
      arr[nextNonDup] = arr[n];
      nextNonDup++;
    }
    n++;
  }
  return nextNonDup;
}

console.log(removeDuplicates([2, 3, 3, 3, 6, 9, 9]));