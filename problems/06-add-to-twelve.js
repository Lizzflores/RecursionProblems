/***********************************************************************
Write a recursive function called `addToTwelve` that will return true if there
are two adjacent numbers in the input array that can sum up to 12. Otherwise,
return false.

Examples:

addToTwelve([1, 3, 4, 7, 5]); // true
addToTwelve([1, 3, 4, 7, 6]); // false
addToTwelve([1, 11, 4, 7, 6]); // true
addToTwelve([1, 12, 4, 7, 6]); // false
addToTwelve([1]); // false
***********************************************************************/

// your code here
//if the adjacent numbers sum up 12 return true
//return false

let addToTwelve = function(array){
   // Base case: if the array has less than 2 elements, return false
   if (array.length < 2) {
    return false;
  }

  // Check if the sum of the first two elements is equal to 12
  if (array[0] + array[1] === 12) {
    return true;
  }

  // recursive case: remove the first element and call the function on the rest of the array
  return addToTwelve(array.slice(1));
}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = addToTwelve;
} catch (e) {
  module.exports = null;
}
