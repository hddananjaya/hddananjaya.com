webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Cards/Cards.js":
/*!***********************************!*\
  !*** ./components/Cards/Cards.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Cards_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Cards.module.css */ "./components/Cards/Cards.module.css");
/* harmony import */ var _Cards_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Cards_module_css__WEBPACK_IMPORTED_MODULE_1__);
var _this = undefined,
    _jsxFileName = "/home/caretaker/Documents/hddananjaya.com/components/Cards/Cards.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Cards = function Cards(_ref) {
  var cardData = _ref.cardData;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: _Cards_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.cardHolder,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }, cardData.map(function (card) {
    return __jsx("div", {
      key: card.title,
      className: _Cards_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.cardOuter,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 13
      }
    }, __jsx("img", {
      className: _Cards_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.cardImage,
      src: card.image,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 15
      }
    }), __jsx("p", {
      className: _Cards_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.title,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 15
      }
    }, card.description), __jsx("div", {
      className: _Cards_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.btnHolder,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 15
      }
    }, card.liveURL ? __jsx("a", {
      href: card.liveURL,
      target: "_blank",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 19
      }
    }, __jsx("input", {
      className: _Cards_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.btn,
      type: "button",
      value: "LIVE",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 21
      }
    })) : null, __jsx("a", {
      href: card.sourceURL,
      target: "_blank",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 17
      }
    }, __jsx("input", {
      className: _Cards_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.btn,
      type: "button",
      value: "SOURCE",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 19
      }
    }))));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Cards);

/***/ })

})
//# sourceMappingURL=index.js.9cf802b97e770381c35a.hot-update.js.map