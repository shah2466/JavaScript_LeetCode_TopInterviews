//There's also the default parameter syntax, which allows omitted parameters (or those passed as undefined) to have a default value.

function sum(firstValue, secondValue, thirdValue = 5) {
  return firstValue + secondValue + thirdValue;
}

//dont provide the third argument. It will use the default value of '5'
console.log(sum(1, 2)); // 8, instead of NaN --
