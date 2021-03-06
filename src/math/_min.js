/*
  Define a function to return the smaller of 2 specified numbers.

  Preconditions:
    0. soFar and theNext are numbers.
*/

var smaller = function(soFar, theNext) {
  // If both arguments are numbers:
  if (typeof(soFar) === "number" && typeof(theNext) === "number") {
    // Return the smaller of them.
    return soFar > theNext ? theNext : soFar;
  }
  // Otherwise, i.e. if at least 1 argument is not a number:
  else {
    // Return a failure result.
    return undefined;
  }
};

/*
  Define a function to return the minimum of the elements in a specified array of numbers.

  Preconditions:
    0. Every element of array is a number.
*/
var _min = function(array) {
  // If the argument is a non-empty array:
  if (Array.isArray(array) && array.length) {
    // Return the minimum of its elements.
    return array.reduce(smaller);
  }
  // Otherwise, i.e. if the argument is empty or not an array:
  else {
    // Return a failure result.
    return undefined;
  }
};

// Export it.
export default _min;
