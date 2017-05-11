/*
  Define a function to escape all instances of regular-expression
  metacharacters in a specified string.

  Preconditions:
    0. There is exactly 1 argument.
    1. The argument is a string.
*/
var _escapeRegExp = function(string) {
  // If there is exactly 1 argument and it is a string:
  if (arguments.length === 1 && typeof(string) === "string") {
    // Return the converted string.
    return string.replace(/[\\$.*+?()[\]{}|^]/g, "\\$&");
  }
  // Otherwise, i.e. if the argument count or type is invalid:
  else {
    // Return a failure result.
    return undefined;
  }
};

// Export it.
export default _escapeRegExp;
