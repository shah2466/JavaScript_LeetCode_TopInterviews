/*
The factorial of a non-negative integer n, denoted by n!, is the product of all positive integers up to and including n. It includes 0.
Therefore, by definition, 1! is equal to 1, since it is the product of all positive integers up to and including 1.
Similarly, 0! is defined as the product of all positive integers up to and including 0, which is only 1 (since there are no positive integers less than or equal to 0), 
so 0! is also equal to 1.
*/

function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
console.log(factorial(4));

//the above code for factorial of '4' is same as the code below.
// function factorial(n) {
//   if (n === 0) {
//     return 1;
//   } else {
//     return n * (n - 1) * (n - 2) * (n - 3) * (n - 4); //here n-4 will give 0, so the output is '0' but in the above code, when n-4 = 0, the code if(n===0) will execute and return 1.
//   }
// }
// console.log(factorial(4));

/*
Recursion is a powerful programming technique in which a function calls itself repeatedly until it reaches a base case that triggers the function to stop calling itself.
In JavaScript, recursion can be used to solve problems that have a recursive structure, such as traversing trees, searching through linked lists, and many 
other algorithms. Here's a basic example of a recursive function in JavaScript that computes the factorial of a number:

function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n-1);
  }
}
In this example, the factorial function takes an argument n and checks if it's equal to 0. If it is, it returns 1 (the base case). If n is not 0, 
it recursively calls itself with n-1 as the argument, and multiplies the result of that call by n.
When you call factorial(4), for example, the function calls itself four times:

factorial(4)
  factorial(3)
    factorial(2)
      factorial(1)
        factorial(0)
At this point, the base case is triggered and the function starts returning values back up the call stack:

factorial(0) returns 1 //factorial(0)
factorial(1) returns 1 * 1 = 1 //1* factorial(0)
factorial(2) returns 2 * 1 = 2 //2*factorial(2-1)
factorial(3) returns 3 * 2 = 6 //3*factorial(3-1)
factorial(4) returns 4 * 6 = 24 //4*factorial(4-1). Factorial(3) = 6
And the final result is 24, the factorial of 4.

It's important to note that recursive functions can be very powerful, but they can also be inefficient if not implemented properly. 
It's important to carefully consider the base case and ensure that the function is not calling itself excessively or unnecessarily. */
