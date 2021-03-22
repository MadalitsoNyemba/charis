(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_SingleCase_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/SingleCase.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/SingleCase.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'SingleCase',
  data: function data() {
    return {
      documents: [],
      billings: []
    };
  },
  mounted: function mounted() {
    var _this = this;

    axios.get('/api/cases/singleCase/1').then(function (res) {
      _this.documents = res.data.documents_data, _this.billings = res.data.billings_data, console.log(res.data.data);
    })["catch"](function (err) {
      console.log(err);
    });
  },
  methods: {
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
      var _this2 = this;

      if (confirm("Do you really want to delete entry?")) {
        axios.get('/api/billing/delete/' + id).then(function (response) {
          _this2.$store.dispatch('fetchBillings');

          console.log(response);
        }, function (error) {
          console.log(error);
        });
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/Pages/SingleCase.vue":
/*!*******************************************!*\
  !*** ./resources/js/Pages/SingleCase.vue ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SingleCase_vue_vue_type_template_id_47b68a01___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SingleCase.vue?vue&type=template&id=47b68a01& */ "./resources/js/Pages/SingleCase.vue?vue&type=template&id=47b68a01&");
/* harmony import */ var _SingleCase_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SingleCase.vue?vue&type=script&lang=js& */ "./resources/js/Pages/SingleCase.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _SingleCase_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _SingleCase_vue_vue_type_template_id_47b68a01___WEBPACK_IMPORTED_MODULE_0__.render,
  _SingleCase_vue_vue_type_template_id_47b68a01___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/SingleCase.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/SingleCase.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/Pages/SingleCase.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleCase_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SingleCase.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/SingleCase.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleCase_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Pages/SingleCase.vue?vue&type=template&id=47b68a01&":
/*!**************************************************************************!*\
  !*** ./resources/js/Pages/SingleCase.vue?vue&type=template&id=47b68a01& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleCase_vue_vue_type_template_id_47b68a01___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleCase_vue_vue_type_template_id_47b68a01___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleCase_vue_vue_type_template_id_47b68a01___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SingleCase.vue?vue&type=template&id=47b68a01& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/SingleCase.vue?vue&type=template&id=47b68a01&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/SingleCase.vue?vue&type=template&id=47b68a01&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/SingleCase.vue?vue&type=template&id=47b68a01& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
              _c("br"),
              _c("br"),
              _vm._v(" "),
              _vm._m(1),
              _vm._v(" "),
              _c("div", { staticClass: "card" }, [
                _c(
                  "ul",
                  _vm._l(_vm.documents, function(docs) {
                    return _c("li", { key: docs.id }, [
                      _vm._v(_vm._s(docs.name))
                    ])
                  }),
                  0
                )
              ]),
              _vm._v(" "),
              _c("br"),
              _c("br"),
              _vm._v(" "),
              _c("hr"),
              _vm._v(" "),
              _c("br"),
              _c("br"),
              _vm._v(" "),
              _vm._m(2),
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
          _c("div", { staticClass: "col-sm-6" }, [
            _c("h1", [_vm._v("Single Case")])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-sm-6" }, [
            _c("ol", { staticClass: "breadcrumb float-sm-right" }, [
              _c("li", { staticClass: "breadcrumb-item" }, [
                _c("a", { attrs: { href: "#" } }, [_vm._v("Home")])
              ]),
              _vm._v(" "),
              _c("li", { staticClass: "breadcrumb-item active" }, [
                _vm._v("Case Management")
              ])
            ])
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("span", { staticClass: "btn btn-sm btn-warning float-right" }, [
        _vm._v("Upload Document")
      ]),
      _vm._v(" "),
      _c("h2", [_vm._v("Documents")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("span", { staticClass: "btn btn-sm btn-warning float-right" }, [
        _vm._v("Print Receipt")
      ]),
      _vm._v(" "),
      _c("h2", [_vm._v("Billings")])
    ])
  }
]
render._withStripped = true



/***/ })

}]);