// What is the return value of the filter method call below? Why?
[1, 2, 3].filter(num => 'hi');

/**
 * Solution: 
 * 
 * The return value of the filter method call is the array [1, 2, 3].
 * This is because filter examines the return value of the callback on each iteration
 * for truthiness. Since the callback's return value is the string 'hi', we know that 
 * it is not one of the 6 falsy values. Thus, it evalutes to true on each iteration and 
 * returns the array [1, 2, 3].
 * filter will return a new array containing all of the elements in the original array.
 * 
 */




