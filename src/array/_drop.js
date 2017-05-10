// Creates a slice of array with n elements dropped from the beginning.

// Create function named _drop
function _drop(array, number) {
// Check to see if number is specified
 if (number === undefined) {
// If not specified, drop only the first element from array
   array.shift();
 }
// Else, loop through array the amount the times as specified by number provided
  else for (var i = 0; i < number; i++){
// Remove elements from the beginning of the array
    array.shift();
  }
// Return the modified array
    return array;
}

// Export it.
export default _drop;
