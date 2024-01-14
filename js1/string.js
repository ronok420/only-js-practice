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


//qs:4 Write a JavaScript function to extract a specified number of characters from a string.
function extract_characters(inputString, numCharacters) {
  if (numCharacters < 0 && inputString.constructor === 'string') {
    return "Please provide a valid positive number of characters.";
  }

  return inputString.substring(0, numCharacters);
}

// Test cas
console.log('qs:4')
console.log(extract_characters("Hello, World!", 5));
// Output: "Hello"


//qs:5 Write a JavaScript function to convert a string into abbreviated form.
abbrev_name = function (str1) {
  var split_names = str1.trim().split(" ");
  if (split_names.length > 1) {
      return (split_names[0] + " " + split_names[1].charAt(0) + ".");
  }
  return split_names[0];
};
console.log("qs:5");
console.log(abbrev_name("Robin Singh"));
const sname ="Robin Singh".trim().split(" ")
console.log(`${sname[0]} ${sname[1].charAt(0)}.`)





// qs":6Write a JavaScript function that hides email addresses to prevent unauthorized access.

// Test Data:
// console.log(protect_email("robin_singh@example.com"));
// "robin...@example.com"
const protect_email =  (user_email) =>{
  const splitsting = user_email.split("@");
  let part1 =splitsting[0];
  let avg= part1.length/2;
 const  part1edit = part1.substring(0,avg)
  const part2 =splitsting[1];
  return (`${part1edit}.....@${part2}`) 
  
  
  
};
console.log("qs:6");
console.log(protect_email("robin_patuary@example.com"));