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

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/card */ \"./modules/card.js\");\n/* harmony import */ var _modules_preloader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/preloader */ \"./modules/preloader.js\");\n\r\n\r\n\r\n\r\n(0,_modules_card__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n;(0,_modules_preloader__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/card.js":
/*!*************************!*\
  !*** ./modules/card.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./modules/getData.js\");\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render */ \"./modules/render.js\");\n/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filter */ \"./modules/filter.js\");\n\r\n\r\n\r\n\r\nconst card = () => {\r\n\r\n    (0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) => {\r\n        (0,_render__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data);\r\n        (0,_filter__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(data);\r\n    });\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (card);\n\n//# sourceURL=webpack:///./modules/card.js?");

/***/ }),

/***/ "./modules/filter.js":
/*!***************************!*\
  !*** ./modules/filter.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst filter = (card) => {\r\n\r\n    const moviesId = document.getElementById('movies');\r\n    const statusId = document.getElementById('status');\r\n    const genderId = document.getElementById('gender');\r\n    const speciesId = document.getElementById('species');\r\n    const allMovies = new Set();\r\n    const allStatus = new Set();\r\n    const allGender = new Set();\r\n    const allSpecies = new Set();\r\n\r\n    const cards = document.querySelectorAll('.hero__card');\r\n\r\n    const resultsFilters = {\r\n        status: '',\r\n        gender: '',\r\n        species: ''\r\n    };\r\n\r\n    card.forEach((item) => {\r\n        if(item.movies) {\r\n            item.movies.forEach((movie) => {\r\n                allMovies.add(movie);\r\n            });\r\n        }\r\n        if(item.status) {\r\n            allStatus.add(item.status.toLowerCase());\r\n        }\r\n        if(item.gender) {\r\n            allGender.add(item.gender.toLowerCase());\r\n        }\r\n        if(item.species) {\r\n            allSpecies.add(item.species.toLowerCase());\r\n        }\r\n    });\r\n\r\n    //movies\r\n    allMovies.forEach((item) => {\r\n        const option = document.createElement('option');\r\n        option.textContent = item;\r\n        moviesId.append(option);\r\n    });\r\n\r\n    moviesId.addEventListener('change', function(event) {\r\n        const selectedMovie = event.target.value;\r\n\r\n        if (selectedMovie === '') {\r\n            cards.forEach(function(card) {\r\n                card.style.display = '';\r\n            });\r\n        }else {\r\n            cards.forEach(function(card) {\r\n                const moviesList = card.querySelectorAll('.hero__card-movies li');\r\n                const moviesArray = Array.from(moviesList).map(function(li) {\r\n                    return li.textContent;\r\n                });\r\n    \r\n                if (!moviesArray.includes(selectedMovie)) {\r\n                    card.style.display = 'none';\r\n                } else {\r\n                    card.style.display = '';\r\n                };\r\n            });\r\n        }\r\n    });\r\n\r\n    //status\r\n    allStatus.forEach((status) => {\r\n        const option = document.createElement('option');\r\n        option.textContent = status;\r\n        statusId.append(option);\r\n    });\r\n\r\n    statusId.addEventListener('change', function(event) {\r\n        const selectedStatus = event.target.value.toLowerCase();\r\n\r\n        cards.forEach(function(card) {\r\n            const cardStatus = card.getAttribute('data-status');\r\n\r\n            if (selectedStatus === '' || cardStatus === selectedStatus) {\r\n                card.style.display = '';\r\n            } else {\r\n                card.style.display = 'none';\r\n            }\r\n        });\r\n    });\r\n\r\n    //gender\r\n    allGender.forEach((gender) => {\r\n        const option = document.createElement('option');\r\n        option.textContent = gender;\r\n        genderId.append(option);\r\n    });\r\n\r\n    genderId.addEventListener('change', function(event) {\r\n        const selectedGender = event.target.value.toLowerCase();\r\n\r\n        cards.forEach(function(card) {\r\n            const cardGender = card.getAttribute('data-gender');\r\n\r\n            if (selectedGender === '' || cardGender === selectedGender) {\r\n                card.style.display = '';\r\n            } else {\r\n                card.style.display = 'none';\r\n            }\r\n        });\r\n    });\r\n\r\n    //species\r\n    allSpecies.forEach((species) => {\r\n        const option = document.createElement('option');\r\n        option.textContent = species;\r\n        speciesId.append(option);\r\n    });\r\n\r\n    speciesId.addEventListener('change', function(event) {\r\n        const selectedSpecies = event.target.value.toLowerCase();\r\n\r\n        cards.forEach(function(card) {\r\n            const cardSpecies = card.getAttribute('data-species');\r\n\r\n            if (selectedSpecies === '' || cardSpecies === selectedSpecies) {\r\n                card.style.display = '';\r\n            } else {\r\n                card.style.display = 'none';\r\n            }\r\n        });\r\n    });\r\n\r\n    //dependence\r\n    const applyFilters = () => {\r\n        cards.forEach((card) => {\r\n            const matchesStatus = resultsFilters.status === '' || card.getAttribute('data-status').toLowerCase() === resultsFilters.status;\r\n            const matchesGender = resultsFilters.gender === '' || card.getAttribute('data-gender').toLowerCase() === resultsFilters.gender;\r\n            const matchesSpecies = resultsFilters.species === '' || card.getAttribute('data-species').toLowerCase() === resultsFilters.species;\r\n    \r\n            if (matchesStatus && matchesGender && matchesSpecies) {\r\n                card.style.display = '';\r\n            } else {\r\n                card.style.display = 'none';\r\n            }\r\n        });\r\n    };\r\n    \r\n    statusId.addEventListener('change', (event) => {\r\n        resultsFilters.status = event.target.value.toLowerCase();\r\n        applyFilters();\r\n    });\r\n    \r\n    genderId.addEventListener('change', (event) => {\r\n        resultsFilters.gender = event.target.value.toLowerCase();\r\n        applyFilters();\r\n    });\r\n    \r\n    speciesId.addEventListener('change', (event) => {\r\n        resultsFilters.species = event.target.value.toLowerCase();\r\n        applyFilters();\r\n    });\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (filter);\r\n\r\n\n\n//# sourceURL=webpack:///./modules/filter.js?");

/***/ }),

/***/ "./modules/getData.js":
/*!****************************!*\
  !*** ./modules/getData.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getData = () => {\r\n\r\n    return fetch('./dbHeroes.json')\r\n        .then(response => response.json())\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getData);\n\n//# sourceURL=webpack:///./modules/getData.js?");

/***/ }),

/***/ "./modules/preloader.js":
/*!******************************!*\
  !*** ./modules/preloader.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst preloader = () => {\r\n\r\n    const preloader = document.querySelector('.preloader')\r\n    window.addEventListener('load', () => {\r\n        preloader.classList.add('hide');\r\n        setTimeout(() => {\r\n            preloader.remove();\r\n        }, 600)\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (preloader);\r\n\r\n\n\n//# sourceURL=webpack:///./modules/preloader.js?");

/***/ }),

/***/ "./modules/render.js":
/*!***************************!*\
  !*** ./modules/render.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst render = (card) => {\r\n    const cardWrapper = document.querySelector('.hero__wrapper');\r\n    cardWrapper.innerHTML = '';\r\n\r\n    card.forEach((item) => {\r\n        let cardBackContent = '';\r\n        let moviesList = '';\r\n\r\n        const keys = ['name', 'realName', 'actors', 'gender', 'species', 'citizenship', 'status', 'birthDay', 'deathDay'];\r\n        \r\n        keys.forEach(key => {\r\n            if (item[key] !== undefined) {\r\n                cardBackContent += `<div class=\"hero__list\"><span>${key}:</span> ${item[key]}</div>`;\r\n            }\r\n        });\r\n\r\n        if (item.movies && Array.isArray(item.movies)) {\r\n            moviesList = `<ul class=\"hero__card-movies\"><span>movies:</span>${\r\n                item.movies.map(movie => `<li>${movie}</li>`).join('')\r\n            }</ul>`;\r\n        }\r\n\r\n        cardWrapper.insertAdjacentHTML('beforeend', `\r\n            <div class=\"hero__card\" \r\n            data-status=\"${(item.status || '').toLowerCase()}\" \r\n            data-gender=\"${(item.gender || '').toLowerCase()}\" \r\n            data-species=\"${(item.species || '').toLowerCase()}\">\r\n                <div class=\"hero__card-front\" style=\"background-image: url('${item.photo}')\">\r\n                </div>\r\n\r\n                <div class=\"hero__card-back\">\r\n                    ${cardBackContent}  \r\n                    ${moviesList}             \r\n                </div>\r\n            </div>\r\n        `);\r\n    });\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (render);\n\n//# sourceURL=webpack:///./modules/render.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;