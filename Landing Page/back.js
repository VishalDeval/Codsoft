var tl=gsap.timeline()


tl.from(("#webname"),{
    y:50,
    duration:.5,
    delay:.7,
    opacity:0,
},"rakhi")

tl.from(("h3"),{
    y:100,
    duration:.5,
    delay:.5,
    stagger:.5,
    opacity:0,
},"rakhi")

tl.from("#o",{
    duration:1,
    delay:.4,
    rotate:360,
    repeat:-1,
})

gsap.from("#i",{
    rotateX:180,
    duration:1.5,
    delay:3,
    repeat:-1,
    ease: "expo.inOut",
    yoyo:true,
})

gsap.from("#e",{
    rotate:360,
    duration:1.5,
    delay:2,
    repeat:1,
    ease: "back.inOut(1.7)",
})

gsap.to("#headline",{
    translateX:(-3500),
    duration:20,
    delay:.1,
    repeat:-1,
    ease: "sine.inOut",
})
gsap.to("#location",{
    rotateY:360,
    duration:.7,
    scrollTrigger:{
        trigger:"#location",
        scroller:"body",
        start:"top 60%",
        scrub:2,
    }
})
gsap.from(".left",{
    opacity:0,
    x:-100,
    
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        start:"top 65%",
        end:"bottom 180%",
        marker:true,
        scrub:2,
    }
})

gsap.from(".right",{
    opacity:0,
    x:100,
    
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        marker:true,
        start:"top 65%",
        end:"bottom 180%",
        scrub:2,
    }
})
gsap.from("#logoImg",{
    rotate:360,
    x:700,
    scrollTrigger:{
        trigger:"#logoImg",
        scroller:"body",
        start:"top 150%",
        end:"bottom 90%",
        scrub:2,
    }
})
var page=document.querySelector('body')
var v=document.querySelector('#circle')
page.addEventListener('mousemove',function(k){
    gsap.to(v,{
        x:k.x,
        y:k.y,
        duration:.5,
        ease:"sine.out"
    })
})

gsap.to("#page4 div",{
    transform:"translateX(-300%)",
    scrollTrigger:{
        trigger:"#page4",
        scroller:"body",
        start:"top -30%",
        end:"bottom 0%",
        pin:true,
        scrub:2,
    }
})

gsap.from("#map",{
    opacity:0,
    x:100,
    duration:.7,
    scrollTrigger:{
        trigger:"#map",
        scroller:"body",
        marker:true,
        start:"top 99%",
        end:"bottom 70%",
        scrub:2,
    }
})


gsap.from("#page3text",{
    opacity:0,
    x:100,
    duration:.7,
    scrollTrigger:{
        trigger:"#page3text",
        scroller:"body",
        marker:true,
        start:"top 150%",
        end:"bottom 90%",
        scrub:2,
    }
})
document.getElementsByClassName('ham')[0].addEventListener('click',function(){
    document.getElementsByClassName('menu')[0].classList.toggle('expanded');
    gsap.from(("a"),{
        x:100,
        duration:.5,
        delay:.1,
        stagger:.3,
        opacity:0,
    })
})
document.addEventListener('click', function(event) {
    const navbar = document.getElementsByClassName('menu')[0];
    if (!navbar.contains(event.target)) {
        navbar.classList.remove('expanded');
    }
});

for (let j=0;j<4;j++){
    document.getElementsByTagName('h3')[j].addEventListener('click',function(){
        document.getElementsByClassName('menu')[0].classList.remove('expanded');  
    })
}
document.getElementById('see').addEventListener('click',function(){
    open('https://maps.app.goo.gl/Vj3hGMmaYtynLTv6A')
})