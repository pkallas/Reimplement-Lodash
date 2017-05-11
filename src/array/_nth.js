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
    return array[number]
  }
// If number is defined, check to see if it's negative
  if (number < 0) {
    return array[array.length + number];
  }
}

//Export it.
export default _nth;
