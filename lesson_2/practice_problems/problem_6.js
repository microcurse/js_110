/**
 * PEDAC
 * 
 * Understand the Problem
 * One of the most frequently used real-world string operations is that of "string substitution," 
 * where we take a hard-coded string and modify it with various parameters from our program.
 * 
 * Given this previously seen family object, print the name, age, and gender of each family member:
 * 
 * Each output line should follow this pattern:
 * (Name) is a (age)-year-old (male or female).
 * 
 */

let munsters = {
  herman: { age: 32, gender: 'male' },
  lily: { age: 30, gender: 'female' },
  grandpa: { age: 402, gender: 'male' },
  eddie: { age: 10, gender: 'male' },
  marilyn: { age: 23, gender: 'female'}
};

for (let member in munsters) {
  console.log(`${member} is a ${munsters[member]['age']}-year-old ${munsters[member]['gender']}`);
}
