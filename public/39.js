(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[39],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/DashboardAnalytics.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/DashboardAnalytics.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-apexcharts */ "./node_modules/vue-apexcharts/dist/vue-apexcharts.js");
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_apexcharts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_statistics_cards_StatisticsCardLine_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/statistics-cards/StatisticsCardLine.vue */ "./resources/js/src/components/statistics-cards/StatisticsCardLine.vue");
/* harmony import */ var _ui_elements_card_analyticsData_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui-elements/card/analyticsData.js */ "./resources/js/src/views/ui-elements/card/analyticsData.js");
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




/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      analyticsData: _ui_elements_card_analyticsData_js__WEBPACK_IMPORTED_MODULE_2__["default"],
      isImp: false,
      navbarSearchAndPinList: this.$store.state.navbarSearchAndPinList,
      show: false,
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      nextNum: 10,
      'tableList': ['vs-th: Component', 'vs-tr: Component', 'vs-td: Component', 'thread: Slot', 'tbody: Slot', 'header: Slot'],
      users: [{
        "orderNo": 879985,
        "status": "Moving",
        "statusColor": "success",
        "operator": "Cinar Knowles",
        "operatorImg": "avatar-s-2.png",
        usersLiked: [{
          name: 'Vennie Mostowy',
          img: 'avatar-s-5.png'
        }, {
          name: 'Elicia Rieske',
          img: 'avatar-s-7.png'
        }, {
          name: 'Julee Rossignol',
          img: 'avatar-s-10.png'
        }, {
          name: 'Darcey Nooner',
          img: 'avatar-s-8.png'
        }],
        "location": "Anniston, Alabama",
        "distance": "130 km",
        "distPercent": 80,
        "startDate": "14:58 26/07/2018",
        "estDelDate": "28/07/2018"
      }, {
        "orderNo": 156897,
        "status": "Pending",
        "statusColor": "warning",
        "operator": "Britany Ryder",
        "operatorImg": "avatar-s-4.png",
        usersLiked: [{
          name: 'Trina Lynes',
          img: 'avatar-s-1.png'
        }, {
          name: 'Lilian Nenez',
          img: 'avatar-s-2.png'
        }, {
          name: 'Alberto Glotzbach',
          img: 'avatar-s-3.png'
        }],
        "location": "Cordova, Alaska",
        "distance": "234 km",
        "distPercent": 60,
        "startDate": "14:58 26/07/2018",
        "estDelDate": "28/07/2018"
      }, {
        "orderNo": 568975,
        "status": "Moving",
        "statusColor": "success",
        "operator": "Kishan Ashton",
        "operatorImg": "avatar-s-1.png",
        usersLiked: [{
          name: 'Lai Lewandowski',
          img: 'avatar-s-6.png'
        }, {
          name: 'Elicia Rieske',
          img: 'avatar-s-7.png'
        }, {
          name: 'Darcey Nooner',
          img: 'avatar-s-8.png'
        }, {
          name: 'Julee Rossignol',
          img: 'avatar-s-10.png'
        }, {
          name: 'Jeffrey Gerondale',
          img: 'avatar-s-9.png'
        }],
        "location": "Florence, Alabama",
        "distance": "168 km",
        "distPercent": 70,
        "startDate": "14:58 26/07/2018",
        "estDelDate": "28/07/2018"
      }, {
        "orderNo": 245689,
        "status": "Canceled",
        "statusColor": "danger",
        "operator": "Anabella Elliott",
        "operatorImg": "avatar-s-6.png",
        usersLiked: [{
          name: 'Vennie Mostowy',
          img: 'avatar-s-5.png'
        }, {
          name: 'Elicia Rieske',
          img: 'avatar-s-7.png'
        }],
        "location": "Clifton, Arizona",
        "distance": "125 km",
        "distPercent": 95,
        "startDate": "14:58 26/07/2018",
        "estDelDate": "28/07/2018"
      }]
    };
  },
  components: {
    VueApexCharts: vue_apexcharts__WEBPACK_IMPORTED_MODULE_0___default.a,
    StatisticsCardLine: _components_statistics_cards_StatisticsCardLine_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    ChangeTimeDurationDropdown: _components_ChangeTimeDurationDropdown_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/DashboardAnalytics.vue?vue&type=style&index=0&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/lib/loader.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/DashboardAnalytics.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#dashboard-analytics .greet-user {\n  position: relative;\n}\n#dashboard-analytics .greet-user .decore-left {\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n#dashboard-analytics .greet-user .decore-right {\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n@media (max-width: 576px) {\n#dashboard-analytics .decore-left, #dashboard-analytics .decore-right {\n    width: 140px;\n}\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/DashboardAnalytics.vue?vue&type=style&index=0&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/lib/loader.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/DashboardAnalytics.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--8-2!../../../../node_modules/sass-loader/lib/loader.js??ref--8-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./DashboardAnalytics.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/DashboardAnalytics.vue?vue&type=style&index=0&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/DashboardAnalytics.vue?vue&type=template&id=596e52fc&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/DashboardAnalytics.vue?vue&type=template&id=596e52fc& ***!
  \********************************************************************************************************************************************************************************************************************/
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
  return _c("div", { attrs: { id: "dashboard-analytics" } }, [
    _c("div", { staticClass: "vx-row" }, [
      _c(
        "div",
        { staticClass: "vx-col w-full lg:w-1/2 mb-base" },
        [
          _c(
            "vx-card",
            {
              staticClass: "text-center bg-primary-gradient greet-user",
              attrs: { slot: "no-body" },
              slot: "no-body"
            },
            [
              _c("img", {
                staticClass: "decore-left",
                attrs: {
                  src: __webpack_require__(/*! ../assets/images/elements/decore-left.png */ "./resources/js/src/assets/images/elements/decore-left.png"),
                  alt: "Decore Left",
                  width: "200"
                }
              }),
              _vm._v(" "),
              _c("img", {
                staticClass: "decore-right",
                attrs: {
                  src: __webpack_require__(/*! ../assets/images/elements/decore-right.png */ "./resources/js/src/assets/images/elements/decore-right.png"),
                  alt: "Decore Right",
                  width: "175"
                }
              }),
              _vm._v(" "),
              _c("feather-icon", {
                staticClass:
                  "p-6 mb-8 bg-primary inline-flex rounded-full text-white shadow",
                attrs: { icon: "AwardIcon", svgClasses: "h-8 w-8" }
              }),
              _vm._v(" "),
              _c("h1", { staticClass: "mb-6 text-white" }, [
                _vm._v("Congratulations John,")
              ]),
              _vm._v(" "),
              _c(
                "p",
                {
                  staticClass:
                    "xl:w-3/4 lg:w-4/5 md:w-2/3 w-4/5 mx-auto text-white"
                },
                [
                  _vm._v("You have done "),
                  _c("strong", [_vm._v("57.6%")]),
                  _vm._v(
                    " more sales today. Check your new badge in your profile."
                  )
                ]
              )
            ],
            1
          )
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
                    _c("p", [_vm._v("Goal: $100000")]),
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
                    _c("p", [_vm._v("Users: 100K")]),
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
                    _c("p", [_vm._v("Retention: 90%")]),
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
                    _c("p", [_vm._v("Duration: 1yr")]),
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
                      height: "370",
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
            { attrs: { title: "Sales Stats", subtitle: "Last 6 Months" } },
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
                    staticClass: "h-3 w-3 rounded-full mr-1 bg-primary"
                  }),
                  _c("span", [_vm._v("Sales")])
                ]),
                _vm._v(" "),
                _c("span", { staticClass: "flex items-center ml-4" }, [
                  _c("div", {
                    staticClass: "h-3 w-3 rounded-full mr-1 bg-success"
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
                      height: "400",
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
        { staticClass: "vx-col w-full lg:w-1/3 mb-base" },
        [
          _c("vx-card", { attrs: { title: "Activity Timeline" } }, [
            _c("ul", { staticClass: "activity-timeline" }, [
              _c("li", [
                _c(
                  "div",
                  { staticClass: "timeline-icon bg-primary" },
                  [
                    _c("feather-icon", {
                      attrs: {
                        icon: "PlusIcon",
                        svgClasses: "text-white stroke-current w-5 h-5"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c("div", { staticClass: "timeline-info" }, [
                  _c("p", { staticClass: "font-semibold" }, [
                    _vm._v("Client Meeting")
                  ]),
                  _vm._v(" "),
                  _c("span", { staticClass: "activity-desc" }, [
                    _vm._v(
                      "Bonbon macaroon jelly beans gummi bears jelly lollipop apple"
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("small", { staticClass: "text-grey activity-e-time" }, [
                  _vm._v("25 mins ago")
                ])
              ]),
              _vm._v(" "),
              _c("li", [
                _c(
                  "div",
                  { staticClass: "timeline-icon bg-warning" },
                  [
                    _c("feather-icon", {
                      attrs: {
                        icon: "AlertCircleIcon",
                        svgClasses: "text-white stroke-current w-5 h-5"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c("div", { staticClass: "timeline-info" }, [
                  _c("p", { staticClass: "font-semibold" }, [
                    _vm._v("Email Newsletter")
                  ]),
                  _vm._v(" "),
                  _c("span", { staticClass: "activity-desc" }, [
                    _vm._v("Cupcake gummi bears soufflé caramels candy")
                  ])
                ]),
                _vm._v(" "),
                _c("small", { staticClass: "text-grey activity-e-time" }, [
                  _vm._v("15 days ago")
                ])
              ]),
              _vm._v(" "),
              _c("li", [
                _c(
                  "div",
                  { staticClass: "timeline-icon bg-danger" },
                  [
                    _c("feather-icon", {
                      attrs: {
                        icon: "CheckIcon",
                        svgClasses: "text-white stroke-current w-5 h-5"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c("div", { staticClass: "timeline-info" }, [
                  _c("p", { staticClass: "font-semibold" }, [
                    _vm._v("Plan Webinar")
                  ]),
                  _vm._v(" "),
                  _c("span", { staticClass: "activity-desc" }, [
                    _vm._v("Candy ice cream cake. Halvah gummi bears")
                  ])
                ]),
                _vm._v(" "),
                _c("small", { staticClass: "text-grey activity-e-time" }, [
                  _vm._v("20 days ago")
                ])
              ]),
              _vm._v(" "),
              _c("li", [
                _c(
                  "div",
                  { staticClass: "timeline-icon bg-success" },
                  [
                    _c("feather-icon", {
                      attrs: {
                        icon: "CheckIcon",
                        svgClasses: "text-white stroke-current w-5 h-5"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c("div", { staticClass: "timeline-info" }, [
                  _c("p", { staticClass: "font-semibold" }, [
                    _vm._v("Launch Website")
                  ]),
                  _vm._v(" "),
                  _c("span", { staticClass: "activity-desc" }, [
                    _vm._v(
                      "Candy ice cream cake. Halvah gummi bears Cupcake gummi bears soufflé caramels candy."
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("small", { staticClass: "text-grey activity-e-time" }, [
                  _vm._v("25 days ago")
                ])
              ]),
              _vm._v(" "),
              _c("li", [
                _c(
                  "div",
                  { staticClass: "timeline-icon bg-primary" },
                  [
                    _c("feather-icon", {
                      attrs: {
                        icon: "CheckIcon",
                        svgClasses: "text-white stroke-current w-5 h-5"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c("div", { staticClass: "timeline-info" }, [
                  _c("p", { staticClass: "font-semibold" }, [
                    _vm._v("Marketing")
                  ]),
                  _vm._v(" "),
                  _c("span", { staticClass: "activity-desc" }, [
                    _vm._v(
                      "Candy ice cream cake. Halvah gummi bears Cupcake gummi bears."
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("small", { staticClass: "text-grey activity-e-time" }, [
                  _vm._v("28 days ago")
                ])
              ])
            ])
          ])
        ],
        1
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "vx-row" }, [
      _c(
        "div",
        { staticClass: "vx-col w-full" },
        [
          _c("vx-card", { attrs: { title: "Dispatched Orders" } }, [
            _c(
              "div",
              {
                staticClass: "mt-4",
                attrs: { slot: "no-body" },
                slot: "no-body"
              },
              [
                _c(
                  "vs-table",
                  {
                    attrs: { data: _vm.users },
                    scopedSlots: _vm._u([
                      {
                        key: "default",
                        fn: function(ref) {
                          var data = ref.data
                          return _vm._l(data, function(tr, indextr) {
                            return _c(
                              "vs-tr",
                              { key: indextr },
                              [
                                _c(
                                  "vs-td",
                                  { attrs: { data: data[indextr].orderNo } },
                                  [
                                    _c("span", [
                                      _vm._v(
                                        "#" + _vm._s(data[indextr].orderNo)
                                      )
                                    ])
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "vs-td",
                                  { attrs: { data: data[indextr].status } },
                                  [
                                    _c(
                                      "span",
                                      {
                                        staticClass:
                                          "flex items-center px-2 py-1 rounded"
                                      },
                                      [
                                        _c("div", {
                                          staticClass:
                                            "h-3 w-3 rounded-full mr-2",
                                          class:
                                            "bg-" + data[indextr].statusColor
                                        }),
                                        _vm._v(_vm._s(data[indextr].status))
                                      ]
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "vs-td",
                                  { attrs: { data: data[indextr].orderNo } },
                                  [
                                    _c(
                                      "ul",
                                      { staticClass: "users-liked user-list" },
                                      _vm._l(data[indextr].usersLiked, function(
                                        user,
                                        userIndex
                                      ) {
                                        return _c(
                                          "li",
                                          { key: userIndex },
                                          [
                                            _c(
                                              "vx-tooltip",
                                              {
                                                attrs: {
                                                  text: user.name,
                                                  position: "bottom"
                                                }
                                              },
                                              [
                                                _c("vs-avatar", {
                                                  staticClass:
                                                    "border-2 border-white border-solid -m-1",
                                                  attrs: {
                                                    src: __webpack_require__("./resources/js/src/assets/images/portrait/small sync recursive ^\\.\\/.*$")("./" +
                                                      user.img),
                                                    size: "30px"
                                                  }
                                                })
                                              ],
                                              1
                                            )
                                          ],
                                          1
                                        )
                                      }),
                                      0
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "vs-td",
                                  { attrs: { data: data[indextr].orderNo } },
                                  [
                                    _c("span", [
                                      _vm._v(_vm._s(data[indextr].location))
                                    ])
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "vs-td",
                                  { attrs: { data: data[indextr].orderNo } },
                                  [
                                    _c("span", [
                                      _vm._v(_vm._s(data[indextr].distance))
                                    ]),
                                    _vm._v(" "),
                                    _c("vs-progress", {
                                      attrs: {
                                        percent: data[indextr].distPercent,
                                        color: data[indextr].statusColor
                                      }
                                    })
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "vs-td",
                                  { attrs: { data: data[indextr].orderNo } },
                                  [
                                    _c("span", [
                                      _vm._v(_vm._s(data[indextr].startDate))
                                    ])
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "vs-td",
                                  { attrs: { data: data[indextr].orderNo } },
                                  [
                                    _c("span", [
                                      _vm._v(_vm._s(data[indextr].estDelDate))
                                    ])
                                  ]
                                )
                              ],
                              1
                            )
                          })
                        }
                      }
                    ])
                  },
                  [
                    _c(
                      "template",
                      { slot: "thead" },
                      [
                        _c("vs-th", [_vm._v("ORDER NO.")]),
                        _vm._v(" "),
                        _c("vs-th", [_vm._v("STATUS")]),
                        _vm._v(" "),
                        _c("vs-th", [_vm._v("OPERATORS")]),
                        _vm._v(" "),
                        _c("vs-th", [_vm._v("LOCATION")]),
                        _vm._v(" "),
                        _c("vs-th", [_vm._v("DISTANCE")]),
                        _vm._v(" "),
                        _c("vs-th", [_vm._v("START DATE")]),
                        _vm._v(" "),
                        _c("vs-th", [_vm._v("EST DELIVERY DATE")])
                      ],
                      1
                    )
                  ],
                  2
                )
              ],
              1
            )
          ])
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/assets/images/elements/decore-left.png":
/*!*****************************************************************!*\
  !*** ./resources/js/src/assets/images/elements/decore-left.png ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/decore-left.png?2d9d23e097d9118c0aa4cc074b6c5b22";

/***/ }),

/***/ "./resources/js/src/assets/images/elements/decore-right.png":
/*!******************************************************************!*\
  !*** ./resources/js/src/assets/images/elements/decore-right.png ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/decore-right.png?da0ab5cda39e974268cbe4da64f597b6";

/***/ }),

/***/ "./resources/js/src/assets/images/portrait/small sync recursive ^\\.\\/.*$":
/*!*********************************************************************!*\
  !*** ./resources/js/src/assets/images/portrait/small sync ^\.\/.*$ ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./avatar-s-1.png": "./resources/js/src/assets/images/portrait/small/avatar-s-1.png",
	"./avatar-s-10.png": "./resources/js/src/assets/images/portrait/small/avatar-s-10.png",
	"./avatar-s-11.png": "./resources/js/src/assets/images/portrait/small/avatar-s-11.png",
	"./avatar-s-12.png": "./resources/js/src/assets/images/portrait/small/avatar-s-12.png",
	"./avatar-s-13.png": "./resources/js/src/assets/images/portrait/small/avatar-s-13.png",
	"./avatar-s-14.png": "./resources/js/src/assets/images/portrait/small/avatar-s-14.png",
	"./avatar-s-15.png": "./resources/js/src/assets/images/portrait/small/avatar-s-15.png",
	"./avatar-s-16.png": "./resources/js/src/assets/images/portrait/small/avatar-s-16.png",
	"./avatar-s-17.png": "./resources/js/src/assets/images/portrait/small/avatar-s-17.png",
	"./avatar-s-18.png": "./resources/js/src/assets/images/portrait/small/avatar-s-18.png",
	"./avatar-s-19.png": "./resources/js/src/assets/images/portrait/small/avatar-s-19.png",
	"./avatar-s-2.png": "./resources/js/src/assets/images/portrait/small/avatar-s-2.png",
	"./avatar-s-20.png": "./resources/js/src/assets/images/portrait/small/avatar-s-20.png",
	"./avatar-s-21.png": "./resources/js/src/assets/images/portrait/small/avatar-s-21.png",
	"./avatar-s-22.png": "./resources/js/src/assets/images/portrait/small/avatar-s-22.png",
	"./avatar-s-23.png": "./resources/js/src/assets/images/portrait/small/avatar-s-23.png",
	"./avatar-s-24.png": "./resources/js/src/assets/images/portrait/small/avatar-s-24.png",
	"./avatar-s-25.png": "./resources/js/src/assets/images/portrait/small/avatar-s-25.png",
	"./avatar-s-26.png": "./resources/js/src/assets/images/portrait/small/avatar-s-26.png",
	"./avatar-s-3.png": "./resources/js/src/assets/images/portrait/small/avatar-s-3.png",
	"./avatar-s-4.png": "./resources/js/src/assets/images/portrait/small/avatar-s-4.png",
	"./avatar-s-5.png": "./resources/js/src/assets/images/portrait/small/avatar-s-5.png",
	"./avatar-s-6.png": "./resources/js/src/assets/images/portrait/small/avatar-s-6.png",
	"./avatar-s-7.png": "./resources/js/src/assets/images/portrait/small/avatar-s-7.png",
	"./avatar-s-8.png": "./resources/js/src/assets/images/portrait/small/avatar-s-8.png",
	"./avatar-s-9.png": "./resources/js/src/assets/images/portrait/small/avatar-s-9.png"
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
webpackContext.id = "./resources/js/src/assets/images/portrait/small sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./resources/js/src/assets/images/portrait/small/avatar-s-1.png":
/*!**********************************************************************!*\
  !*** ./resources/js/src/assets/images/portrait/small/avatar-s-1.png ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/avatar-s-1.png?8edbcdedecdd3284f9aaa19b417c8b5a";

/***/ }),

/***/ "./resources/js/src/assets/images/portrait/small/avatar-s-10.png":
/*!***********************************************************************!*\
  !*** ./resources/js/src/assets/images/portrait/small/avatar-s-10.png ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/avatar-s-10.png?7be10c5705a8bd9eb9bc9bca9ff30da6";

/***/ }),

/***/ "./resources/js/src/assets/images/portrait/small/avatar-s-11.png":
/*!***********************************************************************!*\
  !*** ./resources/js/src/assets/images/portrait/small/avatar-s-11.png ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/avatar-s-11.png?51a23c074bd7469a69e220c62dce541a";

/***/ }),

/***/ "./resources/js/src/assets/images/portrait/small/avatar-s-12.png":
/*!***********************************************************************!*\
  !*** ./resources/js/src/assets/images/portrait/small/avatar-s-12.png ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/avatar-s-12.png?cec148feffe8d6a77c51ab10fc3013d0";

/***/ }),

/***/ "./resources/js/src/assets/images/portrait/small/avatar-s-13.png":
/*!***********************************************************************!*\
  !*** ./resources/js/src/assets/images/portrait/small/avatar-s-13.png ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/avatar-s-13.png?1875411a1a1c12898f9cd4ef98996d45";

/***/ }),

/***/ "./resources/js/src/assets/images/portrait/small/avatar-s-14.png":
/*!***********************************************************************!*\
  !*** ./resources/js/src/assets/images/portrait/small/avatar-s-14.png ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/avatar-s-14.png?9ab8c5145b6b0ca0f39eea73aabead5f";

/***/ }),

/***/ "./resources/js/src/assets/images/portrait/small/avatar-s-15.png":
/*!***********************************************************************!*\
  !*** ./resources/js/src/assets/images/portrait/small/avatar-s-15.png ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/avatar-s-15.png?30fed846366adf11f8ee1014fb2185c9";

/***/ }),

/***/ "./resources/js/src/assets/images/portrait/small/avatar-s-16.png":
/*!***********************************************************************!*\
  !*** ./resources/js/src/assets/images/portrait/small/avatar-s-16.png ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/avatar-s-16.png?88e40556adbbc9ce12c1d79bd2a06531";

/***/ }),

/***/ "./resources/js/src/assets/images/portrait/small/avatar-s-17.png":
/*!***********************************************************************!*\
  !*** ./resources/js/src/assets/images/portrait/small/avatar-s-17.png ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/avatar-s-17.png?a92e96b20acdf06888462dd9ef51e5a1";

/***/ }),

/***/ "./resources/js/src/assets/images/portrait/small/avatar-s-18.png":
/*!***********************************************************************!*\
  !*** ./resources/js/src/assets/images/portrait/small/avatar-s-18.png ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/avatar-s-18.png?6f5c3253da8a82c2cb14bae61d84a2dd";

/***/ }),

/***/ "./resources/js/src/assets/images/portrait/small/avatar-s-19.png":
/*!***********************************************************************!*\
  !*** ./resources/js/src/assets/images/portrait/small/avatar-s-19.png ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/avatar-s-19.png?908c8b7896636515e5ec2e874c067e4b";

/***/ }),

/***/ "./resources/js/src/assets/images/portrait/small/avatar-s-2.png":
/*!**********************************************************************!*\
  !*** ./resources/js/src/assets/images/portrait/small/avatar-s-2.png ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/avatar-s-2.png?93c7a17a77d076a725b4280c8d45fcc8";

/***/ }),

/***/ "./resources/js/src/assets/images/portrait/small/avatar-s-20.png":
/*!***********************************************************************!*\
  !*** ./resources/js/src/assets/images/portrait/small/avatar-s-20.png ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/avatar-s-20.png?aa019f1dca634669abf1ccbb56167412";

/***/ }),

/***/ "./resources/js/src/assets/images/portrait/small/avatar-s-21.png":
/*!***********************************************************************!*\
  !*** ./resources/js/src/assets/images/portrait/small/avatar-s-21.png ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/avatar-s-21.png?5aee13d88923688c3e2766cee073e823";

/***/ }),

/***/ "./resources/js/src/assets/images/portrait/small/avatar-s-22.png":
/*!***********************************************************************!*\
  !*** ./resources/js/src/assets/images/portrait/small/avatar-s-22.png ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/avatar-s-22.png?350e5390e5333dd0a18dce3744d7b860";

/***/ }),

/***/ "./resources/js/src/assets/images/portrait/small/avatar-s-23.png":
/*!***********************************************************************!*\
  !*** ./resources/js/src/assets/images/portrait/small/avatar-s-23.png ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/avatar-s-23.png?5e55f9497dfc1b8fac16cc142c59f189";

/***/ }),

/***/ "./resources/js/src/assets/images/portrait/small/avatar-s-24.png":
/*!***********************************************************************!*\
  !*** ./resources/js/src/assets/images/portrait/small/avatar-s-24.png ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/avatar-s-24.png?13572d01d6c52d379b94d8ee42f19c14";

/***/ }),

/***/ "./resources/js/src/assets/images/portrait/small/avatar-s-25.png":
/*!***********************************************************************!*\
  !*** ./resources/js/src/assets/images/portrait/small/avatar-s-25.png ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/avatar-s-25.png?d1c0b48d54f68a0e3dc22dd3cabac6ef";

/***/ }),

/***/ "./resources/js/src/assets/images/portrait/small/avatar-s-26.png":
/*!***********************************************************************!*\
  !*** ./resources/js/src/assets/images/portrait/small/avatar-s-26.png ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/avatar-s-26.png?d1c0b48d54f68a0e3dc22dd3cabac6ef";

/***/ }),

/***/ "./resources/js/src/assets/images/portrait/small/avatar-s-3.png":
/*!**********************************************************************!*\
  !*** ./resources/js/src/assets/images/portrait/small/avatar-s-3.png ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/avatar-s-3.png?a718f09ae7f1fb4a74bbc5d919ffb041";

/***/ }),

/***/ "./resources/js/src/assets/images/portrait/small/avatar-s-4.png":
/*!**********************************************************************!*\
  !*** ./resources/js/src/assets/images/portrait/small/avatar-s-4.png ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/avatar-s-4.png?88863dbbc2ac97ccf75be4ace8c8e9fe";

/***/ }),

/***/ "./resources/js/src/assets/images/portrait/small/avatar-s-5.png":
/*!**********************************************************************!*\
  !*** ./resources/js/src/assets/images/portrait/small/avatar-s-5.png ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/avatar-s-5.png?73b9c8f89f23bd02f99ba036a70b5562";

/***/ }),

/***/ "./resources/js/src/assets/images/portrait/small/avatar-s-6.png":
/*!**********************************************************************!*\
  !*** ./resources/js/src/assets/images/portrait/small/avatar-s-6.png ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/avatar-s-6.png?6b63817cd7446ee6b140a297e22dd3be";

/***/ }),

/***/ "./resources/js/src/assets/images/portrait/small/avatar-s-7.png":
/*!**********************************************************************!*\
  !*** ./resources/js/src/assets/images/portrait/small/avatar-s-7.png ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/avatar-s-7.png?9241b5d6708f97ada7c9cfeaa15a052d";

/***/ }),

/***/ "./resources/js/src/assets/images/portrait/small/avatar-s-8.png":
/*!**********************************************************************!*\
  !*** ./resources/js/src/assets/images/portrait/small/avatar-s-8.png ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/avatar-s-8.png?2579bd6d8eef35e22e7ec84b69bcee3b";

/***/ }),

/***/ "./resources/js/src/assets/images/portrait/small/avatar-s-9.png":
/*!**********************************************************************!*\
  !*** ./resources/js/src/assets/images/portrait/small/avatar-s-9.png ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/avatar-s-9.png?ec990ac17b3841dd6b9c4dd5cb96be6b";

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

/***/ "./resources/js/src/views/DashboardAnalytics.vue":
/*!*******************************************************!*\
  !*** ./resources/js/src/views/DashboardAnalytics.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DashboardAnalytics_vue_vue_type_template_id_596e52fc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DashboardAnalytics.vue?vue&type=template&id=596e52fc& */ "./resources/js/src/views/DashboardAnalytics.vue?vue&type=template&id=596e52fc&");
/* harmony import */ var _DashboardAnalytics_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DashboardAnalytics.vue?vue&type=script&lang=js& */ "./resources/js/src/views/DashboardAnalytics.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _DashboardAnalytics_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DashboardAnalytics.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/views/DashboardAnalytics.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DashboardAnalytics_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DashboardAnalytics_vue_vue_type_template_id_596e52fc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DashboardAnalytics_vue_vue_type_template_id_596e52fc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/DashboardAnalytics.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/DashboardAnalytics.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/src/views/DashboardAnalytics.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardAnalytics_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./DashboardAnalytics.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/DashboardAnalytics.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardAnalytics_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/DashboardAnalytics.vue?vue&type=style&index=0&lang=scss&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/src/views/DashboardAnalytics.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardAnalytics_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--8-2!../../../../node_modules/sass-loader/lib/loader.js??ref--8-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./DashboardAnalytics.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/DashboardAnalytics.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardAnalytics_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardAnalytics_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardAnalytics_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardAnalytics_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardAnalytics_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/DashboardAnalytics.vue?vue&type=template&id=596e52fc&":
/*!**************************************************************************************!*\
  !*** ./resources/js/src/views/DashboardAnalytics.vue?vue&type=template&id=596e52fc& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardAnalytics_vue_vue_type_template_id_596e52fc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./DashboardAnalytics.vue?vue&type=template&id=596e52fc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/DashboardAnalytics.vue?vue&type=template&id=596e52fc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardAnalytics_vue_vue_type_template_id_596e52fc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardAnalytics_vue_vue_type_template_id_596e52fc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);