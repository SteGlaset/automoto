/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ (() => {

eval("window.onload = () => {\n    const navLinks = document.querySelectorAll(\"a.nav-link\");\n    const sections = [...navLinks].map(link => {\n        return document.querySelector('#' + link.getAttribute(\"href\").split('#')[1])\n    });\n\n    window.addEventListener(\"scroll\", navHighlighter);\n    function navHighlighter () {\n        let scrollY = window.scrollY;\n\n        sections.forEach(section => {\n            const sectionHeight = section.offsetHeight;\n            const sectionTop = section.offsetTop - 116;\n            const sectionId = section.getAttribute(\"id\");\n            if (\n                scrollY > sectionTop &&\n                scrollY <= sectionTop + sectionHeight\n            ) {\n                document.querySelector(\".modal a.nav-link[href*=\" + sectionId + \"]\").classList.add(\"active\");\n                document.querySelector(\".navbar a.nav-link[href*=\" + sectionId + \"]\").classList.add(\"active\");\n            } else {\n                document.querySelector(\".modal a.nav-link[href*=\" + sectionId + \"]\").classList.remove(\"active\");\n                document.querySelector(\".navbar a.nav-link[href*=\" + sectionId + \"]\").classList.remove(\"active\");\n            }\n        });\n    }\n}\n\n\n\n\n\n//# sourceURL=webpack://automoto/./src/js/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/index.js"]();
/******/ 	
/******/ })()
;
