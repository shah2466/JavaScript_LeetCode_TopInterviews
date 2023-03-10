/**
 * Given a signed 32-bit integer x, return x with its digits reversed.
 * If reversing x causes the value to go outside the signed 32-bit integer range [-2^31, 2^31 - 1], then return 0.
 * A signed 32-bit integer has a range of -2,147,483,648 to 2,147,483,647.
 * Constraints: -231 <= x <= 231 - 1
 */
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let reversedString = "";
  let stringValue = "";
  stringValue = toString(x); //use toString(int) to change to integer
  console.log(stringValue);
  console.log(stringValue.length);
  for (let i = stringValue.length - 1; i >= 0; i--) {
    //use parseInt("") to change string to integer
    reversedString = reversedString + x[i];
  }
  let reversedInt = parseInt(reversedString);

  if ((-2 ^ 31) <= reversedInt || reversedInt >= (2 ^ (31 - 1))) {
    return 0;
  } else {
    return reversedInt;
  }
};

console.log(reverse(123));
