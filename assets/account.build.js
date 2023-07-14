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

/***/ "./src/scripts/components/Addresses.js":
/*!*********************************************!*\
  !*** ./src/scripts/components/Addresses.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setupAddresses\": () => (/* binding */ setupAddresses)\n/* harmony export */ });\n/* harmony import */ var scripts_utils_QuerySelectors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! scripts/utils/QuerySelectors.js */ \"./src/scripts/utils/QuerySelectors.js\");\n/* harmony import */ var _ShopifyAddressWrapper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShopifyAddressWrapper.js */ \"./src/scripts/components/ShopifyAddressWrapper.js\");\n\n\nconst dom = {};\nconst qs = {\n  openAddress: 'data-edit-address',\n  editModal: 'data-edit-address-modal'\n};\nconst qsAll = {\n  closeButtons: 'data-hide-address-form',\n  countrySelects: 'data-country-selects',\n  provinceSelects: 'data-province-selects'\n};\nconst setupAddresses = () => {\n  (0,scripts_utils_QuerySelectors_js__WEBPACK_IMPORTED_MODULE_0__.cacheDom)(dom, qs, qsAll);\n  if (!dom.editModal) return;\n  dom.openAddress.addEventListener('click', () => {\n    dom.editModal.show();\n    dom.countrySelects.forEach(select => {\n      const formId = select.dataset.formId;\n      new Shopify.CountryProvinceSelector(`AddressCountry_${formId}`, `AddressProvince_${formId}`, {\n        hideElement: `AddressProvinceContainer_${formId}`\n      });\n    });\n  });\n  dom.closeButtons.forEach(button => {\n    button.addEventListener('click', () => {\n      dom.editModal.close();\n    });\n  });\n};\n\n//# sourceURL=webpack://flannel-panda/./src/scripts/components/Addresses.js?");

/***/ }),

/***/ "./src/scripts/components/ShopifyAddressWrapper.js":
/*!*********************************************************!*\
  !*** ./src/scripts/components/ShopifyAddressWrapper.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst selectors = {\n  customerAddresses: '[data-customer-addresses]',\n  addressCountrySelect: '[data-address-country-select]',\n  addressContainer: '[data-address]',\n  toggleAddressButton: 'button[aria-expanded]',\n  cancelAddressButton: 'button[type=\"reset\"]',\n  deleteAddressButton: 'button[data-confirm-message]'\n};\n\nclass CustomerAddresses {\n  constructor() {\n    this.elements = this._getElements();\n    if (Object.keys(this.elements).length === 0) return;\n\n    this._setupCountries();\n\n    this._setupEventListeners();\n  }\n\n  _getElements() {\n    const container = document.querySelector(selectors.customerAddresses);\n    return container ? {\n      container,\n      addressContainer: container.querySelector(selectors.addressContainer),\n      toggleButtons: document.querySelectorAll(selectors.toggleAddressButton),\n      cancelButtons: container.querySelectorAll(selectors.cancelAddressButton),\n      deleteButtons: container.querySelectorAll(selectors.deleteAddressButton),\n      countrySelects: container.querySelectorAll(selectors.addressCountrySelect)\n    } : {};\n  }\n\n  _setupCountries() {\n    if (Shopify && Shopify.CountryProvinceSelector) {\n      // eslint-disable-next-line no-new\n      new Shopify.CountryProvinceSelector('AddressCountry_new', 'AddressProvince_new', {\n        hideElement: 'AddressProvinceContainer_new'\n      });\n      this.elements.countrySelects.forEach(select => {\n        const formId = select.dataset.formId; // eslint-disable-next-line no-new\n\n        new Shopify.CountryProvinceSelector(`AddressCountry_${formId}`, `AddressProvince_${formId}`, {\n          hideElement: `AddressProvinceContainer_${formId}`\n        });\n      });\n    }\n  }\n\n  _setupEventListeners() {\n    this.elements.toggleButtons.forEach(element => {\n      element.addEventListener('click', this._handleAddEditButtonClick);\n    });\n    this.elements.cancelButtons.forEach(element => {\n      element.addEventListener('click', this._handleCancelButtonClick);\n    });\n    this.elements.deleteButtons.forEach(element => {\n      element.addEventListener('click', this._handleDeleteButtonClick);\n    });\n  }\n\n  _toggleExpanded(target) {\n    const attributeVal = (target.getAttribute(attributes.expanded) === 'false').toString();\n    target.setAttribute(attributes.expanded, attributeVal);\n\n    if (target.closest(selectors.addressContainer)) {\n      target.closest(selectors.addressContainer).setAttribute(attributes.expanded, attributeVal);\n    }\n\n    if (target.closest('ul[role=\"list\"]')) {\n      target.closest('ul[role=\"list\"]').setAttribute(attributes.expanded, attributeVal);\n\n      if (attributeVal == 'true') {\n        document.getElementById('address_header').classList.add('hidden');\n        window.scrollTo(0, 0);\n      } else {\n        document.getElementById('address_header').classList.remove('hidden');\n      }\n    }\n  }\n\n  _handleAddEditButtonClick = ({\n    currentTarget\n  }) => {\n    this._toggleExpanded(currentTarget);\n  };\n  _handleCancelButtonClick = ({\n    currentTarget\n  }) => {\n    this._toggleExpanded(currentTarget.closest(selectors.addressContainer).querySelector(`[${attributes.expanded}]`));\n  };\n  _handleDeleteButtonClick = ({\n    currentTarget\n  }) => {\n    // eslint-disable-next-line no-alert\n    if (confirm(currentTarget.getAttribute(attributes.confirmMessage))) {\n      Shopify.postLink(currentTarget.dataset.target, {\n        parameters: {\n          _method: 'delete'\n        }\n      });\n    }\n  };\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomerAddresses);\n\n//# sourceURL=webpack://flannel-panda/./src/scripts/components/ShopifyAddressWrapper.js?");

/***/ }),

/***/ "./src/scripts/components/login.js":
/*!*****************************************!*\
  !*** ./src/scripts/components/login.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setupLoginForm\": () => (/* binding */ setupLoginForm)\n/* harmony export */ });\n/* harmony import */ var scripts_utils_QuerySelectors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! scripts/utils/QuerySelectors.js */ \"./src/scripts/utils/QuerySelectors.js\");\n\nconst dom = {};\nconst qs = {\n  forgotPassword: 'data-forgot-password',\n  passwordModal: 'data-forgot-modal'\n};\nconst qsAll = {\n  closeModal: 'data-close-forgot-modal'\n};\nconst setupLoginForm = () => {\n  (0,scripts_utils_QuerySelectors_js__WEBPACK_IMPORTED_MODULE_0__.cacheDom)(dom, qs, qsAll);\n  dom.forgotPassword && dom.forgotPassword.addEventListener('click', () => {\n    if (dom.passwordModal) {\n      dom.passwordModal.show();\n    }\n  });\n  dom.closeModal.forEach(closeButton => {\n    closeButton.addEventListener('click', event => {\n      event.preventDefault();\n      dom.passwordModal.close();\n    });\n  });\n};\n\n//# sourceURL=webpack://flannel-panda/./src/scripts/components/login.js?");

/***/ }),

/***/ "./src/scripts/templates/account.js":
/*!******************************************!*\
  !*** ./src/scripts/templates/account.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var scripts_components_login_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! scripts/components/login.js */ \"./src/scripts/components/login.js\");\n/* harmony import */ var scripts_components_Addresses_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! scripts/components/Addresses.js */ \"./src/scripts/components/Addresses.js\");\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  (0,scripts_components_login_js__WEBPACK_IMPORTED_MODULE_0__.setupLoginForm)();\n  (0,scripts_components_Addresses_js__WEBPACK_IMPORTED_MODULE_1__.setupAddresses)();\n});\n\n//# sourceURL=webpack://flannel-panda/./src/scripts/templates/account.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/templates/account.js");
/******/ 	
/******/ })()
;