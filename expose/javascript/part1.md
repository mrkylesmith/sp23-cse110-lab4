# Part 1 Answers
1. values added:  20
2. final result:  20
3. values added:  20
4. Line 13 will result in an error this time, since the variable `result` was declared with `let` variable type, which has block scope and is only accessible within the block it is declared. Therefore when it is accessed on line 13, this will result in an ReferenceError, saying that the variable is not defined.
5. Line 7 will result in an TypeError, since the variable `result` has already been declared as a `const` variable type and it was initialized with a value 0 when it was declared on line 5, therefore it cannot be reassigned a value on line 7.  
6. Line 13 is not printed, since line 7 results in an error, for the same reason mentioned above for question 5. 