/**
 * When a static or instance method is called without a value for this, such as by assigning the method to a variable and
 * then calling it, the this value will be undefined inside the method
 */

class Animal {
  speak() {
    return this;
  }
  static eat() {
    return this;
  }
}

// const obj = new Animal();
// console.log(obj.speak()); // Animal {} //it is an Animal object
// const speakFunction = obj.speak;
// console.log(speak); //[Function: speak]
// console.log(speak()); // undefined //'speakFunction' is a normal function, If it is a normal function, then 'this' refers to global object (window in case of browser)

console.log(Animal.eat()); // [class Animal]
const eat = Animal.eat(); //
console.log(eat); //[class Animal]
eat(); // undefined

/**
 * In this example, we assign the 'speak' method of the 'Animal' object to a variable 'speakFunction' and call it without an object context.
 * Since 'speakFunction' is just a function and not a method of an object, the 'this' keyword inside the function refers to the
 * global object (window in the case of the browser), which does not have a 'speak' property. Therefore, the output is "undefined".
 */

//If we rewrite the above using traditional function-based syntax in non–strict mode, then this method calls are automatically bound to globalThis.
//In strict mode, the value of this remains as undefined.

function Animal() {}

Animal.prototype.speak = function () {
  return this;
};

Animal.eat = function () {
  return this;
};

const obj = new Animal();
const speak = obj.speak;
speak(); // global object (in non–strict mode)

const eat = Animal.eat;
eat(); // global object (in non-strict mode)
