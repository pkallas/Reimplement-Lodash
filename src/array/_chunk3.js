/*
  Creates an array of elements split into groups the length of size. If
  array can’t be split evenly, the final chunk will be the remaining elements.
*/
// Create a function named _chunk
var _chunk = (array, size) => {
  // Identify the chuck size.
  size = size || 1;
  // Initialize the starting index of the next elements to chunk.
  var startIndex = 0;
  // Initialize the resulting array.
  var newArray = [];
  // As long as there are elements to chunk:
  while (startIndex < array.length) {
    newArray.push(array.slice(startIndex, startIndex + size));
    startIndex += size;
  }
  // Return the new array.
  return newArray;
}

// Export it.
export default _chunk;
