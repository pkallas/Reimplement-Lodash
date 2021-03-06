/*
  Define a function to return the sum of 2 specified numbers.

  Preconditions:
    0. augend and addend are numbers.
*/
var _add = function(augend, addend) {
  // If there are exactly 2 arguments:
  if (arguments.length === 2) {
    // If the arguments are valid:
    if (typeof(augend) === "number" && typeof(addend) === "number") {
      // Return their sum.
      return augend + addend;
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
export default _add;
