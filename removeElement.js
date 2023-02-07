/*
Similar to remove duplicats, only difference is we're looking for the
element, or 'key' instead of a duplicate.

*/


const removeElement = (arr, key) => {
  let nextNonKey = 0 // start at sub 0 instead of 1 in the duplicate example
  for( let i = 0; i < arr.length; i++) {
    console.log(arr)
    if(arr[i] !== key) {
      arr[nextNonKey] = arr[i] // copy over i to nextNonKey
      nextNonKey++
    }
  }
  return nextNonKey
}

console.log(removeElement([3, 2, 3, 6, 3, 10, 9, 3], 3));