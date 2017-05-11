// Creates a slice of array with n elements dropped from the beginning.
// Create function named _drop
function _drop(array, number) {
// Check to see if number is specified
  if (number === undefined) {
// If not specified, slice all but the first element from array
    return array.slice(1, (array.length + 1));
  }
// Else, slice starting from specified number to end of array
  else return array.slice(number, (array.length + 1))
}
// Export it.
export default _drop;
