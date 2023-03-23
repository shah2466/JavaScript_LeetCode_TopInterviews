/**
 * Using prototypes, we can define methods and properties on a constructor's 'prototype' property instead of defining them in the constructor function itself.
This allows all objects created using that constructor to inherit those methods and properties from the prototype object,
without having to define them again for each object. This can save memory and make our code more efficient.
*/

//Q1: If we set the prototype of a constructor, we can ensure that all objects created with that constructor are given that prototype:

const personPrototype = {
  greet() {
    console.log(`hello, my name is ${this.name}!`);
  },
};

//constructor function below:
function Person(name) {
  this.name = name;
}

Object.assign(Person.prototype, personPrototype); //put the methods defined in 'personPrototype' onto the Person function's prototype property using Object.assign.
// or
// Person.prototype.greet = personPrototype.greet;

//Here we create: 1) an object personPrototype, which has a greet() method
//2) a Person() constructor function which initializes the name of the person to create.
//We then put the methods defined in personPrototype onto the Person function's prototype property using Object.assign.
//After this code, objects created using Person() will get Person.prototype as their prototype, which automatically contains the greet method.

const ruben = new Person("Ruben");
ruben.greet(); // hello, my name is Reuben!

//Q: find out what the prototype of this 'ruben' object is:
console.log(Object.getPrototypeOf(ruben)); //{ greet: [Function: greet] } => 'Person.prototype': It is a 'Person' constructor function and its greet method.

//Q: try modifying the prototype of the created 'ruben' object. Add a method to its prototype. Can I add a new Person object as this object's prototype?

//create Ram object out of Person constructor.
const ram = new Person("Ram");
ram.city = "Oakton";
ram.getName = function () {
  console.log(`Hi, my name is: ${this.name}`);
};
//Now assign Ram object's sayName method as a new method on Ruben object's prototype, which is nothing but the 'Person.prototype'
ruben.prototype.getName = ram.getName; //********error
Object.assign(ruben.prototype, ram.getName); //************error
//The reason is: to modify the ruben object's prototype, we have to go through the constructor function's prototype. So, i have to add the method there
//The error is being thrown because ruben.prototype is not a valid property. In the given code, ruben is an instance of the Person constructor function, and the
//prototype property belongs to the constructor function itself, not to its instances.

/***** SOlution for the above error */
Person.prototype.getName = ram.getName; //assign the getName method on the 'Person.prototype'
ruben.getName(); //Hi, my name is: Ruben.
ram.getName(); //Hi, my name is: Ram

console.log(Object.getPrototypeOf(ruben)); //{ greet: [Function: greet], getName: [Function (anonymous)] }
console.log(Object.getPrototypeOf(ram)); //{ greet: [Function: greet], getName: [Function (anonymous)] }

//since we modified the constructor's prototype, all objects created from the constrcutor inherit getName().
const sam = new Person("Sam");
sam.getName(); //Hi, my name is: Sam
sam.greet(); //Greetings! my name is Sam!

//find who is the constructor of the 'sam' object.
console.log(sam.constructor); //[Function: Person]
