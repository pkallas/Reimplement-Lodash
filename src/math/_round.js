import _ceil from "../../src/math/_ceil";
import _floor from "../../src/math/_floor";

/*
  Define a function to round the first argument with a precision of the second
  argument.

  Preconditions:
    0. number and precision are numbers.
    1. precision is an integer.
*/
var _round = function(number, precision) {
  // If precision is unspecified, make it 0.
  precision = precision || 0;
  /*
    If there are exactly 1 or 2 arguments and they are valid (double-checking
    in case of floating-point rounding error):
  */
  if (
    [1, 2].includes(arguments.length)
    && typeof(number) === "number"
    && typeof(precision) === "number"
    && Math.ceil(precision) === Math.floor(precision)
  ) {
    // Identify number rounded up and down.
    var upRound = _ceil(number, precision);
    var downRound = _floor(number, precision);
    /*
      Return whichever of them is closer to number, rounding up in case of
      a tie.
    */
    return upRound - number > number - downRound ? downRound : upRound;
  }
  // Otherwise, i.e. if the arguments are invalid:
  else {
    // Return a failure result.
    return undefined;
  }
};

// Export it.
export default _round;
