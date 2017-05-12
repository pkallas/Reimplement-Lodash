// Creates a slice of array with n elements taken from the beginning.
// Create a function named _take.
function _take(array, number) {
  // Return the slice.
  return array.slice(0, number || 1);
}

//Export it.
export default _take;
