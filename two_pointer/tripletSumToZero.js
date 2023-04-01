/*

Given an array of unsorted numbers, find all unique triplets in it 
that add up to zero.

Input: [-3, 0, 1, 2, -1, 1, -2]
Output: [[-3, 1, 2], [-2, 0, 2], [-2, 1, 1], [-1, 0, 1]]
Explanation: There are four unique triplets whose sum is equal to zero.


*/


// const uniqueSortedArr = (arr) => {
//   const sortedArray =  arr.sort((a, b) => a - b)
//   let uniqueSortedArr = [...new Set(sortedArray)]
//   return uniqueSortedArr
// }

function searchTriplets(arr) {

  const sortedArray = arr.sort((a, b) => a - b)
  let uniqueSortedArr = [...new Set(sortedArray)]
  const tripletsArr = []

  // main loop 
  for( let i = 0; i < arr.length; i++) {
    // params:  arr, targetSum, left, triplets
    searchPair( arr, -arr[i],  i + 1, tripletsArr )
  }

  return triplets 
}


function searchPair( arr, targetSum, left, triplets) {

}