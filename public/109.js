(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[109],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/ui-elements/card/CardStatistics.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/ui-elements/card/CardStatistics.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_statistics_cards_StatisticsCardLine_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/statistics-cards/StatisticsCardLine.vue */ "./resources/js/src/components/statistics-cards/StatisticsCardLine.vue");
/* harmony import */ var _analyticsData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./analyticsData.js */ "./resources/js/src/views/ui-elements/card/analyticsData.js");
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
      analyticsData: _analyticsData_js__WEBPACK_IMPORTED_MODULE_1__["default"]
    };
  },
  components: {
    StatisticsCardLine: _components_statistics_cards_StatisticsCardLine_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/ui-elements/card/CardStatistics.vue?vue&type=template&id=47852939&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/ui-elements/card/CardStatistics.vue?vue&type=template&id=47852939& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c("div", { staticClass: "vx-row" }, [
      _c(
        "div",
        {
          staticClass:
            "vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 mb-base"
        },
        [
          _c("statistics-card-line", {
            attrs: {
              icon: "UsersIcon",
              statistic: "92.6k",
              statisticTitle: "Subscribers Gained",
              chartData: _vm.analyticsData.subscribersGained,
              type: "area"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 mb-base"
        },
        [
          _c("statistics-card-line", {
            attrs: {
              icon: "DollarSignIcon",
              statistic: "97.5K",
              statisticTitle: "Revenue Generated",
              chartData: _vm.analyticsData.revenueGenerated,
              color: "success",
              type: "area"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 mb-base"
        },
        [
          _c("statistics-card-line", {
            attrs: {
              icon: "ShoppingCartIcon",
              statistic: "36%",
              statisticTitle: "Quarterly Sales",
              chartData: _vm.analyticsData.quarterlySales,
              color: "danger",
              type: "area"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 mb-base"
        },
        [
          _c("statistics-card-line", {
            attrs: {
              icon: "ShoppingBagIcon",
              statistic: "97.5K",
              statisticTitle: "Orders Received",
              chartData: _vm.analyticsData.ordersRecevied,
              color: "warning",
              type: "area"
            }
          })
        ],
        1
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "vx-row" }, [
      _c(
        "div",
        { staticClass: "vx-col w-full md:w-1/3 lg:w-1/3 xl:w-1/3" },
        [
          _c("statistics-card-line", {
            attrs: {
              icon: "MonitorIcon",
              "icon-right": "",
              statistic: "78.9k",
              statisticTitle: "Site Traffic",
              chartData: _vm.analyticsData.siteTraffic
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "vx-col w-full md:w-1/3 lg:w-1/3 xl:w-1/3" },
        [
          _c("statistics-card-line", {
            attrs: {
              icon: "UserCheckIcon",
              "icon-right": "",
              statistic: "659.8k",
              statisticTitle: "Active Users",
              chartData: _vm.analyticsData.activeUsers,
              color: "success"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "vx-col w-full md:w-1/3 lg:w-1/3 xl:w-1/3" },
        [
          _c("statistics-card-line", {
            attrs: {
              icon: "MailIcon",
              "icon-right": "",
              statistic: "28.7k",
              statisticTitle: "Newsletter",
              chartData: _vm.analyticsData.newsletter,
              color: "warning"
            }
          })
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/ui-elements/card/CardStatistics.vue":
/*!********************************************************************!*\
  !*** ./resources/js/src/views/ui-elements/card/CardStatistics.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CardStatistics_vue_vue_type_template_id_47852939___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CardStatistics.vue?vue&type=template&id=47852939& */ "./resources/js/src/views/ui-elements/card/CardStatistics.vue?vue&type=template&id=47852939&");
/* harmony import */ var _CardStatistics_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CardStatistics.vue?vue&type=script&lang=js& */ "./resources/js/src/views/ui-elements/card/CardStatistics.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CardStatistics_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CardStatistics_vue_vue_type_template_id_47852939___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CardStatistics_vue_vue_type_template_id_47852939___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/ui-elements/card/CardStatistics.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/ui-elements/card/CardStatistics.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/src/views/ui-elements/card/CardStatistics.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardStatistics_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CardStatistics.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/ui-elements/card/CardStatistics.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardStatistics_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/ui-elements/card/CardStatistics.vue?vue&type=template&id=47852939&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/src/views/ui-elements/card/CardStatistics.vue?vue&type=template&id=47852939& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CardStatistics_vue_vue_type_template_id_47852939___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CardStatistics.vue?vue&type=template&id=47852939& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/ui-elements/card/CardStatistics.vue?vue&type=template&id=47852939&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CardStatistics_vue_vue_type_template_id_47852939___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CardStatistics_vue_vue_type_template_id_47852939___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);