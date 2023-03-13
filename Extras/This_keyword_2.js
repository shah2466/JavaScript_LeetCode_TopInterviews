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
    console.log(this.tags);
  },
};

//showTags();
//console.log(showTags_1);
console.log(video.showTags());
//why am i gettin undefined also as output?? because of console.log(console.log()).
//The outer console.log tries to output a variable whose name is [ 'tag1', 'tag2', 'tag3' ] but it does not
//exist, hence outputs undefined.
