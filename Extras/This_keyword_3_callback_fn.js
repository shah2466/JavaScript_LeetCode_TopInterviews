// If a function is part of an object (i.e. a method) -> 'this' refers th the object itself
//If it is a normal function, then 'this' refers to global object (window in case of browser)
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
