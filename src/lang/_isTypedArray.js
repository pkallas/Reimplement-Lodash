// Checks if value is classified as a typed array.
// Create function named _isTypedArray
function _isTypedArray (value) {
// Check if value matches any of the typed arrays
  if (value === Int8Array || Uint8Array || Uint8ClampedArray || Int16Array ||
  Uint16Array || Int32Array || Uint32Array || Float32Array || Float64Array) {
    return true;
  }
  else return false;
}

//Export it.
export default _isTypedArray;
