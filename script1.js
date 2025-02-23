gsap.fromTo(
    '.loading-page',
    {opacity:1},
    {
        opacity:0,
        duration: 2,
        delay:3.5,
    }
);


gsap.fromTo(
    '.logo-name',
{
    y: 50,
    opacity:0,
},
{
    y:0,
    opacity:1,
    duration:2,
    delay:0.5,
});

// example.html -part..

gsap.to("#exp-page2 h1",{
    transform:"translateX(-80%)",
    scrollTrigger:{
        trigger:"#exp-page2",
        scroller:"body",
        // markers:true,
        start:"top -5%",
        scrub:2,
        pin:true,
    }
})