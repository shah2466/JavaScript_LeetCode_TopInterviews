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

console.log(video.func1()); //{ title: 'a', func1: [Function: show1], func2: [Function: show2] }. As expected, 'this' is bound to the video object.
let abc = video.func2();
console.log(abc()); //global

// function showVideo() {
//   function show1() {
//     return this;
//   }
//   return show1;
// }

// console.log(showVideo()); //global 'this'
