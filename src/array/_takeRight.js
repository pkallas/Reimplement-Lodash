// Creates a slice of array with n elements taken from the end.
// Create a function named _takeRight.
function _takeRight(array, number) {
  // Create a variable of empty array to push into
  var endSlice = [];
// Check to see if number is defined
  if (number === undefined) {
// Move last element of array into empty array
    endSlice.unshift(array.pop());
  }
// Loop through array 'number' amount of times
  else for (var i = 0; i < number; i++) {
// Move last element of array into empty array for each iteration
    endSlice.unshift(array.pop());
  }
// Return new, previously empty array
  return endSlice
}

//Export it.
export default _takeRight;
