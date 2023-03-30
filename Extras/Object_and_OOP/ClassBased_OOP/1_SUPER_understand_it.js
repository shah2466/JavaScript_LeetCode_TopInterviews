//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super#using_super_in_classes

/**
 * accessing instance variables using 'super' keyword is not valid in JavaScript, because the 'super' keyword is used to access properties and methods of
 * the parent class, which are attached to the 'prototype of the class'.
 * ALl types of methods (instance or non-instance) are defined on constructor's prototype.
 * Instance variables, on the other hand, are attached to the instance itself, and can be accessed using the ONLY 'this' keyword.
 */

class Rectangle {
  constructor(height, width) {
    this.name = "Rectangle";
    this.height = height;
    this.width = width;
  }
  sayName() {
    console.log(`Hi, I am a ${this.name}.`);
  }
  //Accessor fields
  get area() {
    return this.height * this.width;
  }
  set area(value) {
    this._area = value; //(this._area) is a convention used to indicate that the _area property should be considered "private".
  }
}

class Square extends Rectangle {
  constructor(length) {
    //this.height; // ReferenceError, super needs to be called first!

    // Here, it calls the parent class's constructor with lengths
    // provided for the Rectangle's width and height
    super(length, length); //the length is the length passed from the childclass constructor. both arguments are length because it is a square.
    //***********note: we dont have to provide all the arguments defined in the super class constructor.

    // Note: In derived classes, super() must be called before you
    // can use 'this'. Leaving this out will cause a reference error.
    this.name = "Square"; //this overrides the name = 'rectangle' declared by calling the super().
  }

  calcArea() {
    console.log(`area of ${this.name} is: ${this.area}`); //this.area comes from the parent class
  }
}

const square = new Square(7);
square.calcArea();
