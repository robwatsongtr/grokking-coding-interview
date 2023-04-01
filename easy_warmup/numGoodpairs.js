/*
Number of Good Pairs 

Problem Statement

Given an array of integers nums, return the number of good pairs.
A pair (i, j) is called good if nums[i] == nums[j] and i < j.

In other words, the pair must be 'listed' as  ( lowerIdx, higherIdx )

Pattern:

Frequency counter (hash map)

*/

function numGoodPairs(nums) {
  let pairCount = 0;
  let hashmap = {}

  for( let val of nums) { 

    hashmap[val] = (hashmap[val] || 0) + 1

    // Every new occurrence of a number can be paired with every previous occurrence
    // so if a number has already appeared 'p' times, we will have 'p-1' new pairs
    pairCount += hashmap[val] - 1
    
    console.log(`val ${val}, ${JSON.stringify(hashmap)}  pairCount ${pairCount}`)
  }

  return [hashmap, pairCount];
}

console.log( numGoodPairs([1, 2, 3, 1, 1, 3]))

// let nums1 = [1, 2, 3, 1, 1, 3];
// let result1 = numGoodPairs(nums1);
// console.log(`Result 1: ${result1} (Expected: 4)`);

// let nums2 = [1, 1, 1, 1];
// let result2 = numGoodPairs(nums2);
// console.log(`Result 2: ${result2} (Expected: 6)`);

// let nums3 = [1, 2, 3];
// let result3 = numGoodPairs(nums3);
// console.log(`Result 3: ${result3} (Expected: 0)`);