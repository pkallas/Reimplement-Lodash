/* Reverses array so that the first element becomes the last,
the second element becomes the second to last, and so on. */
// Create a function named _reverse
function _reverse(array) {
// Copy the array
  var slicedArray = array.slice();
// Create a variable of an empty array
  var reversedArray = [];
// Loop through the array
  for (var i = 0; i <= slicedArray.length + 1; i++) {
/* Remove the first element every iteration of the loop,
and move it into the start of the empty array */
    reversedArray.unshift(slicedArray.shift());
  }
// Return the previously empty array
  return reversedArray;
}

// Export it.
export default _reverse;

/* This is method of performing a reverse function without using ES 2015, in
order to determine how the built in reverse function works */
