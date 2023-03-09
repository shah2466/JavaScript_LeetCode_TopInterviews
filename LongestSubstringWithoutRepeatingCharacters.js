/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function (s) {
  let longestSubstringLength = 0;
  let currentSubstring = "";

  for (let i = 0; i < s.length; i++) {
    let char = s.charAt(i); //char at current index
    index = currentSubstring.indexOf(char); //index of the char at currentSubstring when the repitition is found.

    if (currentSubstring.includes(char)) {
      currentSubstring = currentSubstring.substring(index + 1) + char; //(index +1) starts the currentString from the character next to the char till the end of the currentString
    } else {
      currentSubstring += char;
      longestSubstringLength = Math.max(
        longestSubstringLength,
        currentSubstring.length
      );
    }
  }

  return longestSubstringLength;
};

console.log(lengthOfLongestSubstring("  "));

/*
Given a string s, find the length of the longest 
substring without repeating characters.

 Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"//add i nd i+1, if duplicate, take the length, reset the string and continue. 
//next time you reset, compare the length with the previous. Update the prev length
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 

Constraints:

0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.
*/
