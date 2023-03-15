// If a function is part of an object (i.e. method) -> 'this' refers th the object itself
//If it is a normal function, then 'this' refers to global object (window in case of browser)

const video = {
  title: "a",
  play() {
    console.log("The title**is: " + this.title);
  },
  stop1() {
    console.log("The titleis: " + video.title);
    console.log("The title is: " + title); //error because the title is not passed by the stop1 function. We can pass it from the function definition as a parameter
    //or use 'this/title' to use the video object's title.
  },
};
video.stop2 = function (title) {
  console.log("The titleis: ++++" + title);
};

video.stop1();
video.stop2("c");
video.play();
console.log(video);
