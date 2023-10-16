/***********************************************************************
Write a recursive function called `sumArray` that takes an array of integers
and returns the value of all the integers added together. Your array may
include a mix of positive and negative integers!

Examples:

sumArray([1, 2, 3]); //  6
sumArray([0, 1, -3]); //  -2
sumArray([1, 2, 3, 4, 5]); // 15
***********************************************************************/

// your code here
 // base case: If the array is empty, return 0
 if (array.length === 0) {
  return 0;
} else {
  // recursive case: Sum the last element with the sum of the rest of the array
  return array[array.length - 1] + sumArray(array.slice(0, array.length - 1));
}


/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = sumArray;
} catch (e) {
  module.exports = null;
}
