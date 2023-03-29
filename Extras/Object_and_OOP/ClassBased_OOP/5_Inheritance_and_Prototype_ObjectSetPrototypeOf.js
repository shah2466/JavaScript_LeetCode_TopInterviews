/**
 * While all methods above will set the prototype chain at object creation time, Object.setPrototypeOf() allows
 * mutating the [[Prototype]] internal property of an existing object.
 */

const obj = { a: 1 };
const anotherObj = { b: 2 };
Object.setPrototypeOf(obj, anotherObj);
// obj ---> anotherObj ---> Object.prototype ---> null
