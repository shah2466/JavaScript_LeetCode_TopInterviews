const person = {
  name: "Raj",
  sayName() {
    console.log(`My name is ${this.name}`);
  },
};

//Create a new object and define its prototype
const myObject = Object.create(person); // create myObject and make 'person' object its prototype.
myObject.city = "Madrid";
myObject.greet = function () {
  console.log(`Greetings from ${this.city}`);
};

myObject.greet(); // Greetings from Madrid
myObject.sayName(); // My name is Raj
console.log(Object.getPrototypeOf(myObject)); //{ name: 'Raj', sayName: [Function: sayName] }
