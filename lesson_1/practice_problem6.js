// How does Array.prototype.fill work? Is it destructive? How can we find out?

let arr = [1, 2, 3, 4, 5]
arr.fill(1, 1, 5);

/**
 * Solution:
 * 
 * Array.prototype.fill replaces all elements in an array to a static value, from a start
 * index (default 0) to an end index (default array.length). It returns the modified array.
 * 
 * The fill method in the code above looks to replace all elements in the array with the number 1
 * starting from index 1 all the way to the end of the array since we use 5 as the end value. The
 * array we get is [1, 1, 1, 1, 1]
 * 
 * Yes, this method is destructive as it modifies all elements in the array.
 * 
 * We can find this out by using MDN web docs and testing the code in the console. We first need
 * to check the original array and see if it reflects the changes made after calling the fill method.
 * 
 */