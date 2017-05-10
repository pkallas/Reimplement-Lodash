// Creates a slice of array with n elements taken from the beginning.
// Create a function named _take.
function _take(array, number) {
// Check to see if number is defined
  if (number === undefined) {
// Return slice of array
    return array.slice(0)
} // Return slice of array
else return array.slice(0, number);
 }


//Export it.
export default _take;
