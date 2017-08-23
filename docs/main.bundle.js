webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n  /* ############ standard search bar styles  #################### */\n  .app-standard-input-styles {\n    font-size: 10.5pt;\n    color: #444444;\n    height: 35px;\n    border-radius: 0px;\n    border: 1px solid #f9f9f9;\n    font-weight: bold;\n    background-color: white;\n    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.08);\n    transition: box-shadow 200ms cubic-bezier(0.4, 0.0, 0.2, 1);\n    vertical-align: top;\n    border-radius: 6px;\n  }\n\n  .adv-input-box {\n    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.08);\n    width:100%;\n    border: 1px solid #f9f9f9;\n    border-radius: 2px;\n    height: 25px;\n    background-color: #e4e4e4;\n  }\n\n  .label-styles {\n    font-size: 8pt;\n    color: white;\n    font-weight: lighter;\n\n  }\n\n  .search-btn {\n    position: absolute;\n    right: 15px;\n    background-color: #e4e4e4;\n    height: 35px;\n    width: 60px;\n    border-bottom-right-radius: 6px;\n    border-top-right-radius: 6px;\n    border-left: .5px solid #d6d6d6;\n    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.08);\n  }\n\n  .flex-shape {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    margin-top: 15px;\n  }\n\n\n  /* ############ standard margin sizes (Largest to Smallest) for the entire app  #################### */\n  .margin-bottom-200 {\n    margin-bottom: 200px;\n  }\n\n\n  .margin-bottom-150 {\n    margin-bottom: 150px;\n  }\n\n  .margin-bottom-100 {\n    margin-bottom: 100px;\n  }\n\n  .mrg-btm-85 {\n    margin-bottom: 85px;\n  }\n\n  .mrg-btm-50 {\n    margin-bottom: 50px;\n  }\n\n  .mrg-btm-30 {\n    margin-bottom: 30px;\n  }\n\n  .margin-bottom-25 {\n    margin-bottom: 25px;\n  }\n\n  .margin-bottom-15 {\n    margin-bottom: 15px;\n  }\n\n  .margin-bottom-12p {\n    margin-bottom: 12%;\n  }\n\n  .margin-bottom-8 {\n    margin-bottom: 8px;\n  }\n\n  .margin-bottom-5 {\n    margin-bottom: 5px;\n  }\n\n  .mrg-btm-5 {\n    margin-bottom: 5px;\n  }\n\n  .margin-bottom-5p {\n    margin-bottom: 5%;\n  }\n\n  /* ############ standard margin top sizes (Largest to Smallest) for the entire app  #################### */\n  .mrg-tp-5 {\n    margin-top: 5px;\n  }\n\n  /* ############ standard margin left sizes (Largest to Smallest) for the entire app  #################### */\n  .mrg-lft-10 {\n    margin-left: 10px;\n  }\n\n  /* ############ standard padding sizes (Largest to Smallest) for the entire app  #################### */\n  .pd-tp-5 {\n    padding-top: 5px;\n  }\n\n  .pd-btm-5 {\n    padding-bottom: 5px;\n  }\n\n  .xs-pd {\n    padding: 2px;\n  }\n\n  .sm-pd {\n    padding: 5px;\n  }\n\n  .pd-all-8 {\n    padding: 8px;\n  }\n\n  .md-pd {\n    padding: 10px;\n  }\n\n  .pd-20 {\n    padding: 20px;\n  }\n\n  .pd-btm-50 {\n    padding-bottom: 50px;\n  }\n\n  /* ############ standard google places autocomplete #################### */\n  .ap-input::-ms-clear {\n    display: none;\n  }\n\n  .ap-input:hover ~ .ap-input-icon svg,\n  .ap-input:focus ~ .ap-input-icon svg,\n  .ap-input-icon:hover svg {\n    fill: #aaaaaa;\n  }\n\n  .ap-suggestion {\n    cursor: pointer;\n    height: 46px;\n    line-height: 46px;\n    padding-left: 18px;\n    overflow: hidden;\n  }\n\n  .ap-suggestion em {\n    font-weight: bold;\n    font-style: normal;\n  }\n\n  .ap-suggestion-icon {\n    margin-right: 10px;\n    width: 14px;\n    height: 20px;\n    vertical-align: middle;\n  }\n\n  .ap-suggestion-icon svg {\n    -webkit-transform: scale(0.9) translateY(2px);\n    transform: scale(0.9) translateY(2px);\n    fill: #cfcfcf;\n  }\n\n  /*head bar css class*/\n  .home-logo-width { width: 100px}\n\n  .font-weight-bold {font-weight: bold}\n\n  .font-size-14 {font-size: 14px}\n  .font-size-18 {font-size: 18px}\n  .font-size-12 {font-size: 12px}\n\n  /*search box*/\n  .search-icon {\n    width: 20px;\n    position: absolute;\n    top: 6px;\n    right: 20px;\n  }\n\n  .adv-btn {\n    background-color: #444444;\n    color: white;\n  }\n\n  .overflow-scroll {\n    overflow: auto;\n  }\n\n  .overflow-hide {\n    overflow: hidden;\n  }\n\n  .pos-relative {\n    position: relative;\n  }\n\n  .house   {\n    width: 50px;\n    position: absolute;\n  }\n\n  .scoreInhouse {\n    position: absolute;\n    top: 22px;\n    left: 16.5px;\n    font-size: 12px;\n    color: red;\n  }\n\n  .scale-indicator {\n    position: absolute;\n    top: 0px;\n    width: 7px;\n    height: 80%;\n    border-radius: 50px;\n    background-color: #f9f9f9; /* Safari 5.1 to 6.0 */ /* For Opera 11.6 to 12.0 */ /* For Firefox 3.6 to 15 */\n    background: radial-gradient(#444444, #e4e4e4, #f9f9f9); /* Standard syntax */\n\n  }\n\n  .dark-background {\n    background-color: rgba(0,0,0,0.5);\n    border-radius: 5px;\n  }\n\n  .text-advertise {\n    color: white;\n  }\n\n  .flex-center-all {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n  }\n\n  .adv-image {\n    width: 300px;\n  }\n\n  .text-sm-white {\n    color: white;\n  }\n\n  .left-xs {\n    left:10%;\n  }\n\n  .left-sm {\n    left:30%;\n  }\n\n  .left-md {\n    left:45%;\n  }\n\n  .left-lg {\n    left:88%;\n  }\n\n  .left-1 {\n    left:5%;\n  }\n  .left-2 {\n    left:15%;\n  }\n  .left-3 {\n    left:20%;\n  }\n  .left-4 {\n    left:50%;\n  }\n  .left-5 {\n    left:55%;\n  }\n  .left-6 {\n    left:65%;\n  }\n  .left-7 {\n    left:70%;\n  }\n  .left-8 {\n    left:75%;\n  }\n  .left-9 {\n    left:80%;\n  }\n\n  .sleft-xs {\n    left:15%;\n  }\n\n  .sleft-sm {\n    left:32.5%;\n  }\n\n  .sleft-md {\n    left:45%;\n  }\n\n  .sleft-lg {\n    left:88%;\n  }\n\n  .sleft-1 {\n    left:7.5%;\n  }\n  .sleft-2 {\n    left:17.5%;\n  }\n  .sleft-3 {\n    left:22.5%;\n  }\n  .sleft-4 {\n    left:52.5%;\n  }\n  .sleft-5 {\n    left:57.5%;\n  }\n  .sleft-6 {\n    left:67.5%;\n  }\n  .sleft-7 {\n    left:72.5%;\n  }\n  .sleft-8 {\n    left:77.5%;\n  }\n  .sleft-9 {\n    left:82.5%;\n  }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<!--router outlet injection for the entire app-->\n<router-outlet></router-outlet>\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__orderby_pipe__ = __webpack_require__("../../../../../src/app/orderby-pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__page_not_found_page_not_found_component__ = __webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__get_data_service__ = __webpack_require__("../../../../../src/app/get-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__city_detail_city_detail_component__ = __webpack_require__("../../../../../src/app/city-detail/city-detail.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var appRoutes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_7__home_home_component__["a" /* HomeComponent */] },
    { path: 'city-details', component: __WEBPACK_IMPORTED_MODULE_10__city_detail_city_detail_component__["a" /* CityDetailComponent */] },
    { path: 'not-found', component: __WEBPACK_IMPORTED_MODULE_8__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */] },
    { path: '**', redirectTo: '/not-found' }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_8__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */],
            __WEBPACK_IMPORTED_MODULE_4__orderby_pipe__["a" /* OrderBy */],
            __WEBPACK_IMPORTED_MODULE_10__city_detail_city_detail_component__["a" /* CityDetailComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot(appRoutes, { initialNavigation: 'enabled' }),
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_9__get_data_service__["a" /* getDataService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/city-detail/city-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".scale-icon { width: 100%}\n\n.justify-center {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n\n\n.bck-color-e6e6e6 {\n  background-color: #e6e6e6;\n}\n\n.opacity {\n  opacity: .8;\n}\n\n.score-text-styles {\n  font-size: 25px;\n  color: red;\n}\n\n.city-title-styles {\n  font-size: 20px;\n  font-weight: bold;\n}\n\n.city-info-title-styles {\n  font-size: 20px;\n  font-weight: bold;\n  color: white;\n}\n\n.border {\n  border: 1px solid #444444;\n}\n\n\n.width-50 {\n  width: 50%;\n}\n\n.border-btm {\n  border-bottom: 1px solid #444444;\n}\n\n.text-data-styles {\n  font-size: 20px;\n  font-weight: bold;\n}\n\n\n.hr-line {\n  background-color: black;\n  margin-top: 12px;\n  margin-bottom: 12px;\n  border: 1px solid;\n  width: 80%;\n}\n\n.hrLine {\n  background-color: #444444;\n  border: 1px solid #444444;\n}\n\n.border-right {\n  border-right: 2px solid #444444;\n}\n\n.text-data-title-styles {\n  font-size: 15px;\n}\n\n\n.search-rts-box {\n  width: 96%;\n  height: 200px;\n  background: #fff;\n  border: 1px solid #ccc;\n  border-top-color: #d9d9d9;\n  box-shadow: 0 2px 4px rgba(0,0,0,0.2);\n  -webkit-box-shadow: 0 2px 4px rgba(0,0,0,0.2);\n  cursor: default;\n  position: absolute;\n  z-index: 100;\n}\n\n.city-hover:hover { background-color: #e4e4e4 }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/city-detail/city-detail.component.html":
/***/ (function(module, exports) {

module.exports = "\n<!--// ############ fixed header bar home page #################### //-->\n\n  <nav class=\"navbar margin-bottom-5p navbar-inverse bg-inverse\">\n    <div class=\"container\">\n      <a class=\"navbar-brand home-logo-width\"  routerLink=\"/home\"><img style=\"width: 100%;\" src=\"../../assets/realcitylogo.png\" alt=\"\"></a>\n    </div>\n  </nav>\n\n\n  <!--// ############ search bar container #################### //-->\n\n  <div class=\"container\">\n    <div class=\"margin-bottom-100\">\n      <div class=\"row margin-bottom-15\">\n        <div class=\"col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2 col-md-8 col-md-offset-2 text-center\">\n          <div class=\"font-weight-bold font-size-18 margin-bottom-5\">Discover Whether a City is Currently a Buyer's or Seller's Market</div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"form-group col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2 col-md-8 col-md-offset-2 text-center\">\n          <div class=\"search-btn\">\n            <div class=\"search-icon\"><img style=\"width: 100%\" src=\"../../assets/searchIcon.svg\" alt=\"\"></div>\n          </div>\n          <input\n            type=\"text\"\n            [(ngModel)]=\"filterargs.title\"\n            (ngModelChange)=\"onCityChange()\"\n            placeholder=\"Search for a City\"\n            class=\"form-control app-standard-input-styles\"/>\n\n          <div *ngIf=\"searchPredictions\" class=\"search-rts-box overflow-scroll\">\n            <div *ngFor=\"let city of cities | orderBy:filterargs; let index=index\" (click)=\"onSelectCity(city)\"  class=\"city-hover\">\n              <div class=\"text-left pd-tp-5 pd-btm-5 mrg-lft-10\" >\n                <div class=\"\">{{city.title}}</div>\n              </div>\n            </div>\n          </div>\n\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n  <!--// ############ city content area   #################### //-->\n\n  <div class=\"container mrg-btm-85\">\n    <div class=\"row \">\n      <div class=\"col-xs-12 col-sm-10 col-sm-offset-1\">\n       <div class=\"pd-all-8\">\n         <div class=\"row mrg-btm-30\">\n           <div class=\"col-xs-6\">\n             <div class=\"city-title-styles mrg-btm-5\">Snap Shot of {{selectedCity.name}}</div>\n             <div>Aug 2017</div>\n           </div>\n           <div class=\"col-xs-6 text-right\">\n             <div class=\"score-text-styles\">{{selectedCity.score}}</div>\n             <div>Out of 10</div>\n             <div>{{buyersorsellers}} Market</div>\n           </div>\n         </div>\n         <div class=\"row\">\n           <div class=\"col-xs-12\">\n            <div class=\"justify-center\">\n              <div class=\"scale-icon\"><img style=\"width: 100%\" src=\"../../assets/RealMarketScale.svg\" alt=\"\"></div>\n              <div class=\"scale-indicator\" [ngClass]=\"{'sleft-1': selectedCity.score <= 2, 'sleft-2': selectedCity.score <= 3 && selectedCity.score > 2,\n            'sleft-3': selectedCity.score <= 4 && selectedCity.score > 3, 'sleft-4': selectedCity.score <= 5 && selectedCity.score > 4,\n             'sleft-5': selectedCity.score <= 6 && selectedCity.score > 5, 'sleft-6': selectedCity.score <= 7 && selectedCity.score > 6,\n             'sleft-7': selectedCity.score <= 8 && selectedCity.score > 7, 'sleft-8': selectedCity.score <= 9 && selectedCity.score > 8,\n             'sleft-9': selectedCity.score <= 11 && selectedCity.score > 9}\"></div>\n            </div>\n            <div class=\"house\" [ngClass]=\"{'left-1': selectedCity.score <= 2, 'left-2': selectedCity.score <= 3 && selectedCity.score > 2,\n            'left-3': selectedCity.score <= 4 && selectedCity.score > 3, 'left-4': selectedCity.score <= 5 && selectedCity.score > 4,\n             'left-5': selectedCity.score <= 6 && selectedCity.score > 5, 'left-6': selectedCity.score <= 7 && selectedCity.score > 6,\n             'left-7': selectedCity.score <= 8 && selectedCity.score > 7, 'left-8': selectedCity.score <= 9 && selectedCity.score > 8,\n             'left-9': selectedCity.score <= 11 && selectedCity.score > 9}\"><img style=\"width: 100%\" src=\"../../assets/houseIcon.png\" alt=\"\"><div class=\"scoreInhouse\">{{selectedCity.score}}</div> </div>\n           </div>\n         </div>\n       </div>\n      </div>\n    </div>\n  </div>\n\n\n<!--// ############ data area   #################### //-->\n\n<div class=\"container margin-bottom-100\">\n  <div class=\"row \">\n    <div class=\"col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2\">\n      <div class=\"row\">\n        <div class=\"col-xs-4 border-right text-center\">\n          <div class=\"text-data-styles overflow-hide \">${{selectedCity.zmlp | number:'3.1-5'}}</div>\n          <hr class=\"hr-line\">\n          <div class=\"text-data-title-styles\">Median Price</div>\n        </div>\n        <div class=\"col-xs-4 border-right text-center\">\n          <div class=\"text-data-styles\">${{selectedCity.mls}}</div>\n          <hr class=\"hr-line\">\n          <div class=\"text-data-title-styles\">/SQ Feet</div>\n        </div>\n        <div class=\"col-xs-4 text-center\">\n          <div class=\"text-data-styles\">{{selectedCity.al}}</div>\n          <hr class=\"hr-line\">\n          <div class=\"text-data-title-styles\">Active Listings</div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!--&lt;!&ndash;// ############ information title   #################### //&ndash;&gt;-->\n\n<!--<div class=\"container mrg-btm-50\">-->\n  <!--<div class=\"row \">-->\n    <!--<div class=\"col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2\">-->\n      <!--<div class=\"text-center\">-->\n        <!--<div class=\"city-info-title-styles\">This city is currently a great place to {{buyOrSell}} a property</div>-->\n      <!--</div>-->\n    <!--</div>-->\n  <!--</div>-->\n<!--</div>-->\n\n<!--// ############ hr line  #################### //-->\n\n<div class=\"container\">\n  <div class=\"row margin-bottom-15\">\n    <div class=\"col-xs-12 col-sm-10 col-sm-offset-1\">\n      <hr class=\"hrLine\">\n    </div>\n  </div>\n</div>\n\n\n\n\n<!--// ############ advertise with us  #################### //-->\n\n<div class=\"container margin-bottom-150\">\n  <div class=\"row \">\n    <div class=\"col-xs-12  col-sm-10 col-sm-offset-1\">\n      <div class=\"dark-background pd-20\">\n        <div class=\"row\">\n          <div class=\"col-xs-12\">\n            <div class=\"row flex-center-all\">\n              <div class=\"col-xs-6\">\n                <div class=\"text-center\">\n                  <div class=\"city-info-title-styles margin-bottom-15\">This City is a {{buyOrSell}} Market</div>\n                  <div class=\"margin-bottom-5 text-sm-white\">The current average home price is $xxx,xxxx</div>\n                  <div class=\"margin-bottom-15 text-sm-white\">Want to learn more about this market? Want to advertise with us?</div>\n                  <button (click)=\"sendEmail()\" type=\"submit\" class=\"btn adv-btn\">Learn More</button>\n                </div>\n              </div>\n              <div class=\"col-xs-6 \">\n                <div class=\"flex-center-all\">\n                  <div class=\"adv-image\"><img style=\"width: 100%\" src=\"../../assets/realCityAd1.png\" alt=\"\"></div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/city-detail/city-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__get_data_service__ = __webpack_require__("../../../../../src/app/get-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CityDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CityDetailComponent = (function () {
    function CityDetailComponent(getDataService, router, route) {
        this.getDataService = getDataService;
        this.router = router;
        this.route = route;
    }
    CityDetailComponent.prototype.ngOnInit = function () {
        this.filterargs = { title: '' };
        this.cities = this.getDataService.getCities();
        this.selectedCity = this.getDataService.getSelectedCity();
        if (this.selectedCity.score > 5) {
            this.buyOrSell = 'Buyers';
            this.buyersorsellers = 'Buyers';
        }
        else {
            this.buyOrSell = 'Sellers';
            this.buyersorsellers = 'Sellers';
        }
    };
    CityDetailComponent.prototype.onCityChange = function () {
        if (this.filterargs.title !== '' && this.filterargs.title !== null && this.filterargs.title !== undefined) {
            this.searchPredictions = true;
        }
        else {
            this.searchPredictions = false;
        }
    };
    CityDetailComponent.prototype.onSelectCity = function (city) {
        this.getDataService.saveCity(city);
        this.selectedCity = this.getDataService.getSelectedCity();
        if (this.selectedCity.score > 5) {
            this.buyOrSell = 'buy';
            this.buyersorsellers = 'Buyers';
        }
        else {
            this.buyOrSell = 'sell';
            this.buyersorsellers = 'Sellers';
        }
        this.searchPredictions = false;
    };
    CityDetailComponent.prototype.sendEmail = function () {
        this.getDataService.sendEmail();
    };
    return CityDetailComponent;
}());
CityDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-city-detail',
        template: __webpack_require__("../../../../../src/app/city-detail/city-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/city-detail/city-detail.component.css"), __webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__get_data_service__["a" /* getDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__get_data_service__["a" /* getDataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object])
], CityDetailComponent);

var _a, _b, _c;
//# sourceMappingURL=city-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/get-data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getDataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by codev on 7/25/17.
 */





// Import RxJs required methods


var getDataService = (function () {
    function getDataService(http, router) {
        this.http = http;
        this.router = router;
        // getCities(value) {
        //   return this.http.get('https://maps.googleapis.com/maps/api/place/autocomplete/json?input=Paris&types=geocode&key=AIzaSyAnqpYuuFQVg0PRzasob4BdNWZ58rArRKg');
        // }
        // cities:any = [
        //   {title: 'Provo, Utah', id: 1},
        //   {title: 'South Jordan', id: 2},
        //   {title: 'Hebber' , id: 3},
        //   {title: 'Murray', id: 4},
        //   {title: 'West Jordan', id: 5},
        //   {title: 'Bothell', id: 6},
        //   {title: 'Brownsville', id: 7},
        //   {title: 'Bird', id: 8},
        //   {title: 'Martin Cove', id: 9},
        //   {title: 'Riverton', id: 10},
        //   {title: 'New York', id: 11},
        //   {title: 'Seattle', id: 12},
        //   {title: 'San Fransico', id: 13},
        //   {title: 'Colorado Springs', id: 14},
        // ]
        //
        // cityObj:any = {
        //   1: {md: 200000, sq: 200, al: 500000, score: 3, name: "Provo, Utah"}
        // }
        this.cities = [
            { title: 'Provo, Utah', id: 1 },
            { title: 'Dallas, Texas', id: 2 },
            { title: 'Fort Worth, Texas', id: 3 },
            { title: 'Frisco, Texas', id: 455 },
            { title: 'McKinney, Texas', id: 4 },
            { title: 'Arlington, Texas', id: 5 },
            { title: 'Little Elm, Texas', id: 6 },
            { title: 'Plano, Texas', id: 7 },
            { title: 'Irving, Texas', id: 8 },
            { title: 'Flower Mound, Texas', id: 9 },
            { title: 'Allen, Texas', id: 10 },
            { title: 'Garland, Texas', id: 11 },
            { title: 'Grand Prairie, Texas', id: 12 },
            { title: 'Prosper, Texas', id: 13 },
            { title: 'Denton, Texas', id: 14 },
            { title: 'Rockwall, Texas', id: 15 },
            { title: 'Colleyville, Texas', id: 16 },
            { title: 'Southlake, Texas', id: 17 },
            { title: 'Waxahachie, Texas', id: 18 },
            { title: 'Mansfield, Texas', id: 19 },
            { title: 'Cedar Hill, Texas', id: 20 },
            { title: 'Mesquite, Texas', id: 21 },
            { title: 'Rowlett, Texas', id: 22 },
            { title: 'Midlothian, Texas', id: 23 },
            { title: 'Keller, Texas', id: 24 },
            { title: 'The Colony, Texas', id: 25 },
            { title: 'Wylie, Texas', id: 26 },
            { title: 'Carrollton, Texas', id: 27 },
            { title: 'Lewisville, Texas', id: 28 },
            { title: 'Terrell, Texas', id: 29 },
            { title: 'Azle, Texas', id: 30 },
            { title: 'DeSoto, Texas', id: 31 },
            { title: 'University Park, Texas', id: 32 },
            { title: 'Richardson, Texas', id: 33 },
            { title: 'Ennis, Texas', id: 34 },
            { title: 'Burleson, Texas', id: 35 },
            { title: 'Cleburne, Texas', id: 36 },
            { title: 'Coppell, Texas', id: 37 },
            { title: 'Weatherford, Texas', id: 38 },
            { title: 'Forney, Texas', id: 39 },
            { title: 'Greenville, Texas', id: 40 },
            { title: 'North Richland Hills, Texas', id: 41 },
            { title: 'Lancaster, Texas', id: 42 },
            { title: 'Sachse, Texas', id: 43 },
            { title: 'Euless, Texas', id: 44 },
            { title: 'Grapevine, Texas', id: 45 },
            { title: 'Duncanville, Texas', id: 46 },
            { title: 'Corinth, Texas', id: 47 },
            { title: 'Saginaw, Texas', id: 48 },
            { title: 'Benbrook, Texas', id: 49 },
            { title: 'Murphy, Texas', id: 50 },
            { title: 'Bedford, Texas', id: 51 },
            { title: 'Crowley, Texas', id: 52 },
            { title: 'Haltom City, Texas', id: 53 },
            { title: 'Hurst, Texas', id: 54 },
            { title: 'Watauga, Texas', id: 55 }
        ];
        this.cityObj = {
            1: { name: "Provo", score: 5.1, zmv: 159000, zmlp: 405000, mls: 205, al: 3916 },
            2: { name: "Dallas", score: 8.1, zmv: 163800, zmlp: 405000, mls: 205, al: 3916 },
            3: { name: "Fort Worth", score: 5.1, zmv: "–", zmlp: 232000, mls: 109, al: 3122 },
            455: { name: "Frisco", score: 9.1, zmv: 390600, zmlp: 500000, mls: 154, al: 1192 },
            4: { name: "McKinney", score: 6.1, zmv: 293400, zmlp: 369995, mls: 138, al: 1123 },
            5: { name: "Arlington", score: 1.3, zmv: 177300, zmlp: 199900, mls: 104, al: 694 },
            6: { name: "Little Elm", score: 7.6, zmv: "–", zmlp: 319945, mls: 126, al: 638 },
            7: { name: "Plano", score: 3.7, zmv: 325400, zmlp: 374950, mls: 142, al: 569 },
            8: { name: "Irving", score: 6.7, zmv: 181300, zmlp: 369900, mls: 151, al: 473 },
            9: { name: "Flower Mound", score: 4.1, zmv: "–", zmlp: 462492, mls: 151, al: 405 },
            10: { name: "Allen", score: 7.7, zmv: 305300, zmlp: 403990, mls: 141, al: 404 },
            11: { name: "Garland", score: 1.2, zmv: "–", zmlp: 198900, mls: 112, al: 381 },
            12: { name: "Grand Prairie", score: 2.5, zmv: 176000, zmlp: 229200, mls: 98, al: 380 },
            13: { name: "Prosper", score: 9.9, zmv: "–", zmlp: 510570, mls: 146, al: 377 },
            14: { name: "Denton", score: 1.9, zmv: "–", zmlp: 279000, mls: 124, al: 338 },
            15: { name: "Rockwall", score: 8.1, zmv: 260000, zmlp: 326250, mls: 122, al: 314 },
            16: { name: "Colleyville", score: 9.1, zmv: "–", zmlp: 632990, mls: 170, al: 307 },
            17: { name: "Southlake", score: 9.1, zmv: 661700, zmlp: 789000, mls: 192, al: 267 },
            18: { name: "Waxahachie", score: 7.9, zmv: "–", zmlp: 240370, mls: 115, al: 265 },
            19: { name: "Mansfield", score: 5.7, zmv: 252400, zmlp: 299999, mls: 111, al: 238 },
            20: { name: "Cedar Hill", score: 5.1, zmv: "–", zmlp: 205500, mls: 96, al: 235 },
            21: { name: "Mesquite", score: 2.3, zmv: 155700, zmlp: 169900, mls: 98, al: 231 },
            22: { name: "Rowlett", score: 2.5, zmv: 233000, zmlp: 259900, mls: 115, al: 229 },
            23: { name: "Midlothian", score: 7.2, zmv: 233900, zmlp: 324590, mls: 119, al: 216 },
            24: { name: "Keller", score: 8.8, zmv: 382200, zmlp: 439045, mls: 142, al: 215 },
            25: { name: "The Colony", score: 1.7, zmv: 223400, zmlp: 402990, mls: 148, al: 211 },
            26: { name: "Wylie", score: 2.7, zmv: 241300, zmlp: 286560, mls: 120, al: 206 },
            27: { name: "Carrollton", score: 1.1, zmv: 252300, zmlp: 290000, mls: 136, al: 201 },
            28: { name: "Lewisville", score: 0.5, zmv: 235100, zmlp: 276900, mls: 134, al: 189 },
            29: { name: "Terrell", score: 2.6, zmv: 128400, zmlp: 209945, mls: 104, al: 171 },
            30: { name: "Azle", score: 7.4, zmv: 146700, zmlp: 239000, mls: 111, al: 163 },
            31: { name: "DeSotoDeSoto", score: 4.6, zmv: 177300, zmlp: 199000, mls: 87, al: 160 },
            32: { name: "University Park", score: 9.8, zmv: 1419700, zmlp: 1600000, mls: 417, al: 155 },
            33: { name: "Richardson", score: 1.3, zmv: 277400, zmlp: 335000, mls: 149, al: 152 },
            34: { name: "Ennis", score: 5.1, zmv: 118000, zmlp: 165000, mls: 86, al: 152 },
            35: { name: "Burleson", score: 4.6, zmv: 169500, zmlp: 229450, mls: 105, al: 148 },
            36: { name: "Cleburne", score: 3.2, zmv: 117900, zmlp: 145, mls: 87, al: 144 },
            37: { name: "Coppell", score: 7.3, zmv: 406900, zmlp: 484400, mls: 170, al: 143 },
            38: { name: "Weatherford", score: 7.7, zmv: 163700, zmlp: 213000, mls: 109, al: 143 },
            39: { name: "Forney", score: 3.5, zmv: "–", zmlp: 245000, mls: 108, al: 141 },
            40: { name: "Greenville", score: 5.8, zmv: 89200, zmlp: 174500, mls: 96, al: 135 },
            41: { name: "North Richland Hills", score: 2.3, zmv: 206200, zmlp: 289426, mls: 122, al: 134 },
            42: { name: "Lancaster", score: 2.4, zmv: 148000, zmlp: 150000, mls: 84, al: 131 },
            43: { name: "Sachse", score: 5.8, zmv: 259500, zmlp: 349814, mls: 121, al: 120 },
            44: { name: "Euless", score: 3.1, zmv: 205900, zmlp: "–", mls: 138, al: 97 },
            45: { name: "Grapevine", score: 4.1, zmv: 330700, zmlp: 384950, mls: 158, al: 91 },
            46: { name: "Duncanville", score: 4.9, zmv: 155300, zmlp: 189700, mls: 98, al: 79 },
            47: { name: "Corinth", score: 7.4, zmv: 247700, zmlp: 275000, mls: 114, al: 74 },
            48: { name: "Saginaw", score: 8.1, zmv: 168900, zmlp: 241495, mls: 103, al: 74 },
            49: { name: "Benbrook", score: 5.1, zmv: 184000, zmlp: 249900, mls: 120, al: 71 },
            50: { name: "Murphy", score: 5.1, zmv: 369400, zmlp: 385000, mls: 124, al: 57 },
            51: { name: "Bedford", score: 0.3, zmv: 227500, zmlp: 249000, mls: 127, al: 55 },
            52: { name: "Crowley", score: 4.1, zmv: "–", zmlp: 199900, mls: 98, al: 51 },
            53: { name: "Haltom City", score: 0.9, zmv: 125600, zmlp: "–", mls: 99, al: 48 },
            54: { name: "Hurst", score: 1.1, zmv: "–", zmlp: 220000, mls: 115, al: 48 },
            55: { name: "Watauga", score: 0.1, zmv: "–", zmlp: 155000, mls: 108, al: 21 }
        };
    }
    getDataService.prototype.getCities = function () {
        return this.cities;
    };
    getDataService.prototype.saveCity = function (city) {
        this.selectedCity = city;
    };
    getDataService.prototype.getSelectedCity = function () {
        if (this.selectedCity) {
            return this.cityObj[this.selectedCity.id];
        }
        else {
            this.router.navigate(['home']);
            return { name: "none", score: 0.1, zmv: "–", zmlp: 155000, mls: 108, al: 21 };
        }
    };
    getDataService.prototype.sendEmail = function () {
        console.log('hitting the endpint');
        // var headers = new Headers();
        // headers.append('Content-Type', 'application/json');
        var url = 'http://localhost:3000/email';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers }); // Create a request option
        return this.http.get(url, options)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error'); });
    };
    return getDataService;
}());
getDataService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _b || Object])
], getDataService);

var _a, _b;
//# sourceMappingURL=get-data.service.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n.search-rts-box {\n  width: 100%;\n  height: 200px;\n  background: #fff;\n  border: 1px solid #ccc;\n  border-top-color: #d9d9d9;\n  box-shadow: 0 2px 4px rgba(0,0,0,0.2);\n  -webkit-box-shadow: 0 2px 4px rgba(0,0,0,0.2);\n  cursor: default;\n}\n\n.city-hover:hover { background-color: #e4e4e4 }\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "\n  <!--// ############ fixed header bar home page #################### //-->\n\n  <nav class=\"navbar margin-bottom-12p navbar-inverse bg-inverse\">\n    <div class=\"container\">\n      <a class=\"navbar-brand home-logo-width\" routerLink=\"/home\"><img style=\"width: 100%;\" src=\"../../assets/realcitylogo.png\" alt=\"\"></a>\n    </div>\n  </nav>\n\n\n  <!--// ############ main title content #################### //-->\n\n  <div class=\"container margin-bottom-25\">\n    <div class=\"row\">\n      <div class=\"col-xs-10 col-xs-offset-1 text-center\">\n        <div class=\"font-weight-bold font-size-18 margin-bottom-5\">Discover Whether a City is Currently a Buyer's or Seller's Market</div>\n        <div class=\"font-size-12\">Wait until the Idea Market Temperature. Where Would you like to Buy or Sell?</div>\n\n      </div>\n    </div>\n  </div>\n\n\n\n  <!--// ############ search bar container #################### //-->\n\n  <div class=\"container\">\n    <div class=\"pd-btm-50\">\n      <div class=\"row\">\n        <div class=\"form-group col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 text-center\">\n         <div class=\"search-btn\">\n           <div class=\"search-icon\"><img style=\"width: 100%\" src=\"../../assets/searchIcon.svg\" alt=\"\"></div>\n         </div>\n          <input\n            type=\"text\"\n            [(ngModel)]=\"filterargs.title\"\n            (ngModelChange)=\"onCityChange()\"\n            placeholder=\"Search for a City\"\n            class=\"form-control app-standard-input-styles\"/>\n\n          <div *ngIf=\"searchPredictions\" class=\"search-rts-box overflow-scroll\">\n            <div *ngFor=\"let city of cities | orderBy:filterargs let index=index\" (click)=\"onSelectCity(city)\" class=\"city-hover\">\n              <div class=\"text-left pd-tp-5 pd-btm-5 mrg-lft-10\" >\n                <div class=\"\">{{city.title}}</div>\n              </div>\n            </div>\n          </div>\n\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__get_data_service__ = __webpack_require__("../../../../../src/app/get-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = (function () {
    function HomeComponent(getDataService, router, route) {
        this.getDataService = getDataService;
        this.router = router;
        this.route = route;
        this.searchPredictions = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.filterargs = { title: '' };
        this.cities = this.getDataService.getCities();
        // ############ image assets for the home page #################### //
        this.homeLogo = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].asset + "/realcitylogo.png";
    };
    HomeComponent.prototype.onCityChange = function () {
        if (this.filterargs.title !== '' && this.filterargs.title !== null && this.filterargs.title !== undefined) {
            this.searchPredictions = true;
        }
        else {
            this.searchPredictions = false;
        }
    };
    HomeComponent.prototype.onSelectCity = function (city) {
        this.router.navigate(['city-details']);
        this.getDataService.saveCity(city);
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css"), __webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__get_data_service__["a" /* getDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__get_data_service__["a" /* getDataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object])
], HomeComponent);

var _a, _b, _c;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/orderby-pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderBy; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by codev on 8/7/17.
 */
/**
 * Created by codev on 8/7/17.
 */
/**
 * Created by codev on 7/1/17.
 */

var OrderBy = (function () {
    function OrderBy() {
    }
    OrderBy.prototype.transform = function (items, filter) {
        var _this = this;
        if (!items || !filter) {
            return items;
        }
        // filter items array, items which match and return true will be kept, false will be filtered out
        return items.filter(function (item) { return _this.applyFilter(item, filter); });
    };
    OrderBy.prototype.applyFilter = function (key, filter) {
        for (var field in filter) {
            if (filter[field]) {
                if (typeof filter[field] === 'string') {
                    if (key[field].toLowerCase().indexOf(filter[field].toLowerCase()) === -1) {
                        return false;
                    }
                }
                else if (typeof filter[field] === 'number') {
                    if (key[field] !== filter[field]) {
                        return false;
                    }
                }
            }
        }
        return true;
    };
    return OrderBy;
}());
OrderBy = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
        name: 'orderBy',
        pure: false
    })
], OrderBy);

//# sourceMappingURL=orderby-pipe.js.map

/***/ }),

/***/ "../../../../../src/app/page-not-found/page-not-found.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/page-not-found/page-not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  page-not-found!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/page-not-found/page-not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    return PageNotFoundComponent;
}());
PageNotFoundComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-page-not-found',
        template: __webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.html"),
        styles: [__webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PageNotFoundComponent);

//# sourceMappingURL=page-not-found.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    origin: 'http://localhost:3000',
    asset: 'https://s3-us-west-2.amazonaws.com/real-city-assets'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map