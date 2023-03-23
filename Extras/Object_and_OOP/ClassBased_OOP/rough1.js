class Shape {
  constructor(height, width) {
    this.name = "Shape"; //this will make every instance's name "Shape" unless we change the name for the instance using name.this = "desiredName"
    this.height = height;
    this.width = width;
  }
  //instance method
  sayName() {
    console.log(`Hi, I am a ${this.name}.`);
  }

  get area() {
    return this.height * this.width;
  }
  set area(value) {
    this._area = value;
  }
}
class Square extends Shape {
  constructor(length) {
    //this.height; // ReferenceError, super needs to be called first!

    // Here, it calls the parent class's constructor with lengths
    // provided for the Shape's width and height
    super(length, length);

    // Note: In derived classes, super() must be called before you
    // can use 'this'. Leaving this out will cause a reference error.
    this.name = "Square"; //overriding the name from "Shape" to "square";
  }
}

class Rectangle extends Shape {
  constructor(height, width) {
    super(height, width);
    this.name = "Rectangle"; //overriding the name from "Shape" to "Rectangle";
  }
}

const rect1 = new Rectangle(4, 5);
const square1 = new Square(5);
rect1.sayName(); //Hi, I am a Rectangle.
square1.sayName(); //Hi, I am a Square.

//get Area
console.log(rect1.area);
console.log(square1.area);

// Constructor function for creating Person objects
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Adding a method to the Person prototype
Person.prototype.sayHello = function () {
  console.log(
    "Hello, my name is " + this.name + " and I am " + this.age + " years old."
  );
};

// Creating a new Person instance
var person1 = new Person("John", 30);

// Calling the sayHello() method on the person1 instance
person1.sayHello(); // Output: "Hello, my name is John and I am 30 years old."
