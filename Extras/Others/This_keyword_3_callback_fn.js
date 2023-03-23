// If a function is part of an object (i.e. a method) -> 'this' refers th the object itself
//If it is a normal function, then 'this' refers to global object (window in case of browser)
//When an anonymous function is called, the 'this' keyword is bound to the global object (window in a web browser or global in Node.js) by default.
//This is because the anonymous function is not bound to any particular object.
//However, the 'this' binding for anonymous functions can be changed using one of the following techniques:
//Using the bind method: The bind method creates a new function that is bound to a specific object.
//The first argument passed to bind sets the value of this inside the function.

//1) Using the call or apply methods: These methods invoke a function with a specific this value. The first argument passed to call or apply sets the value of this inside the function.
//2) Using an arrow function: Arrow functions do not have their own this binding, so they inherit the this value from their lexical scope.
//This means that the this value inside an arrow function is the same as the this value outside the function
//ARROW function do not have their own 'this' binding. They use the 'this' binding of the enclosing function/method.

const video = {
  title: "a",
  tags: ["tag1", "tag2", "tag3"],
  //print title and tag next to each other
  showTags() {
    this.tags.forEach(function (eachTag) {
      console.log(this.title, eachTag);
    }, this); //The forEach() method executes a provided function once for each array element. 'tag' argument that is passed to the anonymous function is coming from the this.tags array.
    //forEach() method in array takes 'callback' function as the first argument and 'this' as the second argument, here 'this' refers to the 'video' object.
    // We had to do this because the 'this.title' would otherwise refer to window object which does not have 'title' variable defined. 'forEach' method gives us an option to
    //specify the 'this; binding. Hence giving 'this' (inside forEach(callback, this)) provided the binding to the 'video' object.
  },
};

video.showTags();

//In below code, above result can be acheived using the ARROW function. Because the ARROW function does not have its own 'this' binding, it will use the 'this' binding of 'showTags()' function.

// const video = {
//   title: "a",
//   tags: ["tag1", "tag2", "tag3"],
//   //print title and tag next to each other
//   showTags() {
//     this.tags.forEach((eachTag) => {
//       console.log(this.title, eachTag);
//     }); //here, no need to give 'this' binding to the call back function because this is an arrow function and not the anynymous function like in the above example.
//   },
// };

// video.showTags();
