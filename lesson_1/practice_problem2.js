// What is the return value of map in the following code? Why?
[1, 2, 3].map(num => {
  num * num;
});

/** 
 * Solution:
 * 
 * The return value of map will be [undefined, undefined, undefined]
 * This is because there is no explicit return keyword on line 3. If this code
 * was written in one line, we could forgo the need for an explicit return keyword and
 * curly braces.
 * 
 * map looks at the return value of the callback function to decide the elements in 
 * the returned array. Each element in the array is replaced by what the callback 
 * returns for that element. Since the code does not include an explicit return
 * keyword, undefined is the return value of the callback on each iteration.
 * 
 */
