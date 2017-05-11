// Checks if value is classified as an Array object.
// Create function named _isArray
function _isArray(element) {
// Check to see if element is an array
  if (typeof element === "object"){
// If yes, return true
    return true;
  }
// If no, return false
  else return false;
}

//Export it.
export default _isArray;
