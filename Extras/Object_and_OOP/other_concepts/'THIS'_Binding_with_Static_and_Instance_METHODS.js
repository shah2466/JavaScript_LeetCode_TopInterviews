/**
 * When a static or instance method is called without a value for 'this', such as by assigning the method to a variable and
 * then calling it, the 'this' value will be 'undefined' inside the method.
 * In JavaScript, the value of 'this' is determined at RUNTIME, based on the way the function is invoked.
 * If a function is called as a STANDALONE function like functionName(), without a context to an object, like obj.functionName(), then the context of 'this' is lost.
 */

class Animal {
  //instannce method
  speak() {
    return this;
  }
  //static method
  static eat() {
    return this;
  }
}

const obj = new Animal();
console.log(obj.speak()); // Animal {} //it is an Animal object
const speakFunction = obj.speak; //assigning function to a variable
console.log(speakFunction); //[Function: speak] --- a regular function
console.log(speakFunction()); // undefined
//'speakFunction' is a normal function, If it is a normal function, then 'this' refers to global object (window in case of browser)

console.log(Animal.eat()); // [class Animal]
const eatFunction = Animal.eat; //assigning function to a variable
console.log(eatFunction); //[Function: eat] -- a regular function
console.log(eatFunction()); // undefined

/**
When a method is called using a variable reference, such as speakFunction() or eatFunction(), the context of the method is lost because the 
value of 'this' inside a function depends on how the function is called. In JavaScript, the value of this is determined at RUNTIME, based on the way 
the function is invoked. Here, speakFunction() or eatFunction() function is NOT called as a method of an object, but as a STANDALONE function.
To avoid losing the context of the method, you can use the bind() method to explicitly bind the this value of the method to a specific object.
For example, 
const eatFunction = Animal.eat.bind(Animal);
In this code, we use the bind() method to create a new function that is bound to the Animal object. 
The bind() method returns a new function with the 'this' value set to the object passed as an argument. 
When we call eatFunction() now, it logs the correct value of this.
 */

//Use 'bind()' to not lose context of 'this'. bind() method creates a new function that is bound to the specified class/object (passed in the argument)
// class Animal {
//   //instannce method
//   speak() {
//     return this;
//   }
//   //static method
//   static eat() {
//     return this;
//   }
// }

// const obj = new Animal();
// const speakFunction = obj.speak.bind(obj); //assigning function to a variable and binding the 'speakFunction' to 'speak' function
// console.log(speakFunction); //[Function: bound speak] -->  'speakFunction' is binded with 'speak' function
// console.log(speakFunction()); // Animal {}

// console.log(Animal.eat()); // [class Animal]
// const eatFunction = Animal.eat.bind(Animal); //assigning function to a variable and binding the 'eatFunction' to 'eat' function
// console.log(eatFunction); //[Function: bound eat] --> 'eatFunction' is binded with 'eat' function
// console.log(eatFunction()); // [class Animal]

//If we rewrite the above using traditional function-based syntax in 'non–strict mode', then this method calls are automatically bound to globalThis.
//In strict mode, the value of 'this' remains as 'undefined'.
// ("use strict");
// function Animal() {}

// Animal.prototype.speak = function () {
//   return this;
// };

// Animal.eat = function () {
//   return this;
// };

// const obj = new Animal();
// const speak = obj.speak;
// console.log(speak); //[Function (anonymous)]
// console.log(speak()); // global object (in non–strict mode). The value will be 'undefined' in strict mode.

// const eat = Animal.eat;
// console.log(eat); //[Function (anonymous)]
// console.log(eat()); // global object (in non-strict mode). The value will be 'undefined' in strict mode.
