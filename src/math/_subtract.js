/*
  Define a function to return the difference between 2 specified numbers.

  Preconditions:
    0. minuend and subtrahend are numbers.
*/
var _subtract = function(minuend, subtrahend) {
  // If there are exactly 2 arguments:
  if (arguments.length === 2) {
    // If the arguments are valid:
    if (typeof(minuend) === "number" && typeof(subtrahend) === "number") {
      // Return their difference.
      return minuend - subtrahend;
    }
    // Otherwise, i.e. if either argument is invalid:
    else {
      // Return a failure result.
      return undefined;
    }
  }
  // Otherwise, i.e. if there are not exactly 2 arguments:
  else {
    // Return a failure result.
    return undefined;
  }
};

// Export it.
export default _subtract;
