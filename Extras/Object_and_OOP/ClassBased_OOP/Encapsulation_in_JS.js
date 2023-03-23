class Person {
  name; //can be ommited but it is easier for other to understand if you keep it.

  constructor(name) {
    this.name = name;
  }

  introduceSelf() {
    console.log(`Hi! I'm ${this.name}`);
  }
}

class Student extends Person {
  #year; //# makes it private

  constructor(name, year) {
    super(name);
    this.#year = year;
  }

  introduceSelf() {
    console.log(`Hi! I'm ${this.name}, and I'm in year ${this.#year}.`);
  }

  canStudyArchery() {
    return this.#year > 1;
  }
}
const summers = new Student("Summers", 2);

summers.introduceSelf(); // Hi! I'm Summers, and I'm in year 2.
summers.canStudyArchery(); // true

summers.#year; // SyntaxError: Property '#year' is not accessible outside class 'Student' because it has a private identifier
//Private data properties must be declared in the class declaration, and their names start with #.

//Private methods: You can have private methods as well as private data properties.
class Example {
  somePublicMethod() {
    this.#somePrivateMethod();
  }

  #somePrivateMethod() {
    console.log("You called me?");
  }
}

const myExample = new Example();

myExample.somePublicMethod(); // 'You called me?'

myExample.#somePrivateMethod(); // SyntaxError: Property '#somePrivateMethod' is not accessible outside class 'Example' because it has a private identifier
