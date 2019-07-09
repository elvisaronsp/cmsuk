(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[33],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/email/Email.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/email/Email.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EmailSidebar_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EmailSidebar.vue */ "./resources/js/src/views/apps/email/EmailSidebar.vue");
/* harmony import */ var _MailItem_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MailItem.vue */ "./resources/js/src/views/apps/email/MailItem.vue");
/* harmony import */ var _EmailView_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EmailView.vue */ "./resources/js/src/views/apps/email/EmailView.vue");
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-perfect-scrollbar */ "./node_modules/vue-perfect-scrollbar/dist/index.js");
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      openMailId: null,
      selectedMails: [],
      isSidebarActive: false,
      showThread: false,
      clickNotClose: true,
      isEmailSidebarActive: true,
      windowWidth: window.innerWidth,
      settings: {
        maxScrollbarLength: 60,
        wheelSpeed: 0.30
      }
    };
  },
  watch: {
    isSidebarActive: function isSidebarActive(value) {
      if (!value) this.showThread = false;
    },
    mailFilter: function mailFilter() {
      this.selectedMails = [];
      this.$refs.mailListPS.$el.scrollTop = 0;
    }
  },
  computed: {
    mailFilter: function mailFilter() {
      return this.$store.state.email.mail_filter;
    },
    emailTags: function emailTags() {
      return this.$store.state.email.mailTags;
    },
    searchQuery: {
      get: function get() {
        return this.$store.state.email.mailSearchQuery;
      },
      set: function set(val) {
        this.$store.dispatch('email/setMailSearchQuery', val);
      }
    },
    selectAllCheckBox: {
      get: function get() {
        return this.selectedMails.length;
      },
      set: function set(value) {
        if (value) this.selectedMails = this.mails.map(function (mail) {
          return mail.id;
        });else this.selectedMails = [];
      }
    },
    mails: function mails() {
      return this.$store.getters['email/filteredMails'];
    },
    isMailOpen: function isMailOpen() {
      var _this = this;

      return function (mailId) {
        return mailId == _this.openMailId;
      };
    },
    selectAllIcon: function selectAllIcon() {
      if (this.selectedMails.length == this.mails.length) return 'icon-check';else return 'icon-minus';
    },
    isMailSelected: function isMailSelected() {
      var _this2 = this;

      return function (mailId) {
        return _this2.selectedMails.indexOf(mailId) == -1 ? false : true;
      };
    }
  },
  methods: {
    updateOpenMail: function updateOpenMail(mailId) {
      this.openMailId = mailId;
      var payload = {
        mails: [mailId],
        unread: false
      };
      this.$store.dispatch('email/updateMailUnread', payload);
      this.isSidebarActive = true;
    },
    addToSelectedMails: function addToSelectedMails(mailId) {
      this.selectedMails.push(mailId);
    },
    removeSelectedMail: function removeSelectedMail(mailId) {
      var mailIndex = this.selectedMails.indexOf(mailId);

      if (mailIndex > -1) {
        this.selectedMails.splice(mailIndex, 1);
      }
    },
    moveTo: function moveTo(to) {
      var payload = {
        mails: this.selectedMails,
        to: to
      };
      this.$store.dispatch('email/moveMailsTo', payload);
      this.selectedMails = [];
    },
    moveCurrentTo: function moveCurrentTo(to) {
      this.selectedMails = [this.openMailId];
      this.moveTo(to);
    },
    updateMarkUnread: function updateMarkUnread() {
      var payload = {
        mails: this.selectedMails,
        unread: true
      };
      this.$store.dispatch('email/updateMailUnread', payload);
      this.selectedMails = [];
    },
    removeOpenMail: function removeOpenMail() {
      this.selectedMails = [this.openMailId];
      this.moveTo('trashed');
      this.isSidebarActive = false;
    },
    toggleIsStarred: function toggleIsStarred() {
      var payload = {
        mailId: this.currentMail.id,
        value: !this.currentMail.isStarred
      };
      this.$store.dispatch('email/toggleIsMailStarred', payload);
    },
    nextMail: function nextMail() {
      var _this3 = this;

      var currentMailIndex = this.mails.findIndex(function (mail) {
        return mail.id == _this3.openMailId;
      });
      if (this.mails[currentMailIndex + 1]) this.openMailId = this.mails[currentMailIndex + 1].id;
    },
    previousMail: function previousMail() {
      var _this4 = this;

      var currentMailIndex = this.mails.findIndex(function (mail) {
        return mail.id == _this4.openMailId;
      });
      if (this.mails[currentMailIndex - 1]) this.openMailId = this.mails[currentMailIndex - 1].id;
    },
    updateSingleMarkUnread: function updateSingleMarkUnread() {
      this.selectedMails = [this.openMailId];
      this.updateMarkUnread();
      this.isSidebarActive = false;
    },
    addLabelToMails: function addLabelToMails(label) {
      var payload = {
        mails: this.selectedMails,
        label: label
      };
      this.$store.dispatch('email/addLabelToMails', payload);
      this.selectedMails = [];
    },
    closeMailViewSidebar: function closeMailViewSidebar() {
      this.isSidebarActive = false;
    },
    handleWindowResize: function handleWindowResize(event) {
      this.windowWidth = event.currentTarget.innerWidth;
      this.setSidebarWidth();
    },
    setSidebarWidth: function setSidebarWidth() {
      if (this.windowWidth < 992) {
        this.isEmailSidebarActive = this.clickNotClose = false;
      } else {
        this.isEmailSidebarActive = this.clickNotClose = true;
      }
    },
    toggleEmailSidebar: function toggleEmailSidebar() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (!value) {
        this.closeMailViewSidebar();

        if (this.clickNotClose) {
          return;
        }
      }

      this.isEmailSidebarActive = value;
    }
  },
  components: {
    MailItem: _MailItem_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    EmailSidebar: _EmailSidebar_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    EmailView: _EmailView_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    VuePerfectScrollbar: vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3___default.a
  },
  created: function created() {
    var _this5 = this;

    this.$nextTick(function () {
      window.addEventListener('resize', _this5.handleWindowResize);
    });
    this.setSidebarWidth();
  },
  beforeDestroy: function beforeDestroy() {
    window.removeEventListener('resize', this.handleWindowResize);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/email/EmailSidebar.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/email/EmailSidebar.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var quill_dist_quill_core_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! quill/dist/quill.core.css */ "./node_modules/quill/dist/quill.core.css");
/* harmony import */ var quill_dist_quill_core_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(quill_dist_quill_core_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! quill/dist/quill.snow.css */ "./node_modules/quill/dist/quill.snow.css");
/* harmony import */ var quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue_quill_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-quill-editor */ "./node_modules/vue-quill-editor/dist/vue-quill-editor.js");
/* harmony import */ var vue_quill_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_quill_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-perfect-scrollbar */ "./node_modules/vue-perfect-scrollbar/dist/index.js");
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: {
    emailTags: {
      type: Array,
      required: true
    },
    mailFilter: {
      type: String,
      required: true
    }
  },
  data: function data() {
    return {
      activePrompt: false,
      mailTo: '',
      mailSubject: '',
      mailCC: '',
      mailBCC: '',
      mailMessage: '',
      editorOption: {
        modules: {
          toolbar: [['bold', 'italic', 'underline', 'strike', 'link', 'blockquote', 'code-block'], [{
            'header': 1
          }, {
            'header': 2
          }], [{
            'list': 'ordered'
          }, {
            'list': 'bullet'
          }], [{
            'font': []
          }]]
        },
        placeholder: 'Message'
      },
      settings: {
        maxScrollbarLength: 60,
        wheelSpeed: 0.30
      }
    };
  },
  computed: {
    validateForm: function validateForm() {
      return !this.errors.any() && this.mailTo != '';
    },
    unreadMails: function unreadMails() {
      var _this = this;

      return function (mailType) {
        return _this.$store.getters['email/unreadMails'](mailType);
      };
    },
    draftMails: function draftMails() {
      return this.$store.getters['email/NumdraftMails'];
    }
  },
  methods: {
    updateFilter: function updateFilter(filterName) {
      this.$store.dispatch('email/updateMailFilter', filterName);
      this.$emit('closeSidebar', false);
    },
    // compose mail methods
    clearFields: function clearFields() {
      this.mailTo = '';
      this.mailSubject = '';
      this.mailCC = '';
      this.mailBCC = '';
      this.mailMessage = '';
    },
    sendMail: function sendMail() {}
  },
  components: {
    quillEditor: vue_quill_editor__WEBPACK_IMPORTED_MODULE_2__["quillEditor"],
    VuePerfectScrollbar: vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3___default.a
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/email/EmailView.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/email/EmailView.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-perfect-scrollbar */ "./node_modules/vue-perfect-scrollbar/dist/index.js");
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: {
    emailTags: {
      type: Array,
      required: true
    },
    openMailId: {
      required: true,
      validator: function validator(prop) {
        return typeof prop === 'number' || prop === null;
      }
    },
    isSidebarActive: {
      type: Boolean,
      required: true
    }
  },
  data: function data() {
    return {
      showThread: false,
      settings: {
        maxScrollbarLength: 60,
        wheelSpeed: 0.50
      }
    };
  },
  watch: {
    isSidebarActive: function isSidebarActive(value) {
      var _this = this;

      if (!value) {
        this.$emit('closeSidebar');
        setTimeout(function () {
          _this.showThread = false;
        }, 500);
      }
    }
  },
  computed: {
    currentMail: function currentMail() {
      return this.$store.getters['email/getMail'](this.openMailId);
    },
    labelColor: function labelColor() {
      var _this2 = this;

      return function (label) {
        var tags = _this2.$store.state.email.mailTags;
        return tags.find(function (tag) {
          return tag.value == label;
        }).color;
      };
    },
    currentMailLabels: {
      get: function get() {
        return this.$store.getters['email/getMail'](this.openMailId).labels;
      },
      set: function set(value) {
        if (Array.isArray(value)) {
          var payload = {
            mailId: this.openMailId,
            value: value
          };
          this.$store.dispatch('email/updateMailLabels', payload);
        }
      }
    }
  },
  methods: {
    toggleIsStarred: function toggleIsStarred() {
      var payload = {
        mailId: this.openMailId,
        value: !this.currentMail.isStarred
      };
      this.$store.dispatch('email/toggleIsMailStarred', payload);
    },
    moveTo: function moveTo(to) {
      this.$emit('closeSidebar');
      this.$emit('moveTo', to);
    }
  },
  components: {
    VuePerfectScrollbar: vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  updated: function updated() {
    if (this.currentMail.unread && this.isSidebarActive) this.$store.dispatch('email/updateMailUnread', {
      mails: [this.openMailId],
      unread: false
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/email/MailItem.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/email/MailItem.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
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
  props: {
    mail: {
      type: Object,
      required: true
    },
    isMailOpen: {
      type: Boolean
    },
    isSelected: {
      type: Boolean,
      required: true
    }
  },
  data: function data() {
    return {
      isSelectedMail: this.isSelected
    };
  },
  watch: {
    isSelected: function isSelected(value) {
      this.isSelectedMail = value;
    },
    isSelectedMail: function isSelectedMail(val) {
      if (val) this.$emit('addToSelected', this.mail.id);else this.$emit('removeSelected', this.mail.id);
    }
  },
  computed: {
    labelColor: function labelColor() {
      var _this = this;

      return function (label) {
        var tags = _this.$store.state.email.mailTags;
        return tags.find(function (tag) {
          return tag.value == label;
        }).color;
      };
    }
  },
  methods: {
    toggleIsStarred: function toggleIsStarred() {
      var payload = {
        mailId: this.mail.id,
        value: !this.mail.isStarred
      };
      this.$store.dispatch('email/toggleIsMailStarred', payload);
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/email/Email.vue?vue&type=style&index=0&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/lib/loader.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/email/Email.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*=========================================================================================\n    File Name: email.scss\n    Description: Email app's styles. This is imported in Email.vue file\n    ----------------------------------------------------------------------------------------\n    Item Name: Vuesax Admin - VueJS Dashboard Admin Template\n      Author: Pixinvent\n    Author URL: http://www.themeforest.net/user/pixinvent\n==========================================================================================*/\n#email-app .vs-sidebar--background {\n  position: absolute;\n}\n#email-app .select-all-chexkbox .vs-checkbox {\n  margin-right: 0.8rem;\n}\n#email-app .email-scroll-area {\n  position: relative;\n  margin: auto;\n  width: 100%;\n  height: calc(100% - 75px);\n}\n#email-app .email-content-scroll-area {\n  position: relative;\n  margin: auto;\n  width: 100%;\n  height: calc(100% - 100px);\n}\n#email-app .email__mails .mail__opened-mail {\n  background-color: #eee;\n}\n#email-app .email__mails .email__mail-item {\n  -webkit-transition: all 0.35s;\n  transition: all 0.35s;\n}\n#email-app .email__mails .email__mail-item:not(:first-of-type) .mail__mail-item {\n  border-top: 1px solid #dae1e7;\n}\n#email-app .email__mails .email__mail-item .mail__mail-item {\n  -webkit-transition: all 0.2s;\n  transition: all 0.2s;\n}\n#email-app .email__mails .email__mail-item .mail__mail-item:hover {\n  -webkit-transform: translateY(-4px);\n          transform: translateY(-4px);\n  box-shadow: 0px 3px 10px 0px #ccc;\n  -webkit-transition: all 0.2s;\n  transition: all 0.2s;\n}\n#email-app .email__mails .email__mail-item .mail__mail-item .feather-icon {\n  color: #9c9c9c;\n}\n#email-app .email-view-sidebar .vs-sidebar {\n  background-color: #f8f8f8 !important;\n  border-left: 1px solid #dae1e7;\n}\n#email-app .email-view-sidebar .email-header {\n  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.04);\n  border-bottom: 1px solid #eee;\n  z-index: 1;\n  position: relative;\n}\n#email-app .email-view-sidebar .open-mail-label {\n  -webkit-transition: all 0.35s;\n  transition: all 0.35s;\n}\n#email-app .email-view-sidebar .mail__attachment .vs-chip--text {\n  margin-left: 0;\n}\n.con-vs-dialog.email-compose .vs-dialog {\n  max-width: 530px;\n}\n.con-vs-dialog.email-compose .vs-dialog .vs-dialog-text {\n  padding: 0;\n}\n.con-vs-dialog.email-compose .vs-dialog .vs-dialog-text .scroll-area {\n  max-height: 75vh;\n}\n.con-vs-dialog.email-compose .con-img-upload .con-input-upload {\n  height: 2.5rem;\n  width: 100%;\n}\n.con-vs-dialog.email-compose .con-img-upload .img-upload {\n  margin: 0;\n  margin-bottom: 0.5rem;\n  margin-right: 1.5rem;\n}\n.con-vs-dialog.email-compose .quill-editor {\n  margin-bottom: 1.5rem;\n}\n.con-vs-dialog.email-compose .ql-editor {\n  height: 150px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/email/Email.vue?vue&type=style&index=0&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/lib/loader.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/email/Email.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../node_modules/sass-loader/lib/loader.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Email.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/email/Email.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/email/Email.vue?vue&type=template&id=629e4b94&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/email/Email.vue?vue&type=template&id=629e4b94& ***!
  \******************************************************************************************************************************************************************************************************************/
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
        "border border-solid d-theme-border-grey-light rounded relative overflow-hidden",
      attrs: { id: "email-app" }
    },
    [
      _c(
        "vs-sidebar",
        {
          staticClass: "items-no-padding",
          attrs: {
            parent: "#email-app",
            "click-not-close": _vm.clickNotClose,
            "hidden-background": _vm.clickNotClose
          },
          model: {
            value: _vm.isEmailSidebarActive,
            callback: function($$v) {
              _vm.isEmailSidebarActive = $$v
            },
            expression: "isEmailSidebarActive"
          }
        },
        [
          _c("email-sidebar", {
            attrs: { emailTags: _vm.emailTags, mailFilter: _vm.mailFilter },
            on: { closeSidebar: _vm.toggleEmailSidebar }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "app-fixed-height border border-solid d-theme-border-grey-light border-r-0 border-t-0 border-b-0",
          class: { "sidebar-spacer": _vm.clickNotClose }
        },
        [
          _c(
            "div",
            { staticClass: "flex border items-center app-search-container" },
            [
              _c("feather-icon", {
                staticClass:
                  "md:inline-flex lg:hidden ml-4 mr-4 cursor-pointer",
                attrs: { icon: "MenuIcon" },
                on: {
                  click: function($event) {
                    $event.stopPropagation()
                    return _vm.toggleEmailSidebar(true)
                  }
                }
              }),
              _vm._v(" "),
              _c("vs-input", {
                staticClass:
                  "vs-input-no-border vs-input-no-shdow-focus w-full no-icon-border",
                attrs: {
                  icon: "icon-search",
                  size: "large",
                  "icon-pack": "feather",
                  placeholder: "Search Mail"
                },
                model: {
                  value: _vm.searchQuery,
                  callback: function($$v) {
                    _vm.searchQuery = $$v
                  },
                  expression: "searchQuery"
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
                "email__actions flex flex-wrap justify-between p-4 border border-r-0 border-l-0 border-solid d-theme-border-grey-light"
            },
            [
              _c(
                "div",
                [
                  _c(
                    "vs-checkbox",
                    {
                      staticClass: "select-all-chexkbox ml-0",
                      attrs: {
                        "icon-pack": "feather",
                        icon: _vm.selectAllIcon
                      },
                      model: {
                        value: _vm.selectAllCheckBox,
                        callback: function($$v) {
                          _vm.selectAllCheckBox = $$v
                        },
                        expression: "selectAllCheckBox"
                      }
                    },
                    [_vm._v("Select All")]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "flex" },
                [
                  _c(
                    "vs-dropdown",
                    {
                      staticClass: "cursor-pointer",
                      attrs: { "vs-custom-content": "", "vs-trigger-click": "" }
                    },
                    [
                      _c("feather-icon", {
                        staticClass: "cursor-pointer",
                        attrs: { icon: "FolderIcon", "svg-classes": "h-6 w-6" }
                      }),
                      _vm._v(" "),
                      _c("vs-dropdown-menu", [
                        _c("ul", { staticClass: "my-2" }, [
                          _vm.mailFilter != "inbox"
                            ? _c(
                                "li",
                                {
                                  staticClass:
                                    "px-4 mb-2 flex items-start cursor-pointer hover:text-primary",
                                  on: {
                                    click: function($event) {
                                      return _vm.moveTo("inboxed")
                                    }
                                  }
                                },
                                [
                                  _c("feather-icon", {
                                    attrs: {
                                      icon: "MailIcon",
                                      "svg-classes": "h-5 w-5"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "ml-3" }, [
                                    _vm._v("Inbox")
                                  ])
                                ],
                                1
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.mailFilter != "draft"
                            ? _c(
                                "li",
                                {
                                  staticClass:
                                    "px-4 mb-2 flex items-start cursor-pointer hover:text-primary",
                                  on: {
                                    click: function($event) {
                                      return _vm.moveTo("drafted")
                                    }
                                  }
                                },
                                [
                                  _c("feather-icon", {
                                    attrs: {
                                      icon: "Edit2Icon",
                                      "svg-classes": "h-5 w-5"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "ml-3" }, [
                                    _vm._v("Draft")
                                  ])
                                ],
                                1
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.mailFilter != "spam"
                            ? _c(
                                "li",
                                {
                                  staticClass:
                                    "px-4 mb-2 flex items-start cursor-pointer hover:text-primary",
                                  on: {
                                    click: function($event) {
                                      return _vm.moveTo("spam")
                                    }
                                  }
                                },
                                [
                                  _c("feather-icon", {
                                    attrs: {
                                      icon: "InfoIcon",
                                      "svg-classes": "h-5 w-5"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "ml-3" }, [
                                    _vm._v("Spam")
                                  ])
                                ],
                                1
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.mailFilter != "trash"
                            ? _c(
                                "li",
                                {
                                  staticClass:
                                    "px-4 flex items-start cursor-pointer hover:text-primary",
                                  on: {
                                    click: function($event) {
                                      return _vm.moveTo("trashed")
                                    }
                                  }
                                },
                                [
                                  _c("feather-icon", {
                                    attrs: {
                                      icon: "TrashIcon",
                                      "svg-classes": "h-5 w-5"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "ml-3" }, [
                                    _vm._v("Trash")
                                  ])
                                ],
                                1
                              )
                            : _vm._e()
                        ])
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-dropdown",
                    {
                      staticClass: "cursor-pointer",
                      attrs: { "vs-custom-content": "", "vs-trigger-click": "" }
                    },
                    [
                      _c("feather-icon", {
                        staticClass: "cursor-pointer ml-5",
                        attrs: { icon: "TagIcon", "svg-classes": "h-6 w-6" }
                      }),
                      _vm._v(" "),
                      _c("vs-dropdown-menu", [
                        _c(
                          "ul",
                          _vm._l(_vm.emailTags, function(label, index) {
                            return _c(
                              "li",
                              {
                                key: index,
                                staticClass: "px-2 py-1 cursor-pointer",
                                on: {
                                  click: function($event) {
                                    return _vm.addLabelToMails(label.value)
                                  }
                                }
                              },
                              [
                                _c("div", {
                                  staticClass:
                                    "h-3 w-3 inline-block rounded-full mr-3",
                                  class: "bg-" + label.color
                                }),
                                _vm._v(" "),
                                _c("span", [_vm._v(_vm._s(label.text))])
                              ]
                            )
                          }),
                          0
                        )
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("feather-icon", {
                    staticClass: "ml-5 cursor-pointer",
                    attrs: { icon: "MailIcon", "svg-classes": "h-6 w-6" },
                    on: { click: _vm.updateMarkUnread }
                  }),
                  _vm._v(" "),
                  _c("feather-icon", {
                    staticClass: "cursor-pointer ml-5",
                    attrs: { icon: "TrashIcon", "svg-classes": "h-6 w-6" },
                    on: {
                      click: function($event) {
                        return _vm.moveTo("trashed")
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
            "VuePerfectScrollbar",
            {
              ref: "mailListPS",
              staticClass: "email-content-scroll-area",
              attrs: { settings: _vm.settings }
            },
            [
              _c(
                "transition-group",
                {
                  staticClass: "email__mails",
                  attrs: { name: "list-enter-up", tag: "ul", appear: "" }
                },
                _vm._l(_vm.mails, function(mail, index) {
                  return _c(
                    "li",
                    {
                      key: String(_vm.mailFilter) + String(mail.id),
                      staticClass: "cursor-pointer email__mail-item",
                      style: { transitionDelay: index * 0.1 + "s" },
                      on: {
                        click: function($event) {
                          $event.stopPropagation()
                          return _vm.updateOpenMail(mail.id)
                        }
                      }
                    },
                    [
                      _c("mail-item", {
                        attrs: {
                          mail: mail,
                          isMailOpen: _vm.isMailOpen(mail.id),
                          isSelected: _vm.isMailSelected(mail.id)
                        },
                        on: {
                          addToSelected: _vm.addToSelectedMails,
                          removeSelected: _vm.removeSelectedMail
                        }
                      })
                    ],
                    1
                  )
                }),
                0
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("email-view", {
        attrs: {
          emailTags: _vm.emailTags,
          openMailId: _vm.openMailId,
          isSidebarActive: _vm.isSidebarActive
        },
        on: {
          markUnread: _vm.updateSingleMarkUnread,
          removeMail: _vm.removeOpenMail,
          previousMail: _vm.previousMail,
          nextMail: _vm.nextMail,
          moveTo: _vm.moveCurrentTo,
          closeSidebar: _vm.closeMailViewSidebar
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/email/EmailSidebar.vue?vue&type=template&id=25d30276&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/email/EmailSidebar.vue?vue&type=template&id=25d30276& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "email__email-sidebar h-full" },
    [
      _c(
        "div",
        { staticClass: "m-6 clearfix" },
        [
          _c(
            "vs-button",
            {
              staticClass: "bg-primary-gradient w-full",
              attrs: {
                size: "large",
                "icon-pack": "feather",
                icon: "icon-edit"
              },
              on: {
                click: function($event) {
                  _vm.activePrompt = true
                }
              }
            },
            [_vm._v("Compose")]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "vs-prompt",
        {
          staticClass: "email-compose",
          attrs: {
            "vs-title": "New Message",
            "vs-accept-text": "Send",
            "vs-is-valid": _vm.validateForm,
            "vs-active": _vm.activePrompt
          },
          on: {
            "vs-cancel": _vm.clearFields,
            "vs-accept": _vm.sendMail,
            "vs-close": _vm.clearFields,
            "update:vsActive": function($event) {
              _vm.activePrompt = $event
            },
            "update:vs-active": function($event) {
              _vm.activePrompt = $event
            }
          }
        },
        [
          _c(
            "VuePerfectScrollbar",
            {
              staticClass: "scroll-area p-4",
              attrs: { settings: _vm.settings }
            },
            [
              _c(
                "form",
                {
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                    }
                  }
                },
                [
                  _c("vs-input", {
                    directives: [
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "required|email",
                        expression: "'required|email'"
                      }
                    ],
                    staticClass: "w-full mb-6",
                    attrs: {
                      name: "mailTo",
                      "label-placeholder": "To",
                      danger: !_vm.validateForm && _vm.mailTo != "",
                      "val-icon-danger": "clear",
                      success: _vm.validateForm,
                      "val-icon-success": "done",
                      color: _vm.validateForm ? "success" : "danger"
                    },
                    model: {
                      value: _vm.mailTo,
                      callback: function($$v) {
                        _vm.mailTo = $$v
                      },
                      expression: "mailTo"
                    }
                  }),
                  _vm._v(" "),
                  _c("vs-input", {
                    staticClass: "w-full mb-6",
                    attrs: {
                      name: "mailSubject",
                      "label-placeholder": "Subject"
                    },
                    model: {
                      value: _vm.mailSubject,
                      callback: function($$v) {
                        _vm.mailSubject = $$v
                      },
                      expression: "mailSubject"
                    }
                  }),
                  _vm._v(" "),
                  _c("vs-input", {
                    staticClass: "w-full mb-6",
                    attrs: { name: "mailCC", "label-placeholder": "CC" },
                    model: {
                      value: _vm.mailCC,
                      callback: function($$v) {
                        _vm.mailCC = $$v
                      },
                      expression: "mailCC"
                    }
                  }),
                  _vm._v(" "),
                  _c("vs-input", {
                    staticClass: "w-full mb-6",
                    attrs: { name: "mailBCC", "label-placeholder": "BCC" },
                    model: {
                      value: _vm.mailBCC,
                      callback: function($$v) {
                        _vm.mailBCC = $$v
                      },
                      expression: "mailBCC"
                    }
                  }),
                  _vm._v(" "),
                  _c("quill-editor", {
                    attrs: { options: _vm.editorOption },
                    model: {
                      value: _vm.mailMessage,
                      callback: function($$v) {
                        _vm.mailMessage = $$v
                      },
                      expression: "mailMessage"
                    }
                  }),
                  _vm._v(" "),
                  _c("vs-upload", {
                    attrs: {
                      multiple: "",
                      text: "Attachments",
                      "show-upload-button": false
                    }
                  })
                ],
                1
              )
            ]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "VuePerfectScrollbar",
        { staticClass: "email-scroll-area", attrs: { settings: _vm.settings } },
        [
          _c("div", { staticClass: "px-6 pb-2 flex flex-col" }, [
            _c(
              "div",
              {
                staticClass: "flex justify-between items-center cursor-pointer",
                class: { "text-primary": _vm.mailFilter == "inbox" },
                on: {
                  click: function($event) {
                    return _vm.updateFilter("inbox")
                  }
                }
              },
              [
                _c(
                  "div",
                  { staticClass: "flex items-center mb-2" },
                  [
                    _c("feather-icon", {
                      attrs: {
                        icon: "MailIcon",
                        svgClasses: [
                          {
                            "text-primary stroke-current":
                              _vm.mailFilter == "inbox"
                          },
                          "h-6 w-6"
                        ]
                      }
                    }),
                    _vm._v(" "),
                    _c("span", { staticClass: "text-lg ml-3" }, [
                      _vm._v("Inbox")
                    ])
                  ],
                  1
                ),
                _vm._v(" "),
                _vm.unreadMails("inboxed") > 0
                  ? _c("vs-chip", { attrs: { color: "primary" } }, [
                      _vm._v(_vm._s(_vm.unreadMails("inboxed")))
                    ])
                  : _vm._e()
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "flex items-center mt-4 mb-2 cursor-pointer",
                class: { "text-primary": _vm.mailFilter == "sent" },
                on: {
                  click: function($event) {
                    return _vm.updateFilter("sent")
                  }
                }
              },
              [
                _c("feather-icon", {
                  attrs: {
                    icon: "SendIcon",
                    svgClasses: [
                      {
                        "text-primary stroke-current": _vm.mailFilter == "sent"
                      },
                      "h-6 w-6"
                    ]
                  }
                }),
                _vm._v(" "),
                _c("span", { staticClass: "text-lg ml-3" }, [_vm._v("Sent")])
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "flex justify-between items-center mt-4 cursor-pointer",
                class: { "text-primary": _vm.mailFilter == "draft" },
                on: {
                  click: function($event) {
                    return _vm.updateFilter("draft")
                  }
                }
              },
              [
                _c(
                  "div",
                  { staticClass: "flex items-center mb-2" },
                  [
                    _c("feather-icon", {
                      attrs: {
                        icon: "Edit2Icon",
                        svgClasses: [
                          {
                            "text-primary stroke-current":
                              _vm.mailFilter == "draft"
                          },
                          "h-6 w-6"
                        ]
                      }
                    }),
                    _vm._v(" "),
                    _c("span", { staticClass: "text-lg ml-3" }, [
                      _vm._v("Draft")
                    ])
                  ],
                  1
                ),
                _vm._v(" "),
                _vm.draftMails > 0
                  ? _c("vs-chip", { attrs: { color: "warning" } }, [
                      _vm._v(_vm._s(_vm.draftMails))
                    ])
                  : _vm._e()
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "flex items-center mt-4 mb-2 cursor-pointer",
                class: { "text-primary": _vm.mailFilter == "starred" },
                on: {
                  click: function($event) {
                    return _vm.updateFilter("starred")
                  }
                }
              },
              [
                _c("feather-icon", {
                  attrs: {
                    icon: "StarIcon",
                    svgClasses: [
                      {
                        "text-primary stroke-current":
                          _vm.mailFilter == "starred"
                      },
                      "h-6 w-6"
                    ]
                  }
                }),
                _vm._v(" "),
                _c("span", { staticClass: "text-lg ml-3" }, [_vm._v("Starred")])
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "flex items-center justify-between items-center mt-4 cursor-pointer",
                class: { "text-primary": _vm.mailFilter == "spam" },
                on: {
                  click: function($event) {
                    return _vm.updateFilter("spam")
                  }
                }
              },
              [
                _c(
                  "div",
                  { staticClass: "flex items-center mb-2" },
                  [
                    _c("feather-icon", {
                      attrs: {
                        icon: "InfoIcon",
                        svgClasses: [
                          {
                            "text-primary stroke-current":
                              _vm.mailFilter == "spam"
                          },
                          "h-6 w-6"
                        ]
                      }
                    }),
                    _vm._v(" "),
                    _c("span", { staticClass: "text-lg ml-3" }, [
                      _vm._v("Spam")
                    ])
                  ],
                  1
                ),
                _vm._v(" "),
                _vm.unreadMails("spam") > 0
                  ? _c("vs-chip", { attrs: { color: "danger" } }, [
                      _vm._v(_vm._s(_vm.unreadMails("spam")))
                    ])
                  : _vm._e()
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "flex items-center mt-4 mb-2 cursor-pointer",
                class: { "text-primary": _vm.mailFilter == "trash" },
                on: {
                  click: function($event) {
                    return _vm.updateFilter("trash")
                  }
                }
              },
              [
                _c("feather-icon", {
                  attrs: {
                    icon: "TrashIcon",
                    svgClasses: [
                      {
                        "text-primary stroke-current": _vm.mailFilter == "trash"
                      },
                      "h-6 w-6"
                    ]
                  }
                }),
                _vm._v(" "),
                _c("span", { staticClass: "text-lg ml-3" }, [_vm._v("Trash")])
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("vs-divider"),
          _vm._v(" "),
          _c("div", { staticClass: "email__labels px-6 py-4" }, [
            _c("h5", { staticClass: "mb-8" }, [_vm._v("Labels")]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "email__lables-list" },
              _vm._l(_vm.emailTags, function(tag, index) {
                return _c(
                  "div",
                  {
                    key: index,
                    staticClass:
                      "email__label flex items-center mb-4 cursor-pointer",
                    on: {
                      click: function($event) {
                        return _vm.updateFilter(tag.value)
                      }
                    }
                  },
                  [
                    _c("div", {
                      staticClass: "ml-1 h-4 w-4 rounded-full mr-4",
                      class: "bg-" + tag.color
                    }),
                    _vm._v(" "),
                    _c(
                      "span",
                      {
                        staticClass: "text-lg",
                        class: { "text-primary": _vm.mailFilter == tag.value }
                      },
                      [_vm._v(_vm._s(tag.text))]
                    )
                  ]
                )
              }),
              0
            )
          ])
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/email/EmailView.vue?vue&type=template&id=6af19f7b&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/email/EmailView.vue?vue&type=template&id=6af19f7b& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
    [
      _c(
        "vs-sidebar",
        {
          staticClass: "full-vs-sidebar email-view-sidebar",
          attrs: {
            "click-not-close": "",
            parent: "#email-app",
            "hidden-background": true,
            "position-right": ""
          },
          model: {
            value: _vm.isSidebarActive,
            callback: function($$v) {
              _vm.isSidebarActive = $$v
            },
            expression: "isSidebarActive"
          }
        },
        [
          _vm.currentMail
            ? _c(
                "div",
                {
                  staticClass: "mail-sidebar-content px-0 sm:py-6 pt-2 h-full"
                },
                [
                  _c(
                    "div",
                    {
                      staticClass:
                        "flex flex-wrap items-center email-header justify-between md:px-8 px-6 sm:pb-2"
                    },
                    [
                      _c("div", { staticClass: "flex mb-4" }, [
                        _c(
                          "div",
                          { staticClass: "flex items-center" },
                          [
                            _c("feather-icon", {
                              staticClass: "cursor-pointer mr-4",
                              attrs: {
                                icon: "ArrowLeftIcon",
                                "svg-classes": "w-6 h-6"
                              },
                              on: {
                                click: function($event) {
                                  return _vm.$emit("closeSidebar")
                                }
                              }
                            }),
                            _vm._v(" "),
                            _vm.currentMail.subject
                              ? _c("h3", [
                                  _vm._v(_vm._s(_vm.currentMail.subject))
                                ])
                              : _c("h3", [_vm._v("(no subject)")])
                          ],
                          1
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "ml-10 mb-4 mt-1" }, [
                        _c(
                          "div",
                          {
                            staticClass:
                              "email__actions--single flex items-baseline"
                          },
                          [
                            _c("feather-icon", {
                              staticClass: "cursor-pointer",
                              attrs: {
                                icon: "StarIcon",
                                svgClasses: [
                                  {
                                    "text-warning stroke-current stroke-current":
                                      _vm.currentMail.isStarred
                                  },
                                  "h-6 w-6"
                                ]
                              },
                              on: { click: _vm.toggleIsStarred }
                            }),
                            _vm._v(" "),
                            _c(
                              "vs-dropdown",
                              {
                                staticClass: "cursor-pointer",
                                attrs: {
                                  "vs-custom-content": "",
                                  "vs-trigger-click": ""
                                }
                              },
                              [
                                _c("feather-icon", {
                                  staticClass: "ml-4",
                                  attrs: {
                                    icon: "FolderIcon",
                                    "svg-classes": "h-6 w-6"
                                  }
                                }),
                                _vm._v(" "),
                                _c("vs-dropdown-menu", [
                                  _c("ul", { staticClass: "my-2" }, [
                                    _vm.currentMail.mailType != "inboxed"
                                      ? _c(
                                          "li",
                                          {
                                            staticClass:
                                              "px-4 mb-2 flex items-start cursor-pointer hover:text-primary",
                                            on: {
                                              click: function($event) {
                                                return _vm.moveTo("inboxed")
                                              }
                                            }
                                          },
                                          [
                                            _c("feather-icon", {
                                              attrs: {
                                                icon: "MailIcon",
                                                "svg-classes": "h-5 w-5"
                                              }
                                            }),
                                            _vm._v(" "),
                                            _c(
                                              "span",
                                              { staticClass: "ml-3" },
                                              [_vm._v("Inbox")]
                                            )
                                          ],
                                          1
                                        )
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _vm.currentMail.mailType != "drafted"
                                      ? _c(
                                          "li",
                                          {
                                            staticClass:
                                              "px-4 mb-2 flex items-start cursor-pointer hover:text-primary",
                                            on: {
                                              click: function($event) {
                                                return _vm.moveTo("drafted")
                                              }
                                            }
                                          },
                                          [
                                            _c("feather-icon", {
                                              attrs: {
                                                icon: "Edit2Icon",
                                                "svg-classes": "h-5 w-5"
                                              }
                                            }),
                                            _vm._v(" "),
                                            _c(
                                              "span",
                                              { staticClass: "ml-3" },
                                              [_vm._v("Draft")]
                                            )
                                          ],
                                          1
                                        )
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _vm.currentMail.mailType != "spam"
                                      ? _c(
                                          "li",
                                          {
                                            staticClass:
                                              "px-4 mb-2 flex items-start cursor-pointer hover:text-primary",
                                            on: {
                                              click: function($event) {
                                                return _vm.moveTo("spam")
                                              }
                                            }
                                          },
                                          [
                                            _c("feather-icon", {
                                              attrs: {
                                                icon: "InfoIcon",
                                                "svg-classes": "h-5 w-5"
                                              }
                                            }),
                                            _vm._v(" "),
                                            _c(
                                              "span",
                                              { staticClass: "ml-3" },
                                              [_vm._v("Spam")]
                                            )
                                          ],
                                          1
                                        )
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _vm.currentMail.mailType != "trashed"
                                      ? _c(
                                          "li",
                                          {
                                            staticClass:
                                              "px-4 flex items-start cursor-pointer hover:text-primary",
                                            on: {
                                              click: function($event) {
                                                return _vm.moveTo("trashed")
                                              }
                                            }
                                          },
                                          [
                                            _c("feather-icon", {
                                              attrs: {
                                                icon: "TrashIcon",
                                                "svg-classes": "h-5 w-5"
                                              }
                                            }),
                                            _vm._v(" "),
                                            _c(
                                              "span",
                                              { staticClass: "ml-3" },
                                              [_vm._v("Trash")]
                                            )
                                          ],
                                          1
                                        )
                                      : _vm._e()
                                  ])
                                ])
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "vs-dropdown",
                              {
                                staticClass: "cursor-pointer",
                                attrs: {
                                  "vs-custom-content": "",
                                  "vs-trigger-click": ""
                                }
                              },
                              [
                                _c("feather-icon", {
                                  staticClass: "cursor-pointer ml-4",
                                  attrs: {
                                    icon: "TagIcon",
                                    "svg-classes": "h-6 w-6"
                                  }
                                }),
                                _vm._v(" "),
                                _c(
                                  "vs-dropdown-menu",
                                  { staticStyle: { "z-index": "40001" } },
                                  _vm._l(_vm.emailTags, function(label, index) {
                                    return _c(
                                      "vs-dropdown-item",
                                      { key: index },
                                      [
                                        _c(
                                          "vs-checkbox",
                                          {
                                            attrs: { "vs-value": label.value },
                                            on: {
                                              click: function($event) {
                                                $event.stopPropagation()
                                              }
                                            },
                                            model: {
                                              value: _vm.currentMailLabels,
                                              callback: function($$v) {
                                                _vm.currentMailLabels = $$v
                                              },
                                              expression: "currentMailLabels"
                                            }
                                          },
                                          [_vm._v(_vm._s(label.text))]
                                        )
                                      ],
                                      1
                                    )
                                  }),
                                  1
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c("feather-icon", {
                              staticClass: "cursor-pointer ml-4",
                              attrs: {
                                icon: "MailIcon",
                                "svg-classes": "h-6 w-6"
                              },
                              on: {
                                click: function($event) {
                                  return _vm.$emit("markUnread")
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("feather-icon", {
                              staticClass: "cursor-pointer ml-4",
                              attrs: {
                                icon: "TrashIcon",
                                "svg-classes": "h-6 w-6"
                              },
                              on: {
                                click: function($event) {
                                  return _vm.$emit("removeMail")
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("feather-icon", {
                              staticClass:
                                "cursor-pointer ml-4 hidden sm:inline-flex",
                              attrs: {
                                icon: "ChevronsLeftIcon",
                                "svg-classes": "h-6 w-6"
                              },
                              on: {
                                click: function($event) {
                                  return _vm.$emit("previousMail")
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("feather-icon", {
                              staticClass:
                                "cursor-pointer ml-4 hidden sm:inline-flex",
                              attrs: {
                                icon: "ChevronsRightIcon",
                                "svg-classes": "h-6 w-6"
                              },
                              on: {
                                click: function($event) {
                                  return _vm.$emit("nextMail")
                                }
                              }
                            })
                          ],
                          1
                        )
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "VuePerfectScrollbar",
                    {
                      staticClass: "scroll-area md:px-8 pt-4 px-6",
                      attrs: { settings: _vm.settings }
                    },
                    [
                      _c("div", { staticClass: "vx-row" }, [
                        _c("div", { staticClass: "vx-col w-full" }, [
                          _c(
                            "div",
                            {
                              staticClass:
                                "email__labels--single flex ml-10 items-center mt-2"
                            },
                            [
                              _c(
                                "transition-group",
                                {
                                  staticClass: "flex",
                                  attrs: { name: "list", tag: "div" }
                                },
                                _vm._l(_vm.currentMail.labels, function(label) {
                                  return _c(
                                    "div",
                                    {
                                      key: label,
                                      staticClass:
                                        "open-mail-label flex items-center mr-4"
                                    },
                                    [
                                      _c("div", {
                                        staticClass:
                                          "h-3 w-3 rounded-full mr-1",
                                        class: "bg-" + _vm.labelColor(label)
                                      }),
                                      _vm._v(" "),
                                      _c("span", { staticClass: "text-sm" }, [
                                        _vm._v(
                                          _vm._s(_vm._f("capitalize")(label))
                                        )
                                      ])
                                    ]
                                  )
                                }),
                                0
                              )
                            ],
                            1
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("br"),
                      _vm._v(" "),
                      _vm.currentMail.replies.length && !_vm.showThread
                        ? _c("div", { staticClass: "vx-row mb-4" }, [
                            _c("div", { staticClass: "vx-col w-full" }, [
                              _c(
                                "span",
                                {
                                  staticClass:
                                    "text-primary font-medium ml-10 cursor-pointer",
                                  on: {
                                    click: function($event) {
                                      _vm.showThread = true
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    _vm._s(_vm.currentMail.replies.length) +
                                      " Earlier Messages"
                                  )
                                ]
                              )
                            ])
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.isSidebarActive
                        ? _c(
                            "div",
                            [
                              _vm._l(
                                _vm.currentMail.replies.slice().reverse(),
                                function(threadMail) {
                                  return _vm.showThread
                                    ? _c(
                                        "div",
                                        {
                                          key: threadMail.id,
                                          staticClass: "vx-row"
                                        },
                                        [
                                          _c(
                                            "div",
                                            { staticClass: "vx-col w-full" },
                                            [
                                              _c(
                                                "vx-card",
                                                { staticClass: "px-4 mb-10" },
                                                [
                                                  _c(
                                                    "div",
                                                    { staticClass: "vx-row" },
                                                    [
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "vx-col w-full border-b border-l-0 border-r-0 border-t-0 d-theme-border-grey-light border-solid flex justify-between flex items-center"
                                                        },
                                                        [
                                                          _c(
                                                            "div",
                                                            {
                                                              staticClass:
                                                                "flex items-center"
                                                            },
                                                            [
                                                              _c(
                                                                "div",
                                                                [
                                                                  _c(
                                                                    "vs-avatar",
                                                                    {
                                                                      staticClass:
                                                                        "sender__avatar--single flex-shrink-0 mr-3 border-2 border-solid border-white",
                                                                      attrs: {
                                                                        src: __webpack_require__("./resources/js/src/assets/images/portrait/small sync recursive ^\\.\\/.*$")("./" +
                                                                          threadMail.img),
                                                                        size:
                                                                          "65px"
                                                                      }
                                                                    }
                                                                  )
                                                                ],
                                                                1
                                                              ),
                                                              _vm._v(" "),
                                                              _c(
                                                                "div",
                                                                {
                                                                  staticClass:
                                                                    "flex flex-col"
                                                                },
                                                                [
                                                                  _c(
                                                                    "h4",
                                                                    {
                                                                      staticClass:
                                                                        "mb-1"
                                                                    },
                                                                    [
                                                                      _vm._v(
                                                                        _vm._s(
                                                                          threadMail.sender_name
                                                                        )
                                                                      )
                                                                    ]
                                                                  ),
                                                                  _vm._v(" "),
                                                                  _c(
                                                                    "div",
                                                                    {
                                                                      staticClass:
                                                                        "flex items-center"
                                                                    },
                                                                    [
                                                                      _c(
                                                                        "span",
                                                                        {
                                                                          staticClass:
                                                                            "text-sm"
                                                                        },
                                                                        [
                                                                          _vm._v(
                                                                            _vm._s(
                                                                              threadMail.sender
                                                                            )
                                                                          )
                                                                        ]
                                                                      ),
                                                                      _vm._v(
                                                                        " "
                                                                      ),
                                                                      _c(
                                                                        "vs-dropdown",
                                                                        {
                                                                          attrs: {
                                                                            "vs-custom-content":
                                                                              "",
                                                                            "vs-trigger-click":
                                                                              ""
                                                                          }
                                                                        },
                                                                        [
                                                                          _c(
                                                                            "feather-icon",
                                                                            {
                                                                              staticClass:
                                                                                "cursor-pointer",
                                                                              staticStyle: {
                                                                                width:
                                                                                  "1rem",
                                                                                height:
                                                                                  "1rem"
                                                                              },
                                                                              attrs: {
                                                                                icon:
                                                                                  "ChevronDownIcon"
                                                                              }
                                                                            }
                                                                          ),
                                                                          _vm._v(
                                                                            " "
                                                                          ),
                                                                          _c(
                                                                            "vs-dropdown-menu",
                                                                            {
                                                                              staticStyle: {
                                                                                "z-index":
                                                                                  "40001"
                                                                              }
                                                                            },
                                                                            [
                                                                              _c(
                                                                                "div",
                                                                                {
                                                                                  staticClass:
                                                                                    "p-2"
                                                                                },
                                                                                [
                                                                                  _c(
                                                                                    "p",
                                                                                    {
                                                                                      staticClass:
                                                                                        "text-sm mb-1"
                                                                                    },
                                                                                    [
                                                                                      _vm._v(
                                                                                        "From: "
                                                                                      ),
                                                                                      _c(
                                                                                        "span",
                                                                                        {
                                                                                          staticClass:
                                                                                            "font-semibold"
                                                                                        },
                                                                                        [
                                                                                          _vm._v(
                                                                                            " " +
                                                                                              _vm._s(
                                                                                                threadMail.sender
                                                                                              ) +
                                                                                              " "
                                                                                          )
                                                                                        ]
                                                                                      )
                                                                                    ]
                                                                                  ),
                                                                                  _vm._v(
                                                                                    " "
                                                                                  ),
                                                                                  _c(
                                                                                    "p",
                                                                                    {
                                                                                      staticClass:
                                                                                        "text-sm mb-1"
                                                                                    },
                                                                                    [
                                                                                      _vm._v(
                                                                                        "To: "
                                                                                      ),
                                                                                      _c(
                                                                                        "span",
                                                                                        {
                                                                                          staticClass:
                                                                                            "font-semibold"
                                                                                        },
                                                                                        [
                                                                                          _vm._v(
                                                                                            " " +
                                                                                              _vm._s(
                                                                                                _vm._f(
                                                                                                  "csv"
                                                                                                )(
                                                                                                  threadMail.to
                                                                                                )
                                                                                              ) +
                                                                                              " "
                                                                                          )
                                                                                        ]
                                                                                      )
                                                                                    ]
                                                                                  ),
                                                                                  _vm._v(
                                                                                    " "
                                                                                  ),
                                                                                  _c(
                                                                                    "p",
                                                                                    {
                                                                                      staticClass:
                                                                                        "text-sm mb-1"
                                                                                    },
                                                                                    [
                                                                                      _vm._v(
                                                                                        "Date: "
                                                                                      ),
                                                                                      _c(
                                                                                        "span",
                                                                                        {
                                                                                          staticClass:
                                                                                            "font-semibold"
                                                                                        },
                                                                                        [
                                                                                          _vm._v(
                                                                                            " " +
                                                                                              _vm._s(
                                                                                                _vm._f(
                                                                                                  "time"
                                                                                                )(
                                                                                                  threadMail.time
                                                                                                )
                                                                                              ) +
                                                                                              " " +
                                                                                              _vm._s(
                                                                                                _vm._f(
                                                                                                  "date"
                                                                                                )(
                                                                                                  threadMail.time,
                                                                                                  true
                                                                                                )
                                                                                              ) +
                                                                                              " "
                                                                                          )
                                                                                        ]
                                                                                      )
                                                                                    ]
                                                                                  ),
                                                                                  _vm._v(
                                                                                    " "
                                                                                  ),
                                                                                  threadMail
                                                                                    .cc
                                                                                    .length
                                                                                    ? _c(
                                                                                        "p",
                                                                                        {
                                                                                          staticClass:
                                                                                            "text-sm mb-1"
                                                                                        },
                                                                                        [
                                                                                          _vm._v(
                                                                                            "cc: "
                                                                                          ),
                                                                                          _c(
                                                                                            "span",
                                                                                            {
                                                                                              staticClass:
                                                                                                "font-semibold"
                                                                                            },
                                                                                            [
                                                                                              _vm._v(
                                                                                                " " +
                                                                                                  _vm._s(
                                                                                                    _vm._f(
                                                                                                      "csv"
                                                                                                    )(
                                                                                                      threadMail.cc
                                                                                                    )
                                                                                                  ) +
                                                                                                  " "
                                                                                              )
                                                                                            ]
                                                                                          )
                                                                                        ]
                                                                                      )
                                                                                    : _vm._e()
                                                                                ]
                                                                              )
                                                                            ]
                                                                          )
                                                                        ],
                                                                        1
                                                                      )
                                                                    ],
                                                                    1
                                                                  )
                                                                ]
                                                              )
                                                            ]
                                                          ),
                                                          _vm._v(" "),
                                                          _c(
                                                            "div",
                                                            {
                                                              staticClass:
                                                                "flex flex-col justify-end"
                                                            },
                                                            [
                                                              _c(
                                                                "span",
                                                                {
                                                                  staticClass:
                                                                    "text-right"
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    _vm._s(
                                                                      _vm._f(
                                                                        "date"
                                                                      )(
                                                                        threadMail.time,
                                                                        true
                                                                      )
                                                                    )
                                                                  )
                                                                ]
                                                              ),
                                                              _vm._v(" "),
                                                              _c(
                                                                "div",
                                                                {
                                                                  staticClass:
                                                                    "flex justify-end mt-2"
                                                                },
                                                                [
                                                                  _c(
                                                                    "span",
                                                                    {
                                                                      staticClass:
                                                                        "text-right"
                                                                    },
                                                                    [
                                                                      _vm._v(
                                                                        _vm._s(
                                                                          _vm._f(
                                                                            "time"
                                                                          )(
                                                                            threadMail.time
                                                                          )
                                                                        )
                                                                      )
                                                                    ]
                                                                  )
                                                                ]
                                                              )
                                                            ]
                                                          )
                                                        ]
                                                      )
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "div",
                                                    { staticClass: "vx-row" },
                                                    [
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "vx-col w-full"
                                                        },
                                                        [
                                                          _c("div", {
                                                            staticClass:
                                                              "mail__content break-words mt-8 mb-4",
                                                            domProps: {
                                                              innerHTML: _vm._s(
                                                                threadMail.message
                                                              )
                                                            }
                                                          })
                                                        ]
                                                      )
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  threadMail.attachments.length
                                                    ? _c(
                                                        "div",
                                                        {
                                                          staticClass: "vx-row"
                                                        },
                                                        [
                                                          _c(
                                                            "div",
                                                            {
                                                              staticClass:
                                                                "vx-col w-full border-b border-l-0 border-r-0 border-t-0 d-theme-border-grey-light border-solid mb-6 flex"
                                                            },
                                                            [
                                                              _c(
                                                                "feather-icon",
                                                                {
                                                                  staticClass:
                                                                    "mr-2",
                                                                  attrs: {
                                                                    icon:
                                                                      "PaperclipIcon"
                                                                  }
                                                                }
                                                              ),
                                                              _vm._v(" "),
                                                              _c(
                                                                "span",
                                                                {
                                                                  staticClass:
                                                                    "block py-4"
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    "ATTACHMENTS"
                                                                  )
                                                                ]
                                                              )
                                                            ],
                                                            1
                                                          ),
                                                          _vm._v(" "),
                                                          _c(
                                                            "div",
                                                            {
                                                              staticClass:
                                                                "flex"
                                                            },
                                                            _vm._l(
                                                              threadMail.attachments,
                                                              function(
                                                                attachment,
                                                                index
                                                              ) {
                                                                return _c(
                                                                  "div",
                                                                  {
                                                                    key: index,
                                                                    staticClass:
                                                                      "mail__attachment"
                                                                  },
                                                                  [
                                                                    _c(
                                                                      "vs-chip",
                                                                      {
                                                                        staticClass:
                                                                          "px-4 py-2 mr-3",
                                                                        attrs: {
                                                                          color:
                                                                            "primary"
                                                                        }
                                                                      },
                                                                      [
                                                                        _vm._v(
                                                                          _vm._s(
                                                                            attachment
                                                                          )
                                                                        )
                                                                      ]
                                                                    )
                                                                  ],
                                                                  1
                                                                )
                                                              }
                                                            ),
                                                            0
                                                          )
                                                        ]
                                                      )
                                                    : _vm._e()
                                                ]
                                              )
                                            ],
                                            1
                                          )
                                        ]
                                      )
                                    : _vm._e()
                                }
                              ),
                              _vm._v(" "),
                              _c("div", { staticClass: "vx-row" }, [
                                _c(
                                  "div",
                                  { staticClass: "vx-col w-full" },
                                  [
                                    _c("vx-card", { staticClass: "px-4" }, [
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "vx-row w-full border-b border-l-0 border-r-0 border-t-0 d-theme-border-grey-light border-solid flex justify-between flex items-center"
                                        },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "vx-col sm:w-4/5 w-full flex flex-wrap items-center mb-2"
                                            },
                                            [
                                              _c("vs-avatar", {
                                                staticClass:
                                                  "sender__avatar--single flex-shrink-0 mr-3 border-2 border-solid border-white",
                                                attrs: {
                                                  src: __webpack_require__("./resources/js/src/assets/images/portrait/small sync recursive ^\\.\\/.*$")("./" +
                                                    _vm.currentMail.img),
                                                  size: "65px"
                                                }
                                              }),
                                              _vm._v(" "),
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "flex flex-col my-2"
                                                },
                                                [
                                                  _c(
                                                    "h4",
                                                    { staticClass: "mb-1" },
                                                    [
                                                      _vm._v(
                                                        _vm._s(
                                                          _vm.currentMail
                                                            .sender_name
                                                        )
                                                      )
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "flex items-center"
                                                    },
                                                    [
                                                      _c(
                                                        "span",
                                                        {
                                                          staticClass: "text-sm"
                                                        },
                                                        [
                                                          _vm._v(
                                                            _vm._s(
                                                              _vm.currentMail
                                                                .sender
                                                            )
                                                          )
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "vs-dropdown",
                                                        {
                                                          staticClass:
                                                            "inline-flex",
                                                          attrs: {
                                                            "vs-custom-content":
                                                              "",
                                                            "vs-trigger-click":
                                                              ""
                                                          }
                                                        },
                                                        [
                                                          _c("feather-icon", {
                                                            staticClass:
                                                              "cursor-pointer",
                                                            staticStyle: {
                                                              width: "1rem",
                                                              height: "1rem"
                                                            },
                                                            attrs: {
                                                              icon:
                                                                "ChevronDownIcon"
                                                            }
                                                          }),
                                                          _vm._v(" "),
                                                          _c(
                                                            "vs-dropdown-menu",
                                                            {
                                                              staticStyle: {
                                                                "z-index":
                                                                  "40001"
                                                              }
                                                            },
                                                            [
                                                              _c(
                                                                "div",
                                                                {
                                                                  staticClass:
                                                                    "p-2"
                                                                },
                                                                [
                                                                  _c(
                                                                    "p",
                                                                    {
                                                                      staticClass:
                                                                        "text-sm mb-1"
                                                                    },
                                                                    [
                                                                      _vm._v(
                                                                        "From: "
                                                                      ),
                                                                      _c(
                                                                        "span",
                                                                        {
                                                                          staticClass:
                                                                            "font-semibold"
                                                                        },
                                                                        [
                                                                          _vm._v(
                                                                            " " +
                                                                              _vm._s(
                                                                                _vm
                                                                                  .currentMail
                                                                                  .sender
                                                                              ) +
                                                                              " "
                                                                          )
                                                                        ]
                                                                      )
                                                                    ]
                                                                  ),
                                                                  _vm._v(" "),
                                                                  _c(
                                                                    "p",
                                                                    {
                                                                      staticClass:
                                                                        "text-sm mb-1"
                                                                    },
                                                                    [
                                                                      _vm._v(
                                                                        "To: "
                                                                      ),
                                                                      _c(
                                                                        "span",
                                                                        {
                                                                          staticClass:
                                                                            "font-semibold"
                                                                        },
                                                                        [
                                                                          _vm._v(
                                                                            " " +
                                                                              _vm._s(
                                                                                _vm._f(
                                                                                  "csv"
                                                                                )(
                                                                                  _vm
                                                                                    .currentMail
                                                                                    .to
                                                                                )
                                                                              ) +
                                                                              " "
                                                                          )
                                                                        ]
                                                                      )
                                                                    ]
                                                                  ),
                                                                  _vm._v(" "),
                                                                  _c(
                                                                    "p",
                                                                    {
                                                                      staticClass:
                                                                        "text-sm mb-1"
                                                                    },
                                                                    [
                                                                      _vm._v(
                                                                        "Date: "
                                                                      ),
                                                                      _c(
                                                                        "span",
                                                                        {
                                                                          staticClass:
                                                                            "font-semibold"
                                                                        },
                                                                        [
                                                                          _vm._v(
                                                                            " " +
                                                                              _vm._s(
                                                                                _vm._f(
                                                                                  "time"
                                                                                )(
                                                                                  _vm
                                                                                    .currentMail
                                                                                    .time
                                                                                )
                                                                              ) +
                                                                              " " +
                                                                              _vm._s(
                                                                                _vm._f(
                                                                                  "date"
                                                                                )(
                                                                                  _vm
                                                                                    .currentMail
                                                                                    .time,
                                                                                  true
                                                                                )
                                                                              ) +
                                                                              " "
                                                                          )
                                                                        ]
                                                                      )
                                                                    ]
                                                                  ),
                                                                  _vm._v(" "),
                                                                  _vm
                                                                    .currentMail
                                                                    .cc.length
                                                                    ? _c(
                                                                        "p",
                                                                        {
                                                                          staticClass:
                                                                            "text-sm mb-1"
                                                                        },
                                                                        [
                                                                          _vm._v(
                                                                            "cc: "
                                                                          ),
                                                                          _c(
                                                                            "span",
                                                                            {
                                                                              staticClass:
                                                                                "font-semibold"
                                                                            },
                                                                            [
                                                                              _vm._v(
                                                                                " " +
                                                                                  _vm._s(
                                                                                    _vm._f(
                                                                                      "csv"
                                                                                    )(
                                                                                      _vm
                                                                                        .currentMail
                                                                                        .cc
                                                                                    )
                                                                                  ) +
                                                                                  " "
                                                                              )
                                                                            ]
                                                                          )
                                                                        ]
                                                                      )
                                                                    : _vm._e()
                                                                ]
                                                              )
                                                            ]
                                                          )
                                                        ],
                                                        1
                                                      )
                                                    ],
                                                    1
                                                  )
                                                ]
                                              )
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "vx-col sm:w-1/5 w-full flex sm:flex-col items-center sm:justify-end mb-2"
                                            },
                                            [
                                              _c(
                                                "span",
                                                {
                                                  staticClass:
                                                    "flex sm:mr-0 mr-2 self-end whitespace-no-wrap"
                                                },
                                                [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm._f("time")(
                                                        _vm.currentMail.time
                                                      )
                                                    )
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "span",
                                                {
                                                  staticClass:
                                                    "flex self-end sm:mt-2 mt-0 whitespace-no-wrap"
                                                },
                                                [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm._f("date")(
                                                        _vm.currentMail.time,
                                                        true
                                                      )
                                                    )
                                                  )
                                                ]
                                              )
                                            ]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c("div", { staticClass: "vx-row" }, [
                                        _c(
                                          "div",
                                          { staticClass: "vx-col w-full" },
                                          [
                                            _c("div", {
                                              staticClass:
                                                "mail__content break-words mt-8 mb-4",
                                              domProps: {
                                                innerHTML: _vm._s(
                                                  _vm.currentMail.message
                                                )
                                              }
                                            })
                                          ]
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _vm.currentMail.attachments.length
                                        ? _c("div", { staticClass: "vx-row" }, [
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "vx-col w-full border-b border-l-0 border-r-0 border-t-0 d-theme-border-grey-light border-solid mb-6 flex"
                                              },
                                              [
                                                _c("feather-icon", {
                                                  staticClass: "mr-2",
                                                  attrs: {
                                                    icon: "PaperclipIcon"
                                                  }
                                                }),
                                                _vm._v(" "),
                                                _c(
                                                  "span",
                                                  { staticClass: "block py-4" },
                                                  [_vm._v("ATTACHMENTS")]
                                                )
                                              ],
                                              1
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "div",
                                              { staticClass: "flex" },
                                              _vm._l(
                                                _vm.currentMail.attachments,
                                                function(attachment, index) {
                                                  return _c(
                                                    "div",
                                                    {
                                                      key: index,
                                                      staticClass:
                                                        "mail__attachment"
                                                    },
                                                    [
                                                      _c(
                                                        "vs-chip",
                                                        {
                                                          staticClass:
                                                            "px-4 py-2 mr-3",
                                                          attrs: {
                                                            color: "primary"
                                                          }
                                                        },
                                                        [
                                                          _vm._v(
                                                            _vm._s(attachment)
                                                          )
                                                        ]
                                                      )
                                                    ],
                                                    1
                                                  )
                                                }
                                              ),
                                              0
                                            )
                                          ])
                                        : _vm._e()
                                    ])
                                  ],
                                  1
                                )
                              ]),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass: "vx-row",
                                  staticStyle: { "margin-top": "2.2rem" }
                                },
                                [
                                  _c(
                                    "div",
                                    { staticClass: "vx-col w-full pb-10" },
                                    [
                                      _c("vx-card", [
                                        _c("div", { staticClass: "vx-row" }, [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "vx-col w-full flex justify-between"
                                            },
                                            [
                                              _c(
                                                "span",
                                                { staticClass: "text-lg" },
                                                [
                                                  _vm._v("Click here to "),
                                                  _c(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "text-primary font-semibold cursor-pointer"
                                                    },
                                                    [_vm._v("Reply")]
                                                  ),
                                                  _vm._v(" or "),
                                                  _c(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "text-primary font-semibold cursor-pointer"
                                                    },
                                                    [_vm._v("Forward")]
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c("feather-icon", {
                                                attrs: { icon: "PaperclipIcon" }
                                              })
                                            ],
                                            1
                                          )
                                        ])
                                      ])
                                    ],
                                    1
                                  )
                                ]
                              )
                            ],
                            2
                          )
                        : _vm._e()
                    ]
                  )
                ],
                1
              )
            : _vm._e()
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/email/MailItem.vue?vue&type=template&id=c3e06480&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/email/MailItem.vue?vue&type=template&id=c3e06480& ***!
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
  return _c(
    "div",
    {
      staticClass: "mail__mail-item sm:px-4 px-2 py-6",
      class: { "mail__opened-mail": !_vm.mail.unread }
    },
    [
      _c(
        "div",
        { staticClass: "flex w-full" },
        [
          _c("vs-avatar", {
            staticClass:
              "sender__avatar flex-shrink-0 mr-3 border-2 border-solid border-white",
            attrs: {
              src: __webpack_require__("./resources/js/src/assets/images/portrait/small sync recursive ^\\.\\/.*$")("./" + _vm.mail.img),
              size: "40px"
            }
          }),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "flex w-full justify-between items-start" },
            [
              _c("div", { staticClass: "mail__details" }, [
                _c(
                  "h5",
                  {
                    staticClass: "mb-1",
                    class: { "font-semibold": _vm.mail.unread }
                  },
                  [_vm._v(_vm._s(_vm.mail.sender_name))]
                ),
                _vm._v(" "),
                _vm.mail.subject
                  ? _c("span", [_vm._v(_vm._s(_vm.mail.subject))])
                  : _c("span", [_vm._v("(no subject)")])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "mail-item__meta flex items-center" }, [
                _c(
                  "div",
                  { staticClass: "email__labels hidden sm:flex items-center" },
                  _vm._l(_vm.mail.labels, function(label, index) {
                    return _c("div", {
                      key: index,
                      staticClass: "h-3 w-3 rounded-full mr-2",
                      class: "bg-" + _vm.labelColor(label)
                    })
                  }),
                  0
                ),
                _vm._v(" "),
                _c("span", [_vm._v(_vm._s(_vm._f("date")(_vm.mail.time)))])
              ])
            ]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "flex w-full" }, [
        _c(
          "div",
          { staticClass: "flex items-center ml-1" },
          [
            _c("vs-checkbox", {
              staticClass: "vs-checkbox-small ml-0 mr-1",
              on: {
                click: function($event) {
                  $event.stopPropagation()
                }
              },
              model: {
                value: _vm.isSelectedMail,
                callback: function($$v) {
                  _vm.isSelectedMail = $$v
                },
                expression: "isSelectedMail"
              }
            }),
            _vm._v(" "),
            _c("feather-icon", {
              staticClass: "cursor-pointer",
              attrs: {
                icon: "StarIcon",
                svgClasses: [
                  {
                    "text-warning fill-current stroke-current":
                      _vm.mail.isStarred
                  },
                  "w-5",
                  "h-5"
                ]
              },
              on: {
                click: function($event) {
                  $event.stopPropagation()
                  return _vm.toggleIsStarred($event)
                }
              }
            })
          ],
          1
        ),
        _vm._v(" "),
        _c("div", { staticClass: "mail__message truncate ml-3" }, [
          _c("span", [_vm._v(_vm._s(_vm._f("filter_tags")(_vm.mail.message)))])
        ])
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



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

/***/ "./resources/js/src/views/apps/email/Email.vue":
/*!*****************************************************!*\
  !*** ./resources/js/src/views/apps/email/Email.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Email_vue_vue_type_template_id_629e4b94___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Email.vue?vue&type=template&id=629e4b94& */ "./resources/js/src/views/apps/email/Email.vue?vue&type=template&id=629e4b94&");
/* harmony import */ var _Email_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Email.vue?vue&type=script&lang=js& */ "./resources/js/src/views/apps/email/Email.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Email_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Email.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/views/apps/email/Email.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Email_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Email_vue_vue_type_template_id_629e4b94___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Email_vue_vue_type_template_id_629e4b94___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/apps/email/Email.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/apps/email/Email.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/src/views/apps/email/Email.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Email_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Email.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/email/Email.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Email_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/apps/email/Email.vue?vue&type=style&index=0&lang=scss&":
/*!***************************************************************************************!*\
  !*** ./resources/js/src/views/apps/email/Email.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Email_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../node_modules/sass-loader/lib/loader.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Email.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/email/Email.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Email_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Email_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Email_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Email_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Email_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/apps/email/Email.vue?vue&type=template&id=629e4b94&":
/*!************************************************************************************!*\
  !*** ./resources/js/src/views/apps/email/Email.vue?vue&type=template&id=629e4b94& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Email_vue_vue_type_template_id_629e4b94___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Email.vue?vue&type=template&id=629e4b94& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/email/Email.vue?vue&type=template&id=629e4b94&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Email_vue_vue_type_template_id_629e4b94___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Email_vue_vue_type_template_id_629e4b94___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/apps/email/EmailSidebar.vue":
/*!************************************************************!*\
  !*** ./resources/js/src/views/apps/email/EmailSidebar.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EmailSidebar_vue_vue_type_template_id_25d30276___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EmailSidebar.vue?vue&type=template&id=25d30276& */ "./resources/js/src/views/apps/email/EmailSidebar.vue?vue&type=template&id=25d30276&");
/* harmony import */ var _EmailSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EmailSidebar.vue?vue&type=script&lang=js& */ "./resources/js/src/views/apps/email/EmailSidebar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EmailSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EmailSidebar_vue_vue_type_template_id_25d30276___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EmailSidebar_vue_vue_type_template_id_25d30276___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/apps/email/EmailSidebar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/apps/email/EmailSidebar.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/src/views/apps/email/EmailSidebar.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./EmailSidebar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/email/EmailSidebar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/apps/email/EmailSidebar.vue?vue&type=template&id=25d30276&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/src/views/apps/email/EmailSidebar.vue?vue&type=template&id=25d30276& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailSidebar_vue_vue_type_template_id_25d30276___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./EmailSidebar.vue?vue&type=template&id=25d30276& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/email/EmailSidebar.vue?vue&type=template&id=25d30276&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailSidebar_vue_vue_type_template_id_25d30276___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailSidebar_vue_vue_type_template_id_25d30276___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/apps/email/EmailView.vue":
/*!*********************************************************!*\
  !*** ./resources/js/src/views/apps/email/EmailView.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EmailView_vue_vue_type_template_id_6af19f7b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EmailView.vue?vue&type=template&id=6af19f7b& */ "./resources/js/src/views/apps/email/EmailView.vue?vue&type=template&id=6af19f7b&");
/* harmony import */ var _EmailView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EmailView.vue?vue&type=script&lang=js& */ "./resources/js/src/views/apps/email/EmailView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EmailView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EmailView_vue_vue_type_template_id_6af19f7b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EmailView_vue_vue_type_template_id_6af19f7b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/apps/email/EmailView.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/apps/email/EmailView.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/src/views/apps/email/EmailView.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./EmailView.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/email/EmailView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/apps/email/EmailView.vue?vue&type=template&id=6af19f7b&":
/*!****************************************************************************************!*\
  !*** ./resources/js/src/views/apps/email/EmailView.vue?vue&type=template&id=6af19f7b& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailView_vue_vue_type_template_id_6af19f7b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./EmailView.vue?vue&type=template&id=6af19f7b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/email/EmailView.vue?vue&type=template&id=6af19f7b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailView_vue_vue_type_template_id_6af19f7b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailView_vue_vue_type_template_id_6af19f7b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/apps/email/MailItem.vue":
/*!********************************************************!*\
  !*** ./resources/js/src/views/apps/email/MailItem.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MailItem_vue_vue_type_template_id_c3e06480___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MailItem.vue?vue&type=template&id=c3e06480& */ "./resources/js/src/views/apps/email/MailItem.vue?vue&type=template&id=c3e06480&");
/* harmony import */ var _MailItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MailItem.vue?vue&type=script&lang=js& */ "./resources/js/src/views/apps/email/MailItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MailItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MailItem_vue_vue_type_template_id_c3e06480___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MailItem_vue_vue_type_template_id_c3e06480___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/apps/email/MailItem.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/apps/email/MailItem.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/src/views/apps/email/MailItem.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MailItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./MailItem.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/email/MailItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MailItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/apps/email/MailItem.vue?vue&type=template&id=c3e06480&":
/*!***************************************************************************************!*\
  !*** ./resources/js/src/views/apps/email/MailItem.vue?vue&type=template&id=c3e06480& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MailItem_vue_vue_type_template_id_c3e06480___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./MailItem.vue?vue&type=template&id=c3e06480& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/email/MailItem.vue?vue&type=template&id=c3e06480&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MailItem_vue_vue_type_template_id_c3e06480___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MailItem_vue_vue_type_template_id_c3e06480___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);