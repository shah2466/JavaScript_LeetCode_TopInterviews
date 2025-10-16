// 🔹 2. Rest vs Arguments Object

// arguments (from normal functions) is array-like (you can loop it, but it’s not a real array).

// rest parameters are a true array, so you can use array methods (map, filter, reduce, etc.).

// Example:

function normalFunc(a, b) {
  console.log(arguments.map); // ❌ undefined (not a real array)
}

function restFunc(...args) {
  console.log(args.map(x => x * 2)); // ✅ works, because args is an array
}

restFunc(1, 2, 3); // [2, 4, 6]

// 🔹 3. Mixing Rest with Normal Parameters

// You can use rest parameters alongside normal ones — but rest must be last:

function greet(greeting, ...names) {
  console.log(greeting, names);
}

greet("Hello", "Alice", "Bob", "Charlie");


//Output:

// Hello [ 'Alice', 'Bob', 'Charlie' ]