(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[30],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/KnowledgeBase.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/KnowledgeBase.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      knowledgeBaseSearchQuery: '',
      kb: [{
        id: 1,
        title: 'Sales Automation',
        description: 'Muffin lemon drops chocolate carrot cake chocolate bar sweet roll.',
        graphic: 'graphic-1.png',
        url: '/pages/knowledge-base/category'
      }, {
        id: 2,
        title: 'Marketing Automation',
        description: 'Gingerbread sesame snaps wafer soufflé. Macaroon brownie ice cream',
        graphic: 'graphic-2.png',
        url: '/pages/knowledge-base/category'
      }, {
        id: 3,
        title: 'Marketing BI',
        description: 'cotton candy caramels danish chocolate cake pie candy. Lemon drops tart.',
        graphic: 'graphic-3.png',
        url: '/pages/knowledge-base/category'
      }, {
        id: 4,
        title: 'Personalization',
        description: 'Pudding oat cake carrot cake lemon drops gummies marshmallow.',
        graphic: 'graphic-4.png',
        url: '/pages/knowledge-base/category'
      }, {
        id: 5,
        title: 'Email Marketing',
        description: 'Gummi bears pudding icing sweet caramels chocolate',
        graphic: 'graphic-5.png',
        url: '/pages/knowledge-base/category'
      }, {
        id: 6,
        title: 'Demand Generation',
        description: 'Dragée jelly beans candy canes pudding cake wafer. Muffin croissant.',
        graphic: 'graphic-6.png',
        url: '/pages/knowledge-base/category'
      }]
    };
  },
  computed: {
    filteredKB: function filteredKB() {
      var _this = this;

      return this.kb.filter(function (item) {
        return item.title.toLowerCase().includes(_this.knowledgeBaseSearchQuery.toLowerCase()) || item.description.toLowerCase().includes(_this.knowledgeBaseSearchQuery.toLowerCase());
      });
    }
  },
  methods: {},
  components: {}
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/KnowledgeBase.vue?vue&type=style&index=0&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/lib/loader.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/KnowledgeBase.vue?vue&type=style&index=0&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".knowledge-base-jumbotron-content {\n  background-image: url(" + escape(__webpack_require__(/*! ../../assets/images/pages/knowledge-base-cover.jpg */ "./resources/js/src/assets/images/pages/knowledge-base-cover.jpg")) + ");\n  background-size: cover;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/KnowledgeBase.vue?vue&type=style&index=0&lang=scss&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/lib/loader.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/KnowledgeBase.vue?vue&type=style&index=0&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/sass-loader/lib/loader.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./KnowledgeBase.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/KnowledgeBase.vue?vue&type=style&index=0&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/KnowledgeBase.vue?vue&type=template&id=5a396a2a&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/KnowledgeBase.vue?vue&type=template&id=5a396a2a& ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { attrs: { id: "knowledge-base-page" } }, [
    _c("div", { staticClass: "knowledge-base-jumbotron" }, [
      _c(
        "div",
        {
          staticClass:
            "knowledge-base-jumbotron-content lg:p-32 md:p-24 sm:p-16 py-8 rounded-lg mb-base"
        },
        [
          _c("h1", { staticClass: "mb-1 text-white" }, [
            _vm._v("Dedicated Source Used on Website")
          ]),
          _vm._v(" "),
          _c("p", { staticClass: "text-white" }, [
            _vm._v(
              "Bonbon sesame snaps lemon drops marshmallow ice cream carrot cake croissant wafer."
            )
          ]),
          _vm._v(" "),
          _c("vs-input", {
            staticClass: "w-full no-icon-border mt-6",
            attrs: {
              placeholder: "Search Topic or Keyword",
              "icon-pack": "feather",
              icon: "icon-search",
              size: "large"
            },
            model: {
              value: _vm.knowledgeBaseSearchQuery,
              callback: function($$v) {
                _vm.knowledgeBaseSearchQuery = $$v
              },
              expression: "knowledgeBaseSearchQuery"
            }
          })
        ],
        1
      )
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "vx-row" },
      _vm._l(_vm.filteredKB, function(item) {
        return _c(
          "div",
          {
            key: item.id,
            staticClass: "vx-col w-full md:w-1/3 sm:w-1/2 mb-base",
            on: {
              click: function($event) {
                return _vm.$router.push(item.url)
              }
            }
          },
          [
            _c("vx-card", { staticClass: "text-center cursor-pointer" }, [
              _c("img", {
                staticClass: "mx-auto mb-4",
                attrs: {
                  src: __webpack_require__("./resources/js/src/assets/images/pages sync recursive ^\\.\\/.*$")("./" + item.graphic),
                  alt: "graphic",
                  width: "180"
                }
              }),
              _vm._v(" "),
              _c("h4", { staticClass: "mb-2" }, [
                _vm._v(_vm._s(item.title.toUpperCase()))
              ]),
              _vm._v(" "),
              _c("small", [_vm._v(_vm._s(item.description))])
            ])
          ],
          1
        )
      }),
      0
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/assets/images/pages sync recursive ^\\.\\/.*$":
/*!************************************************************!*\
  !*** ./resources/js/src/assets/images/pages sync ^\.\/.*$ ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./1-apex.png": "./resources/js/src/assets/images/pages/1-apex.png",
	"./2-stack.png": "./resources/js/src/assets/images/pages/2-stack.png",
	"./3-convex.png": "./resources/js/src/assets/images/pages/3-convex.png",
	"./4-materialize.png": "./resources/js/src/assets/images/pages/4-materialize.png",
	"./404.png": "./resources/js/src/assets/images/pages/404.png",
	"./500.png": "./resources/js/src/assets/images/pages/500.png",
	"./card-bg-image-demo-1.jpg": "./resources/js/src/assets/images/pages/card-bg-image-demo-1.jpg",
	"./card-bg-image-demo-2.jpg": "./resources/js/src/assets/images/pages/card-bg-image-demo-2.jpg",
	"./card-image-4.jpg": "./resources/js/src/assets/images/pages/card-image-4.jpg",
	"./card-image-5.jpg": "./resources/js/src/assets/images/pages/card-image-5.jpg",
	"./card-image-6.jpg": "./resources/js/src/assets/images/pages/card-image-6.jpg",
	"./card-img-overlay.jpg": "./resources/js/src/assets/images/pages/card-img-overlay.jpg",
	"./carousel/faq.jpg": "./resources/js/src/assets/images/pages/carousel/faq.jpg",
	"./content-img-1.jpg": "./resources/js/src/assets/images/pages/content-img-1.jpg",
	"./content-img-2.jpg": "./resources/js/src/assets/images/pages/content-img-2.jpg",
	"./content-img-3.jpg": "./resources/js/src/assets/images/pages/content-img-3.jpg",
	"./content-img-4.jpg": "./resources/js/src/assets/images/pages/content-img-4.jpg",
	"./eCommerce/Algolia-logo.png": "./resources/js/src/assets/images/pages/eCommerce/Algolia-logo.png",
	"./eCommerce/bank.png": "./resources/js/src/assets/images/pages/eCommerce/bank.png",
	"./faq.jpg": "./resources/js/src/assets/images/pages/faq.jpg",
	"./forgot-password.png": "./resources/js/src/assets/images/pages/forgot-password.png",
	"./graphic-1.png": "./resources/js/src/assets/images/pages/graphic-1.png",
	"./graphic-2.png": "./resources/js/src/assets/images/pages/graphic-2.png",
	"./graphic-3.png": "./resources/js/src/assets/images/pages/graphic-3.png",
	"./graphic-4.png": "./resources/js/src/assets/images/pages/graphic-4.png",
	"./graphic-5.png": "./resources/js/src/assets/images/pages/graphic-5.png",
	"./graphic-6.png": "./resources/js/src/assets/images/pages/graphic-6.png",
	"./kb-article.jpg": "./resources/js/src/assets/images/pages/kb-article.jpg",
	"./knowledge-base-cover.jpg": "./resources/js/src/assets/images/pages/knowledge-base-cover.jpg",
	"./lock-screen.png": "./resources/js/src/assets/images/pages/lock-screen.png",
	"./login.png": "./resources/js/src/assets/images/pages/login.png",
	"./login/facebook.svg": "./resources/js/src/assets/images/pages/login/facebook.svg",
	"./login/github.svg": "./resources/js/src/assets/images/pages/login/github.svg",
	"./login/google.svg": "./resources/js/src/assets/images/pages/login/google.svg",
	"./login/twitter.svg": "./resources/js/src/assets/images/pages/login/twitter.svg",
	"./maintenance-2.png": "./resources/js/src/assets/images/pages/maintenance-2.png",
	"./maintenance.png": "./resources/js/src/assets/images/pages/maintenance.png",
	"./modern.jpg": "./resources/js/src/assets/images/pages/modern.jpg",
	"./not-authorized.png": "./resources/js/src/assets/images/pages/not-authorized.png",
	"./register.jpg": "./resources/js/src/assets/images/pages/register.jpg",
	"./reset-password.png": "./resources/js/src/assets/images/pages/reset-password.png",
	"./rocket.png": "./resources/js/src/assets/images/pages/rocket.png",
	"./search-result.jpg": "./resources/js/src/assets/images/pages/search-result.jpg",
	"./video-poster.jpg": "./resources/js/src/assets/images/pages/video-poster.jpg",
	"./vuesax-login-bg.jpg": "./resources/js/src/assets/images/pages/vuesax-login-bg.jpg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./resources/js/src/assets/images/pages sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./resources/js/src/assets/images/pages/1-apex.png":
/*!*********************************************************!*\
  !*** ./resources/js/src/assets/images/pages/1-apex.png ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/1-apex.png?5e2bf309d37d0fa88ae4e495f963bc8e";

/***/ }),

/***/ "./resources/js/src/assets/images/pages/2-stack.png":
/*!**********************************************************!*\
  !*** ./resources/js/src/assets/images/pages/2-stack.png ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/2-stack.png?425adc71b4f5585dd1ec288605361f8e";

/***/ }),

/***/ "./resources/js/src/assets/images/pages/3-convex.png":
/*!***********************************************************!*\
  !*** ./resources/js/src/assets/images/pages/3-convex.png ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/3-convex.png?d311fc09e6c63db312c77e1673888929";

/***/ }),

/***/ "./resources/js/src/assets/images/pages/4-materialize.png":
/*!****************************************************************!*\
  !*** ./resources/js/src/assets/images/pages/4-materialize.png ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/4-materialize.png?f4f276c2b03a7551daf57b30fb50d641";

/***/ }),

/***/ "./resources/js/src/assets/images/pages/404.png":
/*!******************************************************!*\
  !*** ./resources/js/src/assets/images/pages/404.png ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/404.png?0a38972b4083f43522258cbe550a3cb7";

/***/ }),

/***/ "./resources/js/src/assets/images/pages/500.png":
/*!******************************************************!*\
  !*** ./resources/js/src/assets/images/pages/500.png ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/500.png?0d0dd97f1c54164fed95737db9ca4264";

/***/ }),

/***/ "./resources/js/src/assets/images/pages/card-bg-image-demo-1.jpg":
/*!***********************************************************************!*\
  !*** ./resources/js/src/assets/images/pages/card-bg-image-demo-1.jpg ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/card-bg-image-demo-1.jpg?36390f4bd33e1ada9e3f09979d7e6f05";

/***/ }),

/***/ "./resources/js/src/assets/images/pages/card-bg-image-demo-2.jpg":
/*!***********************************************************************!*\
  !*** ./resources/js/src/assets/images/pages/card-bg-image-demo-2.jpg ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/card-bg-image-demo-2.jpg?720ceb82fd5df9730db9e0b33ec1c987";

/***/ }),

/***/ "./resources/js/src/assets/images/pages/card-image-4.jpg":
/*!***************************************************************!*\
  !*** ./resources/js/src/assets/images/pages/card-image-4.jpg ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/card-image-4.jpg?83c3252ea7b126a8763d5e956ff31a60";

/***/ }),

/***/ "./resources/js/src/assets/images/pages/card-image-5.jpg":
/*!***************************************************************!*\
  !*** ./resources/js/src/assets/images/pages/card-image-5.jpg ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/card-image-5.jpg?677b3fc1ac8287624d8071bc811d04a2";

/***/ }),

/***/ "./resources/js/src/assets/images/pages/card-image-6.jpg":
/*!***************************************************************!*\
  !*** ./resources/js/src/assets/images/pages/card-image-6.jpg ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/card-image-6.jpg?b26faf1e51482f6816e4d1a528fc5818";

/***/ }),

/***/ "./resources/js/src/assets/images/pages/card-img-overlay.jpg":
/*!*******************************************************************!*\
  !*** ./resources/js/src/assets/images/pages/card-img-overlay.jpg ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/card-img-overlay.jpg?6977451ec062edae53cdc9e37d0d66fe";

/***/ }),

/***/ "./resources/js/src/assets/images/pages/carousel/faq.jpg":
/*!***************************************************************!*\
  !*** ./resources/js/src/assets/images/pages/carousel/faq.jpg ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/faq.jpg?8e0b3142b57a84b707601af3410dff91";

/***/ }),

/***/ "./resources/js/src/assets/images/pages/content-img-1.jpg":
/*!****************************************************************!*\
  !*** ./resources/js/src/assets/images/pages/content-img-1.jpg ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/content-img-1.jpg?228da091c6132e699b69c9bf073e2fa9";

/***/ }),

/***/ "./resources/js/src/assets/images/pages/content-img-2.jpg":
/*!****************************************************************!*\
  !*** ./resources/js/src/assets/images/pages/content-img-2.jpg ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/content-img-2.jpg?00ef7d9734606af4e586bf6e2f2239e8";

/***/ }),

/***/ "./resources/js/src/assets/images/pages/content-img-3.jpg":
/*!****************************************************************!*\
  !*** ./resources/js/src/assets/images/pages/content-img-3.jpg ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/content-img-3.jpg?ca080c4ca13369c4389e98ce836b4ba2";

/***/ }),

/***/ "./resources/js/src/assets/images/pages/content-img-4.jpg":
/*!****************************************************************!*\
  !*** ./resources/js/src/assets/images/pages/content-img-4.jpg ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/content-img-4.jpg?d77697ba50728dc3b32c0d2d43ef725e";

/***/ }),

/***/ "./resources/js/src/assets/images/pages/eCommerce/Algolia-logo.png":
/*!*************************************************************************!*\
  !*** ./resources/js/src/assets/images/pages/eCommerce/Algolia-logo.png ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/Algolia-logo.png?224640caab6194bdfc027e442bb2374c";

/***/ }),

/***/ "./resources/js/src/assets/images/pages/eCommerce/bank.png":
/*!*****************************************************************!*\
  !*** ./resources/js/src/assets/images/pages/eCommerce/bank.png ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/bank.png?5f6aa47cad6e07be32f187d78f4f1d1c";

/***/ }),

/***/ "./resources/js/src/assets/images/pages/faq.jpg":
/*!******************************************************!*\
  !*** ./resources/js/src/assets/images/pages/faq.jpg ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/faq.jpg?8e0b3142b57a84b707601af3410dff91";

/***/ }),

/***/ "./resources/js/src/assets/images/pages/forgot-password.png":
/*!******************************************************************!*\
  !*** ./resources/js/src/assets/images/pages/forgot-password.png ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/forgot-password.png?f1d8d23e3a5361ef98e93de1c2e314c1";

/***/ }),

/***/ "./resources/js/src/assets/images/pages/graphic-1.png":
/*!************************************************************!*\
  !*** ./resources/js/src/assets/images/pages/graphic-1.png ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/graphic-1.png?22b046f6fc2c8b16f16334eabab57831";

/***/ }),

/***/ "./resources/js/src/assets/images/pages/graphic-2.png":
/*!************************************************************!*\
  !*** ./resources/js/src/assets/images/pages/graphic-2.png ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/graphic-2.png?560d813bbfa933a94178e2cc12a486c6";

/***/ }),

/***/ "./resources/js/src/assets/images/pages/graphic-3.png":
/*!************************************************************!*\
  !*** ./resources/js/src/assets/images/pages/graphic-3.png ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/graphic-3.png?e88b80c08f4ace84500143771fb60340";

/***/ }),

/***/ "./resources/js/src/assets/images/pages/graphic-4.png":
/*!************************************************************!*\
  !*** ./resources/js/src/assets/images/pages/graphic-4.png ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/graphic-4.png?6ab88846ad3498bdc9b1f00cc2243315";

/***/ }),

/***/ "./resources/js/src/assets/images/pages/graphic-5.png":
/*!************************************************************!*\
  !*** ./resources/js/src/assets/images/pages/graphic-5.png ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/graphic-5.png?6e224f81e5f06c29aae270aae3b9ed83";

/***/ }),

/***/ "./resources/js/src/assets/images/pages/graphic-6.png":
/*!************************************************************!*\
  !*** ./resources/js/src/assets/images/pages/graphic-6.png ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/graphic-6.png?3ab06089c65139da847f10c7d64dc335";

/***/ }),

/***/ "./resources/js/src/assets/images/pages/kb-article.jpg":
/*!*************************************************************!*\
  !*** ./resources/js/src/assets/images/pages/kb-article.jpg ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/kb-article.jpg?6977451ec062edae53cdc9e37d0d66fe";

/***/ }),

/***/ "./resources/js/src/assets/images/pages/knowledge-base-cover.jpg":
/*!***********************************************************************!*\
  !*** ./resources/js/src/assets/images/pages/knowledge-base-cover.jpg ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/knowledge-base-cover.jpg?76a102a11e355a3e98ac0f72276eb90a";

/***/ }),

/***/ "./resources/js/src/assets/images/pages/lock-screen.png":
/*!**************************************************************!*\
  !*** ./resources/js/src/assets/images/pages/lock-screen.png ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/lock-screen.png?a5c1191d35dc747cc3e272413cef740e";

/***/ }),

/***/ "./resources/js/src/assets/images/pages/login.png":
/*!********************************************************!*\
  !*** ./resources/js/src/assets/images/pages/login.png ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/login.png?d814adb752d2d047b8292d6de603025f";

/***/ }),

/***/ "./resources/js/src/assets/images/pages/login/facebook.svg":
/*!*****************************************************************!*\
  !*** ./resources/js/src/assets/images/pages/login/facebook.svg ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/facebook.svg?53b4fafa707ca501f8cbabc867f89a9f";

/***/ }),

/***/ "./resources/js/src/assets/images/pages/login/github.svg":
/*!***************************************************************!*\
  !*** ./resources/js/src/assets/images/pages/login/github.svg ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/github.svg?728a078159dea7f2c15c20a5faa73891";

/***/ }),

/***/ "./resources/js/src/assets/images/pages/login/google.svg":
/*!***************************************************************!*\
  !*** ./resources/js/src/assets/images/pages/login/google.svg ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/google.svg?da3a9ed4399e0dc38e09a9d494a62f28";

/***/ }),

/***/ "./resources/js/src/assets/images/pages/login/twitter.svg":
/*!****************************************************************!*\
  !*** ./resources/js/src/assets/images/pages/login/twitter.svg ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/twitter.svg?6620c8ae2cac90067a9aa78339bb808d";

/***/ }),

/***/ "./resources/js/src/assets/images/pages/maintenance-2.png":
/*!****************************************************************!*\
  !*** ./resources/js/src/assets/images/pages/maintenance-2.png ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/maintenance-2.png?b8f8c47ff44241cdb7afc79c86a110a2";

/***/ }),

/***/ "./resources/js/src/assets/images/pages/maintenance.png":
/*!**************************************************************!*\
  !*** ./resources/js/src/assets/images/pages/maintenance.png ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/maintenance.png?02544fb09f0eea8a86e9b380840d06b9";

/***/ }),

/***/ "./resources/js/src/assets/images/pages/modern.jpg":
/*!*********************************************************!*\
  !*** ./resources/js/src/assets/images/pages/modern.jpg ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/modern.jpg?cb09b5bd1e85ef2f24af93a629bcdf93";

/***/ }),

/***/ "./resources/js/src/assets/images/pages/not-authorized.png":
/*!*****************************************************************!*\
  !*** ./resources/js/src/assets/images/pages/not-authorized.png ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/not-authorized.png?388ffe4626a1621c661f5de9ceb2463d";

/***/ }),

/***/ "./resources/js/src/assets/images/pages/register.jpg":
/*!***********************************************************!*\
  !*** ./resources/js/src/assets/images/pages/register.jpg ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/register.jpg?cfd9ef099bfc1f99c6f2970ae05a6a4a";

/***/ }),

/***/ "./resources/js/src/assets/images/pages/reset-password.png":
/*!*****************************************************************!*\
  !*** ./resources/js/src/assets/images/pages/reset-password.png ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/reset-password.png?965156dace52dc1b319d6363d3040ff2";

/***/ }),

/***/ "./resources/js/src/assets/images/pages/rocket.png":
/*!*********************************************************!*\
  !*** ./resources/js/src/assets/images/pages/rocket.png ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/rocket.png?b4878de0b1717b9296ce3f44b929b6c3";

/***/ }),

/***/ "./resources/js/src/assets/images/pages/search-result.jpg":
/*!****************************************************************!*\
  !*** ./resources/js/src/assets/images/pages/search-result.jpg ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/search-result.jpg?94483d7a3a5f6222a3901c25c16cb811";

/***/ }),

/***/ "./resources/js/src/assets/images/pages/video-poster.jpg":
/*!***************************************************************!*\
  !*** ./resources/js/src/assets/images/pages/video-poster.jpg ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/video-poster.jpg?d066ddc8454c583e8634c8636a71fc2b";

/***/ }),

/***/ "./resources/js/src/views/pages/KnowledgeBase.vue":
/*!********************************************************!*\
  !*** ./resources/js/src/views/pages/KnowledgeBase.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _KnowledgeBase_vue_vue_type_template_id_5a396a2a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./KnowledgeBase.vue?vue&type=template&id=5a396a2a& */ "./resources/js/src/views/pages/KnowledgeBase.vue?vue&type=template&id=5a396a2a&");
/* harmony import */ var _KnowledgeBase_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./KnowledgeBase.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/KnowledgeBase.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _KnowledgeBase_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./KnowledgeBase.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/views/pages/KnowledgeBase.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _KnowledgeBase_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _KnowledgeBase_vue_vue_type_template_id_5a396a2a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _KnowledgeBase_vue_vue_type_template_id_5a396a2a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/KnowledgeBase.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/KnowledgeBase.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/src/views/pages/KnowledgeBase.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_KnowledgeBase_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./KnowledgeBase.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/KnowledgeBase.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_KnowledgeBase_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/KnowledgeBase.vue?vue&type=style&index=0&lang=scss&":
/*!******************************************************************************************!*\
  !*** ./resources/js/src/views/pages/KnowledgeBase.vue?vue&type=style&index=0&lang=scss& ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_KnowledgeBase_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/sass-loader/lib/loader.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./KnowledgeBase.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/KnowledgeBase.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_KnowledgeBase_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_KnowledgeBase_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_KnowledgeBase_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_KnowledgeBase_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_KnowledgeBase_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/pages/KnowledgeBase.vue?vue&type=template&id=5a396a2a&":
/*!***************************************************************************************!*\
  !*** ./resources/js/src/views/pages/KnowledgeBase.vue?vue&type=template&id=5a396a2a& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_KnowledgeBase_vue_vue_type_template_id_5a396a2a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./KnowledgeBase.vue?vue&type=template&id=5a396a2a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/KnowledgeBase.vue?vue&type=template&id=5a396a2a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_KnowledgeBase_vue_vue_type_template_id_5a396a2a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_KnowledgeBase_vue_vue_type_template_id_5a396a2a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);