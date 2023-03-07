/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

/**
 * Using Return stmt inside the 'if'
 */

var twoSum = function (nums, target) {
  let returnArray = [];
  arrayLength = nums.length;

  for (let i = 0; i < arrayLength; i++) {
    for (let j = 0; j < arrayLength; j++) {
      if ((nums[i] + nums[j] == target) & (i != j)) {
        returnArray.push(i);
        returnArray.push(j);
        return returnArray; //return statements ends the function execution.
      }
    }
  }
};
resulting_array = twoSum([2, 7, 11, 15], 9);
console.log(resulting_array);

/**
 * WIthout Using Return stmt inside the 'if'
 */
// var twoSum = function (nums, target) {
//   let returnArray = [];
//   arrayLength = nums.length;

//   for (let i = 0; i < arrayLength; i++) {
//     for (let j = 0; j < arrayLength; j++) {
//       if ((nums[i] + nums[j] == target) & (i != j)) {
//         returnArray.push(i);
//         returnArray.push(j);
//         break;
//         //return returnArray; //return statements ends the function execution.
//       }
//     }
//     if (returnArray.length == 2) {
//       break;
//     }
//   }
//   return returnArray;
// };
// resulting_array = twoSum([11, 15, 2, 10, 33, 7], 17);
// console.log(resulting_array);

/**
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
 

Constraints:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.
 */
