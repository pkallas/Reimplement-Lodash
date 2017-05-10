/*
  Define a function to return the product of 2 specified numbers.

  Preconditions:
    0. multiplicand and multiplier are numbers.
*/
var _multiply = function(multiplicand, multiplier) {
  // If there are exactly 2 arguments:
  if (arguments.length === 2) {
    // If the arguments are valid:
    if (typeof(multiplicand) === "number" && typeof(multiplier) === "number") {
      // Return their product.
      return multiplicand * multiplier;
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
export default _multiply;
