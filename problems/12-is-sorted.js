/***********************************************************************
Write a recursive solution called `isSorted` to determine if the input array
is sorted in ascending order.

Examples:

isSorted([1, 2, 3, 4, 5]); // true
isSorted([1, 2, 4, 3, 5]); // false
isSorted([2, 4, 6, 7, 8]); // true
isSorted([5, 4, 3, 2, 1]); // false
***********************************************************************/

// your code here
let isSorted = function (array) {
  if (array.length <= 1) {
    // Base case: An array with 0 or 1 element is always considered sorted.
    return true;
  }

  if (array[0] > array[1]) {
    // If the current element is greater than the next element, the array is not sorted.
    return false;
  }

  // Recursively check the rest of the array.
  return isSorted(array.slice(1));
}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = isSorted;
} catch (e) {
  module.exports = null;
}
