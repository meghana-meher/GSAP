// part-1 starts
// gsap.from("#page1 #box", {
//   scale: 0,
//   delay: 1,
//   duration: 2,
//   rotate: 360,
// });

// // scroll trigger
// gsap.from("#page2 #box", {
//   scale: 0,
//   //   delay: 1,
//   duration: 2,
//   opacity: 0,
//   duration: 1,
//   rotate: 720,
//   //   scrollTrigger: "#page2 #box",
//   scrollTrigger: {
//     trigger: "#page2 #box", //starting point
//     scroller: "body",
//     markers: true,
//     start: "top 60%",
//     end: "top 30%",
//     // scrub: true,
//     scrub: 2,
//     pin: true,
//   },
// });

// part -1 ends

// part-2
gsap.to("#page2 h1", {
  transform: "translateX(-115%)",
  scrollTrigger: {
    trigger: "#page2",
    scroller: "body",
    markers: true,
    start: "top 0%",
    end: "top -150%",
    scrub: 2,
    pin: true, //whenever using pin always trigger parent not child
  },
});
