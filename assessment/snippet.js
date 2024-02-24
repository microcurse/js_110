let myWords = ['Hello', 'Goodbye'];
let myOtherWords = myWords;
myWords = ['Hi', 'Bye'];

console.log(myWords);
console.log(myOtherWords);

// What will be logged to the console why?

/*
  A variable named myWords is declared on line 1 is initialized to a reference to an array containing 2 elements which are the strings 'Hello' and 'Goodbye'. Another variable named myOtherWords is declared on line 2 and initialized to the value of the variable myWords. This, we know, is the reference to an array assigned to myWords. On line 3, the myWords variable is reassigned to reference a new array containing two elements which are the strings 'Hi' and 'Bye'. On line 5 we see the console log method call which is passed an argument of the value of variable myWords. Because myWords was reassigned on line 3, console.log outputs the array ['Hi', 'Bye'] to the console. The console.log call on line 6 outputs the array ['Hello', 'Goodybe'] to the console because the original pointer assigned to myWords is still assigned to the variable myOtherWords, which is passed as an argument to the console.log call.

  The concept demonstrated is variables as pointers.
*/