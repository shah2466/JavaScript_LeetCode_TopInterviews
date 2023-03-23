// class Base {
//   baseField = 10;
// }

// class Extended extends Base {
//   extendedField = super.baseField; // 'undefined' because you cant access 'instance variable' using 'super'.
// }

// const obj1 = new Extended();
// console.log(obj1.extendedField); //'undefined' because you cant access 'instance variable' using 'super'.

/*** 
 * However, the extendedField property is assigned the value of super.baseField, which will result in undefined. 
 * This is because baseField is an instance property of the Base class 
 * and it is not accessible from the Extended class in this way.

To access the baseField property from the Extended class, you can simply refer to it using this.baseField since the property is 
inherited from the Base class. 
Here is an updated version of the code that uses this.baseField:
*/
// class Base {
//   baseField = 10;
// }

// class Extended extends Base {
//   extendedField = this.baseField;
// }

// const obj1 = new Extended();
// console.log(obj1.extendedField); //10

//
/*****
To access baseField from the Base class in the Extended class, you need to first create an instance of the Base class and then access its baseField property. 
For example:
In this modified code, the Extended class constructor calls the super() constructor to initialize the Base class and then initializes the extendedField property 
with the baseField property of the Base class through the super keyword.
** */

class Base {
  static baseField = 10;
  baseMethod() {
    return 10;
  }
}
class Extended extends Base {
  constructor() {
    super();
    this.extendedField = super.baseField;
    this.extendedMethod = super.baseMethod();
  }
}
const obj1 = new Extended();
console.log(obj1.extendedField); //undefined
console.log(obj1.extendedMethod); //10

/***
baseField is a static class property of Base that can be accessed using super. Shown below
* */
// class Base {
//   static baseField = 10;
// }

// class Extended extends Base {
//   extendedField = super.baseField; // 10
// }
