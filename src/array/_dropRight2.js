/*
  Returns a slice of array with n elements, or 1 if not specified, dropped
  from the end.
*/
// Create function named _dropRight
function _dropRight(array, number) {
  // Return the slice
  return array.slice(0, array.length - (number || 1));
}

// Export it.
export default _dropRight;
