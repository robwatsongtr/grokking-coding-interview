/*
Given an integer array nums, return true if any value appears at least 
twice in the array, and return false if every element is distinct.


*/


function containsDuplicate(nums)  {
  const hashmap = {}
  for( val of nums ) {
    hashmap[val] = (hashmap[val] || 0) + 1
  }
  for( key in hashmap) {
    if( hashmap[key] > 1) return true
  }
  return false 
}


console.log( containsDuplicate([1,2,3,4,1,4]) )