/**
 * PEDAC
 * Understanding the Problem
 * Write a program that prints the longest sentence in a string based on the number of words. Sentences may end with periods (.), exclamation points (!), or question marks (?). You should treat any sequence of characters that are not spaces or sentence-ending characters as a word. Thus, -- should be counted as a word. Log the longest sentence and its word count to the console. Pay attention to the expected output, and be sure you preserve the punctuation from the end of the sentence. Note that this problem is about manipulating the proccessing strings. As such, every detail about the string matters (e.g., case, punctuation, tabs spaces, etc.).
 * 
 * Explicit requirements:
 * - Input: A collection of strings
 * - Output: A string representing the longest sentence along with an integer that represents the count of words in that sentence
 * - Sentences end with periods, exclamation points, question marks
 * - Any set of characters separated by spaces are considered words
 * - The output sentence should include the sentence ending character
 * - Case, punctuation, tabs, spaces all matter
 * - The output word count should be as follows: "The longest sentence has ${wordCount} words"
 * 
 * Implicit requirements:
 * - The sentences given are broken up into seperate strings which are then concatenated together. This should be account for.
 * - A sentence starts 2 characters after a sentence ending character, a space, and a capitalized word.
 * 
 * 
 * Questions:
 * - Do capitalized words define the start of a sentence?
 * 
 * Examples and Test Cases
 * let longText =
 *   'Four score and seven years ago our fathers brought forth on this ' +
 *   'continent a new nation, conceived in liberty, and dedicated to the ' +
 *   'proposition that all men are created equal. Now we are engaged in a ' +
 * 
 * longestSentence(longText);
 * // Four score and seven years ago our fathers brought forth on this continent a new nation,  conceived in liberty, and dedicated to the proposition that all men are created equal.
 * 
 * // The longest sentence has 30 words.
 * 
 * Data Structures
 * - Strings
 * - Arrays containing each sentence
 * 
 * Algorithm
 * - Combine the strings into a single string
 *  - The + already concatenates each string
 * - Separate each sentence into an element of an array
 *  - Use the sentence ending characters to denote the beginning and end of sentences
 * - Iterate through the array and keep count of the number of words in each sentence
 *  - Define what a word is and validate it before incrementing the word count
 * - Declare a variable to store the result
 * - Output the result
 * - Output the number of words in that sentence
 * 
 * 39 mins and counting...
 * 50 mins on the second session
 * 
 * Completed in: 1hr 29 mins 
 * 
 */

function longestSentence(str) {
  // Seperate the sentence into elements in an array
  // Use sentence ending characters to define the beginning and end of sentences
  // How do we extract parts of a string?
  // What are sentence ending characters?
  
  // Identify the beginning and end of a sentence
  // Beginning of sentence === sentenceEndingChar + ' ' + capitalized word
  // beginningOfSentence === word.includes(sentenceEndingChars) + ' ' + word[0].toUpperCase();

  
  // End of a sentence === sentenceEndingChar
  // Slice the sentence out using the beginningOfSentence and endOfSentence
  // How do I scan the large string starting from beginningOfSentence to endOfSentence?

  // Retrieve all sentences and store them in an array
  // let sentences = str.match(/(?:\s*)[^.!?]+[.!?]/g);
  let sentences = str.match(/\w.*?[.!?]/g);;
  sentences = sentences.map(sentence => sentence.trim());

  let longestSentence = sentences.sort((a, b) => b.length - a.length)[0];
  const getWords = (sentence) => {
    return sentence.split(' ');
  };

  let wordCount = getWords(longestSentence).length;

  return outputSentence(longestSentence, wordCount);
}

function outputSentence(sentence, wordCount) {
  let result = `${sentence}

The longest sentence has ${wordCount} words
  `

  return result
}

let longText =
  'Four score and seven years ago our fathers brought forth on this ' +
  'continent a new nation, conceived in liberty, and dedicated to the ' +
  'proposition that all men are created equal. Now we are engaged in a ' +
  'great civil war, testing whether that nation, or any nation so ' +
  'conceived and so dedicated, can long endure. We are met on a great ' +
  'battlefield of that war. We have come to dedicate a portion of that ' +
  'field, as a final resting place for those who here gave their lives ' +
  'that that nation might live. It is altogether fitting and proper that ' +
  'we should do this.';

let longerText = longText +
  'But, in a larger sense, we can not dedicate, we can not consecrate, ' +
  'we can not hallow this ground. The brave men, living and dead, who ' +
  'struggled here, have consecrated it, far above our poor power to add ' +
  'or detract. The world will little note, nor long remember what we say ' +
  'here but it can never forget what they did here. It is for us the ' +
  'living, rather, to be dedicated here to the unfinished work which ' +
  'they who fought here have thus far so nobly advanced. It is rather ' +
  'for us to be here dedicated to the great task remaining before us -- ' +
  'that from these honored dead we take increased devotion to that ' +
  'cause for which they gave the last full measure of devotion -- that ' +
  'we here highly resolve that these dead shall not have died in vain ' +
  '-- that this nation, under God, shall have a new birth of freedom -- ' +
  'and that government of the people, by the people, for the people, ' +
  'shall not perish from the earth.';

console.log(longestSentence(longText));
// Four score and seven years ago our fathers brought forth on this continent a new nation, conceived in liberty, and dedicated to the proposition that all men are created equal.
//
// The longest sentence has 30 words.

console.log(longestSentence(longerText));
// It is rather for us to be here dedicated to the great task remaining before us -- that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion -- that we here highly resolve that these dead shall not have died in vain -- that this nation, under God, shall have a new birth of freedom -- and that government of the people, by the people, for the people, shall not perish from the earth.
//
// The longest sentence has 86 words.

console.log(longestSentence("Where do you think you're going? What's up, Doc?"));
// Where do you think you're going?
//
// The longest sentence has 6 words.

console.log(longestSentence("To be or not to be! Is that the question?"));
// To be or not to be!
//
// The longest sentence has 6 words.