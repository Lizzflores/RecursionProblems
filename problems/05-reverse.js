/***********************************************************************
Write a recursive function reverse(string) that takes in a string and returns
it reversed.

Examples:

reverse("house"); // "esuoh"
reverse("dog"); // "god"
reverse("atom"); // "mota"
reverse("q"); // "q"
reverse("id"); // "di"
reverse(""); // ""
***********************************************************************/

// your code here

let reverse = function (string){
  // base case: if the string is empty or has only one character, return itself
  if (string.length <= 1) {
    return string;
  }
  // recursive case: reverse the string excluding the first character,
  // and concatenate the first character to the end
  return reverse(string.slice(1)) + string[0];
}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = reverse;
} catch (e) {
  module.exports = null;
}
