// What is the return value of map in the following code? Why?

['ant', 'bear'].map(elem => {
  if (elem.length > 3) {
    return elem;
  }
});

/**
 * Solution:
 * 
 * The return value of map in the following code is [undefined, 'bear'].
 * 
 * This is because the callback defines an if statement that only returns the given element
 * if that element's length is greater than 3. When it checks the first element 'ant', it does not
 * pass the if condition. Thus it implicitly returns undefined.
 * 
 * 
 */