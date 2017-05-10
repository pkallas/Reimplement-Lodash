// Creates an array of elements split into groups the length of size.
// If array can't be split evenly, the final chunk will be the remaining elements.
// Create a function named _chunk
function _chunk(array, size) {
// Create a variable of an empty array
  var emptyArray = [];
// Create a variable to return at the end of the function
  var chunkArray = [emptyArray, array];
// Check to see if size is specified
  if (size === undefined) {
// Remove the second element from array and move it into the empty array
    emptyArray.push(array.shift(1));
  }
// If the size is specified, loop through the array the amount of times equal to size
  else for (var i = 0; i < size; i++) {
// Remove first element from array every loop and move it into the empty array
    emptyArray.push(array.shift());
  }
// Return the now chunked array
  return chunkArray
}

// Export it.
export default _chunk;
