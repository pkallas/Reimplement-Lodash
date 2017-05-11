// Creates a slice of array with n elements taken from the end.
// Create a function named _takeRight.
function _takeRight(array, number) {
// Check to see if number is specified
  if (number === undefined) {
// If undefined, create a slice of array with only last element
    return array.slice((array.length - 1), (array.length - 1));
  }
/* Otherwise, create a loop to obtain the element correlating to the specified
number */
  else for (var i = 0; i < number; i++) {
  }
/* Return a slice of array from the element at which the loop ended to the end
of the array */
    return array.slice(array[i], array.length)
}

//Export it.
export default _takeRight;
