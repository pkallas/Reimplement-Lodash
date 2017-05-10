// Creates a slice of array with n elements dropped from the end.

// Create function named _dropRight
function _dropRight(array, number) {
// Check to see if number is specified
 if (number === undefined) {
// If not specified, drop only the last element from array
   array.pop();
 }
// Else, loop through array the amount the times as specified by number provided
  else for (var i = 0; i < number; i++){
// Remove elements from the end of the array
    array.pop();
  }
// Return the modified array
    return array;
}

// Export it.
export default _dropRight;
