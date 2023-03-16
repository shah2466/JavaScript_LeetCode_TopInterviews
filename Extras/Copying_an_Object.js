// A variable assigned to an object stores not the object itself, but its “address in memory” – in other words “a reference” to it.
// The object is stored somewhere in memory while the object variable (at the left) has a “reference” to it.
// We may think of an object variable, such as user, like a sheet of paper with the address of the object on it.
// When we perform actions with the object, e.g. take a property user.name, the JavaScript engine looks at what’s at that address and performs
// the operation on the actual object.
// Now here’s why it’s important.
// When an object variable is copied, the reference is copied (i.e the address of the object is copied), but the object itself is not duplicated.
// For instance:

let user = { name: "John" };

let admin = user; // copy the reference
//Now we have two variables, each storing a reference to the same object:
//There’s still one object, but now with two variables that reference it.
//We can use either variable to access the object and modify its contents:

admin.name = "Pete"; // changed by the "admin" reference

console.log(user.name); // 'Pete', changes are seen from the "user" reference
//It’s as if we had a cabinet with two keys and used one of them (admin) to get into it and make changes.
//Then, if we later use another key (user), we are still opening the same cabinet and can access the changed contents.
