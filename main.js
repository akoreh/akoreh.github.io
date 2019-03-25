(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\r\n<div class=\"parallax--noScroll\">\r\n  <div class=\"parallax\">\r\n    <div class=\"parallax__layer parallax__layer__0\">\r\n      <img src=\"./assets/images/layer_0.png\" />\r\n    </div>\r\n    <div class=\"parallax__layer parallax__layer__1\">\r\n      <img src=\"./assets/images/layer_1.png\" />\r\n    </div>\r\n    <div class=\"parallax__layer parallax__layer__2\">\r\n      <img src=\"./assets/images/layer_2.png\" />\r\n    </div>\r\n    <div class=\"parallax__layer parallax__layer__3\">\r\n      <img src=\"./assets/images/layer_3.png\" />\r\n    </div>\r\n    <div class=\"parallax__layer parallax__layer__4\">\r\n      <img src=\"./assets/images/layer_4.png\" />\r\n    </div>\r\n    <div class=\"parallax__layer parallax__layer__5\">\r\n      <img src=\"./assets/images/layer_5.png\" />\r\n    </div>\r\n    <div class=\"parallax__layer parallax__layer__6\">\r\n      <img src=\"./assets/images/layer_6.png\" />\r\n    </div>\r\n    <!-- <app-browser></app-browser> -->\r\n    <div class=\"desktop-icons\">\r\n      <app-desktop-icon \r\n          *ngFor=\"let desktopIcon of desktopIcons\" \r\n          icon={{desktopIcon.icon}} \r\n          iconType={{desktopIcon.iconType}} \r\n          label={{desktopIcon.label}}>\r\n      </app-desktop-icon>\r\n    </div>\r\n    <a href=\"#\" class=\"scrollIndicator\"></a>\r\n    <div class=\"parallax__cover\"></div>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".parallax--noScroll {\n  overflow: hidden;\n  /* Adjust the size to resize the indicator. */ }\n  .parallax--noScroll .parallax {\n    overflow-y: scroll;\n    -webkit-perspective: 100px;\n            perspective: 100px;\n    height: 100vh;\n    overflow-x: hidden;\n    position: absolute;\n    top: 0;\n    left: 50%;\n    right: 0;\n    bottom: 0;\n    margin-left: -1500px; }\n  .parallax--noScroll .parallax__layer {\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0; }\n  .parallax--noScroll .parallax__layer img {\n      display: block;\n      position: absolute;\n      bottom: 0; }\n  .parallax--noScroll .desktop-icons {\n    width: 12rem;\n    position: fixed;\n    top: 4.5rem;\n    right: .5rem;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between;\n    flex-direction: column; }\n  .parallax--noScroll .scrollIndicator {\n    position: fixed;\n    width: 2em;\n    height: 3.8em;\n    bottom: 3em;\n    border: 0.2em solid rgba(255, 255, 255, 0.8);\n    border-radius: 5em;\n    right: 4rem; }\n  .parallax--noScroll .scrollIndicator:before {\n      content: '';\n      position: absolute;\n      left: calc(50% - .2em);\n      top: .4em;\n      width: .4em;\n      height: .4em;\n      background: rgba(255, 255, 255, 0.8);\n      border-radius: 50%;\n      -webkit-animation: fadeTo 1.4s ease-in infinite;\n      animation: fadeTo 1.4s ease-in infinite; }\n  @-webkit-keyframes fadeTo {\n  from { }\n  to {\n    -webkit-transform: translateY(1em);\n            transform: translateY(1em);\n    opacity: 0; } }\n  @keyframes fadeTo {\n  from { }\n  to {\n    -webkit-transform: translateY(1em);\n            transform: translateY(1em);\n    opacity: 0; } }\n  .parallax--noScroll .parallax__cover {\n    background: #2D112B;\n    display: block;\n    position: absolute;\n    top: 100%;\n    left: 0;\n    right: 0;\n    height: 2000px;\n    z-index: 2; }\n  .parallax--noScroll .parallax__layer__0 {\n    -webkit-transform: translateZ(-300px) scale(4);\n            transform: translateZ(-300px) scale(4); }\n  .parallax--noScroll .parallax__layer__1 {\n    -webkit-transform: translateZ(-250px) scale(3.5);\n            transform: translateZ(-250px) scale(3.5); }\n  .parallax--noScroll .parallax__layer__2 {\n    -webkit-transform: translateZ(-200px) scale(3);\n            transform: translateZ(-200px) scale(3); }\n  .parallax--noScroll .parallax__layer__3 {\n    -webkit-transform: translateZ(-150px) scale(2.5);\n            transform: translateZ(-150px) scale(2.5); }\n  .parallax--noScroll .parallax__layer__4 {\n    -webkit-transform: translateZ(-100px) scale(2);\n            transform: translateZ(-100px) scale(2); }\n  .parallax--noScroll .parallax__layer__5 {\n    -webkit-transform: translateZ(-50px) scale(1.5);\n            transform: translateZ(-50px) scale(1.5); }\n  .parallax--noScroll .parallax__layer__6 {\n    -webkit-transform: translateZ(0px) scale(1);\n            transform: translateZ(0px) scale(1); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXFByb2plY3RzXFxQb3J0Zm9saW8vc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQTBDaEIsNkNBQUEsRUFBOEM7RUEzQ2hEO0lBSUksa0JBQWtCO0lBQ2xCLDBCQUFrQjtZQUFsQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLFNBQVM7SUFDVCxRQUFRO0lBQ1IsU0FBUztJQUNULG9CQUFvQixFQUFBO0VBYnhCO0lBaUJJLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sUUFBUTtJQUNSLFNBQVM7SUFDVCxPQUFPLEVBQUE7RUFyQlg7TUF3Qk0sY0FBYztNQUNkLGtCQUFrQjtNQUNsQixTQUFTLEVBQUE7RUExQmY7SUErQkksWUFBWTtJQUNaLGVBQWU7SUFDZixXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYixlQUFlO0lBQ2YsOEJBQThCO0lBQzlCLHNCQUFzQixFQUFBO0VBdEMxQjtJQThDSSxlQUFlO0lBQ2YsVUFBVTtJQUNWLGFBQWE7SUFDYixXQUFXO0lBQ1gsNENBVDZCO0lBVTdCLGtCQUFrQjtJQUNsQixXQUFXLEVBQUE7RUFwRGY7TUF1RE0sV0FBVztNQUNYLGtCQUFrQjtNQUNsQixzQkFBc0I7TUFDdEIsU0FBUztNQUNULFdBQVc7TUFDWCxZQUFZO01BQ1osb0NBcEIyQjtNQXFCM0Isa0JBQWtCO01BQ2xCLCtDQUErQztNQUMvQyx1Q0FBdUMsRUFBQTtFQUd6QztFQUNFLE9BQUk7RUFFSjtJQUNFLGtDQUEwQjtZQUExQiwwQkFBMEI7SUFDMUIsVUFBVSxFQUFBLEVBQUE7RUFJZDtFQUNFLE9BQUk7RUFFSjtJQUNFLGtDQUEwQjtZQUExQiwwQkFBMEI7SUFDMUIsVUFBVSxFQUFBLEVBQUE7RUFqRmxCO0lBdUZJLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxPQUFPO0lBQ1AsUUFBUTtJQUNSLGNBQWM7SUFDZCxVQUFVLEVBQUE7RUE5RmQ7SUF1R00sOENBQXFEO1lBQXJELHNDQUFxRCxFQUFBO0VBdkczRDtJQXVHTSxnREFBcUQ7WUFBckQsd0NBQXFELEVBQUE7RUF2RzNEO0lBdUdNLDhDQUFxRDtZQUFyRCxzQ0FBcUQsRUFBQTtFQXZHM0Q7SUF1R00sZ0RBQXFEO1lBQXJELHdDQUFxRCxFQUFBO0VBdkczRDtJQXVHTSw4Q0FBcUQ7WUFBckQsc0NBQXFELEVBQUE7RUF2RzNEO0lBdUdNLCtDQUFxRDtZQUFyRCx1Q0FBcUQsRUFBQTtFQXZHM0Q7SUF1R00sMkNBQXFEO1lBQXJELG1DQUFxRCxFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhcmFsbGF4LS1ub1Njcm9sbCB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgLnBhcmFsbGF4IHtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgIHBlcnNwZWN0aXZlOiAxMDBweDtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMTUwMHB4O1xyXG4gIH1cclxuXHJcbiAgLnBhcmFsbGF4X19sYXllciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgYm90dG9tOiAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmRlc2t0b3AtaWNvbnMge1xyXG4gICAgd2lkdGg6IDEycmVtO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiA0LjVyZW07XHJcbiAgICByaWdodDogLjVyZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcblxyXG4gICRzb2xpZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAuOCk7XHJcbiAgJHNpemU6IDQwcHg7XHJcbiAgLyogQWRqdXN0IHRoZSBzaXplIHRvIHJlc2l6ZSB0aGUgaW5kaWNhdG9yLiAqL1xyXG5cclxuICAuc2Nyb2xsSW5kaWNhdG9yIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHdpZHRoOiAyZW07XHJcbiAgICBoZWlnaHQ6IDMuOGVtO1xyXG4gICAgYm90dG9tOiAzZW07XHJcbiAgICBib3JkZXI6IC4yZW0gc29saWQgJHNvbGlkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNWVtO1xyXG4gICAgcmlnaHQ6IDRyZW07XHJcblxyXG4gICAgJjpiZWZvcmUge1xyXG4gICAgICBjb250ZW50OiAnJztcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBsZWZ0OiBjYWxjKDUwJSAtIC4yZW0pO1xyXG4gICAgICB0b3A6IC40ZW07XHJcbiAgICAgIHdpZHRoOiAuNGVtO1xyXG4gICAgICBoZWlnaHQ6IC40ZW07XHJcbiAgICAgIGJhY2tncm91bmQ6ICRzb2xpZDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZVRvIDEuNHMgZWFzZS1pbiBpbmZpbml0ZTtcclxuICAgICAgYW5pbWF0aW9uOiBmYWRlVG8gMS40cyBlYXNlLWluIGluZmluaXRlO1xyXG4gICAgfVxyXG5cclxuICAgIEAtd2Via2l0LWtleWZyYW1lcyBmYWRlVG8ge1xyXG4gICAgICBmcm9tIHt9XHJcblxyXG4gICAgICB0byB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDFlbSk7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBrZXlmcmFtZXMgZmFkZVRvIHtcclxuICAgICAgZnJvbSB7fVxyXG5cclxuICAgICAgdG8ge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxZW0pO1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5wYXJhbGxheF9fY292ZXIge1xyXG4gICAgYmFja2dyb3VuZDogIzJEMTEyQjtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxMDAlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgaGVpZ2h0OiAyMDAwcHg7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gIH1cclxuXHJcbiAgJHBhcmFsbGF4X19sYXllcnM6IDY7XHJcblxyXG4gIEBmb3IgJGkgZnJvbSAwIHRocm91Z2ggJHBhcmFsbGF4X19sYXllcnMge1xyXG4gICAgJHg6ICgkcGFyYWxsYXhfX2xheWVycyAtICRpKSAvIDI7XHJcblxyXG4gICAgLnBhcmFsbGF4X19sYXllcl9fI3skaX0ge1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTEwMCAqICR4I3tweH0pIHNjYWxlKCR4ICsgMSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.scrollInstances = 0;
        this.isLoading = true;
        this.desktopIcons = [
            {
                icon: "folder",
                iconType: "png",
                label: "Projects"
            },
            {
                icon: "about",
                iconType: "svg",
                label: "About"
            },
            {
                icon: "notchrome",
                iconType: "png",
                label: "Not Chrome"
            },
            {
                icon: "bird",
                iconType: "png",
                label: "Not Flappy Bird"
            },
            {
                icon: "fireworks",
                iconType: "svg",
                label: "Fireworks"
            },
        ];
    }
    AppComponent.prototype.ngOnInit = function () {
        this.handleLoadingScreen();
    };
    AppComponent.prototype.ngAfterViewInit = function () {
        this.scrollIndicator = document.getElementsByClassName("scrollIndicator")[0];
        var scroll$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(document.querySelector('.parallax'), 'scroll');
        this.scrollSubscription = scroll$.subscribe(this.handleScroll.bind(this));
    };
    AppComponent.prototype.handleLoadingScreen = function () {
        var _this = this;
        var loadingAnimationTime = 2;
        var loadingDelay = 0;
        var fadeOutAnimationDuration = .5;
        setTimeout(function (_) {
            var loadingScreen = document.querySelector("#loading");
            var loadingProgress = document.querySelector(".progress");
            _this.hideElement(loadingProgress);
            loadingScreen.className += "fade-out";
            setTimeout(function (_) {
                loadingScreen.style.display = "none";
                _this.hideElement(loadingScreen);
            }, fadeOutAnimationDuration * 1000);
        }, loadingAnimationTime * 1000 + loadingDelay * 1000);
    };
    AppComponent.prototype.handleScroll = function () {
        this.scrollInstances++;
        if (this.scrollInstances > 15) {
            this.hideElement(this.scrollIndicator);
            this.scrollSubscription.unsubscribe();
        }
    };
    AppComponent.prototype.hideElement = function (element) {
        element.style.display = "none";
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _desktop_icon_desktop_icon_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./desktop-icon/desktop-icon.component */ "./src/app/desktop-icon/desktop-icon.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _browser_browser_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./browser/browser.component */ "./src/app/browser/browser.component.ts");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_5__["NavComponent"],
                _desktop_icon_desktop_icon_component__WEBPACK_IMPORTED_MODULE_6__["DesktopIconComponent"],
                _browser_browser_component__WEBPACK_IMPORTED_MODULE_8__["BrowserComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/browser/browser.component.html":
/*!************************************************!*\
  !*** ./src/app/browser/browser.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"browser\" cdkDrag>\n  <div class=\"browser-header\">\n    <div class=\"browser-btns\">\n      <div class=\"browser-btn close\"></div>\n      <div class=\"browser-btn retract\"></div>\n      <div class=\"browser-btn expand\"></div>\n    </div>\n    <ul class=\"tabs\">\n      <li class=\"tab active\"><i class=\"fa fa-codepen\"></i> Active Tab<span class=\"close\">x</span></li>\n      <li class=\"tab\"><i class=\"fa fa-apple\"></i> Inactive Tab<span class=\"close\">x</span></li>\n    </ul>\n  </div>\n  <div class=\"browser-bar\">\n    <div class=\"button\"><i class=\"fa fa-arrow-left\"></i></div>\n    <div class=\"button inactive\"><i class=\"fa fa-arrow-right\"></i></div>\n    <div class=\"button\"><i class=\"fa fa-rotate-right\"></i></div>\n    <input class=\"address\" value=\"https://akoreh.com\"/>\n    <div class=\"button\"><i class=\"fa fa-bars\"></i></div>\n  </div>\n  <div class=\"page\">\n    <iframe class=\"browser__content\" src=\"https://akoreh.com\" frameborder=\"0\"></iframe>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/browser/browser.component.scss":
/*!************************************************!*\
  !*** ./src/app/browser/browser.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".browser {\n  background-color: #EBEBEB;\n  border-radius: 4px;\n  margin: 50px auto;\n  width: 80vw;\n  height: 80vh;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);\n  overflow: hidden;\n  display: flex;\n  flex-direction: column; }\n  .browser__content {\n    height: 100%;\n    width: 100%; }\n  .browser-header {\n  flex-basis: auto;\n  height: 35px;\n  background: #ebebeb;\n  background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #ebebeb), color-stop(100%, #d9d9d9));\n  border-bottom: 1px solid #969696;\n  display: flex; }\n  .browser-btns {\n  height: 35px;\n  display: inline-block;\n  padding: 0 10px;\n  line-height: 38px;\n  width: 55px;\n  flex-basis: auto; }\n  .browser-btn {\n  width: 10px;\n  height: 10px;\n  border: 1px solid rgba(0, 0, 0, 0.15);\n  border-radius: 6px;\n  display: inline-block;\n  margin: 1px; }\n  .browser-btn.close {\n  background-color: #FD615B; }\n  .browser-btn.retract {\n  background-color: #FDBC40; }\n  .browser-btn.expand {\n  background-color: #33C84A; }\n  .tabs {\n  flex: 1;\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n  line-height: 35px;\n  max-height: 35px;\n  display: inline-block;\n  padding: 0 12px; }\n  .tabs .tab {\n  color: #333;\n  float: left;\n  margin: 10px -10px 0;\n  border-top-right-radius: 25px 170px;\n  border-top-left-radius: 20px 90px;\n  padding: 0 30px 0 25px;\n  height: 170px;\n  background: #CBCCCC;\n  position: relative;\n  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.5);\n  width: 100px;\n  border: 1px solid #B4B4B4;\n  font-size: 11px;\n  font-family: Verdana, sans-serif;\n  line-height: 25px;\n  cursor: pointer; }\n  .tabs .tab:before,\n.tabs .tab:after {\n  content: \"\";\n  background: transparent;\n  height: 20px;\n  width: 20px;\n  border-radius: 100%;\n  border-width: 10px;\n  top: 0px;\n  border-style: solid;\n  position: absolute; }\n  .tabs .tab:before {\n  border-color: transparent #CBCCCC transparent transparent;\n  -webkit-transform: rotate(50deg);\n  left: -23px; }\n  .tabs .tab:after {\n  border-color: transparent transparent transparent #CBCCCC;\n  -webkit-transform: rotate(-50deg);\n  right: -17px; }\n  .tabs .tab .fa {\n  font-size: 13px; }\n  .tabs .tab .fa.fa-apple {\n  color: #666; }\n  .tabs .tab .close {\n  position: absolute;\n  right: 25px;\n  top: 0px;\n  display: inline-block;\n  color: #888;\n  margin-left: 5px; }\n  .tabs .tab .close:after {\n  position: absolute;\n  content: \"\";\n  width: 139px;\n  display: block;\n  height: 1px;\n  background: #969696;\n  z-index: 3;\n  top: 24px;\n  right: -15px;\n  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.8); }\n  .tabs .tab.active {\n  background: #EBEEEB; }\n  .tabs .tab.active:before {\n  border-color: transparent #EBEEEB transparent transparent;\n  z-index: 2; }\n  .tabs .tab.active:after {\n  border-color: transparent transparent transparent #EBEEEB;\n  z-index: 2; }\n  .tabs .tab.active .close:after {\n  display: none; }\n  .browser-bar {\n  flex-basis: auto;\n  height: 28px;\n  background: #EBEEEB;\n  z-index: 15;\n  padding: 6px;\n  border-bottom: 1px solid #aaa;\n  display: flex; }\n  .browser-bar .button {\n  flex-basis: auto;\n  text-align: center;\n  font-size: 17px;\n  color: #6D6D6E;\n  padding: 3px;\n  display: inline-block;\n  width: 20px;\n  border: 1px solid #EBEEEB; }\n  .browser-bar .button:not(.inactive):hover {\n  border: 1px solid #b4bfb4;\n  cursor: pointer;\n  border-radius: 3px; }\n  .browser-bar .button.inactive {\n  opacity: 0.3; }\n  .browser-bar .address {\n  flex: 1;\n  background: #fff;\n  border-radius: 3px;\n  margin: 0px 3px;\n  border: 1px solid #ccc;\n  padding: 5px;\n  font-size: 14px;\n  color: #555; }\n  .page {\n  flex: 1;\n  background: white;\n  z-index: 10;\n  text-align: center;\n  overflow-y: auto;\n  position: relative; }\n  .page h1 {\n  font-size: 3em;\n  font-family: \"Abril Fatface\", cursive;\n  margin-bottom: 0;\n  color: rgba(255, 0, 0, 0.3); }\n  .page h1 span {\n  color: rgba(255, 0, 0, 0.5); }\n  .page h2 {\n  font-family: \"Roboto\", sans-serif;\n  padding: 0;\n  margin: 0;\n  color: rgba(71, 207, 115, 0.8); }\n  .page .lines {\n  padding: 30px; }\n  .page .line {\n  background-color: #ededed;\n  height: 10px;\n  margin: 15px 0px;\n  border-radius: 3px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnJvd3Nlci9EOlxcUHJvamVjdHNcXFBvcnRmb2xpby9zcmNcXGFwcFxcYnJvd3NlclxcYnJvd3Nlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBRTtFQUNFLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxZQUFZO0VBQ1osd0NBQXFDO0VBQ3JDLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isc0JBQXNCLEVBQUE7RUFHdEI7SUFDSSxZQUFZO0lBQ1osV0FBVyxFQUFBO0VBSWpCO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsK0dBQStHO0VBQy9HLGdDQUFnQztFQUNoQyxhQUFhLEVBQUE7RUFHZjtFQUNFLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsZ0JBQWdCLEVBQUE7RUFHbEI7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHFDQUFxQztFQUNyQyxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLFdBQVcsRUFBQTtFQUdiO0VBQ0UseUJBQXlCLEVBQUE7RUFHM0I7RUFDRSx5QkFBeUIsRUFBQTtFQUczQjtFQUNFLHlCQUF5QixFQUFBO0VBRzNCO0VBQ0UsT0FBTztFQUNQLFNBQVM7RUFDVCxVQUFVO0VBQ1YscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLGVBQWUsRUFBQTtFQUdqQjtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsb0JBQW9CO0VBQ3BCLG1DQUFtQztFQUNuQyxpQ0FBaUM7RUFDakMsc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLDBDQUEwQztFQUMxQyxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixnQ0FBZ0M7RUFDaEMsaUJBQWlCO0VBQ2pCLGVBQWUsRUFBQTtFQUdqQjs7RUFFRSxXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsbUJBQW1CO0VBQ25CLGtCQUFrQixFQUFBO0VBR3BCO0VBQ0UseURBQXlEO0VBQ3pELGdDQUFnQztFQUNoQyxXQUFXLEVBQUE7RUFHYjtFQUNFLHlEQUF5RDtFQUN6RCxpQ0FBaUM7RUFDakMsWUFBWSxFQUFBO0VBR2Q7RUFDRSxlQUFlLEVBQUE7RUFHakI7RUFDRSxXQUFXLEVBQUE7RUFHYjtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsUUFBUTtFQUNSLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsZ0JBQWdCLEVBQUE7RUFHbEI7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixjQUFjO0VBQ2QsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1YsU0FBUztFQUNULFlBQVk7RUFDWiwrQ0FBK0MsRUFBQTtFQUdqRDtFQUNFLG1CQUFtQixFQUFBO0VBR3JCO0VBQ0UseURBQXlEO0VBQ3pELFVBQVUsRUFBQTtFQUdaO0VBQ0UseURBQXlEO0VBQ3pELFVBQVUsRUFBQTtFQUdaO0VBQ0UsYUFBYSxFQUFBO0VBR2Y7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsWUFBWTtFQUNaLDZCQUE2QjtFQUM3QixhQUFhLEVBQUE7RUFHZjtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGNBQWM7RUFDZCxZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCx5QkFBeUIsRUFBQTtFQUczQjtFQUNFLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2Ysa0JBQWtCLEVBQUE7RUFHcEI7RUFDRSxZQUFZLEVBQUE7RUFHZDtFQUNFLE9BQU87RUFDUCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGVBQWU7RUFDZixXQUFXLEVBQUE7RUFHYjtFQUNFLE9BQU87RUFDUCxpQkFBaUI7RUFDakIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsa0JBQWtCLEVBQUE7RUFHcEI7RUFDRSxjQUFjO0VBQ2QscUNBQXFDO0VBQ3JDLGdCQUFnQjtFQUNoQiwyQkFBMkIsRUFBQTtFQUc3QjtFQUNFLDJCQUEyQixFQUFBO0VBRzdCO0VBQ0UsaUNBQWlDO0VBQ2pDLFVBQVU7RUFDVixTQUFTO0VBQ1QsOEJBQThCLEVBQUE7RUFHaEM7RUFDRSxhQUFhLEVBQUE7RUFHZjtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvYnJvd3Nlci9icm93c2VyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICAuYnJvd3NlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUJFQkVCO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgbWFyZ2luOiA1MHB4IGF1dG87XHJcbiAgICB3aWR0aDogODB2dztcclxuICAgIGhlaWdodDogODB2aDtcclxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDVweCByZ2JhKDAsMCwwLDAuMyk7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG5cclxuICAgICZfX2NvbnRlbnQge1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5icm93c2VyLWhlYWRlciB7XHJcbiAgICBmbGV4LWJhc2lzOiBhdXRvO1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ViZWJlYjtcclxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGNvbG9yLXN0b3AoMCUsICNlYmViZWIpLCBjb2xvci1zdG9wKDEwMCUsICNkOWQ5ZDkpKTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjOTY5Njk2O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICB9XHJcblxyXG4gIC5icm93c2VyLWJ0bnMge1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZzogMCAxMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDM4cHg7XHJcbiAgICB3aWR0aDogNTVweDtcclxuICAgIGZsZXgtYmFzaXM6IGF1dG87XHJcbiAgfVxyXG5cclxuICAuYnJvd3Nlci1idG4ge1xyXG4gICAgd2lkdGg6IDEwcHg7XHJcbiAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luOiAxcHg7XHJcbiAgfVxyXG5cclxuICAuYnJvd3Nlci1idG4uY2xvc2Uge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZENjE1QjtcclxuICB9XHJcblxyXG4gIC5icm93c2VyLWJ0bi5yZXRyYWN0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGREJDNDA7XHJcbiAgfVxyXG5cclxuICAuYnJvd3Nlci1idG4uZXhwYW5kIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzM0M4NEE7XHJcbiAgfVxyXG5cclxuICAudGFicyB7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xyXG4gICAgbWF4LWhlaWdodDogMzVweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmc6IDAgMTJweDtcclxuICB9XHJcblxyXG4gIC50YWJzIC50YWIge1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG1hcmdpbjogMTBweCAtMTBweCAwO1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDI1cHggMTcwcHg7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4IDkwcHg7XHJcbiAgICBwYWRkaW5nOiAwIDMwcHggMCAyNXB4O1xyXG4gICAgaGVpZ2h0OiAxNzBweDtcclxuICAgIGJhY2tncm91bmQ6ICNDQkNDQ0M7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3gtc2hhZG93OiAwIDEwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjQjRCNEI0O1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcbiAgICBsaW5lLWhlaWdodDogMjVweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcblxyXG4gIC50YWJzIC50YWI6YmVmb3JlLFxyXG4gIC50YWJzIC50YWI6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAxMHB4O1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIH1cclxuXHJcbiAgLnRhYnMgLnRhYjpiZWZvcmUge1xyXG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCAjQ0JDQ0NDIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg1MGRlZyk7XHJcbiAgICBsZWZ0OiAtMjNweDtcclxuICB9XHJcblxyXG4gIC50YWJzIC50YWI6YWZ0ZXIge1xyXG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCAjQ0JDQ0NDO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNTBkZWcpO1xyXG4gICAgcmlnaHQ6IC0xN3B4O1xyXG4gIH1cclxuXHJcbiAgLnRhYnMgLnRhYiAuZmEge1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gIH1cclxuXHJcbiAgLnRhYnMgLnRhYiAuZmEuZmEtYXBwbGUge1xyXG4gICAgY29sb3I6ICM2NjY7XHJcbiAgfVxyXG5cclxuICAudGFicyAudGFiIC5jbG9zZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMjVweDtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgY29sb3I6ICM4ODg7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gIH1cclxuXHJcbiAgLnRhYnMgLnRhYiAuY2xvc2U6YWZ0ZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHdpZHRoOiAxMzlweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgaGVpZ2h0OiAxcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjOTY5Njk2O1xyXG4gICAgei1pbmRleDogMztcclxuICAgIHRvcDogMjRweDtcclxuICAgIHJpZ2h0OiAtMTVweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjgpO1xyXG4gIH1cclxuXHJcbiAgLnRhYnMgLnRhYi5hY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZDogI0VCRUVFQjtcclxuICB9XHJcblxyXG4gIC50YWJzIC50YWIuYWN0aXZlOmJlZm9yZSB7XHJcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICNFQkVFRUIgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gIH1cclxuXHJcbiAgLnRhYnMgLnRhYi5hY3RpdmU6YWZ0ZXIge1xyXG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCAjRUJFRUVCO1xyXG4gICAgei1pbmRleDogMjtcclxuICB9XHJcblxyXG4gIC50YWJzIC50YWIuYWN0aXZlIC5jbG9zZTphZnRlciB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgLmJyb3dzZXItYmFyIHtcclxuICAgIGZsZXgtYmFzaXM6IGF1dG87XHJcbiAgICBoZWlnaHQ6IDI4cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRUJFRUVCO1xyXG4gICAgei1pbmRleDogMTU7XHJcbiAgICBwYWRkaW5nOiA2cHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2FhYTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgfVxyXG5cclxuICAuYnJvd3Nlci1iYXIgLmJ1dHRvbiB7XHJcbiAgICBmbGV4LWJhc2lzOiBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgY29sb3I6ICM2RDZENkU7XHJcbiAgICBwYWRkaW5nOiAzcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNFQkVFRUI7XHJcbiAgfVxyXG5cclxuICAuYnJvd3Nlci1iYXIgLmJ1dHRvbjpub3QoLmluYWN0aXZlKTpob3ZlciB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYjRiZmI0O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIH1cclxuXHJcbiAgLmJyb3dzZXItYmFyIC5idXR0b24uaW5hY3RpdmUge1xyXG4gICAgb3BhY2l0eTogMC4zO1xyXG4gIH1cclxuXHJcbiAgLmJyb3dzZXItYmFyIC5hZGRyZXNzIHtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgbWFyZ2luOiAwcHggM3B4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiAjNTU1O1xyXG4gIH1cclxuXHJcbiAgLnBhZ2Uge1xyXG4gICAgZmxleDogMTtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgei1pbmRleDogMTA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuXHJcbiAgLnBhZ2UgaDEge1xyXG4gICAgZm9udC1zaXplOiAzZW07XHJcbiAgICBmb250LWZhbWlseTogXCJBYnJpbCBGYXRmYWNlXCIsIGN1cnNpdmU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjMpO1xyXG4gIH1cclxuXHJcbiAgLnBhZ2UgaDEgc3BhbiB7XHJcbiAgICBjb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuNSk7XHJcbiAgfVxyXG5cclxuICAucGFnZSBoMiB7XHJcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBjb2xvcjogcmdiYSg3MSwgMjA3LCAxMTUsIDAuOCk7XHJcbiAgfVxyXG5cclxuICAucGFnZSAubGluZXMge1xyXG4gICAgcGFkZGluZzogMzBweDtcclxuICB9XHJcblxyXG4gIC5wYWdlIC5saW5lIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZGVkZWQ7XHJcbiAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICBtYXJnaW46IDE1cHggMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIH1cclxuIl19 */"

/***/ }),

/***/ "./src/app/browser/browser.component.ts":
/*!**********************************************!*\
  !*** ./src/app/browser/browser.component.ts ***!
  \**********************************************/
/*! exports provided: BrowserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowserComponent", function() { return BrowserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BrowserComponent = /** @class */ (function () {
    function BrowserComponent() {
    }
    BrowserComponent.prototype.ngOnInit = function () {
    };
    BrowserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-browser',
            template: __webpack_require__(/*! ./browser.component.html */ "./src/app/browser/browser.component.html"),
            styles: [__webpack_require__(/*! ./browser.component.scss */ "./src/app/browser/browser.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BrowserComponent);
    return BrowserComponent;
}());



/***/ }),

/***/ "./src/app/desktop-icon/desktop-icon.component.html":
/*!**********************************************************!*\
  !*** ./src/app/desktop-icon/desktop-icon.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"desktop-icon\" cdkDrag>\n  <img class=\"desktop-icon__icon\" src=\"{{'./assets/icons/'+ icon + '.' + iconType}}\">\n  <h4 class=\"desktop-icon__label\">{{label}}</h4>\n</div>"

/***/ }),

/***/ "./src/app/desktop-icon/desktop-icon.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/desktop-icon/desktop-icon.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".desktop-icon {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  flex-grow: 0;\n  flex-shrink: 0;\n  margin-top: 1rem; }\n  .desktop-icon__icon {\n    width: 4rem;\n    margin-bottom: -.7rem; }\n  .desktop-icon__label {\n    color: white;\n    text-shadow: -1px -1px 0 #000,  \r 1px -1px 0 #000,\r -1px 1px 0 #000,\r 1px 1px 0 #000;\n    letter-spacing: .08rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVza3RvcC1pY29uL0Q6XFxQcm9qZWN0c1xcUG9ydGZvbGlvL3NyY1xcYXBwXFxkZXNrdG9wLWljb25cXGRlc2t0b3AtaWNvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZGVza3RvcC1pY29uL2Rlc2t0b3AtaWNvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osY0FBYztFQUNkLGdCQUFnQixFQUFBO0VBRWhCO0lBQ0ksV0FBVztJQUNYLHFCQUFxQixFQUFBO0VBR3pCO0lBQ0ksWUFBWTtJQUNaLG9GQ0RPO0lBQ1gsc0JBQXNCLEVBQUUiLCJmaWxlIjoic3JjL2FwcC9kZXNrdG9wLWljb24vZGVza3RvcC1pY29uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRlc2t0b3AtaWNvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGZsZXgtZ3JvdzogMDtcclxuICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcclxuXHJcbiAgICAmX19pY29uIHtcclxuICAgICAgICB3aWR0aDogNHJlbTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAtLjdyZW07XHJcbiAgICB9XHJcblxyXG4gICAgJl9fbGFiZWwge1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB0ZXh0LXNoYWRvdzpcclxuICAgICAgICAtMXB4IC0xcHggMCAjMDAwLCAgXHJcbiAgICAgICAgIDFweCAtMXB4IDAgIzAwMCxcclxuICAgICAgICAgLTFweCAxcHggMCAjMDAwLFxyXG4gICAgICAgICAgMXB4IDFweCAwICMwMDA7XHJcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLjA4cmVtO1xyXG4gICAgfVxyXG59XHJcbiIsIi5kZXNrdG9wLWljb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleC1ncm93OiAwO1xuICBmbGV4LXNocmluazogMDtcbiAgbWFyZ2luLXRvcDogMXJlbTsgfVxuICAuZGVza3RvcC1pY29uX19pY29uIHtcbiAgICB3aWR0aDogNHJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAtLjdyZW07IH1cbiAgLmRlc2t0b3AtaWNvbl9fbGFiZWwge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LXNoYWRvdzogLTFweCAtMXB4IDAgIzAwMCwgIFxyIDFweCAtMXB4IDAgIzAwMCxcciAtMXB4IDFweCAwICMwMDAsXHIgMXB4IDFweCAwICMwMDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC4wOHJlbTsgfVxuIl19 */"

/***/ }),

/***/ "./src/app/desktop-icon/desktop-icon.component.ts":
/*!********************************************************!*\
  !*** ./src/app/desktop-icon/desktop-icon.component.ts ***!
  \********************************************************/
/*! exports provided: DesktopIconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesktopIconComponent", function() { return DesktopIconComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DesktopIconComponent = /** @class */ (function () {
    function DesktopIconComponent() {
    }
    DesktopIconComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], DesktopIconComponent.prototype, "label", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], DesktopIconComponent.prototype, "icon", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], DesktopIconComponent.prototype, "iconType", void 0);
    DesktopIconComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-desktop-icon',
            template: __webpack_require__(/*! ./desktop-icon.component.html */ "./src/app/desktop-icon/desktop-icon.component.html"),
            styles: [__webpack_require__(/*! ./desktop-icon.component.scss */ "./src/app/desktop-icon/desktop-icon.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DesktopIconComponent);
    return DesktopIconComponent;
}());



/***/ }),

/***/ "./src/app/nav/nav.component.html":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar\">\r\n  <div class=\"navbar__left\">\r\n    <h4 class=\"navbar__brand\">Andrei Koreh</h4>\r\n  </div>\r\n  <div class=\"navbar__center\">\r\n\r\n  </div>\r\n  <div class=\"navbar__right\">\r\n    <h4 class=\"navbar__email\">akoreh@gmail.com</h4>\r\n    <a href=\"https://github.com/akoreh\" target=\"_blank\">\r\n      <img src=\"./assets/icons/github.svg\" alt=\"\">\r\n    </a>\r\n    <a href=\"https://www.linkedin.com/in/andrei-koreh-71084b169/\" target=\"_blank\">\r\n      <img src=\"./assets/icons/linkedin.svg\" alt=\"\">\r\n    </a>\r\n    <a href=\"mailto:akoreh@gmail.com\">\r\n      <img src=\"./assets/icons/email.svg\" alt=\"\">\r\n    </a>\r\n    <div href=\"#\">\r\n      <img src=\"./assets/icons/battery.svg\" alt=\"\">\r\n    </div>\r\n    <h4 class=\"navbar__time\">Sun 07:36</h4>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/nav/nav.component.scss":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar {\n  position: fixed;\n  height: 2.5rem;\n  left: 0;\n  right: 0;\n  display: flex;\n  justify-content: space-between;\n  background: #2D112B;\n  z-index: 2;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24); }\n  .navbar > div {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding-left: 3rem;\n    padding-right: 3rem; }\n  .navbar__brand, .navbar__email {\n    font-size: .9rem;\n    font-weight: normal; }\n  .navbar__time {\n    margin-left: 2rem;\n    font-size: .8rem;\n    height: 1rem;\n    font-weight: normal;\n    -webkit-transform: translateY(-0.1rem);\n            transform: translateY(-0.1rem); }\n  .navbar__right a {\n    text-decoration: none;\n    margin-left: .6rem; }\n  .navbar__right a img {\n      height: 1.2rem;\n      -webkit-transform: translateY(0.1rem);\n              transform: translateY(0.1rem); }\n  .navbar__right a:nth-child(2) {\n    margin-left: 2rem; }\n  .navbar__right a:nth-child(2) img {\n      height: 1rem; }\n  .navbar__right a:nth-child(4) img {\n    height: .9rem; }\n  .navbar__right div {\n    margin-left: .6rem;\n    -webkit-transform: translateY(0.1rem);\n            transform: translateY(0.1rem); }\n  .navbar__right div img {\n      height: 1.4rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2L0Q6XFxQcm9qZWN0c1xcUG9ydGZvbGlvL3NyY1xcYXBwXFxuYXZcXG5hdi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbmF2L0Q6XFxQcm9qZWN0c1xcUG9ydGZvbGlvL3NyY1xcc2Nzc1xcYWJzdHJhY3RzXFxfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLE9BQU87RUFDUCxRQUFRO0VBQ1IsYUFBYTtFQUNiLDhCQUE4QjtFQUU5QixtQkNUYTtFRFViLFVBQVU7RUFDVix3RUNMb0UsRUFBQTtFREx0RTtJQWFJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixtQkFBbUIsRUFBQTtFQUdyQjtJQUVJLGdCQUFnQjtJQUNoQixtQkFBbUIsRUFBQTtFQUd2QjtJQUNFLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixzQ0FBNkI7WUFBN0IsOEJBQTZCLEVBQUE7RUFHOUI7SUFFRyxxQkFBcUI7SUFDckIsa0JBQWtCLEVBQUE7RUFIckI7TUFLSyxjQUFjO01BQ2QscUNBQTRCO2NBQTVCLDZCQUE0QixFQUFBO0VBTmpDO0lBWUcsaUJBQWlCLEVBQUE7RUFacEI7TUFjSyxZQUFZLEVBQUE7RUFkakI7SUFxQkssYUFBYSxFQUFBO0VBckJsQjtJQTBCRyxrQkFBa0I7SUFDbEIscUNBQTRCO1lBQTVCLDZCQUE0QixFQUFBO0VBM0IvQjtNQTZCSyxjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9uYXYvbmF2LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uL3Njc3MvYWJzdHJhY3RzL3ZhcmlhYmxlc1wiO1xyXG5cclxuLm5hdmJhciB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGhlaWdodDogMi41cmVtO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgLy9ib3JkZXItYm90dG9tOiAxLjVweCBzb2xpZCBibGFjaztcclxuICBiYWNrZ3JvdW5kOiAkZGFyazI7XHJcbiAgei1pbmRleDogMjtcclxuICBib3gtc2hhZG93OiAkei1lbGV2YXRpb24tMTtcclxuXHJcbiAgJiA+IGRpdntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDNyZW07XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAzcmVtO1xyXG4gIH1cclxuXHJcbiAgJl9fYnJhbmQsXHJcbiAgJl9fZW1haWwge1xyXG4gICAgICBmb250LXNpemU6IC45cmVtO1xyXG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIH1cclxuXHJcbiAgJl9fdGltZSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMnJlbTtcclxuICAgIGZvbnQtc2l6ZTogLjhyZW07XHJcbiAgICBoZWlnaHQ6IDFyZW07XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0uMXJlbSk7XHJcbiAgfVxyXG5cclxuICAmX19yaWdodCB7XHJcbiAgICBhIHtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICBtYXJnaW4tbGVmdDogLjZyZW07XHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgaGVpZ2h0OiAxLjJyZW07XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC4xcmVtKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIEdpdGh1YlxyXG4gICAgYTpudGgtY2hpbGQoMikge1xyXG4gICAgICBtYXJnaW4tbGVmdDogMnJlbTtcclxuICAgICAgaW1nIHtcclxuICAgICAgICBoZWlnaHQ6IDFyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBFbWFpbFxyXG4gICAgYTpudGgtY2hpbGQoNCkge1xyXG4gICAgICBpbWcge1xyXG4gICAgICAgIGhlaWdodDogLjlyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkaXYge1xyXG4gICAgICBtYXJnaW4tbGVmdDogLjZyZW07XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSguMXJlbSk7XHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgaGVpZ2h0OiAxLjRyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBcclxuICB9XHJcblxyXG59XHJcbiIsIiRkYXJrMTogIzQyMjQ0NTtcclxuJGRhcmsyOiAjMkQxMTJCO1xyXG4kbGlnaHQxOiAjYmQ0ODgyO1xyXG4kbGlnaHQyOiAjZmY2Yjk3O1xyXG4kbGlnaHQzOiAjZmZiNWI1O1xyXG4kb3JhbmdlOiAjZmY5MTY2O1xyXG5cclxuJHotZWxldmF0aW9uLTE6IDAgMXB4IDNweCByZ2JhKDAsMCwwLDAuMTIpLCAwIDFweCAycHggcmdiYSgwLDAsMCwwLjI0KTtcclxuJHotZWxldmF0aW9uLTI6IDAgM3B4IDZweCByZ2JhKDAsMCwwLDAuMTYpLCAwIDNweCA2cHggcmdiYSgwLDAsMCwwLjIzKTtcclxuJHotZWxldmF0aW9uLTM6IDAgMTBweCAyMHB4IHJnYmEoMCwwLDAsMC4xOSksIDAgNnB4IDZweCByZ2JhKDAsMCwwLDAuMjMpO1xyXG4kei1lbGV2YXRpb24tNDogMCAxNHB4IDI4cHggcmdiYSgwLDAsMCwwLjI1KSwgMCAxMHB4IDEwcHggcmdiYSgwLDAsMCwwLjIyKTtcclxuJHotZWxldmF0aW9uLTU6IDAgMTlweCAzOHB4IHJnYmEoMCwwLDAsMC4zMCksIDAgMTVweCAxMnB4IHJnYmEoMCwwLDAsMC4yMik7XHJcblxyXG4kZGVmYXVsdEN1cnNvcjogdXJsKFwiLi9hc3NldHMvaW1hZ2VzL2N1cnNvci1tb3VzZS5wbmdcIiksIGRlZmF1bHQiXX0= */"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavComponent = /** @class */ (function () {
    function NavComponent() {
    }
    NavComponent.prototype.ngAfterViewInit = function () {
        this.updateTime();
    };
    NavComponent.prototype.updateTime = function () {
        var d = new Date(), days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        document.querySelector('.navbar__time').innerHTML = this.formatDate(days[d.getDay()], d.getHours(), d.getMinutes());
        //Check every half a second if the time has changed
        var timeout = setTimeout(this.updateTime.bind(this), 500);
    };
    NavComponent.prototype.formatDate = function (day, hour, min) {
        var parseHour = this.parseHourMin(hour), parseMin = this.parseHourMin(min), date = day + ' ' + parseHour + ':' + parseMin;
        return date;
    };
    NavComponent.prototype.parseHourMin = function (num) {
        var parseNum;
        if (num < 10) {
            parseNum = '0' + num;
        }
        else {
            parseNum = num;
        }
        return parseNum;
    };
    NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.scss */ "./src/app/nav/nav.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Projects\Portfolio\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map