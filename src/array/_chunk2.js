// Creates an array of elements split into groups the length of size.
// If array can't be split evenly, the final chunk will be the remaining elements.
// Create a function named _chunk
function _chunk(array, size) {
// Create a variable of an empty array
  var emptyArray = [];
// Create a variable to return at the end of the function if size is undefined
  var i = 0;
// Create a variable equal to size
// Check to see if size is specified
  if (size === undefined) {
// Set size to be 1
    size = 1
  }
  var constantSize = size
    do {
      emptyArray.push(array.slice(i, size))
      i += constantSize;
      size += constantSize;
  }
    while (i < array.length);
// Return the now chunked array
  return emptyArray
}

// Export it.
export default _chunk;
