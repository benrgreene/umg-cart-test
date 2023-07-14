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

/***/ "./src/scripts/components/Dialogr.js":
/*!*******************************************!*\
  !*** ./src/scripts/components/Dialogr.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setupDialogr\": () => (/* binding */ setupDialogr)\n/* harmony export */ });\n/* harmony import */ var _utils_QuerySelectors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/QuerySelectors.js */ \"./src/scripts/utils/QuerySelectors.js\");\n/* harmony import */ var _utils_Images_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/Images.js */ \"./src/scripts/utils/Images.js\");\n\n\nconst dom = {};\nconst qs = {\n  dialogr: 'dialogr',\n  content: 'dialog-content'\n};\nconst qsAll = {\n  closeDialog: 'dialogr-close',\n  dialogImg: 'dialogr-img'\n};\nconst setupDialogr = () => {\n  const dialogrEl = document.createElement('dialog');\n  dialogrEl.setAttribute(qs.dialogr, 'true');\n  dialogrEl.classList.add('dialogr');\n  dialogrEl.innerHTML = `\n\t\t<button dialogr-close class=\"dialogr__close\" aria-label=\"close modal\"></button>\n\t\t<div class=\"dialogr__content\">\n\t\t\t<img dialog-content class=\"dialogr__image\" />\n\t\t</div>\n\t`;\n  document.body.appendChild(dialogrEl);\n  (0,_utils_QuerySelectors_js__WEBPACK_IMPORTED_MODULE_0__.cacheDom)(dom, qs, qsAll);\n  document.addEventListener('click', event => {\n    if (event.target.getAttribute(qsAll.dialogImg)) {\n      const oldSource = event.target.getAttribute('src');\n      const altTag = event.target.getAttribute('alt');\n      dom.content.setAttribute('src', oldSource.replace('_850', '_1800'));\n      dom.content.setAttribute('alt', altTag);\n      dom.dialogr.showModal();\n    }\n  });\n  dom.closeDialog.forEach(closeButton => {\n    closeButton.addEventListener('click', () => dom.dialogr.close());\n  });\n};\n\n//# sourceURL=webpack://flannel-panda/./src/scripts/components/Dialogr.js?");

/***/ }),

/***/ "./src/scripts/components/ProductPositioner.js":
/*!*****************************************************!*\
  !*** ./src/scripts/components/ProductPositioner.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"scrollToLastProduct\": () => (/* binding */ scrollToLastProduct),\n/* harmony export */   \"setPreviousProductLink\": () => (/* binding */ setPreviousProductLink)\n/* harmony export */ });\nconst setPreviousProductLink = () => {\n  sessionStorage.setItem('previousProductLink', `/products/${window.brg.product.handle}`);\n};\nconst scrollToLastProduct = () => {\n  setTimeout(() => {\n    const productURL = sessionStorage.getItem('previousProductLink');\n\n    if (productURL) {\n      const productTile = document.querySelector(`[href=\"${productURL}\"]`) || false;\n\n      if (productTile) {\n        const productTileOffset = productTile.getBoundingClientRect().top;\n        window.scrollTo({\n          top: productTileOffset + document.documentElement.scrollTop - 200\n        });\n      }\n    }\n  }, 600);\n};\n\n//# sourceURL=webpack://flannel-panda/./src/scripts/components/ProductPositioner.js?");

/***/ }),

/***/ "./src/scripts/components/YotpoData.js":
/*!*********************************************!*\
  !*** ./src/scripts/components/YotpoData.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fetchProductReviews\": () => (/* binding */ fetchProductReviews)\n/* harmony export */ });\nconst APIKEY = 'aAwwPwEU5koJPrLPvBAAo3RXaEpJlqm1KxCZMrcu';\n\nwindow.formatReviewDate = oldDate => {\n  return new Date(oldDate).toLocaleDateString();\n};\n\nconst fetchPageReviews = (pageOn = 1) => {\n  const {\n    product\n  } = window.brg;\n  const url = `https://api-cdn.yotpo.com/v3/storefront/store/${APIKEY}/product/${product.id}/reviews?page=${pageOn}`;\n  fetch(url).then(blob => blob.json()).then(response => {\n    console.log(response);\n    Alpine.store('productInfo').setProductReviews(response);\n  });\n};\n\nconst fetchProductReviews = () => {\n  fetchPageReviews();\n};\n\n//# sourceURL=webpack://flannel-panda/./src/scripts/components/YotpoData.js?");

/***/ }),

/***/ "./src/scripts/templates/product.js":
/*!******************************************!*\
  !*** ./src/scripts/templates/product.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var scripts_components_ProductPositioner_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! scripts/components/ProductPositioner.js */ \"./src/scripts/components/ProductPositioner.js\");\n/* harmony import */ var scripts_components_Dialogr_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! scripts/components/Dialogr.js */ \"./src/scripts/components/Dialogr.js\");\n/* harmony import */ var scripts_components_YotpoData_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! scripts/components/YotpoData.js */ \"./src/scripts/components/YotpoData.js\");\n/* harmony import */ var scripts_utils_Product_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! scripts/utils/Product.js */ \"./src/scripts/utils/Product.js\");\n\n\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  (0,scripts_components_ProductPositioner_js__WEBPACK_IMPORTED_MODULE_0__.setPreviousProductLink)();\n  (0,scripts_components_Dialogr_js__WEBPACK_IMPORTED_MODULE_1__.setupDialogr)();\n  (0,scripts_components_YotpoData_js__WEBPACK_IMPORTED_MODULE_2__.fetchProductReviews)();\n});\n\nwindow.goToGallery = index => {\n  const image = document.querySelector(`[gallery-image=\"gallery-image-${index}\"]`);\n  image.scrollIntoView({\n    behavior: 'smooth',\n    block: 'nearest'\n  });\n};\n\n//# sourceURL=webpack://flannel-panda/./src/scripts/templates/product.js?");

/***/ }),

/***/ "./src/scripts/utils/Cart.js":
/*!***********************************!*\
  !*** ./src/scripts/utils/Cart.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addToCart\": () => (/* binding */ addToCart),\n/* harmony export */   \"getCart\": () => (/* binding */ getCart),\n/* harmony export */   \"removeFromCart\": () => (/* binding */ removeFromCart),\n/* harmony export */   \"updateCart\": () => (/* binding */ updateCart)\n/* harmony export */ });\nconst getCart = () => {\n  return fetch('/cart?view=json').then(blob => blob.json()).then(cart => {\n    Alpine.store('cartInfo').setCartInfo(cart);\n    return cart;\n  });\n};\nconst addToCart = ({\n  id,\n  quantity,\n  properties = {},\n  sellingPlan = false\n}) => {\n  const item = {\n    id,\n    quantity,\n    properties\n  };\n\n  if (sellingPlan) {\n    item.selling_plan = sellingPlan;\n  }\n\n  return fetch('/cart/add.js', {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json'\n    },\n    body: JSON.stringify({\n      items: [item]\n    })\n  }).then(() => Alpine.store('cartInfo').setCartOpen(true)).then(response => getCart());\n};\n\nwindow.atc = id => {\n  addToCart({\n    id,\n    quantity: 1\n  }).then(newCart => {\n    console.log(newCart);\n  });\n};\n\nconst updateCart = ({\n  key = false,\n  variantID = false,\n  quantity = 0,\n  attributes = false,\n  note = false\n}) => {\n  const updatesBody = {\n    updates: {}\n  };\n\n  if (variantID) {\n    updatesBody.updates[variantID] = quantity;\n  }\n\n  if (attributes) {\n    updatesBody.attributes = attributes;\n  }\n\n  if (key) {\n    updatesBody.updates[key] = quantity;\n  }\n\n  if (note) {\n    updatesBody.note = note;\n  }\n\n  return fetch('/cart/update.js', {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json'\n    },\n    body: JSON.stringify(updatesBody)\n  }).then(blob => blob.json()).then(updates => {\n    return getCart();\n  });\n};\nconst removeFromCart = lineItem => {\n  return fetch('/cart/change.js', {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json'\n    },\n    body: JSON.stringify({\n      id: lineItem.key,\n      quantity: 0\n    })\n  }).then(blob => blob.json()).then(data => getCart());\n};\n\n//# sourceURL=webpack://flannel-panda/./src/scripts/utils/Cart.js?");

/***/ }),

/***/ "./src/scripts/utils/Images.js":
/*!*************************************!*\
  !*** ./src/scripts/utils/Images.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"resizeImage\": () => (/* binding */ resizeImage)\n/* harmony export */ });\nconst resizeImage = (src, size) => {\n  return src.replace(/_(pico|icon|thumb|small|compact|medium|large|1400x|grande|original|1024x1024|2048x2048|master|x700)+\\./g, '.').replace(/\\.jpg|\\.png|\\.gif|\\.jpeg/g, function (match) {\n    return `_${size}${match}`;\n  });\n};\nwindow.resizeImage = resizeImage;\n\n//# sourceURL=webpack://flannel-panda/./src/scripts/utils/Images.js?");

/***/ }),

/***/ "./src/scripts/utils/Product.js":
/*!**************************************!*\
  !*** ./src/scripts/utils/Product.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Cart_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Cart.js */ \"./src/scripts/utils/Cart.js\");\n\n\nconst getProductImages = (product, selectedVariant) => {\n  if (selectedVariant && selectedVariant.images.length > 0) {\n    return selectedVariant.images;\n  }\n\n  return product.media;\n};\n\nwindow.addProductToCart = () => {\n  const {\n    selectedVariant\n  } = Alpine.store('productInfo');\n  (0,_Cart_js__WEBPACK_IMPORTED_MODULE_0__.addToCart)({\n    id: selectedVariant.id,\n    quantity: 1\n  });\n};\n\nwindow.setVariantFromOptions = options => {\n  const {\n    product\n  } = Alpine.store('productInfo');\n  const selectedValues = Object.values(options);\n  const variant = product.variants.find(variant => {\n    return selectedValues.every(value => variant.options.includes(value));\n  });\n\n  if (variant) {\n    const {\n      origin,\n      pathname\n    } = window.location;\n    window.history.replaceState({}, '', `${origin}${pathname}?variant=${variant.id}`);\n  }\n\n  Alpine.store('productInfo').setImages(getProductImages(product, variant));\n  Alpine.store('productInfo').setSelectedVariant(variant ? variant : {\n    available: false\n  });\n};\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  const {\n    product,\n    selectedVariant\n  } = Alpine.store('productInfo');\n  Alpine.store('productInfo').setImages(getProductImages(product, selectedVariant));\n});\n\n//# sourceURL=webpack://flannel-panda/./src/scripts/utils/Product.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/templates/product.js");
/******/ 	
/******/ })()
;