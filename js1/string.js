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
  console.log('qs:1')
  console.log(is_string('w3resource'));  // true
  console.log(is_string([1, 2, 4, 0]));  // false


// qs2:  Write a JavaScript function to check whether a string is blank or not.

// Test Data :
// console.log(is_Blank(''));
// console.log(is_Blank('abc'));
// true
// false
function is_Blank(input){
    if(input.length === 0)
      return "string is blank";
       
      return "string has character";
    
    }
    console.log('qs:2')
    console.log(is_Blank(''));
    console.log(is_Blank('abc'));
   
   
   
   
//   qs:3  Write a JavaScript function to split a string and convert it into an array of words.

// Test Data :
// console.log(string_to_array("Robin Singh"));
// ["Robin", "Singh"]
const string_to_array = (input)=> input.trim().split(" ")

console.log("qs:3")
console.log(string_to_array("Robin Singh"));