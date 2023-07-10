// The following code differs slightly from the above code. What is the return value 
// of map in this case? Why?

[1, 2, 3].map(num => num * num);

/**
 * Solution:
 * 
 * In this case, the callback function for map is written in one line. Single line arrow 
 * function expressions do not require the explicit return keyword or curly braces. 
 * Therefore, map returns the array [1, 4, 9]
 * 
 */