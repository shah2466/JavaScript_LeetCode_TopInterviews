// If a function is part of an object (i.e. method) -> 'this' refers th the object itself
//If it is a normal function, then 'this' refers to global object (window in case of browser)

function showTags() {
  console.log("Global");
}
let showTags_1 = "global variable";
const video = {
  title: "a",
  tags: ["tag1", "tag2", "tag3"],
  //print title and tag next to each other
  showTags() {
    this.tags.forEach(function (tag) {
      console.log(this.title, tag);
    }, this); //forEach() method in array takes callbacl function as the first argument and 'this' as the second argument, here 'this' refers to the video object.
  },
};

video.showTags();

//learn forEach and callback. Specifically, where is the value of 'tag' inside (this.title, tag) coming from?
