// There are a number of other parameter syntaxes available. For example, the rest parameter syntax allows collecting all the extra parameters passed by the
// caller into an array,
// similar to Python's *args. (Since JS doesn't have named parameters on the language level, there's no **kwargs.)

function avg(...args) {
  let sum = 0;
  for (const item of args) {
    sum += item;
  }
  return sum / args.length;
}

avg(2, 3, 4, 5); // 3.5

// In the above code, the variable args holds all the values that were passed into the function.

// The rest parameter will store all arguments after where it's declared, but not before. In other words, function avg(firstValue, ...args)
// will store the first value passed into the function in the firstValue variable and the remaining arguments in args.
