/**
 * accessing instance variables using 'super' keyword is not valid in JavaScript, because the super keyword is used to access properties and methods of
 * the parent class, which are attached to the 'prototype of the class'.
 * ALl types of methods (instance or non-instance) are defined on constructor's prototype.
 * Instance variables, on the other hand, are attached to the instance itself, and can be accessed using the 'this' keyword.
 */

/***** 1) Using 'super' OUTSIDE a METHOD */

// class Base {
//   baseField = 10;
// }

// class Extended extends Base {
//   extendedField = super.baseField; // 'undefined' because you cant access 'instance variable' using 'super'.
//   //Also, 'super' keyword can only be used inside a 'method'
// }

// const obj1 = new Extended();
// console.log(obj1.extendedField); //'undefined' because you cant access 'instance variable' using 'super'.

/***** 2) Using 'super' inside a METHOD, eg: constructor method/function */

// class Base {
//   baseField = 10;
// }

// class Extended extends Base {
//   constructor() {
//     super();
//     this.extendedField = super.baseField; // 'undefined' you cant access 'instance variable' using 'super'
//   }
// }

// const obj1 = new Extended();
// console.log(obj1.extendedField); //'undefined' you cant access 'instance variable' using 'super' EVEN from inside a method

/***** 3) Using 'super' inside a METHOD to access STATIC field (not instance)> Cant do that because you have to use CLASS name to access STATIC field */

// class Base {
//   static baseField = 10;
// }

// class Extended extends Base {
//   constructor() {
//     super();
//     this.extendedField = super.baseField; //undefined because STATIC properties and methods of the parent class are attached to the 'prototype of the class'
//   }
// }

// const obj1 = new Extended();
// console.log(obj1.extendedField); //undefined
//'Undefined' because static variables are attached to the class constructor rather than instances of the class. Therefore, when you try to access super.baseField
//in the Extended constructor, it is not found on the instance or its prototype, resulting in undefined.

/***** 4) To access STATIC field (not instance)> --Use the CLASS NAME*/

// class Base {
//   static baseField = 10;
// }

// class Extended extends Base {
//   constructor() {
//     super();
//     this.extendedField = Base.baseField; //10
//   }
// }

// const obj1 = new Extended();
// console.log(obj1.extendedField); //10

/***** 5) To access INSTANCE field from the parent class, use 'this' keyword*/

//To access the baseField property from the Extended class, you can simply refer to it using this.baseField since the property is inherited from the Base class.

// class Base {
//   baseField = 10;
// }

// class Extended extends Base {
//   extendedField = this.baseField;
// }

// const obj1 = new Extended();
// console.log(obj1.extendedField); //10

/***** 6) Accessing INSTANT METHOD using 'super' from INSIDE the constructor - cant do that*/

// class Base {
//   baseMethod() {
//     return 10;
//   }
// }
// class Extended extends Base {
//   constructor() {
//     super();
//     this.extendedMethod = super.baseMethod(); //can do this because methods are defined on parent class's prototype.
//   }
// }
// const obj1 = new Extended();
// console.log(obj1.extendedField); //undefined
// console.log(obj1.extendedMethod); //10

/***** 7) Accessing INSTANT METHOD using 'super' from OUTSIDE the constructor/METHOD*/

// class Base {
//   baseMethod() {
//     return 10;
//   }
// }
// class Extended extends Base {
//   extendedMethod = super.baseMethod(); //can do this because methods are defined on parent class's prototype.
// }
// const obj1 = new Extended();
// console.log(obj1.extendedMethod); //10

/***** 8) using 'super.constructor.baseField' to access STATIC FIELD of a parent class. You can also use  'Base.baseField'*/

// class Base {
//   static baseField = 10;
//   baseMethod() {
//     return 20;
//   }
// }

// class Extended extends Base {
//   constructor() {
//     super();
//     this.extendedField = super.constructor.baseField; // 10
//   }
// }

// const obj1 = new Extended();
// console.log(obj1.extendedField); // 10
//Here, 'super.constructor.baseField' is used to access the baseField property of the Base class, which is inherited by the Extended class.
