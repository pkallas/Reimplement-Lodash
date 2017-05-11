// Gets the last element of array.

// Create a function named _last.
function _last(array) {
// Use slice to obtain only the last element, assign it to a variable
  var slicedArray = array.slice((array.length - 1), array.length)
// Return the element
  return slicedArray.pop()
}

//Export it.
export default _last;
