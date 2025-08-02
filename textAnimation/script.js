function breakText() {
  let h1 = document.querySelector("h1");
  let h1Text = document.querySelector("h1").textContent;

  let splittedText = h1Text.split("");
  let halfValue = Math.floor(splittedText.length / 3);

  let clutter = "";

  splittedText.forEach(function (e, idx) {
    if (idx < halfValue) {
      clutter += `<span class="firstHalf">${e}</span>`;
    } else {
      clutter += `<span class="secondHalf">${e}</span>`;
    }
  });

  h1.innerHTML = clutter;
}

breakText();

gsap.from("h1 .firstHalf", {
  y: 50,
  opacity: 0,
  duration: 0.6,
  delay: 0.5,
  stagger: 0.15,
});

gsap.from("h1 .secondHalf", {
  y: 50,
  opacity: 0,
  duration: 0.6,
  delay: 0.5,
  stagger: -0.15,
});
