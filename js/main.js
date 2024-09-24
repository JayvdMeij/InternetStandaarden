document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(Flip, ScrollTrigger, Observer, ScrollToPlugin, Draggable, MotionPathPlugin, EaselPlugin, PixiPlugin, TextPlugin, RoughEase, ExpoScaleEase, SlowMo, CustomEase)
    
    var tl = gsap.timeline({delay: 0});
//sequenced one-after-the-other
tl.to(".blokje1", {duration: 2, rotation: -360})
  .to(".blokje2", {duration: 1, x: 100, ease: 'elastic.out'})
  .to(".blokje3", {duration: 2, rotation: 360, x: 100, ease: 'expo.out'});


  gsap.to('.blok4', {scrollTrigger: '.box', duration:5, x: 500});
    });

