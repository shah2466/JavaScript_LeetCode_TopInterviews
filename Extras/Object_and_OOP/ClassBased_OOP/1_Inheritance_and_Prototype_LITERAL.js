const o = { a: 1 };
// The newly created object o has Object.prototype as its [[Prototype]]
// Object.prototype has null as its prototype.
// o ---> Object.prototype ---> null

const b = ["yo", "whadup", "?"];
// Arrays inherit from Array.prototype
// (which has methods indexOf, forEach, etc.)
// The prototype chain looks like:
// b ---> Array.prototype ---> Object.prototype ---> null

function f() {
  return 2;
}
// Functions inherit from Function.prototype
// (which has methods call, bind, etc.)
// f ---> Function.prototype ---> Object.prototype ---> null

const p = { b: 2, __proto__: o };
// It is possible to point the newly created object's [[Prototype]] to
// another object via the __proto__ literal property. (Not to be confused
// with Object.prototype.__proto__ accessors)
// p ---> o ---> Object.prototype ---> null

const obj = { a: 1, b: 2 };
const objProto = { c: 3 };

obj.__proto__ = objProto;

console.log(obj.c); // Output: 3
console.log(obj.__proto__); // Output: { c: 3 }

const newObj = { a: 1, b: 2, __proto__: objProto };

console.log(newObj.c); // Output: 3
console.log(newObj.__proto__); // Output: { c: 3 }
