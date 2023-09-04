/**
 * PEDAC
 * 
 * Understand the Problem
 * A UUID is a type of identifier often used to uniquely identify items, even when some of those 
 * items were created on a different server or by a different application. That is, without any 
 * synchronization, two or more computer systems can create new items and label them with a UUID 
 * with no significant risk of stepping on each other's toes. It accomplishes this feat through 
 * massive randomization. The number of possible UUID values is approximately 3.4 X 10E38, which 
 * is a huge number. The chance of a conflict is vanishingly small with such a large number of 
 * possible values.
 * 
 * Explicit Requirements:
 * - Input: N/A
 * - Output: UUID which consists of 32 hexadecimal characters (digits 0 - 9 and the ltters a - f)
 * represented as a string.
 * - The output value is broken into 5 sections in an 8-4-4-4-12 pattern.
 * 
 * Implicit Requirements:
 * N/A
 * 
 * Questions:
 * N/A
 * 
 * Examples and test cases
 * 8-4-4-4-12
 * 'f65c57f6' + 'a6aa' + '17a8' + 'faa1' + 'a67f2dc9fa91'
 * 
 * => 'f65c57f6-a6aa-17a8-faa1-a67f2dc9fa91'
 * 
 * Data Structure
 * - Need a 'randomizer' to select either a Digit or a Letter
 * - The andomizer then selects a number between those points
 * - Digits String.fromCodePoint(): 48-57
 * - Lowercase letters String.fromCodePoint(): 97-122
 * - This selection needs to happen 8, 4, 4, 4, 12 times to form each section
 * - Then join the sections into a single string separated by '-'
 * 
 * Algorithm
 * - Create randomizer function which selects a number between a range of numbers inclusively
 * - Define the fromCodePoint ranges of DIGITS and LETTERS
 * - Define number of characters for each section
 * - Randomly select between DIGITS or LETTERS
 * - Output a character for the string
 * - Repeat till we have the set number of characters for that section 
 * - Join all characters for each section
 * - Join all sections with a '-' separating them
 * - Output result
 * 
 * Code
 */

// console.log(String.fromCodePoint(97, 98, 122));

function randomizer(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function generateUUID() {
  const DIGITS_CODE_POINT = [48, 57];
  const LETTERS_CODE_POINT = [97, 102];
  let numOfCharsPerSec = [8, 4, 4, 4, 12];
  let result = [];

  // Number of elements per section 8, 4, 4, 4, 12
  // How do we define sections with a specified number of elements
  // Create the elements up to a certain point? That point being the number of elements for that section?
  for (let count = 0; count < numOfCharsPerSec.length; count++) {
    // Set how many characters for the current section
    let numOfChars = numOfCharsPerSec[count];
    let section = '';
    
    // Create a specific number of random characters for each section
    while (numOfChars > 0) {
      // Pick letter or digit
      if (randomizer(0, 1) === 1) {
        section += String.fromCodePoint(randomizer(...LETTERS_CODE_POINT));
      } else {
        section += String.fromCodePoint(randomizer(...DIGITS_CODE_POINT));
      }
      numOfChars -= 1;
    }

    result.push(section);
  }

  return result.join('-');
}

console.log(generateUUID());
console.log(generateUUID());
console.log(generateUUID());