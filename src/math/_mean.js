import _add from '../../src/math/_add'

/*
  Define a function to return the mean of the elements in a specified array of numbers.

  Preconditions:
    0. Every element of array is a number.
*/
var _mean = function(array) {
  // If the argument is a non-empty array:
  if (Array.isArray(array) && array.length) {
    // Identify the sum of its elements, or undefined if any element is invalid.
    var sum = array.reduce(_add);
    // Return their mean, or undefined.
    return typeof(sum) === "number" ?
      array.reduce(_add) / array.length :
      undefined;
  }
  // Otherwise, i.e. if the argument is empty or not an array:
  else {
    // Return a failure result.
    return undefined;
  }
};

// Export it.
export default _mean;
