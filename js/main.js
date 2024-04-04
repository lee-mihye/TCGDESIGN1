// main.js
document.addEventListener("DOMContentLoaded", function () {

    //marquee 영역
    gsap.registerPlugin(ScrollTrigger);

    let tl1 = gsap.timeline({
        scrollTrigger: {
            trigger: ".section_marquee",
            start: "top bottom",
            end: "bottom top",
            scrub: 3,
        },
    });

    let tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".section_marquee",
            start: "top bottom",
            end: "bottom top",
            scrub: 3,
        },
    });

    tl1.fromTo(
        ".marquee_left",
        {
            xPercent: -100,
        },
        {
            xPercent: 0,
            ease: "none",
        }
    );

    tl2.fromTo(
        ".marquee_right",
        {
            xPercent: 0,
        },
        {
            xPercent: -100,
            ease: "none",
        }
    );
}); ////////////////////js///////////////////////
