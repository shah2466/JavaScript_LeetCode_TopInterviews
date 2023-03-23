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

function showTags() {
  console.log("Global");
}
let showTags_1 = "global variable";
const video = {
  title: "a",
  tags: ["tag1", "tag2", "tag3"],
  //print title and tag next to each other
  showTags() {
    console.log(this.tags);
  },
};

//showTags();
//console.log(showTags_1);
console.log(video.showTags());
//why am i gettin undefined also as output?? because of console.log(console.log()).
//The outer console.log tries to output a variable whose name is [ 'tag1', 'tag2', 'tag3' ] but it does not
//exist, hence outputs undefined.
