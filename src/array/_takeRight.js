// Creates a slice of array with n elements taken from the end.
// Create a function named _takeRight.
function _takeRight(array, number) {
// Check to see if number is specified
  if (number === undefined) {
// If undefined, create a slice of array with only last element
    return array.slice((array.length - 1), (array.length - 1));
  }
/* Otherwise, create a sliced array from the element specified by number to the
end of the array */
  else  return array.slice(array[number], array.length);
}

//Export it.
export default _takeRight;
