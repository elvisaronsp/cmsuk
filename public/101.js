(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[101],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Register.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Register.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      username: '',
      email: '',
      password: '',
      confirm_password: '',
      isTermsConditionAccepted: true
    };
  },
  computed: {
    validateForm: function validateForm() {
      return !this.errors.any() && this.username != '' && this.email != '' && this.password != '' && this.confirm_password != '' && this.isTermsConditionAccepted === true;
    }
  },
  methods: {
    registerUser: function registerUser() {
      if (!this.validateForm) return false;

      if (this.$store.state.auth.isUserLoggedIn()) {
        this.notifyAlreadyLogedIn();
        return;
      }

      var payload = {
        userDetails: {
          email: this.email,
          password: this.password,
          username: this.username
        },
        notify: this.$vs.notify
      };
      this.$store.dispatch('auth/registerUser', payload);
    },
    notifyAlreadyLogedIn: function notifyAlreadyLogedIn() {
      this.$vs.notify({
        title: 'Login Attempt',
        text: 'You are already logged in!',
        iconPack: 'feather',
        icon: 'icon-alert-circle',
        color: 'warning'
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Register.vue?vue&type=template&id=09126b38&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Register.vue?vue&type=template&id=09126b38& ***!
  \****************************************************************************************************************************************************************************************************************/
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
    {
      staticClass:
        "h-screen flex w-full bg-img vx-row no-gutter items-center justify-center"
    },
    [
      _c(
        "div",
        {
          staticClass: "vx-col sm:w-1/2 md:w-1/2 lg:w-3/4 xl:w-3/5 sm:m-0 m-4"
        },
        [
          _c("vx-card", [
            _c(
              "div",
              {
                staticClass: "full-page-bg-color",
                attrs: { slot: "no-body" },
                slot: "no-body"
              },
              [
                _c("div", { staticClass: "vx-row no-gutter" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "vx-col hidden sm:hidden md:hidden lg:block lg:w-1/2 mx-auto self-center"
                    },
                    [
                      _c("img", {
                        staticClass: "mx-auto",
                        attrs: {
                          src: __webpack_require__(/*! @/assets/images/pages/register.jpg */ "./resources/js/src/assets/images/pages/register.jpg"),
                          alt: "register"
                        }
                      })
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "vx-col sm:w-full md:w-full lg:w-1/2 mx-auto self-center  d-theme-dark-bg"
                    },
                    [
                      _c("div", { staticClass: "p-8" }, [
                        _c("div", { staticClass: "vx-card__title" }, [
                          _c("h4", { staticClass: "mb-4" }, [
                            _vm._v("Create Account")
                          ]),
                          _vm._v(" "),
                          _c("p", [
                            _vm._v(
                              "Fill the below form to create a new account."
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "clearfix" },
                          [
                            _c("vs-input", {
                              directives: [
                                {
                                  name: "validate",
                                  rawName: "v-validate",
                                  value: "required|alpha_dash|min:3",
                                  expression: "'required|alpha_dash|min:3'"
                                }
                              ],
                              staticClass: "w-full",
                              attrs: {
                                "data-vv-validate-on": "blur",
                                "label-placeholder": "Username",
                                name: "username",
                                placeholder: "Username"
                              },
                              model: {
                                value: _vm.username,
                                callback: function($$v) {
                                  _vm.username = $$v
                                },
                                expression: "username"
                              }
                            }),
                            _vm._v(" "),
                            _c("span", { staticClass: "text-danger text-sm" }, [
                              _vm._v(_vm._s(_vm.errors.first("username")))
                            ]),
                            _vm._v(" "),
                            _c("vs-input", {
                              directives: [
                                {
                                  name: "validate",
                                  rawName: "v-validate",
                                  value: "required|email",
                                  expression: "'required|email'"
                                }
                              ],
                              staticClass: "w-full mt-6",
                              attrs: {
                                "data-vv-validate-on": "blur",
                                name: "email",
                                type: "email",
                                "label-placeholder": "Email",
                                placeholder: "Email"
                              },
                              model: {
                                value: _vm.email,
                                callback: function($$v) {
                                  _vm.email = $$v
                                },
                                expression: "email"
                              }
                            }),
                            _vm._v(" "),
                            _c("span", { staticClass: "text-danger text-sm" }, [
                              _vm._v(_vm._s(_vm.errors.first("email")))
                            ]),
                            _vm._v(" "),
                            _c("vs-input", {
                              directives: [
                                {
                                  name: "validate",
                                  rawName: "v-validate",
                                  value: "required|min:6|max:10",
                                  expression: "'required|min:6|max:10'"
                                }
                              ],
                              ref: "password",
                              staticClass: "w-full mt-6",
                              attrs: {
                                type: "password",
                                "data-vv-validate-on": "blur",
                                name: "password",
                                "label-placeholder": "Password",
                                placeholder: "Password"
                              },
                              model: {
                                value: _vm.password,
                                callback: function($$v) {
                                  _vm.password = $$v
                                },
                                expression: "password"
                              }
                            }),
                            _vm._v(" "),
                            _c("span", { staticClass: "text-danger text-sm" }, [
                              _vm._v(_vm._s(_vm.errors.first("password")))
                            ]),
                            _vm._v(" "),
                            _c("vs-input", {
                              directives: [
                                {
                                  name: "validate",
                                  rawName: "v-validate",
                                  value: "min:6|max:10|confirmed:password",
                                  expression:
                                    "'min:6|max:10|confirmed:password'"
                                }
                              ],
                              staticClass: "w-full mt-6",
                              attrs: {
                                type: "password",
                                "data-vv-validate-on": "blur",
                                "data-vv-as": "password",
                                name: "confirm_password",
                                "label-placeholder": "Confirm Password",
                                placeholder: "Confirm Password"
                              },
                              model: {
                                value: _vm.confirm_password,
                                callback: function($$v) {
                                  _vm.confirm_password = $$v
                                },
                                expression: "confirm_password"
                              }
                            }),
                            _vm._v(" "),
                            _c("span", { staticClass: "text-danger text-sm" }, [
                              _vm._v(
                                _vm._s(_vm.errors.first("confirm_password"))
                              )
                            ]),
                            _vm._v(" "),
                            _c(
                              "vs-checkbox",
                              {
                                staticClass: "mt-6",
                                model: {
                                  value: _vm.isTermsConditionAccepted,
                                  callback: function($$v) {
                                    _vm.isTermsConditionAccepted = $$v
                                  },
                                  expression: "isTermsConditionAccepted"
                                }
                              },
                              [_vm._v("I accept the terms & conditions.")]
                            ),
                            _vm._v(" "),
                            _c(
                              "vs-button",
                              {
                                staticClass: "mt-6",
                                attrs: { type: "border", to: "/pages/login" }
                              },
                              [_vm._v("Login")]
                            ),
                            _vm._v(" "),
                            _c(
                              "vs-button",
                              {
                                staticClass: "float-right mt-6",
                                attrs: { disabled: !_vm.validateForm },
                                on: { click: _vm.registerUser }
                              },
                              [_vm._v("Register")]
                            )
                          ],
                          1
                        )
                      ])
                    ]
                  )
                ])
              ]
            )
          ])
        ],
        1
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/assets/images/pages/register.jpg":
/*!***********************************************************!*\
  !*** ./resources/js/src/assets/images/pages/register.jpg ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/register.jpg?cfd9ef099bfc1f99c6f2970ae05a6a4a";

/***/ }),

/***/ "./resources/js/src/views/pages/Register.vue":
/*!***************************************************!*\
  !*** ./resources/js/src/views/pages/Register.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Register_vue_vue_type_template_id_09126b38___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Register.vue?vue&type=template&id=09126b38& */ "./resources/js/src/views/pages/Register.vue?vue&type=template&id=09126b38&");
/* harmony import */ var _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Register.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/Register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Register_vue_vue_type_template_id_09126b38___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Register_vue_vue_type_template_id_09126b38___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/Register.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/Register.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/src/views/pages/Register.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Register.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/Register.vue?vue&type=template&id=09126b38&":
/*!**********************************************************************************!*\
  !*** ./resources/js/src/views/pages/Register.vue?vue&type=template&id=09126b38& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_09126b38___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Register.vue?vue&type=template&id=09126b38& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Register.vue?vue&type=template&id=09126b38&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_09126b38___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_09126b38___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);