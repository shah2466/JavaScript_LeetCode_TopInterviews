const personPrototype = {
  greet() {
    console.log(`hello, my name is ${this.name}!`);
  },
};

//constructor function below:
function Person(name) {
  this.name = name;
}

Object.assign(Person.prototype, personPrototype);
// or
// Person.prototype.greet = personPrototype.greet;

//Here we create: 1) an object personPrototype, which has a greet() method
//2) a Person() constructor function which initializes the name of the person to create.
//We then put the methods defined in personPrototype onto the Person function's prototype property using Object.assign.
//After this code, objects created using Person() will get Person.prototype as their prototype, which automatically contains the greet method.

const reuben = new Person("Reuben");
reuben.greet(); // hello, my name is Reuben!
