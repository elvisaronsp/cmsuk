(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[59],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/todo/Todo.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/todo/Todo.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TodoAddNew_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TodoAddNew.vue */ "./resources/js/src/views/apps/todo/TodoAddNew.vue");
/* harmony import */ var _TodoItem_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TodoItem.vue */ "./resources/js/src/views/apps/todo/TodoItem.vue");
/* harmony import */ var _TodoFilters_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TodoFilters.vue */ "./resources/js/src/views/apps/todo/TodoFilters.vue");
/* harmony import */ var _TodoEdit_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TodoEdit.vue */ "./resources/js/src/views/apps/todo/TodoEdit.vue");
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-perfect-scrollbar */ "./node_modules/vue-perfect-scrollbar/dist/index.js");
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      clickNotClose: true,
      displayPrompt: false,
      todoIdToEdit: 0,
      isSidebarActive: true,
      windowWidth: window.innerWidth,
      settings: {
        maxScrollbarLength: 60,
        wheelSpeed: 0.30
      }
    };
  },
  watch: {
    todoFilter: function todoFilter() {
      this.$refs.todoListPS.$el.scrollTop = 0;
    }
  },
  computed: {
    todo: function todo() {
      return this.$store.state.todo.todoArray;
    },
    todoFilter: function todoFilter() {
      return this.$store.state.todo.todoFilter;
    },
    todoList: function todoList() {
      return this.$store.getters['todo/todoList'];
    },
    searchQuery: {
      get: function get() {
        return this.$store.state.todo.todoSearchQuery;
      },
      set: function set(val) {
        this.$store.dispatch('todo/setTodoSearchQuery', val);
      }
    }
  },
  methods: {
    showDisplayPrompt: function showDisplayPrompt(itemId) {
      this.todoIdToEdit = itemId;
      this.displayPrompt = true;
    },
    hidePrompt: function hidePrompt() {
      this.displayPrompt = false;
    },
    handleWindowResize: function handleWindowResize(event) {
      this.windowWidth = event.currentTarget.innerWidth;
      this.setSidebarWidth();
    },
    setSidebarWidth: function setSidebarWidth() {
      if (this.windowWidth < 992) {
        this.isSidebarActive = this.clickNotClose = false;
      } else {
        this.isSidebarActive = this.clickNotClose = true;
      }
    },
    toggleTodoSidebar: function toggleTodoSidebar() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      if (!value && this.clickNotClose) return;
      this.isSidebarActive = value;
    }
  },
  components: {
    TodoAddNew: _TodoAddNew_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    TodoItem: _TodoItem_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    TodoFilters: _TodoFilters_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    TodoEdit: _TodoEdit_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    VuePerfectScrollbar: vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4___default.a
  },
  created: function created() {
    var _this = this;

    this.$nextTick(function () {
      window.addEventListener('resize', _this.handleWindowResize);
    });
    this.setSidebarWidth();
  },
  beforeDestroy: function beforeDestroy() {
    window.removeEventListener('resize', this.handleWindowResize);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/todo/TodoAddNew.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/todo/TodoAddNew.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      activePrompt: false,
      // task fields
      title: '',
      desc: '',
      isDone: false,
      isImportant: false,
      isStarred: false,
      tags: [],
      // task obj
      taskObj: {}
    };
  },
  computed: {
    todoArrayLength: function todoArrayLength() {
      return this.$store.getters['todo/todoArrayLength'];
    },
    todoTags: function todoTags() {
      return this.$store.state.todo.todoTags;
    },
    validateForm: function validateForm() {
      return !this.errors.any() && this.title != '';
    }
  },
  methods: {
    addTodo: function addTodo() {
      // update todo in store and clear all fields in dialog
      var newId = this.todoArrayLength;
      this.taskObj.id = newId;
      this.taskObj.title = this.title;
      this.taskObj.desc = this.desc;
      this.taskObj.isDone = this.isDone;
      this.taskObj.isImportant = this.isImportant;
      this.taskObj.isStarred = this.isStarred;
      this.taskObj.tags = this.tags;
      this.taskObj.isTrashed = false;
      this.$store.dispatch('todo/addTodo', this.taskObj);
      this.clearFields();
    },
    clearFields: function clearFields() {
      // clear all fileds in todo
      this.title = "";
      this.desc = "";
      this.isDone = false;
      this.isImportant = false;
      this.isStarred = false;
      this.tags = [];
    },
    submitTodo: function submitTodo() {
      var _this = this;

      this.$validator.validateAll().then(function (result) {
        if (result) _this.addTodo();
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/todo/TodoEdit.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/todo/TodoEdit.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    displayPrompt: {
      type: Boolean,
      required: true
    },
    todoItemId: {
      type: Number,
      required: true
    }
  },
  data: function data() {
    return {
      titleLocal: this.$store.state.todo.todoArray[this.todoItemId].title,
      descLocal: this.$store.state.todo.todoArray[this.todoItemId].desc,
      isDoneLocal: this.$store.state.todo.todoArray[this.todoItemId].isDone,
      isImportantLocal: this.$store.state.todo.todoArray[this.todoItemId].isImportant,
      isStarredLocal: this.$store.state.todo.todoArray[this.todoItemId].isStarred,
      tagsLocal: this.$store.state.todo.todoArray[this.todoItemId].tags
    };
  },
  computed: {
    activePrompt: {
      get: function get() {
        return this.displayPrompt;
      },
      set: function set(value) {
        this.$emit('hideDisplayPrompt', value);
      }
    },
    todoTags: function todoTags() {
      return this.$store.state.todo.todoTags;
    },
    validateForm: function validateForm() {
      return !this.errors.any() && this.titleLocal != '';
    },
    isTrashed: {
      get: function get() {
        return this.$store.state.todo.todoArray[this.todoItemId].isTrashed;
      },
      set: function set(value) {
        this.$store.dispatch('todo/moveToTrash', {
          id: this.todoItemId,
          value: value
        });
      }
    }
  },
  methods: {
    toggleIsImportant: function toggleIsImportant() {
      this.isImportantLocal = !this.isImportantLocal;
    },
    toggleIsStarred: function toggleIsStarred() {
      this.isStarredLocal = !this.isStarredLocal;
    },
    removeTodo: function removeTodo() {
      this.isTrashed = true;
    },
    init: function init() {
      this.titleLocal = this.$store.state.todo.todoArray[this.todoItemId].title;
      this.descLocal = this.$store.state.todo.todoArray[this.todoItemId].desc;
      this.isDoneLocal = this.$store.state.todo.todoArray[this.todoItemId].isDone;
      this.isImportantLocal = this.$store.state.todo.todoArray[this.todoItemId].isImportant;
      this.isStarredLocal = this.$store.state.todo.todoArray[this.todoItemId].isStarred;
      this.tagsLocal = this.$store.state.todo.todoArray[this.todoItemId].tags;
    },
    submitTodo: function submitTodo() {
      this.$store.dispatch('todo/setTodoTitle', {
        id: this.todoItemId,
        title: this.titleLocal
      });
      this.$store.dispatch('todo/setTodoDesc', {
        id: this.todoItemId,
        desc: this.descLocal
      });
      this.$store.dispatch('todo/toggleIsImportant', {
        id: this.todoItemId,
        value: this.isImportantLocal
      });
      this.$store.dispatch('todo/toggleIsStarred', {
        id: this.todoItemId,
        value: this.isStarredLocal
      });
      this.$store.dispatch('todo/updateTags', {
        id: this.todoItemId,
        newTags: this.tagsLocal
      });
      this.$store.dispatch('todo/toggleIsDone', {
        id: this.todoItemId,
        value: this.isDoneLocal
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/todo/TodoFilters.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/todo/TodoFilters.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      todoFilters: [{
        filterName: 'Starred',
        filter: 'starred',
        icon: 'StarIcon'
      }, {
        filterName: 'Important',
        filter: 'important',
        icon: 'InfoIcon'
      }, {
        filterName: 'Done',
        filter: 'done',
        icon: 'CheckIcon'
      }, {
        filterName: 'Trashed',
        filter: 'trashed',
        icon: 'TrashIcon'
      }]
    };
  },
  computed: {
    todoTags: function todoTags() {
      return this.$store.state.todo.todoTags;
    },
    todoFilter: function todoFilter() {
      return this.$store.state.todo.todoFilter;
    }
  },
  methods: {
    applyTodoFilter: function applyTodoFilter(filterName) {
      this.$store.dispatch('todo/applyTodoFilter', filterName);
      this.$emit('closeSidebar', false);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/todo/TodoItem.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/todo/TodoItem.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    todoItemId: {
      type: Number,
      required: true
    }
  },
  data: function data() {
    return {};
  },
  computed: {
    isImportant: {
      get: function get() {
        return this.$store.state.todo.todoArray[this.todoItemId].isImportant;
      },
      set: function set(value) {
        this.$store.dispatch('todo/toggleIsImportant', {
          id: this.todoItemId,
          value: value
        });
      }
    },
    isStarred: {
      get: function get() {
        return this.$store.state.todo.todoArray[this.todoItemId].isStarred;
      },
      set: function set(value) {
        this.$store.dispatch('todo/toggleIsStarred', {
          id: this.todoItemId,
          value: value
        });
      }
    },
    isTrashed: {
      get: function get() {
        return this.$store.state.todo.todoArray[this.todoItemId].isTrashed;
      },
      set: function set(value) {
        this.$store.dispatch('todo/moveToTrash', {
          id: this.todoItemId,
          value: value
        });
      }
    },
    title: function title() {
      return this.$store.state.todo.todoArray[this.todoItemId].title;
    },
    desc: function desc() {
      return this.$store.state.todo.todoArray[this.todoItemId].desc;
    },
    tags: function tags() {
      return this.$store.state.todo.todoArray[this.todoItemId].tags;
    },
    isDone: {
      get: function get() {
        return this.$store.state.todo.todoArray[this.todoItemId].isDone;
      },
      set: function set(value) {
        var payload = {
          id: this.todoItemId,
          value: value
        };
        this.$store.dispatch('todo/toggleIsDone', payload);
      }
    },
    todoLabelColor: function todoLabelColor() {
      var _this = this;

      return function (label) {
        var tags = _this.$store.state.todo.todoTags;
        return tags.find(function (tag) {
          return tag.value == label;
        }).color;
      };
    }
  },
  methods: {
    toggleIsImportant: function toggleIsImportant() {
      this.isImportant = !this.isImportant;
    },
    toggleIsStarred: function toggleIsStarred() {
      this.isStarred = !this.isStarred;
    },
    moveToTrash: function moveToTrash() {
      this.isTrashed = !this.isTrashed;
    },
    editTodo: function editTodo() {
      alert();
    },
    displayPrompt: function displayPrompt() {
      this.$emit('showDisplayPrompt', this.todoItemId);
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/todo/Todo.vue?vue&type=style&index=0&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/lib/loader.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/todo/Todo.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*=========================================================================================\n    File Name: todo.scss\n    Description: Todo app's styles. This is imported in Todo.vue file\n    ----------------------------------------------------------------------------------------\n    Item Name: Vuesax Admin - VueJS Dashboard Admin Template\n      Author: Pixinvent\n    Author URL: http://www.themeforest.net/user/pixinvent\n==========================================================================================*/\n#todo-app .vs-sidebar--background {\n  position: absolute;\n}\n#todo-app .todo-scroll-area {\n  position: relative;\n  margin: auto;\n  width: 100%;\n  height: calc(100% - 70px);\n}\n#todo-app .todo-content-scroll-area {\n  position: relative;\n  margin: auto;\n  width: 100%;\n  height: calc(100% - 50px);\n}\n#todo-app .todo_todo-item {\n  -webkit-transition: all 0.35s;\n  transition: all 0.35s;\n}\n#todo-app .list-item-component {\n  -webkit-transition: background-color 0.2s, -webkit-transform 0.2s;\n  transition: background-color 0.2s, -webkit-transform 0.2s;\n  transition: background-color 0.2s, transform 0.2s;\n  transition: background-color 0.2s, transform 0.2s, -webkit-transform 0.2s;\n  border-top: 1px solid #dae1e7;\n}\n#todo-app .list-item-component:hover {\n  -webkit-transform: translateY(-4px);\n          transform: translateY(-4px);\n  box-shadow: 0px 3px 10px 0px #ccc;\n  -webkit-transition: all 0.2s;\n  transition: all 0.2s;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/todo/Todo.vue?vue&type=style&index=0&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/lib/loader.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/todo/Todo.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../node_modules/sass-loader/lib/loader.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Todo.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/todo/Todo.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/todo/Todo.vue?vue&type=template&id=1764b1bc&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/todo/Todo.vue?vue&type=template&id=1764b1bc& ***!
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
        "border border-solid d-theme-border-grey-light rounded relative overflow-hidden",
      attrs: { id: "todo-app" }
    },
    [
      _c(
        "vs-sidebar",
        {
          staticClass: "items-no-padding",
          attrs: {
            parent: "#todo-app",
            "click-not-close": _vm.clickNotClose,
            "hidden-background": _vm.clickNotClose
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
          _c("todo-add-new"),
          _vm._v(" "),
          _c(
            "VuePerfectScrollbar",
            {
              staticClass: "todo-scroll-area",
              attrs: { settings: _vm.settings }
            },
            [
              _c("todo-filters", {
                on: { closeSidebar: _vm.toggleTodoSidebar }
              })
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
            "app-fixed-height border border-r-0 border-b-0 border-t-0 border-solid d-theme-border-grey-light app-fixed-height",
          class: { "sidebar-spacer": _vm.clickNotClose }
        },
        [
          _c(
            "div",
            {
              staticClass:
                "flex items-center app-search-container border border-l-0 border-r-0 border-t-0 border-solid d-theme-border-grey-light"
            },
            [
              _c("feather-icon", {
                staticClass:
                  "md:inline-flex lg:hidden ml-4 mr-4 cursor-pointer",
                attrs: { icon: "MenuIcon" },
                on: {
                  click: function($event) {
                    $event.stopPropagation()
                    return _vm.toggleTodoSidebar(true)
                  }
                }
              }),
              _vm._v(" "),
              _c("vs-input", {
                staticClass:
                  "vs-input-no-border vs-input-no-shdow-focus no-icon-border w-full",
                attrs: {
                  size: "large",
                  "icon-pack": "feather",
                  icon: "icon-search",
                  placeholder: "Search..."
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
            "VuePerfectScrollbar",
            {
              ref: "todoListPS",
              staticClass: "todo-content-scroll-area",
              attrs: { settings: _vm.settings }
            },
            [
              _c(
                "transition-group",
                {
                  staticClass: "todo-list",
                  attrs: { name: "list-enter-up", tag: "ul", appear: "" }
                },
                _vm._l(_vm.todoList, function(todoItem, index) {
                  return _c(
                    "li",
                    {
                      key: String(_vm.todoFilter) + String(todoItem.id),
                      staticClass: "cursor-pointer todo_todo-item",
                      style: [{ transitionDelay: index * 0.1 + "s" }]
                    },
                    [
                      _c("todo-item", {
                        attrs: { todoItemId: todoItem.id },
                        on: {
                          showDisplayPrompt: function($event) {
                            return _vm.showDisplayPrompt($event)
                          }
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
      _vm.displayPrompt
        ? _c("todo-edit", {
            attrs: {
              displayPrompt: _vm.displayPrompt,
              todoItemId: _vm.todoIdToEdit
            },
            on: { hideDisplayPrompt: _vm.hidePrompt }
          })
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/todo/TodoAddNew.vue?vue&type=template&id=752656ca&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/todo/TodoAddNew.vue?vue&type=template&id=752656ca& ***!
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
    { staticClass: "px-6 pb-2 pt-6" },
    [
      _c(
        "vs-button",
        {
          staticClass: "w-full",
          on: {
            click: function($event) {
              _vm.activePrompt = true
            }
          }
        },
        [_vm._v("Add Task")]
      ),
      _vm._v(" "),
      _c(
        "vs-prompt",
        {
          attrs: {
            "vs-title": "Add Task",
            "vs-accept-text": "Add Task",
            "vs-button-cancel": "border",
            "vs-is-valid": _vm.validateForm,
            "vs-active": _vm.activePrompt
          },
          on: {
            "vs-cancel": _vm.clearFields,
            "vs-accept": _vm.submitTodo,
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
          _c("div", [
            _c("form", [
              _c("div", { staticClass: "vx-row" }, [
                _c(
                  "div",
                  { staticClass: "vx-col ml-auto flex" },
                  [
                    _c("feather-icon", {
                      staticClass: "cursor-pointer",
                      attrs: {
                        icon: "InfoIcon",
                        svgClasses: [
                          { "text-success stroke-current": _vm.isImportant },
                          "w-5",
                          "h-5 mr-4"
                        ]
                      },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          _vm.isImportant = !_vm.isImportant
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("feather-icon", {
                      staticClass: "cursor-pointer",
                      attrs: {
                        icon: "StarIcon",
                        svgClasses: [
                          { "text-warning stroke-current": _vm.isStarred },
                          "w-5",
                          "h-5 mr-4"
                        ]
                      },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          _vm.isStarred = !_vm.isStarred
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "vs-dropdown",
                      {
                        staticClass: "cursor-pointer",
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
                          _vm._l(_vm.todoTags, function(tag, index) {
                            return _c(
                              "vs-dropdown-item",
                              { key: index },
                              [
                                _c(
                                  "vs-checkbox",
                                  {
                                    attrs: { "vs-value": tag.value },
                                    on: {
                                      click: function($event) {
                                        $event.stopPropagation()
                                      }
                                    },
                                    model: {
                                      value: _vm.tags,
                                      callback: function($$v) {
                                        _vm.tags = $$v
                                      },
                                      expression: "tags"
                                    }
                                  },
                                  [_vm._v(_vm._s(tag.text))]
                                )
                              ],
                              1
                            )
                          }),
                          1
                        )
                      ],
                      1
                    )
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
                    _c("vs-input", {
                      directives: [
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "w-full mb-4 mt-5",
                      attrs: {
                        name: "title",
                        placeholder: "Title",
                        color: _vm.validateForm ? "success" : "danger"
                      },
                      model: {
                        value: _vm.title,
                        callback: function($$v) {
                          _vm.title = $$v
                        },
                        expression: "title"
                      }
                    }),
                    _vm._v(" "),
                    _c("vs-textarea", {
                      attrs: { rows: "5", label: "Add description" },
                      model: {
                        value: _vm.desc,
                        callback: function($$v) {
                          _vm.desc = $$v
                        },
                        expression: "desc"
                      }
                    })
                  ],
                  1
                )
              ])
            ])
          ])
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/todo/TodoEdit.vue?vue&type=template&id=17783ce6&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/todo/TodoEdit.vue?vue&type=template&id=17783ce6& ***!
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
  return _c(
    "vs-prompt",
    {
      attrs: {
        "vs-title": "Edit Task",
        "vs-accept-text": "Submit",
        "vs-cancel-text": "Remove",
        "vs-button-cancel": "border",
        "vs-is-valid": _vm.validateForm,
        "vs-active": _vm.activePrompt
      },
      on: {
        "vs-cancel": _vm.removeTodo,
        "vs-accept": _vm.submitTodo,
        "vs-close": _vm.init,
        "update:vsActive": function($event) {
          _vm.activePrompt = $event
        },
        "update:vs-active": function($event) {
          _vm.activePrompt = $event
        }
      }
    },
    [
      _c("div", [
        _c("form", [
          _c("div", { staticClass: "vx-row" }, [
            _c(
              "div",
              { staticClass: "vx-col w-1/6 self-center" },
              [
                _c("vs-checkbox", {
                  staticClass: "w-8",
                  model: {
                    value: _vm.isDoneLocal,
                    callback: function($$v) {
                      _vm.isDoneLocal = $$v
                    },
                    expression: "isDoneLocal"
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "vx-col ml-auto flex" },
              [
                _c("feather-icon", {
                  staticClass: "cursor-pointer",
                  attrs: {
                    icon: "InfoIcon",
                    svgClasses: [
                      { "text-success stroke-current": _vm.isImportantLocal },
                      "w-5",
                      "h-5 mr-4"
                    ]
                  },
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      return _vm.toggleIsImportant($event)
                    }
                  }
                }),
                _vm._v(" "),
                _c("feather-icon", {
                  staticClass: "cursor-pointer",
                  attrs: {
                    icon: "StarIcon",
                    svgClasses: [
                      { "text-warning stroke-current": _vm.isStarredLocal },
                      "w-5",
                      "h-5 mr-4"
                    ]
                  },
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      return _vm.toggleIsStarred($event)
                    }
                  }
                }),
                _vm._v(" "),
                _c(
                  "vs-dropdown",
                  {
                    staticClass: "cursor-pointer",
                    attrs: { "vs-custom-content": "" }
                  },
                  [
                    _c("feather-icon", {
                      attrs: { icon: "TagIcon", svgClasses: "h-5 w-5" }
                    }),
                    _vm._v(" "),
                    _c(
                      "vs-dropdown-menu",
                      { staticStyle: { "z-index": "200001" } },
                      _vm._l(_vm.todoTags, function(tag, index) {
                        return _c(
                          "vs-dropdown-item",
                          { key: index },
                          [
                            _c(
                              "vs-checkbox",
                              {
                                attrs: { "vs-value": tag.value },
                                on: {
                                  click: function($event) {
                                    $event.stopPropagation()
                                  }
                                },
                                model: {
                                  value: _vm.tagsLocal,
                                  callback: function($$v) {
                                    _vm.tagsLocal = $$v
                                  },
                                  expression: "tagsLocal"
                                }
                              },
                              [_vm._v(_vm._s(tag.text))]
                            )
                          ],
                          1
                        )
                      }),
                      1
                    )
                  ],
                  1
                )
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
                _c("vs-input", {
                  directives: [
                    {
                      name: "validate",
                      rawName: "v-validate",
                      value: "required",
                      expression: "'required'"
                    }
                  ],
                  staticClass: "w-full mb-4 mt-5",
                  attrs: { name: "title", placeholder: "Title" },
                  model: {
                    value: _vm.titleLocal,
                    callback: function($$v) {
                      _vm.titleLocal = $$v
                    },
                    expression: "titleLocal"
                  }
                }),
                _vm._v(" "),
                _c("vs-textarea", {
                  attrs: { rows: "5", label: "Add description" },
                  model: {
                    value: _vm.descLocal,
                    callback: function($$v) {
                      _vm.descLocal = $$v
                    },
                    expression: "descLocal"
                  }
                })
              ],
              1
            )
          ])
        ])
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/todo/TodoFilters.vue?vue&type=template&id=c2700d62&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/todo/TodoFilters.vue?vue&type=template&id=c2700d62& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
    { staticClass: "todo__filters-container" },
    [
      _c("div", { staticClass: "px-6 py-4" }, [
        _c(
          "div",
          {
            staticClass: "flex cursor-pointer",
            class: { "text-primary": _vm.todoFilter == "all" },
            on: {
              click: function($event) {
                return _vm.applyTodoFilter("all")
              }
            }
          },
          [
            _c("feather-icon", {
              attrs: {
                icon: "MailIcon",
                svgClasses: [
                  { "text-primary stroke-current": _vm.todoFilter == "all" },
                  "h-6 w-6"
                ]
              }
            }),
            _vm._v(" "),
            _c("span", { staticClass: "text-lg ml-3" }, [_vm._v("All")])
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("vs-divider"),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "px-6 py-4" },
        [
          _c("h5", [_vm._v("Filters")]),
          _vm._v(" "),
          _vm._l(_vm.todoFilters, function(filter) {
            return [
              _c(
                "div",
                {
                  key: filter.filter,
                  staticClass: "flex mt-6 cursor-pointer",
                  class: { "text-primary": _vm.todoFilter == filter.filter },
                  on: {
                    click: function($event) {
                      return _vm.applyTodoFilter(filter.filter)
                    }
                  }
                },
                [
                  _c("feather-icon", {
                    attrs: {
                      icon: filter.icon,
                      svgClasses: [
                        {
                          "text-primary stroke-current":
                            _vm.todoFilter == filter.filter
                        },
                        "h-6 w-6"
                      ]
                    }
                  }),
                  _vm._v(" "),
                  _c("span", { staticClass: "text-lg ml-3" }, [
                    _vm._v(_vm._s(filter.filterName))
                  ])
                ],
                1
              )
            ]
          })
        ],
        2
      ),
      _vm._v(" "),
      _c("vs-divider"),
      _vm._v(" "),
      _c("div", { staticClass: "px-6 py-4" }, [
        _c("h5", [_vm._v("Labels")]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "todo__lables-list" },
          _vm._l(_vm.todoTags, function(tag, index) {
            return _c(
              "div",
              {
                key: index,
                staticClass:
                  "todo__label flex items-center mt-6 cursor-pointer",
                on: {
                  click: function($event) {
                    return _vm.applyTodoFilter(tag.value)
                  }
                }
              },
              [
                _c("div", {
                  staticClass: "h-4 w-4 rounded-full mr-4",
                  class: "bg-" + tag.color
                }),
                _vm._v(" "),
                _c(
                  "span",
                  {
                    staticClass: "text-lg",
                    class: { "text-primary": _vm.todoFilter == tag.value }
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/todo/TodoItem.vue?vue&type=template&id=03aac522&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/todo/TodoItem.vue?vue&type=template&id=03aac522& ***!
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
  return _c(
    "div",
    {
      staticClass: "px-4 py-4 list-item-component",
      on: { click: _vm.displayPrompt }
    },
    [
      _c("div", { staticClass: "vx-row" }, [
        _c(
          "div",
          {
            staticClass:
              "vx-col w-full sm:w-5/6 flex sm:items-center sm:flex-row flex-col"
          },
          [
            _c(
              "div",
              { staticClass: "flex items-center" },
              [
                _c("vs-checkbox", {
                  staticClass: "w-8 m-0 vs-checkbox-small",
                  on: {
                    click: function($event) {
                      $event.stopPropagation()
                    }
                  },
                  model: {
                    value: _vm.isDone,
                    callback: function($$v) {
                      _vm.isDone = $$v
                    },
                    expression: "isDone"
                  }
                }),
                _vm._v(" "),
                _c(
                  "h6",
                  {
                    staticClass: "todo-title",
                    class: { "line-through": _vm.isDone }
                  },
                  [_vm._v(_vm._s(_vm.title))]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "todo-tags sm:ml-2 sm:my-0 my-2 flex" },
              _vm._l(_vm.tags, function(tag, index) {
                return _c("vs-chip", { key: index }, [
                  _c("div", {
                    staticClass: "h-2 w-2 rounded-full mr-1",
                    class: "bg-" + _vm.todoLabelColor(tag)
                  }),
                  _vm._v(" "),
                  _c("span", [_vm._v(_vm._s(_vm._f("capitalize")(tag)))])
                ])
              }),
              1
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "vx-col w-full sm:w-1/6 ml-auto flex sm:justify-end" },
          [
            _c("feather-icon", {
              staticClass: "cursor-pointer",
              attrs: {
                icon: "InfoIcon",
                svgClasses: [
                  { "text-success stroke-current": _vm.isImportant },
                  "w-5",
                  "h-5 mr-4"
                ]
              },
              on: {
                click: function($event) {
                  $event.stopPropagation()
                  return _vm.toggleIsImportant($event)
                }
              }
            }),
            _vm._v(" "),
            _c("feather-icon", {
              staticClass: "cursor-pointer",
              attrs: {
                icon: "StarIcon",
                svgClasses: [
                  { "text-warning stroke-current": _vm.isStarred },
                  "w-5",
                  "h-5 mr-4"
                ]
              },
              on: {
                click: function($event) {
                  $event.stopPropagation()
                  return _vm.toggleIsStarred($event)
                }
              }
            }),
            _vm._v(" "),
            !_vm.isTrashed
              ? _c("feather-icon", {
                  staticClass: "cursor-pointer",
                  attrs: { icon: "TrashIcon", svgClasses: "w-5 h-5" },
                  on: {
                    click: function($event) {
                      $event.stopPropagation()
                      return _vm.moveToTrash($event)
                    }
                  }
                })
              : _vm._e()
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "vx-row" }, [
        _c("div", { staticClass: "vx-col w-full" }, [
          _c(
            "p",
            {
              staticClass: "mt-2 truncate",
              class: { "line-through": _vm.isDone }
            },
            [_vm._v(_vm._s(_vm.desc))]
          )
        ])
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/apps/todo/Todo.vue":
/*!***************************************************!*\
  !*** ./resources/js/src/views/apps/todo/Todo.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Todo_vue_vue_type_template_id_1764b1bc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Todo.vue?vue&type=template&id=1764b1bc& */ "./resources/js/src/views/apps/todo/Todo.vue?vue&type=template&id=1764b1bc&");
/* harmony import */ var _Todo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Todo.vue?vue&type=script&lang=js& */ "./resources/js/src/views/apps/todo/Todo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Todo_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Todo.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/views/apps/todo/Todo.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Todo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Todo_vue_vue_type_template_id_1764b1bc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Todo_vue_vue_type_template_id_1764b1bc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/apps/todo/Todo.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/apps/todo/Todo.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/src/views/apps/todo/Todo.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Todo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Todo.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/todo/Todo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Todo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/apps/todo/Todo.vue?vue&type=style&index=0&lang=scss&":
/*!*************************************************************************************!*\
  !*** ./resources/js/src/views/apps/todo/Todo.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Todo_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../node_modules/sass-loader/lib/loader.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Todo.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/todo/Todo.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Todo_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Todo_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Todo_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Todo_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Todo_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/apps/todo/Todo.vue?vue&type=template&id=1764b1bc&":
/*!**********************************************************************************!*\
  !*** ./resources/js/src/views/apps/todo/Todo.vue?vue&type=template&id=1764b1bc& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Todo_vue_vue_type_template_id_1764b1bc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Todo.vue?vue&type=template&id=1764b1bc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/todo/Todo.vue?vue&type=template&id=1764b1bc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Todo_vue_vue_type_template_id_1764b1bc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Todo_vue_vue_type_template_id_1764b1bc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/apps/todo/TodoAddNew.vue":
/*!*********************************************************!*\
  !*** ./resources/js/src/views/apps/todo/TodoAddNew.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TodoAddNew_vue_vue_type_template_id_752656ca___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TodoAddNew.vue?vue&type=template&id=752656ca& */ "./resources/js/src/views/apps/todo/TodoAddNew.vue?vue&type=template&id=752656ca&");
/* harmony import */ var _TodoAddNew_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TodoAddNew.vue?vue&type=script&lang=js& */ "./resources/js/src/views/apps/todo/TodoAddNew.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TodoAddNew_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TodoAddNew_vue_vue_type_template_id_752656ca___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TodoAddNew_vue_vue_type_template_id_752656ca___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/apps/todo/TodoAddNew.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/apps/todo/TodoAddNew.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/src/views/apps/todo/TodoAddNew.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TodoAddNew_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TodoAddNew.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/todo/TodoAddNew.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TodoAddNew_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/apps/todo/TodoAddNew.vue?vue&type=template&id=752656ca&":
/*!****************************************************************************************!*\
  !*** ./resources/js/src/views/apps/todo/TodoAddNew.vue?vue&type=template&id=752656ca& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TodoAddNew_vue_vue_type_template_id_752656ca___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TodoAddNew.vue?vue&type=template&id=752656ca& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/todo/TodoAddNew.vue?vue&type=template&id=752656ca&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TodoAddNew_vue_vue_type_template_id_752656ca___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TodoAddNew_vue_vue_type_template_id_752656ca___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/apps/todo/TodoEdit.vue":
/*!*******************************************************!*\
  !*** ./resources/js/src/views/apps/todo/TodoEdit.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TodoEdit_vue_vue_type_template_id_17783ce6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TodoEdit.vue?vue&type=template&id=17783ce6& */ "./resources/js/src/views/apps/todo/TodoEdit.vue?vue&type=template&id=17783ce6&");
/* harmony import */ var _TodoEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TodoEdit.vue?vue&type=script&lang=js& */ "./resources/js/src/views/apps/todo/TodoEdit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TodoEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TodoEdit_vue_vue_type_template_id_17783ce6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TodoEdit_vue_vue_type_template_id_17783ce6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/apps/todo/TodoEdit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/apps/todo/TodoEdit.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/src/views/apps/todo/TodoEdit.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TodoEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TodoEdit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/todo/TodoEdit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TodoEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/apps/todo/TodoEdit.vue?vue&type=template&id=17783ce6&":
/*!**************************************************************************************!*\
  !*** ./resources/js/src/views/apps/todo/TodoEdit.vue?vue&type=template&id=17783ce6& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TodoEdit_vue_vue_type_template_id_17783ce6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TodoEdit.vue?vue&type=template&id=17783ce6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/todo/TodoEdit.vue?vue&type=template&id=17783ce6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TodoEdit_vue_vue_type_template_id_17783ce6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TodoEdit_vue_vue_type_template_id_17783ce6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/apps/todo/TodoFilters.vue":
/*!**********************************************************!*\
  !*** ./resources/js/src/views/apps/todo/TodoFilters.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TodoFilters_vue_vue_type_template_id_c2700d62___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TodoFilters.vue?vue&type=template&id=c2700d62& */ "./resources/js/src/views/apps/todo/TodoFilters.vue?vue&type=template&id=c2700d62&");
/* harmony import */ var _TodoFilters_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TodoFilters.vue?vue&type=script&lang=js& */ "./resources/js/src/views/apps/todo/TodoFilters.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TodoFilters_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TodoFilters_vue_vue_type_template_id_c2700d62___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TodoFilters_vue_vue_type_template_id_c2700d62___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/apps/todo/TodoFilters.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/apps/todo/TodoFilters.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/src/views/apps/todo/TodoFilters.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TodoFilters_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TodoFilters.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/todo/TodoFilters.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TodoFilters_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/apps/todo/TodoFilters.vue?vue&type=template&id=c2700d62&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/src/views/apps/todo/TodoFilters.vue?vue&type=template&id=c2700d62& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TodoFilters_vue_vue_type_template_id_c2700d62___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TodoFilters.vue?vue&type=template&id=c2700d62& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/todo/TodoFilters.vue?vue&type=template&id=c2700d62&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TodoFilters_vue_vue_type_template_id_c2700d62___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TodoFilters_vue_vue_type_template_id_c2700d62___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/apps/todo/TodoItem.vue":
/*!*******************************************************!*\
  !*** ./resources/js/src/views/apps/todo/TodoItem.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TodoItem_vue_vue_type_template_id_03aac522___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TodoItem.vue?vue&type=template&id=03aac522& */ "./resources/js/src/views/apps/todo/TodoItem.vue?vue&type=template&id=03aac522&");
/* harmony import */ var _TodoItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TodoItem.vue?vue&type=script&lang=js& */ "./resources/js/src/views/apps/todo/TodoItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TodoItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TodoItem_vue_vue_type_template_id_03aac522___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TodoItem_vue_vue_type_template_id_03aac522___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/apps/todo/TodoItem.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/apps/todo/TodoItem.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/src/views/apps/todo/TodoItem.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TodoItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TodoItem.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/todo/TodoItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TodoItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/apps/todo/TodoItem.vue?vue&type=template&id=03aac522&":
/*!**************************************************************************************!*\
  !*** ./resources/js/src/views/apps/todo/TodoItem.vue?vue&type=template&id=03aac522& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TodoItem_vue_vue_type_template_id_03aac522___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TodoItem.vue?vue&type=template&id=03aac522& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/todo/TodoItem.vue?vue&type=template&id=03aac522&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TodoItem_vue_vue_type_template_id_03aac522___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TodoItem_vue_vue_type_template_id_03aac522___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);