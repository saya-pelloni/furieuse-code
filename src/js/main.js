import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const viewportWidth = window.screen.width;
const friseWidth = document.querySelector(".slider-element").offsetWidth;

gsap.to(".slider-container", {
  x: viewportWidth - friseWidth,
  scrollTrigger: {
    trigger: ".slider-mask",
    start: "top top",
    scrub: 1,
    pin: true,
  },
});

gsap.registerPlugin(ScrollTrigger);

gsap.to(".flashback-baron-text", {
  opacity: 10,
  scrollTrigger: {
    trigger: ".flashback-ysa-run",
    start: "top center",
    end: "bottom center",
    toggleActions: "play reverse play reverse",
    markers: false,
  },
});

gsap.to(".flashback-baron-text-second", {
  opacity: 10,
  scrollTrigger: {
    trigger: ".flashback-danger",
    start: "top center",
    end: "bottom center",
    toggleActions: "play reverse play reverse",
    markers: false,
  },
});

gsap.to(".flashback-sword-text", {
  opacity: 10,
  scrollTrigger: {
    trigger: ".expression-baron-sword",
    start: "top center",
    end: "bottom center",
    toggleActions: "play reverse play reverse",
    markers: false,
  },
});

gsap.to(".flashback-weeding-ysa-text", {
  opacity: 10,
  scrollTrigger: {
    trigger: ".flashback-weeding-ysa",
    start: "top center",
    end: "bottom center",
    toggleActions: "play reverse play reverse",
    markers: false,
  },
});
