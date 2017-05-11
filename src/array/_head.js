// Gets the first element of array.

// Create function named _head.
function _head(array) {
/* Create a new array using slice to obtain and return the
first element of the array. */
  var newArray = array.slice(0, 1);
// Return the element, not an array
  return newArray.shift();
}

// Export it.
export default _head;
