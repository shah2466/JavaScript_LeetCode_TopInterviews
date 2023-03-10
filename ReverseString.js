//One way to do it is to split the String into Array. Usre array.reverse() to reverse the array and then array.join() to turn the array into a String
function reverseString1(str) {
  return str.split("").reverse().join("");
}

function reverseString2(str) {
  let reversedString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedString += str[i];
  }
  return reversedString;
}
console.log(reverseString1("abcd"));
console.log(reverseString2("abcd"));
