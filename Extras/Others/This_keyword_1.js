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

// const video = {
//   title: "a",
//   play() {
//     console.log(this); //here 'this' refers to the object video because play() is a method of the object.
//   },
//   stop1() {
//     console.log("The titleis: " + video.title);
//     console.log("The title is: " + title); //error because the title is not passed by the stop1 function. We can pass it from the function definition as a parameter
//     //or use 'this.title' to use the video object's title.
//   },
// };
// video.stop2 = function (title) {
//   console.log("The titleis: ++++" + title);
// };

// //video.stop1();
// // video.stop2("c");
// video.play();
// // console.log(video);

/*** another example - using Anynomous function */
const video = {
  title: "a",
  func1: function show1() {
    return this; //'this' is bound to object.
  },
  func2: function show2() {
    let title = "b";
    return function show_2_inside() {
      return this; //global this
    };
  },
};

console.log(video.func1()); //returns video object.
let abc = video.func2(); //returns [Function: show_2_inside]
console.log(abc()); //calling the function 'show_2_inside' = 'global object'

// function showVideo() {
//   function show1() {
//     return this;
//   }
//   return show1;
// }

// console.log(showVideo()); //global 'this'
