// If a function is part of an object (i.e. method) -> 'this' refers th the object itself
//If it is a normal function, then 'this' refers to global object (window in case of browser)

const video = {
  title: "a",
  tags: ["tag1", "tag2", "tag3"],
  //print title and tag next to each other
  showTags() {
    this.tags.forEach(function (tag) {
      console.log(this.title, tag);
    }, this); //The forEach() method executes a provided function once for each array element. 'tag' argument that is passed to the arrow function is coming from the this.tags array.
    //Because No binding of arguments: Arrow functions do not have their own arguments object. Arguments is a reference to the arguments of the enclosing scope.
    //forEach() method in array takes callback function as the first argument and 'this' as the second argument, here 'this' refers to the 'video' object.
  },
};

video.showTags();
