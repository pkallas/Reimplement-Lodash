// Returns a slice of array with n elements dropped from the beginning.
// Create function named _drop
function _drop(array, number) {
  /*
    Return a slice starting from specified number, or 1 if unspecified, to end
    of array
  */
  return array.slice(number || 1);
}

// Export it.
export default _drop;
