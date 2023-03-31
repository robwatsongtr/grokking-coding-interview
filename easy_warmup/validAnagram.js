/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or 
phrase, typically using all the original letters exactly once.

Pattern: 

Frequency counter / hashmap


*/

var Solution = function () {

  this.isAnagram = function (s, t) {
   
    if(s.length != t.length) return false

    let sCounter = {}
    let tCounter = {}

    // FOR OF to make counters
    for( let char of s) {
      sCounter[char] = (sCounter[char] || 0) + 1
    }

    for( let char of t) {
      tCounter[char] = (tCounter[char] || 0) + 1
    }

    // loop to see if same keys in both hashmaps 
    // FOR IN to loop through objects/hashmap
    for( let key in sCounter ){
      if( tCounter[key] !== sCounter[key] ) return false; 
    }

    return true;
  }

};




var sol = new Solution();

// Test case 1
var s1 = "listen";
var t1 = "silent";
console.log(sol.isAnagram(s1, t1)); // Expected output: true

// Test case 2
var s2 = "hello";
var t2 = "world";
console.log(sol.isAnagram(s2, t2)); // Expected output: false

// Test case 3
var s3 = "anagram";
var t3 = "nagaram";
console.log(sol.isAnagram(s3, t3)); // Expected output: true

// Test case 4
var s4 = "rat";
var t4 = "car";
console.log(sol.isAnagram(s4, t4)); // Expected output: false

// Test case 5
var s5 = "";
var t5 = "";
console.log(sol.isAnagram(s5, t5)); // Expected output: true