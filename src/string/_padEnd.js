/*
  Define a function to right-pad a specified string.

  Preconditions:
    0. The count of arguments is 1, 2, or 3.
    1. Argument 0 is a string.
    2. Argument 1, if any, is an integer.
    3. Argument 2, if any, is a nonblank string.

Note: This implementation does not use the String.prototype.padEnd method,
because it is not included in ES2015.
*/
var _padEnd = function(string, length, chars) {
  // If the arguments are valid:
  if (
    arguments.length > 0
    && arguments.length < 4
    && typeof(string) === "string"
    && (
      arguments.length < 2
      || (
        typeof(length) === "number"
        && length >= 0
        && Math.ceil(length) === Math.floor(length)
      )
    )
    && (
      arguments.length < 3
      || (
        typeof(chars) === "string"
        && chars.length
      )
    )
  ) {
    // Identify the target length and the padding string.
    length = length || 0;
    chars = chars || " ";
    // If any padding is required:
    if (length > string.length) {
      // Identify the amount required.
      var padNeed = length - string.length;
      // Identify the padding string.
      var endPad =
        chars
        .repeat(Math.ceil(padNeed / chars.length))
        .substr(0, padNeed);
      // Return the padded string.
      return string + endPad;
    }
    // Otherwise, i.e. if no padding is required:
    else {
      // Return the string.
      return string;
    }
  }
  // Otherwise, i.e. if the arguments are invalid:
  else {
    // Return a failure result.
    return undefined;
  }
};

// Export it.
export default _padEnd;
