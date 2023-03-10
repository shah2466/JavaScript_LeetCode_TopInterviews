/**
 * @param {string} s
 * @return {string}
 */

/*
Constraints:

1 <= s.length <= 1000
s consist of only digits and English letters.
*/

var longestPalindrome = function (s) {
  //function to check wheter the input string contains only english letters and digits.
  function onlyLettersAndNumbers(str) {
    return /^[A-Za-z0-9]*$/.test(str);
  }
  //function to check whether the length of input strings is within the limit.
  function isStringLengthUnderTheLimit(str) {
    if (1 <= s.length <= 1000) return true;
  }
  //function to check whether a given string is a Palindrome:
  function isPalindrome(str) {
    let reversedString = str.split("").reverse().join("");
    if (str == reversedString) return true;
    else return false;
  }
  //function to find all possible substrings for a given string:
  function findAllSubstrings(str) {
    let allSubstrings = [];
    let currentSubstr = "";
    for (let windowSize = 1; windowSize <= str.length; windowSize++) {
      for (let i = 0; i < str.length - windowSize + 1; i++) {
        //str.length - windowSize + 1 = ensures we get the final substring that is equal to the input string.
        currentSubstr = str.substring(i, i + windowSize);
        allSubstrings.push(currentSubstr);
      }
    }
    return allSubstrings;
  }
  //if the constrainsts are met:
  if (isStringLengthUnderTheLimit(s) & onlyLettersAndNumbers(s)) {
    let longestPalindrome = "";
    let currentString = "";
    if (s.length == 1) return s;
    else if (s.length == 2) {
      if (isPalindrome(s) == true) return s;
      else return s[0];
    }
    //generate all possible string combinations and check if they are palindrome. If the string is a palindrome, check against the current longestPalindrom
    //to see if the string/new palindrome is longer than the current longestPalindrom. If so, update the current longestPalindrome to the new string that
    //is a palindrome. If the String is not palindrome, CONTINUE. If the length of the current longestPalindrom is equal to the length of the input string, BREAK.
    else {
      let allSubstrings = findAllSubstrings(s); //generate all possible string combinations
      for (const currentString of allSubstrings) {
        if (
          (isPalindrome(currentString) == true) &
          (currentString.length > longestPalindrome.length)
        ) {
          longestPalindrome = currentString;
        } else continue;
      }

      if (longestPalindrome.length == 0) {
        return s[0];
      } else return longestPalindrome;
    }
  } else return console.log("String size exceeded");
};

console.log(
  longestPalindrome(
    "zudfweormatjycujjirzjpyrmaxurectxrtqedmmgergwdvjmjtstdhcihacqnothgttgqfywcpgnuvwglvfiuxteopoyizgehkwuvvkqxbnufkcbodlhdmbqyghkojrgokpwdhtdrwmvdegwycecrgjvuexlguayzcammupgeskrvpthrmwqaqsdcgycdupykppiyhwzwcplivjnnvwhqkkxildtyjltklcokcrgqnnwzzeuqioyahqpuskkpbxhvzvqyhlegmoviogzwuiqahiouhnecjwysmtarjjdjqdrkljawzasriouuiqkcwwqsxifbndjmyprdozhwaoibpqrthpcjphgsfbeqrqqoqiqqdicvybzxhklehzzapbvcyleljawowluqgxxwlrymzojshlwkmzwpixgfjljkmwdtjeabgyrpbqyyykmoaqdambpkyyvukalbrzoyoufjqeftniddsfqnilxlplselqatdgjziphvrbokofvuerpsvqmzakbyzxtxvyanvjpfyvyiivqusfrsufjanmfibgrkwtiuoykiavpbqeyfsuteuxxjiyxvlvgmehycdvxdorpepmsinvmyzeqeiikajopqedyopirmhymozernxzaueljjrhcsofwyddkpnvcvzixdjknikyhzmstvbducjcoyoeoaqruuewclzqqqxzpgykrkygxnmlsrjudoaejxkipkgmcoqtxhelvsizgdwdyjwuumazxfstoaxeqqxoqezakdqjwpkrbldpcbbxexquqrznavcrprnydufsidakvrpuzgfisdxreldbqfizngtrilnbqboxwmwienlkmmiuifrvytukcqcpeqdwwucymgvyrektsnfijdcdoawbcwkkjkqwzffnuqituihjaklvthulmcjrhqcyzvekzqlxgddjoir"
  )
); //

// Given a string s, return the longest
// palindromic

// substring
//  in s.

// Example 1:

// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.
// Example 2:

// Input: s = "cbbd"
// Output: "bb"

// Constraints:

// 1 <= s.length <= 1000
// s consist of only digits and English letters.

// To find the longest palindrome substring in a string, you can use the following algorithm:

// Define a function to check whether a given substring is a palindrome or not.

// This function should take a string as input and return True if the string is a palindrome, and False otherwise.
// A palindrome is a string that reads the same backward as forward.
// Iterate through all possible substrings of the input string.

// You can use two nested loops to generate all possible substrings.
// For each substring, check whether it is a palindrome using the function defined in step 1.
// Keep track of the longest palindrome substring found so far.

// You can define a variable to store the longest palindrome substring found so far, and update it whenever a longer palindrome substring is found.
// Return the longest palindrome substring.
