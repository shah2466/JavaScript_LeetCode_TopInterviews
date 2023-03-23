//Classical OOP
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }
}

let person1 = new Person("John", 30);
person1.greet(); // Hello, my name is John and I am 30 years old.

//Prototype-based OOP
let person = {
  name: "John",
  age: 30,
  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  },
};
