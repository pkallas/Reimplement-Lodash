/*
  Define a function to return the quotient of 2 specified numbers.

  Preconditions:
    0. dividend and divisor are numbers.
    1. divisor is not 0.
*/
var _divide = function(dividend, divisor) {
  // If the arguments are valid:
  if (
    typeof(dividend) === "number"
    && typeof(divisor) === "number"
    && divisor !== 0
  ) {
    // Return their quotient.
    return dividend / divisor;
  }
};

// Export it.
export default _divide;
