//Given our Person class above, let's define the Professor subclass.
class Person {
  name; //can be ommited but it is easier for other to understand if you keep it.

  constructor(name) {
    this.name = name;
  }

  introduceSelf() {
    console.log(`Hi! I'm ${this.name}`);
  }
}

class Professor extends Person {
  teaches; //can be ommited but it is easier for other to understand if you keep it.

  constructor(name, teaches) {
    super(name); //Calls the constructor of the Super Class. initializes the name.
    this.teaches = teaches; //initializes the 'teaches' property.
  }

  introduceSelf() {
    console.log(
      `My name is ${this.name}, and I will be your ${this.teaches} professor.`
    );
  }

  grade(paper) {
    const grade = Math.floor(Math.random() * (5 - 1) + 1);
    console.log(grade);
  }
}

//With this declaration we can now create and use professors:

const walsh = new Professor("Walsh", "Psychology");
walsh.introduceSelf(); // 'My name is Walsh, and I will be your Psychology professor'

walsh.grade("my paper"); // some random grade
