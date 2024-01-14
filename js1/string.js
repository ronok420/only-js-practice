const name = new String("ronok")
console.log(name)
console.log(name.toUpperCase())

// qs1: Write a JavaScript function to check whether an 'input' is a string or not.

// Test Data:
// console.log(is_string('w3resource'));
// true
// console.log(is_string([1, 2, 4, 0]));
// false
function is_string(input) {
    return typeof input === 'string';
  }
  
  // Test cases
  console.log(is_string('w3resource'));  // true
  console.log(is_string([1, 2, 4, 0]));  // false
  