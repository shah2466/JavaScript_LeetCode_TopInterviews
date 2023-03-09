/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let longestPalindrome = "";
  let currentPalindrome = "";
  function isPalindrom(str) {
    for (i = 0; i < str.length; i++) {
      if (str.charAt(i) == str.charAt(str.length - i - 1)) {
        return true;
      } else return false;
    }
  }

  //generate all possible palindrome

  for (i = 0; i < s.length; i++) {
    for (j = 1; j < s.length; j++) {
      currentPalindrome = currentPalindrome + s[i] + s[j];
      if (
        (isPalindrom(currentPalindrome) == true) &
        (currentPalindrome.length > longestPalindrome.length)
      ) {
        longestPalindrome = currentPalindrome;
      } else {
        continue;
      }
    }
  }
  return longestPalindrome;
};

console.log(longestPalindrome("abcba")); //

/**
 * Given a string s, return the longest 
palindromic
 
substring
 in s.

 

Example 1:

Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.
Example 2:

Input: s = "cbbd"
Output: "bb"
 

Constraints:

1 <= s.length <= 1000
s consist of only digits and English letters.
 */
/*
To find the longest palindrome substring in a string, you can use the following algorithm:

Define a function to check whether a given substring is a palindrome or not.

This function should take a string as input and return True if the string is a palindrome, and False otherwise.
A palindrome is a string that reads the same backward as forward.
Iterate through all possible substrings of the input string.

You can use two nested loops to generate all possible substrings.
For each substring, check whether it is a palindrome using the function defined in step 1.
Keep track of the longest palindrome substring found so far.

You can define a variable to store the longest palindrome substring found so far, and update it whenever a longer palindrome substring is found.
Return the longest palindrome substring. */
