// If a function is part of an object (i.e. method) -> 'this' refers th the object itself
//If it is a normal function, then 'this' refers to global object (window in case of browser)

const video = {
  title: "a",
  play() {
    console.log(this.title);
  },
  stop1() {
    console.log(video.title);
  },
};
video.stop2 = function (title) {
  console.log(title);
};

video.stop1("b");
video.stop2("c");
video.play();
console.log(video);
