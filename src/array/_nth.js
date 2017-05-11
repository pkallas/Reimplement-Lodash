/* Gets the element at index n of array.
If n is negative, the nth element from the end is returned. */
// Create function named _nth
function _nth(array, number) {
// Check to see if number is defined
  if (number === undefined) {
    return array.shift();
  }
// If number is defined, check to see if it's positive
  if (number > 0) {
// Loop through the function n times, removing the first element each time
    for (var i = 0; i < number; i++) {
      array.shift();
    }
    return array.shift();
  }
// If number is defined, check to see if it's negative
  if (number < 0) {
// Loop through the function n times, removing the last element each time
    for (var t = -1; t > number; t--) {
      array.pop();
    }
    return array.pop();
  }
}

//Export it.
export default _nth;
