/*
  Define a function to return whether a specified substring of a specified
  string is identical to a specified string.

  Preconditions:
    0. There are exactly 2 or 3 arguments.
    1. Argument 1 is a nonblank string.
    2. Argument 2, if any, is a non-negative integer no greater than the length
      of argument 0.
*/
var _endsWith = function(string, target, position) {
  /*
    If there are 2 or 3 arguments, arguments 0 and 1 are strings, and
    argument 1 is nonblank:
  */
  if (
    [2, 3].includes(arguments.length)
    && typeof(string) === "string"
    && typeof(target) === "string"
    && target.length
  ) {
    // If the 3rd argument does not exist:
    if (arguments.length === 2) {
      // Make it the length of argument 0.
      position = string.length;
    }
    /*
      If the position is a non-negative integer no greater than the length
      of argument 0:
    */
    if (position >= 0 && Math.floor(position) === Math.ceil(position)) {
      // Identify the substring to be compared with the target.
      var substring = string.substring(0, position);
      // If the target is short enough to match the substring:
      if (target.length <= substring.length) {
        // Return whether the substring ends with the target.
        return target === substring.substr(substring.length - target.length);
      }
      // Otherwise, i.e. if the target is too long to match the substring:
      else {
        return false;
      }
    }
    // Otherwise, i.e. if the position is invalid:
    else {
      // Return a failure result.
      return undefined;
    }
  }
  // Otherwise, i.e. if the arguments are invalid:
  else {
    // Return a failure result.
    return undefined;
  }
};

// Export it.
export default _endsWith;
