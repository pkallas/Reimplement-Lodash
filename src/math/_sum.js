import _add from '../../src/math/_add'

// Define a function to return the sum of the first 2 of 4 arguments.
var add2 = function(a, b, c, d) {
  return _add(a, b);
}

/*
  Define a function to return the sum of the elements in a specified array of numbers.

  Preconditions:
    0. Every element of array is a number.
*/
var _sum = function(array) {
  // If the argument is a non-empty array:
  if (Array.isArray(array) && array.length) {
    // Return the sum of its elements, or undefined if any element is invalid.
    return array.reduce(add2);
  }
  // Otherwise, i.e. if the argument is empty or not an array:
  else {
    // Return a failure result.
    return undefined;
  }
};

// Export it.
export default _sum;
