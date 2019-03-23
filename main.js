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

module.exports = "<app-nav></app-nav>\r\n<div class=\"parallax--noScroll\">\r\n    <div class=\"parallax\">\r\n        <div class=\"parallax__layer parallax__layer__0\">\r\n            <img src=\"./assets/images/layer_0.png\" />\r\n        </div>\r\n        <div class=\"parallax__layer parallax__layer__1\">\r\n            <img src=\"./assets/images/layer_1.png\" />\r\n        </div>\r\n        <div class=\"parallax__layer parallax__layer__2\">\r\n            <img src=\"./assets/images/layer_2.png\" />\r\n        </div>\r\n        <div class=\"parallax__layer parallax__layer__3\">\r\n            <img src=\"./assets/images/layer_3.png\" />\r\n        </div>\r\n        <div class=\"parallax__layer parallax__layer__4\">\r\n            <img src=\"./assets/images/layer_4.png\" />\r\n        </div>\r\n        <div class=\"parallax__layer parallax__layer__5\">\r\n            <img src=\"./assets/images/layer_5.png\" />\r\n        </div>\r\n        <div class=\"parallax__layer parallax__layer__6\">\r\n            <img src=\"./assets/images/layer_6.png\" />\r\n        </div>\r\n    <a href=\"#\" class=\"scrollIndicator\"></a>\r\n    <div class=\"parallax__cover\"></div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".parallax--noScroll {\n  overflow: hidden;\n  /* Adjust the size to resize the indicator. */ }\n  .parallax--noScroll .parallax {\n    overflow-y: scroll;\n    -webkit-perspective: 100px;\n            perspective: 100px;\n    height: 100vh;\n    overflow-x: hidden;\n    position: absolute;\n    top: 0;\n    left: 50%;\n    right: 0;\n    bottom: 0;\n    margin-left: -1500px; }\n  .parallax--noScroll .parallax__layer {\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0; }\n  .parallax--noScroll .parallax__layer img {\n      display: block;\n      position: absolute;\n      bottom: 0; }\n  .parallax--noScroll .scrollIndicator {\n    position: fixed;\n    left: calc(60% - 1em);\n    width: 2em;\n    height: 3.8em;\n    bottom: 3em;\n    border: 0.2em solid rgba(255, 255, 255, 0.8);\n    border-radius: 5em; }\n  .parallax--noScroll .scrollIndicator:before {\n      content: '';\n      position: absolute;\n      left: calc(50% - .2em);\n      top: .4em;\n      width: .4em;\n      height: .4em;\n      background: rgba(255, 255, 255, 0.8);\n      border-radius: 50%;\n      -webkit-animation: fadeTo 1.4s ease-in infinite;\n      animation: fadeTo 1.4s ease-in infinite; }\n  @-webkit-keyframes fadeTo {\n  from { }\n  to {\n    -webkit-transform: translateY(1em);\n            transform: translateY(1em);\n    opacity: 0; } }\n  @keyframes fadeTo {\n  from { }\n  to {\n    -webkit-transform: translateY(1em);\n            transform: translateY(1em);\n    opacity: 0; } }\n  .parallax--noScroll .parallax__cover {\n    background: #2D112B;\n    display: block;\n    position: absolute;\n    top: 100%;\n    left: 0;\n    right: 0;\n    height: 2000px;\n    z-index: 2; }\n  .parallax--noScroll .parallax__layer__0 {\n    -webkit-transform: translateZ(-300px) scale(4);\n            transform: translateZ(-300px) scale(4); }\n  .parallax--noScroll .parallax__layer__1 {\n    -webkit-transform: translateZ(-250px) scale(3.5);\n            transform: translateZ(-250px) scale(3.5); }\n  .parallax--noScroll .parallax__layer__2 {\n    -webkit-transform: translateZ(-200px) scale(3);\n            transform: translateZ(-200px) scale(3); }\n  .parallax--noScroll .parallax__layer__3 {\n    -webkit-transform: translateZ(-150px) scale(2.5);\n            transform: translateZ(-150px) scale(2.5); }\n  .parallax--noScroll .parallax__layer__4 {\n    -webkit-transform: translateZ(-100px) scale(2);\n            transform: translateZ(-100px) scale(2); }\n  .parallax--noScroll .parallax__layer__5 {\n    -webkit-transform: translateZ(-50px) scale(1.5);\n            transform: translateZ(-50px) scale(1.5); }\n  .parallax--noScroll .parallax__layer__6 {\n    -webkit-transform: translateZ(0px) scale(1);\n            transform: translateZ(0px) scale(1); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXFByb2plY3RzXFxQb3J0Zm9saW8vc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQThCSCw2Q0FBQSxFQUE4QztFQS9CN0Q7SUFJSSxrQkFBa0I7SUFDbEIsMEJBQWtCO1lBQWxCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sU0FBUztJQUNULFFBQVE7SUFDUixTQUFTO0lBQ1Qsb0JBQW9CLEVBQUE7RUFieEI7SUFpQkksa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixRQUFRO0lBQ1IsU0FBUztJQUNULE9BQU8sRUFBQTtFQXJCWDtNQXdCTSxjQUFjO01BQ2Qsa0JBQWtCO01BQ2xCLFNBQVMsRUFBQTtFQTFCZjtJQWtDSSxlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLFVBQVU7SUFDVixhQUFhO0lBQ2IsV0FBVztJQUNYLDRDQVQ2QjtJQVU3QixrQkFBa0IsRUFBQTtFQXhDdEI7TUEyQ00sV0FBVztNQUNYLGtCQUFrQjtNQUNsQixzQkFBc0I7TUFDdEIsU0FBUztNQUNULFdBQVc7TUFDWCxZQUFZO01BQ1osb0NBbkIyQjtNQW9CM0Isa0JBQWtCO01BQ2xCLCtDQUErQztNQUMvQyx1Q0FBdUMsRUFBQTtFQUd6QztFQUNFLE9BQUk7RUFFSjtJQUNFLGtDQUEwQjtZQUExQiwwQkFBMEI7SUFDMUIsVUFBVSxFQUFBLEVBQUE7RUFJZDtFQUNFLE9BQUk7RUFFSjtJQUNFLGtDQUEwQjtZQUExQiwwQkFBMEI7SUFDMUIsVUFBVSxFQUFBLEVBQUE7RUFyRWxCO0lBMkVJLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxPQUFPO0lBQ1AsUUFBUTtJQUNSLGNBQWM7SUFDZCxVQUFVLEVBQUE7RUFsRmQ7SUEyRk0sOENBQXFEO1lBQXJELHNDQUFxRCxFQUFBO0VBM0YzRDtJQTJGTSxnREFBcUQ7WUFBckQsd0NBQXFELEVBQUE7RUEzRjNEO0lBMkZNLDhDQUFxRDtZQUFyRCxzQ0FBcUQsRUFBQTtFQTNGM0Q7SUEyRk0sZ0RBQXFEO1lBQXJELHdDQUFxRCxFQUFBO0VBM0YzRDtJQTJGTSw4Q0FBcUQ7WUFBckQsc0NBQXFELEVBQUE7RUEzRjNEO0lBMkZNLCtDQUFxRDtZQUFyRCx1Q0FBcUQsRUFBQTtFQTNGM0Q7SUEyRk0sMkNBQXFEO1lBQXJELG1DQUFxRCxFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhcmFsbGF4LS1ub1Njcm9sbCB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgLnBhcmFsbGF4IHtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgIHBlcnNwZWN0aXZlOiAxMDBweDtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMTUwMHB4O1xyXG4gIH1cclxuXHJcbiAgLnBhcmFsbGF4X19sYXllciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgYm90dG9tOiAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJHNvbGlkOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC44KTtcclxuICAkc2l6ZTogNDBweDsgLyogQWRqdXN0IHRoZSBzaXplIHRvIHJlc2l6ZSB0aGUgaW5kaWNhdG9yLiAqL1xyXG5cclxuICAuc2Nyb2xsSW5kaWNhdG9yIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGxlZnQ6IGNhbGMoNjAlIC0gMWVtKTtcclxuICAgIHdpZHRoOiAyZW07XHJcbiAgICBoZWlnaHQ6IDMuOGVtO1xyXG4gICAgYm90dG9tOiAzZW07XHJcbiAgICBib3JkZXI6IC4yZW0gc29saWQgJHNvbGlkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNWVtO1xyXG5cclxuICAgICY6YmVmb3JlIHtcclxuICAgICAgY29udGVudDogJyc7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgbGVmdDogY2FsYyg1MCUgLSAuMmVtKTtcclxuICAgICAgdG9wOiAuNGVtO1xyXG4gICAgICB3aWR0aDogLjRlbTtcclxuICAgICAgaGVpZ2h0OiAuNGVtO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAkc29saWQ7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgLXdlYmtpdC1hbmltYXRpb246IGZhZGVUbyAxLjRzIGVhc2UtaW4gaW5maW5pdGU7XHJcbiAgICAgIGFuaW1hdGlvbjogZmFkZVRvIDEuNHMgZWFzZS1pbiBpbmZpbml0ZTtcclxuICAgIH1cclxuXHJcbiAgICBALXdlYmtpdC1rZXlmcmFtZXMgZmFkZVRvIHtcclxuICAgICAgZnJvbSB7fVxyXG5cclxuICAgICAgdG8ge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxZW0pO1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBAa2V5ZnJhbWVzIGZhZGVUbyB7XHJcbiAgICAgIGZyb20ge31cclxuXHJcbiAgICAgIHRvIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMWVtKTtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAucGFyYWxsYXhfX2NvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICMyRDExMkI7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTAwJTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGhlaWdodDogMjAwMHB4O1xyXG4gICAgei1pbmRleDogMjtcclxuICB9XHJcblxyXG4gICRwYXJhbGxheF9fbGF5ZXJzOiA2O1xyXG5cclxuICBAZm9yICRpIGZyb20gMCB0aHJvdWdoICRwYXJhbGxheF9fbGF5ZXJzIHtcclxuICAgICR4OiAoJHBhcmFsbGF4X19sYXllcnMgLSAkaSkgLyAyO1xyXG5cclxuICAgIC5wYXJhbGxheF9fbGF5ZXJfXyN7JGl9IHtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC0xMDAgKiAkeCN7cHh9KSBzY2FsZSgkeCArIDEpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"

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
        this.isBackground = false;
        this.isBackgroundChangeInit = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        if (!this.isBackgroundChangeInit) {
            //  this.initBackgroundChange();
        }
    };
    AppComponent.prototype.ngAfterViewInit = function () {
        var content = document.querySelector('.parallax');
        var scroll$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(content, 'scroll');
        scroll$.subscribe(this.handleScroll.bind(this));
    };
    AppComponent.prototype.ngAfterViewChecked = function () {
    };
    AppComponent.prototype.handleScroll = function (event) {
        var scrollIndicator = document.getElementsByClassName("scrollIndicator")[0];
        var distance = this.getDistanceBetweenElements(document.getElementsByClassName("navbar")[0], scrollIndicator);
        console.log('distance', distance);
        if (distance < 800) {
            scrollIndicator.style.display = "none";
        }
    };
    AppComponent.prototype.getDistanceBetweenElements = function (a, b) {
        var aPosition = this.getPositionAtCenter(a);
        var bPosition = this.getPositionAtCenter(b);
        return Math.hypot(aPosition.x - bPosition.x, aPosition.y - bPosition.y);
    };
    AppComponent.prototype.getPositionAtCenter = function (element) {
        var _a = element.getBoundingClientRect(), top = _a.top, left = _a.left, width = _a.width, height = _a.height;
        return {
            x: left + width / 2,
            y: top + height / 2
        };
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_4__["NavComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/nav/nav.component.html":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar\">\r\n  <div class=\"navbar__left\">\r\n    <h4 class=\"navbar__brand\">Koreh Andrei</h4>\r\n  </div>\r\n  <div class=\"navbar__center\">\r\n\r\n  </div>\r\n  <div class=\"navbar__right\">\r\n    <h4 class=\"navbar__email\">akoreh@gmail.com</h4>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/nav/nav.component.scss":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar {\n  position: fixed;\n  height: 2.5rem;\n  left: 0;\n  right: 0;\n  display: flex;\n  justify-content: space-between;\n  background: #5a265e;\n  z-index: 2;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24); }\n  .navbar > div {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding-left: 3rem;\n    padding-right: 3rem; }\n  .navbar__brand, .navbar__email {\n    font-size: .9rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2L0Q6XFxQcm9qZWN0c1xcUG9ydGZvbGlvL3NyY1xcYXBwXFxuYXZcXG5hdi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbmF2L0Q6XFxQcm9qZWN0c1xcUG9ydGZvbGlvL3NyY1xcc2Nzc1xcYWJzdHJhY3RzXFxfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLE9BQU87RUFDUCxRQUFRO0VBQ1IsYUFBYTtFQUNiLDhCQUE4QjtFQUU5QixtQkNUYTtFRFViLFVBQVU7RUFDVix3RUNMb0UsRUFBQTtFREx0RTtJQWFJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixtQkFBbUIsRUFBQTtFQUdyQjtJQUVJLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbmF2L25hdi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi9zY3NzL2Fic3RyYWN0cy92YXJpYWJsZXNcIjtcclxuXHJcbi5uYXZiYXIge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBoZWlnaHQ6IDIuNXJlbTtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIC8vYm9yZGVyLWJvdHRvbTogMS41cHggc29saWQgYmxhY2s7XHJcbiAgYmFja2dyb3VuZDogJGRhcmsyO1xyXG4gIHotaW5kZXg6IDI7XHJcbiAgYm94LXNoYWRvdzogJHotZWxldmF0aW9uLTE7XHJcblxyXG4gICYgPiBkaXZ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzcmVtO1xyXG4gICAgcGFkZGluZy1yaWdodDogM3JlbTtcclxuICB9XHJcblxyXG4gICZfX2JyYW5kLFxyXG4gICZfX2VtYWlsIHtcclxuICAgICAgZm9udC1zaXplOiAuOXJlbTtcclxuICB9XHJcbn1cclxuIiwiJGRhcmsxOiAjNDIyNDQ1O1xyXG4kZGFyazI6ICM1YTI2NWU7XHJcbiRsaWdodDE6ICNiZDQ4ODI7XHJcbiRsaWdodDI6ICNmZjZiOTc7XHJcbiRsaWdodDM6ICNmZmI1YjU7XHJcbiRvcmFuZ2U6ICNmZjkxNjY7XHJcblxyXG4kei1lbGV2YXRpb24tMTogMCAxcHggM3B4IHJnYmEoMCwwLDAsMC4xMiksIDAgMXB4IDJweCByZ2JhKDAsMCwwLDAuMjQpO1xyXG4kei1lbGV2YXRpb24tMjogMCAzcHggNnB4IHJnYmEoMCwwLDAsMC4xNiksIDAgM3B4IDZweCByZ2JhKDAsMCwwLDAuMjMpO1xyXG4kei1lbGV2YXRpb24tMzogMCAxMHB4IDIwcHggcmdiYSgwLDAsMCwwLjE5KSwgMCA2cHggNnB4IHJnYmEoMCwwLDAsMC4yMyk7XHJcbiR6LWVsZXZhdGlvbi00OiAwIDE0cHggMjhweCByZ2JhKDAsMCwwLDAuMjUpLCAwIDEwcHggMTBweCByZ2JhKDAsMCwwLDAuMjIpO1xyXG4kei1lbGV2YXRpb24tNTogMCAxOXB4IDM4cHggcmdiYSgwLDAsMCwwLjMwKSwgMCAxNXB4IDEycHggcmdiYSgwLDAsMCwwLjIyKTsiXX0= */"

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
    NavComponent.prototype.ngOnInit = function () {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
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