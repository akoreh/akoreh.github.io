const lethargy = new Lethargy(7, 5, 0.05);
let isAnimating = false;

const projects = ["/assets/img/black2.jpg", "assets/img/yeezy.png", "assets/img/project3.png", "/assets/img/project1.png", "/assets/img/project2.jpeg" , "/assets/img/black.jpg"]; //Reverse order
var posX, displacementSprite, displacementFilter, bg, vx;
var app;
var container = new PIXI.Container();
var projectCanvasWrapper;
let isFading = false;
var ripples = [];
let fadeDirection;
var originalPosX;
var visibleIndex = projects.length - 1;
const fadeDuration = 0.007;

$(()=>{
    initScrollEvents();
    initAnimations();
    initProjects();
});

//Animations
let titleTimeline, proj1Timeline, proj2Timeline, proj3Timeline, contacTimeline;

function initAnimations() {
    titleTimeline = new TimelineMax({paused: true});

    titleTimeline
        .staggerTo(".hero__text:first-child > span", 1.4, {y: "-100%", autoAlpha: 1, ease: Power4.EaseOut})
        .to(".hero__text:nth-child(2) > span", 1, {y: "-100%", autoAlpha: 1, ease: Power4.EaseOut}, "-=.4")
        .to(".hero__subtext > span", 1, {y: "-100%", autoAlpha: 1, ease: Power4.EaseOut}, "-=.4")
        .to(".logo", 1, {y: 0, ease: Power4.EaseIn}, "-=.5")
        .to(".scroll-indicator", 1.5, {y: 0, ease: Expo.easeOut}, "-=.5")
        .to(".contact__button", 1, {y: 0, ease: Expo.easeOut, onComplete: onAnimationComplete}, "-=1.5");

    setTimeout(()=>{
        isAnimating = true;
        titleTimeline.play();
    }, 1000);

    //Project 1 (ASARO)

    proj1Timeline = new TimelineMax({paused: true});
    proj1Timeline
        .to(".scroll-indicator", 1.5, {y: "200%", autoAlpha: 0,  ease: Expo.easeOut})
        .to(".hero__text > span", 1, {y: "100%", autoAlpha: 0, ease: Power4.EaseOut}, "-=1.5")
        .to(".hero__subtext > span", 1, {y: "100%", autoAlpha: 0, ease: Power4.EaseOut}, "-=1.4")
        .to(".projects", 0.1, {y: "-100%"}, "-=1");


    //switchColorsTimeline

    switchProjectLinksToBlack = new TimelineMax({paused: true})
        .set(".project__links > a", {color: "#22222"});

    switchToBlackTimeline = new TimelineMax({paused: true})
        .set(".project__title", {color: "#22222"})
        .set(".project__links > a", {color: "#22222"});



    switchLogosTimeline = new TimelineMax({paused: true})
        .to(".logo__image--black", .6, {y: 0, ease: Power4.EaseIn}, "+=.4")
        .to(".logo__image:not(.logo__image--black)", .6, {y: "-100%", ease: Power4.EaseIn}, "-=.4");

    showProjectDetailsTimeline = new TimelineMax({paused: true})
        .to(".project__title > span", 1, {y: "-100%", autoAlpha: 1, ease: Power4.EaseOut})
        .to(".project__links > a > span", 1, {y: "-100%", autoAlpha: 1, ease: Power4.EaseOut}, "-=1");

    contactTimeline = new TimelineMax({paused: true})
        .set(".contact", {y: "-200%"})
        .to(".contact__header > span", 1, {y:"-100%", autoAlpha: 1, ease: Power4.EaseOut})
        .to(".contact__links > a > span", 1, {y:"-100%", autoAlpha: 1, ease: Power4.EaseOut}, "-=.6")
}

function switchToWhite () {
    TweenMax.set(".project__title", {color: "#f0f0f0"})
    TweenMax.set(".project__links > a", {color: "#f0f0f0"});
}

function switchToBlack () {
    TweenMax.set(".project__title", {color: "#222222"})
    TweenMax.set(".project__links > a", {color: "#222222"});
}

function setProjectTitle (projectTitle) {
    setTimeout(function(){
        TweenLite.to(".project__title > span", .6, {text: projectTitle});
    }, 150);
}

function tweenSlide() {
    if(!isFading) {
        if(fadeDirection === -1) {
            //Scrolling down
            if (visibleIndex === projects.length - 1) {
                //Going from title screen to first project
                proj1Timeline.play();
                setTimeout(function(){
                    showProjectDetailsTimeline.play();
                }, 1500)
            } else if (visibleIndex === projects.length - 2){
                //Scrolling to the white project
                showProjectDetailsTimeline.reverse();
                setTimeout(function(){
                    switchToBlack();
                    switchLogosTimeline.play();
                    showProjectDetailsTimeline.play();
                    setProjectTitle("KOOX");
                }, 1000);
            } else if (visibleIndex === projects.length - 3) {
                showProjectDetailsTimeline.reverse();
                setTimeout(function(){
                    switchToWhite();
                    switchLogosTimeline.reverse();
                    showProjectDetailsTimeline.play();
                    setProjectTitle("KIKK");
                }, 1000);
            } else if (visibleIndex === projects.length - 4) {
                showProjectDetailsTimeline.reverse();
                setTimeout(function(){
                    showProjectDetailsTimeline.play();
                    setProjectTitle("Yeezy");
                }, 1000);
            } else if (visibleIndex === projects.length - 5) {
                //Contact scroll
                showProjectDetailsTimeline.reverse();
                setTimeout(function(){
                    contactTimeline.play();
                }, 1000);
            }
        } else { 
            //Scrolling up
            if (visibleIndex === projects.length - 2){
                //Going back to title screen
                showProjectDetailsTimeline.reverse();
                proj1Timeline.reverse();
            } else if (visibleIndex === projects.length - 3) {
                showProjectDetailsTimeline.reverse();
                setTimeout(function(){
                    switchToWhite();
                    switchLogosTimeline.reverse();
                    showProjectDetailsTimeline.play();
                    setProjectTitle("ASARO");
                }, 1000);
            } else if (visibleIndex === projects.length - 4) {
                showProjectDetailsTimeline.reverse();
                setTimeout(function(){
                    switchToBlack();
                    switchLogosTimeline.play();
                    showProjectDetailsTimeline.play();
                    setProjectTitle("KOOX");
                }, 1000);
            } else if (visibleIndex === projects.length - 5) {
                showProjectDetailsTimeline.reverse();
                setTimeout(function(){
                    showProjectDetailsTimeline.play();
                    setProjectTitle("KIKK");
                },1000)
            } else if (visibleIndex === projects.length - 6) {
                contactTimeline.reverse();

                setTimeout(function(){
                    showProjectDetailsTimeline.play();
                }, 1000);
            }
        }

    }
}


function initProjects() {
    projectCanvasWrapper = $(".main__canvas")[0];
    app = new PIXI.Application(projectCanvasWrapper.clientWidth, projectCanvasWrapper.clientHeight);

    projectCanvasWrapper.appendChild(app.view);

    app.stage.interactive = true;

    app.stage.addChild(container);

    PIXI.loader.add("/assets/img/ripple.png");
    PIXI.loader.add("/assets/img/ripple2.png");

    for(const project of projects) {
        PIXI.loader.add(project);
    }

    PIXI.loader.load(setup);
}

function setup() {
    posX = app.renderer.width / 2;
    displacementSprite = new PIXI.Sprite(PIXI.loader.resources["/assets/img/ripple.png"].texture);
    displacementFilter = new PIXI.filters.DisplacementFilter(displacementSprite);
    displacementSprite.anchor.set(0.5);
    displacementSprite.x = app.renderer.width / 2;
    displacementSprite.y = app.renderer.height / 2;
    vx = displacementSprite.x;
  
    app.stage.addChild(displacementSprite);
    container.filters = [displacementFilter];
    displacementFilter.scale.x = 0;
    displacementFilter.scale.y = 0;

    for(let i = 0 ; i < projects.length; i++) {
        bg = new PIXI.Sprite(PIXI.loader.resources[projects[i]].texture);
        bg.width = app.renderer.width;
        bg.height = app.renderer.height;

        if(i != projects.length -1){
            bg.alpha = 0;
        }

        container.addChild(bg);
    }

    app.stage.on("mousemove", onPointerMove).on("touchmove", onPointerMove);
    loop();
}

function onPointerMove(eventData) {
    if(!isFading){
        posX = eventData.data.global.x;
    }
}

function loop() {
    requestAnimationFrame(loop);

    if(isFading){
        if(fadeDirection === -1 && projects[visibleIndex - 1]) {
            //scrolling down
            container.getChildAt(visibleIndex).alpha -= fadeDuration;
            container.getChildAt(visibleIndex - 1).alpha += fadeDuration;
        }else if(fadeDirection === 1 && projects[visibleIndex + 1]){
            //scrolling up
            container.getChildAt(visibleIndex).alpha -= fadeDuration;
            container.getChildAt(visibleIndex + 1).alpha += fadeDuration;
        }else {
            isFading = false;
        }

        if(container.getChildAt(visibleIndex).alpha <= 0){
            isFading = false;
            visibleIndex += fadeDirection;
        }
    }else {
        vx += (posX - displacementSprite.x) * 0.045;
        displacementSprite.x = vx;
        var disp = Math.floor(posX - displacementSprite.x);
        if (disp < 0) disp = -disp;
        var fs = map(disp, 0, 500, 0, 120);
        disp = map(disp, 0, 500, 0.1, 0.6);
        displacementSprite.scale.x = disp;
        displacementFilter.scale.x = fs;
    }

    updateRipples();
}

function updateRipples() {
    for(var i=0; i<ripples.length; i++) {
        ripples[i].update();
    }
}

function Ripple(x, y) {
    // sprite
    this.sprite = new PIXI.Sprite(PIXI.loader.resources["/assets/img/ripple2.png"].texture);
    this.sprite.anchor.set(0.5);
    this.sprite.position.set(x, y);
    this.sprite.scale.set(0.1);
    app.stage.addChild(this.sprite);
    // filter
    this.filter = new PIXI.filters.DisplacementFilter(this.sprite);
}

Ripple.prototype.update = function() {
    this.sprite.scale.x += 0.03;
    this.sprite.scale.y += 0.03;
}

Ripple.prototype.destroy = function() {
    app.stage.removeChild(this.sprite);
}

map = function(n, start1, stop1, start2, stop2) {
    var newval = (n - start1) / (stop1 - start1) * (stop2 - start2) + start2;
    return newval;
};

//Events

function initScrollEvents() {
    document.addEventListener("wheel", onScroll, {passive: false}),
    document.addEventListener("mousewheel", onScroll, {passive: false}),
    document.addEventListener("DOMMouseScroll", onScroll, {passive: false})
}

function onScroll(e) {
   e.preventDefault()
   e.stopPropagation();

   if(!isFading) {
       fadeDirection = e.deltaY > 0 ? -1 : 1;

       tweenSlide();
       isFading = true;
       ripples.push(new Ripple(app.renderer.width / 2, app.renderer.height / 2));
       app.stage.filters = ripples.map(function(f) { return f.filter; });
   }
}


function onAnimationComplete() {
    isAnimating = false;
}