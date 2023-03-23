/**
 * You can assign multiple objects as a constructor's prototype in JavaScript to acheive multiple inheritance.
 * Prototype-based JavaScript does not support multiple inheritance in the same way that class-based languages like C++ or Python do.
 * However, you can achieve similar functionality using a technique called "mixins".
 * In JavaScript, an object's prototype can be set to another object, which means that any properties or methods defined on the prototype object will be
 * available to the new object. To create a mixin, you can define an object with the properties and methods that you want to add to another object, and then
 * set that object as the prototype of the target object. This will allow the target object to inherit the properties and methods from the mixin object.
 */

/*
Mixins can be useful in situations where you want to add functionality to multiple objects or classes without having to duplicate code. 
They can also help you achieve greater code modularity and make your code more reusable. 
However, it's important to use mixins judiciously, as they can also make your code more complex and harder to understand if used improperly.
*/
//Here's an example of using mixins to achieve multiple inheritance in JavaScript:

// Define a mixin object with some properties and methods
const myMixin = {
  foo() {
    console.log("foo");
  },
  bar() {
    console.log("bar");
  },
};

// Define a constructor function for an object
function MyClass() {
  // ...
}

// Set the mixin object as the prototype of the MyClass prototype
Object.setPrototypeOf(MyClass.prototype, myMixin);

// Create an instance of MyClass
const myObj = new MyClass();

// Call a method from the mixin object
myObj.foo(); // logs "foo"
//In this example, myMixin is a mixin object that defines two methods, foo and bar. MyClass is a constructor function for an object.
//By setting the prototype of MyClass.prototype to myMixin, any instances of MyClass will inherit the properties and methods defined on myMixin.
//This allows us to call the foo method on myObj, even though foo was defined on myMixin rather than on MyClass.
