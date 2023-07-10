// What is the callback's return value in the following code? Also, what is the return value of
// every in this code?

[1, 2, 3].every(num => {
  return num = num * 2;
});

/**
 * Solution:
 * 
 * The callback's return value in the following code is a reassignment of the currently iterated
 * element's value to itself multiplied by 2. So each iteration, the return value of the callback
 * would be 2, 4, 6.
 * 
 * The return value of the every method call in this code is true. This is because the every method
 * looks for the truthiness of the callback's return value and returns true only if the callback's
 * return value in every iteration is truthy. Since the return value of the callback are truthy 
 * values, the every method returns true.
 * 
 */