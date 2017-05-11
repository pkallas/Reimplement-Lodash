/* Reverses array so that the first element becomes the last,
the second element becomes the second to last, and so on. */
// Create a function named _reverse
function _reverse(array) {
// Create a variable of an empty array
  var reversedArray = [];
// Loop through the array
  for (var i = 0; i <= array.length + 1; i++) {
/* Remove the first element every iteration of the loop,
and move it into the start of the empty array */
    reversedArray.unshift(array.shift());
  }
// Return the previously empty array
  return reversedArray;
}

// Export it.
export default _reverse;
