function sortStringsByConsonants(arr) {
  let sortedStr = arr.sort((a, b) => countMaxAdjacentConstants(b) - countMaxAdjacentConstants(a));
  
  return sortedStr;;
}

function countMaxAdjacentConstants(str) {
  let strArr = str.replace(/\s+/g, '').split('');
  let count = 0;
  let tempStr = '';
  let vowels = ['a', 'e', 'i', 'o', 'u', 'y'];

  strArr.forEach(char => {
    if (!vowels.includes(char)) {
      tempStr = tempStr.concat('', char);
      if (tempStr.length > 1 && tempStr.length > count) { count = tempStr.length }
    } else {
      if (tempStr.length > 1 && tempStr.length > count) { count = tempStr.length }
      tempStr = '';
    }
    // console.log({tempStr}, {count});
  });
  
  return count;
}

// // Test final sorting of array
console.log(sortStringsByConsonants(['aa', 'baa', 'ccaa', 'dddaa'])); // ['dddaa', 'ccaa', 'aa', 'baa']
console.log(sortStringsByConsonants(['can can', 'toucan', 'batman', 'salt pan'])); // ['salt pan', 'can can', 'batman', 'toucan']
console.log(sortStringsByConsonants(['bar', 'car', 'far', 'jar'])); // ['bar', 'car', 'far', 'jar']
console.log(sortStringsByConsonants(['day', 'week', 'month', 'year'])); // ['month', 'day', 'week', 'year']


// // Test finding max number of adjacent constants
// console.log(countMaxAdjacentConstants('can can')); // 2
// console.log(countMaxAdjacentConstants('toucan')); // 0
// console.log(countMaxAdjacentConstants('batman')); // 2
// console.log(countMaxAdjacentConstants('salt pan')); // 3
// console.log(countMaxAdjacentConstants('month')); // 3