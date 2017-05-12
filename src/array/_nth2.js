/*
  Gets the element at index n of array.
  If n is negative, the nth element from the end is returned.
*/
// Create function named _nth
function _nth(array, number) {
  // Identify the offset.
  number = number || 0;
  // Return the element.
  return array[number < 0 ? array.length + number : number];
}

//Export it.
export default _nth;
