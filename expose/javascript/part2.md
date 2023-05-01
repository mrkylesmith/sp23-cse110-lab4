# Part 2 Answers
1. Line 12 will print 3, since the value of the variable `i` is 3 when the loop exits (due to loop condition i < prices.length), and since the variable `i` is declared with variable type `var` it has function scope and is accessible even after the loop ends, so the value of i will be printed, without any errors. 
2. Line 13 will print `150`, since the variable `discountedPrice` is declared as type `var` is has function scope and is accessible outside the for loop scope.  Since the value of `discountedPrice` is calculated as 300 * (1- 0.5) during the last iteration of the for loop, then 150 will be the value that `console.log(discountedPrice);` will print.
3. Line 14 will print the value calculated for line 8 during the last iteration of the for loop, which is : `Math.round(discountedPrice * 100)/ 100;`.  Since we know `discountedPrice` is 150 during the last iteration of the for loop, then the value 150 is stored in the variable `finalPrice`.  Since `finalPrice` was declared with the `var` variable type, it is accessible outside the for loop scope, so there is no error, and `150` is printed by line 14.
4. The function will return an array with the following values: [ 50, 100, 150 ], which represents the final prices after the discount has been applied. 
5. Line 12 will result in a ReferenceError saying that the variable `i` is not defined, since the variable `i` has been declared with the `let` type, it has block scope and is only accessible within the for loop block.
6. Line 13 will result in a ReferenceError saying that the variable `discountedPrice` is not defined, since the variable `discountedPrice` is declared inside the for loop with the `let` type, it has block scope that is accessible only within the for loop.
7. Line 14 will print the value `150`, which is the value of the variable `finalPrice` during the last iteration of the for loop.  Since the variable `finalPrice` is declared with `let` type outside of the for loop, it has the block scope of the entire function and can be accessed anywhere inside the function.
8. The function will return an array with values [ 50, 100, 150 ], which represents the final prices after the discount has been applied.  Since `discounted` is declared as `let` type at the top of the function, it has the block scope of the entire function and can be accessed anywhere in the function, and returned in this case. 
9. Line 11 will result in a ReferenceError saying that `i` is not defined, since the variable `i` was defined with the `let` type, giving it block scope only within the for loop, and not within the scope of line 11.
10. Line 12 will print the value `3` to the console because the variable `length` was defined at the top of the function with a `const` variable type and a value of 3, so it has block scope of the entire function and does not change its value.
11.  The function returns the array with values [ 50, 100, 150 ], which represents the final prices after the discount has been applied.  Since the array variable `discounted` is declared as `const` at the top of the function, it has block scope of the entire function and can be returned from the function without any errors.
12. 
    A. student.name
    B. student['Grad Year']
    C. student.greeting() 
    D. student['Favorite Teacher'].name
    E. student.courseLoad[0] 

13. Arithmetic 
    A. Output: '32' Explaination: Since integer 2 maps to string '2' it just becomes a string concatination operation.
    B. Output: 1 Explaination: The string '3' gets converted to an integer and then integer subtraction is performed (3-2=1)
    C. Output: 3 Explaination: Since we are trying to add an integer value (3) to `null`, the `null` gets converted to number 0, and then 3+0 = 3.
    D. Output: '3null' Explaination: Since we are performing string concatination with the + operator (since '3' is a string), then null will get converted to a string ('null') and the two strings will get concatinated.
    E. Output: 4 Explaination: Since 3 is an integer, the true will get converted to its numeric form, which is 1, and the integer addition 1+3 will be performed.
    F. Output: 0 Explaination: Since no strings are given, both operands will be converted to numbers, false will be converted to 0 and `null` will also get converted to 0, therefore 0+0 will be the operation performed.
    G. Output: '3undefined' Explaination: Since the '3' is a string, the `undefined` will be converted to the string `'undefined'` and string concatination will take place. 
    H. Output: NaN Explaination: The string '3' is converted to the integer 3, and the operation 3 - NaN, will result in NaN, since this expression doesn't result in a valid integer number. 

14. Comparison
    A. Output: true Explatinion: The string '2' maps to the integer 2, and then performing the comparison of 2 > 1, results in a value of true, since 2 is in-fact greater than 1.
    B. Output: false Explaination: Since both operands are strings, string comparison is performed.  Since JavaScript uses "dictionary" (lexicographical) order for comparing strings, the '1' (first position in '12') is not greater than '2', so the boolean expression returns false.
    C. Output: true Explaination: The string '2' becomes the number 2, which makes the boolean comparison true.
    D. Output: false Explaination: The `===` operator performs equality checking without any type conversion, so the string '2' is not converted to an integer and therefore the expression is false, since the number 2 does not equal the string 2.
    E. Output: false Explaination: The boolean value `true` gets mapped to the integer value 1, and since 1 is not equal to 2, the expression is false.
    F. Output: true Explaination: The Boolean() function explicitly converts a number to a boolean value, where any position integer maps to true and 0 maps to false. Since Boolean(2) maps to true, then the result of the strict equality check true === true is true.

15. The `===` operator is called the strict equality operator and it performs an equality check without any type conversion. This is different from the regular equality operator (`==`), which performs implicit type conversion and cannot differentiate between the number 0 and the boolean value false, for example.

16. Code for this question is in the file: `part2-question16.js`

17. The function will return an array with the following values, [ 2, 4, 6 ].  The function `modifyArray` is called, passing an initial array [1, 2, 3] and a function variable argument `doSomething`.  The function `modifyArray` loops over the elements of the initial array passed as the first parameter, and each element is the parameter to a callback function.  This callback function, `doSomething` returns the number parameter multiplied by 2.  The return value of this callback function is then appended to a new array, declared within `modifyArray`.  Therefore, we can see that the function `modifyArray` will return an array, where each index `i` contains the value `i*2`. 

18. Code for this question is in the file: `part2-question18.js`

19. The output of the code is:
```
1
4
3
2
```