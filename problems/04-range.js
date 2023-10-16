/***********************************************************************
Write a recursive function, `range`, that takes a start and an end and returns
an array of all numbers in that range, exclusive. If the end number is less than
the start, return an empty array.

Examples:

range(1, 5); // [1, 2, 3, 4]
range(3, 4); // [3]
range(7, 6); // []
***********************************************************************/


// your code here
//returns and array with numbers from start to end exclusive
//if end < start return an empety array
//first check that end is not less than start
//base case would be when the array is equal to the end minus the start
//the recursive case would be start + one
let range = function (start, end){

  if (end < start) {
    return [];
  }

  if (start >= end - 1) {
    return [];
  }

  return [start].concat(range(start + 1, end));

}


/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = range;
} catch (e) {
  module.exports = null;
}
