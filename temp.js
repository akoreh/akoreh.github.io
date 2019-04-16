$(()=>{

	$('.header__hoverable').each( function(){
		$(this).attr('data-buzz', $(this).text() );
	});

    const scrollSpeed = 8;

    $("html").niceScroll({
        cursorwidth: "0px",
        scrollspeed: scrollSpeed,
        mousescrollstep: scrollSpeed,
        autohidemode: "hidden",
        cursoropacitymax: 0
    });
    $("html").getNiceScroll().hide();

    const docWidth = $(document).width();

    const scrollController = new ScrollMagic.Controller();


    //Scene 1
    const tlFirstScroll = new TimelineMax();


    tlFirstScroll
        .to(".header__spaced", 2, {x: "15%", letterSpacing: 0})
        .to(".header__k", 2, {x: "-150%"}, "-=2")
        .to(".stage-wrapper", 2, {backgroundPosition: "100% 0"}, "-=2")
        .to(".header__k", (docWidth > 2400 ? .2 : .2), {backgroundPosition: "100% 0%"}, `-=${docWidth > 2400 ? "1.345" : "1.31"}`)
        
        .set(".stage-wrapper", {css: {backgroundImage: "linear-gradient(to bottom, #f0f0f0 50%, #000 50%)", backgroundPosition: "0% 0%"}})
        .set(".header__k", {css: {backgroundImage: "linear-gradient(to top, #f0f0f0 50%, #000 50%)", backgroundPosition: "100% 0%"}})
        .set(".header__spaced", {css: {backgroundImage: "linear-gradient(to top, #f0f0f0 50%, #000 50%)", backgroundPosition: "100% 0%"}})
        
        .to(".header", 2, {y: "20vh"})
        .to(".stage-wrapper", 2, {backgroundPosition: "0 -100vh"}, "-=2")

        .to(".header__k", 1 , {backgroundPosition: "0% 100%"}, "-=1.415")
        .to(".header__spaced", 1 , {backgroundPosition: "0% 100%"}, "-=1.415")
       
        .to(".header2", 2, {y: "-20vh"}, "-=1")
        .to(".cover", 2, {x: 0})
        .set(".stage-wrapper", {backgroundColor: "#f0f0f0", backgroundImage: "none"},"-=.5");
        //.fromTo(".header__k", .25,{backgroundPosition: "200% 0"}, {backgroundPosition: "-200% 0"}, "-=1")
    


    const scene1  = new ScrollMagic.Scene({
        triggerElement: ".trigger1",
        triggerHook: 0,
        offset: 20,
        duration: "200%"
    });

    scene1
        .setTween(tlFirstScroll)
        .addIndicators()
        .addTo(scrollController);


    //Scene 2
    const tlSecondScroll = new TimelineMax();

    const scene2 = new ScrollMagic.Scene({
        triggerElement: ".trigger2",
        triggerHook: 0,
        offset: 10,
        duration: "90%"
    });

    scene2
        .setPin(".trigger1")
        .setTween(tlSecondScroll)
        .addIndicators()
        .addTo(scrollController);

});


