(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[24],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/charts/chartjs/Chartjs.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/charts-and-maps/charts/chartjs/Chartjs.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChartjsBarChart_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChartjsBarChart.vue */ "./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsBarChart.vue");
/* harmony import */ var _ChartjsLineChart_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChartjsLineChart.vue */ "./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsLineChart.vue");
/* harmony import */ var _ChartjsPieChart_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ChartjsPieChart.vue */ "./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsPieChart.vue");
/* harmony import */ var _ChartjsRadarChart_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ChartjsRadarChart.vue */ "./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsRadarChart.vue");
/* harmony import */ var _ChartjsPolarAreaChart_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ChartjsPolarAreaChart.vue */ "./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsPolarAreaChart.vue");
/* harmony import */ var _ChartjsDoughnutChart_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ChartjsDoughnutChart.vue */ "./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsDoughnutChart.vue");
/* harmony import */ var _ChartjsHorizontalBarChart_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ChartjsHorizontalBarChart.vue */ "./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsHorizontalBarChart.vue");
/* harmony import */ var _ChartjsBubbleChart_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ChartjsBubbleChart.vue */ "./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsBubbleChart.vue");
/* harmony import */ var _ChartjsScatterChart_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ChartjsScatterChart.vue */ "./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsScatterChart.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    ChartjsBarChart: _ChartjsBarChart_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    ChartjsLineChart: _ChartjsLineChart_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    ChartjsPieChart: _ChartjsPieChart_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    ChartjsRadarChart: _ChartjsRadarChart_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    ChartjsPolarAreaChart: _ChartjsPolarAreaChart_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    ChartjsDoughnutChart: _ChartjsDoughnutChart_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    ChartjsHorizontalBarChart: _ChartjsHorizontalBarChart_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    ChartjsScatterChart: _ChartjsScatterChart_vue__WEBPACK_IMPORTED_MODULE_8__["default"],
    ChartjsBubbleChart: _ChartjsBubbleChart_vue__WEBPACK_IMPORTED_MODULE_7__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsBarChart.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsBarChart.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _charts_components_ChartjsComponentBarChart_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./charts-components/ChartjsComponentBarChart.vue */ "./resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentBarChart.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      data: {
        labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
        datasets: [{
          label: "Population (millions)",
          // backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"],
          backgroundColor: ["#7367F0", "#28C76F", "#EA5455", "#FF9F43", "#1E1E1E"],
          data: [2478, 5267, 734, 784, 433]
        }]
      },
      options: {
        legend: {
          display: false
        },
        title: {
          display: true,
          text: 'Predicted world population (millions) in 2050'
        }
      }
    };
  },
  components: {
    ChartjsComponentBarChart: _charts_components_ChartjsComponentBarChart_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsBubbleChart.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsBubbleChart.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _charts_components_ChartjsComponentBubbleChart_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./charts-components/ChartjsComponentBubbleChart.vue */ "./resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentBubbleChart.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      data: {
        labels: "Africa",
        datasets: [{
          label: ["China"],
          backgroundColor: "rgba(255,221,50,0.2)",
          borderColor: "rgba(255,221,50,1)",
          data: [{
            x: 21269017,
            y: 5.245,
            r: 15
          }]
        }, {
          label: ["Denmark"],
          backgroundColor: "rgba(60,186,159,0.2)",
          borderColor: "rgba(60,186,159,1)",
          data: [{
            x: 258702,
            y: 7.526,
            r: 10
          }]
        }, {
          label: ["Germany"],
          backgroundColor: "rgba(0,0,0,0.2)",
          borderColor: "#000",
          data: [{
            x: 3979083,
            y: 6.994,
            r: 15
          }]
        }, {
          label: ["Japan"],
          backgroundColor: "rgba(193,46,12,0.2)",
          borderColor: "rgba(193,46,12,1)",
          data: [{
            x: 4931877,
            y: 5.921,
            r: 15
          }]
        }]
      },
      options: {
        title: {
          display: true,
          text: 'Predicted world population (millions) in 2050'
        },
        scales: {
          yAxes: [{
            scaleLabel: {
              display: true,
              labelString: "Happiness"
            }
          }],
          xAxes: [{
            scaleLabel: {
              display: true,
              labelString: "GDP (PPP)"
            }
          }]
        }
      }
    };
  },
  components: {
    ChartjsComponentBubbleChart: _charts_components_ChartjsComponentBubbleChart_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsDoughnutChart.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsDoughnutChart.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _charts_components_ChartjsComponentDoughnutChart_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./charts-components/ChartjsComponentDoughnutChart.vue */ "./resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentDoughnutChart.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      data: {
        labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
        datasets: [{
          label: "Population (millions)",
          backgroundColor: ["#7367F0", "#28C76F", "#EA5455", "#FF9F43", "#1E1E1E"],
          data: [2478, 5267, 734, 784, 433]
        }]
      },
      options: {
        title: {
          display: true,
          text: 'Predicted world population (millions) in 2050'
        }
      }
    };
  },
  components: {
    ChartjsComponentDoughnutChart: _charts_components_ChartjsComponentDoughnutChart_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsHorizontalBarChart.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsHorizontalBarChart.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _charts_components_ChartjsComponentHorizontalBarChart_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./charts-components/ChartjsComponentHorizontalBarChart.vue */ "./resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentHorizontalBarChart.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      data: {
        labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
        datasets: [{
          label: "Population (millions)",
          backgroundColor: ["#7367F0", "#28C76F", "#EA5455", "#FF9F43", "#1E1E1E"],
          data: [2478, 5267, 734, 784, 433]
        }]
      },
      options: {
        legend: {
          display: false
        },
        title: {
          display: true,
          text: 'Predicted world population (millions) in 2050'
        }
      }
    };
  },
  components: {
    ChartjsComponentHorizontalBarChart: _charts_components_ChartjsComponentHorizontalBarChart_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsLineChart.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsLineChart.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _charts_components_ChartjsComponentLineChart_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./charts-components/ChartjsComponentLineChart.vue */ "./resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentLineChart.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      data: {
        labels: [1500, 1600, 1700, 1750, 1800, 1850, 1900, 1950, 1999, 2050],
        datasets: [{
          data: [86, 114, 106, 106, 107, 111, 133, 221, 783, 2478],
          label: "Africa",
          borderColor: "#7367F0",
          fill: false
        }, {
          data: [282, 350, 411, 502, 635, 809, 947, 1402, 3700, 5267],
          label: "Asia",
          borderColor: "#28C76F",
          fill: false
        }, {
          data: [168, 170, 178, 190, 203, 276, 408, 547, 675, 734],
          label: "Europe",
          borderColor: "#EA5455",
          fill: false
        }, {
          data: [40, 20, 10, 16, 24, 38, 74, 167, 508, 784],
          label: "Latin America",
          borderColor: "#FF9F43",
          fill: false
        }, {
          data: [6, 3, 2, 2, 7, 26, 82, 172, 312, 433],
          label: "North America",
          borderColor: "#1E1E1E",
          fill: false
        }]
      },
      options: {
        title: {
          display: true,
          text: 'World population per region (in millions)'
        }
      }
    };
  },
  components: {
    ChartjsComponentLineChart: _charts_components_ChartjsComponentLineChart_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsPieChart.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsPieChart.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _charts_components_ChartjsComponentPieChart_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./charts-components/ChartjsComponentPieChart.vue */ "./resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentPieChart.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      data: {
        labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
        datasets: [{
          label: "Population (millions)",
          backgroundColor: ["#7367F0", "#28C76F", "#EA5455", "#FF9F43", "#1E1E1E"],
          data: [2478, 5267, 734, 784, 433]
        }]
      },
      options: {
        title: {
          display: true,
          text: 'Predicted world population (millions) in 2050'
        }
      }
    };
  },
  components: {
    ChartjsComponentPieChart: _charts_components_ChartjsComponentPieChart_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsPolarAreaChart.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsPolarAreaChart.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _charts_components_ChartjsComponentPolarAreaChart_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./charts-components/ChartjsComponentPolarAreaChart.vue */ "./resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentPolarAreaChart.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      data: {
        labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
        datasets: [{
          label: "Population (millions)",
          backgroundColor: ["#7367F0", "#28C76F", "#EA5455", "#FF9F43", "#1E1E1E"],
          data: [2478, 5267, 734, 784, 433]
        }]
      },
      options: {
        title: {
          display: true,
          text: 'Predicted world population (millions) in 2050'
        }
      }
    };
  },
  components: {
    ChartjsComponentPolarAreaChart: _charts_components_ChartjsComponentPolarAreaChart_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsRadarChart.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsRadarChart.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _charts_components_ChartjsComponentRadarChart_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./charts-components/ChartjsComponentRadarChart.vue */ "./resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentRadarChart.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      data: {
        labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
        datasets: [{
          label: "1950",
          fill: true,
          backgroundColor: "rgba(179,181,198,0.2)",
          borderColor: "rgba(179,181,198,1)",
          pointBorderColor: "#fff",
          pointBackgroundColor: "rgba(179,181,198,1)",
          data: [8.77, 55.61, 21.69, 6.62, 6.82]
        }, {
          label: "2050",
          fill: true,
          backgroundColor: "rgba(255,99,132,0.2)",
          borderColor: "rgba(255,99,132,1)",
          pointBorderColor: "#fff",
          pointBackgroundColor: "rgba(255,99,132,1)",
          data: [25.48, 54.16, 7.61, 8.06, 4.45]
        }]
      },
      options: {
        title: {
          display: true,
          text: 'Distribution in % of world population'
        }
      }
    };
  },
  components: {
    ChartjsComponentRadarChart: _charts_components_ChartjsComponentRadarChart_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsScatterChart.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsScatterChart.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _charts_components_ChartjsComponentScatterChart_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./charts-components/ChartjsComponentScatterChart.vue */ "./resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentScatterChart.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      data: {
        datasets: [{
          label: "My First dataset",
          data: [{
            x: 65,
            y: 28
          }, {
            x: 59,
            y: 48
          }, {
            x: 80,
            y: 40
          }, {
            x: 81,
            y: 19
          }, {
            x: 56,
            y: 86
          }, {
            x: 55,
            y: 27
          }, {
            x: 40,
            y: 89
          }],
          backgroundColor: "rgba(209,212,219,.3)",
          borderColor: "transparent",
          pointBorderColor: "#D1D4DB",
          pointBackgroundColor: "#FFF",
          pointBorderWidth: 2,
          pointHoverBorderWidth: 2,
          pointRadius: 4
        }, {
          label: "My Second dataset",
          data: [{
            x: 45,
            y: 17
          }, {
            x: 25,
            y: 62
          }, {
            x: 16,
            y: 78
          }, {
            x: 36,
            y: 88
          }, {
            x: 67,
            y: 26
          }, {
            x: 18,
            y: 48
          }, {
            x: 76,
            y: 73
          }],
          backgroundColor: "rgba(81,117,224,.6)",
          borderColor: "transparent",
          pointBorderColor: "#5175E0",
          pointBackgroundColor: "#FFF",
          pointBorderWidth: 2,
          pointHoverBorderWidth: 2,
          pointRadius: 4
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        responsiveAnimationDuration: 800,
        title: {
          display: false,
          text: 'Chart.js Scatter Chart'
        },
        scales: {
          xAxes: [{
            position: 'top',
            gridLines: {
              zeroLineColor: "rgba(0,255,0,1)",
              color: "#f3f3f3",
              drawTicks: false
            },
            scaleLabel: {
              display: true,
              labelString: 'x axis'
            }
          }],
          yAxes: [{
            position: 'right',
            gridLines: {
              zeroLineColor: "rgba(0,255,0,1)",
              color: "#f3f3f3",
              drawTicks: false
            },
            scaleLabel: {
              display: true,
              labelString: 'y axis'
            }
          }]
        }
      }
    };
  },
  components: {
    ChartjsComponentScatterChart: _charts_components_ChartjsComponentScatterChart_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentBarChart.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentBarChart.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_chartjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-chartjs */ "./node_modules/vue-chartjs/es/index.js");
//
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
  "extends": vue_chartjs__WEBPACK_IMPORTED_MODULE_0__["Bar"],
  props: {
    data: {
      type: Object,
      "default": null
    },
    options: {
      type: Object,
      "default": null
    }
  },
  mounted: function mounted() {
    this.renderChart(this.data, this.options);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentBubbleChart.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentBubbleChart.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_chartjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-chartjs */ "./node_modules/vue-chartjs/es/index.js");
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
  "extends": vue_chartjs__WEBPACK_IMPORTED_MODULE_0__["Bubble"],
  props: {
    data: {
      type: Object,
      "default": null
    },
    options: {
      type: Object,
      "default": null
    }
  },
  mounted: function mounted() {
    this.renderChart(this.data, this.options);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentDoughnutChart.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentDoughnutChart.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_chartjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-chartjs */ "./node_modules/vue-chartjs/es/index.js");
//
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
  "extends": vue_chartjs__WEBPACK_IMPORTED_MODULE_0__["Doughnut"],
  props: {
    data: {
      type: Object,
      "default": null
    },
    options: {
      type: Object,
      "default": null
    }
  },
  mounted: function mounted() {
    this.renderChart(this.data, this.options);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentHorizontalBarChart.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentHorizontalBarChart.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_chartjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-chartjs */ "./node_modules/vue-chartjs/es/index.js");
//
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
  "extends": vue_chartjs__WEBPACK_IMPORTED_MODULE_0__["HorizontalBar"],
  props: {
    data: {
      type: Object,
      "default": null
    },
    options: {
      type: Object,
      "default": null
    }
  },
  mounted: function mounted() {
    this.renderChart(this.data, this.options);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentLineChart.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentLineChart.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_chartjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-chartjs */ "./node_modules/vue-chartjs/es/index.js");
//
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
  "extends": vue_chartjs__WEBPACK_IMPORTED_MODULE_0__["Line"],
  props: {
    data: {
      type: Object,
      "default": null
    },
    options: {
      type: Object,
      "default": null
    }
  },
  mounted: function mounted() {
    this.renderChart(this.data, this.options);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentPieChart.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentPieChart.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_chartjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-chartjs */ "./node_modules/vue-chartjs/es/index.js");
//
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
  "extends": vue_chartjs__WEBPACK_IMPORTED_MODULE_0__["Pie"],
  props: {
    data: {
      type: Object,
      "default": null
    },
    options: {
      type: Object,
      "default": null
    }
  },
  mounted: function mounted() {
    this.renderChart(this.data, this.options);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentPolarAreaChart.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentPolarAreaChart.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_chartjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-chartjs */ "./node_modules/vue-chartjs/es/index.js");
//
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
  "extends": vue_chartjs__WEBPACK_IMPORTED_MODULE_0__["PolarArea"],
  props: {
    data: {
      type: Object,
      "default": null
    },
    options: {
      type: Object,
      "default": null
    }
  },
  mounted: function mounted() {
    this.renderChart(this.data, this.options);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentRadarChart.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentRadarChart.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_chartjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-chartjs */ "./node_modules/vue-chartjs/es/index.js");
//
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
  "extends": vue_chartjs__WEBPACK_IMPORTED_MODULE_0__["Radar"],
  props: {
    data: {
      type: Object,
      "default": null
    },
    options: {
      type: Object,
      "default": null
    }
  },
  mounted: function mounted() {
    this.renderChart(this.data, this.options);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentScatterChart.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentScatterChart.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_chartjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-chartjs */ "./node_modules/vue-chartjs/es/index.js");
//
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
  "extends": vue_chartjs__WEBPACK_IMPORTED_MODULE_0__["Scatter"],
  props: {
    data: {
      type: Object,
      "default": null
    },
    options: {
      type: Object,
      "default": null
    }
  },
  mounted: function mounted() {
    this.renderChart(this.data, this.options);
  }
});

/***/ }),

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-SG": "./node_modules/moment/locale/en-SG.js",
	"./en-SG.js": "./node_modules/moment/locale/en-SG.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./ga": "./node_modules/moment/locale/ga.js",
	"./ga.js": "./node_modules/moment/locale/ga.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it-ch": "./node_modules/moment/locale/it-ch.js",
	"./it-ch.js": "./node_modules/moment/locale/it-ch.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ku": "./node_modules/moment/locale/ku.js",
	"./ku.js": "./node_modules/moment/locale/ku.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/moment/locale/mn.js",
	"./mn.js": "./node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
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
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/charts/chartjs/Chartjs.vue?vue&type=template&id=191fa579&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/charts-and-maps/charts/chartjs/Chartjs.vue?vue&type=template&id=191fa579& ***!
  \****************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { attrs: { id: "extra-component-chartjs-demo" } }, [
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "vx-row" }, [
      _c(
        "div",
        { staticClass: "vx-col w-full md:w-1/2" },
        [_c("chartjs-line-chart")],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "vx-col w-full md:w-1/2" },
        [_c("chartjs-bar-chart")],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "vx-col w-full md:w-1/2" },
        [_c("chartjs-horizontal-bar-chart")],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "vx-col w-full md:w-1/2" },
        [_c("chartjs-pie-chart")],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "vx-col w-full md:w-1/2" },
        [_c("chartjs-doughnut-chart")],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "vx-col w-full md:w-1/2" },
        [_c("chartjs-radar-chart")],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "vx-col w-full md:w-1/2" },
        [_c("chartjs-polar-area-chart")],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "vx-col w-full md:w-1/2" },
        [_c("chartjs-bubble-chart")],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "vx-col w-full" },
        [_c("chartjs-scatter-chart")],
        1
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "mb-4" }, [
      _vm._v("You can easily create reuseable chart components. "),
      _c(
        "a",
        {
          attrs: {
            href: "https://vue-chartjs.org/",
            target: "_blank",
            rel: "nofollow"
          }
        },
        [_vm._v("vue-chartjs")]
      ),
      _vm._v(" is a wrapper for Chart.js. Read full documnetation "),
      _c(
        "a",
        {
          attrs: {
            href: "https://vue-chartjs.org/guide/",
            target: "_blank",
            rel: "nofollow"
          }
        },
        [_vm._v("here")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsBarChart.vue?vue&type=template&id=d2326ab8&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsBarChart.vue?vue&type=template&id=d2326ab8& ***!
  \************************************************************************************************************************************************************************************************************************************************/
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
    "vx-card",
    {
      staticClass: "mb-base",
      attrs: { title: "Bar Chart", "code-toggler": "" }
    },
    [
      _c(
        "div",
        { staticClass: "mt-5" },
        [
          _c("chartjs-component-bar-chart", {
            attrs: { height: 250, data: _vm.data, options: _vm.options }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("template", { slot: "codeContainer" }, [
        _vm._v(
          '\n<script>\nimport { Bar } from \'vue-chartjs\'\n\nexport default {\n  extends: Line,\n  data() {\n    return {\n      data: {\n        labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],\n        datasets: [{\n          label: "Population (millions)",\n          backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"],\n          data: [2478, 5267, 734, 784, 433]\n        }]\n      },\n      options: {\n        legend: { display: false },\n        title: {\n          display: true,\n          text: \'Predicted world population (millions) in 2050\'\n        }\n      }\n    }\n  }\n  mounted () {\n    this.renderChart(this.data, this.options)\n  }\n}\n</script>\n        '
        )
      ])
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsBubbleChart.vue?vue&type=template&id=60c5daae&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsBubbleChart.vue?vue&type=template&id=60c5daae& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
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
    "vx-card",
    {
      staticClass: "mb-base",
      attrs: { title: "Bubble Chart", "code-toggler": "" }
    },
    [
      _c(
        "div",
        { staticClass: "mt-5" },
        [
          _c("chartjs-component-bubble-chart", {
            attrs: { height: 250, data: _vm.data, options: _vm.options }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("template", { slot: "codeContainer" }, [
        _vm._v(
          '\n<script>\nimport { Bubble } from \'vue-chartjs\'\n\nexport default {\n  extends: Line,\n  data() {\n    return {\n      data: {\n        labels: "Africa",\n        datasets: [{\n          label: ["China"],\n          backgroundColor: "rgba(255,221,50,0.2)",\n          borderColor: "rgba(255,221,50,1)",\n          data: [{\n            x: 21269017,\n            y: 5.245,\n            r: 15\n          }]\n        }, {\n          label: ["Denmark"],\n          backgroundColor: "rgba(60,186,159,0.2)",\n          borderColor: "rgba(60,186,159,1)",\n          data: [{\n            x: 258702,\n            y: 7.526,\n            r: 10\n          }]\n        }, {\n          label: ["Germany"],\n          backgroundColor: "rgba(0,0,0,0.2)",\n          borderColor: "#000",\n          data: [{\n            x: 3979083,\n            y: 6.994,\n            r: 15\n          }]\n        }, {\n          label: ["Japan"],\n          backgroundColor: "rgba(193,46,12,0.2)",\n          borderColor: "rgba(193,46,12,1)",\n          data: [{\n            x: 4931877,\n            y: 5.921,\n            r: 15\n          }]\n        }]\n      },\n      options: {\n        title: {\n          display: true,\n          text: \'Predicted world population (millions) in 2050\'\n        },\n        scales: {\n          yAxes: [{\n            scaleLabel: {\n              display: true,\n              labelString: "Happiness"\n            }\n          }],\n          xAxes: [{\n            scaleLabel: {\n              display: true,\n              labelString: "GDP (PPP)"\n            }\n          }]\n        }\n      }\n    }\n  }\n  mounted () {\n    this.renderChart(this.data, this.options)\n  }\n}\n</script>\n        '
        )
      ])
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsDoughnutChart.vue?vue&type=template&id=1742df9a&":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsDoughnutChart.vue?vue&type=template&id=1742df9a& ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
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
    "vx-card",
    {
      staticClass: "mb-base",
      attrs: { title: "Doughnut Chart", "code-toggler": "" }
    },
    [
      _c(
        "div",
        { staticClass: "mt-5" },
        [
          _c("chartjs-component-doughnut-chart", {
            attrs: { height: 250, data: _vm.data, options: _vm.options }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("template", { slot: "codeContainer" }, [
        _vm._v(
          '\n<script>\nimport { Doughnut } from \'vue-chartjs\'\n\nexport default {\n  extends: Line,\n  data() {\n    return {\n      data: {\n        labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],\n        datasets: [{\n          label: "Population (millions)",\n          backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"],\n          data: [2478, 5267, 734, 784, 433]\n        }]\n      },\n      options: {\n        title: {\n          display: true,\n          text: \'Predicted world population (millions) in 2050\'\n        }\n      }\n    }\n  }\n  mounted () {\n    this.renderChart(this.data, this.options)\n  }\n}\n</script>\n        '
        )
      ])
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsHorizontalBarChart.vue?vue&type=template&id=0b73c7a8&":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsHorizontalBarChart.vue?vue&type=template&id=0b73c7a8& ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
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
    "vx-card",
    {
      staticClass: "mb-base",
      attrs: { title: "Horizontal Bar Chart", "code-toggler": "" }
    },
    [
      _c(
        "div",
        { staticClass: "mt-5" },
        [
          _c("chartjs-component-horizontal-bar-chart", {
            attrs: { height: 250, data: _vm.data, options: _vm.options }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("template", { slot: "codeContainer" }, [
        _vm._v(
          '\n<script>\nimport { HorizontalBar } from \'vue-chartjs\'\n\nexport default {\n  extends: Line,\n  data() {\n    return {\n      data: {\n        labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],\n        datasets: [{\n          label: "Population (millions)",\n          backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"],\n          data: [2478, 5267, 734, 784, 433]\n        }]\n      },\n      options: {\n        legend: { display: false },\n        title: {\n          display: true,\n          text: \'Predicted world population (millions) in 2050\'\n        }\n      }\n    }\n  }\n  mounted () {\n    this.renderChart(this.data, this.options)\n  }\n}\n</script>\n        '
        )
      ])
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsLineChart.vue?vue&type=template&id=4dd30ffe&":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsLineChart.vue?vue&type=template&id=4dd30ffe& ***!
  \*************************************************************************************************************************************************************************************************************************************************/
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
    "vx-card",
    {
      staticClass: "mb-base",
      attrs: { title: "Line Chart", "code-toggler": "" }
    },
    [
      _c(
        "div",
        { staticClass: "mt-5" },
        [
          _c("chartjs-component-line-chart", {
            attrs: { height: 250, data: _vm.data, options: _vm.options }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("template", { slot: "codeContainer" }, [
        _vm._v(
          '\n<script>\nimport { Line } from \'vue-chartjs\'\n\nexport default {\n  extends: Line,\n  data() {\n    return {\n      data: {\n        labels: [1500, 1600, 1700, 1750, 1800, 1850, 1900, 1950, 1999, 2050],\n        datasets: [{\n          data: [86, 114, 106, 106, 107, 111, 133, 221, 783, 2478],\n          label: "Africa",\n          borderColor: "#3e95cd",\n          fill: false\n        }, {\n          data: [282, 350, 411, 502, 635, 809, 947, 1402, 3700, 5267],\n          label: "Asia",\n          borderColor: "#8e5ea2",\n          fill: false\n        }, {\n          data: [168, 170, 178, 190, 203, 276, 408, 547, 675, 734],\n          label: "Europe",\n          borderColor: "#3cba9f",\n          fill: false\n        }, {\n          data: [40, 20, 10, 16, 24, 38, 74, 167, 508, 784],\n          label: "Latin America",\n          borderColor: "#e8c3b9",\n          fill: false\n        }, {\n          data: [6, 3, 2, 2, 7, 26, 82, 172, 312, 433],\n          label: "North America",\n          borderColor: "#c45850",\n          fill: false\n        }]\n      },\n      options: {\n        title: {\n          display: true,\n          text: \'World population per region (in millions)\'\n        }\n      }\n    }\n  },\n  mounted () {\n    this.renderChart(this.data, this.options)\n  }\n}\n</script>\n        '
        )
      ])
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsPieChart.vue?vue&type=template&id=4208ad4b&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsPieChart.vue?vue&type=template&id=4208ad4b& ***!
  \************************************************************************************************************************************************************************************************************************************************/
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
    "vx-card",
    {
      staticClass: "mb-base",
      attrs: { title: "Pie Chart", "code-toggler": "" }
    },
    [
      _c(
        "div",
        { staticClass: "mt-5" },
        [
          _c("chartjs-component-pie-chart", {
            attrs: { height: 250, data: _vm.data, options: _vm.options }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("template", { slot: "codeContainer" }, [
        _vm._v(
          '\n<script>\nimport { Pie } from \'vue-chartjs\'\n\nexport default {\n  extends: Line,\n  data() {\n    return {\n      data: {\n        labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],\n        datasets: [{\n          label: "Population (millions)",\n          backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"],\n          data: [2478, 5267, 734, 784, 433]\n        }]\n      },\n      options: {\n        title: {\n          display: true,\n          text: \'Predicted world population (millions) in 2050\'\n        }\n      }\n    }\n  }\n  mounted () {\n    this.renderChart(this.data, this.options)\n  }\n}\n</script>\n        '
        )
      ])
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsPolarAreaChart.vue?vue&type=template&id=6110a00c&":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsPolarAreaChart.vue?vue&type=template&id=6110a00c& ***!
  \******************************************************************************************************************************************************************************************************************************************************/
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
    "vx-card",
    {
      staticClass: "mb-base",
      attrs: { title: "Polar Area Chart", "code-toggler": "" }
    },
    [
      _c(
        "div",
        { staticClass: "mt-5" },
        [
          _c("chartjs-component-polar-area-chart", {
            attrs: { height: 250, data: _vm.data, options: _vm.options }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("template", { slot: "codeContainer" }, [
        _vm._v(
          '\n<script>\nimport { PolarArea } from \'vue-chartjs\'\n\nexport default {\n  extends: Line,\n  data() {\n    return {\n      data: {\n        labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],\n        datasets: [{\n          label: "Population (millions)",\n          backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"],\n          data: [2478, 5267, 734, 784, 433]\n        }]\n      },\n      options: {\n        title: {\n          display: true,\n          text: \'Predicted world population (millions) in 2050\'\n        }\n      }\n    }\n  }\n  mounted () {\n    this.renderChart(this.data, this.options)\n  }\n}\n</script>\n        '
        )
      ])
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsRadarChart.vue?vue&type=template&id=4015d8d1&":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsRadarChart.vue?vue&type=template&id=4015d8d1& ***!
  \**************************************************************************************************************************************************************************************************************************************************/
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
    "vx-card",
    {
      staticClass: "mb-base",
      attrs: { title: "Radar Chart", "code-toggler": "" }
    },
    [
      _c(
        "div",
        { staticClass: "mt-5" },
        [
          _c("chartjs-component-radar-chart", {
            attrs: { height: 250, data: _vm.data, options: _vm.options }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("template", { slot: "codeContainer" }, [
        _vm._v(
          '\n<script>\nimport { Radar } from \'vue-chartjs\'\n\nexport default {\n  extends: Line,\n  data() {\n    return {\n      data: {\n        labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],\n        datasets: [{\n          label: "1950",\n          fill: true,\n          backgroundColor: "rgba(179,181,198,0.2)",\n          borderColor: "rgba(179,181,198,1)",\n          pointBorderColor: "#fff",\n          pointBackgroundColor: "rgba(179,181,198,1)",\n          data: [8.77, 55.61, 21.69, 6.62, 6.82]\n        }, {\n          label: "2050",\n          fill: true,\n          backgroundColor: "rgba(255,99,132,0.2)",\n          borderColor: "rgba(255,99,132,1)",\n          pointBorderColor: "#fff",\n          pointBackgroundColor: "rgba(255,99,132,1)",\n          pointBorderColor: "#fff",\n          data: [25.48, 54.16, 7.61, 8.06, 4.45]\n        }]\n      },\n      options: {\n        title: {\n          display: true,\n          text: \'Distribution in % of world population\'\n        }\n      }\n    }\n  }\n  mounted () {\n    this.renderChart(this.data, this.options)\n  }\n}\n</script>\n        '
        )
      ])
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsScatterChart.vue?vue&type=template&id=a419304e&":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsScatterChart.vue?vue&type=template&id=a419304e& ***!
  \****************************************************************************************************************************************************************************************************************************************************/
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
    "vx-card",
    { attrs: { title: "Scatter Chart", "code-toggler": "" } },
    [
      _c(
        "div",
        { staticClass: "mt-5" },
        [
          _c("chartjs-component-scatter-chart", {
            attrs: { height: 300, data: _vm.data, options: _vm.options }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("template", { slot: "codeContainer" }, [
        _vm._v(
          '\n<script>\nimport { Scatter } from \'vue-chartjs\'\n\nexport default {\n  extends: Line,\n  data() {\n    return {\n      data: {\n        datasets: [{\n          label: "My First dataset",\n          data: [{\n            x: 65, y: 28,\n          }, {\n            x: 59, y: 48,\n          }, {\n            x: 80, y: 40,\n          }, {\n            x: 81, y: 19,\n          }, {\n            x: 56, y: 86,\n          }, {\n            x: 55, y: 27,\n          }, {\n            x: 40, y: 89,\n          }],\n          backgroundColor: "rgba(209,212,219,.3)",\n          borderColor: "transparent",\n          pointBorderColor: "#D1D4DB",\n          pointBackgroundColor: "#FFF",\n          pointBorderWidth: 2,\n          pointHoverBorderWidth: 2,\n          pointRadius: 4,\n        }, {\n          label: "My Second dataset",\n          data: [{\n            x: 45, y: 17,\n          }, {\n            x: 25, y: 62,\n          }, {\n            x: 16, y: 78,\n          }, {\n            x: 36, y: 88,\n          }, {\n            x: 67, y: 26,\n          }, {\n            x: 18, y: 48,\n          }, {\n            x: 76, y: 73,\n          }],\n          backgroundColor: "rgba(81,117,224,.6)",\n          borderColor: "transparent",\n          pointBorderColor: "#5175E0",\n          pointBackgroundColor: "#FFF",\n          pointBorderWidth: 2,\n          pointHoverBorderWidth: 2,\n          pointRadius: 4,\n        }]\n      },\n\n      options: {\n        responsive: true,\n        maintainAspectRatio: false,\n        responsiveAnimationDuration: 800,\n        title: {\n          display: false,\n          text: \'Chart.js Scatter Chart\'\n        },\n        scales: {\n          xAxes: [{\n            position: \'top\',\n            gridLines: {\n              zeroLineColor: "rgba(0,255,0,1)",\n              color: "#f3f3f3",\n              drawTicks: false,\n            },\n            scaleLabel: {\n              display: true,\n              labelString: \'x axis\'\n            }\n          }],\n          yAxes: [{\n            position: \'right\',\n            gridLines: {\n              zeroLineColor: "rgba(0,255,0,1)",\n              color: "#f3f3f3",\n              drawTicks: false,\n            },\n            scaleLabel: {\n              display: true,\n              labelString: \'y axis\'\n            }\n          }]\n        }\n      },\n    }\n  }\n  mounted () {\n    this.renderChart(this.data, this.options)\n  }\n}\n</script>\n        '
        )
      ])
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/charts-and-maps/charts/chartjs/Chartjs.vue":
/*!***************************************************************************!*\
  !*** ./resources/js/src/views/charts-and-maps/charts/chartjs/Chartjs.vue ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Chartjs_vue_vue_type_template_id_191fa579___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Chartjs.vue?vue&type=template&id=191fa579& */ "./resources/js/src/views/charts-and-maps/charts/chartjs/Chartjs.vue?vue&type=template&id=191fa579&");
/* harmony import */ var _Chartjs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Chartjs.vue?vue&type=script&lang=js& */ "./resources/js/src/views/charts-and-maps/charts/chartjs/Chartjs.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Chartjs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Chartjs_vue_vue_type_template_id_191fa579___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Chartjs_vue_vue_type_template_id_191fa579___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/charts-and-maps/charts/chartjs/Chartjs.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/charts-and-maps/charts/chartjs/Chartjs.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/src/views/charts-and-maps/charts/chartjs/Chartjs.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Chartjs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Chartjs.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/charts/chartjs/Chartjs.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Chartjs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/charts-and-maps/charts/chartjs/Chartjs.vue?vue&type=template&id=191fa579&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/src/views/charts-and-maps/charts/chartjs/Chartjs.vue?vue&type=template&id=191fa579& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Chartjs_vue_vue_type_template_id_191fa579___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Chartjs.vue?vue&type=template&id=191fa579& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/charts/chartjs/Chartjs.vue?vue&type=template&id=191fa579&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Chartjs_vue_vue_type_template_id_191fa579___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Chartjs_vue_vue_type_template_id_191fa579___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsBarChart.vue":
/*!***********************************************************************************!*\
  !*** ./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsBarChart.vue ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChartjsBarChart_vue_vue_type_template_id_d2326ab8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChartjsBarChart.vue?vue&type=template&id=d2326ab8& */ "./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsBarChart.vue?vue&type=template&id=d2326ab8&");
/* harmony import */ var _ChartjsBarChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChartjsBarChart.vue?vue&type=script&lang=js& */ "./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsBarChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ChartjsBarChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ChartjsBarChart_vue_vue_type_template_id_d2326ab8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ChartjsBarChart_vue_vue_type_template_id_d2326ab8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsBarChart.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsBarChart.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsBarChart.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsBarChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChartjsBarChart.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsBarChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsBarChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsBarChart.vue?vue&type=template&id=d2326ab8&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsBarChart.vue?vue&type=template&id=d2326ab8& ***!
  \******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsBarChart_vue_vue_type_template_id_d2326ab8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChartjsBarChart.vue?vue&type=template&id=d2326ab8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsBarChart.vue?vue&type=template&id=d2326ab8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsBarChart_vue_vue_type_template_id_d2326ab8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsBarChart_vue_vue_type_template_id_d2326ab8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsBubbleChart.vue":
/*!**************************************************************************************!*\
  !*** ./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsBubbleChart.vue ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChartjsBubbleChart_vue_vue_type_template_id_60c5daae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChartjsBubbleChart.vue?vue&type=template&id=60c5daae& */ "./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsBubbleChart.vue?vue&type=template&id=60c5daae&");
/* harmony import */ var _ChartjsBubbleChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChartjsBubbleChart.vue?vue&type=script&lang=js& */ "./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsBubbleChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ChartjsBubbleChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ChartjsBubbleChart_vue_vue_type_template_id_60c5daae___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ChartjsBubbleChart_vue_vue_type_template_id_60c5daae___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsBubbleChart.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsBubbleChart.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsBubbleChart.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsBubbleChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChartjsBubbleChart.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsBubbleChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsBubbleChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsBubbleChart.vue?vue&type=template&id=60c5daae&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsBubbleChart.vue?vue&type=template&id=60c5daae& ***!
  \*********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsBubbleChart_vue_vue_type_template_id_60c5daae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChartjsBubbleChart.vue?vue&type=template&id=60c5daae& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsBubbleChart.vue?vue&type=template&id=60c5daae&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsBubbleChart_vue_vue_type_template_id_60c5daae___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsBubbleChart_vue_vue_type_template_id_60c5daae___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsDoughnutChart.vue":
/*!****************************************************************************************!*\
  !*** ./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsDoughnutChart.vue ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChartjsDoughnutChart_vue_vue_type_template_id_1742df9a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChartjsDoughnutChart.vue?vue&type=template&id=1742df9a& */ "./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsDoughnutChart.vue?vue&type=template&id=1742df9a&");
/* harmony import */ var _ChartjsDoughnutChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChartjsDoughnutChart.vue?vue&type=script&lang=js& */ "./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsDoughnutChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ChartjsDoughnutChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ChartjsDoughnutChart_vue_vue_type_template_id_1742df9a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ChartjsDoughnutChart_vue_vue_type_template_id_1742df9a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsDoughnutChart.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsDoughnutChart.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsDoughnutChart.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsDoughnutChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChartjsDoughnutChart.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsDoughnutChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsDoughnutChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsDoughnutChart.vue?vue&type=template&id=1742df9a&":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsDoughnutChart.vue?vue&type=template&id=1742df9a& ***!
  \***********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsDoughnutChart_vue_vue_type_template_id_1742df9a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChartjsDoughnutChart.vue?vue&type=template&id=1742df9a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsDoughnutChart.vue?vue&type=template&id=1742df9a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsDoughnutChart_vue_vue_type_template_id_1742df9a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsDoughnutChart_vue_vue_type_template_id_1742df9a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsHorizontalBarChart.vue":
/*!*********************************************************************************************!*\
  !*** ./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsHorizontalBarChart.vue ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChartjsHorizontalBarChart_vue_vue_type_template_id_0b73c7a8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChartjsHorizontalBarChart.vue?vue&type=template&id=0b73c7a8& */ "./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsHorizontalBarChart.vue?vue&type=template&id=0b73c7a8&");
/* harmony import */ var _ChartjsHorizontalBarChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChartjsHorizontalBarChart.vue?vue&type=script&lang=js& */ "./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsHorizontalBarChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ChartjsHorizontalBarChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ChartjsHorizontalBarChart_vue_vue_type_template_id_0b73c7a8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ChartjsHorizontalBarChart_vue_vue_type_template_id_0b73c7a8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsHorizontalBarChart.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsHorizontalBarChart.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsHorizontalBarChart.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsHorizontalBarChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChartjsHorizontalBarChart.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsHorizontalBarChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsHorizontalBarChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsHorizontalBarChart.vue?vue&type=template&id=0b73c7a8&":
/*!****************************************************************************************************************************!*\
  !*** ./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsHorizontalBarChart.vue?vue&type=template&id=0b73c7a8& ***!
  \****************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsHorizontalBarChart_vue_vue_type_template_id_0b73c7a8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChartjsHorizontalBarChart.vue?vue&type=template&id=0b73c7a8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsHorizontalBarChart.vue?vue&type=template&id=0b73c7a8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsHorizontalBarChart_vue_vue_type_template_id_0b73c7a8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsHorizontalBarChart_vue_vue_type_template_id_0b73c7a8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsLineChart.vue":
/*!************************************************************************************!*\
  !*** ./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsLineChart.vue ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChartjsLineChart_vue_vue_type_template_id_4dd30ffe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChartjsLineChart.vue?vue&type=template&id=4dd30ffe& */ "./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsLineChart.vue?vue&type=template&id=4dd30ffe&");
/* harmony import */ var _ChartjsLineChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChartjsLineChart.vue?vue&type=script&lang=js& */ "./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsLineChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ChartjsLineChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ChartjsLineChart_vue_vue_type_template_id_4dd30ffe___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ChartjsLineChart_vue_vue_type_template_id_4dd30ffe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsLineChart.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsLineChart.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsLineChart.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsLineChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChartjsLineChart.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsLineChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsLineChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsLineChart.vue?vue&type=template&id=4dd30ffe&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsLineChart.vue?vue&type=template&id=4dd30ffe& ***!
  \*******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsLineChart_vue_vue_type_template_id_4dd30ffe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChartjsLineChart.vue?vue&type=template&id=4dd30ffe& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsLineChart.vue?vue&type=template&id=4dd30ffe&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsLineChart_vue_vue_type_template_id_4dd30ffe___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsLineChart_vue_vue_type_template_id_4dd30ffe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsPieChart.vue":
/*!***********************************************************************************!*\
  !*** ./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsPieChart.vue ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChartjsPieChart_vue_vue_type_template_id_4208ad4b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChartjsPieChart.vue?vue&type=template&id=4208ad4b& */ "./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsPieChart.vue?vue&type=template&id=4208ad4b&");
/* harmony import */ var _ChartjsPieChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChartjsPieChart.vue?vue&type=script&lang=js& */ "./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsPieChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ChartjsPieChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ChartjsPieChart_vue_vue_type_template_id_4208ad4b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ChartjsPieChart_vue_vue_type_template_id_4208ad4b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsPieChart.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsPieChart.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsPieChart.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsPieChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChartjsPieChart.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsPieChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsPieChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsPieChart.vue?vue&type=template&id=4208ad4b&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsPieChart.vue?vue&type=template&id=4208ad4b& ***!
  \******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsPieChart_vue_vue_type_template_id_4208ad4b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChartjsPieChart.vue?vue&type=template&id=4208ad4b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsPieChart.vue?vue&type=template&id=4208ad4b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsPieChart_vue_vue_type_template_id_4208ad4b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsPieChart_vue_vue_type_template_id_4208ad4b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsPolarAreaChart.vue":
/*!*****************************************************************************************!*\
  !*** ./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsPolarAreaChart.vue ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChartjsPolarAreaChart_vue_vue_type_template_id_6110a00c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChartjsPolarAreaChart.vue?vue&type=template&id=6110a00c& */ "./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsPolarAreaChart.vue?vue&type=template&id=6110a00c&");
/* harmony import */ var _ChartjsPolarAreaChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChartjsPolarAreaChart.vue?vue&type=script&lang=js& */ "./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsPolarAreaChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ChartjsPolarAreaChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ChartjsPolarAreaChart_vue_vue_type_template_id_6110a00c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ChartjsPolarAreaChart_vue_vue_type_template_id_6110a00c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsPolarAreaChart.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsPolarAreaChart.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsPolarAreaChart.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsPolarAreaChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChartjsPolarAreaChart.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsPolarAreaChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsPolarAreaChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsPolarAreaChart.vue?vue&type=template&id=6110a00c&":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsPolarAreaChart.vue?vue&type=template&id=6110a00c& ***!
  \************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsPolarAreaChart_vue_vue_type_template_id_6110a00c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChartjsPolarAreaChart.vue?vue&type=template&id=6110a00c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsPolarAreaChart.vue?vue&type=template&id=6110a00c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsPolarAreaChart_vue_vue_type_template_id_6110a00c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsPolarAreaChart_vue_vue_type_template_id_6110a00c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsRadarChart.vue":
/*!*************************************************************************************!*\
  !*** ./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsRadarChart.vue ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChartjsRadarChart_vue_vue_type_template_id_4015d8d1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChartjsRadarChart.vue?vue&type=template&id=4015d8d1& */ "./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsRadarChart.vue?vue&type=template&id=4015d8d1&");
/* harmony import */ var _ChartjsRadarChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChartjsRadarChart.vue?vue&type=script&lang=js& */ "./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsRadarChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ChartjsRadarChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ChartjsRadarChart_vue_vue_type_template_id_4015d8d1___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ChartjsRadarChart_vue_vue_type_template_id_4015d8d1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsRadarChart.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsRadarChart.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsRadarChart.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsRadarChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChartjsRadarChart.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsRadarChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsRadarChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsRadarChart.vue?vue&type=template&id=4015d8d1&":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsRadarChart.vue?vue&type=template&id=4015d8d1& ***!
  \********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsRadarChart_vue_vue_type_template_id_4015d8d1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChartjsRadarChart.vue?vue&type=template&id=4015d8d1& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsRadarChart.vue?vue&type=template&id=4015d8d1&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsRadarChart_vue_vue_type_template_id_4015d8d1___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsRadarChart_vue_vue_type_template_id_4015d8d1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsScatterChart.vue":
/*!***************************************************************************************!*\
  !*** ./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsScatterChart.vue ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChartjsScatterChart_vue_vue_type_template_id_a419304e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChartjsScatterChart.vue?vue&type=template&id=a419304e& */ "./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsScatterChart.vue?vue&type=template&id=a419304e&");
/* harmony import */ var _ChartjsScatterChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChartjsScatterChart.vue?vue&type=script&lang=js& */ "./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsScatterChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ChartjsScatterChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ChartjsScatterChart_vue_vue_type_template_id_a419304e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ChartjsScatterChart_vue_vue_type_template_id_a419304e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsScatterChart.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsScatterChart.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsScatterChart.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsScatterChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChartjsScatterChart.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsScatterChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsScatterChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsScatterChart.vue?vue&type=template&id=a419304e&":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsScatterChart.vue?vue&type=template&id=a419304e& ***!
  \**********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsScatterChart_vue_vue_type_template_id_a419304e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChartjsScatterChart.vue?vue&type=template&id=a419304e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsScatterChart.vue?vue&type=template&id=a419304e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsScatterChart_vue_vue_type_template_id_a419304e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsScatterChart_vue_vue_type_template_id_a419304e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentBarChart.vue":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentBarChart.vue ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChartjsComponentBarChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChartjsComponentBarChart.vue?vue&type=script&lang=js& */ "./resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentBarChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns




/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _ChartjsComponentBarChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentBarChart.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentBarChart.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************!*\
  !*** ./resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentBarChart.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsComponentBarChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChartjsComponentBarChart.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentBarChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsComponentBarChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentBubbleChart.vue":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentBubbleChart.vue ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChartjsComponentBubbleChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChartjsComponentBubbleChart.vue?vue&type=script&lang=js& */ "./resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentBubbleChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns




/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _ChartjsComponentBubbleChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentBubbleChart.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentBubbleChart.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************!*\
  !*** ./resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentBubbleChart.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsComponentBubbleChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChartjsComponentBubbleChart.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentBubbleChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsComponentBubbleChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentDoughnutChart.vue":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentDoughnutChart.vue ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChartjsComponentDoughnutChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChartjsComponentDoughnutChart.vue?vue&type=script&lang=js& */ "./resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentDoughnutChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns




/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _ChartjsComponentDoughnutChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentDoughnutChart.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentDoughnutChart.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************!*\
  !*** ./resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentDoughnutChart.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsComponentDoughnutChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChartjsComponentDoughnutChart.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentDoughnutChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsComponentDoughnutChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentHorizontalBarChart.vue":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentHorizontalBarChart.vue ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChartjsComponentHorizontalBarChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChartjsComponentHorizontalBarChart.vue?vue&type=script&lang=js& */ "./resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentHorizontalBarChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns




/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _ChartjsComponentHorizontalBarChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentHorizontalBarChart.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentHorizontalBarChart.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************!*\
  !*** ./resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentHorizontalBarChart.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsComponentHorizontalBarChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChartjsComponentHorizontalBarChart.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentHorizontalBarChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsComponentHorizontalBarChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentLineChart.vue":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentLineChart.vue ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChartjsComponentLineChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChartjsComponentLineChart.vue?vue&type=script&lang=js& */ "./resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentLineChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns




/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _ChartjsComponentLineChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentLineChart.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentLineChart.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************!*\
  !*** ./resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentLineChart.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsComponentLineChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChartjsComponentLineChart.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentLineChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsComponentLineChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentPieChart.vue":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentPieChart.vue ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChartjsComponentPieChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChartjsComponentPieChart.vue?vue&type=script&lang=js& */ "./resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentPieChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns




/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _ChartjsComponentPieChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentPieChart.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentPieChart.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************!*\
  !*** ./resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentPieChart.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsComponentPieChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChartjsComponentPieChart.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentPieChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsComponentPieChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentPolarAreaChart.vue":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentPolarAreaChart.vue ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChartjsComponentPolarAreaChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChartjsComponentPolarAreaChart.vue?vue&type=script&lang=js& */ "./resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentPolarAreaChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns




/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _ChartjsComponentPolarAreaChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentPolarAreaChart.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentPolarAreaChart.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************!*\
  !*** ./resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentPolarAreaChart.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsComponentPolarAreaChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChartjsComponentPolarAreaChart.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentPolarAreaChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsComponentPolarAreaChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentRadarChart.vue":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentRadarChart.vue ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChartjsComponentRadarChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChartjsComponentRadarChart.vue?vue&type=script&lang=js& */ "./resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentRadarChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns




/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _ChartjsComponentRadarChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentRadarChart.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentRadarChart.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************!*\
  !*** ./resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentRadarChart.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsComponentRadarChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChartjsComponentRadarChart.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentRadarChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsComponentRadarChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentScatterChart.vue":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentScatterChart.vue ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChartjsComponentScatterChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChartjsComponentScatterChart.vue?vue&type=script&lang=js& */ "./resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentScatterChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns




/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _ChartjsComponentScatterChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentScatterChart.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentScatterChart.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************!*\
  !*** ./resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentScatterChart.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsComponentScatterChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChartjsComponentScatterChart.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentScatterChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsComponentScatterChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ })

}]);