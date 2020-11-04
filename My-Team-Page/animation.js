const timeline = gsap.timeline();
timeline.from(".line h2", 1, {
    y: 100,
    ease: "power4.out",
    skewY: 7,
    delay: 1
}).from(".top__text", 1, {
    ease: "power4.out",
    opacity: 0,
    y: 10
})