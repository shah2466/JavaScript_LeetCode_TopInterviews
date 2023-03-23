//Arrays come with a plethora of array methods. Many of them would iterate the array —
//for example, map() would apply a callback to every array element, and return a new array:

const babies = ["dog", "cat", "hen"].map((name) => `baby ${name}`);
// babies = ['baby dog', 'baby cat', 'baby hen']
