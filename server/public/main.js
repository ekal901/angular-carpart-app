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

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <header class=\"container\">\n    <h1>Something About Race...</h1>\n    <p myTextDecorator=\"overline\">Races are usually pretty awesome, schedule to race today</p>\n    <h3>{{today | date:'fullDate'}}</h3>\n  </header>\n  <div>\n    <ul>\n      <li *ngFor=\"let num of numbers\">\n        {{ num | ordinal }}\n      </li>\n    </ul>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
        this.today = Date.now();
        this.numbers = [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
            11, 12, 13, 14, 15
        ];
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _carparts_carparts_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./carparts/carparts.component */ "./src/app/carparts/carparts.component.ts");
/* harmony import */ var _races_races_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./races/races.component */ "./src/app/races/races.component.ts");






var ROUTERS = [
    { path: '', component: _about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"] },
    { path: 'carpart', component: _carparts_carparts_component__WEBPACK_IMPORTED_MODULE_4__["CarpartsComponent"] },
    { path: 'races', component: _races_races_component__WEBPACK_IMPORTED_MODULE_5__["RacesComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(ROUTERS)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- app.Component 와의 연결을 위해서 carparts.component.ts의 selector 이름을 사용한 태그를 만듬-->\n<!-- app.module.ts에 declare 되어있어야 함-->\n<!-- 참고 : https://angular.io/guide/styleguide -->\n<nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li><a [routerLink]=\"['']\">About</a></li>\n        <li><a [routerLink]=\"['/carpart']\">CarPart</a></li>\n        <li><a [routerLink]=\"['/races']\">Races</a></li>\n      </ul>\n    </div>\n  </div>\n</nav>\n<main role=\"main\">\n  <router-outlet></router-outlet>\n</main>\n"

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


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.carPart = {
            'id': 1,
            'name': 'Super Tires',
            'description': 'These tires are the very best',
            'inStock': 5
        };
        // console.log('AppComponent Constructor is called');
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _carparts_carparts_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./carparts/carparts.module */ "./src/app/carparts/carparts.module.ts");
/* harmony import */ var _races_races_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./races/races.module */ "./src/app/races/races.module.ts");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
                _carparts_carparts_module__WEBPACK_IMPORTED_MODULE_9__["CarpartsModule"],
                _races_races_module__WEBPACK_IMPORTED_MODULE_10__["RacesModule"] /* /* declaration 에서 RacesComponent 삭제 후 RacesModule 추가 */
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/carparts/carparts-data.service.ts":
/*!***************************************************!*\
  !*** ./src/app/carparts/carparts-data.service.ts ***!
  \***************************************************/
/*! exports provided: CarpartsDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarpartsDataService", function() { return CarpartsDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var CarpartsDataService = /** @class */ (function () {
    function CarpartsDataService(httpClient) {
        this.httpClient = httpClient;
        console.log('CarpartsDataService constructor called..');
    }
    CarpartsDataService.prototype.getCarParts = function () {
        // Json File under the Assets
        return this.httpClient.get('assets/carpart.json', { responseType: 'json' });
        // return CARPARTS;
    };
    CarpartsDataService.prototype.getCarPartsPromise = function () {
        // return this.httpClient.get('assets/carpart.json')
        return this.httpClient.get('http://127.0.0.1:52274/data.json')
            .toPromise()
            .then(function (res) { return res['data']; })
            .catch(function (err) { return console.log('Error occured', err); });
    };
    CarpartsDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])( /*{
          providedIn: 'root'
        }*/),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CarpartsDataService);
    return CarpartsDataService;
}());



/***/ }),

/***/ "./src/app/carparts/carparts.component.css":
/*!*************************************************!*\
  !*** ./src/app/carparts/carparts.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input {\r\n  color: #000000;\r\n}\r\n\r\ntd {\r\n  color: #9397d8;\r\n}\r\n\r\nbutton {\r\n  background: #fd79fc;\r\n  border-radius: 3px;\r\n  border: 0;\r\n  color: #ffffff;\r\n}\r\n\r\n.decrease, .increase {\r\n  width: 20px;\r\n}\r\n\r\n.number {\r\n  width: 30px;\r\n  color: black;\r\n  text-align: center;\r\n}\r\n\r\n.card {\r\n  background: #24262c;\r\n}\r\n\r\n.select-quantity {\r\n  display: inline;\r\n}\r\n\r\n.date, .price {\r\n  color: #9397d8;\r\n}\r\n\r\n.description {\r\n  color: #66d9f7;\r\n}\r\n\r\n.panel-body {\r\n  display: table;\r\n  padding: 0;\r\n}\r\n\r\n.featured {\r\n  background: #57595D;\r\n  -o-border-image: linear-gradient(to left, #818fd8 0%, #cbb4e2 50%, #a6f2f5 100%);\r\n  border-image: linear-gradient(to left, #818fd8 0%, #cbb4e2 50%, #a6f2f5 100%);\r\n  border-image-slice: 1;\r\n}\r\n\r\n.photo {\r\n  float: left;\r\n  margin-right: 30px;\r\n}\r\n\r\n.price {\r\n  margin: 0;\r\n  font-size: 18px;\r\n  text-align: center;\r\n  width: 120px;\r\n}\r\n\r\n.price-total {\r\n  background:  #9179b7;\r\n  float: right;\r\n  margin: 30px 0;\r\n  padding: 20px 50px;\r\n  text-transform: uppercase;\r\n}\r\n\r\n.price-total h3, .price-total p {\r\n  display: inline-block;\r\n  margin: 0;\r\n}\r\n\r\n.price-total p {\r\n  color: #362751;\r\n  font-size: 18px;\r\n  font-weight: bold;\r\n}\r\n\r\n.price-total h3 {\r\n  font-size: 18px;\r\n  margin-right: 60px;\r\n}\r\n\r\n.product-info {\r\n  display: table-cell;\r\n  vertical-align: middle;\r\n}\r\n\r\n.product-info td {\r\n  padding: 0 20px;\r\n}\r\n\r\n.product-info tr {\r\n  width: 100%;\r\n  display: inline-block;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FycGFydHMvY2FycGFydHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7Q0FDaEI7O0FBRUQ7RUFDRSxlQUFlO0NBQ2hCOztBQUVEO0VBQ0Usb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1YsZUFBZTtDQUNoQjs7QUFFRDtFQUNFLFlBQVk7Q0FDYjs7QUFFRDtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0NBQ3BCOztBQUVEO0VBQ0Usb0JBQW9CO0NBQ3JCOztBQUVEO0VBQ0UsZ0JBQWdCO0NBQ2pCOztBQUVEO0VBQ0UsZUFBZTtDQUNoQjs7QUFFRDtFQUNFLGVBQWU7Q0FDaEI7O0FBRUQ7RUFDRSxlQUFlO0VBQ2YsV0FBVztDQUNaOztBQUVEO0VBQ0Usb0JBQW9CO0VBRXBCLGlGQUFpRjtFQUNqRiw4RUFBOEU7RUFDOUUsc0JBQXNCO0NBQ3ZCOztBQUVEO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtDQUNwQjs7QUFFRDtFQUNFLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGFBQWE7Q0FDZDs7QUFFRDtFQUNFLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2IsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQiwwQkFBMEI7Q0FDM0I7O0FBRUQ7RUFDRSxzQkFBc0I7RUFDdEIsVUFBVTtDQUNYOztBQUVEO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixrQkFBa0I7Q0FDbkI7O0FBRUQ7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0NBQ3BCOztBQUVEO0VBQ0Usb0JBQW9CO0VBQ3BCLHVCQUF1QjtDQUN4Qjs7QUFFRDtFQUNFLGdCQUFnQjtDQUNqQjs7QUFFRDtFQUNFLFlBQVk7RUFDWixzQkFBc0I7Q0FDdkIiLCJmaWxlIjoic3JjL2FwcC9jYXJwYXJ0cy9jYXJwYXJ0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXQge1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG59XHJcblxyXG50ZCB7XHJcbiAgY29sb3I6ICM5Mzk3ZDg7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZDogI2ZkNzlmYztcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG4uZGVjcmVhc2UsIC5pbmNyZWFzZSB7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbn1cclxuXHJcbi5udW1iZXIge1xyXG4gIHdpZHRoOiAzMHB4O1xyXG4gIGNvbG9yOiBibGFjaztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICBiYWNrZ3JvdW5kOiAjMjQyNjJjO1xyXG59XHJcblxyXG4uc2VsZWN0LXF1YW50aXR5IHtcclxuICBkaXNwbGF5OiBpbmxpbmU7XHJcbn1cclxuXHJcbi5kYXRlLCAucHJpY2Uge1xyXG4gIGNvbG9yOiAjOTM5N2Q4O1xyXG59XHJcblxyXG4uZGVzY3JpcHRpb24ge1xyXG4gIGNvbG9yOiAjNjZkOWY3O1xyXG59XHJcblxyXG4ucGFuZWwtYm9keSB7XHJcbiAgZGlzcGxheTogdGFibGU7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLmZlYXR1cmVkIHtcclxuICBiYWNrZ3JvdW5kOiAjNTc1OTVEO1xyXG4gIC13ZWJraXQtYm9yZGVyLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChyaWdodCwgIzgxOGZkOCAwJSwgI2NiYjRlMiA1MCUsICNhNmYyZjUgMTAwJSk7XHJcbiAgLW8tYm9yZGVyLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgIzgxOGZkOCAwJSwgI2NiYjRlMiA1MCUsICNhNmYyZjUgMTAwJSk7XHJcbiAgYm9yZGVyLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgIzgxOGZkOCAwJSwgI2NiYjRlMiA1MCUsICNhNmYyZjUgMTAwJSk7XHJcbiAgYm9yZGVyLWltYWdlLXNsaWNlOiAxO1xyXG59XHJcblxyXG4ucGhvdG8ge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIG1hcmdpbi1yaWdodDogMzBweDtcclxufVxyXG5cclxuLnByaWNlIHtcclxuICBtYXJnaW46IDA7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3aWR0aDogMTIwcHg7XHJcbn1cclxuXHJcbi5wcmljZS10b3RhbCB7XHJcbiAgYmFja2dyb3VuZDogICM5MTc5Yjc7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIG1hcmdpbjogMzBweCAwO1xyXG4gIHBhZGRpbmc6IDIwcHggNTBweDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG4ucHJpY2UtdG90YWwgaDMsIC5wcmljZS10b3RhbCBwIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4ucHJpY2UtdG90YWwgcCB7XHJcbiAgY29sb3I6ICMzNjI3NTE7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4ucHJpY2UtdG90YWwgaDMge1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBtYXJnaW4tcmlnaHQ6IDYwcHg7XHJcbn1cclxuXHJcbi5wcm9kdWN0LWluZm8ge1xyXG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5cclxuLnByb2R1Y3QtaW5mbyB0ZCB7XHJcbiAgcGFkZGluZzogMCAyMHB4O1xyXG59XHJcblxyXG4ucHJvZHVjdC1pbmZvIHRyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/carparts/carparts.component.html":
/*!**************************************************!*\
  !*** ./src/app/carparts/carparts.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <header>\n    <h1>{{title | uppercase}}</h1>\n    <h3>There are {{totalCarParts()}} total parts in stock</h3>\n  </header>\n  <ul>\n    <!-- css class binding\n      [class.featured]=\"carPart.featured\"\n      [ngClass]=\"{'featured':carPart.featured}\"\n    -->\n    <li class=\"card\" *ngFor=\"let carPart of carParts\" [ngClass]=\"{'featured':carPart.featured}\">\n      <div class=\"panel-body\">\n        <div class=\"photo\">\n          <img [src]=\"carPart.image\" [alt]=\"carPart.description\">\n        </div>\n        <table class=\"product-info\">\n          <tr>\n            <td>\n              <h2>{{carPart.name | uppercase}}</h2>\n              <p class=\"description\">{{carPart.description}}</p>\n              <p *ngIf=\"carPart.inStock > 0\">{{carPart.inStock}} in Stock</p>\n              <p *ngIf=\"carPart.inStock === 0\">Out of Stock</p>\n            </td>\n            <td class=\"price\">{{carPart.price}}</td>\n            <td>\n              <div class=\"select-quantity\">\n                {{carPart.quantity}}\n                <button class=\"decrease\" (click)=\"downQuantity(carPart)\">-</button>\n                <!--<input class=\"number\" type=\"text\" [value]=\"carPart.quantity\" (keyup)=\"keyupQuantity(carPart, $event)\">-->\n                <input class=\"number\" type=\"text\" [(ngModel)]=\"carPart.quantity\">\n                <button class=\"increase\" (click)=\"upQuantity(carPart)\">+</button>\n              </div>\n            </td>\n          </tr>\n        </table>\n      </div>\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/carparts/carparts.component.ts":
/*!************************************************!*\
  !*** ./src/app/carparts/carparts.component.ts ***!
  \************************************************/
/*! exports provided: CarpartsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarpartsComponent", function() { return CarpartsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _carparts_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./carparts-data.service */ "./src/app/carparts/carparts-data.service.ts");



var CarpartsComponent = /** @class */ (function () {
    function CarpartsComponent(carpartsDataService) {
        this.carpartsDataService = carpartsDataService;
        this.title = 'Ultra Racing';
        console.log('CarpartsComponent Constructor is called');
    }
    CarpartsComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('CarpartsComponent ngOnInit');
        // this.carParts = this.carpartsDataService.getCarParts();
        // Observable 방식으로 사용한 Http 통신 //Observable 의 pipe 사용
        /*this.carpartsDataService.getCarParts()
          .pipe(
            catchError(err => {
              console.log('Error 발생', err);
              return throwError(err);
            })
          )
          .subscribe(resData => this.carParts = resData['data'],
            err => { alert(err.status);
              console.log('HTTP Error occured', err); },
                () => console.log('HTTP Request Completed'));*/
        // Promise 객체의 then() mehtod 사용
        this.carpartsDataService.getCarPartsPromise()
            .then(function (resData) { return _this.carParts = resData; });
    };
    CarpartsComponent.prototype.totalCarParts = function () {
        if (Array.isArray(this.carParts)) {
            return this.carParts.reduce(function (prev, curr) { return prev + curr.inStock; }, 0);
        }
    };
    CarpartsComponent.prototype.upQuantity = function (carPart) {
        if (carPart.quantity < carPart.inStock) {
            carPart.quantity++;
        }
    };
    CarpartsComponent.prototype.downQuantity = function (carPart) {
        if (carPart.quantity !== 0) {
            carPart.quantity--;
        }
    };
    CarpartsComponent.prototype.keyupQuantity = function (carPart, event) {
        /* console.log('value:' + event.target.value); */
        if (event.target.value <= carPart.inStock) {
            carPart.quantity = event.target.value;
        }
    };
    CarpartsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-carparts',
            template: __webpack_require__(/*! ./carparts.component.html */ "./src/app/carparts/carparts.component.html"),
            styles: [__webpack_require__(/*! ./carparts.component.css */ "./src/app/carparts/carparts.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_carparts_data_service__WEBPACK_IMPORTED_MODULE_2__["CarpartsDataService"]])
    ], CarpartsComponent);
    return CarpartsComponent;
}());



/***/ }),

/***/ "./src/app/carparts/carparts.module.ts":
/*!*********************************************!*\
  !*** ./src/app/carparts/carparts.module.ts ***!
  \*********************************************/
/*! exports provided: CarpartsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarpartsModule", function() { return CarpartsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _carparts_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./carparts.component */ "./src/app/carparts/carparts.component.ts");
/* harmony import */ var _carparts_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./carparts-data.service */ "./src/app/carparts/carparts-data.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");






var CarpartsModule = /** @class */ (function () {
    function CarpartsModule() {
    }
    CarpartsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]],
            declarations: [_carparts_component__WEBPACK_IMPORTED_MODULE_3__["CarpartsComponent"]],
            exports: [_carparts_component__WEBPACK_IMPORTED_MODULE_3__["CarpartsComponent"]],
            providers: [_carparts_data_service__WEBPACK_IMPORTED_MODULE_4__["CarpartsDataService"]]
        })
    ], CarpartsModule);
    return CarpartsModule;
}());



/***/ }),

/***/ "./src/app/races/races-data.service.ts":
/*!*********************************************!*\
  !*** ./src/app/races/races-data.service.ts ***!
  \*********************************************/
/*! exports provided: RacesDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RacesDataService", function() { return RacesDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var RacesDataService = /** @class */ (function () {
    function RacesDataService(httpClient) {
        this.httpClient = httpClient;
        console.log('RacesDataService constructor called..');
    }
    RacesDataService.prototype.getRaces = function () {
        // Json File under the Assets
        return this.httpClient.get('assets/races.json', { responseType: 'json' });
    };
    RacesDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])( /*{
          providedIn: 'root'
        }*/),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], RacesDataService);
    return RacesDataService;
}());



/***/ }),

/***/ "./src/app/races/races.component.css":
/*!*******************************************!*\
  !*** ./src/app/races/races.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2 {\r\n  color: #9397d8;\r\n  font-size: 22px;\r\n  margin-top: 0;\r\n}\r\n\r\nul {\r\n  list-style-type: none;\r\n  padding: 0;\r\n}\r\n\r\nli {\r\n  margin-bottom: 30px;\r\n}\r\n\r\nli.racing {\r\n  background: #24262c;\r\n}\r\n\r\nli:last-child {\r\n  margin-bottom: 0;\r\n}\r\n\r\n.button {\r\n  background: #fd79fc;\r\n  border-radius: 3px;\r\n  border: 0;\r\n  color: #ffffff;\r\n  width: 120px;\r\n}\r\n\r\n.button-cancel {\r\n  background: none;\r\n  border: 0;\r\n  color: #fd79fc;\r\n  text-decoration: underline;\r\n  width: 120px;\r\n}\r\n\r\n.card {\r\n  background: #44464c;\r\n}\r\n\r\n.date, .price {\r\n  color: #9397d8;\r\n}\r\n\r\n.description {\r\n  color: #66d9f7;\r\n}\r\n\r\n.panel-body {\r\n  display: table;\r\n  padding: 0;\r\n}\r\n\r\n.photo {\r\n  float: left;\r\n  margin-right: 30px;\r\n}\r\n\r\n.price {\r\n  margin: 0;\r\n  font-size: 18px;\r\n  text-align: center;\r\n  width: 120px;\r\n}\r\n\r\n.price-total {\r\n  background:  #9179b7;\r\n  float: right;\r\n  margin: 0px 0;\r\n  padding: 20px 50px;\r\n}\r\n\r\n.price-total h3, .price-total p {\r\n  display: inline-block;\r\n  margin: 0;\r\n}\r\n\r\n.price-total p {\r\n  color: #362751;\r\n  font-size: 18px;\r\n  font-weight: bold;\r\n}\r\n\r\n.price-total h3 {\r\n  font-size: 18px;\r\n  margin-right: 60px;\r\n}\r\n\r\n.race-info {\r\n  display: table-cell;\r\n  vertical-align: middle;\r\n}\r\n\r\n.race-info h3 {\r\n  margin: 0 0;\r\n}\r\n\r\n.race-info td:last-child {\r\n  padding: 0 20px;\r\n}\r\n\r\n.race-info, .race-info tbody, .race-info tr, .race-info td {\r\n  width: 100%;\r\n}\r\n\r\n.race-info tbody {\r\n  display: inline-block;\r\n}\r\n\r\n.status {\r\n  color: #fd79fc;\r\n  text-align: center;\r\n}\r\n\r\n.cash {\r\n  background: #000;\r\n  border: none;\r\n  display: inline-block;\r\n  height: 30px;\r\n  margin: 0px;\r\n  width: 150px;\r\n}\r\n\r\n/* ----- State ----- */\r\n\r\n.unavailble {\r\n  background: #505050;\r\n}\r\n\r\n.unavailble .button {\r\n  background: #707070;\r\n  color: #aeaeae;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmFjZXMvcmFjZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsY0FBYztDQUNmOztBQUVEO0VBQ0Usc0JBQXNCO0VBQ3RCLFdBQVc7Q0FDWjs7QUFFRDtFQUNFLG9CQUFvQjtDQUNyQjs7QUFFRDtFQUNFLG9CQUFvQjtDQUNyQjs7QUFFRDtFQUNFLGlCQUFpQjtDQUNsQjs7QUFFRDtFQUNFLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLGVBQWU7RUFDZixhQUFhO0NBQ2Q7O0FBRUQ7RUFDRSxpQkFBaUI7RUFDakIsVUFBVTtFQUNWLGVBQWU7RUFDZiwyQkFBMkI7RUFDM0IsYUFBYTtDQUNkOztBQUVEO0VBQ0Usb0JBQW9CO0NBQ3JCOztBQUVEO0VBQ0UsZUFBZTtDQUNoQjs7QUFFRDtFQUNFLGVBQWU7Q0FDaEI7O0FBRUQ7RUFDRSxlQUFlO0VBQ2YsV0FBVztDQUNaOztBQUVEO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtDQUNwQjs7QUFFRDtFQUNFLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGFBQWE7Q0FDZDs7QUFFRDtFQUNFLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2IsY0FBYztFQUNkLG1CQUFtQjtDQUNwQjs7QUFFRDtFQUNFLHNCQUFzQjtFQUN0QixVQUFVO0NBQ1g7O0FBRUQ7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtDQUNuQjs7QUFFRDtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7Q0FDcEI7O0FBRUQ7RUFDRSxvQkFBb0I7RUFDcEIsdUJBQXVCO0NBQ3hCOztBQUVEO0VBQ0UsWUFBWTtDQUNiOztBQUVEO0VBQ0UsZ0JBQWdCO0NBQ2pCOztBQUVEO0VBQ0UsWUFBWTtDQUNiOztBQUVEO0VBQ0Usc0JBQXNCO0NBQ3ZCOztBQUVEO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtDQUNwQjs7QUFFRDtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixZQUFZO0VBQ1osYUFBYTtDQUNkOztBQUVELHVCQUF1Qjs7QUFFdkI7RUFDRSxvQkFBb0I7Q0FDckI7O0FBRUQ7RUFDRSxvQkFBb0I7RUFDcEIsZUFBZTtDQUNoQiIsImZpbGUiOiJzcmMvYXBwL3JhY2VzL3JhY2VzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMiB7XHJcbiAgY29sb3I6ICM5Mzk3ZDg7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbn1cclxuXHJcbnVsIHtcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxubGkge1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbmxpLnJhY2luZyB7XHJcbiAgYmFja2dyb3VuZDogIzI0MjYyYztcclxufVxyXG5cclxubGk6bGFzdC1jaGlsZCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG5cclxuLmJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZDogI2ZkNzlmYztcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIHdpZHRoOiAxMjBweDtcclxufVxyXG5cclxuLmJ1dHRvbi1jYW5jZWwge1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIGNvbG9yOiAjZmQ3OWZjO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gIHdpZHRoOiAxMjBweDtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gIGJhY2tncm91bmQ6ICM0NDQ2NGM7XHJcbn1cclxuXHJcbi5kYXRlLCAucHJpY2Uge1xyXG4gIGNvbG9yOiAjOTM5N2Q4O1xyXG59XHJcblxyXG4uZGVzY3JpcHRpb24ge1xyXG4gIGNvbG9yOiAjNjZkOWY3O1xyXG59XHJcblxyXG4ucGFuZWwtYm9keSB7XHJcbiAgZGlzcGxheTogdGFibGU7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLnBob3RvIHtcclxuICBmbG9hdDogbGVmdDtcclxuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbn1cclxuXHJcbi5wcmljZSB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEyMHB4O1xyXG59XHJcblxyXG4ucHJpY2UtdG90YWwge1xyXG4gIGJhY2tncm91bmQ6ICAjOTE3OWI3O1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBtYXJnaW46IDBweCAwO1xyXG4gIHBhZGRpbmc6IDIwcHggNTBweDtcclxufVxyXG5cclxuLnByaWNlLXRvdGFsIGgzLCAucHJpY2UtdG90YWwgcCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLnByaWNlLXRvdGFsIHAge1xyXG4gIGNvbG9yOiAjMzYyNzUxO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLnByaWNlLXRvdGFsIGgzIHtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiA2MHB4O1xyXG59XHJcblxyXG4ucmFjZS1pbmZvIHtcclxuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcbi5yYWNlLWluZm8gaDMge1xyXG4gIG1hcmdpbjogMCAwO1xyXG59XHJcblxyXG4ucmFjZS1pbmZvIHRkOmxhc3QtY2hpbGQge1xyXG4gIHBhZGRpbmc6IDAgMjBweDtcclxufVxyXG5cclxuLnJhY2UtaW5mbywgLnJhY2UtaW5mbyB0Ym9keSwgLnJhY2UtaW5mbyB0ciwgLnJhY2UtaW5mbyB0ZCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5yYWNlLWluZm8gdGJvZHkge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLnN0YXR1cyB7XHJcbiAgY29sb3I6ICNmZDc5ZmM7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uY2FzaCB7XHJcbiAgYmFja2dyb3VuZDogIzAwMDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGhlaWdodDogMzBweDtcclxuICBtYXJnaW46IDBweDtcclxuICB3aWR0aDogMTUwcHg7XHJcbn1cclxuXHJcbi8qIC0tLS0tIFN0YXRlIC0tLS0tICovXHJcblxyXG4udW5hdmFpbGJsZSB7XHJcbiAgYmFja2dyb3VuZDogIzUwNTA1MDtcclxufVxyXG5cclxuLnVuYXZhaWxibGUgLmJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZDogIzcwNzA3MDtcclxuICBjb2xvcjogI2FlYWVhZTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/races/races.component.html":
/*!********************************************!*\
  !*** ./src/app/races/races.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>{{heading}}</h1>\n  <h2>Money for racing: <input type=\"text\" class=\"cash\" [(ngModel)]=\"cash\"></h2>\n  <h2>Cash left to enter races: <span>{{cashLeft() | currency:'USD':true}}</span> </h2>\n  <ul>\n    <li class=\"card\" *ngFor=\"let race of races\" [class.racing]=\"race.isRacing\" >\n      <div class=\"panel-body\">\n        <div class=\"photo\">\n          <img [src]=\"race.image\" [alt]=\"race.imageDescription\">\n        </div>\n        <table class=\"race-info\">\n          <tr>\n            <td>\n              <h3>{{race.name}}</h3>\n              <p class=\"date\">{{castDate(race.date) | date:'MMM d, y, h:mma'}}</p>\n              <p class=\"description\">{{race.about}}</p>\n            </td>\n            <td>\n              <p class=\"price\">{{race.entryFee | currency:'USD':true}}</p>\n            </td>\n            <td>\n              <button class=\"button\" *ngIf=\"!race.isRacing\" (click)=\"enterRace(race)\">Enter Race</button>\n              <div *ngIf=\"race.isRacing\">\n                <p class=\"status\">Racing</p>\n                <button class=\"button-cancel\" (click)=\"cancelRace(race)\">Cancel Race</button>\n              </div>\n            </td>\n          </tr>\n        </table>\n      </div>\n    </li>\n  </ul>\n  <div class=\"price-total\">\n    <h3>Total cost:</h3>\n    <p>{{totalCost() | currency:'USD':true}}</p>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/races/races.component.ts":
/*!******************************************!*\
  !*** ./src/app/races/races.component.ts ***!
  \******************************************/
/*! exports provided: RacesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RacesComponent", function() { return RacesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _races_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./races-data.service */ "./src/app/races/races-data.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var RacesComponent = /** @class */ (function () {
    function RacesComponent(racesDataService) {
        this.racesDataService = racesDataService;
        this.heading = 'Ultra Racing Schedule';
        this.cash = 10000;
        console.log('racesDataService Constructor is called');
    }
    RacesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.racesDataService.getRaces()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            console.log('Error 발생', err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(err);
        }))
            .subscribe(function (resData) { return _this.races = resData['racesData']; }, function (err) {
            alert(err.status);
            console.log('HTTP Error occured', err);
        }, function () { return console.log('HTTP Request Completed'); });
    };
    RacesComponent.prototype.totalCost = function () {
        var sum = 0;
        if (this.races) {
            for (var _i = 0, _a = this.races; _i < _a.length; _i++) {
                var race = _a[_i];
                if (race.isRacing) {
                    sum += race.entryFee;
                }
            }
        }
        return sum;
    };
    RacesComponent.prototype.castDate = function (date) {
        return new Date(date);
    };
    RacesComponent.prototype.cashLeft = function () {
        return this.cash - this.totalCost();
    };
    RacesComponent.prototype.enterRace = function (race) {
        if (this.cashLeft() > race.entryFee) {
            race.isRacing = true;
        }
        else {
            alert('You dont have enough cash');
        }
    };
    RacesComponent.prototype.cancelRace = function (race) {
        race.isRacing = false;
    };
    RacesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-races',
            template: __webpack_require__(/*! ./races.component.html */ "./src/app/races/races.component.html"),
            styles: [__webpack_require__(/*! ./races.component.css */ "./src/app/races/races.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_races_data_service__WEBPACK_IMPORTED_MODULE_2__["RacesDataService"]])
    ], RacesComponent);
    return RacesComponent;
}());



/***/ }),

/***/ "./src/app/races/races.module.ts":
/*!***************************************!*\
  !*** ./src/app/races/races.module.ts ***!
  \***************************************/
/*! exports provided: RacesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RacesModule", function() { return RacesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _races_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./races.component */ "./src/app/races/races.component.ts");
/* harmony import */ var _races_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./races-data.service */ "./src/app/races/races-data.service.ts");






var RacesModule = /** @class */ (function () {
    function RacesModule() {
    }
    RacesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]],
            declarations: [_races_component__WEBPACK_IMPORTED_MODULE_4__["RacesComponent"]],
            exports: [_races_component__WEBPACK_IMPORTED_MODULE_4__["RacesComponent"]],
            providers: [_races_data_service__WEBPACK_IMPORTED_MODULE_5__["RacesDataService"]]
        })
    ], RacesModule);
    return RacesModule;
}());



/***/ }),

/***/ "./src/app/shared/directive/color.directive.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/directive/color.directive.ts ***!
  \*****************************************************/
/*! exports provided: ColorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorDirective", function() { return ColorDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

/**
 * Created by vega on 2017-03-29.
 */

var ColorDirective = /** @class */ (function () {
    function ColorDirective(el) {
        this.el = el;
        this.defaultColor = 'blue';
        this.el = el;
        this.setColor(this.defaultColor);
    }
    ColorDirective.prototype.setColor = function (color) {
        this.el.nativeElement.style.color = color;
    };
    ColorDirective.prototype.onMouseEnter = function () {
        this.hover('green');
    };
    ColorDirective.prototype.onMouseLeave = function () {
        this.hover(this.defaultColor);
    };
    // Event method to be called on mouse enter and on mouse leave
    ColorDirective.prototype.hover = function (color) {
        this.setColor(color);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mouseenter'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], ColorDirective.prototype, "onMouseEnter", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mouseleave'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], ColorDirective.prototype, "onMouseLeave", null);
    ColorDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[mycolor]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], ColorDirective);
    return ColorDirective;
}());



/***/ }),

/***/ "./src/app/shared/directive/hidden.directive.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/directive/hidden.directive.ts ***!
  \******************************************************/
/*! exports provided: HiddenDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HiddenDirective", function() { return HiddenDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

/**
 * Created by vega on 2017-03-29.
 */

// Directive decorator
var HiddenDirective = /** @class */ (function () {
    function HiddenDirective(el, renderer) {
        // Use renderer to render the element with styles
        renderer.setElementStyle(el.nativeElement, 'display', 'none');
    }
    HiddenDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({ selector: '[myHidden]' })
        // Directive class
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer"]])
    ], HiddenDirective);
    return HiddenDirective;
}());



/***/ }),

/***/ "./src/app/shared/directive/text-decoration.directive.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/directive/text-decoration.directive.ts ***!
  \***************************************************************/
/*! exports provided: TextDecorationDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextDecorationDirective", function() { return TextDecorationDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

/**
 * Created by vega on 2017-03-29.
 */

var TextDecorationDirective = /** @class */ (function () {
    function TextDecorationDirective(renderer, el) {
        this.renderer = renderer;
        this.el = el;
    }
    // Event listeners for element hosting
    // the directive
    TextDecorationDirective.prototype.onMouseEnter = function () {
        this.hover(true);
    };
    TextDecorationDirective.prototype.onMouseLeave = function () {
        this.hover(false);
    };
    // Event method to be called on mouse enter and on mouse leave
    TextDecorationDirective.prototype.hover = function (shouldUnderline) {
        if (shouldUnderline) {
            // Mouse enter
            this.renderer.setStyle(this.el.nativeElement, 'text-decoration', this.prop);
        }
        else {
            // Mouse leave
            this.renderer.setStyle(this.el.nativeElement, 'text-decoration', 'none');
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('myTextDecorator'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TextDecorationDirective.prototype, "prop", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mouseenter'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], TextDecorationDirective.prototype, "onMouseEnter", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mouseleave'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], TextDecorationDirective.prototype, "onMouseLeave", null);
    TextDecorationDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[myTextDecorator]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], TextDecorationDirective);
    return TextDecorationDirective;
}());



/***/ }),

/***/ "./src/app/shared/pipe/mydate.pipe.ts":
/*!********************************************!*\
  !*** ./src/app/shared/pipe/mydate.pipe.ts ***!
  \********************************************/
/*! exports provided: MyDatePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyDatePipe", function() { return MyDatePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MyDatePipe = /** @class */ (function () {
    function MyDatePipe() {
    }
    MyDatePipe.prototype.transform = function (value, exponent) {
        console.log("날짜 " + value);
        //20170329
        if (value.length == 8) {
            return value.substring(0, 4) + exponent +
                value.substring(4, 6) + exponent +
                value.substring(6, 8);
        }
        //2017329
        if (value.length == 7) {
            return value.substring(0, 4) + exponent +
                '0' + value.substring(4, 5) + exponent +
                value.substring(5, 7);
        }
        else {
            return value;
        }
    };
    MyDatePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'mydate' })
    ], MyDatePipe);
    return MyDatePipe;
}());



/***/ }),

/***/ "./src/app/shared/pipe/ordinal.pipe.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/pipe/ordinal.pipe.ts ***!
  \*********************************************/
/*! exports provided: OrdinalPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdinalPipe", function() { return OrdinalPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

/**
 * Created by vega on 2017-03-29.
 */

var OrdinalPipe = /** @class */ (function () {
    function OrdinalPipe() {
    }
    OrdinalPipe.prototype.transform = function (value) {
        var suffix = '';
        var last = value % 10;
        var specialLast = value % 100;
        // if (!value || value < 1) {
        //     return value + ' ';
        // }
        if (last === 1 && specialLast !== 11) {
            suffix = 'st';
        }
        else if (last === 2 && specialLast !== 12) {
            suffix = 'nd';
        }
        else if (last === 3 && specialLast !== 13) {
            suffix = 'rd';
        }
        else {
            suffix = 'th';
        }
        return value + suffix;
    };
    OrdinalPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'ordinal'
        })
    ], OrdinalPipe);
    return OrdinalPipe;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _pipe_ordinal_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pipe/ordinal.pipe */ "./src/app/shared/pipe/ordinal.pipe.ts");
/* harmony import */ var _pipe_mydate_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pipe/mydate.pipe */ "./src/app/shared/pipe/mydate.pipe.ts");
/* harmony import */ var _directive_hidden_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./directive/hidden.directive */ "./src/app/shared/directive/hidden.directive.ts");
/* harmony import */ var _directive_text_decoration_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./directive/text-decoration.directive */ "./src/app/shared/directive/text-decoration.directive.ts");
/* harmony import */ var _directive_color_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./directive/color.directive */ "./src/app/shared/directive/color.directive.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");

/**
 * Created by vega on 2017-03-29.
 */







var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"]],
            declarations: [_pipe_ordinal_pipe__WEBPACK_IMPORTED_MODULE_2__["OrdinalPipe"], _pipe_mydate_pipe__WEBPACK_IMPORTED_MODULE_3__["MyDatePipe"], _directive_hidden_directive__WEBPACK_IMPORTED_MODULE_4__["HiddenDirective"], _directive_text_decoration_directive__WEBPACK_IMPORTED_MODULE_5__["TextDecorationDirective"], _directive_color_directive__WEBPACK_IMPORTED_MODULE_6__["ColorDirective"]],
            exports: [_pipe_ordinal_pipe__WEBPACK_IMPORTED_MODULE_2__["OrdinalPipe"], _pipe_mydate_pipe__WEBPACK_IMPORTED_MODULE_3__["MyDatePipe"], _directive_hidden_directive__WEBPACK_IMPORTED_MODULE_4__["HiddenDirective"], _directive_text_decoration_directive__WEBPACK_IMPORTED_MODULE_5__["TextDecorationDirective"], _directive_color_directive__WEBPACK_IMPORTED_MODULE_6__["ColorDirective"]]
        })
    ], SharedModule);
    return SharedModule;
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

module.exports = __webpack_require__(/*! C:\angular-typescript\carpart-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map