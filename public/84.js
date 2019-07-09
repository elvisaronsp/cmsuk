(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[84],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/ui-elements/card/CardAnalytics.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/ui-elements/card/CardAnalytics.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-apexcharts */ "./node_modules/vue-apexcharts/dist/vue-apexcharts.js");
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_apexcharts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_statistics_cards_StatisticsCardLine_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/statistics-cards/StatisticsCardLine.vue */ "./resources/js/src/components/statistics-cards/StatisticsCardLine.vue");
/* harmony import */ var _analyticsData_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./analyticsData.js */ "./resources/js/src/views/ui-elements/card/analyticsData.js");
/* harmony import */ var _components_ChangeTimeDurationDropdown_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ChangeTimeDurationDropdown.vue */ "./resources/js/src/components/ChangeTimeDurationDropdown.vue");
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
      analyticsData: _analyticsData_js__WEBPACK_IMPORTED_MODULE_2__["default"],
      statisticsChartData1: {
        chartHeight: '150px',
        id: 'static-chart-1',
        data: {
          series: [[10, 15, 7, 12, 3, 16]]
        },
        options: {
          axisX: {
            showGrid: false,
            showLabel: false
          },
          axisY: {
            showLabel: false,
            showGrid: false,
            low: 0,
            high: 20,
            offset: 0
          },
          fullWidth: true
        },
        listener: {
          created: function created(data) {
            var defs = data.svg.querySelector('defs') || data.svg.elem('defs');
            defs.elem('linearGradient', {
              id: 'lineLinearStats1',
              x1: 0,
              y1: 0,
              x2: 1,
              y2: 0
            }).elem('stop', {
              offset: '0%',
              'stop-color': 'rgba(157,33,254,1)'
            }).parent().elem('stop', {
              offset: '60%',
              'stop-color': 'rgba(116,58,253,1)'
            }).parent().elem('stop', {
              offset: '75%',
              'stop-color': 'rgba(99,68,252, 1)'
            }).parent().elem('stop', {
              offset: '90%',
              'stop-color': 'rgba(69,85,252,1)'
            });
            return defs;
          }
        }
      },
      statisticsChartData2: {
        chartHeight: '150px',
        id: 'static-chart-2',
        data: {
          series: [[3, 12, 7, 15, 7, 13]]
        },
        options: {
          axisX: {
            showGrid: false,
            showLabel: false
          },
          axisY: {
            showLabel: false,
            showGrid: false,
            low: 0,
            high: 20,
            offset: 0
          },
          fullWidth: true
        },
        listener: {
          created: function created(data) {
            var defs = data.svg.querySelector('defs') || data.svg.elem('defs');
            defs.elem('linearGradient', {
              id: 'lineLinearStats2',
              x1: 0,
              y1: 0,
              x2: 1,
              y2: 0
            }).elem('stop', {
              offset: '0%',
              'stop-color': 'rgba(157,33,254,1)'
            }).parent().elem('stop', {
              offset: '60%',
              'stop-color': 'rgba(116,58,253,1)'
            }).parent().elem('stop', {
              offset: '75%',
              'stop-color': 'rgba(99,68,252, 1)'
            }).parent().elem('stop', {
              offset: '90%',
              'stop-color': 'rgba(69,85,252,1)'
            });
            return defs;
          }
        }
      },
      statisticsChartData3: {
        chartHeight: '150px',
        id: 'static-chart-3',
        data: {
          series: [[16, 3, 10, 5, 15, 10]]
        },
        options: {
          axisX: {
            showGrid: false,
            showLabel: false
          },
          axisY: {
            showLabel: false,
            showGrid: false,
            low: 0,
            high: 20,
            offset: 0
          },
          fullWidth: true
        },
        listener: {
          created: function created(data) {
            var defs = data.svg.querySelector('defs') || data.svg.elem('defs');
            defs.elem('linearGradient', {
              id: 'lineLinearStats3',
              x1: 0,
              y1: 0,
              x2: 1,
              y2: 0
            }).elem('stop', {
              offset: '0%',
              'stop-color': 'rgba(157,33,254,1)'
            }).parent().elem('stop', {
              offset: '60%',
              'stop-color': 'rgba(116,58,253,1)'
            }).parent().elem('stop', {
              offset: '75%',
              'stop-color': 'rgba(99,68,252, 1)'
            }).parent().elem('stop', {
              offset: '90%',
              'stop-color': 'rgba(69,85,252,1)'
            });
            return defs;
          }
        }
      }
    };
  },
  components: {
    VueApexCharts: vue_apexcharts__WEBPACK_IMPORTED_MODULE_0___default.a,
    StatisticsCardLine: _components_statistics_cards_StatisticsCardLine_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    ChangeTimeDurationDropdown: _components_ChangeTimeDurationDropdown_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/ui-elements/card/CardAnalytics.vue?vue&type=style&index=0&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/lib/loader.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/ui-elements/card/CardAnalytics.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#demo-card-analytics .tasks-today-container .tasks-today__task {\n  -webkit-transition: background 0.15s ease-out;\n  transition: background 0.15s ease-out;\n}\n#demo-card-analytics .tasks-today-container .tasks-today__task .tasks-today__actions {\n  display: none;\n}\n#demo-card-analytics .tasks-today-container .tasks-today__task:hover {\n  background: rgba(var(--vs-primary), 0.04);\n}\n#demo-card-analytics .tasks-today-container .tasks-today__task:hover .tasks-today__actions {\n  display: -webkit-box;\n  display: flex;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/ui-elements/card/CardAnalytics.vue?vue&type=style&index=0&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/lib/loader.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/ui-elements/card/CardAnalytics.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../node_modules/sass-loader/lib/loader.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CardAnalytics.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/ui-elements/card/CardAnalytics.vue?vue&type=style&index=0&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/ChangeTimeDurationDropdown.vue?vue&type=template&id=c2faee7c&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/ChangeTimeDurationDropdown.vue?vue&type=template&id=c2faee7c& ***!
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
  return _c(
    "vs-dropdown",
    { staticClass: "cursor-pointer", attrs: { "vs-trigger-click": "" } },
    [
      _c(
        "small",
        { staticClass: "flex cursor-pointer" },
        [
          _vm._v("Last 7 days "),
          _c("feather-icon", {
            staticClass: "ml-1",
            attrs: { icon: "ChevronDownIcon", svgClasses: "h-4 w-4" }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "vs-dropdown-menu",
        { staticClass: "w-32" },
        [
          _c(
            "vs-dropdown-item",
            {
              on: {
                click: function($event) {
                  return _vm.$emit("timeDurationChanged", "last-28-days")
                }
              }
            },
            [_vm._v("Last 28 days")]
          ),
          _vm._v(" "),
          _c(
            "vs-dropdown-item",
            {
              on: {
                click: function($event) {
                  return _vm.$emit("timeDurationChanged", "last-month")
                }
              }
            },
            [_vm._v("Last Month")]
          ),
          _vm._v(" "),
          _c(
            "vs-dropdown-item",
            {
              on: {
                click: function($event) {
                  return _vm.$emit("timeDurationChanged", "last-year")
                }
              }
            },
            [_vm._v("Last Year")]
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/ui-elements/card/CardAnalytics.vue?vue&type=template&id=9eb39740&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/ui-elements/card/CardAnalytics.vue?vue&type=template&id=9eb39740& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { attrs: { id: "demo-card-analytics" } }, [
    _c("div", { staticClass: "vx-row" }, [
      _c(
        "div",
        { staticClass: "vx-col w-full lg:w-1/3 mb-base" },
        [
          _c(
            "vx-card",
            { attrs: { title: "Sessions By Device" } },
            [
              _c(
                "template",
                { slot: "actions" },
                [_c("change-time-duration-dropdown")],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { attrs: { slot: "no-body" }, slot: "no-body" },
                [
                  _c("vue-apex-charts", {
                    staticClass: "mt-5",
                    attrs: {
                      type: "donut",
                      height: "330",
                      options:
                        _vm.analyticsData.sessionsByDeviceDonut.chartOptions,
                      series: _vm.analyticsData.sessionsByDeviceDonut.series
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "ul",
                _vm._l(
                  _vm.analyticsData.sessionsByDeviceDonut.analyticsData,
                  function(deviceData) {
                    return _c(
                      "li",
                      { key: deviceData.device, staticClass: "flex mb-3" },
                      [
                        _c("feather-icon", {
                          attrs: {
                            icon: deviceData.icon,
                            svgClasses: [
                              "h-5 w-5 stroke-current text-" + deviceData.color
                            ]
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "span",
                          { staticClass: "ml-2 inline-block font-semibold" },
                          [_vm._v(_vm._s(deviceData.device))]
                        ),
                        _vm._v(" "),
                        _c("span", { staticClass: "mx-2" }, [_vm._v("-")]),
                        _vm._v(" "),
                        _c("span", { staticClass: "mr-4" }, [
                          _vm._v(_vm._s(deviceData.sessionsPercentgae) + "%")
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "ml-auto flex -mr-1" },
                          [
                            _c("span", { staticClass: "mr-1" }, [
                              _vm._v(
                                _vm._s(deviceData.comparedResultPercentage) +
                                  "%"
                              )
                            ]),
                            _vm._v(" "),
                            _c("feather-icon", {
                              attrs: {
                                icon:
                                  deviceData.comparedResultPercentage < 0
                                    ? "ArrowDownIcon"
                                    : "ArrowUpIcon",
                                svgClasses: [
                                  deviceData.comparedResultPercentage < 0
                                    ? "text-danger"
                                    : "text-success",
                                  "stroke-current h-4 w-4 mb-1 mr-1"
                                ]
                              }
                            })
                          ],
                          1
                        )
                      ],
                      1
                    )
                  }
                ),
                0
              )
            ],
            2
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "vx-col w-full lg:w-1/3 mb-base" },
        [
          _c(
            "vx-card",
            { attrs: { title: "Product Orders" } },
            [
              _c(
                "template",
                { slot: "actions" },
                [_c("change-time-duration-dropdown")],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { attrs: { slot: "no-body" }, slot: "no-body" },
                [
                  _c("vue-apex-charts", {
                    attrs: {
                      type: "radialBar",
                      height: "350",
                      options:
                        _vm.analyticsData.productOrdersRadialBar.chartOptions,
                      series: _vm.analyticsData.productOrdersRadialBar.series
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "ul",
                _vm._l(
                  _vm.analyticsData.productOrdersRadialBar.analyticsData,
                  function(orderData) {
                    return _c(
                      "li",
                      {
                        key: orderData.orderType,
                        staticClass: "flex mb-3 justify-between"
                      },
                      [
                        _c("span", { staticClass: "flex items-center" }, [
                          _c("span", {
                            staticClass:
                              "inline-block h-4 w-4 rounded-full mr-2 bg-white border-3 border-solid",
                            class: "border-" + orderData.color
                          }),
                          _vm._v(" "),
                          _c("span", { staticClass: "font-semibold" }, [
                            _vm._v(_vm._s(orderData.orderType))
                          ])
                        ]),
                        _vm._v(" "),
                        _c("span", [_vm._v(_vm._s(orderData.counts))])
                      ]
                    )
                  }
                ),
                0
              )
            ],
            2
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "vx-col w-full lg:w-1/3 mb-base" },
        [
          _c(
            "vx-card",
            { attrs: { title: "Customers" } },
            [
              _c(
                "template",
                { slot: "actions" },
                [_c("change-time-duration-dropdown")],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { attrs: { slot: "no-body" }, slot: "no-body" },
                [
                  _c("vue-apex-charts", {
                    staticClass: "mt-2",
                    attrs: {
                      type: "pie",
                      height: "345",
                      options: _vm.analyticsData.customersPie.chartOptions,
                      series: _vm.analyticsData.customersPie.series
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { staticClass: "mb-1" },
                    _vm._l(
                      _vm.analyticsData.customersPie.analyticsData,
                      function(customerData) {
                        return _c(
                          "li",
                          {
                            key: customerData.customerType,
                            staticClass:
                              "flex justify-between py-3 px-6 border d-theme-border-grey-light border-solid border-r-0 border-l-0 border-b-0"
                          },
                          [
                            _c("span", { staticClass: "flex items-center" }, [
                              _c("span", {
                                staticClass:
                                  "inline-block h-3 w-3 rounded-full mr-2",
                                class: "bg-" + customerData.color
                              }),
                              _vm._v(" "),
                              _c("span", { staticClass: "font-semibold" }, [
                                _vm._v(_vm._s(customerData.customerType))
                              ])
                            ]),
                            _vm._v(" "),
                            _c("span", [_vm._v(_vm._s(customerData.counts))])
                          ]
                        )
                      }
                    ),
                    0
                  )
                ],
                1
              )
            ],
            2
          )
        ],
        1
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "vx-row" }, [
      _c(
        "div",
        { staticClass: "vx-col w-full md:w-1/2 lg:w-1/2 xl:w-1/2 mb-base" },
        [
          _c(
            "vx-card",
            { attrs: { title: "Sales", subtitle: "Last 6 Months" } },
            [
              _c(
                "template",
                { slot: "actions" },
                [
                  _c("feather-icon", {
                    attrs: {
                      icon: "MoreVerticalIcon",
                      svgClasses: "w-6 h-6 text-grey"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "flex" }, [
                _c("span", { staticClass: "flex items-center" }, [
                  _c("div", {
                    staticClass: "h-3 w-3 rounded-full mr-2 bg-primary"
                  }),
                  _c("span", [_vm._v("Sales")])
                ]),
                _vm._v(" "),
                _c("span", { staticClass: "flex items-center ml-5" }, [
                  _c("div", {
                    staticClass: "h-3 w-3 rounded-full mr-2 bg-success"
                  }),
                  _c("span", [_vm._v("Visits")])
                ])
              ]),
              _vm._v(" "),
              _c(
                "div",
                { attrs: { slot: "no-body-bottom" }, slot: "no-body-bottom" },
                [
                  _c("vue-apex-charts", {
                    attrs: {
                      type: "radar",
                      options: _vm.analyticsData.statisticsRadar.chartOptions,
                      series: _vm.analyticsData.statisticsRadar.series
                    }
                  })
                ],
                1
              )
            ],
            2
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "vx-col w-full md:w-1/2 lg:w-1/2 xl:w-1/2 mb-base" },
        [
          _c(
            "vx-card",
            { attrs: { title: "Support Tracker" } },
            [
              _c(
                "template",
                { slot: "actions" },
                [_c("change-time-duration-dropdown")],
                1
              ),
              _vm._v(" "),
              _c("div", { attrs: { slot: "no-body" }, slot: "no-body" }, [
                _c("div", { staticClass: "vx-row text-center" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "vx-col sm:w-1/5 w-full flex flex-col justify-between mb-4"
                    },
                    [
                      _c("div", { staticClass: "ml-6 mt-6" }, [
                        _c("h1", { staticClass: "font-bold text-5xl" }, [
                          _vm._v("163")
                        ]),
                        _vm._v(" "),
                        _c("small", [_vm._v("Tickets")])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "vx-col sm:w-4/5 justify-center mx-auto" },
                    [
                      _c("vue-apex-charts", {
                        attrs: {
                          type: "radialBar",
                          height: "250",
                          options:
                            _vm.analyticsData.supportTrackerRadialBar
                              .chartOptions,
                          series:
                            _vm.analyticsData.supportTrackerRadialBar.series
                        }
                      })
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "flex flex-row justify-between px-8 pb-4" },
                  [
                    _c("p", { staticClass: "text-center" }, [
                      _c("span", { staticClass: "block" }, [
                        _vm._v("New Tickets")
                      ]),
                      _c("span", { staticClass: "text-4xl" }, [_vm._v("29")])
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "text-center" }, [
                      _c("span", { staticClass: "block" }, [
                        _vm._v("Open Tickets")
                      ]),
                      _c("span", { staticClass: "text-4xl" }, [_vm._v("63")])
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "text-center" }, [
                      _c("span", { staticClass: "block" }, [
                        _vm._v("Response Time")
                      ]),
                      _c("span", { staticClass: "text-4xl" }, [_vm._v("1d")])
                    ])
                  ]
                )
              ])
            ],
            2
          )
        ],
        1
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "vx-row" }, [
      _c(
        "div",
        { staticClass: "vx-col w-full md:w-2/3 mb-base" },
        [
          _c(
            "vx-card",
            { attrs: { title: "Revenue" } },
            [
              _c(
                "template",
                { slot: "actions" },
                [
                  _c("feather-icon", {
                    attrs: {
                      icon: "SettingsIcon",
                      svgClasses: "w-6 h-6 text-grey"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "p-6 pb-0",
                  attrs: { slot: "no-body" },
                  slot: "no-body"
                },
                [
                  _c("div", { staticClass: "flex" }, [
                    _c("div", { staticClass: "mr-6" }, [
                      _c("p", { staticClass: "mb-1 font-semibold" }, [
                        _vm._v("This Month")
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "text-3xl text-success" }, [
                        _c("sup", { staticClass: "text-base mr-1" }, [
                          _vm._v("$")
                        ]),
                        _vm._v("86,589")
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", [
                      _c("p", { staticClass: "mb-1 font-semibold" }, [
                        _vm._v("Last Month")
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "text-3xl" }, [
                        _c("sup", { staticClass: "text-base mr-1" }, [
                          _vm._v("$")
                        ]),
                        _vm._v("73,683")
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("vue-apex-charts", {
                    attrs: {
                      type: "line",
                      height: "266",
                      options:
                        _vm.analyticsData.revenueComparisonLine.chartOptions,
                      series: _vm.analyticsData.revenueComparisonLine.series
                    }
                  })
                ],
                1
              )
            ],
            2
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "vx-col w-full md:w-1/3 mb-base" },
        [
          _c(
            "vx-card",
            { attrs: { title: "Goal Overview" } },
            [
              _c(
                "template",
                { slot: "actions" },
                [
                  _c("feather-icon", {
                    attrs: {
                      icon: "HelpCircleIcon",
                      svgClasses: "w-6 h-6 text-grey"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c("template", { slot: "no-body" }, [
                _c(
                  "div",
                  { staticClass: "mt-10" },
                  [
                    _c("vue-apex-charts", {
                      attrs: {
                        type: "radialBar",
                        height: "240",
                        options:
                          _vm.analyticsData.goalOverviewRadialBar.chartOptions,
                        series: _vm.analyticsData.goalOverviewRadialBar.series
                      }
                    })
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "flex justify-between text-center",
                  attrs: { slot: "no-body-bottom" },
                  slot: "no-body-bottom"
                },
                [
                  _c(
                    "div",
                    {
                      staticClass:
                        "w-1/2 border border-solid d-theme-border-grey-light border-r-0 border-b-0 border-l-0"
                    },
                    [
                      _c("p", { staticClass: "mt-4" }, [_vm._v("Completed")]),
                      _vm._v(" "),
                      _c("p", { staticClass: "mb-4 text-3xl font-semibold" }, [
                        _vm._v("786,617")
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "w-1/2 border border-solid d-theme-border-grey-light border-r-0 border-b-0"
                    },
                    [
                      _c("p", { staticClass: "mt-4" }, [_vm._v("In Progress")]),
                      _vm._v(" "),
                      _c("p", { staticClass: "mb-4 text-3xl font-semibold" }, [
                        _vm._v("13,561")
                      ])
                    ]
                  )
                ]
              )
            ],
            2
          )
        ],
        1
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "vx-row" }, [
      _c(
        "div",
        { staticClass: "vx-col w-full md:w-1/2 mb-base" },
        [
          _c(
            "vx-card",
            [
              _c(
                "div",
                { staticClass: "vx-row flex-col-reverse lg:flex-row" },
                [
                  _c(
                    "div",
                    {
                      staticClass:
                        "vx-col w-full lg:w-1/2 xl:w-1/2 flex flex-col justify-between"
                    },
                    [
                      _c("div", [
                        _c("h2", { staticClass: "mb-1 font-bold" }, [
                          _vm._v("2.7K")
                        ]),
                        _vm._v(" "),
                        _c("span", { staticClass: "font-medium" }, [
                          _vm._v("Avg Sessions")
                        ]),
                        _vm._v(" "),
                        _c("p", { staticClass: "mt-2 text-xl font-medium" }, [
                          _c("span", { staticClass: "text-success" }, [
                            _vm._v("+5.2%")
                          ]),
                          _vm._v(" vs last 7 days")
                        ])
                      ]),
                      _vm._v(" "),
                      _c(
                        "vs-button",
                        {
                          staticClass: "shadow-md w-full lg:mt-0 mt-4",
                          attrs: {
                            "icon-pack": "feather",
                            icon: "icon-chevrons-right",
                            "icon-after": ""
                          }
                        },
                        [_vm._v("View Details")]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "vx-col w-full lg:w-1/2 xl:w-1/2 flex flex-col lg:mb-0 mb-base"
                    },
                    [
                      _c("change-time-duration-dropdown", {
                        staticClass: "self-end"
                      }),
                      _vm._v(" "),
                      _c("vue-apex-charts", {
                        attrs: {
                          type: "bar",
                          height: "200",
                          options: _vm.analyticsData.salesBar.chartOptions,
                          series: _vm.analyticsData.salesBar.series
                        }
                      })
                    ],
                    1
                  )
                ]
              ),
              _vm._v(" "),
              _c("vs-divider", { staticClass: "my-6" }),
              _vm._v(" "),
              _c("div", { staticClass: "vx-row" }, [
                _c(
                  "div",
                  { staticClass: "vx-col w-1/2 mb-3" },
                  [
                    _c("small", [_vm._v("Goal: $100000")]),
                    _vm._v(" "),
                    _c("vs-progress", {
                      staticClass: "block mt-1",
                      attrs: { percent: 50, color: "primary" }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "vx-col w-1/2 mb-3" },
                  [
                    _c("small", [_vm._v("Users: 100K")]),
                    _vm._v(" "),
                    _c("vs-progress", {
                      staticClass: "block mt-1",
                      attrs: { percent: 60, color: "warning" }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "vx-col w-1/2 mb-3" },
                  [
                    _c("small", [_vm._v("Retention: 90%")]),
                    _vm._v(" "),
                    _c("vs-progress", {
                      staticClass: "block mt-1",
                      attrs: { percent: 70, color: "danger" }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "vx-col w-1/2 mb-3" },
                  [
                    _c("small", [_vm._v("Duration: 1yr")]),
                    _vm._v(" "),
                    _c("vs-progress", {
                      staticClass: "block mt-1",
                      attrs: { percent: 90, color: "success" }
                    })
                  ],
                  1
                )
              ])
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "vx-col w-full md:w-1/2 mb-base" },
        [
          _c(
            "vx-card",
            { staticClass: "overflow-hidden" },
            [
              _c("template", { slot: "no-body" }, [
                _c(
                  "div",
                  {
                    staticClass:
                      "flex justify-between items-center p-6 border border-solid d-theme-border-grey-light border-r-0 border-l-0 border-t-0"
                  },
                  [
                    _c(
                      "div",
                      [
                        _c("p", [
                          _c("span", { staticClass: "font-semibold" }, [
                            _vm._v("2 task completed")
                          ]),
                          _vm._v(" out of 10")
                        ]),
                        _vm._v(" "),
                        _c("vs-progress", {
                          attrs: { percent: 20, color: "primary" }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("span", [_vm._v("Sat, 16 Feb")])
                  ]
                ),
                _vm._v(" "),
                _c("ul", { staticClass: "tasks-today-container" }, [
                  _c("li", { staticClass: "px-6 py-4 tasks-today__task" }, [
                    _c("div", { staticClass: "vx-row" }, [
                      _c("div", { staticClass: "vx-col w-full sm:w-auto" }, [
                        _c("p", { staticClass: "font-semibold text-lg" }, [
                          _vm._v("Refactor button component")
                        ]),
                        _vm._v(" "),
                        _c("small", [_vm._v("16 Feb 2019 - 2 hrs")])
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "tasks-today__actions vx-col w-full sm:w-auto ml-auto mt-2 sm:mt-0"
                        },
                        [
                          _c("vs-button", {
                            attrs: {
                              radius: "",
                              color: "primary",
                              type: "border",
                              "icon-pack": "feather",
                              icon: "icon-check",
                              size: "small"
                            }
                          }),
                          _vm._v(" "),
                          _c("vs-button", {
                            staticClass: "ml-3",
                            attrs: {
                              radius: "",
                              color: "primary",
                              type: "border",
                              "icon-pack": "feather",
                              icon: "icon-edit-2",
                              size: "small"
                            }
                          }),
                          _vm._v(" "),
                          _c("vs-button", {
                            staticClass: "ml-3",
                            attrs: {
                              radius: "",
                              color: "primary",
                              type: "border",
                              "icon-pack": "feather",
                              icon: "icon-trash",
                              size: "small"
                            }
                          })
                        ],
                        1
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("li", { staticClass: "px-6 py-4 tasks-today__task" }, [
                    _c("div", { staticClass: "vx-row" }, [
                      _c("div", { staticClass: "vx-col w-full sm:w-auto" }, [
                        _c("p", { staticClass: "font-semibold text-lg" }, [
                          _vm._v("Submit report to admin")
                        ]),
                        _vm._v(" "),
                        _c("small", [_vm._v("16 Feb 2019 - 2 hrs")])
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "tasks-today__actions vx-col w-full sm:w-auto ml-auto mt-2 sm:mt-0"
                        },
                        [
                          _c("vs-button", {
                            attrs: {
                              radius: "",
                              color: "primary",
                              type: "border",
                              "icon-pack": "feather",
                              icon: "icon-check",
                              size: "small"
                            }
                          }),
                          _vm._v(" "),
                          _c("vs-button", {
                            staticClass: "ml-3",
                            attrs: {
                              radius: "",
                              color: "primary",
                              type: "border",
                              "icon-pack": "feather",
                              icon: "icon-edit-2",
                              size: "small"
                            }
                          }),
                          _vm._v(" "),
                          _c("vs-button", {
                            staticClass: "ml-3",
                            attrs: {
                              radius: "",
                              color: "primary",
                              type: "border",
                              "icon-pack": "feather",
                              icon: "icon-trash",
                              size: "small"
                            }
                          })
                        ],
                        1
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("li", { staticClass: "px-6 py-4 tasks-today__task" }, [
                    _c("div", { staticClass: "vx-row" }, [
                      _c("div", { staticClass: "vx-col w-full sm:w-auto" }, [
                        _c("p", { staticClass: "font-semibold text-lg" }, [
                          _vm._v("Prepare presentation")
                        ]),
                        _vm._v(" "),
                        _c("small", [_vm._v("16 Feb 2019 - 2 hrs")])
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "tasks-today__actions vx-col w-full sm:w-auto ml-auto mt-2 sm:mt-0"
                        },
                        [
                          _c("vs-button", {
                            attrs: {
                              radius: "",
                              color: "primary",
                              type: "border",
                              "icon-pack": "feather",
                              icon: "icon-check",
                              size: "small"
                            }
                          }),
                          _vm._v(" "),
                          _c("vs-button", {
                            staticClass: "ml-3",
                            attrs: {
                              radius: "",
                              color: "primary",
                              type: "border",
                              "icon-pack": "feather",
                              icon: "icon-edit-2",
                              size: "small"
                            }
                          }),
                          _vm._v(" "),
                          _c("vs-button", {
                            staticClass: "ml-3",
                            attrs: {
                              radius: "",
                              color: "primary",
                              type: "border",
                              "icon-pack": "feather",
                              icon: "icon-trash",
                              size: "small"
                            }
                          })
                        ],
                        1
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("li", { staticClass: "px-6 py-4 tasks-today__task" }, [
                    _c("div", { staticClass: "vx-row" }, [
                      _c("div", { staticClass: "vx-col w-full sm:w-auto" }, [
                        _c("p", { staticClass: "font-semibold text-lg" }, [
                          _vm._v("Calculate monthly income")
                        ]),
                        _vm._v(" "),
                        _c("small", [_vm._v("16 Feb 2019 - 2 hrs")])
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "tasks-today__actions vx-col w-full sm:w-auto ml-auto mt-2 sm:mt-0"
                        },
                        [
                          _c("vs-button", {
                            attrs: {
                              radius: "",
                              color: "primary",
                              type: "border",
                              "icon-pack": "feather",
                              icon: "icon-check",
                              size: "small"
                            }
                          }),
                          _vm._v(" "),
                          _c("vs-button", {
                            staticClass: "ml-3",
                            attrs: {
                              radius: "",
                              color: "primary",
                              type: "border",
                              "icon-pack": "feather",
                              icon: "icon-edit-2",
                              size: "small"
                            }
                          }),
                          _vm._v(" "),
                          _c("vs-button", {
                            staticClass: "ml-3",
                            attrs: {
                              radius: "",
                              color: "primary",
                              type: "border",
                              "icon-pack": "feather",
                              icon: "icon-trash",
                              size: "small"
                            }
                          })
                        ],
                        1
                      )
                    ])
                  ])
                ])
              ])
            ],
            2
          )
        ],
        1
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "vx-row" }, [
      _c(
        "div",
        { staticClass: "vx-col w-full md:w-2/3 lg:w-3/4" },
        [
          _c(
            "vx-card",
            { attrs: { title: "Sales" } },
            [
              _c(
                "template",
                { slot: "actions" },
                [
                  _c("feather-icon", {
                    attrs: {
                      icon: "SettingsIcon",
                      svgClasses: "w-6 h-6 text-grey"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "p-6 pb-0",
                  attrs: { slot: "no-body" },
                  slot: "no-body"
                },
                [
                  _c("vue-apex-charts", {
                    attrs: {
                      type: "line",
                      height: "266",
                      options: _vm.analyticsData.salesLine.chartOptions,
                      series: _vm.analyticsData.salesLine.series
                    }
                  })
                ],
                1
              )
            ],
            2
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "vx-col w-full md:w-1/3 lg:w-1/4 xl:w-1/4" },
        [
          _c(
            "vx-card",
            [
              _c("template", { slot: "no-body" }, [
                _c(
                  "div",
                  { staticClass: "p-8 clearfix" },
                  [
                    _c("div", [
                      _c("h1", [
                        _c("sup", { staticClass: "text-lg" }, [_vm._v("$")]),
                        _vm._v("23,597")
                      ]),
                      _vm._v(" "),
                      _c("small", [
                        _c("span", { staticClass: "text-grey" }, [
                          _vm._v("Deposits:")
                        ]),
                        _vm._v(" $20,065")
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "p",
                      {
                        staticClass:
                          "mt-2 mb-8 text-xl text-success font-medium"
                      },
                      [_vm._v("+5.2% ($956)")]
                    ),
                    _vm._v(" "),
                    _c(
                      "vs-button",
                      {
                        staticClass: "shadow-md w-full",
                        attrs: {
                          "icon-pack": "feather",
                          icon: "icon-chevrons-right",
                          "icon-after": ""
                        }
                      },
                      [_vm._v("Add Funds")]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "p-8 border d-theme-border-grey-light border-solid border-r-0 border-l-0 border-b-0"
                  },
                  [
                    _c(
                      "div",
                      { staticClass: "mb-4" },
                      [
                        _c("small", [_vm._v("Earned: $56,156")]),
                        _vm._v(" "),
                        _c("vs-progress", {
                          attrs: { percent: 50, color: "success" }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      [
                        _c("small", [_vm._v("Duration: 2y")]),
                        _vm._v(" "),
                        _c("vs-progress", {
                          attrs: { percent: 50, color: "warning" }
                        })
                      ],
                      1
                    )
                  ]
                )
              ])
            ],
            2
          )
        ],
        1
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "vx-row mt-base" }, [
      _c(
        "div",
        { staticClass: "vx-col w-full md:w-1/3 lg:w-1/3 xl:w-1/3" },
        [
          _c(
            "vx-card",
            { attrs: { title: "Browser Statistics" } },
            _vm._l(_vm.analyticsData.browserAnalytics, function(
              browser,
              index
            ) {
              return _c(
                "div",
                { key: browser.id, class: { "mt-4": index } },
                [
                  _c("div", { staticClass: "flex justify-between" }, [
                    _c("div", { staticClass: "flex flex-col" }, [
                      _c("span", { staticClass: "mb-1" }, [
                        _vm._v(_vm._s(browser.name))
                      ]),
                      _vm._v(" "),
                      _c("h4", [_vm._v(_vm._s(browser.ratio) + "%")])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "flex flex-col text-right" }, [
                      _c(
                        "span",
                        { staticClass: "flex -mr-1" },
                        [
                          _c("span", { staticClass: "mr-1" }, [
                            _vm._v(_vm._s(browser.comparedResult))
                          ]),
                          _vm._v(" "),
                          _c("feather-icon", {
                            attrs: {
                              icon:
                                browser.comparedResult < 0
                                  ? "ArrowDownIcon"
                                  : "ArrowUpIcon",
                              svgClasses: [
                                browser.comparedResult < 0
                                  ? "text-danger"
                                  : "text-success",
                                "stroke-current h-4 w-4 mb-1 mr-1"
                              ]
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("span", { staticClass: "text-grey" }, [
                        _vm._v(_vm._s(_vm._f("time")(browser.time, true)))
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("vs-progress", { attrs: { percent: browser.ratio } })
                ],
                1
              )
            }),
            0
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "vx-col w-full md:w-2/3" },
        [
          _c(
            "vx-card",
            { attrs: { title: "Client Retention" } },
            [
              _c("div", { staticClass: "flex" }, [
                _c("span", { staticClass: "flex items-center" }, [
                  _c("div", {
                    staticClass: "h-3 w-3 rounded-full mr-1 bg-warning"
                  }),
                  _c("span", [_vm._v("New Clients")])
                ]),
                _vm._v(" "),
                _c("span", { staticClass: "flex items-center ml-4" }, [
                  _c("div", {
                    staticClass: "h-3 w-3 rounded-full mr-1 bg-danger"
                  }),
                  _c("span", [_vm._v("Retained Clients")])
                ])
              ]),
              _vm._v(" "),
              _c("vue-apex-charts", {
                attrs: {
                  type: "bar",
                  height: "266",
                  options: _vm.analyticsData.clientRetentionBar.chartOptions,
                  series: _vm.analyticsData.clientRetentionBar.series
                }
              })
            ],
            1
          )
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/components/ChangeTimeDurationDropdown.vue":
/*!********************************************************************!*\
  !*** ./resources/js/src/components/ChangeTimeDurationDropdown.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChangeTimeDurationDropdown_vue_vue_type_template_id_c2faee7c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChangeTimeDurationDropdown.vue?vue&type=template&id=c2faee7c& */ "./resources/js/src/components/ChangeTimeDurationDropdown.vue?vue&type=template&id=c2faee7c&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _ChangeTimeDurationDropdown_vue_vue_type_template_id_c2faee7c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ChangeTimeDurationDropdown_vue_vue_type_template_id_c2faee7c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/components/ChangeTimeDurationDropdown.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/components/ChangeTimeDurationDropdown.vue?vue&type=template&id=c2faee7c&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/src/components/ChangeTimeDurationDropdown.vue?vue&type=template&id=c2faee7c& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChangeTimeDurationDropdown_vue_vue_type_template_id_c2faee7c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ChangeTimeDurationDropdown.vue?vue&type=template&id=c2faee7c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/ChangeTimeDurationDropdown.vue?vue&type=template&id=c2faee7c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChangeTimeDurationDropdown_vue_vue_type_template_id_c2faee7c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChangeTimeDurationDropdown_vue_vue_type_template_id_c2faee7c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/ui-elements/card/CardAnalytics.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/src/views/ui-elements/card/CardAnalytics.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CardAnalytics_vue_vue_type_template_id_9eb39740___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CardAnalytics.vue?vue&type=template&id=9eb39740& */ "./resources/js/src/views/ui-elements/card/CardAnalytics.vue?vue&type=template&id=9eb39740&");
/* harmony import */ var _CardAnalytics_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CardAnalytics.vue?vue&type=script&lang=js& */ "./resources/js/src/views/ui-elements/card/CardAnalytics.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _CardAnalytics_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CardAnalytics.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/views/ui-elements/card/CardAnalytics.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CardAnalytics_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CardAnalytics_vue_vue_type_template_id_9eb39740___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CardAnalytics_vue_vue_type_template_id_9eb39740___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/ui-elements/card/CardAnalytics.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/ui-elements/card/CardAnalytics.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/src/views/ui-elements/card/CardAnalytics.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardAnalytics_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CardAnalytics.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/ui-elements/card/CardAnalytics.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardAnalytics_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/ui-elements/card/CardAnalytics.vue?vue&type=style&index=0&lang=scss&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/src/views/ui-elements/card/CardAnalytics.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CardAnalytics_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../node_modules/sass-loader/lib/loader.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CardAnalytics.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/ui-elements/card/CardAnalytics.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CardAnalytics_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CardAnalytics_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CardAnalytics_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CardAnalytics_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CardAnalytics_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/ui-elements/card/CardAnalytics.vue?vue&type=template&id=9eb39740&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/src/views/ui-elements/card/CardAnalytics.vue?vue&type=template&id=9eb39740& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CardAnalytics_vue_vue_type_template_id_9eb39740___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CardAnalytics.vue?vue&type=template&id=9eb39740& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/ui-elements/card/CardAnalytics.vue?vue&type=template&id=9eb39740&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CardAnalytics_vue_vue_type_template_id_9eb39740___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CardAnalytics_vue_vue_type_template_id_9eb39740___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);