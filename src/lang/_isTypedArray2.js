// Checks whether value is classified as a typed array.
// Create function named _isTypedArray
var _isTypedArray = value => {
  // Return whether value is a typed array.
  return [
    "[object Int8Array]",
    "[object Uint8Array]",
    "[object Uint8ClampedArray]",
    "[object Int16Array]",
    "[object Uint16Array]",
    "[object Int32Array]",
    "[object Uint32Array]",
    "[object Float32Array]",
    "[object Float64Array]"
  ].includes(Object.prototype.toString.call(value));
}

//Export it.
export default _isTypedArray;
