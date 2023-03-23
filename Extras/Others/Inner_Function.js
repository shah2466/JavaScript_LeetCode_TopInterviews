//JavaScript function declarations are allowed inside other functions.
//An important detail of nested functions in JavaScript is that they can access variables in their parent function's scope (happens because of CLOSURE):
function parentFunc() {
  const a = 1; //nestedFunc can use this

  function nestedFunc() {
    const b = 4; // parentFunc can't use this
    return a + b;
  }
  return nestedFunc(); // 5
}

console.log(parentFunc());
/**This provides a great deal of utility in writing more maintainable code. If a called function relies on one or two other functions that are not useful
 * to any other part of your code, you can nest those utility functions inside it. This keeps the number of functions that are in the global scope down.
 *
 * When writing complex code, it is often tempting to use global variables to share values between multiple functions, which leads to code that is hard to maintain.
 * Nested functions can share variables in their parent, so you can use that mechanism to couple functions together without polluting your global namespace.
 * */
