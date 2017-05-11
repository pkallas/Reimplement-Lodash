// Creates a slice of array with n elements dropped from the end.

// Create function named _dropRight
function _dropRight(array, number) {
// Check to see if number is specified
  if (number === undefined) {
// If not specified, slice end only
    return array.slice(0, (array.length))
  }
// Else, create a slice from start of array to number specified
  else return array.slice(0, (array.length - number))
}

// Export it.
export default _dropRight;
