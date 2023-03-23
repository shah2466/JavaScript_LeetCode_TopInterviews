/**
 * In this task we provide you with the start of a definition for a Shape class. It has three properties: name, sides, and sideLength.
 * This class only models shapes for which all sides are the same length, like a square or an equilateral triangle.
 *
 * Problem: Add a constructor to this class.
 * The constructor takes arguments for the name, sides, and sideLength properties, and initializes them.
 * Add a new method calcPerimeter() method to the class, which calculates its perimeter (the length of the shape's outer edge) and logs the result to the console.
 * Create a new instance of the Shape class called square. Give it a name of square, 4 sides, and a sideLength of 5.
 * Call your calcPerimeter() method on the instance, to see whether it logs the calculation result to the browser's console as expected.
 * Create a new instance of Shape called triangle, with a name of triangle, 3 sides and a sideLength of 3.
 * Call triangle.calcPerimeter() to check that it works OK.
 */

class Shape {
  #name;
  #sides;
  #sideLength;
  constructor(name, sides, sideLength) {
    this.name = name;
    this.sides = sides;
    this.sideLength = sideLength;
  }

  calcPerimeter() {
    console.log(`The perimeter is: ${this.sides * this.sideLength}`);
  }
}

//create Square and triangle instance:
// const square = new Shape("Square", 4, 5);
// square.calcPerimeter();

// const triangle = new Shape("Triangle", 3, 3);
// triangle.calcPerimeter();

/**
 * we'd like you to create a Square class that inherits from Shape, and adds a calcArea() method that calculates the square's area.
 * Also set up the constructor so that the name property of Square object instances is automatically set to square, and the sides property
 * is automatically set to 4. When invoking the constructor, you should therefore just need to provide the sideLength property.
 *
 */
class Square extends Shape {
  constructor(sideLength) {
    super(); //will call super constrcutor and initialize name, side, sideLength to 'undefined' because we did not pass any arguments
    this.name = "Square"; //overrides name from 'undefined' to "Square"
    this.sides = 4; //overrides sides from 'undefined' to "4
    this.sideLength = sideLength; //overrides sideLength from 'undefined' to 5
  }
  calcArea() {
    console.log(
      `The area of this square is: ${this.sideLength * this.sideLength}`
    );
  }
}

const square1 = new Square(5);
square1.calcArea();
square1.calcPerimeter(); //from the superClass
