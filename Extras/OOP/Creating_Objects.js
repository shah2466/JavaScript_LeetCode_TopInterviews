/**THree ways to create object
 * 1) Object Literal
 * 2) Create a function: create an empty object, initialize it, and return it.
 * 3) Constructor: constuctor outside a class: A better way is to use a constructor. A constructor is just a function called using the new keyword.
 * When you call a constructor, it will:
create a new object
bind this to the new object, so you can refer to this in your constructor code
run the code in the constructor
return the new object.
Constructors, by convention, start with a capital letter and are named for the type of object they create.
*4) Constructor: constuctor inside a class - OOP
*/

//2) Create a function
function createPerson(name) {
  const obj = {};
  obj.name = name;
  obj.introduceSelf = function () {
    console.log(`Hi! I'm ${this.name}.`);
  };
  return obj;
}

person1 = createPerson("Ram");
person2 = createPerson("Sam");

person1.introduceSelf();
person2.introduceSelf();

//3) Constructor: constuctor outside a class
function Person(name) {
  this.name = name;
  this.introduceSelf = function () {
    console.log(`Hi! I'm ${this.name}.`);
  };
}

//To call Person() as a constructor, we use new:

const salva = new Person("Salva");
salva.name;
salva.introduceSelf();
// "Hi! I'm Salva."

const frankie = new Person("Frankie");
frankie.name;
frankie.introduceSelf();
// "Hi! I'm Frankie."
