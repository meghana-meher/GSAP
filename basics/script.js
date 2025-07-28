// gsap.to("#box1", {
//   x: 200,
//   duration: 2,
//   delay: 1,
//   rotate: 360,
//   backgroundColor: "pink",
//   borderRadius: "50%",
//   repeat: 1, //it will run two times
//   // repeat: -1, //this runs infinite
//   yoyo: true, //goes and comes return
// });
// // gsap.from("#box2", {
// //   x: 300,
// //   y: 300,
// //   duration: 4,
// //   delay: 2,
// // });

// gsap.from("h1", {
//   opacity: 0,
//   duration: 2,
//   y: 30,
//   delay: 2,
//   // stagger: 0.5,
//   stagger: -1, //reverse order
//   // color: "red",
// });

// timeline
// let tl = gsap.timeline();

// tl.to("#time1", {
//   x: 300,
//   rotate: 180,
//   duration: 3,
//   delay: 1,
// });

// tl.to("#time2", {
//   x: 300,
//   rotate: 180,
//   duration: 3,
//   delay: 1,
// });
// tl.to("#time3", {
//   x: 300,
//   rotate: 180,
//   duration: 3,
//   delay: 1,
// });

var tl = gsap.timeline();

tl.from("h2", {
  y: -20,
  opacity: 0,
  duration: 1,
  delay: 0.5,
});

tl.from("h4", {
  y: -20,
  opacity: 0,
  duration: 1,
  delay: 0.5,
  stagger: 1,
});

tl.from("#heading", {
  y: 20,
  opacity: 0,
  duration: 0.5,
  scale: 0.2,
});
