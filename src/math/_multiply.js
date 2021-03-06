/*
  Define a function to return the product of 2 specified numbers.

  Preconditions:
    0. multiplicand and multiplier are numbers.
*/
var _multiply = function(multiplier, multiplicand) {
  // If there are exactly 2 arguments:
  if (arguments.length === 2) {
    // If the arguments are valid:
    if (typeof(multiplier) === "number" && typeof(multiplicand) === "number") {
      // Return their product.
      return multiplier * multiplicand;
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
