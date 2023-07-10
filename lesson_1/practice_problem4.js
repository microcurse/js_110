// What is the return value of the following statement? Why?
['ant', 'bear', 'caterpillar'].pop().length;

/**
 * Solution:
 * 
 * The pop Array method destructively removes the last element from the array it's called on 
 * and returns it.Since we're checking the length property of the return value of the pop 
 * method, we get the length of the string 'caterpillar', which is 11.
 * 
 */