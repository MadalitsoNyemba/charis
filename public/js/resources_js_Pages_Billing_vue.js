(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Billing_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Billing.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Billing.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
 // import moment from 'moment';


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'billing',
  data: function data() {
    return {
      cases: [],
      errors: [],
      activity_name: '',
      selected_case: ''
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.$store.dispatch('fetchBillings'), this.$store.dispatch('fetchRunningBilling'), axios__WEBPACK_IMPORTED_MODULE_0___default().get('/api/cases').then(function (res) {
      _this.cases = res.data.data, console.log(res.data.data);
    })["catch"](function (err) {
      console.log(err);
    });
  },
  computed: _objectSpread(_objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapState)({
    started: function started(state) {
      return state.started;
    }
  })), (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)(['billings'])), {}, {
    formattedElapsedTime: function formattedElapsedTime() {
      var date = new Date(null);
      date.setSeconds(this.$store.state.count * 1000 / 1000);
      var utc = date.toUTCString();
      return utc.substr(utc.indexOf(":") - 2, 8);
    },
    isComplete: function isComplete() {
      return this.activity_name && this.selected_case;
    }
  }),
  methods: {
    startTimer: function startTimer() {
      this.$store.dispatch('start');
      axios__WEBPACK_IMPORTED_MODULE_0___default().post('/api/billing/add', {
        case_id: this.selected_case,
        activity_name: this.activity_name
      }).then(function (response) {
        console.log(response);
      }, function (error) {
        console.log(error);
      });
    },
    stopTimer: function stopTimer() {
      var _this2 = this;

      this.$store.dispatch('stop');
      axios__WEBPACK_IMPORTED_MODULE_0___default().get('/api/billing/stop').then(function (res) {
        console.log(res);

        _this2.$store.dispatch('fetchBillings');
      })["catch"](function (err) {
        console.log(err);
      });
      this.activity_name = '';
      this.selected_case = '';
    },
    resetTimer: function resetTimer() {
      this.$store.dispatch('reset');
    },
    formatDate: function formatDate(myDate) {
      // get from-now for this date
      var fromNow = moment(myDate).fromNow(); // ensure the date is displayed with today and yesterday

      return moment(myDate).calendar(null, {
        // when the date is closer, specify custom values
        lastWeek: '[Last] dddd',
        lastDay: '[Yesterday]',
        sameDay: '[Today]',
        sameElse: 'DD MMMM, YYYY' // when the date is further away, use from-now functionality             
        // sameElse: function () {
        //     return "[" + fromNow + "]";
        // }

      });
    },
    formatTime: function formatTime(time) {
      var date = new Date(null);
      date.setSeconds(time * 1000 / 1000);
      var utc = date.toUTCString();
      return utc.substr(utc.indexOf(":") - 2, 8);
    },
    formatDateTime: function formatDateTime(date) {
      return moment(date).format('HH:mm:ss');
    },
    deleteBilling: function deleteBilling(id) {
      var _this3 = this;

      if (confirm("Do you really want to delete entry?")) {
        axios__WEBPACK_IMPORTED_MODULE_0___default().get('/api/billing/delete/' + id).then(function (response) {
          _this3.$store.dispatch('fetchBillings');

          console.log(response);
        }, function (error) {
          console.log(error);
        });
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/Pages/Billing.vue":
/*!****************************************!*\
  !*** ./resources/js/Pages/Billing.vue ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Billing_vue_vue_type_template_id_260a753c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Billing.vue?vue&type=template&id=260a753c& */ "./resources/js/Pages/Billing.vue?vue&type=template&id=260a753c&");
/* harmony import */ var _Billing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Billing.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Billing.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Billing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Billing_vue_vue_type_template_id_260a753c___WEBPACK_IMPORTED_MODULE_0__.render,
  _Billing_vue_vue_type_template_id_260a753c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Billing.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Billing.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./resources/js/Pages/Billing.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Billing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Billing.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Billing.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Billing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Pages/Billing.vue?vue&type=template&id=260a753c&":
/*!***********************************************************************!*\
  !*** ./resources/js/Pages/Billing.vue?vue&type=template&id=260a753c& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Billing_vue_vue_type_template_id_260a753c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Billing_vue_vue_type_template_id_260a753c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Billing_vue_vue_type_template_id_260a753c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Billing.vue?vue&type=template&id=260a753c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Billing.vue?vue&type=template&id=260a753c&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Billing.vue?vue&type=template&id=260a753c&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Billing.vue?vue&type=template&id=260a753c& ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "content-wrapper" }, [
    _vm._m(0),
    _vm._v(" "),
    _c("section", { staticClass: "content" }, [
      _c("div", { staticClass: "container-fluid" }, [
        _c("div", { staticClass: "row" }, [
          _c(
            "div",
            { staticClass: "col-12" },
            [
              _c(
                "div",
                { staticClass: "card", staticStyle: { padding: "10px" } },
                [
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-md-3" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.activity_name,
                            expression: "activity_name"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          id: "activity_name",
                          disabled: _vm.started,
                          placeholder: this.$store.state.activity_name
                        },
                        domProps: { value: _vm.activity_name },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.activity_name = $event.target.value
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-3" }, [
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.selected_case,
                              expression: "selected_case"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            id: "selected_case",
                            disabled: _vm.started,
                            name: "selected_case"
                          },
                          on: {
                            change: function($event) {
                              var $$selectedVal = Array.prototype.filter
                                .call($event.target.options, function(o) {
                                  return o.selected
                                })
                                .map(function(o) {
                                  var val = "_value" in o ? o._value : o.value
                                  return val
                                })
                              _vm.selected_case = $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            }
                          }
                        },
                        [
                          _c("option", { attrs: { disabled: "", value: "" } }, [
                            _vm._v(_vm._s(this.$store.state.selected_case))
                          ]),
                          _vm._v(" "),
                          _vm._l(_vm.cases, function(legal_case) {
                            return _c(
                              "option",
                              {
                                key: legal_case.id,
                                domProps: { value: legal_case.id }
                              },
                              [_vm._v(_vm._s(legal_case.name))]
                            )
                          })
                        ],
                        2
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-1" }),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-2" }, [
                      _c("p", { staticStyle: { "font-size": "25px" } }, [
                        _vm._v(_vm._s(_vm.formattedElapsedTime))
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-3" }, [
                      _c("div", { staticClass: "input-group-append" }, [
                        !_vm.started
                          ? _c(
                              "button",
                              {
                                staticClass: "btn btn-block btn-primary",
                                attrs: {
                                  disabled: !_vm.isComplete,
                                  id: "add-new-event",
                                  type: "button"
                                },
                                on: { click: _vm.startTimer }
                              },
                              [_vm._v("Start Timer")]
                            )
                          : _c("div", { staticClass: "row" }, [
                              _c("div", { staticClass: "col-md-12" }, [
                                _c(
                                  "button",
                                  {
                                    staticClass: "btn btn-block btn-danger",
                                    attrs: {
                                      id: "add-new-event",
                                      type: "button"
                                    },
                                    on: { click: _vm.stopTimer }
                                  },
                                  [_vm._v("Stop Timer")]
                                )
                              ])
                            ])
                      ])
                    ])
                  ])
                ]
              ),
              _vm._v(" "),
              _vm._l(_vm.billings, function(bill, index) {
                return _c(
                  "div",
                  { key: bill.id, staticClass: "card" },
                  [
                    _c("div", { staticClass: "card-footer clearfix" }, [
                      _c(
                        "span",
                        { staticClass: "btn btn-sm btn-info float-left" },
                        [_vm._v(_vm._s(_vm.formatDate(index)))]
                      ),
                      _vm._v(" "),
                      _c(
                        "span",
                        {
                          staticClass: "float-right",
                          staticStyle: { color: "black", "font-size": "18px" }
                        },
                        [_vm._v("Total: " + _vm._s(_vm.formatTime(bill.total)))]
                      )
                    ]),
                    _vm._v(" "),
                    _vm._l(bill.data, function(item) {
                      return _c(
                        "div",
                        { key: item.id, staticClass: "container" },
                        [
                          _c(
                            "div",
                            {
                              staticClass: "row",
                              staticStyle: {
                                padding: "10px",
                                "border-bottom": "1px #ccc solid"
                              }
                            },
                            [
                              _c("div", { staticClass: "col-md-3" }, [
                                _vm._v(_vm._s(item.activity_name))
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-md-3" }, [
                                _vm._v(_vm._s(item.legal_case.name))
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-md-3" }, [
                                _c("div", { staticClass: "row" }, [
                                  _c("div", { staticClass: "col-md-5" }, [
                                    _vm._v(
                                      _vm._s(
                                        _vm.formatDateTime(item.start_time)
                                      )
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "col-md-2" }, [
                                    _vm._v("-")
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "col-md-5" }, [
                                    _vm._v(
                                      _vm._s(_vm.formatDateTime(item.end_time))
                                    )
                                  ])
                                ])
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-md-2 " }, [
                                _c("span", { staticClass: "float-right" }, [
                                  _vm._v(_vm._s(_vm.formatTime(item.duration)))
                                ])
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-md-1 " }, [
                                _c(
                                  "button",
                                  {
                                    staticClass: "btn btn-danger float-right",
                                    on: {
                                      click: function($event) {
                                        return _vm.deleteBilling(item.id)
                                      }
                                    }
                                  },
                                  [_vm._v("Delete")]
                                )
                              ])
                            ]
                          )
                        ]
                      )
                    })
                  ],
                  2
                )
              })
            ],
            2
          )
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("section", { staticClass: "content-header" }, [
      _c("div", { staticClass: "container-fluid" }, [
        _c("div", { staticClass: "row mb-2" }, [
          _c("div", { staticClass: "col-sm-6" }, [_c("h1", [_vm._v("Bills")])]),
          _vm._v(" "),
          _c("div", { staticClass: "col-sm-6" }, [
            _c("ol", { staticClass: "breadcrumb float-sm-right" }, [
              _c("li", { staticClass: "breadcrumb-item" }, [
                _c("a", { attrs: { href: "#" } }, [_vm._v("Home")])
              ]),
              _vm._v(" "),
              _c("li", { staticClass: "breadcrumb-item active" }, [
                _vm._v("All Bills")
              ])
            ])
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ })

}]);