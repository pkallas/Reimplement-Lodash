/* Gets the element at index n of array.
If n is negative, the nth element from the end is returned. */
// Create function named _nth
function _nth(array, number) {
// Check to see if number is defined
  if (number === undefined) {
    return array[0];
  }
// If number is defined, check to see if it's positive
  if (number > 0) {
/* Loop through the function n times, and return the element at the position
where the loop ended */
    for (var i = 0; i < number; i++) {
      }
    return array[i]
  }
// If number is defined, check to see if it's negative
  if (number < 0) {
/* Loop through the function n times, and return the element at the position
where the loop ended */
    for (var t = 0; t > number; t--) {
    }
    return array[array.length + t];
  }
}

//Export it.
export default _nth;
