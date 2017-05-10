/*
  Define a function to convert the first character to upper case and all other
  characters to lower case in a specified string.

  Preconditions:
    0. There is exactly 1 argument.
    1. The argument is a string.

  Limitations: This function relies on ES6 to perform correct case conversion.
*/
var _capitalize = function(string) {
  // If there is exactly 1 argument and it is a string:
  if (arguments.length === 1 && typeof(string) === "string") {
    // If it is blank:
    if (string.length === 0) {
      // Return a blank string.
      return "";
    }
    // Otherwise, if it has length 1:
    else if (string.length === 1) {
      // Return it, capitalized.
      return string.toUpperCase();
    }
    // Otherwise, i.e. if it has length 2 or more:
    else {
      /*
        Return it with the initial character capitalized and the rest
        converted to lower case.
      */
      return string[0].toUpperCase() + string.substring(1).toLowerCase();
    }
  }
  // Otherwise, i.e. if the argument count or type is invalid:
  else {
    // Return a failure result.
    return undefined;
  }
};

// Export it.
export default _capitalize;
