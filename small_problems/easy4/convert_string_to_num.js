function stringToInteger(string) {
  const DIGITS = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    'A': 10,
    'B': 11,
    'C': 12,
    'D': 13,
    'E': 14,
    'F': 15
  }
  let arrayOfDigits = string.split('').map(char => DIGITS[char]);
  let result = 0;
  arrayOfDigits.forEach(element => (result = (16 * result) + element));

  return result;
}

function hexadecimalToInteger(string) {
  return stringToInteger(string.toUpperCase());
}

console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true
console.log(hexadecimalToInteger('4D9f') === 19871); // log true