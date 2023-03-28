/*
Given a non-negative integer x, return the square root of x rounded down to 
the nearest integer. The returned integer should be non-negative as well.

You must not use any built-in exponent function or operator.

Approach: Binary Seacrh 

The reason behind using binary search is that the square of any number ‘N’
increases if we increase the value of ‘N’ and decreases if we decrease the value of ‘N’.
In other words square root is a monotonic function. 

1. start with two pointers, left and right, pointing to 
  the lover and upper bounds of the range in which the square root 
  of the input number is expected to be.
    -- lower bound will be 1, upper bound will be the input number 

2. Find the pivot of the range and calculate the square of the pivot

3. If the result is > than input, move the right pointer down by one
  If the result is < than input, move the left pointer up by one

3. Repeat until the result is = to, || left pointer is > than right pointer,
  in which case return the right poitner, which is the square root floor (remove decimal)

*/


var mySqrt = function(x) {
  if ( x < 2 ) return x // base case if x is 0 or 1
  
  let lptr = 2 // can't be less than two as shown above 
  let rptr = Math.floor( x / 2 ) 
  let mid = Math.floor( (lptr + rptr) / 2 )

  while( lptr <= rptr ) {
   let sqrt = mid * mid // lets start with the square of the pivot/midpoint

   if( sqrt > x ) rptr = mid -1

   else if ( sqrt < x ) lptr = mid + 1

   else return mid 

  }

  return right 

}