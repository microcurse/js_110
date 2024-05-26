/**
 * PEDAC
 * 
 * Understanding the Problem
 * 
 * Write a function that takes a string as an argument and returns `true` if all parentheses in the string are
 * properly balanced, `false` otherwise. To be properly balanced, parentheses must occur in matching `(` and `)`
 * pairs.
 * 
 * Explicit requirements
 * - Input: a string
 * - Output: boolean `true` or `false`
 * - Outputs `true` only if all parentheses in the string are properly balanced
 * - To be properly balanced, parentheses must have matching open and close pairs `(` and `)`
 * 
 * Implicit requirements
 * - There can be multiple paired parentheses
 * - If there are no parentheses, output `true`
 * - Parentheses MUST start with `(` and end with `)` to be considered properly balanced
 * - Matching pairs of parentheses are multiples of 2
 * 
 * Questions
 * - Do the parentheses need to start with an open and end with close to be considered a properly balanced pair?
 * 
 * Examples and Test Cases
 * console.log(isBalanced("What (is) this?") === true);
 * console.log(isBalanced("What is) this?") === false);
 * console.log(isBalanced("What (is this?") === false);
 * console.log(isBalanced("((What) (is this))?") === true);
 * console.log(isBalanced("((What)) (is this))?") === false);
 * console.log(isBalanced("Hey!") === true);
 * console.log(isBalanced(")Hey!(") === false);
 * console.log(isBalanced("What ((is))) up(") === false);
 * 
 * What (is) this?
 * Matching pairs are in multiples of two. Use this to help keep track of balanced parenthesis.
 * 
 * Data Structure
 * - An array for stacking the balanced pairs
 * 
 * Algorithm
 * 1. Define an empty array variable to store the stack of balanced pairs
 * 2. Iterate over characters in the string
 * 3. If the current character is `(` add it to the stack
 * 4. Else if the current character is `)`
 *  - If the stack is empty return false
 * 5. Remove the `(` from the stack 
 * 6. Repeat 3-5 until there are no more elements in the string
 * 7. Return `true` if the stack length is 0, `false` otherwise
 * 
 */

function isBalanced(str) {
  let stack = [];

  for (let char of str) {
    if (char === '(') {
      stack.push(char);
    } else if (char === ')') {
      if (stack.length === 0) {
        // There's a closing parenthesis without a matching opening parenthesis
        return false;
      }
      stack.pop(); // Remove the matching opening parenthesis from the stack
    }
  }

  // If the stack is empty, all parentheses were properly paired
  return stack.length === 0;
}

console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);

/**
 * Further Exploration
 * 
 * Modify the function to check for balanced pairs of
 * - square brackets
 * - curly brackets
 * - quotation marks (single and double)
 * 
 * Algorithm
 * 1. Declare a variable for opening pairs
 * 2. Declare a variable for closing pairs
 * 3. During iteration, opening pair will be stored in the stack
 * 4. The stack then needs to be checked for a matching closing pair
 * 
 */

function isBalancedExtra(str) {
  let stack = [];
  let pairs = {
    '(': ')',
    '[': ']',
    '{': '}',
    '"': '"',
    "'": "'",
  };

  for (let char of str) {
    if (Object.keys(pairs).includes(char)) {
      if (stack.length > 0 && char === stack[stack.length - 1]) {
        stack.pop();
      } else {
        stack.push(pairs[char]);
      }
    } else if (Object.values(pairs).includes(char)) {
      if (stack.length === 0 || char !== stack.pop()) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

console.log(isBalancedExtra("What {is} this?") === true);
console.log(isBalancedExtra("What is} this?") === false);
console.log(isBalancedExtra("What {is this?") === false);
console.log(isBalancedExtra("{{What} {is this}}?") === true);
console.log(isBalancedExtra("{{What}} {is this}}?") === false);
console.log(isBalancedExtra("Hey!") === true);
console.log(isBalancedExtra("}Hey!{") === false);
console.log(isBalancedExtra("What {{is}}} up{") === false);

console.log(isBalancedExtra("What 'is' this?") === true);
console.log(isBalancedExtra("What is' this?") === false);
console.log(isBalancedExtra("What 'is this?") === false);
console.log(isBalancedExtra("''What' 'is this'?") === true);
console.log(isBalancedExtra("''What'' 'is this'?") === false);
console.log(isBalancedExtra("Hey!") === true);
console.log(isBalancedExtra("'Hey!'") === true);
console.log(isBalancedExtra("What ''is'' up'") === false);

console.log(isBalancedExtra('What "is" this?') === true);
console.log(isBalancedExtra('What is" this?') === false);
console.log(isBalancedExtra('What "is this?') === false);
console.log(isBalancedExtra('""What" "is this"?') === true);
console.log(isBalancedExtra('""What"" "is this"?') === false);
console.log(isBalancedExtra("Hey!") === true);
console.log(isBalancedExtra('"Hey!"') === true);
console.log(isBalancedExtra('What ""is"" up"') === false);