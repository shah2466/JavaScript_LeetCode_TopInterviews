//is the given String a Palindrome?

// compare the string to a reverseString
function isPalindrome1(str) {
  let reversedString = str.split("").reverse().join("");
  if (str == reversedString) return true;
  else return false;
}

//first reverse the string and compare char by char
function isPalindrome2(str) {}

console.log(isPalindrome1("aca")); //
console.log(isPalindrome2("aacabdkacaa")); //
