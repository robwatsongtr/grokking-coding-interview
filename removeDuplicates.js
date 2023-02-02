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
  let nextNonDuplicate = 1;

  let i = 0;
  while (i < arr.length) {
    if (arr[nextNonDuplicate - 1] !== arr[i]) {
      arr[nextNonDuplicate] = arr[i];
      nextNonDuplicate += 1;
    }
    i += 1;
  }

  return nextNonDuplicate;
}

console.log(removeDuplicates([2, 3, 3, 3, 6, 9, 9]));