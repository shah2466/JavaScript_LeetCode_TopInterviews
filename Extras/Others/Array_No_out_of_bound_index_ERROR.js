//Out-of-bounds indexing doesn't throw. If you query a non-existent array index, you'll get a value of undefined in return:
const a = ["dog", "cat", "hen"];
a[100] = "fox";
a["name"] = "Cat";
a["105"] = "Sam";
a["1000"] = "butterfly";
console.log(a.length); // 101
console.log(a); // ['dog', 'cat', 'hen', empty × 97, 'fox']

//Arrays can have any elements and can grow or shrink arbitrarily.
const arr = [1, "foo", true];
arr.push({});
// arr = [1, "foo", true, {}]
//Arrays can be iterated with the for loop, as you can in other C-like languages.
for (let i = 0; i < a.length; i++) {
  // Do something with a[i]
}
//Or, since arrays are iterable, you can use the for...of loop, which is synonymous to C++/Java's for (int x : arr) syntax:

for (const currentValue of a) {
  // Do something with currentValue
}
