/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/js/main.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/components/_action-panel.js":
/*!********************************************!*\
  !*** ./src/js/components/_action-panel.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.addEventListener('DOMContentLoaded', function () {
  var actionButtonList = document.querySelectorAll('.action-panel__button');
  if (!actionButtonList.length) return;
  actionButtonList.forEach(function (btn) {
    btn.addEventListener('click', function () {
      btn.classList.toggle('action-panel__button--active');
    });
  });
});

/***/ }),

/***/ "./src/js/components/_page-birthday.js":
/*!*********************************************!*\
  !*** ./src/js/components/_page-birthday.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var imask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! imask */ "./node_modules/imask/esm/index.js");

document.addEventListener('DOMContentLoaded', function () {
  var birthdayInput = document.querySelector('.page-birthday__input');
  if (!birthdayInput) return;
  Object(imask__WEBPACK_IMPORTED_MODULE_0__["default"])(birthdayInput, {
    mask: 'mm/dd/yyyy',
    definitions: {
      d: {
        mask: '0',
        placeholderChar: '0'
      },
      m: {
        mask: '0',
        placeholderChar: '0'
      },
      y: {
        mask: '0',
        placeholderChar: '0'
      }
    },
    lazy: false
  });
});

/***/ }),

/***/ "./src/js/components/_page-notification.js":
/*!*************************************************!*\
  !*** ./src/js/components/_page-notification.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);

document.addEventListener('DOMContentLoaded', function () {
  var container = document.querySelector('.page-notification__swipe-container');
  if (!container) return;
  var manager = new hammerjs__WEBPACK_IMPORTED_MODULE_0___default.a.Manager(container);
  var Swipe = new hammerjs__WEBPACK_IMPORTED_MODULE_0___default.a.Swipe();
  manager.add(Swipe);
  manager.on('swipe', function (e) {
    var direction = e.offsetDirection;
    var elems = container.querySelectorAll('.page-notification__swipe-elem:not(.page-notification__swipe-elem--like):not(.page-notification__swipe-elem--dislike)');
    if (elems.length) {
      var el = elems[elems.length - 1];
      if (direction === 8) {
        el.classList.add('page-notification__swipe-elem--like');
        setTimeout(function () {
          el.remove();
        }, 400);
      } else if (direction === 16) {
        el.classList.add('page-notification__swipe-elem--dislike');
        setTimeout(function () {
          el.remove();
        }, 400);
      }
    }
  });
});

/***/ }),

/***/ "./src/js/components/_page-photo.js":
/*!******************************************!*\
  !*** ./src/js/components/_page-photo.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");

document.addEventListener('DOMContentLoaded', function () {
  var photoSlider = document.querySelector('.page-photo__slider');
  if (!photoSlider) return;
  new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](photoSlider, {
    slidesPerView: 2,
    spaceBetween: 16,
    centeredSlides: true,
    initialSlide: 1,
    slideActiveClass: 'page-photo__slide--active'
  });
});

/***/ }),

/***/ "./src/js/components/_page-search-options.js":
/*!***************************************************!*\
  !*** ./src/js/components/_page-search-options.js ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var nouislider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nouislider */ "./node_modules/nouislider/dist/nouislider.mjs");

document.addEventListener('DOMContentLoaded', function () {
  var ageSlider = document.querySelector('.range--age .range__slider');
  if (ageSlider) {
    nouislider__WEBPACK_IMPORTED_MODULE_0__["default"].create(ageSlider, {
      range: {
        'min': 14,
        'max': 50
      },
      start: [20, 38],
      step: 1,
      behaviour: 'tap-drag',
      connect: true
    });
    var ageMinValue = document.querySelector('.range--age .range__value-min');
    var ageMaxValue = document.querySelector('.range--age .range__value-max');
    ageSlider.noUiSlider.on('update', function (values, handle) {
      ageMinValue.innerText = Math.trunc(values[0]);
      ageMaxValue.innerText = Math.trunc(values[1]);
    });
  }
  var distanceSlider = document.querySelector('.range--distance .range__slider');
  if (distanceSlider) {
    nouislider__WEBPACK_IMPORTED_MODULE_0__["default"].create(distanceSlider, {
      range: {
        'min': 1,
        'max': 200
      },
      start: 10,
      step: 1,
      behaviour: 'tap-drag',
      connect: true
    });
    var distanceValue = document.querySelector('.range--distance .range__value');
    distanceSlider.noUiSlider.on('update', function (values, handle) {
      distanceValue.innerText = Math.trunc(values[0]);
    });
  }
});

/***/ }),

/***/ "./src/js/components/_page-search.js":
/*!*******************************************!*\
  !*** ./src/js/components/_page-search.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");

document.addEventListener('DOMContentLoaded', function () {
  var photoSliderList = document.querySelectorAll('.user__slider');
  if (!photoSliderList.length) return;
  photoSliderList.forEach(function (photoSlider) {
    new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](photoSlider, {
      slidesPerView: 1,
      loop: true
    });
  });
});

/***/ }),

/***/ "./src/js/components/_page-tariffs.js":
/*!********************************************!*\
  !*** ./src/js/components/_page-tariffs.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");

document.addEventListener('DOMContentLoaded', function () {
  var photoSlider = document.querySelector('.page-tariffs__slider');
  if (!photoSlider) return;
  new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](photoSlider, {
    slidesPerView: 2,
    centeredSlides: true,
    initialSlide: 1,
    slideActiveClass: 'page-tariffs__slide-box--active'
  });
});

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vendor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vendor */ "./src/js/vendor.js");
/* harmony import */ var _vendor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vendor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_page_birthday__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/_page-birthday */ "./src/js/components/_page-birthday.js");
/* harmony import */ var _components_page_photo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/_page-photo */ "./src/js/components/_page-photo.js");
/* harmony import */ var _components_page_search_options__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/_page-search-options */ "./src/js/components/_page-search-options.js");
/* harmony import */ var _components_page_search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/_page-search */ "./src/js/components/_page-search.js");
/* harmony import */ var _components_action_panel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/_action-panel */ "./src/js/components/_action-panel.js");
/* harmony import */ var _components_action_panel__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_components_action_panel__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_page_tariffs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/_page-tariffs */ "./src/js/components/_page-tariffs.js");
/* harmony import */ var _components_page_notification__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/_page-notification */ "./src/js/components/_page-notification.js");









/***/ }),

/***/ "./src/js/vendor.js":
/*!**************************!*\
  !*** ./src/js/vendor.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ })

/******/ });
//# sourceMappingURL=main.js.map