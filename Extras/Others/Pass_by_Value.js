/**
 * Reference values are also passed by VALUES.
 * JavaScript passes all arguments to a function by VALUES.
Function arguments are local variables in JavaScript.
In JavaScript, all function arguments are always passed by value. 
It means that JavaScript copies the values of the variables into the function arguments.

1) If the variable is of primitive type and it is passed into a function, the argument variable makes a COMPLETELY NEW COPY of the variable, 
so any change made to the copy from inside the function will not impact the copy that is outside the function. They live in two separate memory addresses.

2) If the variable is of reference type (meaning it holds an address that is pointing to an object) and it is passed into a function, the 
'argument variable' copies the address of the object that the 'reference variable' holds. This means, the 'reference variable' is pointing to the object and the argument 
variable inside the function that copied the reference variable (the address of the object) is also pointing to the same object. They both hold the same address.
Any changes the 'argument variable' makes to the object from inside the function will be visible to the 'reference variable' outside the function because they 
both are pointing to the same object.



Any changes that you make to the arguments inside the function DO NOT REFLECT the passing variables outside of the function. 
In other words, the changes made to the arguments are not reflected outside of the function.

In my opinion, 'Reference variable' should be called 'object variable' to clear confusion.

If function arguments are passed by reference, the changes of variables that you pass into the function will be reflected outside the function. 
This is not possible in JavaScript.

***My understanding is, when passing the value of a reference variable to a function, the object itself can be modified but you cannot modify which object the 
referencED variable ('person1' in below example) points to. Meaning you cannot modify the address value the referencED variable holds.**************/

/*********UNCOMMENT below */

// /* lets create an object */
// let person1 = {
//   name: "Raj",
//   age: 25,
//   city: "Herndon",
// };

// // /* lets create a function that increases age of a person */

// function increaseAge(obj1) {
//   obj1.age += 1;
//   return obj1;
// }

// let modified_person1 = increaseAge(person1); //At this point, 'modified_person1' reference variable and 'person1' reference variable hold the value which is
// //address of the same object. Hence both reference variable are pointing to the same object.

// console.log(person1); //{ name: 'Raj', age: 26, city: 'Herndon' }
// console.log(modified_person1); //{ name: 'Raj', age: 26, city: 'Herndon' }

/*********UNCOMMENT till here */

/***
 * It seems that JavaScript passes an object by reference because the change to the object is reflected outside the function. However, this is not the case.
 */

/* lets take an example where the obj (refer) to another object (person2) while it is inside the changeCity() function. This will NOT make 'person' reference 
variable point to the person2. */

/*********UNCOMMENT below */

let person2 = {
  name: "SAM",
  age: 30,
  city: "Okton",
};

function changeCity(obj1) {
  obj1.city = "Chantilly"; //changing the city value
  //create person3 here and make the obj1 reference variable point to the object that person3 references.
  person3 = {
    name: "Jack",
    age: 88,
  };
  obj1 = person3; //the argument object obj1 is reassigned to the person3 object, which means that obj1 now refers to person3.
  return obj1;
}

changeCity(person2); //modifies the 'person2' object and returns a reference variable that now points to person3. This will not impact where the person2 is pointing to.
console.log(person2); //{ name: 'SAM', age: 30, city: 'Chantilly' }. So person2 still points to the original person2 object. Person2' city property changed by the function.
console.log(person3); //{ name: 'Jack', age: 88 }.
/*********UNCOMMENT till here */
