/**
 * PEDAC
 * Understanding the Problem
 * Write a method that takes a positive integer as an argument and returns `true` if the number is prime, `false` if it is not prime.
 * 
 * A prime number is a positive number that is evenly divisible only by itself and 1. Thus, 23 is a prime since its only divisors are 1 and 23. However, 24 is not prime since it has divisors of 1, 2, 3, 4, 5, 6, 8, 12, and 24. Note that the number 1 is not prime.
 * 
 * Explicit requirements:
 * - Input: a positive integer
 * - Output: a boolean value
 * - 1 is not prime
 * - Prime number is positive
 * - Prime number is evenly divisible only by 1 and itself
 * 
 * Implicit requirements:
 * - N/A
 * 
 * Questions:
 * - N/A
 * 
 * Examples and Test Cases
 * console.log(is_prime(1) === false)            // true
 * console.log(is_prime(2) === true)             // true
 * console.log(is_prime(3) === true)             // true
 * console.log(is_prime(4) === false)            // true
 * console.log(is_prime(5) === true)             // true
 * 
 * These two examples take the first numbers before the underscore
 * console.log(is_prime(3_297_061) === true)     // true
 * console.log(is_prime(23_297_061) === false)   // true
 * 
 * Data Structure
 * - numbers
 * 
 * Algorithm
 * - identify what a prime number is
 * - 1 always returns false (not a prime number)
 * - Prime numbers are only evenly divisible by 1 and itself
 * - Use modulo to see if there's a remainder from dividing the given number and a sequence of numbers up to the given number
 * - Define a loop that iterates a number of times starting from one number less than the given number down to 1.
 * - On each iteration, use modulo to divide the given number by the next number.
 * - If it has a remainder, keep going
 * - If it has no remainder, immediately return false
 * - If it reaches 1, return true.
 * 
 */


function is_prime(num) {
  // Store the divisors
  let divisors = [];
  
  // 1 is always prime
  if (num === 1) return false;

  for (let divisor = 1; divisor <= num; divisor += 1) {
    if (num % divisor === 0) {
      divisors.push(divisor);
    }
  }

  if (divisors.length === 2) {
    return true;
  } else {
    return false;
  }
}

console.log(is_prime(1) === false)            // true
console.log(is_prime(2) === true)             // true
console.log(is_prime(3) === true)             // true
console.log(is_prime(4) === false)            // true
console.log(is_prime(5) === true)             // true
console.log(is_prime(6) === false)            // true
console.log(is_prime(7) === true)             // true
console.log(is_prime(8) === false)            // true
console.log(is_prime(9) === false)            // true
console.log(is_prime(10) === false)           // true
console.log(is_prime(23) === true)            // true
console.log(is_prime(24) === false)           // true
console.log(is_prime(997) === true)           // true
console.log(is_prime(998) === false)          // true
console.log(is_prime(3_297_061) === true)     // true
console.log(is_prime(23_297_061) === false)   // true