//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super#using_super_in_classes

/**
 * 'static' field of the parent class can be accessed by the 'static field of the child class.
 */

class Base {
  static baseStaticField = 90; //static field
  baseMethod() {
    return 10;
  }
}

class Extended extends Base {
  extendedField = super.baseMethod(); // 10 => this is an instance field
  static extendedStaticField = super.baseStaticField; // 90 --'static field' can call 'static field' from the parent class using the 'super'
}

const obj1 = new Extended();
console.log(obj1.extendedField); //10 --accessing its own instance field
console.log(obj1.baseMethod()); //10 --accessing SUper class's instance method
console.log(obj1.extendedStaticField); //undefined --because extendedStaticField is a class field, cant be accessed using an instance of the class.
console.log(Extended.extendedStaticField); //90 --accessing without creating an object of Extended class because the 'extendedStaticField' is static field
console.log(Base.baseStaticField); //90 --accessing without creating an object of Base class because the 'baseStaticField' is static field
