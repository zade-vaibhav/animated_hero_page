var timeline=gsap.timeline()
timeline.from(".nav .logo, .nav .nav-mid h3,.nav .nav-right ",{
   y:-80,
   stagger:.1
})
timeline.from(".hero h2",{
    x:-200,
    opacity:0,
    duration:0.3,
    stagger:.3
})
timeline.from(".decoration1",{
 opacity:0,
 x:-100
})
timeline.from(".decoration2",{
    opacity:0,
    x:100
 })

timeline.from(".scroll-up",{
    y:20,
    opacity:0,
    duration:.5,
    repeat:-1,
    yoyo:1
 })

