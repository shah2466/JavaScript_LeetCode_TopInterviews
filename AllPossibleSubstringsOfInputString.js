//To generate all possible substrings for an input string using a linear algorithm in JavaScript, you can use the following approach:
/**
 * Start by initializing an empty array to store the substrings.
 * Loop through the input string using a 'sliding window' approach.
 * Start with a window of size 1 and increment the size of the window by 1 in each iteration.
 * For each window size, loop through the input string and extract the substring of that size starting at each position.
 * Append each substring to the array.
 * Once the loop through all window sizes and positions is finished, return the array of all substrings.
 * */

/**
 * 
str.substring(indexStart, indexEnd)
indexStart: The index of the first character to include in the returned substring.
indexEnd Optional: The index of the first character to exclude from the returned substring.
 */

var findAllSubstrings = function (str) {
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
};
console.log(findAllSubstrings("abdef"));
