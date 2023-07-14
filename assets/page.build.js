/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/components/MobilePageMenu.js":
/*!**************************************************!*\
  !*** ./src/scripts/components/MobilePageMenu.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setupPageNavigation\": () => (/* binding */ setupPageNavigation)\n/* harmony export */ });\n/* harmony import */ var _utils_QuerySelectors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/QuerySelectors.js */ \"./src/scripts/utils/QuerySelectors.js\");\n\nconst dom = {};\nconst qsAll = {\n  menus: 'page-menu'\n};\n\nconst setupMenuListener = menu => {\n  menu.addEventListener('change', event => {\n    window.location.href = menu.value;\n  });\n};\n\nconst setupPageNavigation = () => {\n  (0,_utils_QuerySelectors_js__WEBPACK_IMPORTED_MODULE_0__.cacheDom)(dom, {}, qsAll);\n  setTimeout(() => {\n    [...dom.menus].forEach(menu => {\n      const options = menu.querySelectorAll('option');\n      options.forEach((option, index) => {\n        if (option.hasAttribute('selected')) {\n          menu.options.selectedIndex = index;\n        }\n      });\n      setupMenuListener(menu);\n    });\n  }, 100);\n};\n\n//# sourceURL=webpack://flannel-panda/./src/scripts/components/MobilePageMenu.js?");

/***/ }),

/***/ "./src/scripts/templates/page.js":
/*!***************************************!*\
  !*** ./src/scripts/templates/page.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var scripts_components_MobilePageMenu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! scripts/components/MobilePageMenu.js */ \"./src/scripts/components/MobilePageMenu.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  (0,scripts_components_MobilePageMenu_js__WEBPACK_IMPORTED_MODULE_0__.setupPageNavigation)();\n});\n\n//# sourceURL=webpack://flannel-panda/./src/scripts/templates/page.js?");

/***/ }),

/***/ "./src/scripts/utils/QuerySelectors.js":
/*!*********************************************!*\
  !*** ./src/scripts/utils/QuerySelectors.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"URLQueryParams\": () => (/* binding */ URLQueryParams),\n/* harmony export */   \"cacheDom\": () => (/* binding */ cacheDom)\n/* harmony export */ });\n/*\n * Caches the DOM for a given component.\n *\n * @param {Object} dom: the object that will hold all saved nodes\n * @param {Object} selectors: an object holding all queries for single element queries. Keys are names to reference by and value is the selector.\n * @param {Object} selectorsAll: an object holding all queries for multi element queries. Keys are names to reference by and value is the selector.\n * @param {boolean} assumeAttributes: whether the function should build queries with square brackets for data attribute querying.\n *\n *\n * Example:\n *   const dom = {};\n *   const qs = {\n *     modal: 'data-recharge-modal',\n *     title: 'data-recharge-modal-title',\n *     content: 'data-recharge-modal-content',\n *   };\n *   const qsAll = {\n *     closeButtons: 'data-close-recharge-modal'\n *   };\n *\n *   ...\n *\n *   cacheDom(dom, qs, qsAll);\n *\n */\nconst cacheDom = (dom, selectors = {}, selectorsAll = {}, assumeAttributes = true) => {\n  Object.keys(selectors).forEach(selectorName => {\n    const selector = selectors[selectorName];\n    const qs = assumeAttributes ? `[${selector}]` : selector;\n    dom[selectorName] = document.querySelector(qs) || false;\n  });\n  Object.keys(selectorsAll).forEach(selectorName => {\n    const selector = selectorsAll[selectorName];\n    const qs = assumeAttributes ? `[${selector}]` : selector;\n    dom[selectorName] = [...document.querySelectorAll(qs)];\n  });\n};\n/*\n * Returns object with the different query parameters\n *\n * Example:\n *    if URL contains ?view=alternate&pageOn=3\n *    URLQueryParams().pageOn would equal \"3\"\n */\n\nconst URLQueryParams = () => {\n  return new Proxy(new URLSearchParams(window.location.search), {\n    get: (searchParams, prop) => searchParams.get(prop)\n  });\n};\n\n//# sourceURL=webpack://flannel-panda/./src/scripts/utils/QuerySelectors.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/templates/page.js");
/******/ 	
/******/ })()
;