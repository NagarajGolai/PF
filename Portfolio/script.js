AOS.init({
  duration: 1000, // Animation duration
  easing: "ease-in-out", // Easing function
  once: true, // Animation only happens once
});

var typed = new Typed("#interP", {
    strings: ["Web Dev..", "Programming..", "UI/UX Dev.."],
    typeSpeed: 80,  // Typing speed
    backSpeed: 50,   // Backspacing speed
    loop: true ,
    cursorChar: "|",
    smartBackspace: true
  });
