// Gets all but the last element of array.

// Create a function named _initial.
var _initial = array => {
  // Return the slice.
  return array.slice(0, array.length - 1);
};

// Export it.
export default _initial;
