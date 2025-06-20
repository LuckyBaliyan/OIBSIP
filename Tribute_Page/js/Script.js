document.addEventListener("DOMContentLoaded",()=>{
    const headers = document.querySelectorAll("article ul li");
    const para = document.querySelector(".info p");
    const mask = document.querySelector(".img-container");
    const ring = document.querySelector(".ring");
    const blob = document.querySelector(".blob");

    let tl = gsap.timeline();


    gsap.set(headers,{opacity:0,y:30});
    gsap.set(para,{clipPath:"polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",y:5});
    gsap.set(mask,{scale:0})//clipPath:"ellipse(100% 0% at 50% 50%)"});
    gsap.set(ring,{clipPath:"inset(50% 0% 50% 0%)",opacity:0});
    gsap.set(blob,{opacity:0});
    gsap.set("nav h1",{y:-30});

    gsap.to("nav h1",{
        y:0,
        ease:"Power3.Out",
       delay:.1,
    })

    function callBackRing(){
          gsap.to(ring,{
          opacity:1,
          clipPath:"inset(0% 0% 0% 0%)",
          ease:"Expo.Out",
          duration:1,
          delay:1,
       },"y");
   
       gsap.to(blob,{
           opacity:1,
           delay:1,
       },"y");
    }

    tl.to(headers,{
        y:0,
        opacity:1,
        ease:"power3.Out",
        duration:.8,
    })


    tl.to(mask,{
        //clipPath:"ellipse(150% 150% at 50% 50%)",
        scale:1,
        duration: 2.1,
        ease: "Expo.out",
        onComplete:callBackRing(),
    },"x");

    tl.to(para,{
        clipPath:"polygon(0 0%, 100% 0%, 100% 100%, 0 100%)",
        y:0,
        ease:"Expo.Out",
        duration:.8,
    },"x");

})