// gsap.fromTo(
//     '#Robot', 
//     { 
//         y: 0 
//     }, 
//     { 
//         duration: 1, y: -50 
//     }
// )
// .to(
//     '#Shadow', 
//     {
//         scale: 0.75,
//     },
//     '<',
// )

let tl = gsap.timeline({
    defaults: {
        ease: 'power1.inOut',
    },
})

tl.fromTo(
    '#Robot',
    {
        y: 0,
    },
    {
        y: -50,
    }
)
.to(
    '#Shadow',
    {
        scale: 0.75
    }
)
.to(
    '#Head', 
    {
        y: 1,
        yoyoEase: 'power3.out'
    },
    '<',
).to(
    
)
    
    
