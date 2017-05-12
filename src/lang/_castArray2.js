// Casts value as an array if it's not one.
// Create a funtion named _castArray
var _castArray = value => {
  // If value is an array:
  if (Array.isArray(value)) {
    // Return it.
    return value;
  }
  // Else, return it cast as an array
  else return [value];
};

// Export it.
export default _castArray;
