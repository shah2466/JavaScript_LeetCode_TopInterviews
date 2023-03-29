/**
 * All objects inherit the Object.prototype.__proto__ setter, which can be used to
 * set the [[Prototype]] of an existing object (if the __proto__ key is not overridden on the object).
 */
/**
 * Warning: Object.prototype.__proto__ accessors are non-standard and deprecated. You should almost always use Object.setPrototypeOf instead.
 */
const obj = {};
// DON'T USE THIS: for example only.
obj.__proto__ = { barProp: "bar val" };
obj.__proto__.__proto__ = { fooProp: "foo val" };
console.log(obj.fooProp);
console.log(obj.barProp);
