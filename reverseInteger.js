/**
 * Given a signed 32-bit integer x, return x with its digits reversed.
 * If reversing x causes the value to go outside the signed 32-bit integer range [-2^31, 2^31 - 1], then return 0.
 * A signed 32-bit integer has a range of -2,147,483,648 to 2,147,483,647.
 * Constraints: -231 <= x <= 231 - 1
 * -2147483648 <= x <= 2147483647
 */
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let reversedString = "";
  let stringValue = x.toString(); //use x.toString() to change number to String
  //console.log("stringValue " + stringValue);
  for (let i = stringValue.length - 1; i >= 0; i--) {
    reversedString = reversedString + stringValue[i]; // //use parseInt("") to change string to integer
  }
  //console.log("reversedString " + reversedString);
  let reversedInt = parseInt(reversedString);
  //console.log("reversedInt " + reversedInt);

  if (x < 0) {
    reversedInt = reversedInt * -1;
  }

  if ((reversedInt >= -2147483648) & (reversedInt <= 2147483647)) {
    return reversedInt;
  } else {
    return 0;
  }
};
console.log(reverse(153423646));
