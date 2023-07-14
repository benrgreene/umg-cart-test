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

/***/ "./src/scripts/components/ProductGrid.js":
/*!***********************************************!*\
  !*** ./src/scripts/components/ProductGrid.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadNextPage\": () => (/* binding */ loadNextPage),\n/* harmony export */   \"performProductFetch\": () => (/* binding */ performProductFetch),\n/* harmony export */   \"setupActiveFilters\": () => (/* binding */ setupActiveFilters)\n/* harmony export */ });\n/* harmony import */ var scripts_utils_QuerySelectors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! scripts/utils/QuerySelectors.js */ \"./src/scripts/utils/QuerySelectors.js\");\n\nconst collectionState = {\n  aborter: false\n};\n\nwindow.clearFilter = filter => {\n  const filterCheckboxEl = document.querySelector(`input[id=\"${filter}\"]:checked`) || false;\n\n  if (filterCheckboxEl) {\n    filterCheckboxEl.click();\n  }\n};\n\nwindow.clearAllFilters = () => {\n  const filterCheckboxEls = document.querySelectorAll(`[data-collection-filters-container] input:checked`) || [];\n  [...filterCheckboxEls].forEach(el => el.click());\n};\n\nconst shopifyProductFetch = (setURL, getFilters, collectionID, searchTerm, pageOn) => {\n  if (collectionState.aborter) collectionState.aborter.abort();\n  collectionState.aborter = new AbortController();\n  const signal = collectionState.aborter.signal;\n  const filterQuery = Alpine.store('collectionInfo').activeFilters.join('&');\n  const searchQuery = searchTerm ? `&q=${searchTerm}` : '';\n  const sortByEl = document.querySelector('[data-sort-by]') || false;\n  const sortBy = sortByEl ? sortByEl.value : false;\n  const fullSearchQuery = `${filterQuery}${searchQuery}${sortBy ? '&sort_by=' + sortBy : ''}`;\n  const collectionURL = `/collections/${collectionID}/?view=data-view&page=${pageOn}&${fullSearchQuery}`;\n  const displayURL = `${window.location.origin}${window.location.pathname}?${fullSearchQuery}`;\n  return fetch(collectionURL, {\n    signal\n  }).then(blob => blob.json()).then(collectionInfo => {\n    collectionState.aborter = false;\n    const currentProducts = Alpine.store('collectionInfo').products || [];\n    const handlesFound = [];\n    const newProducts = pageOn === 1 ? [...collectionInfo.products] : [...currentProducts, ...collectionInfo.products].filter(product => {\n      if (handlesFound.includes(product.handle)) return false;\n      handlesFound.push(product.handle);\n      return true;\n    });\n    Alpine.store('collectionInfo').setProducts(newProducts);\n    Alpine.store('collectionInfo').setProductsCount(collectionInfo.totalProductCount);\n\n    if (getFilters) {\n      Alpine.store('collectionInfo').setFilters(collectionInfo.filters);\n    }\n\n    if (setURL) {\n      history.pushState({}, 'title', displayURL);\n    }\n\n    Alpine.store('collectionInfo').setPageOn(pageOn + 1);\n  });\n};\n\nconst performProductFetch = ({\n  getFilters = false,\n  collectionID = false,\n  searchTerm = false,\n  setURL = false,\n  pageLimit = false\n}) => {\n  const pageOn = Alpine.store('collectionInfo').pageOn || 1;\n  return shopifyProductFetch(setURL, getFilters, collectionID, searchTerm, pageOn);\n};\nwindow.performProductFetch = performProductFetch;\nconst loadNextPage = ({\n  collectionID = false,\n  searchTerm = false,\n  toLoad = 6\n}) => {\n  const pageOn = window.state.collectionProducts.length / toLoad + 1;\n  shopifyProductFetch(true, false, collectionID, searchTerm, pageOn);\n};\nconst setupActiveFilters = () => {\n  const url = new URL(window.location.href);\n  const allParams = new URLSearchParams(url.search);\n  const filters = [];\n\n  for (const [key, value] of allParams) {\n    filters.push(`${key}=${value}`);\n  }\n\n  Alpine.store('collectionInfo').activeFilters = filters;\n};\n\n//# sourceURL=webpack://flannel-panda/./src/scripts/components/ProductGrid.js?");

/***/ }),

/***/ "./src/scripts/templates/collection.js":
/*!*********************************************!*\
  !*** ./src/scripts/templates/collection.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var scripts_components_ProductGrid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! scripts/components/ProductGrid */ \"./src/scripts/components/ProductGrid.js\");\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  (0,scripts_components_ProductGrid__WEBPACK_IMPORTED_MODULE_0__.setupActiveFilters)();\n  (0,scripts_components_ProductGrid__WEBPACK_IMPORTED_MODULE_0__.performProductFetch)({\n    getFilters: true,\n    collectionID: window.brg.collection.handle\n  });\n});\n\n//# sourceURL=webpack://flannel-panda/./src/scripts/templates/collection.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/templates/collection.js");
/******/ 	
/******/ })()
;