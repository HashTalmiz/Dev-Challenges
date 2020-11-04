const timeline = gsap.timeline();
const pseudoLayer = CSSRulePlugin.getRule('.overlay::before')
const pseudoBottom = CSSRulePlugin.getRule('.img::before')
const pseudoRight = CSSRulePlugin.getRule('.img::after')
const pseudoThirdBottom = CSSRulePlugin.getRule('.img:nth-child(3n-1)::before')

gsap.from("body", {
    opacity: 0
})

timeline.from(".line h1", 1, {
    y: 100,
    ease: "power4.out",
    skewY: 7,
}).from(".top__text, footer", 1, {
    ease: "power4.out",
    opacity: 0,
    y: 10
}).to(pseudoLayer, {
    width: "0%",
    ease: Power2.easeInOut
}).fromTo(pseudoBottom, {
    bottom: "110px",
}, {
    bottom: "70px"
}, "-=.5").fromTo(pseudoRight, {
    left: "0px"
}, {
    left: "20px"
}).from(pseudoThirdBottom, {
    bottom: "110px"
}, "-=1")