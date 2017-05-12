/*
  Define a function to repeat a specified string a specified number of times.

  Preconditions:
    0. The count of arguments is 0, 1, or 2.
    1. Argument 0, if any, is a string.
    2. Argument 1, if any, is a nonnegative integer.
*/
var _repeat = function(string, n) {
  // If the arguments are valid:
  if (
    (arguments.length === 0)
    || (arguments.length === 1 && typeof(string) === "string")
    || (
      arguments.length === 2
      && typeof(string) === "string"
      && typeof(n) === "number"
      && Math.ceil(n) === Math.floor(n)
      && n >= 0
    )
  )
  {
    // Identify the string and the number.
    string = string || "";
    n = n || 1;
    // Return the repeated string.
    return string.repeat(n);
  }
  // Otherwise, i.e. if the arguments are invalid:
  else {
    // Return a failure result.
    return undefined;
  }
};

// Export it.
export default _repeat;
