/*
  Identify an array of characters to be converted to HTML entities and the
  entities to convert them to.
*/
var convertibles = [
  ["&", "&amp;"],
  ["<", "&lt;"],
  [">", "&gt;"],
  ["\"", "&quot;"],
  ["'", "&apos;"]
];

/*
  Define a function to replace all instances of those characters in a specified
  string to their HTML entities.

  Preconditions:
    0. There is exactly 1 argument.
    1. The argument is a string.
*/
var _escape = function(string) {
  // If there is exactly 1 argument and it is a string:
  if (arguments.length === 1 && typeof(string) === "string") {
    // For each convertible character:
    for (var i = 0; i < convertibles.length; i++) {
      /*
        Replace string with a copy of itself with all instances of that character converted.
      */
      string = string.replace(
        RegExp(convertibles[i][0], "g"),
        convertibles[i][1]
      );
    }
    // Return the converted string.
    return string;
  }
  // Otherwise, i.e. if the argument count or type is invalid:
  else {
    // Return a failure result.
    return undefined;
  }
};

// Export it.
export default _escape;
