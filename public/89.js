(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[89],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/calendar/SimpleCalendar.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/calendar/SimpleCalendar.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_simple_calendar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-simple-calendar */ "./node_modules/vue-simple-calendar/dist/CalendarView.umd.js");
/* harmony import */ var vue_simple_calendar__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_simple_calendar__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuejs_datepicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuejs-datepicker */ "./node_modules/vuejs-datepicker/dist/vuejs-datepicker.esm.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


__webpack_require__(/*! vue-simple-calendar/static/css/default.css */ "./node_modules/vue-simple-calendar/static/css/default.css");


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    CalendarView: vue_simple_calendar__WEBPACK_IMPORTED_MODULE_0__["CalendarView"],
    CalendarViewHeader: vue_simple_calendar__WEBPACK_IMPORTED_MODULE_0__["CalendarViewHeader"],
    Datepicker: vuejs_datepicker__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      showDate: new Date(),
      disabledFrom: false,
      id: 0,
      title: '',
      startDate: '',
      endDate: '',
      labelLocal: 'none',
      url: '',
      calendarView: 'month',
      activePromptAddEvent: false,
      activePromptEditEvent: false
    };
  },
  computed: {
    simpleCalendarEvents: function simpleCalendarEvents() {
      return this.$store.state.calendar.simpleCalendarEvents;
    },
    validForm: function validForm() {
      return this.title != '' && this.startDate != '' && this.endDate != '' && Date.parse(this.endDate) - Date.parse(this.startDate) >= 0 && !this.errors.has('event-url');
    },
    disabledDatesTo: function disabledDatesTo() {
      return {
        to: new Date(this.startDate)
      };
    },
    disabledDatesFrom: function disabledDatesFrom() {
      return {
        from: new Date(this.endDate)
      };
    },
    calendarLabels: function calendarLabels() {
      return this.$store.state.calendar.calendarLabels;
    },
    labelColor: function labelColor() {
      return function (label) {
        if (label == "business") return "success";else if (label == "work") return "warning";
        if (label == "personal") return "danger";
        if (label == "none") return "primary";
      };
    },
    windowWidth: function windowWidth() {
      return this.$store.state.windowWidth;
    }
  },
  methods: {
    addEvent: function addEvent() {
      var obj = {
        title: this.title,
        startDate: this.startDate,
        endDate: this.endDate,
        label: this.labelLocal,
        url: this.url
      };
      obj.classes = "event-" + this.labelColor(this.labelLocal);
      this.$store.dispatch('calendar/addEventToSimpleCalendar', obj);
    },
    updateMonth: function updateMonth(val) {
      this.showDate = this.$refs.calendar.getIncrementedPeriod(val);
    },
    clearFields: function clearFields() {
      this.title = this.endDate = this.url = "";
      this.id = 0;
      this.labelLocal = "none";
    },
    promptAddNewEvent: function promptAddNewEvent(date) {
      this.disabledFrom = false;
      this.addNewEventDialog(date);
    },
    addNewEventDialog: function addNewEventDialog(date) {
      this.clearFields();
      this.startDate = date;
      this.endDate = date;
      this.activePromptAddEvent = true;
    },
    openAddNewEvent: function openAddNewEvent(date) {
      this.disabledFrom = true;
      this.addNewEventDialog(date);
    },
    openEditEvent: function openEditEvent(event) {
      var e = this.$store.getters['calendar/simpleCalendareventById'](event.id);
      this.id = e.id;
      this.title = e.title;
      this.startDate = e.startDate;
      this.endDate = e.endDate;
      this.url = e.url;
      this.labelLocal = e.label;
      this.activePromptEditEvent = true;
    },
    editEvent: function editEvent() {
      var obj = {
        id: this.id,
        title: this.title,
        startDate: this.startDate,
        endDate: this.endDate,
        label: this.labelLocal,
        url: this.url
      };
      obj.classes = "event-" + this.labelColor(this.labelLocal);
      this.$store.dispatch('calendar/editSimpleCalendarEvent', obj);
    },
    removeEvent: function removeEvent() {
      this.$store.dispatch('calendar/removeSimpleCalendarEvent', this.id);
    },
    eventDragged: function eventDragged(event, date) {
      this.$store.dispatch('calendar/simpleCalendarEventDragged', {
        event: event,
        date: date
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/calendar/SimpleCalendar.vue?vue&type=style&index=0&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/lib/loader.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/calendar/SimpleCalendar.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*=========================================================================================\n    File Name: simple-calnedar.scss\n    Description: Simple Calendar app's styles. This is imported in SimpleCalendar.vue file\n    ----------------------------------------------------------------------------------------\n    Item Name: Vuesax Admin - VueJS Dashboard Admin Template\n      Author: Pixinvent\n    Author URL: http://www.themeforest.net/user/pixinvent\n==========================================================================================*/\n\n/*=========================================================================================\n    File Name: _variables.scss\n    Description: partial- SCSS varibales\n    ----------------------------------------------------------------------------------------\n    Item Name: Vuesax Admin - VueJS Dashboard Admin Template\n      Author: Pixinvent\n    Author URL: http://www.themeforest.net/user/pixinvent\n==========================================================================================*/\n\n/*========================================================\n        SPACING\n=========================================================*/\n\n/*========================================================\n        COLORS\n=========================================================*/\n\n/*========================================================\n        TYPOGRAPHY\n=========================================================*/\n\n/*========================================================\n        TYPOGRAPHY\n=========================================================*/\n\n/*========================================================\n        DARK THEME\n=========================================================*/\n#simple-calendar-app .theme-default.cv-wrapper {\n  padding: 20px;\n}\n#simple-calendar-app .theme-default .cv-header-days {\n  border-bottom: 1px solid #ddd;\n}\n#simple-calendar-app .theme-default .cv-header,\n#simple-calendar-app .theme-default .cv-header-day {\n  background-color: transparent;\n  font-weight: bold;\n}\n#simple-calendar-app .theme-default .cv-day {\n  cursor: pointer;\n}\n#simple-calendar-app .theme-default .cv-day.draghover {\n  box-shadow: inset 0 0 0.2em 0.2em rgba(var(--vs-primary), 1);\n}\n#simple-calendar-app .theme-default .cv-day:not(.outsideOfMonth) {\n  background-color: transparent !important;\n}\n#simple-calendar-app .theme-default .cv-day.outsideOfMonth {\n  background-color: rgba(241, 241, 241, 0.4);\n}\n#simple-calendar-app .theme-default .cv-day .cv-day-number {\n  padding: 1rem;\n}\n@media screen and (max-width: 400px) {\n#simple-calendar-app .theme-default .cv-day .cv-day-number {\n    padding: 0;\n    margin: 5px;\n}\n}\n#simple-calendar-app .theme-default .cv-day.today .cv-day-number {\n  background-color: rgba(var(--vs-primary), 1);\n  border-radius: 50%;\n  display: inline-table;\n  padding: 0.6rem;\n  margin: 0.4rem;\n  color: #fff;\n  min-width: 30px;\n  min-height: 30px;\n  text-align: center;\n}\n@media screen and (max-width: 400px) {\n#simple-calendar-app .theme-default .cv-day.today .cv-day-number {\n    margin: 5px;\n    padding: 0.3rem;\n}\n}\n#simple-calendar-app .theme-default .cv-weeks .cv-week {\n  min-height: 20%;\n}\n#simple-calendar-app .theme-default .cv-weeks .cv-week .cv-event {\n  color: #fff;\n  border: none;\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n}\n#simple-calendar-app .theme-default .cv-weeks .cv-week .cv-event.event-primary {\n  background: rgba(var(--vs-primary), 1) !important;\n}\n#simple-calendar-app .theme-default .cv-weeks .cv-week .cv-event.event-warning {\n  background: rgba(var(--vs-warning), 1) !important;\n}\n#simple-calendar-app .theme-default .cv-weeks .cv-week .cv-event.event-success {\n  background: rgba(var(--vs-success), 1) !important;\n}\n#simple-calendar-app .theme-default .cv-weeks .cv-week .cv-event.event-danger {\n  background: rgba(var(--vs-danger), 1) !important;\n}\n#simple-calendar-app .theme-default .cv-weeks .cv-week .cv-event.toBeContinued:after, #simple-calendar-app .theme-default .cv-weeks .cv-week .cv-event.continued:before {\n  color: #fff !important;\n}\n#simple-calendar-app .theme-default .cv-weeks .cv-week .cv-event:hover {\n  cursor: pointer;\n}\n#simple-calendar-app .theme-default .cv-weeks .cv-week:first-of-type .cv-day {\n  border-top: none;\n}\n.theme-dark .calendar__label-container .con-vs-chip {\n  color: #fff !important;\n}\n.theme-dark #simple-calendar-app .theme-default .cv-day,\n.theme-dark #simple-calendar-app .theme-default .cv-event,\n.theme-dark #simple-calendar-app .theme-default .cv-header-day,\n.theme-dark #simple-calendar-app .theme-default .cv-header-days,\n.theme-dark #simple-calendar-app .theme-default .cv-week,\n.theme-dark #simple-calendar-app .theme-default .cv-weeks {\n  border-color: #414561;\n}\n.theme-dark #simple-calendar-app .theme-default .cv-header button {\n  color: #c2c6dc;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/calendar/SimpleCalendar.vue?vue&type=style&index=0&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/lib/loader.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/calendar/SimpleCalendar.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../node_modules/sass-loader/lib/loader.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SimpleCalendar.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/calendar/SimpleCalendar.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/calendar/SimpleCalendar.vue?vue&type=template&id=1deb3d8e&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/calendar/SimpleCalendar.vue?vue&type=template&id=1deb3d8e& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
    "div",
    { attrs: { id: "simple-calendar-app" } },
    [
      _c(
        "div",
        { staticClass: "vx-card app-fixed-height" },
        [
          _c(
            "calendar-view",
            {
              ref: "calendar",
              staticClass: "theme-default",
              attrs: {
                displayPeriodUom: _vm.calendarView,
                "show-date": _vm.showDate,
                events: _vm.simpleCalendarEvents,
                enableDragDrop: "",
                eventTop: _vm.windowWidth <= 400 ? "2rem" : "3rem",
                eventBorderHeight: "0px",
                eventContentHeight: "1.65rem"
              },
              on: {
                "click-date": _vm.openAddNewEvent,
                "click-event": _vm.openEditEvent,
                "drop-on-date": _vm.eventDragged
              }
            },
            [
              _c(
                "div",
                {
                  staticClass: "mb-4",
                  attrs: { slot: "header" },
                  slot: "header"
                },
                [
                  _c("div", { staticClass: "vx-row no-gutter" }, [
                    _c(
                      "div",
                      {
                        staticClass: "vx-col w-1/3 items-center sm:flex hidden"
                      },
                      [
                        _c(
                          "vs-button",
                          {
                            attrs: {
                              "icon-pack": "feather",
                              icon: "icon-plus"
                            },
                            on: {
                              click: function($event) {
                                _vm.promptAddNewEvent(new Date())
                              }
                            }
                          },
                          [_vm._v("Add")]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass:
                          "vx-col sm:w-1/3 w-full sm:my-0 my-3 flex justify-center order-last"
                      },
                      [
                        _c(
                          "div",
                          { staticClass: "flex items-center" },
                          [
                            _c("feather-icon", {
                              staticClass:
                                "cursor-pointer bg-primary text-white rounded-full",
                              attrs: { icon: "ChevronLeftIcon" },
                              on: {
                                click: function($event) {
                                  return _vm.updateMonth(-1)
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c(
                              "span",
                              {
                                staticClass:
                                  "mx-3 text-xl font-medium whitespace-no-wrap"
                              },
                              [_vm._v(_vm._s(_vm._f("month")(_vm.showDate)))]
                            ),
                            _vm._v(" "),
                            _c("feather-icon", {
                              staticClass:
                                "cursor-pointer bg-primary text-white rounded-full",
                              attrs: { icon: "ChevronRightIcon" },
                              on: {
                                click: function($event) {
                                  return _vm.updateMonth(1)
                                }
                              }
                            })
                          ],
                          1
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass:
                          "vx-col sm:w-1/3 w-full flex justify-center"
                      },
                      [
                        _c(
                          "vs-button",
                          {
                            staticClass: "rounded-r-none p-3 md:px-8 md:py-3",
                            on: {
                              click: function($event) {
                                _vm.calendarView = "month"
                              }
                            }
                          },
                          [_vm._v("Month")]
                        ),
                        _vm._v(" "),
                        _c(
                          "vs-button",
                          {
                            staticClass:
                              "rounded-r-none rounded-l-none p-3 md:px-8 md:py-3",
                            on: {
                              click: function($event) {
                                _vm.calendarView = "week"
                              }
                            }
                          },
                          [_vm._v("Week")]
                        ),
                        _vm._v(" "),
                        _c(
                          "vs-button",
                          {
                            staticClass: "rounded-l-none p-3 md:px-8 md:py-3",
                            on: {
                              click: function($event) {
                                _vm.calendarView = "year"
                              }
                            }
                          },
                          [_vm._v("Year")]
                        )
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "vx-row sm:flex hidden mt-4" }, [
                    _c(
                      "div",
                      { staticClass: "vx-col w-full flex justify-end" },
                      [
                        _c(
                          "div",
                          {
                            staticClass:
                              "flex flex-wrap sm:justify-start justify-center"
                          },
                          [
                            _vm._l(_vm.calendarLabels, function(label, index) {
                              return _c(
                                "div",
                                {
                                  key: index,
                                  staticClass: "flex items-center mr-4 mb-2"
                                },
                                [
                                  _c("div", {
                                    staticClass:
                                      "h-3 w-3 inline-block rounded-full mr-2",
                                    class: "bg-" + label.color
                                  }),
                                  _vm._v(" "),
                                  _c("span", [_vm._v(_vm._s(label.text))])
                                ]
                              )
                            }),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "flex items-center mr-4 mb-2" },
                              [
                                _c("div", {
                                  staticClass:
                                    "h-3 w-3 inline-block rounded-full mr-2 bg-primary"
                                }),
                                _vm._v(" "),
                                _c("span", [_vm._v("None")])
                              ]
                            )
                          ],
                          2
                        )
                      ]
                    )
                  ])
                ]
              )
            ]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "vs-prompt",
        {
          staticClass: "calendar-event-dialog",
          attrs: {
            "vs-title": "Add Event",
            "vs-accept-text": "Add Event",
            "vs-is-valid": _vm.validForm,
            "vs-active": _vm.activePromptAddEvent
          },
          on: {
            "vs-accept": _vm.addEvent,
            "update:vsActive": function($event) {
              _vm.activePromptAddEvent = $event
            },
            "update:vs-active": function($event) {
              _vm.activePromptAddEvent = $event
            }
          }
        },
        [
          _c(
            "div",
            { staticClass: "calendar__label-container flex" },
            [
              _vm.labelLocal != "none"
                ? _c(
                    "vs-chip",
                    {
                      staticClass: "text-white",
                      class: "bg-" + _vm.labelColor(_vm.labelLocal)
                    },
                    [_vm._v(_vm._s(_vm.labelLocal))]
                  )
                : _vm._e(),
              _vm._v(" "),
              _c(
                "vs-dropdown",
                {
                  staticClass: "ml-auto my-2 cursor-pointer",
                  attrs: { "vs-custom-content": "", "vs-trigger-click": "" }
                },
                [
                  _c("feather-icon", {
                    staticClass: "cursor-pointer",
                    attrs: { icon: "TagIcon", svgClasses: "h-5 w-5" },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "vs-dropdown-menu",
                    { staticStyle: { "z-index": "200001" } },
                    [
                      _vm._l(_vm.calendarLabels, function(label, index) {
                        return _c(
                          "vs-dropdown-item",
                          {
                            key: index,
                            on: {
                              click: function($event) {
                                _vm.labelLocal = label.value
                              }
                            }
                          },
                          [
                            _c("div", {
                              staticClass:
                                "h-3 w-3 inline-block rounded-full mr-2",
                              class: "bg-" + label.color
                            }),
                            _vm._v(" "),
                            _c("span", [_vm._v(_vm._s(label.text))])
                          ]
                        )
                      }),
                      _vm._v(" "),
                      _c(
                        "vs-dropdown-item",
                        {
                          on: {
                            click: function($event) {
                              _vm.labelLocal = "none"
                            }
                          }
                        },
                        [
                          _c("div", {
                            staticClass:
                              "h-3 w-3 mr-1 inline-block rounded-full mr-2 bg-primary"
                          }),
                          _vm._v(" "),
                          _c("span", [_vm._v("None")])
                        ]
                      )
                    ],
                    2
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("vs-input", {
            directives: [
              {
                name: "validate",
                rawName: "v-validate",
                value: "required",
                expression: "'required'"
              }
            ],
            staticClass: "w-full",
            attrs: { name: "event-name", "label-placeholder": "Event Title" },
            model: {
              value: _vm.title,
              callback: function($$v) {
                _vm.title = $$v
              },
              expression: "title"
            }
          }),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "my-4" },
            [
              _c("small", { staticClass: "date-label" }, [
                _vm._v("Start Date")
              ]),
              _vm._v(" "),
              _c("datepicker", {
                attrs: { name: "start-date", disabled: _vm.disabledFrom },
                model: {
                  value: _vm.startDate,
                  callback: function($$v) {
                    _vm.startDate = $$v
                  },
                  expression: "startDate"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "my-4" },
            [
              _c("small", { staticClass: "date-label" }, [_vm._v("End Date")]),
              _vm._v(" "),
              _c("datepicker", {
                attrs: { disabledDates: _vm.disabledDatesTo, name: "end-date" },
                model: {
                  value: _vm.endDate,
                  callback: function($$v) {
                    _vm.endDate = $$v
                  },
                  expression: "endDate"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c("vs-input", {
            directives: [
              {
                name: "validate",
                rawName: "v-validate",
                value: "url",
                expression: "'url'"
              }
            ],
            staticClass: "w-full mt-6",
            attrs: {
              name: "event-url",
              "label-placeholder": "Event URL",
              color: !_vm.errors.has("event-url") ? "success" : "danger"
            },
            model: {
              value: _vm.url,
              callback: function($$v) {
                _vm.url = $$v
              },
              expression: "url"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "vs-prompt",
        {
          staticClass: "calendar-event-dialog",
          attrs: {
            "vs-title": "Edit Event",
            "vs-accept-text": "Submit",
            "vs-cancel-text": "Remove",
            "vs-button-cancel": "border",
            "vs-is-valid": _vm.validForm,
            "vs-active": _vm.activePromptEditEvent
          },
          on: {
            "vs-cancel": _vm.removeEvent,
            "vs-accept": _vm.editEvent,
            "update:vsActive": function($event) {
              _vm.activePromptEditEvent = $event
            },
            "update:vs-active": function($event) {
              _vm.activePromptEditEvent = $event
            }
          }
        },
        [
          _c(
            "div",
            { staticClass: "calendar__label-container flex" },
            [
              _vm.labelLocal != "none"
                ? _c(
                    "vs-chip",
                    {
                      staticClass: "text-white",
                      class: "bg-" + _vm.labelColor(_vm.labelLocal)
                    },
                    [_vm._v(_vm._s(_vm.labelLocal))]
                  )
                : _vm._e(),
              _vm._v(" "),
              _c(
                "vs-dropdown",
                {
                  staticClass: "ml-auto my-2 cursor-pointer",
                  attrs: { "vs-custom-content": "" }
                },
                [
                  _c("feather-icon", {
                    attrs: { icon: "TagIcon", svgClasses: "h-5 w-5" },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "vs-dropdown-menu",
                    { staticStyle: { "z-index": "200001" } },
                    [
                      _vm._l(_vm.calendarLabels, function(label, index) {
                        return _c(
                          "vs-dropdown-item",
                          {
                            key: index,
                            on: {
                              click: function($event) {
                                _vm.labelLocal = label.value
                              }
                            }
                          },
                          [
                            _c("div", {
                              staticClass:
                                "h-3 w-3 inline-block rounded-full mr-2",
                              class: "bg-" + label.color
                            }),
                            _vm._v(" "),
                            _c("span", [_vm._v(_vm._s(label.text))])
                          ]
                        )
                      }),
                      _vm._v(" "),
                      _c(
                        "vs-dropdown-item",
                        {
                          on: {
                            click: function($event) {
                              _vm.labelLocal = "none"
                            }
                          }
                        },
                        [
                          _c("div", {
                            staticClass:
                              "h-3 w-3 mr-1 inline-block rounded-full mr-2 bg-primary"
                          }),
                          _vm._v(" "),
                          _c("span", [_vm._v("None")])
                        ]
                      )
                    ],
                    2
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("vs-input", {
            directives: [
              {
                name: "validate",
                rawName: "v-validate",
                value: "required",
                expression: "'required'"
              }
            ],
            staticClass: "w-full",
            attrs: { name: "event-name", "label-placeholder": "Event Title" },
            model: {
              value: _vm.title,
              callback: function($$v) {
                _vm.title = $$v
              },
              expression: "title"
            }
          }),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "my-4" },
            [
              _c("small", { staticClass: "date-label" }, [
                _vm._v("Start Date")
              ]),
              _vm._v(" "),
              _c("datepicker", {
                attrs: {
                  disabledDates: _vm.disabledDatesFrom,
                  name: "start-date"
                },
                model: {
                  value: _vm.startDate,
                  callback: function($$v) {
                    _vm.startDate = $$v
                  },
                  expression: "startDate"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "my-4" },
            [
              _c("small", { staticClass: "date-label" }, [_vm._v("End Date")]),
              _vm._v(" "),
              _c("datepicker", {
                attrs: { disabledDates: _vm.disabledDatesTo, name: "end-date" },
                model: {
                  value: _vm.endDate,
                  callback: function($$v) {
                    _vm.endDate = $$v
                  },
                  expression: "endDate"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c("vs-input", {
            directives: [
              {
                name: "validate",
                rawName: "v-validate",
                value: "url",
                expression: "'url'"
              }
            ],
            staticClass: "w-full mt-6",
            attrs: {
              name: "event-url",
              "label-placeholder": "Event URL",
              color: !_vm.errors.has("event-url") ? "success" : "danger"
            },
            model: {
              value: _vm.url,
              callback: function($$v) {
                _vm.url = $$v
              },
              expression: "url"
            }
          })
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

/***/ "./resources/js/src/views/apps/calendar/SimpleCalendar.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/src/views/apps/calendar/SimpleCalendar.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SimpleCalendar_vue_vue_type_template_id_1deb3d8e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SimpleCalendar.vue?vue&type=template&id=1deb3d8e& */ "./resources/js/src/views/apps/calendar/SimpleCalendar.vue?vue&type=template&id=1deb3d8e&");
/* harmony import */ var _SimpleCalendar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SimpleCalendar.vue?vue&type=script&lang=js& */ "./resources/js/src/views/apps/calendar/SimpleCalendar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _SimpleCalendar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SimpleCalendar.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/views/apps/calendar/SimpleCalendar.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SimpleCalendar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SimpleCalendar_vue_vue_type_template_id_1deb3d8e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SimpleCalendar_vue_vue_type_template_id_1deb3d8e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/apps/calendar/SimpleCalendar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/apps/calendar/SimpleCalendar.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/src/views/apps/calendar/SimpleCalendar.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SimpleCalendar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SimpleCalendar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/calendar/SimpleCalendar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SimpleCalendar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/apps/calendar/SimpleCalendar.vue?vue&type=style&index=0&lang=scss&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/src/views/apps/calendar/SimpleCalendar.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SimpleCalendar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../node_modules/sass-loader/lib/loader.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SimpleCalendar.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/calendar/SimpleCalendar.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SimpleCalendar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SimpleCalendar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SimpleCalendar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SimpleCalendar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SimpleCalendar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/apps/calendar/SimpleCalendar.vue?vue&type=template&id=1deb3d8e&":
/*!************************************************************************************************!*\
  !*** ./resources/js/src/views/apps/calendar/SimpleCalendar.vue?vue&type=template&id=1deb3d8e& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SimpleCalendar_vue_vue_type_template_id_1deb3d8e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SimpleCalendar.vue?vue&type=template&id=1deb3d8e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/calendar/SimpleCalendar.vue?vue&type=template&id=1deb3d8e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SimpleCalendar_vue_vue_type_template_id_1deb3d8e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SimpleCalendar_vue_vue_type_template_id_1deb3d8e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);