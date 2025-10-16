/* Q: Given a String of Cat name with their beauty score. Print the Cat name with their average score as below:
inputString = "Jane 50, Moose 80, Randy 70, Randy 60, Jane 90"
output: " Jane 70.0, Moose 80.0, Randy 65.0"
*/


/*
 * Solution: Split the string and store cat name and score inside an Array. split the 
 * String again at " " to store the Cat name as Key and score as value inside a hashMap. Key will be string and value will be a List
 * if the Cat name already exist in the Map, then, only add the score in the List value.
 * ⚠️ Edge Case:
If the string has extra spaces, like "Jane   90", then .split(" ") will leave empty strings in between.
Use the following to split by one or more spaces string.trim().split("\\s+")
 */

const inputString = "Jane 50, Moose 80, Randy 70, Randy 60, Jane 90";
const 