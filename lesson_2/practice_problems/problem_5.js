/**
 * PEDAC
 * 
 * Understand the Problem
 * Consider the following nested object:
 * 
 * Compute and display the total age of the male members of the family.
 * 
 */

let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

let maleMunsters = Object.values(munsters).filter( munster => {
  return munster.gender === 'male';
});

let totalAge = 0;

maleMunsters.forEach(obj => {
  totalAge += obj.age;
});

console.log(totalAge);

// using for/in
let totalMaleAge = 0;

for (let member in munsters) {
  if (munsters[member]['gender'] === 'male') {
    totalMaleAge += munsters[member]['age'];
  }
}

console.log(totalMaleAge);