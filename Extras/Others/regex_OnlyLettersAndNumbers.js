function onlyLettersAndNumbers(str) {
  return /^[A-Za-z0-9]*$/.test(str);
}
const str1 = "has special characters !@#$%^&";

console.log(onlyLettersAndNumbers(str1)); // true
