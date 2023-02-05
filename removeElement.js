/*
Similar to remove duplicats, only difference is we're looking for the
element, or 'key' instead of a duplicate.

*/


const removeElement = (arr, key) => {
  let nextNonKey = 0 // start at sub 0 instead of 1 in the duplicate example
  let next = 0
  while ( next < arr.length) {
    if( arr[i] !== key ) {
      arr[nextNonKey] = arr[next]
      nextNonKey++
    } 
  }
  return nextNonKey
}