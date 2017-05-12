// Gets all but the first element of array.

// Create function named _tail.
function _tail(array) {
// Use slice to create an array with all but the first element
  return array.slice(1, array.length);
}

// Export it.
export default _tail;
