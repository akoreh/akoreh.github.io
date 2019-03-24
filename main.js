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

module.exports = "<app-nav></app-nav>\r\n<div class=\"parallax--noScroll\">\r\n  <div class=\"parallax\">\r\n    <div class=\"parallax__layer parallax__layer__0\">\r\n      <img src=\"./assets/images/layer_0.png\" />\r\n    </div>\r\n    <div class=\"parallax__layer parallax__layer__1\">\r\n      <img src=\"./assets/images/layer_1.png\" />\r\n    </div>\r\n    <div class=\"parallax__layer parallax__layer__2\">\r\n      <img src=\"./assets/images/layer_2.png\" />\r\n    </div>\r\n    <div class=\"parallax__layer parallax__layer__3\">\r\n      <img src=\"./assets/images/layer_3.png\" />\r\n    </div>\r\n    <div class=\"parallax__layer parallax__layer__4\">\r\n      <img src=\"./assets/images/layer_4.png\" />\r\n    </div>\r\n    <div class=\"parallax__layer parallax__layer__5\">\r\n      <img src=\"./assets/images/layer_5.png\" />\r\n    </div>\r\n    <div class=\"parallax__layer parallax__layer__6\">\r\n      <img src=\"./assets/images/layer_6.png\" />\r\n    </div>\r\n    <div class=\"desktop-icons\">\r\n      <app-desktop-icon icon=\"folder\" iconType=\"png\" label=\"Projects\"></app-desktop-icon>\r\n      <app-desktop-icon icon=\"about\" iconType=\"svg\" label=\"About\"></app-desktop-icon>\r\n      <app-desktop-icon icon=\"bird\" iconType=\"png\" label=\"Flappy Bird\"></app-desktop-icon>\r\n      <app-desktop-icon icon=\"fireworks\" iconType=\"svg\" label=\"Fireworks\"></app-desktop-icon>\r\n    </div>\r\n    <a href=\"#\" class=\"scrollIndicator\"></a>\r\n    <div class=\"parallax__cover\"></div>\r\n  </div>\r\n"

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
    }
    AppComponent.prototype.ngAfterViewInit = function () {
        this.scrollIndicator = document.getElementsByClassName("scrollIndicator")[0];
        var scroll$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(document.querySelector('.parallax'), 'scroll');
        this.scrollSubscription = scroll$.subscribe(this.handleScroll.bind(this));
    };
    AppComponent.prototype.handleScroll = function () {
        this.scrollInstances++;
        if (this.scrollInstances > 15) {
            this.scrollIndicator.style.display = "none";
            this.scrollSubscription.unsubscribe();
        }
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








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_5__["NavComponent"],
                _desktop_icon_desktop_icon_component__WEBPACK_IMPORTED_MODULE_6__["DesktopIconComponent"]
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