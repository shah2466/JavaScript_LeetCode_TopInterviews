function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;

  // non-static method
  this.getAge = function () {
    return new Date().getFullYear() - this.year;
  };
}

// static method
Car.getInfo = function () {
  return "This is a car object";
};

// prototype method
Car.prototype.startEngine = function () {
  return "Engine started for " + this.make + " " + this.model;
};

// creating objects of Car
let car1 = new Car("Toyota", "Corolla", 2015);
let car2 = new Car("Honda", "Civic", 2018);

console.log(Car.getInfo()); // This is a car object
console.log(car1.startEngine()); // Engine started for Toyota Corolla
console.log(car2.startEngine()); // Engine started for Honda Civic
console.log(car1.getAge()); // 8
console.log(car2.getAge()); // 5
console.log(car2.getInfo()); // Error. getInfo() is not a instance method, not it exists in this object's prototype. It is a class method defined directly on the Constrcutor
//function. SO, it can only be accessed using Constructor Function's name. like this: Car.getInfo()
