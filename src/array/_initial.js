// Gets all but the last element of array.

// Create a function named _initial.
function _initial(array) {
/* Use slice to obtain the first element, and set the end as the array'slength
minus the last element */
  return array.slice(0, (array.length - 1))
}

// Export it.
export default _initial;
