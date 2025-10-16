/* Normal functions have a special hidden object called arguments

It automatically collects all arguments passed to the function.

 It doesn’t matter how many parameters are declared (a, b in your example).*/

// function normalFunc(a, b) {
//   console.log("a:", a);
//   console.log("b:", b);
//   console.log("arguments:", arguments);
// }

// normalFunc(1, 2, 3);


/* Output:

a: 1
b: 2
arguments: [Arguments] { '0': 1, '1': 2, '2': 3 } */


/* 👉 Even though the function was written with only a and b, the arguments object still contains all 3 values.

Why does this happen?

In JavaScript, you can pass more (or fewer) arguments than declared.

The declared parameters (a, b) just pick values in order.

The arguments object keeps track of everything.

So in this case:

a = 1

b = 2

arguments = { 0: 1, 1: 2, 2: 3 }

The extra argument (3) is ignored by the parameter list, but still accessible through arguments.

Limitation in Arrow Functions */

// Arrow functions do not have arguments:

// const arrowFunc = (a, b) => {
//   console.log(arguments); // ❌ Error
// };
// arrowFunc(1, 2, 3);


//If you want the same behavior in arrow functions, you must use rest parameters:
/**
 * 
 Rest parameters (...) allow a function to collect all remaining arguments into a real array.
 👉 All arguments passed get bundled into the array args.
 ...rest gathers leftover arguments into a real array.
Easier to use than arguments (since it’s a true array).
Always must be the last parameter in a function.
Rest parameters = handle functions with unknown number of arguments.*************
 */

// const arrowFunc = (...args) => {
//   console.log(args); // ✅ [1, 2, 3]
// };
// arrowFunc(1, 2, 3);


function sum(...nums) {
  return nums.reduce((a, b) => a + b, 0);
}
console.log(sum(1,2,3,4,5));

/*Summary:

Normal functions always have an arguments object with everything passed in.

Declared parameters just pick from it in order.

Extra arguments go unused in the parameter list but are still accessible via arguments.

Arrow functions don’t have arguments, but you can use ...args.

✅ Quick summary:

...rest gathers leftover arguments into a real array.

Easier to use than arguments (since it’s a true array).

Always must be the last parameter in a function.

Different from spread, which unpacks arrays.*/