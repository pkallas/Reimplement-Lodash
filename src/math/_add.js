/*
  Define a function to return the sum of 2 specified numbers.

  Preconditions:
    0. augend and addend are numbers.
*/
var _add = function(augend, addend) {
  // If the arguments are valid:
  if (typeof(augend) === "number" && typeof(addend) === "number") {
    // Return their sum.
    return augend + addend;
  }
};

// Export it.
export default _add;
