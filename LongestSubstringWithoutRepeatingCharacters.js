/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function (s) {
  let initialSubstring = "";
  let finalSubstring = "";

  //character next to each other, no duplicate. Anytime u find a repeating character, reset and note down the length till then. start over until you reach the end of the string.
  //add i nd i+1, if duplicate, take the length, reset the string and continue.
  //next time you reset, compare the length with the previous substring. Update the prev length
  for (let i = 0; i < s.length; i++) {
    let a = s[i];
    if (i < s.length - 1) {
      if (initialSubstring.includes(s[i]) == false) {
        initialSubstring = initialSubstring.concat(s[i]);
        continue;
      } else if (initialSubstring.includes(s[i])) {
        if (initialSubstring.length > finalSubstring.length) {
          finalSubstring = initialSubstring;
          initialSubstring = "";
          initialSubstring = initialSubstring.concat(s[i]);
          continue;
        }
      }
    } else if ((i = s.length - 1)) {
      if (initialSubstring.length > finalSubstring.length) {
        finalSubstring = initialSubstring;
      }
    }
  }
  return finalSubstring.length;
};

console.log(lengthOfLongestSubstring("pwwkew"));

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
