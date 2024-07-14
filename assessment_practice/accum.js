/*
PEDAC
Write a function that solves this problem


Examples and Test Cases:
accum("abcd") -> "A-Bb-Ccc-Dddd"
"abcd" -> "A-Bb-Ccc-Dddd"

Write a function that accepts a string as an argument and returns a single string 
containing groups of letters separated by a hyphen (-). Each group in the output 
string contains a character from the input. The characters are then accumuluatively 
repeated in each group, first group is the first letter. The second group is the second 
letter twice, the third group is the third letter three times, etc.. The first letter 
in each group needs to be capitalized.

Explicit Requirements:
- Input: string
- Output: string
- The output string is a hyphen separated string
- The group of characters in the output are each of the individual characters from 
the input string
- Each letter is repeated the number of times as it's group "position"
- The first letter of each group is capitalized

Implicit Requirements:
- Input string is not empty

Data Structure
Splitting the string into an array for collection and transformation seems necessary
"abcd"
['a', 'b', 'c', 'd'] // Turn it into an array
['a', 'bb', 'ccc', 'dddd'] // duplicate the characters in each element
['A', 'Bb', 'Ccc', 'Dddd'] // capitalize the first letter
"A-Bb-Ccc-Dddd" // join the array using hyphens as delimters

Algorithm
- Create result variable for the output
- Split the input string into an array
- Store the length of the array/string in a variable
- Iterate through the array and concat the current iterated element with the
element at the current index (i)
- Create a new array with these values
- Capitalize the first letter in each element
- Join array using hyphens as delimiters
- return result

USE THE repeat() STRING METHOD! AHHHHH

*/
function accum(s) {
  let lowerCased = s.toLowerCase();
	let sArr = lowerCased.split('');
  let result = [];
  // sArr = ['a', 'b', 'c', 'd'];
  
//   const result = sArr.map((char, idx) => {
//     // uppercase first character
//     // duplicate/concat it if length is greater than 1
    
//   });
  
  for (let i = 0; i < sArr.length; i += 1) {
    // How do we duplicate the characters of each element after the first element
    // Arrays are zero-indexed, meaning the first element has an index of 0
    // second element index 1, third element index 2, etc..
    
    // How do we add two more of the same character?
    // How do we know it's "two"
    // How do we increment that by "one" after each execution of the loop?
    
    // sArr[0]; // a (i = 0)
    // sArr[1]; // b (i = 1)
    // // How do we get 'bb'
    // sArr[1] + sArr[1]; // 'bb'? (i = 1)
    // sArr[2]; // c (i = 2)
    // // How do we get 'ccc'? 
    // sArr[2] + sArr[2] + sArr[2] // 'ccc'? (i = 2)
    
    result.push(sArr[i].repeat(i + 1).charAt(0).toUpperCase() + sArr[i].repeat(i + 1).slice(1));
  }
  
  return result.join('-');
}

console.log(accum('abcd'));
console.log(accum("ZpglnRxqenU")); // true