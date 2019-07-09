(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[22],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/vx-auto-suggest/VxAutoSuggest.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/vx-auto-suggest/VxAutoSuggest.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    placeholder: {
      type: String,
      "default": 'Search..'
    },
    data: {
      type: Object,
      required: true
    },
    showAction: {
      type: Boolean,
      "default": false
    },
    inputClassses: {
      type: [String, Object, Array]
    },
    autoFocus: {
      type: Boolean,
      "default": false
    },
    showPinned: {
      type: Boolean,
      "default": false
    },
    backgroundOverlay: {
      type: Boolean,
      "default": false
    },
    searchLimit: {
      type: Number,
      "default": 10
    }
  },
  data: function data() {
    return {
      searchQuery: '',
      filteredData: [],
      currentSelected: -1,
      inputFocused: false,
      insideSuggestions: false
    };
  },
  watch: {
    // UPDATE SUGGESTIONS LIST
    searchQuery: function searchQuery(val) {
      var _this = this;

      if (val == '') {
        this.inputInit();
        if (this.bodyOverlay) this.$store.commit('TOGGLE_CONTENT_OVERLAY', false);
      } else {
        if (this.backgroundOverlay && !this.bodyOverlay) this.$store.commit('TOGGLE_CONTENT_OVERLAY', true);
        var exactEle = this.data.data.filter(function (item) {
          return item.label.toLowerCase().startsWith(_this.searchQuery.toLowerCase());
        });
        var containEle = this.data.data.filter(function (item) {
          return !item.label.toLowerCase().startsWith(_this.searchQuery.toLowerCase()) && item.label.toLowerCase().indexOf(_this.searchQuery.toLowerCase()) > -1;
        });
        this.filteredData = exactEle.concat(containEle).slice(0, this.searchLimit);
        if (!this.filteredData[0]) this.currentSelected = -1;
      } // ADD: No result found


      if (!this.filteredData.length && this.searchQuery) {
        this.filteredData = [{
          highlightAction: false,
          index: -1,
          label: 'No results found.',
          labelIcon: 'AlertCircleIcon',
          url: null
        }];
      }
    },
    autoFocus: function autoFocus(val) {
      if (val) this.focusInput();else this.searchQuery = '';
    },
    filteredData: function filteredData() {
      this.currentSelected = 0; // Prevent selecting if first item in list dont have url e.g. 'No Reult'

      if (this.filteredData[0]) {
        if (!this.filteredData[0].url) {
          this.currentSelected = -1;
        }
      }
    }
  },
  computed: {
    bodyOverlay: function bodyOverlay() {
      return this.$store.state.bodyOverlay;
    },
    actionClasses: function actionClasses() {
      var _this2 = this;

      return function (isHighlighted) {
        if (isHighlighted) return "stroke-current text-".concat(_this2.data.highlightColor);
      };
    }
  },
  methods: {
    escPressed: function escPressed() {
      this.$emit('closeSearchbar');
      this.searchQuery = '';
      this.filteredData = [];
    },
    inputInit: function inputInit() {
      if (this.showPinned) {
        var starredData = this.data.data.filter(function (item) {
          return item.highlightAction;
        });
        this.filteredData = starredData;
      } else {
        this.filteredData = [];
      }
    },
    updateInputFocus: function updateInputFocus() {
      var _this3 = this;

      var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      if (val) {
        if (this.searchQuery == '') this.inputInit();
        setTimeout(function () {
          _this3.inputFocused = true;
        }, 100);
      } else {
        if (this.insideSuggestions) return;
        setTimeout(function () {
          _this3.inputFocused = false;
        }, 100);
        this.escPressed();
      }
    },
    suggestionSelected: function suggestionSelected() {
      if (this.bodyOverlay && this.filteredData[0].url) this.$store.commit('TOGGLE_CONTENT_OVERLAY', false);

      if (this.filteredData.length) {
        if (this.filteredData[0].url) {
          this.searchQuery = '';
          if (this.currentSelected >= 0) this.$emit('selected', this.filteredData[this.currentSelected]);else this.$emit('selected', this.filteredData[0]);
          this.filteredData = [];
        }
      }
    },
    actionClicked: function actionClicked() {
      this.$emit('actionClicked', this.filteredData[this.currentSelected]);
      if (!this.filteredData[this.currentSelected].highlightAction) this.filteredData.splice(this.currentSelected, 1);
    },
    increaseIndex: function increaseIndex() {
      var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      if (!val && this.currentSelected > 0) this.currentSelected--;else if (val && this.currentSelected < this.filteredData.length - 1 && this.filteredData[this.currentSelected + 1].index > -1) this.currentSelected++;
      this.fixScrolling();
    },
    focusInput: function focusInput() {
      this.$refs.input.$el.querySelector('input').focus();
    },
    fixScrolling: function fixScrolling() {
      if (this.currentSelected > 0) {
        var liH = this.$refs.option[this.currentSelected].clientHeight;
        var ulH = this.$refs.scrollContainer.clientHeight;

        if (ulH - liH * this.currentSelected < liH) {
          this.$refs.scrollContainer.scrollTop = Math.round((this.currentSelected + 1 - ulH / liH + 1) * liH);
        }
      }
    }
  },
  mounted: function mounted() {
    if (this.autoFocus) this.focusInput();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/TheFooter.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/components/TheFooter.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "the-footer",
  props: {
    classes: {
      type: String
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/TheNavbar.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/components/TheNavbar.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/index.esm.js");
/* harmony import */ var _components_vx_auto_suggest_VxAutoSuggest_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/vx-auto-suggest/VxAutoSuggest.vue */ "./resources/js/src/components/vx-auto-suggest/VxAutoSuggest.vue");
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-perfect-scrollbar */ "./node_modules/vue-perfect-scrollbar/dist/index.js");
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuedraggable */ "./node_modules/vuedraggable/dist/vuedraggable.common.js");
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vuedraggable__WEBPACK_IMPORTED_MODULE_4__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "the-navbar",
  props: {
    navbarColor: {
      type: String,
      "default": "#fff"
    }
  },
  data: function data() {
    return {
      navbarSearchAndPinList: this.$store.state.navbarSearchAndPinList,
      searchQuery: '',
      showFullSearch: false,
      unreadNotifications: [{
        index: 0,
        title: 'New Message',
        msg: 'Are your going to meet me tonight?',
        icon: 'MessageSquareIcon',
        time: 'Wed Jan 30 2019 07:45:23 GMT+0000 (GMT)',
        category: 'primary'
      }, {
        index: 1,
        title: 'New Order Recieved',
        msg: 'You got new order of goods.',
        icon: 'PackageIcon',
        time: 'Wed Jan 30 2019 07:45:23 GMT+0000 (GMT)',
        category: 'success'
      }, {
        index: 2,
        title: 'Server Limit Reached!',
        msg: 'Server have 99% CPU usage.',
        icon: 'AlertOctagonIcon',
        time: 'Thu Jan 31 2019 07:45:23 GMT+0000 (GMT)',
        category: 'danger'
      }, {
        index: 3,
        title: 'New Mail From Peter',
        msg: 'Cake sesame snaps cupcake',
        icon: 'MailIcon',
        time: 'Fri Feb 01 2019 07:45:23 GMT+0000 (GMT)',
        category: 'primary'
      }, {
        index: 4,
        title: 'Bruce\'s Party',
        msg: 'Chocolate cake oat cake tiramisu',
        icon: 'CalendarIcon',
        time: 'Fri Feb 02 2019 07:45:23 GMT+0000 (GMT)',
        category: 'warning'
      }],
      settings: {
        // perfectscrollbar settings
        maxScrollbarLength: 60,
        wheelSpeed: .60
      },
      autoFocusSearch: false,
      showBookmarkPagesDropdown: false
    };
  },
  watch: {
    '$route': function $route() {
      if (this.showBookmarkPagesDropdown) this.showBookmarkPagesDropdown = false;
    }
  },
  computed: {
    // HELPER
    sidebarWidth: function sidebarWidth() {
      return this.$store.state.sidebarWidth;
    },
    breakpoint: function breakpoint() {
      return this.$store.state.breakpoint;
    },
    // NAVBAR STYLE
    classObj: function classObj() {
      if (this.sidebarWidth == "default") return "navbar-default";else if (this.sidebarWidth == "reduced") return "navbar-reduced";else if (this.sidebarWidth) return "navbar-full";
    },
    // I18N
    getCurrentLocaleData: function getCurrentLocaleData() {
      var locale = this.$i18n.locale;
      if (locale == "en") return {
        flag: "us",
        lang: 'English'
      };else if (locale == "pt") return {
        flag: "br",
        lang: 'Portuguese'
      };else if (locale == "fr") return {
        flag: "fr",
        lang: 'French'
      };else if (locale == "de") return {
        flag: "de",
        lang: 'German'
      };
    },
    // BOOKMARK & SEARCH
    data: function data() {
      return this.$store.state.navbarSearchAndPinList;
    },
    starredPages: function starredPages() {
      return this.$store.state.starredPages;
    },
    starredPagesLimited: {
      get: function get() {
        return this.starredPages.slice(0, 10);
      },
      set: function set(list) {
        this.$store.dispatch('arrangeStarredPagesLimited', list);
      }
    },
    starredPagesMore: {
      get: function get() {
        return this.starredPages.slice(10);
      },
      set: function set(list) {
        this.$store.dispatch('arrangeStarredPagesMore', list);
      }
    },
    // CART DROPDOWN
    cartItems: function cartItems() {
      return this.$store.state.eCommerce.cartItems.slice().reverse();
    },
    // PROFILE
    user_displayName: function user_displayName() {
      return JSON.parse(localStorage.getItem('userInfo')).displayName;
    },
    activeUserImg: function activeUserImg() {
      return JSON.parse(localStorage.getItem('userInfo')).photoURL || this.$store.state.AppActiveUser.img;
    }
  },
  methods: {
    updateLocale: function updateLocale(locale) {
      this.$i18n.locale = locale;
    },
    showSidebar: function showSidebar() {
      this.$store.commit('TOGGLE_IS_SIDEBAR_ACTIVE', true);
    },
    selected: function selected(item) {
      this.$router.push(item.url);
      this.showFullSearch = false;
    },
    actionClicked: function actionClicked(item) {
      // e.stopPropogation();
      this.$store.dispatch('updateStarredPage', {
        index: item.index,
        val: !item.highlightAction
      });
    },
    showNavbarSearch: function showNavbarSearch() {
      this.showFullSearch = true;
    },
    showSearchbar: function showSearchbar() {
      this.showFullSearch = true;
    },
    elapsedTime: function elapsedTime(startTime) {
      var x = new Date(startTime);
      var now = new Date();
      var timeDiff = now - x;
      timeDiff /= 1000;
      var seconds = Math.round(timeDiff);
      timeDiff = Math.floor(timeDiff / 60);
      var minutes = Math.round(timeDiff % 60);
      timeDiff = Math.floor(timeDiff / 60);
      var hours = Math.round(timeDiff % 24);
      timeDiff = Math.floor(timeDiff / 24);
      var days = Math.round(timeDiff % 365);
      timeDiff = Math.floor(timeDiff / 365);
      var years = timeDiff;

      if (years > 0) {
        return years + (years > 1 ? ' Years ' : ' Year ') + 'ago';
      } else if (days > 0) {
        return days + (days > 1 ? ' Days ' : ' Day ') + 'ago';
      } else if (hours > 0) {
        return hours + (hours > 1 ? ' Hrs ' : ' Hour ') + 'ago';
      } else if (minutes > 0) {
        return minutes + (minutes > 1 ? ' Mins ' : ' Min ') + 'ago';
      } else if (seconds > 0) {
        return seconds + (seconds > 1 ? "".concat(seconds, " sec ago") : 'just now');
      }

      return 'Just Now';
    },
    logout: function logout() {
      var _this = this;

      // if user is logged in via auth0
      if (this.$auth.profile) this.$auth.logOut(); // if user is looged in via firebase

      var firebaseCurrentUser = firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.auth().currentUser;

      if (firebaseCurrentUser) {
        firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.auth().signOut().then(function () {
          _this.$router.push('/pages/login');

          localStorage.removeItem('userInfo');
        });
      } // Change role on logout. Same value as initialRole of acj.js


      this.$acl.change('admin');
      localStorage.removeItem('userRole');
    },
    outside: function outside() {
      this.showBookmarkPagesDropdown = false;
    },
    // CART DROPDOWN
    removeItemFromCart: function removeItemFromCart(item) {
      this.$store.dispatch('eCommerce/toggleItemInCart', item);
    }
  },
  directives: {
    'click-outside': {
      bind: function bind(el, binding) {
        var bubble = binding.modifiers.bubble;

        var handler = function handler(e) {
          if (bubble || !el.contains(e.target) && el !== e.target) {
            binding.value(e);
          }
        };

        el.__vueClickOutside__ = handler;
        document.addEventListener('click', handler);
      },
      unbind: function unbind(el) {
        document.removeEventListener('click', el.__vueClickOutside__);
        el.__vueClickOutside__ = null;
      }
    }
  },
  components: {
    VxAutoSuggest: _components_vx_auto_suggest_VxAutoSuggest_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    VuePerfectScrollbar: vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3___default.a,
    draggable: vuedraggable__WEBPACK_IMPORTED_MODULE_4___default.a
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/customizer/TheCustomizer.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/components/customizer/TheCustomizer.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    navbarType: {
      type: String,
      required: true
    },
    navbarColor: {
      type: String,
      required: true,
      "default": "#fff"
    },
    footerType: {
      type: String,
      required: true
    },
    routerTransition: {
      type: String,
      required: true
    },
    hideScrollToTop: {
      type: Boolean,
      required: true
    }
  },
  data: function data() {
    return {
      active: false,
      themeColors: ['#7367F0', '#28C76F', '#EA5455', '#FF9F43', '#1E1E1E'],
      customPrimaryColor: '#3DC9B3',
      customNavbarColor: '#3DC9B3',
      routerTransitionsList: [{
        text: 'Zoom Fade',
        value: 'zoom-fade'
      }, {
        text: 'Slide Fade',
        value: 'slide-fade'
      }, {
        text: 'Fade Bottom',
        value: 'fade-bottom'
      }, {
        text: 'Fade',
        value: 'fade'
      }, {
        text: 'Zoom Out',
        value: 'zoom-out'
      }, {
        text: 'None',
        value: 'none'
      }],
      settings: {
        // perfectscrollbar settings
        maxScrollbarLength: 60,
        wheelSpeed: .60
      }
    };
  },
  computed: {
    theme: {
      get: function get() {
        return this.$store.state.theme;
      },
      set: function set(val) {
        this.$store.dispatch('updateTheme', val);
      }
    },
    reduced_sidebar: {
      get: function get() {
        return this.$store.state.reduceButton;
      },
      set: function set(val) {
        this.$store.commit('TOGGLE_REDUCE_BUTTON', val);
      }
    },
    navbarTypeLocal: {
      get: function get() {
        return 'navbar-' + this.navbarType;
      },
      set: function set(val) {
        this.$emit('updateNavbar', val.replace("navbar-", ""));
      }
    },
    navbarColorLocal: {
      get: function get() {
        return this.navbarColor;
      },
      set: function set(val) {
        if (this.navbarType == 'static') return;
        this.$emit('updateNavbarColor', val);
      }
    },
    footerTypeLocal: {
      get: function get() {
        return this.footerType;
      },
      set: function set(val) {
        this.$emit('updateFooter', val);
      }
    },
    routerTransitionLocal: {
      get: function get() {
        return this.routerTransition;
      },
      set: function set(val) {
        this.$emit('updateRouterTransition', val);
      }
    },
    primaryColor: {
      get: function get() {
        return this.$store.state.themePrimaryColor;
      },
      set: function set(val) {
        this.$store.commit('UPDATE_PRIMARY_COLOR', val);
      }
    },
    hideScrollToTopLocal: {
      get: function get() {
        return this.hideScrollToTop;
      },
      set: function set(val) {
        this.$emit('toggleHideScrollToTop', val);
      }
    },
    // Navbar color options classes
    navbarColorOptionClasses: function navbarColorOptionClasses() {
      var _this = this;

      return function (color) {
        var classes = {};
        if (color == _this.navbarColorLocal) classes['shadow-outline'] = true;
        if (_this.navbarTypeLocal == 'static') classes['cursor-not-allowed'] = true;
        return classes;
      };
    }
  },
  methods: {
    updatePrimaryColor: function updatePrimaryColor(color) {
      this.primaryColor = color;
      this.$vs.theme({
        primary: color
      });
    }
  },
  components: {
    VuePerfectScrollbar: vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0___default.a
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/vx-sidebar/VxSidebar.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/components/vx-sidebar/VxSidebar.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-perfect-scrollbar */ "./node_modules/vue-perfect-scrollbar/dist/index.js");
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _VxSidebarGroup_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VxSidebarGroup.vue */ "./resources/js/src/layouts/components/vx-sidebar/VxSidebarGroup.vue");
/* harmony import */ var _VxSidebarItem_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VxSidebarItem.vue */ "./resources/js/src/layouts/components/vx-sidebar/VxSidebarItem.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'vx-sidebar',
  props: {
    sidebarItems: {
      type: Array,
      required: true
    },
    title: {
      type: String
    },
    logo: {
      type: String
    },
    parent: {
      type: String
    },
    openGroupHover: {
      type: Boolean,
      "default": false
    },
    reduceNotRebound: {
      type: Boolean,
      "default": true
    }
  },
  data: function data() {
    return {
      clickNotClose: false,
      // disable close sidebar on outside click
      reduce: false,
      // determines if sidebar is reduce - component property
      showCloseButton: false,
      // show close button in smaller devices
      isMouseEnter: false,
      settings: {
        // perfectscrollbar settings
        maxScrollbarLength: 60,
        wheelSpeed: 1,
        swipeEasing: true
      },
      windowWidth: window.innerWidth,
      //width of windows
      showShadowBottom: false
    };
  },
  computed: {
    isSidebarActive: {
      get: function get() {
        return this.$store.state.isSidebarActive;
      },
      set: function set(val) {
        this.$store.commit('TOGGLE_IS_SIDEBAR_ACTIVE', val);
      }
    },
    reduceSidebar: function reduceSidebar() {
      return Boolean(this.reduce && this.reduceButton);
    },
    reduceButton: {
      get: function get() {
        return this.$store.state.reduceButton;
      },
      set: function set(val) {
        this.$store.commit('TOGGLE_REDUCE_BUTTON', val);
      }
    },
    sidebarItemsMin: function sidebarItemsMin() {
      return this.$store.state.sidebarItemsMin;
    },
    isGroupActive: function isGroupActive() {
      var _this = this;

      return function (sidebarItem) {
        var path = _this.$route.fullPath;
        var open = false;

        var func = function func(sidebarItem) {
          if (sidebarItem.submenu) {
            sidebarItem.submenu.forEach(function (item) {
              if (path == item.url) {
                open = true;
              } else if (item.submenu) {
                func(item);
              }
            });
          }
        };

        func(sidebarItem);
        return open;
      };
    }
  },
  watch: {
    reduce: function reduce(val) {
      if (val == true) {
        this.$store.dispatch('updateSidebarWidth', 'reduced');
      } else {
        this.$store.dispatch('updateSidebarWidth', 'default');
      }

      setTimeout(function () {
        window.dispatchEvent(new Event('resize'));
      }, 100);
    },
    reduceButton: function reduceButton() {
      this.setSidebarWidth();
    },
    '$route': function $route() {
      if (this.isSidebarActive && this.showCloseButton) this.$store.commit('TOGGLE_IS_SIDEBAR_ACTIVE', false);
    }
  },
  methods: {
    sidebarMouseEntered: function sidebarMouseEntered() {
      if (this.reduce) this.$store.commit('UPDATE_SIDEBAR_ITEMS_MIN', false);
      this.isMouseEnter = true;
    },
    sidebarMouseLeave: function sidebarMouseLeave() {
      if (this.reduce) {
        this.$store.commit('UPDATE_SIDEBAR_ITEMS_MIN', true);
      }

      this.isMouseEnter = false;
    },
    toggleReduce: function toggleReduce(val) {
      this.reduceButton = val;
      this.setSidebarWidth();
    },
    handleWindowResize: function handleWindowResize(event) {
      this.windowWidth = event.currentTarget.innerWidth;
      this.setSidebarWidth();
    },
    setSidebarWidth: function setSidebarWidth() {
      if (this.windowWidth < 1200) {
        if (this.windowWidth < 992) this.$store.commit('UPDATE_WINDOW_BREAKPOINT', 'md');else this.$store.commit('UPDATE_WINDOW_BREAKPOINT', 'lg');
        this.$store.commit('TOGGLE_IS_SIDEBAR_ACTIVE', false);
        if (this.reduceButton) this.reduce = false; // this.reduceButton = false;

        this.showCloseButton = true;
        this.clickNotClose = false;
        this.$store.dispatch('updateSidebarWidth', 'no-sidebar');
        this.$store.commit('UPDATE_SIDEBAR_ITEMS_MIN', false);
      } else {
        this.$store.commit('UPDATE_WINDOW_BREAKPOINT', 'xl');
        if (this.reduceButton) this.reduce = true;else this.reduce = false;
        this.$store.commit('TOGGLE_IS_SIDEBAR_ACTIVE', true);
        if (this.reduceButton && !this.isMouseEnter) this.$store.commit('UPDATE_SIDEBAR_ITEMS_MIN', true);else this.$store.commit('UPDATE_SIDEBAR_ITEMS_MIN', false);
        this.clickNotClose = true;
        this.showCloseButton = false;
        if (this.reduceSidebar) this.$store.dispatch('updateSidebarWidth', 'reduced');else this.$store.dispatch('updateSidebarWidth', 'default');
      }
    },
    psSectionScroll: function psSectionScroll() {
      if (this.$refs.mainSidebarPs.$el.scrollTop > 0) this.showShadowBottom = true;else this.showShadowBottom = false;
    },
    onSwipeLeft: function onSwipeLeft() {
      if (this.isSidebarActive && this.showCloseButton) this.isSidebarActive = false;
    },
    onSwipeRightSidebarSwipeArea: function onSwipeRightSidebarSwipeArea() {
      if (!this.isSidebarActive && this.showCloseButton) this.isSidebarActive = true;
    }
  },
  components: {
    VxSidebarGroup: _VxSidebarGroup_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    VxSidebarItem: _VxSidebarItem_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    VuePerfectScrollbar: vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  mounted: function mounted() {
    var _this2 = this;

    this.$nextTick(function () {
      window.addEventListener('resize', _this2.handleWindowResize);
    });
    this.setSidebarWidth();
  },
  beforeDestroy: function beforeDestroy() {
    window.removeEventListener('resize', this.handleWindowResize);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/vx-sidebar/VxSidebarGroup.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/components/vx-sidebar/VxSidebarGroup.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VxSidebarItem_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VxSidebarItem.vue */ "./resources/js/src/layouts/components/vx-sidebar/VxSidebarItem.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'vx-sidebar-group',
  props: {
    openHover: {
      "default": false,
      type: Boolean
    },
    open: {
      "default": false,
      type: Boolean
    },
    group: {
      type: Object
    },
    groupIndex: {
      type: Number
    }
  },
  data: function data() {
    return {
      maxHeight: '0px',
      openItems: false
    };
  },
  computed: {
    sidebarItemsMin: function sidebarItemsMin() {
      return this.$store.state.sidebarItemsMin;
    },
    styleItems: function styleItems() {
      return {
        maxHeight: this.maxHeight
      };
    },
    itemIcon: function itemIcon() {
      return function (index) {
        if (!((index.match(/\./g) || []).length > 1)) return "CircleIcon";
      };
    },
    isGroupActive: function isGroupActive() {
      var _this = this;

      return function (sidebarItem) {
        var path = _this.$route.fullPath;
        var open = false;

        var func = function func(sidebarItem) {
          if (sidebarItem.submenu) {
            sidebarItem.submenu.forEach(function (item) {
              if (path == item.url) {
                open = true;
              } else if (item.submenu) {
                func(item);
              }
            });
          }
        };

        func(sidebarItem);
        return open;
      };
    }
  },
  watch: {
    // OPEN & CLOSES DROPDOWN ON ROUTE CHANGE
    '$route': function $route() {
      var _this2 = this;

      if (this.sidebarItemsMin) return;
      var scrollHeight = this.scrollHeight;

      if (this.openItems && !this.open) {
        this.maxHeight = "".concat(scrollHeight, "px");
        setTimeout(function () {
          _this2.maxHeight = "".concat(0, "px");
        }, 50);
      } else if (this.open) {
        this.maxHeight = "".concat(scrollHeight, "px");
        setTimeout(function () {
          _this2.maxHeight = 'none';
        }, 300);
      }
    },
    maxHeight: function maxHeight() {
      this.openItems = this.maxHeight != '0px';
    },
    // OPEN AND CLOSES DROPDOWN MENU ON SIDEBAR COLLAPSE AND DEFAULT VIEW
    '$store.state.sidebarItemsMin': function $storeStateSidebarItemsMin(val) {
      var _this3 = this;

      var scrollHeight = this.$refs.items.scrollHeight;

      if (!val && this.open) {
        this.maxHeight = "".concat(scrollHeight, "px");
        setTimeout(function () {
          _this3.maxHeight = 'none';
        }, 300);
      } else {
        this.maxHeight = "".concat(scrollHeight, "px");
        setTimeout(function () {
          _this3.maxHeight = '0px';
        }, 50);
      }

      if (val && this.open) {
        this.maxHeight = "".concat(scrollHeight, "px");
        setTimeout(function () {
          _this3.maxHeight = '0px';
        }, 250);
      }
    }
  },
  methods: {
    clickGroup: function clickGroup() {
      var _this4 = this;

      if (!this.openHover) {
        var thisScrollHeight = this.$refs.items.scrollHeight;

        if (this.maxHeight == '0px') {
          this.maxHeight = "".concat(thisScrollHeight, "px");
          setTimeout(function () {
            _this4.maxHeight = 'none';
          }, 300);
        } else {
          this.maxHeight = "".concat(thisScrollHeight, "px");
          setTimeout(function () {
            _this4.maxHeight = "".concat(0, "px");
          }, 50);
        }

        this.$parent.$children.map(function (child) {
          if (child.isGroupActive) {
            if (child !== _this4 && !child.open && child.maxHeight != '0px') {
              setTimeout(function () {
                child.maxHeight = "".concat(0, "px");
              }, 50);
            }
          }
        });
      }
    },
    mouseover: function mouseover() {
      if (this.openHover) {
        var scrollHeight = this.$refs.items.scrollHeight;
        this.maxHeight = "".concat(scrollHeight, "px");
      }
    },
    mouseout: function mouseout() {
      if (this.openHover) {
        var scrollHeight = 0;
        this.maxHeight = "".concat(scrollHeight, "px");
      }
    }
  },
  components: {
    VxSidebarItem: _VxSidebarItem_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  mounted: function mounted() {
    this.openItems = this.open;

    if (this.open) {
      this.maxHeight = 'none';
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/vx-sidebar/VxSidebarItem.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/components/vx-sidebar/VxSidebarItem.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'VxSidebarItem',
  props: {
    icon: {
      "default": "",
      type: String
    },
    iconSmall: {
      "default": false,
      type: Boolean
    },
    iconPack: {
      "default": 'material-icons',
      type: String
    },
    href: {
      "default": '#',
      type: String
    },
    to: {
      "default": null,
      type: String
    },
    index: {
      "default": null,
      type: [String, Number]
    },
    featherIcon: {
      "default": true,
      type: Boolean
    },
    target: {
      "default": '_self',
      type: String
    },
    isDisabled: {
      "default": false,
      type: Boolean
    }
  },
  data: function data() {
    return {
      activeLink: false
    };
  },
  watch: {
    '$route': function $route() {
      this.CheckIsActive();
    }
  },
  methods: {
    CheckIsActive: function CheckIsActive() {
      if (this.to) {
        if (this.to == this.$router.path && this.to) this.activeLink = true;else this.activeLink = false; // if (this.$route.path.slice(1).includes(this.to.slice(1)) && this.to.slice(1)) this.activeLink = true
        // else this.activeLink = false
      }
    }
  },
  computed: {
    canSee: function canSee() {
      this.$acl.check(this.$store.state.userRole);

      if (this.to) {
        return this.$acl.check(this.$router.match(this.to).meta.rule);
      }

      return true;
    }
  },
  updated: function updated() {
    this.CheckIsActive();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/main/Main.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/main/Main.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layouts_components_vx_sidebar_VxSidebar_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/layouts/components/vx-sidebar/VxSidebar.vue */ "./resources/js/src/layouts/components/vx-sidebar/VxSidebar.vue");
/* harmony import */ var _components_customizer_TheCustomizer_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/customizer/TheCustomizer.vue */ "./resources/js/src/layouts/components/customizer/TheCustomizer.vue");
/* harmony import */ var _components_TheNavbar_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/TheNavbar.vue */ "./resources/js/src/layouts/components/TheNavbar.vue");
/* harmony import */ var _components_TheFooter_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/TheFooter.vue */ "./resources/js/src/layouts/components/TheFooter.vue");
/* harmony import */ var _themeConfig_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/../themeConfig.js */ "./resources/js/themeConfig.js");
/* harmony import */ var _layouts_components_vx_sidebar_sidebarItems_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/layouts/components/vx-sidebar/sidebarItems.js */ "./resources/js/src/layouts/components/vx-sidebar/sidebarItems.js");
/* harmony import */ var vue_backtotop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue-backtotop */ "./node_modules/vue-backtotop/src/main.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//








var VxTour = function VxTour() {
  return __webpack_require__.e(/*! import() */ 13).then(__webpack_require__.bind(null, /*! @/components/VxTour.vue */ "./resources/js/src/components/VxTour.vue"));
};

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      navbarType: _themeConfig_js__WEBPACK_IMPORTED_MODULE_4__["default"].navbarType || 'floating',
      navbarColor: _themeConfig_js__WEBPACK_IMPORTED_MODULE_4__["default"].navbarColor || '#fff',
      footerType: _themeConfig_js__WEBPACK_IMPORTED_MODULE_4__["default"].footerType || 'static',
      routerTransition: _themeConfig_js__WEBPACK_IMPORTED_MODULE_4__["default"].routerTransition || 'none',
      isNavbarDark: false,
      routeTitle: this.$route.meta.pageTitle,
      sidebarItems: _layouts_components_vx_sidebar_sidebarItems_js__WEBPACK_IMPORTED_MODULE_5__["default"],
      disableCustomizer: _themeConfig_js__WEBPACK_IMPORTED_MODULE_4__["default"].disableCustomizer,
      windowWidth: window.innerWidth,
      //width of windows
      hideScrollToTop: _themeConfig_js__WEBPACK_IMPORTED_MODULE_4__["default"].hideScrollToTop,
      disableThemeTour: _themeConfig_js__WEBPACK_IMPORTED_MODULE_4__["default"].disableThemeTour,
      steps: [{
        target: '#btnSidebarToggler',
        content: 'Toggle Collapse Sidebar.'
      }, {
        target: '.vx-navbar__starred-pages',
        content: 'Create your own bookmarks. You can also re-arrange them using drag & drop.'
      }, {
        target: '.i18n-locale',
        content: 'You can change language from here.'
      }, {
        target: '.navbar-fuzzy-search',
        content: 'Try fuzzy search to visit pages in flash.'
      }, {
        target: '.customizer-btn',
        content: 'Customize template based your preference',
        params: {
          placement: 'left'
        }
      }, {
        target: '.vs-button.buy-now',
        content: 'Buy this awesomeness at affordable price!',
        params: {
          placement: 'top'
        }
      }]
    };
  },
  watch: {
    '$route': function $route() {
      this.routeTitle = this.$route.meta.pageTitle;
    },
    isThemeDark: function isThemeDark(val) {
      if (this.navbarColor == "#fff" && val) {
        this.updateNavbarColor("#10163a");
      } else {
        this.updateNavbarColor("#fff");
      }
    }
  },
  computed: {
    isAppPage: function isAppPage() {
      if (this.$route.path.includes('/apps/')) return true;else return false;
    },
    isThemeDark: function isThemeDark() {
      return this.$store.state.theme == 'dark';
    },
    sidebarWidth: function sidebarWidth() {
      return this.$store.state.sidebarWidth;
    },
    bodyOverlay: function bodyOverlay() {
      return this.$store.state.bodyOverlay;
    },
    contentAreaClass: function contentAreaClass() {
      if (this.sidebarWidth == "default") return "content-area-default";else if (this.sidebarWidth == "reduced") return "content-area-reduced";else if (this.sidebarWidth) return "content-area-full";
    },
    navbarClasses: function navbarClasses() {
      return {
        'navbar-hidden': this.navbarType == 'hidden',
        'navbar-sticky': this.navbarType == 'sticky',
        'navbar-static': this.navbarType == 'static',
        'navbar-floating': this.navbarType == 'floating'
      };
    },
    footerClasses: function footerClasses() {
      return {
        'footer-hidden': this.footerType == 'hidden',
        'footer-sticky': this.footerType == 'sticky',
        'footer-static': this.footerType == 'static'
      };
    }
  },
  methods: {
    changeRouteTitle: function changeRouteTitle(title) {
      this.routeTitle = title;
    },
    updateNavbar: function updateNavbar(val) {
      if (val == 'static') this.updateNavbarColor("#fff");
      this.navbarType = val;
    },
    updateNavbarColor: function updateNavbarColor(val) {
      this.navbarColor = val;
      if (val == "#fff") this.isNavbarDark = false;else this.isNavbarDark = true;
    },
    updateFooter: function updateFooter(val) {
      this.footerType = val;
    },
    updateRouterTransition: function updateRouterTransition(val) {
      this.routerTransition = val;
    },
    handleWindowResize: function handleWindowResize(event) {
      this.windowWidth = event.currentTarget.innerWidth;
      this.setSidebarWidth();
    },
    setSidebarWidth: function setSidebarWidth() {
      if (this.windowWidth < 1200) {
        this.$store.commit('TOGGLE_IS_SIDEBAR_ACTIVE', false);
        this.$store.dispatch('updateSidebarWidth', 'no-sidebar');
        this.disableThemeTour = true;
      } else if (this.windowWidth < 1200) {
        this.$store.dispatch('updateSidebarWidth', 'reduced');
      } else {
        this.$store.commit('TOGGLE_IS_SIDEBAR_ACTIVE', true);
      }
    },
    toggleHideScrollToTop: function toggleHideScrollToTop(val) {
      this.hideScrollToTop = val;
    }
  },
  components: {
    VxSidebar: _layouts_components_vx_sidebar_VxSidebar_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    TheNavbar: _components_TheNavbar_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    TheFooter: _components_TheFooter_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    TheCustomizer: _components_customizer_TheCustomizer_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    BackToTop: vue_backtotop__WEBPACK_IMPORTED_MODULE_6__["default"],
    VxTour: VxTour
  },
  created: function created() {
    this.setSidebarWidth();

    if (this.navbarColor == "#fff" && this.isThemeDark) {
      this.updateNavbarColor("#10163a");
    } else {
      this.updateNavbarColor(this.navbarColor);
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/vx-auto-suggest/VxAutoSuggest.vue?vue&type=style&index=0&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/lib/loader.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/vx-auto-suggest/VxAutoSuggest.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*=========================================================================================\n    File Name: vxAutoSuggest.scss\n    Description: Styles for vx-auto-suggest component. Imported in VxAutoSuggest.vue file\n    ----------------------------------------------------------------------------------------\n    Item Name: Vuesax Admin - VueJS Dashboard Admin Template\n      Author: Pixinvent\n    Author URL: http://www.themeforest.net/user/pixinvent\n==========================================================================================*/\n.vx-auto-suggest {\n  position: relative;\n}\n.vx-auto-suggest .vs-input .vs-con-input .vs-inputx {\n  z-index: 10;\n}\n.vx-auto-suggest .auto-suggest-suggestions-list {\n  position: absolute;\n  background: #fff;\n  width: 100%;\n}\n.vx-auto-suggest .auto-suggest-suggestions-list .auto-suggest__suggestion {\n  padding: 0.8rem 1rem;\n}\n.vx-auto-suggest .auto-suggest-suggestions-list .auto-suggest__suggestion.vx-auto-suggest__current-selected {\n  background: #F1F1F1;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/customizer/TheCustomizer.vue?vue&type=style&index=0&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/lib/loader.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/components/customizer/TheCustomizer.vue?vue&type=style&index=0&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#theme-customizer .vs-sidebar {\n  position: fixed;\n  z-index: 52000;\n  width: 400px;\n  max-width: 90vw;\n  box-shadow: 0 15px 30px 0 rgba(0,0,0,0.11), 0 5px 15px 0 rgba(0,0,0,0.08);\n}\n.customizer-btn {\n  position: fixed;\n  top: 50%;\n  right: 0;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n  z-index: 50000;\n}\n.customizer-btn .vs-icon {\n  -webkit-animation: spin 1.5s linear infinite;\n          animation: spin 1.5s linear infinite;\n}\n.scroll-area--customizer {\n  height: calc(100% - 5rem);\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/vx-sidebar/VxSidebar.vue?vue&type=style&index=0&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/lib/loader.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/components/vx-sidebar/VxSidebar.vue?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*=========================================================================================\n  File Name: vxSidebar.scss\n  Description: Styles for vx-sidebar component. Imported in VxSidebar.vue file\n  ----------------------------------------------------------------------------------------\n  Item Name: Vuesax Admin - VueJS Dashboard Admin Template\n  Author: Pixinvent\n  Author URL: http://www.themeforest.net/user/pixinvent\n==========================================================================================*/\n\n/*=========================================================================================\n    File Name: _variables.scss\n    Description: partial- SCSS varibales\n    ----------------------------------------------------------------------------------------\n    Item Name: Vuesax Admin - VueJS Dashboard Admin Template\n      Author: Pixinvent\n    Author URL: http://www.themeforest.net/user/pixinvent\n==========================================================================================*/\n\n/*========================================================\n        SPACING\n=========================================================*/\n\n/*========================================================\n        COLORS\n=========================================================*/\n\n/*========================================================\n        TYPOGRAPHY\n=========================================================*/\n\n/*========================================================\n        TYPOGRAPHY\n=========================================================*/\n\n/*========================================================\n        DARK THEME\n=========================================================*/\n.main-menu-sidebar {\n  white-space: nowrap;\n}\n.main-menu-sidebar .vs-sidebar--background {\n  z-index: 51000;\n}\n.main-menu-sidebar .vs-sidebar {\n  z-index: 51000;\n  position: fixed;\n}\n.main-menu-sidebar .vs-sidebar .vs-sidebar--items {\n  padding: 0;\n}\n.main-menu-sidebar .vs-sidebar.vs-sidebar-reduce {\n  max-width: 80px;\n}\n.main-menu-sidebar .vs-sidebar.vs-sidebar-reduce:hover:not(.vs-sidebar-reduceNotRebound):not(.vs-sidebar-reduceNotHoverExpand) .vs-sidebar-group .group-header i {\n  display: block;\n}\n.main-menu-sidebar .vs-sidebar.vs-sidebar-reduce .vs-sidebar-group .group-header i {\n  display: none;\n}\n.main-menu-sidebar .header-sidebar {\n  padding: 20px 19px 16px 23px;\n  width: 100%;\n}\n.main-menu-sidebar .header-sidebar .logo img {\n  padding: 4px 0;\n}\n.main-menu-sidebar .header-sidebar .logo .logo-text {\n  font-size: 22px;\n  font-weight: 600;\n  color: #7367F0;\n  -webkit-animation: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1) 0s normal forwards 1 fadein;\n          animation: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1) 0s normal forwards 1 fadein;\n}\n.main-menu-sidebar .header-sidebar .feather-icon svg {\n  color: #7367F0;\n}\n.main-menu-sidebar .shadow-bottom {\n  position: absolute;\n  z-index: 2;\n  height: 60px;\n  width: 100%;\n  pointer-events: none;\n  margin-top: -1.3rem;\n  -webkit-filter: blur(5px);\n          filter: blur(5px);\n  background: -webkit-gradient(linear, left top, left bottom, color-stop(41%, white), color-stop(95%, rgba(255, 255, 255, 0.11)), to(rgba(255, 255, 255, 0)));\n  background: linear-gradient(white 41%, rgba(255, 255, 255, 0.11) 95%, rgba(255, 255, 255, 0) 100%);\n}\n.main-menu-sidebar .scroll-area--main-sidebar {\n  position: relative;\n  margin: auto;\n  width: 100%;\n  height: calc(100vh - 69px);\n}\n.main-menu-sidebar .scroll-area--main-sidebar > .vs-sidebar-group {\n  padding: 0 15px;\n}\n.main-menu-sidebar .scroll-area--main-sidebar > .vs-sidebar--item {\n  padding: 0 15px;\n}\n.main-menu-sidebar .navigation-header {\n  font-size: 0.9rem;\n  display: block;\n  margin-top: 2rem;\n  margin-bottom: 0.8rem;\n  margin-left: 2.2rem;\n  font-weight: 500;\n  text-transform: uppercase;\n  color: #999;\n}\n.main-menu-sidebar .feather-icon {\n  color: #565656;\n  margin-right: 14px;\n}\n.main-menu-sidebar .feather-icon .feather {\n  width: 20px;\n  height: 20px;\n}\n.main-menu-sidebar .con-vs-chip {\n  min-height: 24px;\n  box-shadow: 0px 0px 7px 3px rgba(0, 0, 0, 0.1);\n}\n.main-menu-sidebar .con-vs-chip .vs-chip--text {\n  color: #fff;\n  font-size: 0.8rem;\n}\n.main-menu-sidebar .vs-sidebar--item {\n  -webkit-transition: none;\n  transition: none;\n  overflow: visible !important;\n}\n.main-menu-sidebar .vs-sidebar--item:hover a {\n  color: inherit;\n}\n.main-menu-sidebar .vs-sidebar--item:hover a > * {\n  -webkit-transform: translateX(5px);\n          transform: translateX(5px);\n}\n.main-menu-sidebar .vs-sidebar--item.vs-sidebar-item-active {\n  border-right: none !important;\n  font-weight: 400;\n  z-index: 1;\n  position: relative;\n}\n.main-menu-sidebar .vs-sidebar--item a {\n  font-size: 1rem;\n  -webkit-transition: none;\n  transition: none;\n  border-radius: 4px;\n  opacity: unset;\n  color: #626262;\n  padding: 10px 15px;\n}\n.main-menu-sidebar .vs-sidebar--item a > * {\n  -webkit-transition: -webkit-transform 0.25s ease;\n  transition: -webkit-transform 0.25s ease;\n  transition: transform 0.25s ease;\n  transition: transform 0.25s ease, -webkit-transform 0.25s ease;\n}\n.main-menu-sidebar .vs-sidebar--item a span {\n  font-size: 15px;\n}\n.main-menu-sidebar .vs-sidebar--item.disabled-item a span {\n  color: #e2e2e2;\n}\n.main-menu-sidebar .vs-sidebar--item .router-link-active {\n  background: linear-gradient(118deg, rgba(var(--vs-primary), 1), rgba(var(--vs-primary), 0.7));\n  font-weight: 400;\n  box-shadow: 0px 0px 10px 1px rgba(var(--vs-primary), 0.7);\n}\n.main-menu-sidebar .vs-sidebar--item .router-link-active .feather-icon {\n  color: #fff;\n}\n.main-menu-sidebar .vs-sidebar--item .router-link-active span {\n  color: #fff;\n}\n#sidebar-demo .vs-sidebar {\n  z-index: 52000;\n}\n#sidebar-demo .vs-sidebar-staticPosition {\n  z-index: 10000;\n}\n#sidebar-demo #parentx-demo-7 .parentx:not(.show-custom-sidebar) .vs-sidebar {\n  display: none;\n  z-index: 1 !important;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/vx-sidebar/VxSidebarGroup.vue?vue&type=style&index=0&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/lib/loader.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/components/vx-sidebar/VxSidebarGroup.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*=========================================================================================\n  File Name: vxSidebarGroup.scss\n  Description: Styles for vx-sidebar-group component. Imported in VxSidebarGroup.vue file\n  ----------------------------------------------------------------------------------------\n  Item Name: Vuesax Admin - VueJS Dashboard Admin Template\n  Author: Pixinvent\n  Author URL: http://www.themeforest.net/user/pixinvent\n==========================================================================================*/\n.vs-sidebar-group {\n  overflow: hidden;\n}\n.vs-sidebar-group .group-header {\n  -webkit-transition: all 0.5s ease;\n  transition: all 0.5s ease;\n  font-size: 15px;\n  padding: 10px 15px;\n  cursor: pointer;\n}\n.vs-sidebar-group .group-header .feather-grp-header-arrow {\n  position: absolute !important;\n  right: 8px;\n  top: 12px;\n  -webkit-transition: all 0.2s ease-out;\n  transition: all 0.2s ease-out;\n  -webkit-transform: rotate(0deg);\n          transform: rotate(0deg);\n  display: inline-block;\n}\n.vs-sidebar-group .group-header .feather-grp-header-arrow.rotate90 {\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n.vs-sidebar-group .group-header > * {\n  -webkit-transition: all 0.25s ease;\n  transition: all 0.25s ease;\n}\n.vs-sidebar-group .group-header:hover > * {\n  -webkit-transform: translateX(5px);\n          transform: translateX(5px);\n}\n.vs-sidebar-group .group-header .con-vs-chip {\n  margin-bottom: 0;\n}\n.vs-sidebar-group .vs-icon {\n  font-size: 1.5rem;\n}\n.vs-sidebar-group:hover > .group-header {\n  -webkit-transform: unset;\n          transform: unset;\n}\n.vs-sidebar-group .vs-sidebar-group .group-header {\n  padding-left: 20px;\n}\n.vs-sidebar-group.vs-sidebar-group-open > .group-header {\n  cursor: pointer;\n  background: #f6f6f6;\n  border-radius: 6px;\n  margin-bottom: 7px;\n}\n.vs-sidebar-group.vs-sidebar-group-open > .vs-sidebar-group-items {\n  padding-left: 0;\n}\n.vs-sidebar-group.vs-sidebar-group-open > .vs-sidebar-group-items .vs-sidebar--item span {\n  padding-left: 2rem;\n  padding: 0;\n}\n.vs-sidebar-group.vs-sidebar-group-open > .vs-sidebar-group-items .vs-sidebar--item:last-child {\n  border-bottom: 0px;\n}\n.vs-sidebar-group.vs-sidebar-group-open .vs-sidebar-group {\n  overflow: visible;\n}\n.vs-sidebar-group.vs-sidebar-group-active > .group-header {\n  background: #f6f6f6;\n  border-radius: 6px;\n}\n.vs-sidebar-group .vs-sidebar-group-items {\n  opacity: 0;\n}\n.vs-sidebar-group .vs-sidebar-group-items .vs-sidebar--item a {\n  padding: 10px 15px 10px 20px;\n}\n.vs-sidebar-group .vs-sidebar-group-items .vs-sidebar--item a .feather-icon {\n  margin-right: 20px;\n}\n.vs-sidebar-group .vs-sidebar-group-items .vs-sidebar--item:last-child a {\n  margin-bottom: 0;\n}\n.vs-sidebar-group .vs-sidebar-group-items li:last-child {\n  padding-bottom: 7px;\n}\n.vs-sidebar-group .vs-sidebar-group-items .vs-sidebar-group span .feather-icon {\n  margin-right: 20px;\n}\n.vs-sidebar-group .vs-sidebar-group-items .vs-sidebar-group .feather-icon {\n  margin-right: 0px;\n}\n.vs-sidebar-group.disabled-item span {\n  color: #e2e2e2;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-backtotop/src/styles.css?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-backtotop/src/styles.css?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".back-to-top-fade-enter-active, \n.back-to-top-fade-leave-active {\n  -webkit-transition: opacity .7s;\n  transition: opacity .7s;\n}\n.back-to-top-fade-enter, \n.back-to-top-fade-leave-to {\n  opacity: 0;\n}\n.vue-back-to-top {\n  cursor:pointer;\n  position: fixed;\n  z-index: 1000;\n}\n.vue-back-to-top .default {\n  background-color: #f5c85c;\n  border-radius: 3px;\n  color: #ffffff;\n  height: 30px;\n  line-height: 30px;\n  text-align: center;\n  width: 160px;\n}\n.vue-back-to-top .default span{\n  color:#ffffff;\n}\n.vue-back-to-top--is-footer {\n  bottom: 50% !important;\n  position: absolute;\n  -webkit-transform: translateY(50%);\n          transform: translateY(50%);\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/vx-auto-suggest/VxAutoSuggest.vue?vue&type=style&index=0&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/lib/loader.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/vx-auto-suggest/VxAutoSuggest.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/sass-loader/lib/loader.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./VxAutoSuggest.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/vx-auto-suggest/VxAutoSuggest.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/customizer/TheCustomizer.vue?vue&type=style&index=0&lang=scss&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/lib/loader.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/components/customizer/TheCustomizer.vue?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../node_modules/sass-loader/lib/loader.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TheCustomizer.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/customizer/TheCustomizer.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/vx-sidebar/VxSidebar.vue?vue&type=style&index=0&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/lib/loader.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/components/vx-sidebar/VxSidebar.vue?vue&type=style&index=0&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../node_modules/sass-loader/lib/loader.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./VxSidebar.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/vx-sidebar/VxSidebar.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/vx-sidebar/VxSidebarGroup.vue?vue&type=style&index=0&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/lib/loader.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/components/vx-sidebar/VxSidebarGroup.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../node_modules/sass-loader/lib/loader.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./VxSidebarGroup.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/vx-sidebar/VxSidebarGroup.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-backtotop/src/styles.css?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-backtotop/src/styles.css?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../css-loader??ref--7-1!../../vue-loader/lib/loaders/stylePostLoader.js!../../postcss-loader/src??ref--7-2!./styles.css?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-backtotop/src/styles.css?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-backtotop/src/BackToTop.vue":
/*!******************************************************!*\
  !*** ./node_modules/vue-backtotop/src/BackToTop.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BackToTop_vue_vue_type_template_id_58c5690e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BackToTop.vue?vue&type=template&id=58c5690e& */ "./node_modules/vue-backtotop/src/BackToTop.vue?vue&type=template&id=58c5690e&");
/* harmony import */ var _BackToTop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BackToTop.vue?vue&type=script&lang=js& */ "./node_modules/vue-backtotop/src/BackToTop.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _styles_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.css?vue&type=style&index=0&lang=css& */ "./node_modules/vue-backtotop/src/styles.css?vue&type=style&index=0&lang=css&");
/* harmony import */ var _vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _BackToTop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BackToTop_vue_vue_type_template_id_58c5690e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _BackToTop_vue_vue_type_template_id_58c5690e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "node_modules/vue-backtotop/src/BackToTop.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./node_modules/vue-backtotop/src/BackToTop.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./node_modules/vue-backtotop/src/BackToTop.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_loader_lib_index_js_vue_loader_options_BackToTop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../vue-loader/lib??vue-loader-options!./BackToTop.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./node_modules/vue-backtotop/src/BackToTop.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_vue_loader_lib_index_js_vue_loader_options_BackToTop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./node_modules/vue-backtotop/src/BackToTop.vue?vue&type=template&id=58c5690e&":
/*!*************************************************************************************!*\
  !*** ./node_modules/vue-backtotop/src/BackToTop.vue?vue&type=template&id=58c5690e& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_BackToTop_vue_vue_type_template_id_58c5690e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../vue-loader/lib??vue-loader-options!./BackToTop.vue?vue&type=template&id=58c5690e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-backtotop/src/BackToTop.vue?vue&type=template&id=58c5690e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_BackToTop_vue_vue_type_template_id_58c5690e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_BackToTop_vue_vue_type_template_id_58c5690e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/vue-backtotop/src/main.js":
/*!************************************************!*\
  !*** ./node_modules/vue-backtotop/src/main.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BackToTop_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BackToTop.vue */ "./node_modules/vue-backtotop/src/BackToTop.vue");
 

/**
 * Check why can't use () => {}
 */
_BackToTop_vue__WEBPACK_IMPORTED_MODULE_0__["default"].install = function (Vue, options) {
  Vue.component(_BackToTop_vue__WEBPACK_IMPORTED_MODULE_0__["default"].name, _BackToTop_vue__WEBPACK_IMPORTED_MODULE_0__["default"])
}

/* harmony default export */ __webpack_exports__["default"] = (_BackToTop_vue__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./node_modules/vue-backtotop/src/styles.css?vue&type=style&index=0&lang=css&":
/*!************************************************************************************!*\
  !*** ./node_modules/vue-backtotop/src/styles.css?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_loader_index_js_css_loader_index_js_ref_7_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_2_styles_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../style-loader!../../css-loader??ref--7-1!../../vue-loader/lib/loaders/stylePostLoader.js!../../postcss-loader/src??ref--7-2!./styles.css?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-backtotop/src/styles.css?vue&type=style&index=0&lang=css&");
/* harmony import */ var _style_loader_index_js_css_loader_index_js_ref_7_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_2_styles_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_index_js_css_loader_index_js_ref_7_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_2_styles_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _style_loader_index_js_css_loader_index_js_ref_7_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_2_styles_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _style_loader_index_js_css_loader_index_js_ref_7_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_2_styles_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_style_loader_index_js_css_loader_index_js_ref_7_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_2_styles_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./node_modules/vue-backtotop/src/BackToTop.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-backtotop/src/BackToTop.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************/
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


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'BackToTop',
  props: {
    text: {
      type: String,
      default: 'Voltar ao topo',
    },
    visibleoffset: {
      type: [String, Number],
      default: 600,
    },
    visibleoffsetbottom: {
      type: [String, Number],
      default: 0,
    },
    right: {
      type: String,
      default: '30px',
    },
    bottom: {
      type: String,
      default: '40px',
    },
    scrollFn: {
      type: Function,
      default: function (eventObject) {},
    }
  },
  data () {
    return {
      visible: false
    }
  },
  mounted () {
    window.smoothscroll = () => {
      let currentScroll = document.documentElement.scrollTop || document.body.scrollTop
      if (currentScroll > 0) {
        window.requestAnimationFrame(window.smoothscroll)
        window.scrollTo(0, Math.floor(currentScroll - (currentScroll / 5)))
      }
    }
    window.addEventListener('scroll', this.catchScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.catchScroll)
  },
  methods: {
    /**
     * Catch window scroll event 
     * @return {void}
     */
    catchScroll () {
      const pastTopOffset = window.pageYOffset > parseInt(this.visibleoffset)
      const pastBottomOffset = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - parseInt(this.visibleoffsetbottom)
      this.visible = parseInt(this.visibleoffsetbottom) > 0 ? pastTopOffset && !pastBottomOffset : pastTopOffset
      this.scrollFn(this)
    },
    /**
     * The function who make the magics
     * @return {void}
     */
    backToTop () {
      window.smoothscroll()
      this.$emit('scrolled')
    }
  },
});


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-backtotop/src/BackToTop.vue?vue&type=template&id=58c5690e&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-backtotop/src/BackToTop.vue?vue&type=template&id=58c5690e& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
  return _c("transition", { attrs: { name: "back-to-top-fade" } }, [
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.visible,
            expression: "visible"
          }
        ],
        staticClass: "vue-back-to-top",
        style: "bottom:" + this.bottom + ";right:" + this.right + ";",
        on: { click: _vm.backToTop }
      },
      [
        _vm._t("default", [
          _c("div", { staticClass: "default" }, [
            _c("span", [
              _vm._v("\n          " + _vm._s(_vm.text) + "\n        ")
            ])
          ])
        ])
      ],
      2
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/vx-auto-suggest/VxAutoSuggest.vue?vue&type=template&id=3b23de25&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/vx-auto-suggest/VxAutoSuggest.vue?vue&type=template&id=3b23de25& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "vx-auto-suggest" }, [
    _c(
      "div",
      { staticClass: "flex items-center relative" },
      [
        _c("vs-input", {
          ref: "input",
          staticClass: "z-50",
          class: _vm.inputClassses,
          attrs: {
            placeholder: _vm.placeholder,
            "icon-pack": "feather",
            icon: "icon-search",
            "icon-no-border": ""
          },
          on: {
            keyup: [
              function($event) {
                if (
                  !$event.type.indexOf("key") &&
                  _vm._k($event.keyCode, "esc", 27, $event.key, [
                    "Esc",
                    "Escape"
                  ])
                ) {
                  return null
                }
                return _vm.escPressed($event)
              },
              function($event) {
                if (
                  !$event.type.indexOf("key") &&
                  _vm._k($event.keyCode, "up", 38, $event.key, [
                    "Up",
                    "ArrowUp"
                  ])
                ) {
                  return null
                }
                return _vm.increaseIndex(false)
              },
              function($event) {
                if (
                  !$event.type.indexOf("key") &&
                  _vm._k($event.keyCode, "down", 40, $event.key, [
                    "Down",
                    "ArrowDown"
                  ])
                ) {
                  return null
                }
                return _vm.increaseIndex($event)
              },
              function($event) {
                if (
                  !$event.type.indexOf("key") &&
                  _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                ) {
                  return null
                }
                return _vm.suggestionSelected($event)
              }
            ],
            focus: _vm.updateInputFocus,
            blur: function($event) {
              return _vm.updateInputFocus(false)
            }
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
      "ul",
      {
        ref: "scrollContainer",
        staticClass:
          "auto-suggest-suggestions-list z-50 rounded-lg mt-2 shadow-lg overflow-hidden",
        class: { hidden: !_vm.inputFocused },
        attrs: { tabindex: "-1" },
        on: {
          mouseenter: function($event) {
            _vm.insideSuggestions = true
          },
          mouseleave: function($event) {
            _vm.insideSuggestions = false
          },
          focus: _vm.updateInputFocus,
          blur: function($event) {
            return _vm.updateInputFocus(false)
          }
        }
      },
      _vm._l(_vm.filteredData, function(suggestion, index) {
        return _c(
          "li",
          {
            key: index,
            ref: "option",
            refInFor: true,
            staticClass:
              "auto-suggest__suggestion flex items-center justify-between py-3 cursor-pointer",
            class: {
              "vx-auto-suggest__current-selected": _vm.currentSelected == index,
              "pointer-events-none": suggestion.index < 0
            },
            on: {
              mouseenter: function($event) {
                _vm.currentSelected = index
              },
              click: _vm.suggestionSelected
            }
          },
          [
            _c(
              "div",
              { staticClass: "flex items-center" },
              [
                _c("feather-icon", {
                  staticClass: "mr-4",
                  attrs: { icon: suggestion.labelIcon, svgClasses: "h-5 w-5" }
                }),
                _vm._v(" "),
                _c("span", [_vm._v(_vm._s(suggestion.label))])
              ],
              1
            ),
            _vm._v(" "),
            _vm.showAction
              ? _c("feather-icon", {
                  attrs: {
                    icon: _vm.data.actionIcon,
                    svgClasses: [
                      _vm.actionClasses(suggestion.highlightAction),
                      "h-5 w-5"
                    ]
                  },
                  on: {
                    click: function($event) {
                      $event.stopPropagation()
                      return _vm.actionClicked($event)
                    }
                  }
                })
              : _vm._e()
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/TheFooter.vue?vue&type=template&id=287afc22&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/components/TheFooter.vue?vue&type=template&id=287afc22& ***!
  \************************************************************************************************************************************************************************************************************************/
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
    "footer",
    { staticClass: "the-footer flex-wrap justify-between", class: _vm.classes },
    [
      _c("span", [
        _vm._v("COPYRIGHT @ " + _vm._s(new Date().getFullYear()) + " "),
        _c(
          "a",
          {
            attrs: {
              href:
                "https://themeforest.net/user/pixinvent/portfolio?ref=pixinvent",
              target: "_blank",
              rel: "nofollow"
            }
          },
          [_vm._v("Pixinvent")]
        ),
        _vm._v(", All rights Reserved")
      ]),
      _vm._v(" "),
      _c(
        "span",
        { staticClass: "md:flex hidden items-center" },
        [
          _c("span", [_vm._v("Hand-crafted & Made with")]),
          _vm._v(" "),
          _c("feather-icon", {
            staticClass: "ml-2",
            attrs: {
              icon: "HeartIcon",
              svgClasses: "stroke-current text-danger w-6 h-6"
            }
          })
        ],
        1
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/TheNavbar.vue?vue&type=template&id=71a5bfd2&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/components/TheNavbar.vue?vue&type=template&id=71a5bfd2& ***!
  \************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "relative" }, [
    _c(
      "div",
      { staticClass: "vx-navbar-wrapper" },
      [
        _c(
          "vs-navbar",
          {
            staticClass: "vx-navbar navbar-custom",
            class: _vm.classObj,
            attrs: { color: _vm.navbarColor }
          },
          [
            _c("feather-icon", {
              staticClass: "sm:inline-flex xl:hidden cursor-pointer mr-1",
              attrs: { icon: "MenuIcon" },
              on: {
                click: function($event) {
                  $event.stopPropagation()
                  return _vm.showSidebar($event)
                }
              }
            }),
            _vm._v(" "),
            _vm.breakpoint != "md"
              ? [
                  _c(
                    "ul",
                    { staticClass: "vx-navbar__starred-pages" },
                    [
                      _c(
                        "draggable",
                        {
                          staticClass: "flex cursor-move",
                          attrs: { group: { name: "pinList" } },
                          model: {
                            value: _vm.starredPagesLimited,
                            callback: function($$v) {
                              _vm.starredPagesLimited = $$v
                            },
                            expression: "starredPagesLimited"
                          }
                        },
                        _vm._l(_vm.starredPagesLimited, function(page) {
                          return _c(
                            "li",
                            { key: page.url, staticClass: "starred-page" },
                            [
                              _c(
                                "vx-tooltip",
                                {
                                  attrs: {
                                    text: page.label,
                                    position: "bottom",
                                    delay: ".3s"
                                  }
                                },
                                [
                                  _c("feather-icon", {
                                    staticClass: "p-2 cursor-pointer",
                                    attrs: {
                                      svgClasses: "h-6 w-6",
                                      icon: page.labelIcon
                                    },
                                    on: {
                                      click: function($event) {
                                        return _vm.$router.push(page.url)
                                      }
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
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _vm.starredPagesMore.length
                    ? _c(
                        "div",
                        {
                          staticClass: "vx-navbar__starred-pages--more-dropdown"
                        },
                        [
                          _c(
                            "vs-dropdown",
                            {
                              attrs: {
                                "vs-custom-content": "",
                                "vs-trigger-click": ""
                              }
                            },
                            [
                              _c("feather-icon", {
                                staticClass: "cursor-pointer p-2",
                                attrs: {
                                  icon: "ChevronDownIcon",
                                  svgClasses: "h-4 w-4"
                                }
                              }),
                              _vm._v(" "),
                              _c("vs-dropdown-menu", [
                                _c(
                                  "ul",
                                  {
                                    staticClass:
                                      "vx-navbar__starred-pages-more--list"
                                  },
                                  [
                                    _c(
                                      "draggable",
                                      {
                                        staticClass: "cursor-move",
                                        attrs: { group: { name: "pinList" } },
                                        model: {
                                          value: _vm.starredPagesMore,
                                          callback: function($$v) {
                                            _vm.starredPagesMore = $$v
                                          },
                                          expression: "starredPagesMore"
                                        }
                                      },
                                      _vm._l(_vm.starredPagesMore, function(
                                        page
                                      ) {
                                        return _c(
                                          "li",
                                          {
                                            key: page.url,
                                            staticClass:
                                              "starred-page--more flex items-center cursor-pointer",
                                            on: {
                                              click: function($event) {
                                                return _vm.$router.push(
                                                  page.url
                                                )
                                              }
                                            }
                                          },
                                          [
                                            _c("feather-icon", {
                                              staticClass: "ml-2 mr-1",
                                              attrs: {
                                                svgClasses: "h-5 w-5",
                                                icon: page.labelIcon
                                              }
                                            }),
                                            _vm._v(" "),
                                            _c(
                                              "span",
                                              { staticClass: "px-2 pt-2 pb-1" },
                                              [_vm._v(_vm._s(page.label))]
                                            )
                                          ],
                                          1
                                        )
                                      }),
                                      0
                                    )
                                  ],
                                  1
                                )
                              ])
                            ],
                            1
                          )
                        ],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "bookmark-container" },
                    [
                      _c("feather-icon", {
                        staticClass: "cursor-pointer p-2",
                        attrs: {
                          icon: "StarIcon",
                          svgClasses: [
                            "stoke-current text-warning",
                            { "text-white": _vm.navbarColor != "#fff" }
                          ]
                        },
                        on: {
                          click: function($event) {
                            $event.stopPropagation()
                            _vm.showBookmarkPagesDropdown = !_vm.showBookmarkPagesDropdown
                          }
                        }
                      }),
                      _vm._v(" "),
                      _vm.showBookmarkPagesDropdown
                        ? _c(
                            "div",
                            {
                              directives: [
                                {
                                  name: "click-outside",
                                  rawName: "v-click-outside",
                                  value: _vm.outside,
                                  expression: "outside"
                                }
                              ],
                              staticClass:
                                "absolute bookmark-list w-1/3 xl:w-1/4 mt-4"
                            },
                            [
                              _c("vx-auto-suggest", {
                                attrs: {
                                  autoFocus: true,
                                  data: _vm.navbarSearchAndPinList,
                                  inputClassses: "w-full",
                                  "show-action": "",
                                  "show-pinned": "",
                                  "background-overlay": ""
                                },
                                on: {
                                  selected: _vm.selected,
                                  actionClicked: _vm.actionClicked
                                }
                              })
                            ],
                            1
                          )
                        : _vm._e()
                    ],
                    1
                  )
                ]
              : _vm._e(),
            _vm._v(" "),
            _c("vs-spacer"),
            _vm._v(" "),
            _c(
              "vs-dropdown",
              {
                staticClass: "cursor-pointer",
                attrs: { "vs-custom-content": "", "vs-trigger-click": "" }
              },
              [
                _c("span", { staticClass: "cursor-pointer flex i18n-locale" }, [
                  _c("img", {
                    staticClass: "h-4 w-5",
                    attrs: {
                      src: __webpack_require__("./resources/js/src/assets/images/flags sync recursive ^\\.\\/.*\\.png$")("./" +
                        _vm.$i18n.locale +
                        ".png"),
                      alt: _vm.$i18n.locale
                    }
                  }),
                  _c("span", { staticClass: "hidden sm:block ml-2" }, [
                    _vm._v(_vm._s(_vm.getCurrentLocaleData.lang))
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "vs-dropdown-menu",
                  { staticClass: "w-48 i18n-dropdown vx-navbar-dropdown" },
                  [
                    _c(
                      "vs-dropdown-item",
                      {
                        on: {
                          click: function($event) {
                            return _vm.updateLocale("en")
                          }
                        }
                      },
                      [
                        _c("img", {
                          staticClass: "h-4 w-5 mr-1",
                          attrs: {
                            src: __webpack_require__(/*! @/assets/images/flags/en.png */ "./resources/js/src/assets/images/flags/en.png"),
                            alt: "en"
                          }
                        }),
                        _vm._v("  English")
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "vs-dropdown-item",
                      {
                        on: {
                          click: function($event) {
                            return _vm.updateLocale("fr")
                          }
                        }
                      },
                      [
                        _c("img", {
                          staticClass: "h-4 w-5 mr-1",
                          attrs: {
                            src: __webpack_require__(/*! @/assets/images/flags/fr.png */ "./resources/js/src/assets/images/flags/fr.png"),
                            alt: "fr"
                          }
                        }),
                        _vm._v("  French")
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "vs-dropdown-item",
                      {
                        on: {
                          click: function($event) {
                            return _vm.updateLocale("de")
                          }
                        }
                      },
                      [
                        _c("img", {
                          staticClass: "h-4 w-5 mr-1",
                          attrs: {
                            src: __webpack_require__(/*! @/assets/images/flags/de.png */ "./resources/js/src/assets/images/flags/de.png"),
                            alt: "de"
                          }
                        }),
                        _vm._v("  German")
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "vs-dropdown-item",
                      {
                        on: {
                          click: function($event) {
                            return _vm.updateLocale("pt")
                          }
                        }
                      },
                      [
                        _c("img", {
                          staticClass: "h-4 w-5 mr-1",
                          attrs: {
                            src: __webpack_require__(/*! @/assets/images/flags/pt.png */ "./resources/js/src/assets/images/flags/pt.png"),
                            alt: "pt"
                          }
                        }),
                        _vm._v("  Portuguese")
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
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.showFullSearch,
                    expression: "showFullSearch"
                  }
                ],
                staticClass:
                  "search-full-container w-full h-full absolute left-0 rounded-lg",
                class: { flex: _vm.showFullSearch }
              },
              [
                _c("vx-auto-suggest", {
                  ref: "navbarSearch",
                  staticClass: "w-full",
                  attrs: {
                    inputClassses:
                      "w-full vs-input-no-border vs-input-no-shdow-focus no-icon-border",
                    autoFocus: _vm.showFullSearch,
                    data: _vm.navbarSearchAndPinList,
                    icon: "SearchIcon",
                    placeholder: "Search...",
                    "background-overlay": ""
                  },
                  on: {
                    closeSearchbar: function($event) {
                      _vm.showFullSearch = false
                    },
                    selected: _vm.selected
                  }
                }),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "absolute right-0 h-full z-50" },
                  [
                    _c("feather-icon", {
                      staticClass:
                        "px-4 cursor-pointer h-full close-search-icon",
                      attrs: { icon: "XIcon" },
                      on: {
                        click: function($event) {
                          _vm.showFullSearch = false
                        }
                      }
                    })
                  ],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _c("feather-icon", {
              staticClass: "cursor-pointer navbar-fuzzy-search ml-4",
              attrs: { icon: "SearchIcon" },
              on: {
                click: function($event) {
                  _vm.showFullSearch = true
                }
              }
            }),
            _vm._v(" "),
            _c(
              "vs-dropdown",
              {
                staticClass: "cursor-pointer",
                attrs: { "vs-custom-content": "", "vs-trigger-click": "" }
              },
              [
                _c("feather-icon", {
                  staticClass: "cursor-pointer ml-4 mr-6 mt-1",
                  attrs: {
                    icon: "ShoppingCartIcon",
                    badge: _vm.cartItems.length
                  }
                }),
                _vm._v(" "),
                _c(
                  "vs-dropdown-menu",
                  {
                    staticClass: "cart-dropdown vx-navbar-dropdown",
                    class: { "dropdown-custom": _vm.cartItems.length }
                  },
                  [
                    _vm.cartItems.length
                      ? [
                          _c(
                            "div",
                            {
                              staticClass:
                                "notification-header text-center p-5 bg-primary text-white"
                            },
                            [
                              _c("h3", { staticClass: "text-white" }, [
                                _vm._v(_vm._s(_vm.cartItems.length) + " Item"),
                                _c(
                                  "span",
                                  {
                                    directives: [
                                      {
                                        name: "show",
                                        rawName: "v-show",
                                        value: _vm.cartItems.length > 1,
                                        expression: "cartItems.length > 1"
                                      }
                                    ]
                                  },
                                  [_vm._v("s")]
                                )
                              ]),
                              _vm._v(" "),
                              _c("p", { staticClass: "opacity-75" }, [
                                _vm._v("In Your Cart")
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "VuePerfectScrollbar",
                            {
                              ref: "mainSidebarPs",
                              staticClass:
                                "scroll-area--cart-items-dropdowm p-0 mb-10",
                              attrs: { settings: _vm.settings }
                            },
                            [
                              _c(
                                "ul",
                                { staticClass: "bordered-items" },
                                _vm._l(_vm.cartItems, function(item) {
                                  return _c(
                                    "li",
                                    {
                                      key: item.objectID,
                                      staticClass:
                                        "vx-row no-gutter cart-item cursor-pointer"
                                    },
                                    [
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "vx-col w-1/5 item-img-container bg-white flex items-center justify-center"
                                        },
                                        [
                                          _c("img", {
                                            staticClass:
                                              "cart-dropdown-item-img p-4",
                                            attrs: {
                                              src: item.image,
                                              alt: "item"
                                            }
                                          })
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "vx-col w-4/5 pr-4 pl-2 py-4 flex flex-col justify-center"
                                        },
                                        [
                                          _c(
                                            "span",
                                            {
                                              staticClass:
                                                "font-medium block cart-item-title truncate"
                                            },
                                            [_vm._v(_vm._s(item.name))]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "small",
                                            { staticClass: "truncate mb-2" },
                                            [_vm._v(_vm._s(item.description))]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "flex items-center justify-between"
                                            },
                                            [
                                              _c(
                                                "span",
                                                {
                                                  staticClass:
                                                    "text-sm font-medium"
                                                },
                                                [
                                                  _vm._v(
                                                    _vm._s(item.quantity) + " "
                                                  ),
                                                  _c("small", [_vm._v("x")]),
                                                  _vm._v(
                                                    " $" + _vm._s(item.price)
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c("feather-icon", {
                                                staticClass:
                                                  "hover:text-danger",
                                                attrs: {
                                                  icon: "XIcon",
                                                  svgClasses:
                                                    "h-4 w-4 cursor-pointer text-danger"
                                                },
                                                on: {
                                                  click: function($event) {
                                                    $event.stopPropagation()
                                                    return _vm.removeItemFromCart(
                                                      item
                                                    )
                                                  }
                                                }
                                              })
                                            ],
                                            1
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                }),
                                0
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass:
                                " checkout-footer fixed bottom-0 rounded-b-lg text-primary font-semibold w-full p-2 text-center border border-b-0 border-l-0 border-r-0 border-solid d-theme-border-grey-light cursor-pointer",
                              on: {
                                click: function($event) {
                                  return _vm.$router.push(
                                    "/apps/eCommerce/checkout"
                                  )
                                }
                              }
                            },
                            [
                              _c(
                                "span",
                                {
                                  staticClass:
                                    "flex items-center justify-center"
                                },
                                [
                                  _c("feather-icon", {
                                    attrs: {
                                      icon: "ShoppingCartIcon",
                                      svgClasses: "h-4 w-4"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "ml-2" }, [
                                    _vm._v("Checkout")
                                  ])
                                ],
                                1
                              )
                            ]
                          )
                        ]
                      : [
                          _c("p", { staticClass: "p-4" }, [
                            _vm._v("Your Cart Is Empty.")
                          ])
                        ]
                  ],
                  2
                )
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
                  staticClass: "cursor-pointer mt-1 sm:mr-6 mr-2",
                  attrs: {
                    icon: "BellIcon",
                    badge: _vm.unreadNotifications.length
                  }
                }),
                _vm._v(" "),
                _c(
                  "vs-dropdown-menu",
                  {
                    staticClass:
                      "notification-dropdown dropdown-custom vx-navbar-dropdown"
                  },
                  [
                    _c(
                      "div",
                      {
                        staticClass:
                          "notification-top text-center p-5 bg-primary text-white"
                      },
                      [
                        _c("h3", { staticClass: "text-white" }, [
                          _vm._v(
                            _vm._s(_vm.unreadNotifications.length) + " New"
                          )
                        ]),
                        _vm._v(" "),
                        _c("p", { staticClass: "opacity-75" }, [
                          _vm._v("App Notifications")
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "VuePerfectScrollbar",
                      {
                        ref: "mainSidebarPs",
                        staticClass:
                          "scroll-area--nofications-dropdown p-0 mb-10",
                        attrs: { settings: _vm.settings }
                      },
                      [
                        _c(
                          "ul",
                          { staticClass: "bordered-items" },
                          _vm._l(_vm.unreadNotifications, function(ntf) {
                            return _c(
                              "li",
                              {
                                key: ntf.index,
                                staticClass:
                                  "flex justify-between px-4 py-4 notification cursor-pointer"
                              },
                              [
                                _c(
                                  "div",
                                  { staticClass: "flex items-start" },
                                  [
                                    _c("feather-icon", {
                                      attrs: {
                                        icon: ntf.icon,
                                        svgClasses: [
                                          "text-" + ntf.category,
                                          "stroke-current mr-1 h-6 w-6"
                                        ]
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "mx-2" }, [
                                      _c(
                                        "span",
                                        {
                                          staticClass:
                                            "font-medium block notification-title",
                                          class: ["text-" + ntf.category]
                                        },
                                        [_vm._v(_vm._s(ntf.title))]
                                      ),
                                      _vm._v(" "),
                                      _c("small", [_vm._v(_vm._s(ntf.msg))])
                                    ])
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "small",
                                  { staticClass: "mt-1 whitespace-no-wrap" },
                                  [_vm._v(_vm._s(_vm.elapsedTime(ntf.time)))]
                                )
                              ]
                            )
                          }),
                          0
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass:
                          "\n                        checkout-footer\n                        fixed\n                        bottom-0\n                        rounded-b-lg\n                        text-primary\n                        w-full\n                        p-2\n                        font-semibold\n                        text-center\n                        border\n                        border-b-0\n                        border-l-0\n                        border-r-0\n                        border-solid\n                        d-theme-border-grey-light\n                        cursor-pointer"
                      },
                      [_c("span", [_vm._v("View All Notifications")])]
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
              { staticClass: "the-navbar__user-meta flex items-center" },
              [
                _c(
                  "div",
                  { staticClass: "text-right leading-tight hidden sm:block" },
                  [
                    _c("p", { staticClass: "font-semibold" }, [
                      _vm._v(_vm._s(_vm.user_displayName))
                    ]),
                    _vm._v(" "),
                    _c("small", [_vm._v("Available")])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "vs-dropdown",
                  {
                    staticClass: "cursor-pointer",
                    attrs: { "vs-custom-content": "", "vs-trigger-click": "" }
                  },
                  [
                    _c("div", { staticClass: "con-img ml-3" }, [
                      _vm.activeUserImg.startsWith("http")
                        ? _c("img", {
                            key: "onlineImg",
                            staticClass:
                              "rounded-full shadow-md cursor-pointer block",
                            attrs: {
                              src: _vm.activeUserImg,
                              alt: "user-img",
                              width: "40",
                              height: "40"
                            }
                          })
                        : _c("img", {
                            key: "localImg",
                            staticClass:
                              "rounded-full shadow-md cursor-pointer block",
                            attrs: {
                              src: __webpack_require__("./resources/js/src/assets/images/portrait/small sync recursive ^\\.\\/.*$")("./" +
                                _vm.activeUserImg),
                              alt: "user-img",
                              width: "40",
                              height: "40"
                            }
                          })
                    ]),
                    _vm._v(" "),
                    _c(
                      "vs-dropdown-menu",
                      { staticClass: "vx-navbar-dropdown" },
                      [
                        _c(
                          "ul",
                          { staticStyle: { "min-width": "9rem" } },
                          [
                            _c(
                              "li",
                              {
                                staticClass:
                                  "flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white",
                                on: {
                                  click: function($event) {
                                    return _vm.$router.push("/pages/profile")
                                  }
                                }
                              },
                              [
                                _c("feather-icon", {
                                  attrs: {
                                    icon: "UserIcon",
                                    svgClasses: "w-4 h-4"
                                  }
                                }),
                                _vm._v(" "),
                                _c("span", { staticClass: "ml-2" }, [
                                  _vm._v("Profile")
                                ])
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "li",
                              {
                                staticClass:
                                  "flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white",
                                on: {
                                  click: function($event) {
                                    return _vm.$router.push("/apps/email")
                                  }
                                }
                              },
                              [
                                _c("feather-icon", {
                                  attrs: {
                                    icon: "MailIcon",
                                    svgClasses: "w-4 h-4"
                                  }
                                }),
                                _vm._v(" "),
                                _c("span", { staticClass: "ml-2" }, [
                                  _vm._v("Inbox")
                                ])
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "li",
                              {
                                staticClass:
                                  "flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white",
                                on: {
                                  click: function($event) {
                                    return _vm.$router.push("/apps/todo")
                                  }
                                }
                              },
                              [
                                _c("feather-icon", {
                                  attrs: {
                                    icon: "CheckSquareIcon",
                                    svgClasses: "w-4 h-4"
                                  }
                                }),
                                _vm._v(" "),
                                _c("span", { staticClass: "ml-2" }, [
                                  _vm._v("Tasks")
                                ])
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "li",
                              {
                                staticClass:
                                  "flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white",
                                on: {
                                  click: function($event) {
                                    return _vm.$router.push("/apps/chat")
                                  }
                                }
                              },
                              [
                                _c("feather-icon", {
                                  attrs: {
                                    icon: "MessageSquareIcon",
                                    svgClasses: "w-4 h-4"
                                  }
                                }),
                                _vm._v(" "),
                                _c("span", { staticClass: "ml-2" }, [
                                  _vm._v("Chat")
                                ])
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "li",
                              {
                                staticClass:
                                  "flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white",
                                on: {
                                  click: function($event) {
                                    return _vm.$router.push(
                                      "/apps/eCommerce/wish-list"
                                    )
                                  }
                                }
                              },
                              [
                                _c("feather-icon", {
                                  attrs: {
                                    icon: "HeartIcon",
                                    svgClasses: "w-4 h-4"
                                  }
                                }),
                                _vm._v(" "),
                                _c("span", { staticClass: "ml-2" }, [
                                  _vm._v("Wish List")
                                ])
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c("vs-divider", { staticClass: "m-1" }),
                            _vm._v(" "),
                            _c(
                              "li",
                              {
                                staticClass:
                                  "flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white",
                                on: { click: _vm.logout }
                              },
                              [
                                _c("feather-icon", {
                                  attrs: {
                                    icon: "LogOutIcon",
                                    svgClasses: "w-4 h-4"
                                  }
                                }),
                                _vm._v(" "),
                                _c("span", { staticClass: "ml-2" }, [
                                  _vm._v("Logout")
                                ])
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
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/customizer/TheCustomizer.vue?vue&type=template&id=547b72da&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/components/customizer/TheCustomizer.vue?vue&type=template&id=547b72da& ***!
  \***************************************************************************************************************************************************************************************************************************************/
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
    { attrs: { id: "theme-customizer" } },
    [
      _c("vs-button", {
        staticClass: "customizer-btn",
        attrs: {
          color: "primary",
          type: "filled",
          "icon-pack": "feather",
          icon: "icon-settings"
        },
        on: {
          click: function($event) {
            $event.stopPropagation()
            _vm.active = !_vm.active
          }
        }
      }),
      _vm._v(" "),
      _c(
        "vs-sidebar",
        {
          staticClass: "items-no-padding",
          attrs: {
            "hidden-background": "",
            "position-right": "",
            "click-not-close": ""
          },
          model: {
            value: _vm.active,
            callback: function($$v) {
              _vm.active = $$v
            },
            expression: "active"
          }
        },
        [
          _c(
            "div",
            { staticClass: "h-full" },
            [
              _c(
                "div",
                {
                  staticClass:
                    "customizer-header mt-6 flex items-center justify-between px-6"
                },
                [
                  _c("div", [
                    _c("h4", [_vm._v("THEME CUSTOMIZER")]),
                    _vm._v(" "),
                    _c("small", [_vm._v("Customize & Preview in Real Time")])
                  ]),
                  _vm._v(" "),
                  _c("feather-icon", {
                    staticClass: "cursor-pointer",
                    attrs: { icon: "XIcon" },
                    on: {
                      click: function($event) {
                        $event.stopPropagation()
                        _vm.active = false
                      }
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c("vs-divider", { staticClass: "mb-0" }),
              _vm._v(" "),
              _c(
                "VuePerfectScrollbar",
                {
                  staticClass: "scroll-area--customizer pt-4 pb-6",
                  attrs: { settings: _vm.settings }
                },
                [
                  _c(
                    "div",
                    { staticClass: "px-6" },
                    [
                      _c("div", [
                        _c("h5", { staticClass: "mb-4" }, [
                          _vm._v("Theme Color")
                        ]),
                        _vm._v(" "),
                        _c(
                          "ul",
                          { staticClass: "clearfix" },
                          [
                            _vm._l(_vm.themeColors, function(color) {
                              return _c("li", {
                                key: color,
                                staticClass:
                                  "w-10 cursor-pointer h-10 rounded-lg m-2 float-left",
                                class: {
                                  "shadow-outline": color == _vm.primaryColor
                                },
                                style: { backgroundColor: color },
                                on: {
                                  click: function($event) {
                                    return _vm.updatePrimaryColor(color)
                                  }
                                }
                              })
                            }),
                            _vm._v(" "),
                            _c("li", {
                              staticClass:
                                "w-10 cursor-pointer h-10 rounded-lg m-2 float-left",
                              class: {
                                "shadow-outline":
                                  _vm.customPrimaryColor == _vm.primaryColor
                              },
                              style: {
                                backgroundColor: _vm.customPrimaryColor
                              },
                              on: {
                                click: function($event) {
                                  return _vm.updatePrimaryColor(
                                    _vm.customPrimaryColor
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("li", { staticClass: "float-left" }, [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.customPrimaryColor,
                                    expression: "customPrimaryColor"
                                  }
                                ],
                                staticClass:
                                  "w-10 cursor-pointer h-10 rounded-lg m-2",
                                attrs: { type: "color" },
                                domProps: { value: _vm.customPrimaryColor },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.customPrimaryColor = $event.target.value
                                  }
                                }
                              })
                            ])
                          ],
                          2
                        )
                      ]),
                      _vm._v(" "),
                      _c("vs-divider"),
                      _vm._v(" "),
                      _c("div", { staticClass: "mt-4" }, [
                        _c("h5", { staticClass: "mb-2" }, [
                          _vm._v("Dark Mode")
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          [
                            _c(
                              "vs-radio",
                              {
                                staticClass: "mr-4",
                                attrs: { "vs-value": "light" },
                                model: {
                                  value: _vm.theme,
                                  callback: function($$v) {
                                    _vm.theme = $$v
                                  },
                                  expression: "theme"
                                }
                              },
                              [_vm._v("Light")]
                            ),
                            _vm._v(" "),
                            _c(
                              "vs-radio",
                              {
                                staticClass: "mr-4",
                                attrs: { "vs-value": "dark" },
                                model: {
                                  value: _vm.theme,
                                  callback: function($$v) {
                                    _vm.theme = $$v
                                  },
                                  expression: "theme"
                                }
                              },
                              [_vm._v("Dark")]
                            ),
                            _vm._v(" "),
                            _c(
                              "vs-radio",
                              {
                                attrs: { "vs-value": "semi-dark" },
                                model: {
                                  value: _vm.theme,
                                  callback: function($$v) {
                                    _vm.theme = $$v
                                  },
                                  expression: "theme"
                                }
                              },
                              [_vm._v("Semi Dark")]
                            )
                          ],
                          1
                        )
                      ]),
                      _vm._v(" "),
                      _c("vs-divider"),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "mt-4 flex justify-between" },
                        [
                          _c("h5", [_vm._v("Collapse Sidebar")]),
                          _vm._v(" "),
                          _c("vs-switch", {
                            model: {
                              value: _vm.reduced_sidebar,
                              callback: function($$v) {
                                _vm.reduced_sidebar = $$v
                              },
                              expression: "reduced_sidebar"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("vs-divider"),
                      _vm._v(" "),
                      _c("div", { staticClass: "mt-4" }, [
                        _c("h5", [_vm._v("Navbar Color")]),
                        _vm._v(" "),
                        _c(
                          "ul",
                          { staticClass: "clearfix" },
                          [
                            _c("li", {
                              staticClass:
                                "w-10 m-2 h-10 rounded-lg bg-white float-left cursor-pointer border border-solid border-grey-light",
                              class: _vm.navbarColorOptionClasses("#fff"),
                              on: {
                                click: function($event) {
                                  _vm.navbarColorLocal = "#fff"
                                }
                              }
                            }),
                            _vm._v(" "),
                            _vm._l(_vm.themeColors, function(color) {
                              return _c("li", {
                                key: color,
                                staticClass:
                                  "w-10 cursor-pointer h-10 rounded-lg m-2 float-left",
                                class: _vm.navbarColorOptionClasses(color),
                                style: { backgroundColor: color },
                                on: {
                                  click: function($event) {
                                    _vm.navbarColorLocal = color
                                  }
                                }
                              })
                            }),
                            _vm._v(" "),
                            _c("li", {
                              staticClass:
                                "w-10 cursor-pointer h-10 rounded-lg m-2 float-left",
                              class: _vm.navbarColorOptionClasses(
                                _vm.navbarColorOptionClasses
                              ),
                              style: { backgroundColor: _vm.customNavbarColor },
                              on: {
                                click: function($event) {
                                  _vm.navbarColorLocal = _vm.customNavbarColor
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("li", { staticClass: "float-left" }, [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.customNavbarColor,
                                    expression: "customNavbarColor"
                                  }
                                ],
                                staticClass:
                                  "w-10 cursor-pointer h-10 rounded-lg m-2",
                                attrs: { type: "color" },
                                domProps: { value: _vm.customNavbarColor },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.customNavbarColor = $event.target.value
                                  }
                                }
                              })
                            ])
                          ],
                          2
                        )
                      ]),
                      _vm._v(" "),
                      _c("vs-divider"),
                      _vm._v(" "),
                      _c("div", { staticClass: "mt-4" }, [
                        _c("h5", { staticClass: "mb-2" }, [
                          _vm._v("Navbar Type")
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          [
                            _c(
                              "vs-radio",
                              {
                                staticClass: "mr-4",
                                attrs: { "vs-value": "navbar-hidden" },
                                model: {
                                  value: _vm.navbarTypeLocal,
                                  callback: function($$v) {
                                    _vm.navbarTypeLocal = $$v
                                  },
                                  expression: "navbarTypeLocal"
                                }
                              },
                              [_vm._v("Hidden")]
                            ),
                            _vm._v(" "),
                            _c(
                              "vs-radio",
                              {
                                staticClass: "mr-4",
                                attrs: { "vs-value": "navbar-static" },
                                model: {
                                  value: _vm.navbarTypeLocal,
                                  callback: function($$v) {
                                    _vm.navbarTypeLocal = $$v
                                  },
                                  expression: "navbarTypeLocal"
                                }
                              },
                              [_vm._v("Static")]
                            ),
                            _vm._v(" "),
                            _c(
                              "vs-radio",
                              {
                                staticClass: "mr-4",
                                attrs: { "vs-value": "navbar-sticky" },
                                model: {
                                  value: _vm.navbarTypeLocal,
                                  callback: function($$v) {
                                    _vm.navbarTypeLocal = $$v
                                  },
                                  expression: "navbarTypeLocal"
                                }
                              },
                              [_vm._v("Sticky")]
                            ),
                            _vm._v(" "),
                            _c(
                              "vs-radio",
                              {
                                attrs: { "vs-value": "navbar-floating" },
                                model: {
                                  value: _vm.navbarTypeLocal,
                                  callback: function($$v) {
                                    _vm.navbarTypeLocal = $$v
                                  },
                                  expression: "navbarTypeLocal"
                                }
                              },
                              [_vm._v("Floating")]
                            )
                          ],
                          1
                        )
                      ]),
                      _vm._v(" "),
                      _c("vs-divider"),
                      _vm._v(" "),
                      _c("div", { staticClass: "mt-4" }, [
                        _c("h5", { staticClass: "mb-2" }, [
                          _vm._v("Footer Type")
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          [
                            _c(
                              "vs-radio",
                              {
                                staticClass: "mr-4",
                                attrs: { "vs-value": "hidden" },
                                model: {
                                  value: _vm.footerTypeLocal,
                                  callback: function($$v) {
                                    _vm.footerTypeLocal = $$v
                                  },
                                  expression: "footerTypeLocal"
                                }
                              },
                              [_vm._v("Hidden")]
                            ),
                            _vm._v(" "),
                            _c(
                              "vs-radio",
                              {
                                staticClass: "mr-4",
                                attrs: { "vs-value": "static" },
                                model: {
                                  value: _vm.footerTypeLocal,
                                  callback: function($$v) {
                                    _vm.footerTypeLocal = $$v
                                  },
                                  expression: "footerTypeLocal"
                                }
                              },
                              [_vm._v("Static")]
                            ),
                            _vm._v(" "),
                            _c(
                              "vs-radio",
                              {
                                attrs: { "vs-value": "sticky" },
                                model: {
                                  value: _vm.footerTypeLocal,
                                  callback: function($$v) {
                                    _vm.footerTypeLocal = $$v
                                  },
                                  expression: "footerTypeLocal"
                                }
                              },
                              [_vm._v("Sticky")]
                            )
                          ],
                          1
                        )
                      ]),
                      _vm._v(" "),
                      _c("vs-divider"),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "mt-4 flex justify-between" },
                        [
                          _c("h5", { staticClass: "mb-2" }, [
                            _vm._v("Hide Scroll To Top")
                          ]),
                          _vm._v(" "),
                          _c("vs-switch", {
                            model: {
                              value: _vm.hideScrollToTopLocal,
                              callback: function($$v) {
                                _vm.hideScrollToTopLocal = $$v
                              },
                              expression: "hideScrollToTopLocal"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("vs-divider"),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "mt-4" },
                        [
                          _c("h5", { staticClass: "mb-2" }, [
                            _vm._v(
                              "Router Animation " +
                                _vm._s(_vm.routerTransitionLocal)
                            )
                          ]),
                          _vm._v(" "),
                          _c(
                            "vs-select",
                            {
                              model: {
                                value: _vm.routerTransitionLocal,
                                callback: function($$v) {
                                  _vm.routerTransitionLocal = $$v
                                },
                                expression: "routerTransitionLocal"
                              }
                            },
                            _vm._l(_vm.routerTransitionsList, function(
                              item,
                              index
                            ) {
                              return _c("vs-select-item", {
                                key: index,
                                attrs: { value: item.value, text: item.text }
                              })
                            }),
                            1
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
          )
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/vx-sidebar/VxSidebar.vue?vue&type=template&id=1f949f14&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/components/vx-sidebar/VxSidebar.vue?vue&type=template&id=1f949f14& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "parentx" },
    [
      _c(
        "vs-sidebar",
        {
          directives: [
            {
              name: "hammer",
              rawName: "v-hammer:swipe.left",
              value: _vm.onSwipeLeft,
              expression: "onSwipeLeft",
              arg: "swipe",
              modifiers: { left: true }
            }
          ],
          ref: "mainSidebar",
          staticClass: "sidebarx main-menu-sidebar items-no-padding",
          attrs: {
            parent: _vm.parent,
            hiddenBackground: _vm.clickNotClose,
            reduce: _vm.reduce,
            "default-index": "-1",
            "click-not-close": _vm.clickNotClose,
            "reduce-not-rebound": _vm.reduceNotRebound
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
          _c(
            "div",
            {
              on: {
                mouseenter: _vm.sidebarMouseEntered,
                mouseleave: _vm.sidebarMouseLeave
              }
            },
            [
              _c(
                "div",
                {
                  staticClass: "header-sidebar flex items-end justify-between",
                  attrs: { slot: "header" },
                  slot: "header"
                },
                [
                  _c("div", { staticClass: "logo flex items-center" }, [
                    _vm.logo
                      ? _c("img", {
                          staticClass: "w-10 mr-4",
                          attrs: { src: _vm.logo, alt: "logo" }
                        })
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.title
                      ? _c(
                          "span",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.isMouseEnter || !_vm.reduce,
                                expression: "isMouseEnter || !reduce"
                              }
                            ],
                            staticClass: "logo-text"
                          },
                          [_vm._v(_vm._s(_vm.title))]
                        )
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    [
                      _vm.showCloseButton
                        ? [
                            _c("feather-icon", {
                              staticClass: "m-0 cursor-pointer",
                              attrs: { icon: "XIcon" },
                              on: {
                                click: function($event) {
                                  return _vm.$store.commit(
                                    "TOGGLE_IS_SIDEBAR_ACTIVE",
                                    false
                                  )
                                }
                              }
                            })
                          ]
                        : !_vm.showCloseButton && !_vm.sidebarItemsMin
                        ? [
                            _c("feather-icon", {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: !_vm.reduce,
                                  expression: "!reduce"
                                }
                              ],
                              staticClass: "mr-0 cursor-pointer",
                              attrs: {
                                icon: "DiscIcon",
                                "svg-classes": "stroke-current",
                                id: "btnSidebarToggler"
                              },
                              on: {
                                click: function($event) {
                                  return _vm.toggleReduce(true)
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("feather-icon", {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: _vm.reduce,
                                  expression: "reduce"
                                }
                              ],
                              staticClass: "mr-0 cursor-pointer",
                              attrs: {
                                icon: "CircleIcon",
                                "svg-classes": "stroke-current",
                                id: "btnSidebarToggler"
                              },
                              on: {
                                click: function($event) {
                                  return _vm.toggleReduce(false)
                                }
                              }
                            })
                          ]
                        : _vm._e()
                    ],
                    2
                  )
                ]
              ),
              _vm._v(" "),
              _c("div", {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.showShadowBottom,
                    expression: "showShadowBottom"
                  }
                ],
                staticClass: "shadow-bottom"
              }),
              _vm._v(" "),
              _c(
                "VuePerfectScrollbar",
                {
                  ref: "mainSidebarPs",
                  staticClass: "scroll-area--main-sidebar pt-2",
                  attrs: { settings: _vm.settings },
                  on: { "ps-scroll-y": _vm.psSectionScroll }
                },
                [
                  _vm._l(_vm.sidebarItems, function(sidebarItem, index) {
                    return [
                      sidebarItem.header && !_vm.sidebarItemsMin
                        ? _c(
                            "span",
                            {
                              key: "header-" + index,
                              staticClass: "navigation-header truncate"
                            },
                            [
                              _vm._v(
                                _vm._s(
                                  _vm.$t(sidebarItem.i18n) || sidebarItem.header
                                )
                              )
                            ]
                          )
                        : !sidebarItem.header
                        ? [
                            !sidebarItem.submenu
                              ? _c(
                                  "vx-sidebar-item",
                                  {
                                    key: "sidebarItem-" + index,
                                    ref: "sidebarLink",
                                    refInFor: true,
                                    attrs: {
                                      index: index,
                                      to:
                                        sidebarItem.slug != "external"
                                          ? sidebarItem.url
                                          : "",
                                      href:
                                        sidebarItem.slug == "external"
                                          ? sidebarItem.url
                                          : "",
                                      icon: sidebarItem.icon,
                                      target: sidebarItem.target,
                                      isDisabled: sidebarItem.isDisabled
                                    }
                                  },
                                  [
                                    _c(
                                      "span",
                                      {
                                        directives: [
                                          {
                                            name: "show",
                                            rawName: "v-show",
                                            value: !_vm.sidebarItemsMin,
                                            expression: "!sidebarItemsMin"
                                          }
                                        ],
                                        staticClass: "truncate"
                                      },
                                      [
                                        _vm._v(
                                          _vm._s(
                                            _vm.$t(sidebarItem.i18n) ||
                                              sidebarItem.name
                                          )
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    sidebarItem.tag &&
                                    (_vm.isMouseEnter || !_vm.reduce)
                                      ? _c(
                                          "vs-chip",
                                          {
                                            staticClass: "ml-auto",
                                            attrs: {
                                              color: sidebarItem.tagColor
                                            }
                                          },
                                          [_vm._v(_vm._s(sidebarItem.tag))]
                                        )
                                      : _vm._e()
                                  ],
                                  1
                                )
                              : [
                                  _c("vx-sidebar-group", {
                                    key: "group-" + index,
                                    ref: "sidebarGrp",
                                    refInFor: true,
                                    attrs: {
                                      openHover: _vm.openGroupHover,
                                      group: sidebarItem,
                                      groupIndex: index,
                                      open: _vm.isGroupActive(sidebarItem)
                                    }
                                  })
                                ]
                          ]
                        : _vm._e()
                    ]
                  })
                ],
                2
              )
            ],
            1
          )
        ]
      ),
      _vm._v(" "),
      !_vm.isSidebarActive
        ? _c("div", {
            directives: [
              {
                name: "hammer",
                rawName: "v-hammer:swipe.right",
                value: _vm.onSwipeRightSidebarSwipeArea,
                expression: "onSwipeRightSidebarSwipeArea",
                arg: "swipe",
                modifiers: { right: true }
              }
            ],
            staticClass: "sidebar-swipe-area",
            attrs: { id: "sidebar-swipe-area" }
          })
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/vx-sidebar/VxSidebarGroup.vue?vue&type=template&id=72f1234e&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/components/vx-sidebar/VxSidebarGroup.vue?vue&type=template&id=72f1234e& ***!
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
  return _c(
    "div",
    {
      staticClass: "vs-sidebar-group",
      class: [
        { "vs-sidebar-group-open": _vm.openItems },
        { "vs-sidebar-group-active": _vm.open },
        { "disabled-item pointer-events-none": _vm.group.isDisabled }
      ],
      on: { mouseover: _vm.mouseover, mouseout: _vm.mouseout }
    },
    [
      _c(
        "div",
        { staticClass: "group-header w-full", on: { click: _vm.clickGroup } },
        [
          _c(
            "span",
            { staticClass: "flex items-center w-full" },
            [
              _vm.group.icon || this.groupIndex > Math.floor(this.groupIndex)
                ? _c("feather-icon", {
                    attrs: {
                      icon: _vm.group.icon || "CircleIcon",
                      svgClasses: { "w-3 h-3": this.groupIndex % 1 != 0 }
                    }
                  })
                : _vm._e(),
              _vm._v(" "),
              _c(
                "span",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: !_vm.sidebarItemsMin,
                      expression: "!sidebarItemsMin"
                    }
                  ],
                  staticClass: "truncate mr-3 select-none"
                },
                [_vm._v(_vm._s(_vm.$t(_vm.group.i18n) || _vm.group.name))]
              ),
              _vm._v(" "),
              _vm.group.tag && !_vm.sidebarItemsMin
                ? _c(
                    "vs-chip",
                    {
                      staticClass: "ml-auto mr-4",
                      attrs: { color: _vm.group.tagColor }
                    },
                    [_vm._v(_vm._s(_vm.group.tag))]
                  )
                : _vm._e()
            ],
            1
          ),
          _vm._v(" "),
          _c("feather-icon", {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: !_vm.sidebarItemsMin,
                expression: "!sidebarItemsMin"
              }
            ],
            class: [{ rotate90: _vm.openItems }, "feather-grp-header-arrow"],
            attrs: { icon: "ChevronRightIcon", "svg-classes": "w-4 h-4" }
          }),
          _vm._v(" "),
          _c("span", { staticClass: "vs-sidebar--tooltip" }, [
            _vm._v(_vm._s(_vm.$t(_vm.group.i18n) || _vm.group.name))
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "ul",
        {
          ref: "items",
          staticClass: "vs-sidebar-group-items",
          style: _vm.styleItems
        },
        _vm._l(_vm.group.submenu, function(groupItem, index) {
          return _c(
            "li",
            { key: index },
            [
              groupItem.submenu
                ? _c("vx-sidebar-group", {
                    attrs: {
                      group: groupItem,
                      groupIndex: Number(_vm.groupIndex + "." + index),
                      open: _vm.isGroupActive(groupItem),
                      openHover: _vm.openHover
                    }
                  })
                : _c(
                    "vx-sidebar-item",
                    {
                      attrs: {
                        index: _vm.groupIndex + "." + index,
                        to: groupItem.url,
                        icon: _vm.itemIcon(_vm.groupIndex + "." + index),
                        "icon-small": "",
                        target: groupItem.target
                      }
                    },
                    [
                      _c("span", { staticClass: "truncate" }, [
                        _vm._v(_vm._s(_vm.$t(groupItem.i18n) || groupItem.name))
                      ]),
                      _vm._v(" "),
                      groupItem.tag
                        ? _c(
                            "vs-chip",
                            {
                              staticClass: "ml-auto",
                              attrs: { color: groupItem.tagColor }
                            },
                            [_vm._v(_vm._s(groupItem.tag))]
                          )
                        : _vm._e()
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
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/vx-sidebar/VxSidebarItem.vue?vue&type=template&id=16eca1ae&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/components/vx-sidebar/VxSidebarItem.vue?vue&type=template&id=16eca1ae& ***!
  \***************************************************************************************************************************************************************************************************************************************/
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
  return _vm.canSee
    ? _c(
        "div",
        {
          staticClass: "vs-sidebar--item",
          class: [
            { "vs-sidebar-item-active": _vm.activeLink },
            { "disabled-item pointer-events-none": _vm.isDisabled }
          ]
        },
        [
          _vm.to
            ? _c(
                "router-link",
                {
                  class: [{ "router-link-active": _vm.activeLink }],
                  attrs: { to: _vm.to, target: _vm.target, exact: "" }
                },
                [
                  !_vm.featherIcon
                    ? _c("vs-icon", {
                        attrs: { "icon-pack": _vm.iconPack, icon: _vm.icon }
                      })
                    : _c("feather-icon", {
                        class: { "w-3 h-3": _vm.iconSmall },
                        attrs: { icon: _vm.icon }
                      }),
                  _vm._v(" "),
                  _vm._t("default")
                ],
                2
              )
            : _c(
                "a",
                { attrs: { target: _vm.target, href: _vm.href } },
                [
                  !_vm.featherIcon
                    ? _c("vs-icon", {
                        attrs: { "icon-pack": _vm.iconPack, icon: _vm.icon }
                      })
                    : _c("feather-icon", {
                        class: { "w-3 h-3": _vm.iconSmall },
                        attrs: { icon: _vm.icon }
                      }),
                  _vm._v(" "),
                  _vm._t("default")
                ],
                2
              )
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/main/Main.vue?vue&type=template&id=22fa5a70&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/main/Main.vue?vue&type=template&id=22fa5a70& ***!
  \*************************************************************************************************************************************************************************************************************/
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
      staticClass: "layout--main",
      class: [
        _vm.navbarClasses,
        _vm.footerClasses,
        { "app-page": _vm.isAppPage }
      ]
    },
    [
      !_vm.disableThemeTour
        ? _c("vx-tour", { attrs: { steps: _vm.steps } })
        : _vm._e(),
      _vm._v(" "),
      !_vm.disableCustomizer
        ? _c("the-customizer", {
            attrs: {
              navbarType: _vm.navbarType,
              navbarColor: _vm.navbarColor,
              footerType: _vm.footerType,
              routerTransition: _vm.routerTransition,
              hideScrollToTop: _vm.hideScrollToTop
            },
            on: {
              updateNavbar: _vm.updateNavbar,
              updateNavbarColor: _vm.updateNavbarColor,
              updateFooter: _vm.updateFooter,
              updateRouterTransition: _vm.updateRouterTransition,
              toggleHideScrollToTop: _vm.toggleHideScrollToTop
            }
          })
        : _vm._e(),
      _vm._v(" "),
      _c("vx-sidebar", {
        attrs: {
          sidebarItems: _vm.sidebarItems,
          logo: __webpack_require__(/*! @/assets/images/logo/logo.png */ "./resources/js/src/assets/images/logo/logo.png"),
          title: "Vuesax",
          parent: ".layout--main"
        }
      }),
      _vm._v(" "),
      _c(
        "div",
        {
          class: [_vm.contentAreaClass, { "show-overlay": _vm.bodyOverlay }],
          attrs: { id: "content-area" }
        },
        [
          _c("div", { attrs: { id: "content-overlay" } }),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "content-wrapper" },
            [
              _c("the-navbar", {
                class: [
                  { "text-white": _vm.isNavbarDark && !_vm.isThemeDark },
                  { "text-base": !_vm.isNavbarDark && _vm.isThemeDark }
                ],
                attrs: { navbarColor: _vm.navbarColor }
              }),
              _vm._v(" "),
              _c("div", { staticClass: "router-view" }, [
                _c(
                  "div",
                  {
                    staticClass: "router-content",
                    class: { "mt-0": _vm.navbarType == "hidden" }
                  },
                  [
                    _c(
                      "transition",
                      { attrs: { name: _vm.routerTransition } },
                      [
                        _vm.$route.meta.breadcrumb || _vm.$route.meta.pageTitle
                          ? _c(
                              "div",
                              {
                                staticClass:
                                  "router-header flex flex-wrap items-center mb-6"
                              },
                              [
                                _c(
                                  "div",
                                  {
                                    staticClass: "content-area__heading",
                                    class: {
                                      "pr-4 border-0 md:border-r border-t-0 border-b-0 border-l-0 border-solid border-grey-light":
                                        _vm.$route.meta.breadcrumb
                                    }
                                  },
                                  [
                                    _c("h2", { staticClass: "mb-1" }, [
                                      _vm._v(_vm._s(_vm.routeTitle))
                                    ])
                                  ]
                                ),
                                _vm._v(" "),
                                _vm.$route.meta.breadcrumb
                                  ? _c("vx-breadcrumb", {
                                      staticClass: "ml-4 md:block hidden"
                                    })
                                  : _vm._e(),
                                _vm._v(" "),
                                _c(
                                  "vs-dropdown",
                                  {
                                    staticClass:
                                      "ml-auto md:block hidden cursor-pointer",
                                    attrs: { "vs-trigger-click": "" }
                                  },
                                  [
                                    _c("vs-button", {
                                      attrs: {
                                        radius: "",
                                        icon: "icon-settings",
                                        "icon-pack": "feather"
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c(
                                      "vs-dropdown-menu",
                                      { staticClass: "w-32" },
                                      [
                                        _c("vs-dropdown-item", [
                                          _c(
                                            "div",
                                            {
                                              staticClass: "flex items-center",
                                              on: {
                                                click: function($event) {
                                                  return _vm.$router.push(
                                                    "/pages/profile"
                                                  )
                                                }
                                              }
                                            },
                                            [
                                              _c("feather-icon", {
                                                staticClass:
                                                  "inline-block mr-2",
                                                attrs: {
                                                  icon: "UserIcon",
                                                  svgClasses: "w-4 h-4"
                                                }
                                              }),
                                              _vm._v(" "),
                                              _c("span", [_vm._v("Profile")])
                                            ],
                                            1
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("vs-dropdown-item", [
                                          _c(
                                            "div",
                                            {
                                              staticClass: "flex items-center",
                                              on: {
                                                click: function($event) {
                                                  return _vm.$router.push(
                                                    "/apps/todo"
                                                  )
                                                }
                                              }
                                            },
                                            [
                                              _c("feather-icon", {
                                                staticClass:
                                                  "inline-block mr-2",
                                                attrs: {
                                                  icon: "CheckSquareIcon",
                                                  svgClasses: "w-4 h-4"
                                                }
                                              }),
                                              _vm._v(" "),
                                              _c("span", [_vm._v("Tasks")])
                                            ],
                                            1
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("vs-dropdown-item", [
                                          _c(
                                            "div",
                                            {
                                              staticClass: "flex items-center",
                                              on: {
                                                click: function($event) {
                                                  return _vm.$router.push(
                                                    "/apps/email"
                                                  )
                                                }
                                              }
                                            },
                                            [
                                              _c("feather-icon", {
                                                staticClass:
                                                  "inline-block mr-2",
                                                attrs: {
                                                  icon: "MailIcon",
                                                  svgClasses: "w-4 h-4"
                                                }
                                              }),
                                              _vm._v(" "),
                                              _c("span", [_vm._v("Inbox")])
                                            ],
                                            1
                                          )
                                        ])
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                )
                              ],
                              1
                            )
                          : _vm._e()
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "content-area__content" },
                      [
                        !_vm.hideScrollToTop
                          ? _c(
                              "back-to-top",
                              { attrs: { bottom: "5%", visibleoffset: "500" } },
                              [
                                _c("vs-button", {
                                  staticClass: "shadow-lg",
                                  attrs: {
                                    "icon-pack": "feather",
                                    icon: "icon-arrow-up"
                                  }
                                })
                              ],
                              1
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _c(
                          "transition",
                          {
                            attrs: {
                              name: _vm.routerTransition,
                              mode: "out-in"
                            }
                          },
                          [
                            _c("router-view", {
                              on: { changeRouteTitle: _vm.changeRouteTitle }
                            })
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ],
                  1
                )
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c("the-footer")
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

/***/ "./resources/js/src/assets/images/flags sync recursive ^\\.\\/.*\\.png$":
/*!*****************************************************************!*\
  !*** ./resources/js/src/assets/images/flags sync ^\.\/.*\.png$ ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./de.png": "./resources/js/src/assets/images/flags/de.png",
	"./en.png": "./resources/js/src/assets/images/flags/en.png",
	"./fr.png": "./resources/js/src/assets/images/flags/fr.png",
	"./pt.png": "./resources/js/src/assets/images/flags/pt.png"
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
webpackContext.id = "./resources/js/src/assets/images/flags sync recursive ^\\.\\/.*\\.png$";

/***/ }),

/***/ "./resources/js/src/assets/images/flags/de.png":
/*!*****************************************************!*\
  !*** ./resources/js/src/assets/images/flags/de.png ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/de.png?5d9561246523cf6183928756fd605e25";

/***/ }),

/***/ "./resources/js/src/assets/images/flags/en.png":
/*!*****************************************************!*\
  !*** ./resources/js/src/assets/images/flags/en.png ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/en.png?83b065848d14d33c0d10a13e01862f34";

/***/ }),

/***/ "./resources/js/src/assets/images/flags/fr.png":
/*!*****************************************************!*\
  !*** ./resources/js/src/assets/images/flags/fr.png ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/fr.png?134bee9f9d794dc5c0922d1b9bdbb710";

/***/ }),

/***/ "./resources/js/src/assets/images/flags/pt.png":
/*!*****************************************************!*\
  !*** ./resources/js/src/assets/images/flags/pt.png ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/pt.png?eba93d33545c78cc67915d9be8323661";

/***/ }),

/***/ "./resources/js/src/assets/images/logo/logo.png":
/*!******************************************************!*\
  !*** ./resources/js/src/assets/images/logo/logo.png ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/logo.png?a5d6fa57427643c6ebe37859086c9a63";

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

/***/ "./resources/js/src/components/vx-auto-suggest/VxAutoSuggest.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/src/components/vx-auto-suggest/VxAutoSuggest.vue ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VxAutoSuggest_vue_vue_type_template_id_3b23de25___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VxAutoSuggest.vue?vue&type=template&id=3b23de25& */ "./resources/js/src/components/vx-auto-suggest/VxAutoSuggest.vue?vue&type=template&id=3b23de25&");
/* harmony import */ var _VxAutoSuggest_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VxAutoSuggest.vue?vue&type=script&lang=js& */ "./resources/js/src/components/vx-auto-suggest/VxAutoSuggest.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _VxAutoSuggest_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VxAutoSuggest.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/components/vx-auto-suggest/VxAutoSuggest.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _VxAutoSuggest_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _VxAutoSuggest_vue_vue_type_template_id_3b23de25___WEBPACK_IMPORTED_MODULE_0__["render"],
  _VxAutoSuggest_vue_vue_type_template_id_3b23de25___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/components/vx-auto-suggest/VxAutoSuggest.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/components/vx-auto-suggest/VxAutoSuggest.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/js/src/components/vx-auto-suggest/VxAutoSuggest.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VxAutoSuggest_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./VxAutoSuggest.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/vx-auto-suggest/VxAutoSuggest.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VxAutoSuggest_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/components/vx-auto-suggest/VxAutoSuggest.vue?vue&type=style&index=0&lang=scss&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/src/components/vx-auto-suggest/VxAutoSuggest.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VxAutoSuggest_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/sass-loader/lib/loader.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./VxAutoSuggest.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/vx-auto-suggest/VxAutoSuggest.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VxAutoSuggest_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VxAutoSuggest_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VxAutoSuggest_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VxAutoSuggest_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VxAutoSuggest_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/components/vx-auto-suggest/VxAutoSuggest.vue?vue&type=template&id=3b23de25&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/src/components/vx-auto-suggest/VxAutoSuggest.vue?vue&type=template&id=3b23de25& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VxAutoSuggest_vue_vue_type_template_id_3b23de25___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./VxAutoSuggest.vue?vue&type=template&id=3b23de25& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/vx-auto-suggest/VxAutoSuggest.vue?vue&type=template&id=3b23de25&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VxAutoSuggest_vue_vue_type_template_id_3b23de25___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VxAutoSuggest_vue_vue_type_template_id_3b23de25___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/layouts/components/TheFooter.vue":
/*!***********************************************************!*\
  !*** ./resources/js/src/layouts/components/TheFooter.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TheFooter_vue_vue_type_template_id_287afc22___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TheFooter.vue?vue&type=template&id=287afc22& */ "./resources/js/src/layouts/components/TheFooter.vue?vue&type=template&id=287afc22&");
/* harmony import */ var _TheFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TheFooter.vue?vue&type=script&lang=js& */ "./resources/js/src/layouts/components/TheFooter.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TheFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TheFooter_vue_vue_type_template_id_287afc22___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TheFooter_vue_vue_type_template_id_287afc22___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/layouts/components/TheFooter.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/layouts/components/TheFooter.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/src/layouts/components/TheFooter.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TheFooter.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/TheFooter.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/layouts/components/TheFooter.vue?vue&type=template&id=287afc22&":
/*!******************************************************************************************!*\
  !*** ./resources/js/src/layouts/components/TheFooter.vue?vue&type=template&id=287afc22& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheFooter_vue_vue_type_template_id_287afc22___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TheFooter.vue?vue&type=template&id=287afc22& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/TheFooter.vue?vue&type=template&id=287afc22&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheFooter_vue_vue_type_template_id_287afc22___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheFooter_vue_vue_type_template_id_287afc22___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/layouts/components/TheNavbar.vue":
/*!***********************************************************!*\
  !*** ./resources/js/src/layouts/components/TheNavbar.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TheNavbar_vue_vue_type_template_id_71a5bfd2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TheNavbar.vue?vue&type=template&id=71a5bfd2& */ "./resources/js/src/layouts/components/TheNavbar.vue?vue&type=template&id=71a5bfd2&");
/* harmony import */ var _TheNavbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TheNavbar.vue?vue&type=script&lang=js& */ "./resources/js/src/layouts/components/TheNavbar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TheNavbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TheNavbar_vue_vue_type_template_id_71a5bfd2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TheNavbar_vue_vue_type_template_id_71a5bfd2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/layouts/components/TheNavbar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/layouts/components/TheNavbar.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/src/layouts/components/TheNavbar.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheNavbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TheNavbar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/TheNavbar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheNavbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/layouts/components/TheNavbar.vue?vue&type=template&id=71a5bfd2&":
/*!******************************************************************************************!*\
  !*** ./resources/js/src/layouts/components/TheNavbar.vue?vue&type=template&id=71a5bfd2& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheNavbar_vue_vue_type_template_id_71a5bfd2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TheNavbar.vue?vue&type=template&id=71a5bfd2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/TheNavbar.vue?vue&type=template&id=71a5bfd2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheNavbar_vue_vue_type_template_id_71a5bfd2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheNavbar_vue_vue_type_template_id_71a5bfd2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/layouts/components/customizer/TheCustomizer.vue":
/*!**************************************************************************!*\
  !*** ./resources/js/src/layouts/components/customizer/TheCustomizer.vue ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TheCustomizer_vue_vue_type_template_id_547b72da___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TheCustomizer.vue?vue&type=template&id=547b72da& */ "./resources/js/src/layouts/components/customizer/TheCustomizer.vue?vue&type=template&id=547b72da&");
/* harmony import */ var _TheCustomizer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TheCustomizer.vue?vue&type=script&lang=js& */ "./resources/js/src/layouts/components/customizer/TheCustomizer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _TheCustomizer_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TheCustomizer.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/layouts/components/customizer/TheCustomizer.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _TheCustomizer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TheCustomizer_vue_vue_type_template_id_547b72da___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TheCustomizer_vue_vue_type_template_id_547b72da___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/layouts/components/customizer/TheCustomizer.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/layouts/components/customizer/TheCustomizer.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/src/layouts/components/customizer/TheCustomizer.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheCustomizer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TheCustomizer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/customizer/TheCustomizer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheCustomizer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/layouts/components/customizer/TheCustomizer.vue?vue&type=style&index=0&lang=scss&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/src/layouts/components/customizer/TheCustomizer.vue?vue&type=style&index=0&lang=scss& ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TheCustomizer_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../node_modules/sass-loader/lib/loader.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TheCustomizer.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/customizer/TheCustomizer.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TheCustomizer_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TheCustomizer_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TheCustomizer_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TheCustomizer_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TheCustomizer_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/layouts/components/customizer/TheCustomizer.vue?vue&type=template&id=547b72da&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/src/layouts/components/customizer/TheCustomizer.vue?vue&type=template&id=547b72da& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheCustomizer_vue_vue_type_template_id_547b72da___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TheCustomizer.vue?vue&type=template&id=547b72da& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/customizer/TheCustomizer.vue?vue&type=template&id=547b72da&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheCustomizer_vue_vue_type_template_id_547b72da___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheCustomizer_vue_vue_type_template_id_547b72da___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/layouts/components/vx-sidebar/VxSidebar.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/src/layouts/components/vx-sidebar/VxSidebar.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VxSidebar_vue_vue_type_template_id_1f949f14___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VxSidebar.vue?vue&type=template&id=1f949f14& */ "./resources/js/src/layouts/components/vx-sidebar/VxSidebar.vue?vue&type=template&id=1f949f14&");
/* harmony import */ var _VxSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VxSidebar.vue?vue&type=script&lang=js& */ "./resources/js/src/layouts/components/vx-sidebar/VxSidebar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _VxSidebar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VxSidebar.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/layouts/components/vx-sidebar/VxSidebar.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _VxSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _VxSidebar_vue_vue_type_template_id_1f949f14___WEBPACK_IMPORTED_MODULE_0__["render"],
  _VxSidebar_vue_vue_type_template_id_1f949f14___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/layouts/components/vx-sidebar/VxSidebar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/layouts/components/vx-sidebar/VxSidebar.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/src/layouts/components/vx-sidebar/VxSidebar.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VxSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./VxSidebar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/vx-sidebar/VxSidebar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VxSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/layouts/components/vx-sidebar/VxSidebar.vue?vue&type=style&index=0&lang=scss&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/src/layouts/components/vx-sidebar/VxSidebar.vue?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VxSidebar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../node_modules/sass-loader/lib/loader.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./VxSidebar.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/vx-sidebar/VxSidebar.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VxSidebar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VxSidebar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VxSidebar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VxSidebar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VxSidebar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/layouts/components/vx-sidebar/VxSidebar.vue?vue&type=template&id=1f949f14&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/src/layouts/components/vx-sidebar/VxSidebar.vue?vue&type=template&id=1f949f14& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VxSidebar_vue_vue_type_template_id_1f949f14___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./VxSidebar.vue?vue&type=template&id=1f949f14& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/vx-sidebar/VxSidebar.vue?vue&type=template&id=1f949f14&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VxSidebar_vue_vue_type_template_id_1f949f14___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VxSidebar_vue_vue_type_template_id_1f949f14___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/layouts/components/vx-sidebar/VxSidebarGroup.vue":
/*!***************************************************************************!*\
  !*** ./resources/js/src/layouts/components/vx-sidebar/VxSidebarGroup.vue ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VxSidebarGroup_vue_vue_type_template_id_72f1234e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VxSidebarGroup.vue?vue&type=template&id=72f1234e& */ "./resources/js/src/layouts/components/vx-sidebar/VxSidebarGroup.vue?vue&type=template&id=72f1234e&");
/* harmony import */ var _VxSidebarGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VxSidebarGroup.vue?vue&type=script&lang=js& */ "./resources/js/src/layouts/components/vx-sidebar/VxSidebarGroup.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _VxSidebarGroup_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VxSidebarGroup.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/layouts/components/vx-sidebar/VxSidebarGroup.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _VxSidebarGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _VxSidebarGroup_vue_vue_type_template_id_72f1234e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _VxSidebarGroup_vue_vue_type_template_id_72f1234e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/layouts/components/vx-sidebar/VxSidebarGroup.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/layouts/components/vx-sidebar/VxSidebarGroup.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/src/layouts/components/vx-sidebar/VxSidebarGroup.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VxSidebarGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./VxSidebarGroup.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/vx-sidebar/VxSidebarGroup.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VxSidebarGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/layouts/components/vx-sidebar/VxSidebarGroup.vue?vue&type=style&index=0&lang=scss&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/src/layouts/components/vx-sidebar/VxSidebarGroup.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VxSidebarGroup_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../node_modules/sass-loader/lib/loader.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./VxSidebarGroup.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/vx-sidebar/VxSidebarGroup.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VxSidebarGroup_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VxSidebarGroup_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VxSidebarGroup_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VxSidebarGroup_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VxSidebarGroup_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/layouts/components/vx-sidebar/VxSidebarGroup.vue?vue&type=template&id=72f1234e&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/src/layouts/components/vx-sidebar/VxSidebarGroup.vue?vue&type=template&id=72f1234e& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VxSidebarGroup_vue_vue_type_template_id_72f1234e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./VxSidebarGroup.vue?vue&type=template&id=72f1234e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/vx-sidebar/VxSidebarGroup.vue?vue&type=template&id=72f1234e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VxSidebarGroup_vue_vue_type_template_id_72f1234e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VxSidebarGroup_vue_vue_type_template_id_72f1234e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/layouts/components/vx-sidebar/VxSidebarItem.vue":
/*!**************************************************************************!*\
  !*** ./resources/js/src/layouts/components/vx-sidebar/VxSidebarItem.vue ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VxSidebarItem_vue_vue_type_template_id_16eca1ae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VxSidebarItem.vue?vue&type=template&id=16eca1ae& */ "./resources/js/src/layouts/components/vx-sidebar/VxSidebarItem.vue?vue&type=template&id=16eca1ae&");
/* harmony import */ var _VxSidebarItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VxSidebarItem.vue?vue&type=script&lang=js& */ "./resources/js/src/layouts/components/vx-sidebar/VxSidebarItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _VxSidebarItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _VxSidebarItem_vue_vue_type_template_id_16eca1ae___WEBPACK_IMPORTED_MODULE_0__["render"],
  _VxSidebarItem_vue_vue_type_template_id_16eca1ae___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/layouts/components/vx-sidebar/VxSidebarItem.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/layouts/components/vx-sidebar/VxSidebarItem.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/src/layouts/components/vx-sidebar/VxSidebarItem.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VxSidebarItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./VxSidebarItem.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/vx-sidebar/VxSidebarItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VxSidebarItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/layouts/components/vx-sidebar/VxSidebarItem.vue?vue&type=template&id=16eca1ae&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/src/layouts/components/vx-sidebar/VxSidebarItem.vue?vue&type=template&id=16eca1ae& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VxSidebarItem_vue_vue_type_template_id_16eca1ae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./VxSidebarItem.vue?vue&type=template&id=16eca1ae& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/vx-sidebar/VxSidebarItem.vue?vue&type=template&id=16eca1ae&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VxSidebarItem_vue_vue_type_template_id_16eca1ae___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VxSidebarItem_vue_vue_type_template_id_16eca1ae___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/layouts/components/vx-sidebar/sidebarItems.js":
/*!************************************************************************!*\
  !*** ./resources/js/src/layouts/components/vx-sidebar/sidebarItems.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*=========================================================================================
  File Name: sidebarItems.js
  Description: Sidebar Items list. Add / Remove menu items from here.
  Strucutre:
          url     => router path
          name    => name to display in sidebar
          slug    => router path name
          icon    => Feather Icon component/icon name
          tag     => text to display on badge
          tagColor  => class to apply on badge element
          i18n    => Internationalization
          submenu   => submenu of current item (current item will become dropdown )
                NOTE: Submenu don't have any icon(you can add icon if u want to display)
          isDisabled  => disable sidebar item/group
  ----------------------------------------------------------------------------------------
  Item Name: Vuesax Admin - VueJS Dashboard Admin Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/
/* harmony default export */ __webpack_exports__["default"] = ([{
  url: null,
  name: "Dashboard",
  slug: "dashboard",
  tag: "2",
  tagColor: "warning",
  icon: "HomeIcon",
  i18n: "Dashboard",
  submenu: [{
    url: '/dashboard/analytics',
    name: "Analytics",
    slug: "dashboardAnalytics",
    i18n: "Analytics"
  }, {
    url: '/dashboard/ecommerce',
    name: "eCommerce",
    slug: "dashboardECommerce",
    i18n: "eCommerce"
  }]
}, {
  header: "Apps",
  i18n: "Apps"
}, {
  url: "/apps/email",
  name: "Email",
  slug: "email",
  icon: "MailIcon",
  i18n: "Email"
}, {
  url: "/apps/chat",
  name: "Chat",
  slug: "chat",
  icon: "MessageSquareIcon",
  i18n: "Chat"
}, {
  url: "/apps/todo",
  name: "Todo",
  slug: "todo",
  icon: "CheckSquareIcon",
  i18n: "Todo"
}, {
  url: "/apps/calendar/vue-simple-calendar",
  // url: null,
  name: "Calendar",
  slug: "calendar",
  icon: "CalendarIcon",
  tag: "new",
  tagColor: "success",
  i18n: "Calendar" // submenu: [
  //   {
  //     url: '/apps/calendar/vue-simple-calendar',
  //     name: "Simple Calendar",
  //     slug: "calendarSimpleCalendar",
  //     i18n: "SimpleCalendar",
  //   },
  //   {
  //     url: '/apps/calendar/vue-fullcalendar',
  //     name: "Full Calendar",
  //     slug: "calendarFullCalendar",
  //     i18n: "FullCalendar",
  //   }
  // ]

}, {
  url: null,
  name: "eCommerce",
  slug: "eCommerce",
  icon: "ShoppingCartIcon",
  i18n: "eCommerce",
  submenu: [{
    url: '/apps/eCommerce/shop',
    name: "Shop",
    slug: "eCommerceShop",
    i18n: "Shop"
  }, {
    url: '/apps/eCommerce/wish-list',
    name: "Wish List",
    slug: "eCommerceWishList",
    i18n: "WishList"
  }, {
    url: '/apps/eCommerce/checkout',
    name: "Checkout",
    slug: "eCommerceCheckout",
    i18n: "Checkout"
  }]
}, {
  header: "UI Elements",
  i18n: "UIElements"
}, {
  url: null,
  name: "Data List",
  slug: "dataList",
  tag: "new",
  tagColor: "primary",
  icon: "ListIcon",
  i18n: "DataList",
  submenu: [{
    url: '/ui-elements/data-list/list-view',
    name: "List View",
    slug: "dataListListView",
    i18n: "ListView"
  }, {
    url: '/ui-elements/data-list/thumb-view',
    name: "Thumb View",
    slug: "dataListThumbView",
    i18n: "ThumbView"
  }]
}, {
  url: null,
  name: "Grid",
  slug: "grid",
  icon: "LayoutIcon",
  i18n: "Grid",
  submenu: [{
    url: '/ui-elements/grid/vuesax',
    name: "Vuesax",
    slug: "gridVuesax",
    i18n: "Vuesax"
  }, {
    url: '/ui-elements/grid/tailwind',
    name: "Tailwind",
    slug: "gridTailwind",
    i18n: "Tailwind"
  }]
}, {
  url: "/ui-elements/colors",
  name: "Colors",
  slug: "colors",
  icon: "DropletIcon",
  i18n: "Colors"
}, {
  url: null,
  name: "Card",
  slug: "card",
  icon: "CreditCardIcon",
  i18n: "Card",
  submenu: [{
    url: '/ui-elements/card/basic',
    name: "Basic",
    slug: "basicCards",
    i18n: "Basic"
  }, {
    url: '/ui-elements/card/statistics',
    name: "Statistics",
    slug: "statisticsCards",
    i18n: "Statistics"
  }, {
    url: '/ui-elements/card/analytics',
    name: "Analytics",
    slug: "analyticsCards",
    i18n: "Analytics"
  }, {
    url: '/ui-elements/card/card-actions',
    name: "Card Actions",
    slug: "cardActions",
    i18n: "CardActions"
  }, {
    url: '/ui-elements/card/card-colors',
    name: "Card Colors",
    slug: "cardColors",
    i18n: "CardColors"
  }]
}, {
  url: null,
  name: "Components",
  icon: "ArchiveIcon",
  slug: 'components',
  i18n: "Components",
  submenu: [{
    url: '/components/alert',
    name: "Alert",
    slug: "componentAlert",
    i18n: "Alert"
  }, {
    url: '/components/avatar',
    name: "Avatar",
    slug: "componentAvatar",
    i18n: "Avatar"
  }, {
    url: '/components/breadcrumb',
    name: "Breadcrumb",
    slug: "componentBreadcrumb",
    i18n: "Breadcrumb"
  }, {
    url: '/components/button',
    name: "Button",
    slug: "componentButton",
    i18n: "Button"
  }, {
    url: '/components/button-group',
    name: "Button Group",
    slug: "componentButtonGroup",
    i18n: "ButtonGroup"
  }, {
    url: '/components/chip',
    name: "Chip",
    slug: "componentChip",
    i18n: "Chip"
  }, {
    url: '/components/collapse',
    name: "Collapse",
    slug: "componentCollapse",
    i18n: "Collapse"
  }, {
    url: '/components/dialogs',
    name: "Dialogs",
    slug: "componentDialog",
    i18n: "Dialogs"
  }, {
    url: '/components/divider',
    name: "Divider",
    slug: "componentDivider",
    i18n: "Divider"
  }, {
    url: '/components/dropdown',
    name: "DropDown",
    slug: "componentDropDown",
    i18n: "DropDown"
  }, {
    url: '/components/list',
    name: "List",
    slug: "componentList",
    i18n: "List"
  }, {
    url: '/components/loading',
    name: "Loading",
    slug: "componentLoading",
    i18n: "Loading"
  }, {
    url: '/components/navbar',
    name: "Navbar",
    slug: "componentNavbar",
    i18n: "Navbar"
  }, {
    url: '/components/notifications',
    name: "Notifications",
    slug: "componentNotifications",
    i18n: "Notifications"
  }, {
    url: '/components/pagination',
    name: "Pagination",
    slug: "componentPagination",
    i18n: "Pagination"
  }, {
    url: '/components/popup',
    name: "Popup",
    slug: "componentPopup",
    i18n: "Popup"
  }, {
    url: '/components/progress',
    name: "Progress",
    slug: "componentProgress",
    i18n: "Progress"
  }, {
    url: '/components/sidebar',
    name: "Sidebar",
    slug: "componentSidebar",
    i18n: "Sidebar"
  }, {
    url: '/components/slider',
    name: "Slider",
    slug: "componentSlider",
    i18n: "Slider"
  }, {
    url: '/components/tabs',
    name: "Tabs",
    slug: "componentTabs",
    i18n: "Tabs"
  }, {
    url: '/components/tooltip',
    name: "Tooltip",
    slug: "componentTooltip",
    i18n: "Tooltip"
  }, {
    url: '/components/upload',
    name: "Upload",
    slug: "componentUpload",
    i18n: "Upload"
  }]
}, {
  header: "Forms & Table",
  i18n: "FormsAndTable"
}, {
  url: null,
  name: "Form Elements",
  icon: "CopyIcon",
  i18n: "FormElements",
  submenu: [// {
  //  url: '/forms/form-elements/select',
  //  name: "Select",
  //  slug: "formElementSelect",
  //  i18n: "Select",
  // },
  {
    url: '/forms/form-elements/switch',
    name: "Switch",
    slug: "formElementSwitch",
    i18n: "Switch"
  }, {
    url: '/forms/form-elements/checkbox',
    name: "Checkbox",
    slug: "formElementCheckbox",
    i18n: "Checkbox"
  }, {
    url: '/forms/form-elements/radio',
    name: "Radio",
    slug: "formElementRadio",
    i18n: "Radio"
  }, {
    url: '/forms/form-elements/input',
    name: "Input",
    slug: "formElementInput",
    i18n: "Input"
  }, {
    url: '/forms/form-elements/number-input',
    name: "Number Input",
    slug: "formElementNumberInput",
    i18n: "NumberInput"
  }, {
    url: '/forms/form-elements/textarea',
    name: "Textarea",
    slug: "formElementTextarea",
    i18n: "Textarea"
  }]
}, {
  url: '/forms/form-layouts',
  name: "Form Layouts",
  icon: "PackageIcon",
  slug: "formsFormLayouts",
  i18n: "FormLayouts"
}, {
  url: '/forms/form-wizard',
  name: "Form Wizard",
  icon: "PackageIcon",
  slug: "extraComponentFormWizard",
  i18n: "FormWizard"
}, {
  url: '/forms/form-validation',
  name: "Form Validation",
  icon: "CheckCircleIcon",
  slug: "extraComponentFormValidation",
  i18n: "FormValidation"
}, {
  url: '/forms/form-input-group',
  name: "Form Input Group",
  icon: "MenuIcon",
  slug: "extraComponentFormInputGroup",
  i18n: "FormInputGroup"
}, {
  url: "/ui-elements/table",
  name: "Table",
  slug: "table",
  icon: "GridIcon",
  i18n: "Table"
}, {
  url: "/ui-elements/ag-grid-table",
  name: "agGrid Table",
  slug: "ag-grid-table",
  tag: "new",
  tagColor: "primary",
  icon: "GridIcon",
  i18n: "agGridTable"
}, {
  header: "Pages",
  i18n: "Pages"
}, {
  url: '/pages/profile',
  name: "Profile",
  icon: "UserIcon",
  i18n: "Profile"
}, {
  url: '/pages/faq',
  name: "FAQ",
  icon: "HelpCircleIcon",
  i18n: "FAQ"
}, {
  url: '/pages/knowledge-base',
  name: "Knowledge Base",
  icon: "InfoIcon",
  i18n: "KnowledgeBase"
}, {
  url: '/pages/search',
  name: "Search",
  icon: "SearchIcon",
  i18n: "Search"
}, {
  url: '/pages/invoice',
  name: "Invoice",
  icon: "InfoIcon",
  i18n: "Invoice"
}, {
  url: null,
  name: "Authentication",
  icon: "PieChartIcon",
  i18n: "Authentication",
  submenu: [{
    url: '/pages/login',
    name: "Login",
    slug: "pagesLogin",
    i18n: "Login",
    target: '_blank'
  }, {
    url: '/pages/register',
    name: "Register",
    slug: "pagesRegister",
    i18n: "Register",
    target: '_blank'
  }, {
    url: '/pages/forgot-password',
    name: "Forgot Password",
    slug: "pagesForgotPassword",
    i18n: "ForgotPassword",
    target: '_blank'
  }, {
    url: '/pages/reset-password',
    name: "Reset Password",
    slug: "pagesResetPassword",
    i18n: "ResetPassword",
    target: '_blank'
  }, {
    url: '/pages/lock-screen',
    name: "Lock Screen",
    slug: "pagesLockScreen",
    i18n: "LockScreen",
    target: '_blank'
  }]
}, {
  url: null,
  name: "Miscellaneous",
  icon: "CoffeeIcon",
  i18n: "Miscellaneous",
  submenu: [{
    url: '/pages/not-authorized',
    name: "Not Authorized",
    slug: "pageNotAuthorized",
    icon: "XCircleIcon",
    i18n: "NotAuthorized",
    target: '_blank'
  }, {
    url: '/pages/maintenance',
    name: "Maintenance",
    slug: "pageMaintenance",
    icon: "AnchorIcon",
    i18n: "Maintenance",
    target: '_blank'
  }, {
    url: '/pages/comingsoon',
    name: "Coming Soon",
    icon: "ClockIcon",
    i18n: "ComingSoon",
    target: '_blank'
  }, {
    url: '/pages/error-404',
    name: "404",
    slug: "pageError404",
    i18n: "404",
    target: '_blank'
  }, {
    url: '/pages/error-500',
    name: "500",
    slug: "pageError500",
    i18n: "500",
    target: '_blank'
  }]
}, {
  header: "Charts & Maps",
  i18n: "ChartsAndMaps"
}, {
  url: null,
  name: "Charts",
  icon: "PieChartIcon",
  tag: '3',
  tagColor: 'success',
  i18n: "Charts",
  submenu: [{
    url: '/charts-and-maps/charts/apex-charts',
    name: "Apex Charts",
    slug: "extraComponentChartsApexCharts",
    i18n: "ApexCharts"
  }, {
    url: '/charts-and-maps/charts/chartjs',
    name: "chartjs",
    slug: "extraComponentChartsChartjs",
    i18n: "chartjs"
  }, {
    url: '/charts-and-maps/charts/echarts',
    name: "echarts",
    slug: "extraComponentChartsEcharts",
    i18n: "echarts"
  }]
}, {
  url: '/charts-and-maps/maps/google-map',
  name: "Google Map",
  icon: "MapIcon",
  slug: "extraComponentMapsGoogleMap",
  i18n: "GoogleMap"
}, {
  header: "Extensions",
  i18n: "Extensions"
}, {
  url: '/extensions/select',
  name: "Select",
  icon: "PocketIcon",
  slug: "extraComponentSelect",
  i18n: "Select"
}, {
  url: '/extensions/quill-editor',
  name: "Quill Editor",
  icon: "EditIcon",
  slug: "extraComponentQuillEditor",
  i18n: "QuillEditor"
}, {
  url: '/extensions/drag-and-drop',
  name: "Drag & Drop",
  icon: "DropletIcon",
  slug: "extraComponentDragAndDrop",
  i18n: "DragAndDrop"
}, {
  url: '/extensions/datepicker',
  name: "Datepicker",
  icon: "CalendarIcon",
  slug: "extraComponentDatepicker",
  i18n: "Datepicker"
}, {
  url: '/extensions/datetime-picker',
  name: "Datetime Picker",
  icon: "ClockIcon",
  slug: "extraComponentDatetimePicker",
  i18n: "DatetimePicker"
}, {
  url: null,
  name: 'Access Control',
  icon: 'LockIcon',
  i18n: 'AccessControl',
  submenu: [{
    url: '/extensions/access-control-editor',
    name: "Editor View",
    slug: "extraComponentAccessControlEditor",
    i18n: "EditorView"
  }, {
    url: '/extensions/access-control-admin',
    name: "Admin View",
    slug: "extraComponentAccessControlAdmin",
    i18n: "AdminView"
  }]
}, {
  url: '/extensions/i18n',
  name: "I18n",
  icon: "GlobeIcon",
  slug: "extraComponentI18n",
  i18n: "I18n"
}, {
  url: '/extensions/carousel',
  name: "Carousel",
  icon: "LayersIcon",
  slug: "extraComponentCarousel",
  i18n: "Carousel"
}, {
  url: '/extensions/clipboard',
  name: "Clipboard",
  icon: "CopyIcon",
  slug: "extraComponentClipboard",
  i18n: "Clipboard"
}, {
  url: '/extensions/context-menu',
  name: "Context Menu",
  icon: "MoreHorizontalIcon",
  slug: "extraComponentContextMenu",
  i18n: "ContextMenu"
}, {
  url: '/extensions/star-ratings',
  name: "Star Ratings",
  icon: "StarIcon",
  slug: "extraComponentStarRatings",
  i18n: "StarRatings"
}, {
  url: '/extensions/autocomplete',
  name: "Autocomplete",
  icon: "Edit3Icon",
  slug: "extraComponentAutocomplete",
  i18n: "Autocomplete"
}, {
  url: '/extensions/tree',
  name: "Tree",
  icon: "GitPullRequestIcon",
  slug: "extraComponentTree",
  i18n: "Tree"
}, {
  header: "Others",
  i18n: "Others"
}, {
  url: null,
  name: "Menu Levels",
  icon: "MenuIcon",
  i18n: "MenuLevels",
  submenu: [{
    url: null,
    name: "Menu Level 2.1",
    i18n: "MenuLevel2p1"
  }, {
    url: null,
    name: "Menu Level 2.2",
    i18n: "MenuLevel2p2",
    submenu: [{
      url: null,
      name: "Menu Level 3.1",
      i18n: "MenuLevel3p1"
    }, {
      url: null,
      name: "Menu Level 3.2",
      i18n: "MenuLevel3p2"
    }]
  }]
}, {
  url: null,
  name: "Disabled Menu",
  icon: "EyeOffIcon",
  i18n: "DisabledMenu",
  isDisabled: true
}, {
  header: "Support",
  i18n: "Support"
}, {
  url: 'https://pixinvent.com/demo/vuesax-vuejs-admin-dashboard-template/documentation/',
  name: "Documentation",
  icon: "BookOpenIcon",
  slug: "external",
  i18n: "Documentation",
  target: "_blank"
}, {
  url: 'https://pixinvent.ticksy.com/',
  name: "Raise Support",
  icon: "LifeBuoyIcon",
  slug: "external",
  i18n: "RaiseSupport",
  target: "_blank"
}]);

/***/ }),

/***/ "./resources/js/src/layouts/main/Main.vue":
/*!************************************************!*\
  !*** ./resources/js/src/layouts/main/Main.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Main_vue_vue_type_template_id_22fa5a70___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Main.vue?vue&type=template&id=22fa5a70& */ "./resources/js/src/layouts/main/Main.vue?vue&type=template&id=22fa5a70&");
/* harmony import */ var _Main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Main.vue?vue&type=script&lang=js& */ "./resources/js/src/layouts/main/Main.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Main_vue_vue_type_template_id_22fa5a70___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Main_vue_vue_type_template_id_22fa5a70___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/layouts/main/Main.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/layouts/main/Main.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/src/layouts/main/Main.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Main.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/main/Main.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/layouts/main/Main.vue?vue&type=template&id=22fa5a70&":
/*!*******************************************************************************!*\
  !*** ./resources/js/src/layouts/main/Main.vue?vue&type=template&id=22fa5a70& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_template_id_22fa5a70___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Main.vue?vue&type=template&id=22fa5a70& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/main/Main.vue?vue&type=template&id=22fa5a70&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_template_id_22fa5a70___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_template_id_22fa5a70___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);