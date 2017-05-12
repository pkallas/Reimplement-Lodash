// Creates a slice of array with n elements taken from the end.
// Create a function named _takeRight.
var _takeRight = (array, number) => {
  // Return the slice.
  return array.slice(- (number || 1));
}

//Export it.
export default _takeRight;
