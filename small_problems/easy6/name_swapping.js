/**
 * PEDAC
 * 
 * Understanding the problem
 * Write a function that takes a string argument consisting of a first name, a space, and a last name, and returns 
 * a new string consisting of the last name, a comma, a space, and the first name.
 * 
 * Explicit requirements:
 * - Input: a string
 *  - Consists of a first name, a space, and a last name
 * - Output: a new string
 *  - Consists of a last name, a comma, a space, and a first name.
 * 
 * Implicit requirements:
 * - 
 * 
 * Questions:
 * - 
 * 
 * Examples and test cases
 * swapName('Joe Roberts');    // "Roberts, Joe"
 * 
 * Data Structure
 * Joe Roberts => ['Joe', 'Roberts']
 * ['Joe', 'Roberts'] => ['Roberts', 'Joe']
 * ['Roberts', 'Joe'] => Roberts, Joe
 * Roberts, Joe
 * 
 * Algorithm
 * - Split the string into an array
 * - Reverse the array
 * - Join the array with a comma and space separating the two
 * 
 */

function swapName(fullName) {
  return fullName.split(' ').reverse().join(', ');
}

console.log(swapName('Joe Roberts'));    // "Roberts, Joe"

/**
 * Further Exploration
 * What if the person has one or more middle names? Refactor the current solution so that it can accomodate this;
 * the middle names should be listed after the first name:
 * 
 * Examples and test cases
 * swapName('Karl Oskar Henriksson Ragvals');    // "Ragvals, Karl Oskar Henriksson"
 * 
 * Data Structure
 * Karl Oskar Henriksson Ragvals => ['Karl', 'Oskar', 'Henriksson', 'Ragvals']
 * ['Karl', 'Oskar', 'Henriksson', 'Ragvals']
 * firstName = 'Karl'
 * lastName = 'Ragvals'
 * 
 * ['Karl', 'Oskar', 'Henriksson', 'Ragvals'] => []
 * ['Ragvals', 'Karl Oskar Henriksson']
 * 
 * Algorithm
 * 1. Split the string into an array
 * 2. Remove the last name and store it in a variable
 * 3. Join the first name and any middle names into a variable
 * 4. Concat the last name into an array with the first and middle names
 * 5. Join that array into a string separated with a comma and space
 */

function swapName(fullName) {
  let fullNameArr = fullName.split(' ');
  let lastNameFirst = [fullNameArr.pop(), fullNameArr.join(' ')];

  return lastNameFirst.join(', ');
}

console.log(swapName('Karl Oskar Henriksson Ragvals'));    // "Ragvals, Karl Oskar Henriksson"