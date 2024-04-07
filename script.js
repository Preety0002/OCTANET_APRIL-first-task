var menu=document.querySelector("#page1 nav i")
var cross=document.querySelector(".extra i")

var tl=gsap.timeline()
 
tl.from(".extra",{
duration:2,
right:"-20%",

})

tl.pause()
menu.addEventListener("click",function(){
    tl.play()
})
cross.addEventListener("click",function(){
    tl.reverse()
})


gsap.from(".page1-content1-left h1",{
    // x:-500,
    duration:3,
    delay:1,
    // repeat:-1,
    yoyo:true,
    scrub:2,
    stagger:0.3,
    opacity:0,
    scale:0
})
gsap.from(".page1-content1-right",{
    x:-500,
    duration:3,
    delay:1,
    // repeat:-1,
    yoyo:true,
    scrub:2,
    stagger:0.3,
    opacity:0,
    // scale:0
})