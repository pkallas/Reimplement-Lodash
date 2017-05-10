/*
  Define a function to return a specified number rounded down with a specified
  precision. The result is not guaranteed if any precondition is violated.
  Results are subject to rounding errors.

  Preconditions:
    0. number and precision are numbers.
    1. precision is an integer.
*/
var _floor = function(number, precision) {
  /*
    If the arguments are valid (double-checking in case of floating-point
    rounding error):
  */
  // If precision is unspecified, make it 0.
  precision = precision || 0;
  if (
    typeof(number) === "number"
    && typeof(precision) === "number"
    && Math.ceil(precision) === precision
    && Math.floor(precision) === precision
  ) {
    // Identify 10 raised to the power of the precision.
    var tenPower = Math.pow(10, precision);
    // Return the rounded-down number.
    return Math.floor(number * tenPower) / tenPower;
  }
  // Otherwise, i.e. if the arguments are invalid:
  else {
    {
      return undefined;
    }
  }
};

// Export it.
export default _floor;
