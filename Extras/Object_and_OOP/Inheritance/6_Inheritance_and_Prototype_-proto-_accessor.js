/**
 * All objects inherit the Object.prototype.__proto__ setter, which can be used to
 * set the [[Prototype]] of an existing object (if the __proto__ key is not overridden on the object).
 */
/**
 * Warning: Object.prototype.__proto__ accessors are non-standard and deprecated. You should almost always use Object.setPrototypeOf and Object.setPrototypeOf(
 *  instead.
 */
const person = {};
// DON'T USE THIS: for example only.
person.__proto__ = { barProp: "bar val" }; //assigning { barProp: "bar val" } object as the prototype of 'person' object
person.__proto__.__proto__ = { fooProp: "foo val" }; //assigning prototype of { barProp: "bar val" } as { fooProp: "foo val" }.
//so the prototype chain is like this: person --> { barProp: "bar val" } --> { barProp: "bar val" } --> Object.properties --> null
console.log(person.fooProp); //foo val
console.log(person.barProp); //bar val
console.log(person.__proto__); // {barProp: 'bar val' }

const animal = {};
console.log(animal.__proto__); //[Object: null prototype] {}
