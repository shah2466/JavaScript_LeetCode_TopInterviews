function isPalindrome(str) {
  for (i = 0; i < str.length; i++) {
    if (str.charAt(i) == str.charAt(str.length - i - 1)) {
      return true;
    } else return false;
  }
}

console.log(isPalindrome("abda")); //
