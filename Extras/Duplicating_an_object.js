// So, copying an object variable creates one more reference to the same object.
// But what if we need to duplicate an object?
// We can create a new object and replicate the structure of the existing one, by iterating over its properties and copying them on the primitive level.

let user = {
  name: "John",
  age: 30,
};

let clone = {}; // the new empty object

// let's copy all user properties into it
for (let key in user) {
  clone[key] = user[key];
}

// now clone is a fully independent object with the same content
clone.name = "Pete"; // changed the data in it

console.log(user.name); // still John in the original object

// We can also use the method Object.assign.
// The syntax is:

Object.assign(dest, ...sources);
// The first argument dest is a target object.
// Further arguments is a list of source objects.
// It copies the properties of all source objects into the target dest, and then returns it as the result.

//For example, we have user object, let’s add a couple of permissions to it:

let user = { name: "John" };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

// copies all properties from permissions1 and permissions2 into user
Object.assign(user, permissions1, permissions2);

// now user = { name: "John", canView: true, canEdit: true }
console.log(user.name); // John
console.log(user.canView); // true
console.log(user.canEdit); // true
//If the copied property name already exists, it gets overwritten:

let user = { name: "John" };

Object.assign(user, { name: "Pete" });

console.log(user.name); // now user = { name: "Pete" }
//We also can use Object.assign to perform a simple object cloning:

let user = {
  name: "John",
  age: 30,
};

let clone = Object.assign({}, user);

alert(clone.name); // John
alert(clone.age); // 30
//Here it copies all properties of user into the empty object and returns it.

// Summary
// Objects are assigned and copied by reference. In other words, a variable stores not the “object value”, but a “reference” (address in memory) for the value.
// So copying such a variable or passing it as a function argument copies that reference, not the object itself.

// All operations via copied references (like adding/removing properties) are performed on the same single object.

// To make a “real copy” (a clone) we can use Object.assign for the so-called “shallow copy” (nested objects are copied by reference)
// or a “deep cloning” function structuredClone or use a custom cloning implementation, such as _.cloneDeep(obj).
