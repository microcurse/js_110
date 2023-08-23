/**
 *  Using the forEach method, write some code to output all vowels from the strings in the arrays. 
 *  Don't use a for or while loop.
 *  
 */


let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

// let result = [];
let vowels = 'aeiou';

for (const prop in obj) {
  obj[prop].forEach(word => {
    word.split('').forEach(char => {
      if (vowels.includes(char)) {
        console.log(char);
      }
    });
  });
}

// console.log(result.join(''));