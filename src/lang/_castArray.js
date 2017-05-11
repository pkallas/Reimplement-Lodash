// Casts value as an array if it's not one.
// Create a funtion named _castArray
function _castArray(value) {
// Create a variable that casts value as an array
  var castValue = [value];
// Check to see if value is an array
  if (Array.isArray(value) === true) {
// If true, do not change value
    return value;
  }
// Else, change value to be cast as an array
  else return castValue;
}

// Export it.
export default _castArray;
