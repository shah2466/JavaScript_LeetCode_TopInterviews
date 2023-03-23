/**
 * Prototypes are the mechanism by which JavaScript objects inherit features from one another.
Every object in JavaScript has a built-in property, which is called its prototype.
The prototype is itself an object, so the prototype will have its own prototype, making what's called a prototype chain. 
The chain ends when we reach a prototype that has null for its own prototype.

Note: The property of an object that points to its prototype is not called prototype. Its name is not standard, but in practice all browsers use __proto__. 
The standard way to access an object's prototype is the Object.getPrototypeOf() method.

When you try to access a property of an object: if the property can't be found in the object itself, the prototype is searched for the property. 
If the property still can't be found, then the prototype's prototype is searched, and so on until either the property is found, or the end of the chain is reached, 
in which case 'undefined' is returned.
 */

const myObject = {
  city: "Madrid",
  greet() {
    console.log(`Greetings from ${this.city}`);
  },
};

myObject.greet(); // Greetings from Madrid
console.log(Object.getPrototypeOf(myObject)); //[Object: null prototype] {}

//The prototype of an object is not always Object.prototype
// const myDate = new Date();
// let object = myDate;

// do {
//   object = Object.getPrototypeOf(object);
//   console.log(object);
// } while (object);
// iteration 1: Date.prototype
// iteration 2: Object { }
// iteration 3: null

// {}
// [Object: null prototype] {}
// null
