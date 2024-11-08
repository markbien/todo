/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Roboto-Regular.ttf */ "./src/fonts/Roboto-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Roboto-Light.ttf */ "./src/fonts/Roboto-Light.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

@font-face {
  font-family: 'RobotoRegular';
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  font-weight: 600;
}

@font-face {
  font-family: 'RobotoLight';
  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
  font-weight: 200;
}

:root {
  --main-color: black;
  --secondary-color: #181C14;
  --text-color: white;
  --accent: #F3C623;
  --text-fade: rgba(255, 255, 255, 0.65);
}

body {
  display: flex;
  min-height: 100vh;
  font-family: 'RobotoRegular', Verdana, sans-serif;
}

ul {
  list-style: none;
}

.main {
  order: 2;
  flex: 1;
  background-color: var(--main-color);
  color: var(--text-color);
  padding: 3rem;
}

.greetings {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  padding: 1rem 0;
  margin-bottom: 1.2rem;
}

.date {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.3rem;
  gap: 3px;
}

.date-today {
  font-size: 1.5rem;
  font-weight: 500;
}

.main-greeting div:first-child {
  font-size: 2rem;
}

.main-greeting div:last-child {
  font-size: 1.8rem;
  color: rgba(248, 247, 247, 0.375);
}

#add-todo {
  border-radius: 5px;
  background-color: var(--secondary-color);
  padding: 1.3rem .7rem;
  color: var(--text-fade);
  font-weight: 200;
  margin-bottom: 1rem;
  cursor: pointer;
}

.card-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  /* font-family: ''; */
}

.card,
.add-details {
  border-radius: 5px;
  background-color: var(--secondary-color);
  padding: 1.3rem .7rem;
  color: var(--text-fade);
  display: grid;
  grid-template-columns: 1fr 100px;
  gap: 1rem;
  cursor: pointer;
  position: relative;
}

.card:hover {
  background-color: #24291e;
}

.add-details {
  order: 3;
  border-radius: 0;
  width: 350px;
  display: flex;
  cursor: default;
}

.add-details form {
  width: 100%;
  display: flex;
  flex-direction: column;  
}

.div-input {
  display: flex;
  flex-direction: column;
  margin: 20px 0;
}

.div-input > * {
  margin: 5px 0;
}

.div-radio {
  margin: 5px 0 25px 0;
  display: flex;
  gap: 10px;
}

.div-input > input,
#description {
  padding: 5px;
  font-family: 'Roboto', Verdana, sans-serif;
  font-size: 1.1rem;
}

#description {
  resize: none;
}

.todo-details {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

#add-todo-btn {
  padding: 10px;
  background-color: var(--accent);
  color: var(--main-color);
  border-radius: 3px;
  border: none;
  cursor: pointer;
  font-size: 1.1rem;
  font-weight: bold;
  transition: .1s ease all;
}

#add-todo-btn:hover {
  transform: scale(1.01);
}

#add-todo-btn:active {
  transform: scale(1);
}

.right {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
}

.right > img {
  height: 1.5rem;
  width: auto;
}

.title {
  font-size: 1.5rem;
}

.description,
.due-date {
  color: var(--text-fade);
  padding-top: 3px;
  font-family: 'RobotoLight', Verdana, sans-serif;
}

nav {
  order: 1;
  width: 250px;
  padding: 1rem;
  background-color: var(--secondary-color);
  color: var(--text-color);
}

.logo {
  font-size: 2rem;
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 2.5rem;
}

.logo > img {
  height: 1.6rem;
  width: auto;
}

.list-container > h2 {
  font-size: 1.3rem;
  font-weight: 400;
  margin-bottom: 1.5rem;
}

.project,
#new-project {
  font-size: 1.1rem;
  font-weight: 250;
}

#new-project {
  color: var(--text-fade);
}

.add-project,
.edit-project {
  background-color: var(--accent);
  border-radius: 8px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.edit-project {
  color: var(--secondary-color);
  padding: 1rem .5rem;
  font-size: 1.1rem;
}

.edit-project input {
  border-radius: 5px;
}

#project-name {
  font-size: 1rem;
  font-weight: 200;
  padding: 5px 10px;
}

.options {
  text-align: center;
}

.add-project img,
.edit-project img {
  height: 20px;
  width: auto;
  padding: 0 5px;
}

.project{
  padding: 1rem .5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: .1s ease all;
}

.project:hover,
.project:hover img,
#new-project:hover {
  background-color: var(--accent);
  color: black;
  opacity: 1;
  cursor: pointer;
  border-radius: .5rem;
  font-weight: 500;
}

.project img{
  height: 1rem;
  opacity: 0;
}

.project-title {
  display: flex;
  align-items: center;
  gap: 5px;
}

.project-title:hover {
  cursor: text;
}

#new-project {
  padding: 1rem;
}

.completed {
  text-decoration: line-through;
}

.active {
  background-color: var(--accent);
  color: black;
  opacity: 1;
  cursor: pointer;
  border-radius: .5rem;
  font-weight: 500;
}

#close-window {
  position: absolute;
  height: 20px;
  right: 10px;
  cursor: pointer;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["*,\n*::before,\n*::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n@font-face {\n  font-family: 'RobotoRegular';\n  src: url('./fonts/Roboto-Regular.ttf');\n  font-weight: 600;\n}\n\n@font-face {\n  font-family: 'RobotoLight';\n  src: url('./fonts/Roboto-Light.ttf');\n  font-weight: 200;\n}\n\n:root {\n  --main-color: black;\n  --secondary-color: #181C14;\n  --text-color: white;\n  --accent: #F3C623;\n  --text-fade: rgba(255, 255, 255, 0.65);\n}\n\nbody {\n  display: flex;\n  min-height: 100vh;\n  font-family: 'RobotoRegular', Verdana, sans-serif;\n}\n\nul {\n  list-style: none;\n}\n\n.main {\n  order: 2;\n  flex: 1;\n  background-color: var(--main-color);\n  color: var(--text-color);\n  padding: 3rem;\n}\n\n.greetings {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 1.5rem;\n  padding: 1rem 0;\n  margin-bottom: 1.2rem;\n}\n\n.date {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  font-size: 1.3rem;\n  gap: 3px;\n}\n\n.date-today {\n  font-size: 1.5rem;\n  font-weight: 500;\n}\n\n.main-greeting div:first-child {\n  font-size: 2rem;\n}\n\n.main-greeting div:last-child {\n  font-size: 1.8rem;\n  color: rgba(248, 247, 247, 0.375);\n}\n\n#add-todo {\n  border-radius: 5px;\n  background-color: var(--secondary-color);\n  padding: 1.3rem .7rem;\n  color: var(--text-fade);\n  font-weight: 200;\n  margin-bottom: 1rem;\n  cursor: pointer;\n}\n\n.card-container {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  /* font-family: ''; */\n}\n\n.card,\n.add-details {\n  border-radius: 5px;\n  background-color: var(--secondary-color);\n  padding: 1.3rem .7rem;\n  color: var(--text-fade);\n  display: grid;\n  grid-template-columns: 1fr 100px;\n  gap: 1rem;\n  cursor: pointer;\n  position: relative;\n}\n\n.card:hover {\n  background-color: #24291e;\n}\n\n.add-details {\n  order: 3;\n  border-radius: 0;\n  width: 350px;\n  display: flex;\n  cursor: default;\n}\n\n.add-details form {\n  width: 100%;\n  display: flex;\n  flex-direction: column;  \n}\n\n.div-input {\n  display: flex;\n  flex-direction: column;\n  margin: 20px 0;\n}\n\n.div-input > * {\n  margin: 5px 0;\n}\n\n.div-radio {\n  margin: 5px 0 25px 0;\n  display: flex;\n  gap: 10px;\n}\n\n.div-input > input,\n#description {\n  padding: 5px;\n  font-family: 'Roboto', Verdana, sans-serif;\n  font-size: 1.1rem;\n}\n\n#description {\n  resize: none;\n}\n\n.todo-details {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n\n#add-todo-btn {\n  padding: 10px;\n  background-color: var(--accent);\n  color: var(--main-color);\n  border-radius: 3px;\n  border: none;\n  cursor: pointer;\n  font-size: 1.1rem;\n  font-weight: bold;\n  transition: .1s ease all;\n}\n\n#add-todo-btn:hover {\n  transform: scale(1.01);\n}\n\n#add-todo-btn:active {\n  transform: scale(1);\n}\n\n.right {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 5px;\n}\n\n.right > img {\n  height: 1.5rem;\n  width: auto;\n}\n\n.title {\n  font-size: 1.5rem;\n}\n\n.description,\n.due-date {\n  color: var(--text-fade);\n  padding-top: 3px;\n  font-family: 'RobotoLight', Verdana, sans-serif;\n}\n\nnav {\n  order: 1;\n  width: 250px;\n  padding: 1rem;\n  background-color: var(--secondary-color);\n  color: var(--text-color);\n}\n\n.logo {\n  font-size: 2rem;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  margin-bottom: 2.5rem;\n}\n\n.logo > img {\n  height: 1.6rem;\n  width: auto;\n}\n\n.list-container > h2 {\n  font-size: 1.3rem;\n  font-weight: 400;\n  margin-bottom: 1.5rem;\n}\n\n.project,\n#new-project {\n  font-size: 1.1rem;\n  font-weight: 250;\n}\n\n#new-project {\n  color: var(--text-fade);\n}\n\n.add-project,\n.edit-project {\n  background-color: var(--accent);\n  border-radius: 8px;\n  padding: 5px;\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n\n.edit-project {\n  color: var(--secondary-color);\n  padding: 1rem .5rem;\n  font-size: 1.1rem;\n}\n\n.edit-project input {\n  border-radius: 5px;\n}\n\n#project-name {\n  font-size: 1rem;\n  font-weight: 200;\n  padding: 5px 10px;\n}\n\n.options {\n  text-align: center;\n}\n\n.add-project img,\n.edit-project img {\n  height: 20px;\n  width: auto;\n  padding: 0 5px;\n}\n\n.project{\n  padding: 1rem .5rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  transition: .1s ease all;\n}\n\n.project:hover,\n.project:hover img,\n#new-project:hover {\n  background-color: var(--accent);\n  color: black;\n  opacity: 1;\n  cursor: pointer;\n  border-radius: .5rem;\n  font-weight: 500;\n}\n\n.project img{\n  height: 1rem;\n  opacity: 0;\n}\n\n.project-title {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\n\n.project-title:hover {\n  cursor: text;\n}\n\n#new-project {\n  padding: 1rem;\n}\n\n.completed {\n  text-decoration: line-through;\n}\n\n.active {\n  background-color: var(--accent);\n  color: black;\n  opacity: 1;\n  cursor: pointer;\n  border-radius: .5rem;\n  font-weight: 500;\n}\n\n#close-window {\n  position: absolute;\n  height: 20px;\n  right: 10px;\n  cursor: pointer;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/dom/div-input.js":
/*!**************************************!*\
  !*** ./src/modules/dom/div-input.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createAddDetails: () => (/* binding */ createAddDetails),
/* harmony export */   createAddProject: () => (/* binding */ createAddProject),
/* harmony export */   createEditDetails: () => (/* binding */ createEditDetails)
/* harmony export */ });
/* harmony import */ var _dom_elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-elements */ "./src/modules/dom/dom-elements.js");
/* harmony import */ var _images_check_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../images/check.png */ "./src/images/check.png");
/* harmony import */ var _images_remove_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../images/remove.png */ "./src/images/remove.png");




function createDivInputText(labelFor, labelText, inputId, placeholder){
  const div = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_0__.createDiv)('div-input');
  const label = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_0__.createLabel)(labelFor, labelText);
  const input = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_0__.createInputText)(inputId, placeholder);

  div.appendChild(label);
  div.appendChild(input);

  return div;
}

function createDivTextArea(){
  const div = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_0__.createDiv)('div-input');
  const label = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_0__.createLabel)('description', 'Description');
  const textarea = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_0__.createTextArea)();

  div.appendChild(label);
  div.appendChild(textarea);

  return div;
}

function createDivInputDate(labelFor, labelText, inputId){
  const div = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_0__.createDiv)('div-input');
  const label = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_0__.createLabel)(labelFor, labelText);
  const date = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_0__.createInputDate)(inputId);

  div.appendChild(label);
  div.appendChild(date);

  return div;
}

function createDivInputRadio(){
  const div = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_0__.createDiv)('div-radio');
  div.textContent = 'Completed';

  const radioTrue = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_0__.createInputRadio)('status', 'true');
  const labelTrue = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_0__.createLabel)('true', 'Yes');

  const radioFalse = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_0__.createInputRadio)('status', 'false');
  const labelFalse = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_0__.createLabel)('false', 'No');

  div.appendChild(radioTrue);
  div.appendChild(labelTrue);
  div.appendChild(radioFalse);
  div.appendChild(labelFalse);

  return div;
}

function createAddDetails(){
  const divAddDetails = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_0__.createDiv)('add-details');
  const img = document.createElement('img');
  img.setAttribute('id', 'close-window');
  img.src = _images_remove_png__WEBPACK_IMPORTED_MODULE_2__;

  const form = document.createElement('form');
  form.setAttribute('action', '#');
  form.setAttribute('data-to-do-id','Test ID');

  const divTitle = createDivInputText('title', 'Title', 'title', 'Enter a new title...');
  const divDescription = createDivTextArea();
  const divDueDate = createDivInputDate('due-date', 'Due Date', 'due-date');
  const inputSubmit = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_0__.createInputSubmit)('add-todo-btn', 'Add new todo');

  form.appendChild(divTitle);
  form.appendChild(divDescription);
  form.appendChild(divDueDate);
  form.appendChild(inputSubmit);

  divAddDetails.appendChild(img);
  divAddDetails.appendChild(form);

  img.addEventListener('click', function(){
    this.parentElement.parentElement.removeChild(divAddDetails)
  });

  inputSubmit.addEventListener('click', e => {
    e.preventDefault();
  })

  return divAddDetails;
}

function createAddProject(){
  const li = document.createElement('li');
  li.classList.add('add-project');
  
  const inputProjectName = document.createElement('input');
  inputProjectName.setAttribute('type', 'text');
  inputProjectName.setAttribute('id', 'project-name');
  inputProjectName.setAttribute('placeholder', 'Enter project name...');

  const optionsDiv = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_0__.createDiv)('options');
  const saveBtn = document.createElement('img');
  saveBtn.setAttribute('id', 'save-new-project');
  saveBtn.src = _images_check_png__WEBPACK_IMPORTED_MODULE_1__;
  const deleteBtn = document.createElement('img');
  deleteBtn.setAttribute('id', 'delete-new-project');
  deleteBtn.src = _images_remove_png__WEBPACK_IMPORTED_MODULE_2__;
  optionsDiv.appendChild(saveBtn);
  optionsDiv.appendChild(deleteBtn);

  li.appendChild(inputProjectName);
  li.appendChild(optionsDiv);

  return li;
}

function createEditDetails(currentTitle, currentDescription, currentDueDate, currentStatus){
  const divAddDetails = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_0__.createDiv)('add-details');
  const img = document.createElement('img');
  img.setAttribute('id', 'close-window');
  img.src = _images_remove_png__WEBPACK_IMPORTED_MODULE_2__;

  const form = document.createElement('form');
  form.setAttribute('action', '#');
  form.setAttribute('data-to-do-id','Test ID');

  const divTitle = createDivInputText('title', 'Current Title', 'title', `Enter a new title...`);
  divTitle.lastChild.value = currentTitle;
  const divDescription = createDivTextArea();
  divDescription.lastChild.value = currentDescription;
  const divDueDate = createDivInputDate('due-date', 'Due Date', 'due-date');
  divDueDate.lastChild.value = currentDueDate;
  const divIsCompleted = createDivInputRadio();
  const inputSubmit = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_0__.createInputSubmit)('add-todo-btn', 'Save Changes');

  if (currentStatus === true) {
    divIsCompleted.childNodes[1].checked = true;
  } else {
    divIsCompleted.childNodes[3].checked = true;
  }

  form.appendChild(divTitle);
  form.appendChild(divDescription);
  form.appendChild(divDueDate);
  form.appendChild(divIsCompleted);
  form.appendChild(inputSubmit);

  divAddDetails.appendChild(img);
  divAddDetails.appendChild(form);

  img.addEventListener('click', function(){
    this.parentElement.parentElement.removeChild(divAddDetails)
  });

  inputSubmit.addEventListener('click', e => {
    e.preventDefault();
  })

  return divAddDetails;
}

/***/ }),

/***/ "./src/modules/dom/dom-elements.js":
/*!*****************************************!*\
  !*** ./src/modules/dom/dom-elements.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createDiv: () => (/* binding */ createDiv),
/* harmony export */   createInputDate: () => (/* binding */ createInputDate),
/* harmony export */   createInputRadio: () => (/* binding */ createInputRadio),
/* harmony export */   createInputSubmit: () => (/* binding */ createInputSubmit),
/* harmony export */   createInputText: () => (/* binding */ createInputText),
/* harmony export */   createLabel: () => (/* binding */ createLabel),
/* harmony export */   createLi: () => (/* binding */ createLi),
/* harmony export */   createPara: () => (/* binding */ createPara),
/* harmony export */   createTextArea: () => (/* binding */ createTextArea)
/* harmony export */ });
const createDiv = (newClass) => {
  const div = document.createElement('div');
  if (newClass !== undefined) div.classList.add(newClass);
  return div;
}

const createLabel = (labelFor, labelText) => {
  const label = document.createElement('label');
  label.setAttribute('for', labelFor);
  label.textContent = labelText;
  return label;
};

const createInputText = (inputId, placeholder) => {
  const input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.setAttribute('id', inputId);;
  input.setAttribute('placeholder', placeholder);

  return input;
};

const createTextArea = () => {
  const textarea = document.createElement('textarea');
  textarea.setAttribute('id', 'description');
  textarea.setAttribute('placeholder', 'Enter a new description...');
  textarea.setAttribute('rows', '12');

  return textarea;
};

const createInputDate = (inputId) => {
  const input = document.createElement('input');
  input.setAttribute('type', 'date');
  input.setAttribute('id', inputId);

  return input;
};

const createInputRadio = (inputName, inputId) => {
  const input = document.createElement('input');
  input.setAttribute('type', 'radio');
  input.setAttribute('name', inputName);
  input.setAttribute('id', inputId);

  return input;
};

const createInputSubmit = (inputId, value) => {
  const input = document.createElement('input');
  input.setAttribute('id', inputId);
  input.setAttribute('type', 'submit');
  input.setAttribute('value', value);

  return input;
};

const createLi = (className) => {
  const li = document.createElement('li');
  li.classList.add(className);
  
  return li;
}

const createPara = (className, text) => {
  const p = document.createElement('p');
  p.classList.add(className);
  p.textContent = text;

  return p;
}

/***/ }),

/***/ "./src/modules/dom/landing-page.js":
/*!*****************************************!*\
  !*** ./src/modules/dom/landing-page.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ initializeWebsiteDom)
/* harmony export */ });
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav */ "./src/modules/dom/nav.js");
/* harmony import */ var _main_div__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main-div */ "./src/modules/dom/main-div.js");



const nav = (0,_nav__WEBPACK_IMPORTED_MODULE_0__["default"])();
const main = (0,_main_div__WEBPACK_IMPORTED_MODULE_1__["default"])("Nov", "4", "Morning");

function initializeWebsiteDom() {
  document.body.appendChild(nav);
  document.body.appendChild(main);
}

// document.addEventListener("DOMContentLoaded", function () {
//   // const cardContainer = document.querySelector(".card-container");

//   const card1 = createCard(
//     12345,
//     "Clean aircon",
//     "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio veritatis enim minus? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio veritatis enim minus? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio veritatis enim minus?",
//     "2024-12-06"
//   );
  
//   // cardContainer.appendChild(card1);
// });

/***/ }),

/***/ "./src/modules/dom/main-div.js":
/*!*************************************!*\
  !*** ./src/modules/dom/main-div.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createCard: () => (/* binding */ createCard),
/* harmony export */   "default": () => (/* binding */ createMainDiv)
/* harmony export */ });
/* harmony import */ var _dom_elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-elements */ "./src/modules/dom/dom-elements.js");
/* harmony import */ var _images_edit_colored_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../images/edit-colored.png */ "./src/images/edit-colored.png");
/* harmony import */ var _images_trash_colored_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../images/trash-colored.png */ "./src/images/trash-colored.png");




function createMainDiv(month, day, time){
  const mainDiv = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_0__.createDiv)('main');

  mainDiv.appendChild(createGreetings(month, day, time));
  mainDiv.appendChild(createMainContainer());

  return mainDiv;
}

function createGreetings(month, day, time){
  const greetingsDiv = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_0__.createDiv)('greetings');

  const dateDom = createDateDom(month, day);
  const mainGreetingDom = createMainGreeting(time);

  greetingsDiv.appendChild(dateDom);
  greetingsDiv.appendChild(mainGreetingDom);

  return greetingsDiv;
}

function createDateDom(month, day){
  const dateDiv = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_0__.createDiv)("date");

  const monthDiv = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_0__.createDiv)("date-month");
  monthDiv.textContent = month;

  const dayDiv = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_0__.createDiv)('date-today');
  dayDiv.textContent = day;

  dateDiv.appendChild(monthDiv);
  dateDiv.appendChild(dayDiv);

  return dateDiv;
}

function createMainGreeting(time){
  const mainGreetingDiv = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_0__.createDiv)('main-greeting');

  const greetingDiv = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_0__.createDiv)();
  greetingDiv.innerHTML = `Good <span>${time}</span>.`;

  const planDiv = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_0__.createDiv)();
  planDiv.textContent = `What's your plan for today?`;

  mainGreetingDiv.appendChild(greetingDiv);
  mainGreetingDiv.appendChild(planDiv);

  return mainGreetingDiv;
}

function createMainContainer(){
  const mainContainerDiv = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_0__.createDiv)('main-container')
  
  const addTodoDiv = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_0__.createDiv)();
  addTodoDiv.setAttribute('id', 'add-todo');
  addTodoDiv.textContent = `+ Add Todo`;

  const cardContainerUl = document.createElement('ul');
  cardContainerUl.classList.add('card-container');

  mainContainerDiv.appendChild(addTodoDiv);
  mainContainerDiv.appendChild(cardContainerUl);

  return mainContainerDiv;
}

function createCard(newId, newTitle, newDescription, newDueDate, completionStatus){
  const card = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_0__.createLi)('card');
  card.dataset.todoId = newId;
  card.dataset.completionStatus = completionStatus;

  const leftDiv = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_0__.createDiv)('left');
  const todoDetailsDiv = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_0__.createDiv)('todo-details');
  const title = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_0__.createPara)('title', newTitle);
  const description = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_0__.createPara)('description', newDescription);
  const dueDate = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_0__.createPara)('due-date', "");
  dueDate.innerHTML = `Due: <span class='due-date'>${newDueDate}</span>`;
  leftDiv.appendChild(todoDetailsDiv);
  todoDetailsDiv.appendChild(title);
  todoDetailsDiv.appendChild(description);
  todoDetailsDiv.appendChild(dueDate);

  if (completionStatus === true) {
    title.classList.add('completed');
    description.classList.add('completed');
    dueDate.classList.add('completed');
  }

  const rightDiv = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_0__.createDiv)('right');
  const edit = document.createElement('img');
  edit.src = _images_edit_colored_png__WEBPACK_IMPORTED_MODULE_1__;
  const trash = document.createElement('img');
  trash.src = _images_trash_colored_png__WEBPACK_IMPORTED_MODULE_2__;
  rightDiv.appendChild(edit);
  rightDiv.appendChild(trash);

  card.appendChild(leftDiv);
  card.appendChild(rightDiv);

  const cardContainer = document.querySelector('.card-container');
  cardContainer.appendChild(card);

  return card;
}

/***/ }),

/***/ "./src/modules/dom/nav.js":
/*!********************************!*\
  !*** ./src/modules/dom/nav.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addProjectToNavInDOM: () => (/* binding */ addProjectToNavInDOM),
/* harmony export */   createDefaultProject: () => (/* binding */ createDefaultProject),
/* harmony export */   "default": () => (/* binding */ createNav),
/* harmony export */   removeProjectFromNavInDOM: () => (/* binding */ removeProjectFromNavInDOM)
/* harmony export */ });
/* harmony import */ var _dom_elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-elements */ "./src/modules/dom/dom-elements.js");
/* harmony import */ var _images_checklist_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../images/checklist.png */ "./src/images/checklist.png");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../project */ "./src/modules/project.js");




function createNav(){
  const nav = document.createElement('nav');

  nav.appendChild(createLogo())
  nav.appendChild(createListContainer());;

  return nav;
}

function createLogo(){
  const logoDiv = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_0__.createDiv)('logo');
  const img = document.createElement('img');
  img.src = _images_checklist_png__WEBPACK_IMPORTED_MODULE_1__;
  logoDiv.innerHTML = `Todoodoo`;
  logoDiv.appendChild(img);

  return logoDiv;
}

function createListContainer(){
  const listContainer = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_0__.createDiv)('list-container');

  const h2 = document.createElement('h2');
  h2.textContent = `My Projects`;

  listContainer.appendChild(h2);
  listContainer.appendChild(createProjectContainer());
  listContainer.appendChild(createNewProjectBtn());

  return listContainer;
}

function createNewProjectBtn() {
  const newProject = document.createElement('div');
  newProject.setAttribute('id', 'new-project');
  newProject.innerHTML = `<span>+</span> New Project`;

  return newProject;
}

function createProjectContainer(){
  const projectContainer = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_0__.createDiv)('project-container')
  projectContainer.dataset.activeProject = 'default';
  const ul = document.createElement('ul');

  // ul.appendChild(createDefaultProject());
  projectContainer.appendChild(ul);

  return projectContainer;
}

function createDefaultProject(newProjectId, newProjectName){
  const defaultProject = document.createElement('li');
  defaultProject.dataset.projectId = newProjectId;
  defaultProject.classList.add('project', 'active');
  const defaultPara = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_0__.createPara)("project-title", newProjectName);
  defaultProject.appendChild(defaultPara);

  return defaultProject;
}

function addProjectToNavInDOM(project){
  const ul = document.querySelector('.project-container > ul');
  ul.appendChild(project);
}

function removeProjectFromNavInDOM(project) {
  const ul = document.querySelector('.project-container > ul');
  ul.removeChild(project);
}

/***/ }),

/***/ "./src/modules/dom/project-dom.js":
/*!****************************************!*\
  !*** ./src/modules/dom/project-dom.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createProjectDom: () => (/* binding */ createProjectDom),
/* harmony export */   editProjectDom: () => (/* binding */ editProjectDom)
/* harmony export */ });
/* harmony import */ var _dom_elements_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-elements.js */ "./src/modules/dom/dom-elements.js");
/* harmony import */ var _images_edit_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../images/edit.png */ "./src/images/edit.png");
/* harmony import */ var _images_trash_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../images/trash.png */ "./src/images/trash.png");
/* harmony import */ var _images_check_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../images/check.png */ "./src/images/check.png");
/* harmony import */ var _images_remove_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../images/remove.png */ "./src/images/remove.png");






const createProjectDom = (projectId, projectName) => {
  const li = document.createElement('li');
  li.classList.add('project');
  li.dataset.projectId = projectId;

  const title = document.createElement('p');
  title.textContent = projectName;
  title.classList.add('project-title');

  const div = (0,_dom_elements_js__WEBPACK_IMPORTED_MODULE_0__.createDiv)();
  const editImg = document.createElement('img');
  editImg.src = _images_edit_png__WEBPACK_IMPORTED_MODULE_1__;
  const trashImg = document.createElement('img');
  trashImg.src = _images_trash_png__WEBPACK_IMPORTED_MODULE_2__;

  li.appendChild(title);
  li.appendChild(div);
  div.appendChild(editImg);
  div.appendChild(trashImg);

  return li;
};

const editProjectDom = (currentProjectName, currentProjectId) => {
  const li = (0,_dom_elements_js__WEBPACK_IMPORTED_MODULE_0__.createLi)('edit-project');
  li.dataset.projectId = currentProjectId;

  const projectTitle = (0,_dom_elements_js__WEBPACK_IMPORTED_MODULE_0__.createPara)('project-title', "Edit this");
  projectTitle.innerHTML = `Old Name: <span>${currentProjectName}</span>`;

  const projectName = (0,_dom_elements_js__WEBPACK_IMPORTED_MODULE_0__.createInputText)('project-name', 'Enter new project name...');

  const options = (0,_dom_elements_js__WEBPACK_IMPORTED_MODULE_0__.createDiv)('options');
  const checkImg = document.createElement('img');
  checkImg.src = _images_check_png__WEBPACK_IMPORTED_MODULE_3__;
  const removeImg = document.createElement('img');
  removeImg.src = _images_remove_png__WEBPACK_IMPORTED_MODULE_4__;

  options.appendChild(checkImg);
  options.appendChild(removeImg);

  li.appendChild(projectTitle);
  li.appendChild(projectName);
  li.appendChild(options);

  return li;
}

/***/ }),

/***/ "./src/modules/project-collection.js":
/*!*******************************************!*\
  !*** ./src/modules/project-collection.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ projectCollection)
/* harmony export */ });
function projectCollection() {
  const collection = [];
  const addProject = project => collection.push(project);

  const findProjectIndex = projectId => {
    return collection.findIndex(project => {
      return project.getId() === projectId;
    });
  };

  const findProjectName = projectName => {
    return collection.findIndex(project => {
      return project.getName() === projectName;
    });
  }

  const removeProject = index => {
    collection.splice(index, 1);
  }

  const printProjectDetails = () =>{
    return collection.forEach(project => {
      project.printDetails();
    });
  }

  const mapProjectName = () => {
    return collection.map(project => {
      return project.getId();
    });
  }

  const mapProjectNameAndId = () => {
    return collection.map(project => {      
      return {
        id: project.getId(),
        name: project.getName(),
      };
    });
  };

  const getProject = index => {
    return collection[index];
  };

  const convertToJSON = () => {
    return JSON.stringify(printAll());
  }

  const printAll = () => {
    return collection.map(project => {
      return {
        id: project.getId(),
        name: project.getName(),
        todos: project.getTodos(),
      }
    })
  }

  return {
    addProject,
    findProjectIndex,
    findProjectName,
    removeProject,
    printProjectDetails,
    mapProjectName,
    getProject,
    convertToJSON,
    mapProjectNameAndId,
    printAll
  }
};

/***/ }),

/***/ "./src/modules/project.js":
/*!********************************!*\
  !*** ./src/modules/project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ project)
/* harmony export */ });
function project(id, name){
  const getId = ()=> id;
  const getName = ()=> name;
  const setName = newName => name = newName;

  const listOfTodos = [];
  const addATodo = todo => listOfTodos.push(todo);
  const getTodoIndex = id => {
    return listOfTodos.findIndex(todo => {
      return todo.getId() === id;
    });
  };
  const getTodoIndexById = todoId => {
    return listOfTodos.findIndex(todo => {
      return todo.getId() === todoId;
    });
  };
  const removeATodo = index => {
    listOfTodos.splice(index, 1);
  };
  const printTodos = ()=> {
    listOfTodos.forEach(todo => {
      todo.printDetails();
    });
  };
  const printDetails = ()=> {
    console.log(`ID: ${getId()}\nName: ${getName()}`);
  };

  const getTodos = () => {
    return listOfTodos.map(todo => {
      return {
        id: todo.getId(),
        title: todo.getTitle(),
        description: todo.getDescription(),
        dueDate: todo.getDueDate(),
        completionStatus: todo.getStatus(),
      };
    });
  };

  const getTodo = (todoId) => {
    return listOfTodos.find(todo => {
      return todo.getId() === todoId;
    })
  };

  return {
    getId,
    getName,
    setName,
    addATodo,
    getTodoIndex,
    removeATodo,
    printTodos,
    printDetails,
    getTodos,
    getTodoIndexById,
    getTodo
  }
}

/***/ }),

/***/ "./src/modules/storage.js":
/*!********************************!*\
  !*** ./src/modules/storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   exportDataToStorage: () => (/* binding */ exportDataToStorage),
/* harmony export */   importDataFromStorage: () => (/* binding */ importDataFromStorage)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/modules/project.js");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo */ "./src/modules/todo.js");



function importDataFromStorage(storage){
  checkThatStorageExists();
  let projectCollection = JSON.parse(localStorage.getItem('projectCollection'));
  checkThatDefaultProjectExists(projectCollection);

  projectCollection.forEach(proj => {
    const newProject = (0,_project__WEBPACK_IMPORTED_MODULE_0__["default"])(proj.id, proj.name);

    if (proj.todos !== undefined) {
      proj.todos.forEach(myTodo => {
        const newTodo = (0,_todo__WEBPACK_IMPORTED_MODULE_1__["default"])(myTodo.id, myTodo.title, myTodo.description, myTodo.dueDate)
        if (myTodo.completionStatus === 'true') newTodo.setStatus('true');
        newProject.addATodo(newTodo);
      });
    }

    storage.addProject(newProject);
  });

  return projectCollection;
}

function exportDataToStorage(storage){
  localStorage.setItem("projectCollection", storage.convertToJSON());
}

function checkThatStorageExists(){
  let projectCollection = JSON.parse(localStorage.getItem('projectCollection'));
  if (projectCollection === null) {
    localStorage.setItem('projectCollection', '[]');
  }
}

function checkThatDefaultProjectExists(projectCollection){
  const index = projectCollection.findIndex(item => {
    return item.id === 'default';
  });

  if (index !== -1) return;
  const defaultProject = {
    id: 'default',
    name: 'Default',
  };

  projectCollection.unshift(defaultProject);
}

/***/ }),

/***/ "./src/modules/todo.js":
/*!*****************************!*\
  !*** ./src/modules/todo.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ todo)
/* harmony export */ });
function todo(id, title, description, dueDate){
  const getId = ()=> id;
  const getTitle = ()=> title;
  const getDescription = ()=> description;
  const getDueDate = ()=> dueDate;
  let isCompleted = false;
  const getStatus = () => isCompleted;
  
  const setTitle = newTitle => title = newTitle;
  const setDescription = newDesc => description = newDesc;
  const setDueDate = newDueDate => dueDate = newDueDate;
  const setStatus = newStatus => isCompleted = newStatus;

  const printDetails = ()=> {
    console.log(`ID: ${getId()}\nTitle: ${getTitle()}\nDescription: ${getDescription()}\nDue Date: ${getDueDate()}`);
  }

  return {
    getId,
    getTitle,
    getDescription,
    getDueDate,
    setTitle,
    setDescription,
    setDueDate,
    getStatus,
    setStatus,
    printDetails
  }
}

/***/ }),

/***/ "./src/fonts/Roboto-Light.ttf":
/*!************************************!*\
  !*** ./src/fonts/Roboto-Light.ttf ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "839cb7309f46fed11436.ttf";

/***/ }),

/***/ "./src/fonts/Roboto-Regular.ttf":
/*!**************************************!*\
  !*** ./src/fonts/Roboto-Regular.ttf ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "27f62b53b93858475a7f.ttf";

/***/ }),

/***/ "./src/images/check.png":
/*!******************************!*\
  !*** ./src/images/check.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d10dfa068c457feda160.png";

/***/ }),

/***/ "./src/images/checklist.png":
/*!**********************************!*\
  !*** ./src/images/checklist.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "30c38b95ae25a4707b5d.png";

/***/ }),

/***/ "./src/images/edit-colored.png":
/*!*************************************!*\
  !*** ./src/images/edit-colored.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c20a026b1fac425e7f06.png";

/***/ }),

/***/ "./src/images/edit.png":
/*!*****************************!*\
  !*** ./src/images/edit.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bb356f0978be836c7d3b.png";

/***/ }),

/***/ "./src/images/remove.png":
/*!*******************************!*\
  !*** ./src/images/remove.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "99215c12f6c6d35d3ab7.png";

/***/ }),

/***/ "./src/images/trash-colored.png":
/*!**************************************!*\
  !*** ./src/images/trash-colored.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2ea99cefc3809d6cfe5e.png";

/***/ }),

/***/ "./src/images/trash.png":
/*!******************************!*\
  !*** ./src/images/trash.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8967d40c606998cbef9f.png";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_dom_landing_page_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/dom/landing-page.js */ "./src/modules/dom/landing-page.js");
/* harmony import */ var _modules_dom_div_input_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/dom/div-input.js */ "./src/modules/dom/div-input.js");
/* harmony import */ var _modules_project_collection_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/project-collection.js */ "./src/modules/project-collection.js");
/* harmony import */ var _modules_project_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/project.js */ "./src/modules/project.js");
/* harmony import */ var _modules_dom_nav_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/dom/nav.js */ "./src/modules/dom/nav.js");
/* harmony import */ var _modules_dom_project_dom_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/dom/project-dom.js */ "./src/modules/dom/project-dom.js");
/* harmony import */ var _modules_storage_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/storage.js */ "./src/modules/storage.js");
/* harmony import */ var _modules_todo_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/todo.js */ "./src/modules/todo.js");
/* harmony import */ var _modules_dom_main_div_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/dom/main-div.js */ "./src/modules/dom/main-div.js");











(0,_modules_dom_landing_page_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
const projectCollection = initializeStorage();

loadProjects(projectCollection);

function initializeStorage() {
  const newProjectCollection = (0,_modules_project_collection_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
  (0,_modules_storage_js__WEBPACK_IMPORTED_MODULE_7__.importDataFromStorage)(newProjectCollection);
  return newProjectCollection;
}

document.addEventListener("DOMContentLoaded", function () {
  addEventListenerToNewProject();
});

function addEventListenerToNewProject() {
  const newProjectBtn = document.querySelector("#new-project");
  const projectContainer = document.querySelector(".project-container > ul");

  newProjectBtn.addEventListener("click", function () {
    if (document.querySelector(".add-project") !== null) return; // Make sure that add new project window is not duplicated;
    projectContainer.appendChild((0,_modules_dom_div_input_js__WEBPACK_IMPORTED_MODULE_2__.createAddProject)());

    attachEventRemoveDiv();
    attachEventSaveProject();
  });
}

function attachEventRemoveDiv() {
  const removeBtn = document.querySelector("#delete-new-project");
  removeBtn.addEventListener("click", function () {
    removeAddProjectDiv();
  });
}

function removeAddProjectDiv() {
  const projectContainer = document.querySelector(".project-container > ul");
  const addDiv = document.querySelector(".add-project");

  projectContainer.removeChild(addDiv);
}

function attachEventSaveProject() {
  const saveBtn = document.querySelector("#save-new-project");
  saveBtn.addEventListener("click", function () {
    // Add project here
    const projectName = document.querySelector("#project-name");
    if (saveNewProjectToCollection(projectName.value) === false) return; // Make sure that ID doesn't already exists

    removeAddProjectDiv();
  });
}

function showProjectNameAlreadyExists(newName) {
  if (projectCollection.findProjectName(newName) !== -1) {
    alert("Project name already exists. Choose another name.");
    return true;
  }
  return false;
}

function saveNewProjectToCollection(projectName) {
  projectName = projectName.trim();
  const newId = generateId(projectName);

  if (showProjectNameAlreadyExists(projectName) === true) return false;
  if (projectName === '') {
    alert('Please enter a valid project name.');
    return false;
  }

  const newProject = (0,_modules_project_js__WEBPACK_IMPORTED_MODULE_4__["default"])(newId, projectName);
  projectCollection.addProject(newProject); // Add project to collection
  // projectCollection.printProjectDetails();

  const newProjectDOM = (0,_modules_dom_project_dom_js__WEBPACK_IMPORTED_MODULE_6__.createProjectDom)(newId, projectName);
  (0,_modules_dom_nav_js__WEBPACK_IMPORTED_MODULE_5__.addProjectToNavInDOM)(newProjectDOM); // Add project to DOM, will still need to add eventlisteners here

  addEventToDeleteProject(newProjectDOM, newId);
  addEventToEditProject(newProjectDOM);

  newProjectDOM.addEventListener("click", function () {
    loadTodos(newId, this);
  });

  (0,_modules_storage_js__WEBPACK_IMPORTED_MODULE_7__.exportDataToStorage)(projectCollection);

  return true;
}

function generateId(projectName) {
  return projectName.replaceAll(" ", "").toLowerCase();
}

function loadProjects(projectCollection) {
  projectCollection.printAll().forEach((newProject) => {
    if (newProject.id === "default") {
      const defaultProject = (0,_modules_dom_nav_js__WEBPACK_IMPORTED_MODULE_5__.createDefaultProject)(
        newProject.id,
        newProject.name
      );
      (0,_modules_dom_nav_js__WEBPACK_IMPORTED_MODULE_5__.addProjectToNavInDOM)(defaultProject);

      const cardContainer = document.querySelector(".card-container");
      cardContainer.textContent = "";

      // This is to load the Default's todos first
      newProject.todos.forEach(() => {
        loadTodos(newProject.id);
      });

      defaultProject.addEventListener("click", () => {
        clearActiveProject();

        document.querySelector(".project-container").dataset.activeProject =
          "default";
        document
          .querySelector("[data-project-id='default']")
          .classList.add("active");
        loadTodos(newProject.id);
      });
    } else {
      const newProjectDOM = (0,_modules_dom_project_dom_js__WEBPACK_IMPORTED_MODULE_6__.createProjectDom)(newProject.id, newProject.name);
      (0,_modules_dom_nav_js__WEBPACK_IMPORTED_MODULE_5__.addProjectToNavInDOM)(newProjectDOM);

      newProjectDOM.addEventListener("click", function () {
        clearActiveProject();
        document.querySelector(".project-container").dataset.activeProject =
          newProject.id;
        document
          .querySelector(`[data-project-id='${newProject.id}']`)
          .classList.add("active");

        clearCardContainer();
        newProject.todos.forEach(() => {
          loadTodos(newProject.id);
        });
      });

      addEventToDeleteProject(newProjectDOM, newProject.id);
      addEventToEditProject(newProjectDOM);
    }
  });
}

function clearActiveProject() {
  const projectContainer = document.querySelector(".project-container");
  const projects = projectContainer.firstChild.childNodes;
  projects.forEach((project) => {
    project.classList.remove("active");
  });
}

function loadTodos(projectId) {
  clearCardContainer();

  const projectIndex = projectCollection.findProjectIndex(projectId);
  const todoArr = projectCollection.getProject(projectIndex).getTodos();
  todoArr.forEach((todo) => {
    const newCard = (0,_modules_dom_main_div_js__WEBPACK_IMPORTED_MODULE_9__.createCard)(
      todo.id,
      todo.title,
      todo.description,
      todo.dueDate,
      todo.completionStatus
    );
    if (todo.completionStatus === "true") {
      const todoDom = newCard.firstChild.firstChild;
      todoDom.childNodes[0].classList.add("completed");
      todoDom.childNodes[1].classList.add("completed");
      todoDom.childNodes[2].classList.add("completed");
    }

    const cardContainer = document.querySelector(".card-container");
    cardContainer.appendChild(newCard);

    const deleteImg = newCard.lastChild.lastChild;
    addEventToDeleteATodo(
      deleteImg,
      projectIndex,
      todo.id,
      cardContainer,
      newCard
    );

    const editImg = newCard.lastChild.firstChild;
    addEventToEditATodo(
      editImg,
      todo.title,
      todo.description,
      todo.dueDate,
      todo.completionStatus
    );
  });
}

function addEventToDeleteATodo(
  img,
  projectIndex,
  todoId,
  cardContainer,
  newCard
) {
  img.addEventListener("click", function () {
    const currentTodoIndex = projectCollection
      .getProject(projectIndex)
      .getTodoIndexById(todoId);
    projectCollection.getProject(projectIndex).removeATodo(currentTodoIndex);
    cardContainer.removeChild(newCard);
    (0,_modules_storage_js__WEBPACK_IMPORTED_MODULE_7__.exportDataToStorage)(projectCollection);
  });
}

function addEventToEditATodo(
  img,
  currentTitle,
  currentDescription,
  currentDueDate,
  currentStatus
) {
  img.addEventListener("click", function () {
    if (document.body.lastChild.classList.contains("add-details")) return; // Ensure no duplicate edit window appears
    const editDetails = (0,_modules_dom_div_input_js__WEBPACK_IMPORTED_MODULE_2__.createEditDetails)(
      currentTitle,
      currentDescription,
      currentDueDate,
      currentStatus
    );
    const todoFromStorageCompletionStatus =
      img.parentElement.parentElement.dataset.completionStatus;
    if (todoFromStorageCompletionStatus === "true") {
      editDetails.lastChild.childNodes[3].childNodes[1].checked = true;
    }

    document.body.appendChild(editDetails);

    const saveChangesBtn = editDetails.lastChild.lastChild;
    saveChangesBtn.addEventListener("click", () => {
      const todo = img.parentElement.parentElement;
      const todoId = todo.dataset.todoId;
      let newTitle = editDetails.lastChild.childNodes[0].lastChild.value;
      let newDescription =
        editDetails.lastChild.childNodes[1].lastChild.value;
      const newDueDate = editDetails.lastChild.childNodes[2].lastChild.value;
      const newStatus = document
        .querySelector('input[name="status"]:checked')
        .getAttribute("id");

      newTitle = newTitle.trim();
      newDescription = newDescription.trim();

      if (newTitle === '' || newDescription === '') {
        alert('Please ensure that all fields have a value.');
        return;
      }

      const projectId =
        document.querySelector(".project-container").dataset.activeProject;
      const projectIndex = projectCollection.findProjectIndex(projectId);
      const currentTodo = projectCollection
        .getProject(projectIndex)
        .getTodo(todoId);
      currentTodo.setTitle(newTitle);
      currentTodo.setDescription(newDescription);
      currentTodo.setDueDate(newDueDate);
      currentTodo.setStatus(newStatus);

      todo.firstChild.firstChild.childNodes[0].textContent = newTitle;
      todo.firstChild.firstChild.childNodes[1].textContent = newDescription;
      todo.firstChild.firstChild.childNodes[2].textContent = `Due: ${newDueDate}`;
      todo.dataset.completionStatus = newStatus;

      if (newStatus === "true") {
        todo.firstChild.firstChild.childNodes[0].classList.add("completed");
        todo.firstChild.firstChild.childNodes[1].classList.add("completed");
        todo.firstChild.firstChild.childNodes[2].classList.add("completed");
      } else {
        todo.firstChild.firstChild.childNodes[0].classList.remove("completed");
        todo.firstChild.firstChild.childNodes[1].classList.remove("completed");
        todo.firstChild.firstChild.childNodes[2].classList.remove("completed");
      }

      (0,_modules_storage_js__WEBPACK_IMPORTED_MODULE_7__.exportDataToStorage)(projectCollection);
      document.body.removeChild(editDetails);
    });
  });
}

function addEventToDeleteProject(newProjectDOM, newId) {
  const deleteImg = newProjectDOM.lastChild.lastChild;
  deleteImg.addEventListener("click", function (e) {
    e.stopPropagation();
    const index = projectCollection.findProjectIndex(newId);
    projectCollection.removeProject(index);
    (0,_modules_storage_js__WEBPACK_IMPORTED_MODULE_7__.exportDataToStorage)(projectCollection);
    (0,_modules_dom_nav_js__WEBPACK_IMPORTED_MODULE_5__.removeProjectFromNavInDOM)(newProjectDOM);
  });
}

function addEventToEditProject(newProjectDOM) {
  const editImg = newProjectDOM.lastChild.firstChild;
  const projectId = newProjectDOM.dataset.projectId;
  const projectName = newProjectDOM.firstChild.textContent;

  editImg.addEventListener("click", function () {
    const editCurrentProjectDOM = (0,_modules_dom_project_dom_js__WEBPACK_IMPORTED_MODULE_6__.editProjectDom)(projectName, projectId);
    newProjectDOM.replaceWith(editCurrentProjectDOM);
    addEventToCloseTheEditProject(editCurrentProjectDOM, newProjectDOM);
    addEventToSaveChangesAndCloseTheEditProject(editCurrentProjectDOM);
  });
}

function addEventToCloseTheEditProject(editCurrentProjectDOM, newProjectDOM) {
  const closeBtn = editCurrentProjectDOM.lastChild.lastChild;
  closeBtn.addEventListener("click", function () {
    editCurrentProjectDOM.replaceWith(newProjectDOM);
  });
}

function addEventToSaveChangesAndCloseTheEditProject(editCurrentProjectDOM) {
  const saveBtn = editCurrentProjectDOM.lastChild.firstChild;
  // const oldName = document.querySelector("p.project-title > span").textContent;
  const oldId = editCurrentProjectDOM.dataset.projectId;

  saveBtn.addEventListener("click", function () {
    const inputText = editCurrentProjectDOM.childNodes[1];
    // const newId = generateId(inputText.value);
    if (inputText.value.trim() === "") {
      alert("Please enter a valid project name.");
      return;
    }
    if (showProjectNameAlreadyExists(inputText.value)) return;

    const currentProject = projectCollection.getProject(
      projectCollection.findProjectIndex(oldId)
    );

    currentProject.setName(inputText.value.trim());

    const newProjectDOM = (0,_modules_dom_project_dom_js__WEBPACK_IMPORTED_MODULE_6__.createProjectDom)(oldId, inputText.value.trim());
    (0,_modules_dom_nav_js__WEBPACK_IMPORTED_MODULE_5__.addProjectToNavInDOM)(newProjectDOM);
    addEventToEditProject(newProjectDOM);
    addEventToDeleteProject(newProjectDOM, oldId);

    newProjectDOM.addEventListener("click", function () {
      loadTodos(oldId, this);
    });

    const parentContainer = editCurrentProjectDOM.parentElement;
    parentContainer.removeChild(editCurrentProjectDOM);

    projectCollection.printProjectDetails();

    (0,_modules_storage_js__WEBPACK_IMPORTED_MODULE_7__.exportDataToStorage)(projectCollection);
  });
}

const addTodoBtn = document.querySelector("#add-todo");
addTodoBtn.addEventListener("click", function () {
  if (document.body.lastChild.classList.contains("add-details") === true)
    return; // Prevent duplicate add todo window

  const currentProjectSelectedDOM =
    document.querySelector(".project-container");
  const currentProjectId = currentProjectSelectedDOM.dataset.activeProject;
  const currentProjectIndex =
    projectCollection.findProjectIndex(currentProjectId);

  const addTodoWindow = (0,_modules_dom_div_input_js__WEBPACK_IMPORTED_MODULE_2__.createAddDetails)();
  document.body.appendChild(addTodoWindow);

  const addTodoBtn = addTodoWindow.lastChild.lastChild;
  addTodoBtn.addEventListener("click", function () {
    let title = document.querySelector("#title").value;
    title = title.trim();

    let id = generateId(title);
    id = id.trim();

    let description = document.querySelector("#description").value;
    description = description.trim();

    const dueDate = document.querySelector("#due-date").value;


    // Make control statement to ensure that all fields are completed
    if (title === '' || description === '' || dueDate === '') {
      alert('Please make sure that all fields have value.');
      return;
    }

    const newTodo = (0,_modules_todo_js__WEBPACK_IMPORTED_MODULE_8__["default"])(id, title, description, dueDate);

    projectCollection.getProject(currentProjectIndex).addATodo(newTodo);

    // load todo in page
    const cardContainer = document.querySelector(".card-container");
    const newCard = (0,_modules_dom_main_div_js__WEBPACK_IMPORTED_MODULE_9__.createCard)(
      newTodo.getId(),
      newTodo.getTitle(),
      newTodo.getDescription(),
      newTodo.getDueDate(),
      false
    );
    cardContainer.appendChild(newCard);

    const deleteImg = newCard.lastChild.lastChild;
    const editImg = newCard.lastChild.firstChild;
    const projectIndex = projectCollection.findProjectIndex(currentProjectId);

    addEventToDeleteATodo(deleteImg, projectIndex, id, cardContainer, newCard);
    addEventToEditATodo(editImg, title, description, dueDate, false);

    (0,_modules_storage_js__WEBPACK_IMPORTED_MODULE_7__.exportDataToStorage)(projectCollection);

    document.body.removeChild(addTodoWindow);
  });
});

function clearCardContainer() {
  const cardContainer = document.querySelector(".card-container");
  cardContainer.textContent = "";
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLGlJQUE2QztBQUN6Riw0Q0FBNEMsNkhBQTJDO0FBQ3ZGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGtGQUFrRixVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxNQUFNLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLE1BQU0sWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxZQUFZLGFBQWEsV0FBVyxV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OztBQUV2QjtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL21vZHVsZXMvZG9tL2Rpdi1pbnB1dC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL21vZHVsZXMvZG9tL2RvbS1lbGVtZW50cy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL21vZHVsZXMvZG9tL2xhbmRpbmctcGFnZS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL21vZHVsZXMvZG9tL21haW4tZGl2LmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvbW9kdWxlcy9kb20vbmF2LmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvbW9kdWxlcy9kb20vcHJvamVjdC1kb20uanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9tb2R1bGVzL3Byb2plY3QtY29sbGVjdGlvbi5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL21vZHVsZXMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL21vZHVsZXMvc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL21vZHVsZXMvdG9kby5qcyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vZm9udHMvUm9ib3RvLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9mb250cy9Sb2JvdG8tTGlnaHQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKixcbio6OmJlZm9yZSxcbio6OmFmdGVyIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG9SZWd1bGFyJztcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ1JvYm90b0xpZ2h0JztcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XG4gIGZvbnQtd2VpZ2h0OiAyMDA7XG59XG5cbjpyb290IHtcbiAgLS1tYWluLWNvbG9yOiBibGFjaztcbiAgLS1zZWNvbmRhcnktY29sb3I6ICMxODFDMTQ7XG4gIC0tdGV4dC1jb2xvcjogd2hpdGU7XG4gIC0tYWNjZW50OiAjRjNDNjIzO1xuICAtLXRleHQtZmFkZTogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjY1KTtcbn1cblxuYm9keSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBmb250LWZhbWlseTogJ1JvYm90b1JlZ3VsYXInLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xufVxuXG51bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbi5tYWluIHtcbiAgb3JkZXI6IDI7XG4gIGZsZXg6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XG4gIHBhZGRpbmc6IDNyZW07XG59XG5cbi5ncmVldGluZ3Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAxLjVyZW07XG4gIHBhZGRpbmc6IDFyZW0gMDtcbiAgbWFyZ2luLWJvdHRvbTogMS4ycmVtO1xufVxuXG4uZGF0ZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xuICBnYXA6IDNweDtcbn1cblxuLmRhdGUtdG9kYXkge1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLm1haW4tZ3JlZXRpbmcgZGl2OmZpcnN0LWNoaWxkIHtcbiAgZm9udC1zaXplOiAycmVtO1xufVxuXG4ubWFpbi1ncmVldGluZyBkaXY6bGFzdC1jaGlsZCB7XG4gIGZvbnQtc2l6ZTogMS44cmVtO1xuICBjb2xvcjogcmdiYSgyNDgsIDI0NywgMjQ3LCAwLjM3NSk7XG59XG5cbiNhZGQtdG9kbyB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcbiAgcGFkZGluZzogMS4zcmVtIC43cmVtO1xuICBjb2xvcjogdmFyKC0tdGV4dC1mYWRlKTtcbiAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY2FyZC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDFyZW07XG4gIC8qIGZvbnQtZmFtaWx5OiAnJzsgKi9cbn1cblxuLmNhcmQsXG4uYWRkLWRldGFpbHMge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XG4gIHBhZGRpbmc6IDEuM3JlbSAuN3JlbTtcbiAgY29sb3I6IHZhcigtLXRleHQtZmFkZSk7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDEwMHB4O1xuICBnYXA6IDFyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uY2FyZDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNDI5MWU7XG59XG5cbi5hZGQtZGV0YWlscyB7XG4gIG9yZGVyOiAzO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICB3aWR0aDogMzUwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGN1cnNvcjogZGVmYXVsdDtcbn1cblxuLmFkZC1kZXRhaWxzIGZvcm0ge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgIFxufVxuXG4uZGl2LWlucHV0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luOiAyMHB4IDA7XG59XG5cbi5kaXYtaW5wdXQgPiAqIHtcbiAgbWFyZ2luOiA1cHggMDtcbn1cblxuLmRpdi1yYWRpbyB7XG4gIG1hcmdpbjogNXB4IDAgMjVweCAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDEwcHg7XG59XG5cbi5kaXYtaW5wdXQgPiBpbnB1dCxcbiNkZXNjcmlwdGlvbiB7XG4gIHBhZGRpbmc6IDVweDtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEuMXJlbTtcbn1cblxuI2Rlc2NyaXB0aW9uIHtcbiAgcmVzaXplOiBub25lO1xufVxuXG4udG9kby1kZXRhaWxzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiA1cHg7XG59XG5cbiNhZGQtdG9kby1idG4ge1xuICBwYWRkaW5nOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQpO1xuICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdHJhbnNpdGlvbjogLjFzIGVhc2UgYWxsO1xufVxuXG4jYWRkLXRvZG8tYnRuOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjAxKTtcbn1cblxuI2FkZC10b2RvLWJ0bjphY3RpdmUge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xufVxuXG4ucmlnaHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA1cHg7XG59XG5cbi5yaWdodCA+IGltZyB7XG4gIGhlaWdodDogMS41cmVtO1xuICB3aWR0aDogYXV0bztcbn1cblxuLnRpdGxlIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbi5kZXNjcmlwdGlvbixcbi5kdWUtZGF0ZSB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWZhZGUpO1xuICBwYWRkaW5nLXRvcDogM3B4O1xuICBmb250LWZhbWlseTogJ1JvYm90b0xpZ2h0JywgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbn1cblxubmF2IHtcbiAgb3JkZXI6IDE7XG4gIHdpZHRoOiAyNTBweDtcbiAgcGFkZGluZzogMXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xufVxuXG4ubG9nbyB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDIuNXJlbTtcbn1cblxuLmxvZ28gPiBpbWcge1xuICBoZWlnaHQ6IDEuNnJlbTtcbiAgd2lkdGg6IGF1dG87XG59XG5cbi5saXN0LWNvbnRhaW5lciA+IGgyIHtcbiAgZm9udC1zaXplOiAxLjNyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbn1cblxuLnByb2plY3QsXG4jbmV3LXByb2plY3Qge1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDI1MDtcbn1cblxuI25ldy1wcm9qZWN0IHtcbiAgY29sb3I6IHZhcigtLXRleHQtZmFkZSk7XG59XG5cbi5hZGQtcHJvamVjdCxcbi5lZGl0LXByb2plY3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQpO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiA1cHg7XG59XG5cbi5lZGl0LXByb2plY3Qge1xuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcbiAgcGFkZGluZzogMXJlbSAuNXJlbTtcbiAgZm9udC1zaXplOiAxLjFyZW07XG59XG5cbi5lZGl0LXByb2plY3QgaW5wdXQge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbiNwcm9qZWN0LW5hbWUge1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiAyMDA7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xufVxuXG4ub3B0aW9ucyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmFkZC1wcm9qZWN0IGltZyxcbi5lZGl0LXByb2plY3QgaW1nIHtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogYXV0bztcbiAgcGFkZGluZzogMCA1cHg7XG59XG5cbi5wcm9qZWN0e1xuICBwYWRkaW5nOiAxcmVtIC41cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRyYW5zaXRpb246IC4xcyBlYXNlIGFsbDtcbn1cblxuLnByb2plY3Q6aG92ZXIsXG4ucHJvamVjdDpob3ZlciBpbWcsXG4jbmV3LXByb2plY3Q6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQpO1xuICBjb2xvcjogYmxhY2s7XG4gIG9wYWNpdHk6IDE7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogLjVyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5wcm9qZWN0IGltZ3tcbiAgaGVpZ2h0OiAxcmVtO1xuICBvcGFjaXR5OiAwO1xufVxuXG4ucHJvamVjdC10aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNXB4O1xufVxuXG4ucHJvamVjdC10aXRsZTpob3ZlciB7XG4gIGN1cnNvcjogdGV4dDtcbn1cblxuI25ldy1wcm9qZWN0IHtcbiAgcGFkZGluZzogMXJlbTtcbn1cblxuLmNvbXBsZXRlZCB7XG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xufVxuXG4uYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50KTtcbiAgY29sb3I6IGJsYWNrO1xuICBvcGFjaXR5OiAxO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IC41cmVtO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4jY2xvc2Utd2luZG93IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDIwcHg7XG4gIHJpZ2h0OiAxMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7RUFHRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLDRCQUE0QjtFQUM1Qiw0Q0FBc0M7RUFDdEMsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLDRDQUFvQztFQUNwQyxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsMEJBQTBCO0VBQzFCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixpREFBaUQ7QUFDbkQ7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxRQUFRO0VBQ1IsT0FBTztFQUNQLG1DQUFtQztFQUNuQyx3QkFBd0I7RUFDeEIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLGVBQWU7RUFDZixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsUUFBUTtBQUNWOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHdDQUF3QztFQUN4QyxxQkFBcUI7RUFDckIsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztFQUNULHFCQUFxQjtBQUN2Qjs7QUFFQTs7RUFFRSxrQkFBa0I7RUFDbEIsd0NBQXdDO0VBQ3hDLHFCQUFxQjtFQUNyQix1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLGdDQUFnQztFQUNoQyxTQUFTO0VBQ1QsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFFBQVE7RUFDUixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGFBQWE7RUFDYixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLFNBQVM7QUFDWDs7QUFFQTs7RUFFRSxZQUFZO0VBQ1osMENBQTBDO0VBQzFDLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsUUFBUTtBQUNWOztBQUVBO0VBQ0UsYUFBYTtFQUNiLCtCQUErQjtFQUMvQix3QkFBd0I7RUFDeEIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsV0FBVztBQUNiOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBOztFQUVFLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsK0NBQStDO0FBQ2pEOztBQUVBO0VBQ0UsUUFBUTtFQUNSLFlBQVk7RUFDWixhQUFhO0VBQ2Isd0NBQXdDO0VBQ3hDLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFFBQVE7RUFDUixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsV0FBVztBQUNiOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixxQkFBcUI7QUFDdkI7O0FBRUE7O0VBRUUsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTs7RUFFRSwrQkFBK0I7RUFDL0Isa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFFBQVE7QUFDVjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7O0VBRUUsWUFBWTtFQUNaLFdBQVc7RUFDWCxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLHdCQUF3QjtBQUMxQjs7QUFFQTs7O0VBR0UsK0JBQStCO0VBQy9CLFlBQVk7RUFDWixVQUFVO0VBQ1YsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSwrQkFBK0I7RUFDL0IsWUFBWTtFQUNaLFVBQVU7RUFDVixlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osV0FBVztFQUNYLGVBQWU7QUFDakJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG9SZWd1bGFyJztcXG4gIHNyYzogdXJsKCcuL2ZvbnRzL1JvYm90by1SZWd1bGFyLnR0ZicpO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ1JvYm90b0xpZ2h0JztcXG4gIHNyYzogdXJsKCcuL2ZvbnRzL1JvYm90by1MaWdodC50dGYnKTtcXG4gIGZvbnQtd2VpZ2h0OiAyMDA7XFxufVxcblxcbjpyb290IHtcXG4gIC0tbWFpbi1jb2xvcjogYmxhY2s7XFxuICAtLXNlY29uZGFyeS1jb2xvcjogIzE4MUMxNDtcXG4gIC0tdGV4dC1jb2xvcjogd2hpdGU7XFxuICAtLWFjY2VudDogI0YzQzYyMztcXG4gIC0tdGV4dC1mYWRlOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjUpO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvUmVndWxhcicsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxufVxcblxcbnVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbi5tYWluIHtcXG4gIG9yZGVyOiAyO1xcbiAgZmxleDogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xcbiAgcGFkZGluZzogM3JlbTtcXG59XFxuXFxuLmdyZWV0aW5ncyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAxLjVyZW07XFxuICBwYWRkaW5nOiAxcmVtIDA7XFxuICBtYXJnaW4tYm90dG9tOiAxLjJyZW07XFxufVxcblxcbi5kYXRlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgZ2FwOiAzcHg7XFxufVxcblxcbi5kYXRlLXRvZGF5IHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuLm1haW4tZ3JlZXRpbmcgZGl2OmZpcnN0LWNoaWxkIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLm1haW4tZ3JlZXRpbmcgZGl2Omxhc3QtY2hpbGQge1xcbiAgZm9udC1zaXplOiAxLjhyZW07XFxuICBjb2xvcjogcmdiYSgyNDgsIDI0NywgMjQ3LCAwLjM3NSk7XFxufVxcblxcbiNhZGQtdG9kbyB7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbiAgcGFkZGluZzogMS4zcmVtIC43cmVtO1xcbiAgY29sb3I6IHZhcigtLXRleHQtZmFkZSk7XFxuICBmb250LXdlaWdodDogMjAwO1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNhcmQtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxcmVtO1xcbiAgLyogZm9udC1mYW1pbHk6ICcnOyAqL1xcbn1cXG5cXG4uY2FyZCxcXG4uYWRkLWRldGFpbHMge1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG4gIHBhZGRpbmc6IDEuM3JlbSAuN3JlbTtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWZhZGUpO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDEwMHB4O1xcbiAgZ2FwOiAxcmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uY2FyZDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQyOTFlO1xcbn1cXG5cXG4uYWRkLWRldGFpbHMge1xcbiAgb3JkZXI6IDM7XFxuICBib3JkZXItcmFkaXVzOiAwO1xcbiAgd2lkdGg6IDM1MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG59XFxuXFxuLmFkZC1kZXRhaWxzIGZvcm0ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgIFxcbn1cXG5cXG4uZGl2LWlucHV0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWFyZ2luOiAyMHB4IDA7XFxufVxcblxcbi5kaXYtaW5wdXQgPiAqIHtcXG4gIG1hcmdpbjogNXB4IDA7XFxufVxcblxcbi5kaXYtcmFkaW8ge1xcbiAgbWFyZ2luOiA1cHggMCAyNXB4IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uZGl2LWlucHV0ID4gaW5wdXQsXFxuI2Rlc2NyaXB0aW9uIHtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbn1cXG5cXG4jZGVzY3JpcHRpb24ge1xcbiAgcmVzaXplOiBub25lO1xcbn1cXG5cXG4udG9kby1kZXRhaWxzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiA1cHg7XFxufVxcblxcbiNhZGQtdG9kby1idG4ge1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudCk7XFxuICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgdHJhbnNpdGlvbjogLjFzIGVhc2UgYWxsO1xcbn1cXG5cXG4jYWRkLXRvZG8tYnRuOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMSk7XFxufVxcblxcbiNhZGQtdG9kby1idG46YWN0aXZlIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxufVxcblxcbi5yaWdodCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA1cHg7XFxufVxcblxcbi5yaWdodCA+IGltZyB7XFxuICBoZWlnaHQ6IDEuNXJlbTtcXG4gIHdpZHRoOiBhdXRvO1xcbn1cXG5cXG4udGl0bGUge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi5kZXNjcmlwdGlvbixcXG4uZHVlLWRhdGUge1xcbiAgY29sb3I6IHZhcigtLXRleHQtZmFkZSk7XFxuICBwYWRkaW5nLXRvcDogM3B4O1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG9MaWdodCcsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxufVxcblxcbm5hdiB7XFxuICBvcmRlcjogMTtcXG4gIHdpZHRoOiAyNTBweDtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xcbn1cXG5cXG4ubG9nbyB7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogNXB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMi41cmVtO1xcbn1cXG5cXG4ubG9nbyA+IGltZyB7XFxuICBoZWlnaHQ6IDEuNnJlbTtcXG4gIHdpZHRoOiBhdXRvO1xcbn1cXG5cXG4ubGlzdC1jb250YWluZXIgPiBoMiB7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XFxufVxcblxcbi5wcm9qZWN0LFxcbiNuZXctcHJvamVjdCB7XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiAyNTA7XFxufVxcblxcbiNuZXctcHJvamVjdCB7XFxuICBjb2xvcjogdmFyKC0tdGV4dC1mYWRlKTtcXG59XFxuXFxuLmFkZC1wcm9qZWN0LFxcbi5lZGl0LXByb2plY3Qge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50KTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiA1cHg7XFxufVxcblxcbi5lZGl0LXByb2plY3Qge1xcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuICBwYWRkaW5nOiAxcmVtIC41cmVtO1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxufVxcblxcbi5lZGl0LXByb2plY3QgaW5wdXQge1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4jcHJvamVjdC1uYW1lIHtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiAyMDA7XFxuICBwYWRkaW5nOiA1cHggMTBweDtcXG59XFxuXFxuLm9wdGlvbnMge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uYWRkLXByb2plY3QgaW1nLFxcbi5lZGl0LXByb2plY3QgaW1nIHtcXG4gIGhlaWdodDogMjBweDtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgcGFkZGluZzogMCA1cHg7XFxufVxcblxcbi5wcm9qZWN0e1xcbiAgcGFkZGluZzogMXJlbSAuNXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgdHJhbnNpdGlvbjogLjFzIGVhc2UgYWxsO1xcbn1cXG5cXG4ucHJvamVjdDpob3ZlcixcXG4ucHJvamVjdDpob3ZlciBpbWcsXFxuI25ldy1wcm9qZWN0OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudCk7XFxuICBjb2xvcjogYmxhY2s7XFxuICBvcGFjaXR5OiAxO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyLXJhZGl1czogLjVyZW07XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4ucHJvamVjdCBpbWd7XFxuICBoZWlnaHQ6IDFyZW07XFxuICBvcGFjaXR5OiAwO1xcbn1cXG5cXG4ucHJvamVjdC10aXRsZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogNXB4O1xcbn1cXG5cXG4ucHJvamVjdC10aXRsZTpob3ZlciB7XFxuICBjdXJzb3I6IHRleHQ7XFxufVxcblxcbiNuZXctcHJvamVjdCB7XFxuICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4uY29tcGxldGVkIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cXG5cXG4uYWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudCk7XFxuICBjb2xvcjogYmxhY2s7XFxuICBvcGFjaXR5OiAxO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyLXJhZGl1czogLjVyZW07XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4jY2xvc2Utd2luZG93IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGhlaWdodDogMjBweDtcXG4gIHJpZ2h0OiAxMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBjcmVhdGVEaXYsIGNyZWF0ZUxhYmVsLCBjcmVhdGVJbnB1dFRleHQsIGNyZWF0ZVRleHRBcmVhLCBjcmVhdGVJbnB1dERhdGUsIGNyZWF0ZUlucHV0UmFkaW8sIGNyZWF0ZUlucHV0U3VibWl0IH0gZnJvbSAnLi9kb20tZWxlbWVudHMnO1xuaW1wb3J0IGNoZWNrSWNvbiBmcm9tICcuLi8uLi9pbWFnZXMvY2hlY2sucG5nJztcbmltcG9ydCByZW1vdmVJY29uIGZyb20gJy4uLy4uL2ltYWdlcy9yZW1vdmUucG5nJztcblxuZnVuY3Rpb24gY3JlYXRlRGl2SW5wdXRUZXh0KGxhYmVsRm9yLCBsYWJlbFRleHQsIGlucHV0SWQsIHBsYWNlaG9sZGVyKXtcbiAgY29uc3QgZGl2ID0gY3JlYXRlRGl2KCdkaXYtaW5wdXQnKTtcbiAgY29uc3QgbGFiZWwgPSBjcmVhdGVMYWJlbChsYWJlbEZvciwgbGFiZWxUZXh0KTtcbiAgY29uc3QgaW5wdXQgPSBjcmVhdGVJbnB1dFRleHQoaW5wdXRJZCwgcGxhY2Vob2xkZXIpO1xuXG4gIGRpdi5hcHBlbmRDaGlsZChsYWJlbCk7XG4gIGRpdi5hcHBlbmRDaGlsZChpbnB1dCk7XG5cbiAgcmV0dXJuIGRpdjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRGl2VGV4dEFyZWEoKXtcbiAgY29uc3QgZGl2ID0gY3JlYXRlRGl2KCdkaXYtaW5wdXQnKTtcbiAgY29uc3QgbGFiZWwgPSBjcmVhdGVMYWJlbCgnZGVzY3JpcHRpb24nLCAnRGVzY3JpcHRpb24nKTtcbiAgY29uc3QgdGV4dGFyZWEgPSBjcmVhdGVUZXh0QXJlYSgpO1xuXG4gIGRpdi5hcHBlbmRDaGlsZChsYWJlbCk7XG4gIGRpdi5hcHBlbmRDaGlsZCh0ZXh0YXJlYSk7XG5cbiAgcmV0dXJuIGRpdjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRGl2SW5wdXREYXRlKGxhYmVsRm9yLCBsYWJlbFRleHQsIGlucHV0SWQpe1xuICBjb25zdCBkaXYgPSBjcmVhdGVEaXYoJ2Rpdi1pbnB1dCcpO1xuICBjb25zdCBsYWJlbCA9IGNyZWF0ZUxhYmVsKGxhYmVsRm9yLCBsYWJlbFRleHQpO1xuICBjb25zdCBkYXRlID0gY3JlYXRlSW5wdXREYXRlKGlucHV0SWQpO1xuXG4gIGRpdi5hcHBlbmRDaGlsZChsYWJlbCk7XG4gIGRpdi5hcHBlbmRDaGlsZChkYXRlKTtcblxuICByZXR1cm4gZGl2O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVEaXZJbnB1dFJhZGlvKCl7XG4gIGNvbnN0IGRpdiA9IGNyZWF0ZURpdignZGl2LXJhZGlvJyk7XG4gIGRpdi50ZXh0Q29udGVudCA9ICdDb21wbGV0ZWQnO1xuXG4gIGNvbnN0IHJhZGlvVHJ1ZSA9IGNyZWF0ZUlucHV0UmFkaW8oJ3N0YXR1cycsICd0cnVlJyk7XG4gIGNvbnN0IGxhYmVsVHJ1ZSA9IGNyZWF0ZUxhYmVsKCd0cnVlJywgJ1llcycpO1xuXG4gIGNvbnN0IHJhZGlvRmFsc2UgPSBjcmVhdGVJbnB1dFJhZGlvKCdzdGF0dXMnLCAnZmFsc2UnKTtcbiAgY29uc3QgbGFiZWxGYWxzZSA9IGNyZWF0ZUxhYmVsKCdmYWxzZScsICdObycpO1xuXG4gIGRpdi5hcHBlbmRDaGlsZChyYWRpb1RydWUpO1xuICBkaXYuYXBwZW5kQ2hpbGQobGFiZWxUcnVlKTtcbiAgZGl2LmFwcGVuZENoaWxkKHJhZGlvRmFsc2UpO1xuICBkaXYuYXBwZW5kQ2hpbGQobGFiZWxGYWxzZSk7XG5cbiAgcmV0dXJuIGRpdjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUFkZERldGFpbHMoKXtcbiAgY29uc3QgZGl2QWRkRGV0YWlscyA9IGNyZWF0ZURpdignYWRkLWRldGFpbHMnKTtcbiAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGltZy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Nsb3NlLXdpbmRvdycpO1xuICBpbWcuc3JjID0gcmVtb3ZlSWNvbjtcblxuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICBmb3JtLnNldEF0dHJpYnV0ZSgnYWN0aW9uJywgJyMnKTtcbiAgZm9ybS5zZXRBdHRyaWJ1dGUoJ2RhdGEtdG8tZG8taWQnLCdUZXN0IElEJyk7XG5cbiAgY29uc3QgZGl2VGl0bGUgPSBjcmVhdGVEaXZJbnB1dFRleHQoJ3RpdGxlJywgJ1RpdGxlJywgJ3RpdGxlJywgJ0VudGVyIGEgbmV3IHRpdGxlLi4uJyk7XG4gIGNvbnN0IGRpdkRlc2NyaXB0aW9uID0gY3JlYXRlRGl2VGV4dEFyZWEoKTtcbiAgY29uc3QgZGl2RHVlRGF0ZSA9IGNyZWF0ZURpdklucHV0RGF0ZSgnZHVlLWRhdGUnLCAnRHVlIERhdGUnLCAnZHVlLWRhdGUnKTtcbiAgY29uc3QgaW5wdXRTdWJtaXQgPSBjcmVhdGVJbnB1dFN1Ym1pdCgnYWRkLXRvZG8tYnRuJywgJ0FkZCBuZXcgdG9kbycpO1xuXG4gIGZvcm0uYXBwZW5kQ2hpbGQoZGl2VGl0bGUpO1xuICBmb3JtLmFwcGVuZENoaWxkKGRpdkRlc2NyaXB0aW9uKTtcbiAgZm9ybS5hcHBlbmRDaGlsZChkaXZEdWVEYXRlKTtcbiAgZm9ybS5hcHBlbmRDaGlsZChpbnB1dFN1Ym1pdCk7XG5cbiAgZGl2QWRkRGV0YWlscy5hcHBlbmRDaGlsZChpbWcpO1xuICBkaXZBZGREZXRhaWxzLmFwcGVuZENoaWxkKGZvcm0pO1xuXG4gIGltZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgdGhpcy5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoZGl2QWRkRGV0YWlscylcbiAgfSk7XG5cbiAgaW5wdXRTdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIH0pXG5cbiAgcmV0dXJuIGRpdkFkZERldGFpbHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVBZGRQcm9qZWN0KCl7XG4gIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgbGkuY2xhc3NMaXN0LmFkZCgnYWRkLXByb2plY3QnKTtcbiAgXG4gIGNvbnN0IGlucHV0UHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBpbnB1dFByb2plY3ROYW1lLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gIGlucHV0UHJvamVjdE5hbWUuc2V0QXR0cmlidXRlKCdpZCcsICdwcm9qZWN0LW5hbWUnKTtcbiAgaW5wdXRQcm9qZWN0TmFtZS5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ0VudGVyIHByb2plY3QgbmFtZS4uLicpO1xuXG4gIGNvbnN0IG9wdGlvbnNEaXYgPSBjcmVhdGVEaXYoJ29wdGlvbnMnKTtcbiAgY29uc3Qgc2F2ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBzYXZlQnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAnc2F2ZS1uZXctcHJvamVjdCcpO1xuICBzYXZlQnRuLnNyYyA9IGNoZWNrSWNvbjtcbiAgY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGRlbGV0ZUJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2RlbGV0ZS1uZXctcHJvamVjdCcpO1xuICBkZWxldGVCdG4uc3JjID0gcmVtb3ZlSWNvbjtcbiAgb3B0aW9uc0Rpdi5hcHBlbmRDaGlsZChzYXZlQnRuKTtcbiAgb3B0aW9uc0Rpdi5hcHBlbmRDaGlsZChkZWxldGVCdG4pO1xuXG4gIGxpLmFwcGVuZENoaWxkKGlucHV0UHJvamVjdE5hbWUpO1xuICBsaS5hcHBlbmRDaGlsZChvcHRpb25zRGl2KTtcblxuICByZXR1cm4gbGk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFZGl0RGV0YWlscyhjdXJyZW50VGl0bGUsIGN1cnJlbnREZXNjcmlwdGlvbiwgY3VycmVudER1ZURhdGUsIGN1cnJlbnRTdGF0dXMpe1xuICBjb25zdCBkaXZBZGREZXRhaWxzID0gY3JlYXRlRGl2KCdhZGQtZGV0YWlscycpO1xuICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgaW1nLnNldEF0dHJpYnV0ZSgnaWQnLCAnY2xvc2Utd2luZG93Jyk7XG4gIGltZy5zcmMgPSByZW1vdmVJY29uO1xuXG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gIGZvcm0uc2V0QXR0cmlidXRlKCdhY3Rpb24nLCAnIycpO1xuICBmb3JtLnNldEF0dHJpYnV0ZSgnZGF0YS10by1kby1pZCcsJ1Rlc3QgSUQnKTtcblxuICBjb25zdCBkaXZUaXRsZSA9IGNyZWF0ZURpdklucHV0VGV4dCgndGl0bGUnLCAnQ3VycmVudCBUaXRsZScsICd0aXRsZScsIGBFbnRlciBhIG5ldyB0aXRsZS4uLmApO1xuICBkaXZUaXRsZS5sYXN0Q2hpbGQudmFsdWUgPSBjdXJyZW50VGl0bGU7XG4gIGNvbnN0IGRpdkRlc2NyaXB0aW9uID0gY3JlYXRlRGl2VGV4dEFyZWEoKTtcbiAgZGl2RGVzY3JpcHRpb24ubGFzdENoaWxkLnZhbHVlID0gY3VycmVudERlc2NyaXB0aW9uO1xuICBjb25zdCBkaXZEdWVEYXRlID0gY3JlYXRlRGl2SW5wdXREYXRlKCdkdWUtZGF0ZScsICdEdWUgRGF0ZScsICdkdWUtZGF0ZScpO1xuICBkaXZEdWVEYXRlLmxhc3RDaGlsZC52YWx1ZSA9IGN1cnJlbnREdWVEYXRlO1xuICBjb25zdCBkaXZJc0NvbXBsZXRlZCA9IGNyZWF0ZURpdklucHV0UmFkaW8oKTtcbiAgY29uc3QgaW5wdXRTdWJtaXQgPSBjcmVhdGVJbnB1dFN1Ym1pdCgnYWRkLXRvZG8tYnRuJywgJ1NhdmUgQ2hhbmdlcycpO1xuXG4gIGlmIChjdXJyZW50U3RhdHVzID09PSB0cnVlKSB7XG4gICAgZGl2SXNDb21wbGV0ZWQuY2hpbGROb2Rlc1sxXS5jaGVja2VkID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBkaXZJc0NvbXBsZXRlZC5jaGlsZE5vZGVzWzNdLmNoZWNrZWQgPSB0cnVlO1xuICB9XG5cbiAgZm9ybS5hcHBlbmRDaGlsZChkaXZUaXRsZSk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoZGl2RGVzY3JpcHRpb24pO1xuICBmb3JtLmFwcGVuZENoaWxkKGRpdkR1ZURhdGUpO1xuICBmb3JtLmFwcGVuZENoaWxkKGRpdklzQ29tcGxldGVkKTtcbiAgZm9ybS5hcHBlbmRDaGlsZChpbnB1dFN1Ym1pdCk7XG5cbiAgZGl2QWRkRGV0YWlscy5hcHBlbmRDaGlsZChpbWcpO1xuICBkaXZBZGREZXRhaWxzLmFwcGVuZENoaWxkKGZvcm0pO1xuXG4gIGltZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgdGhpcy5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoZGl2QWRkRGV0YWlscylcbiAgfSk7XG5cbiAgaW5wdXRTdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIH0pXG5cbiAgcmV0dXJuIGRpdkFkZERldGFpbHM7XG59IiwiZXhwb3J0IGNvbnN0IGNyZWF0ZURpdiA9IChuZXdDbGFzcykgPT4ge1xuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaWYgKG5ld0NsYXNzICE9PSB1bmRlZmluZWQpIGRpdi5jbGFzc0xpc3QuYWRkKG5ld0NsYXNzKTtcbiAgcmV0dXJuIGRpdjtcbn1cblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUxhYmVsID0gKGxhYmVsRm9yLCBsYWJlbFRleHQpID0+IHtcbiAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGxhYmVsRm9yKTtcbiAgbGFiZWwudGV4dENvbnRlbnQgPSBsYWJlbFRleHQ7XG4gIHJldHVybiBsYWJlbDtcbn07XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVJbnB1dFRleHQgPSAoaW5wdXRJZCwgcGxhY2Vob2xkZXIpID0+IHtcbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgaW5wdXRJZCk7O1xuICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgcGxhY2Vob2xkZXIpO1xuXG4gIHJldHVybiBpbnB1dDtcbn07XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVUZXh0QXJlYSA9ICgpID0+IHtcbiAgY29uc3QgdGV4dGFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICB0ZXh0YXJlYS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Rlc2NyaXB0aW9uJyk7XG4gIHRleHRhcmVhLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnRW50ZXIgYSBuZXcgZGVzY3JpcHRpb24uLi4nKTtcbiAgdGV4dGFyZWEuc2V0QXR0cmlidXRlKCdyb3dzJywgJzEyJyk7XG5cbiAgcmV0dXJuIHRleHRhcmVhO1xufTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUlucHV0RGF0ZSA9IChpbnB1dElkKSA9PiB7XG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKTtcbiAgaW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsIGlucHV0SWQpO1xuXG4gIHJldHVybiBpbnB1dDtcbn07XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVJbnB1dFJhZGlvID0gKGlucHV0TmFtZSwgaW5wdXRJZCkgPT4ge1xuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdyYWRpbycpO1xuICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBpbnB1dE5hbWUpO1xuICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgaW5wdXRJZCk7XG5cbiAgcmV0dXJuIGlucHV0O1xufTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUlucHV0U3VibWl0ID0gKGlucHV0SWQsIHZhbHVlKSA9PiB7XG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgaW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsIGlucHV0SWQpO1xuICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0Jyk7XG4gIGlucHV0LnNldEF0dHJpYnV0ZSgndmFsdWUnLCB2YWx1ZSk7XG5cbiAgcmV0dXJuIGlucHV0O1xufTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUxpID0gKGNsYXNzTmFtZSkgPT4ge1xuICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGxpLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgXG4gIHJldHVybiBsaTtcbn1cblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVBhcmEgPSAoY2xhc3NOYW1lLCB0ZXh0KSA9PiB7XG4gIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHAuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICBwLnRleHRDb250ZW50ID0gdGV4dDtcblxuICByZXR1cm4gcDtcbn0iLCJpbXBvcnQgY3JlYXRlTmF2IGZyb20gXCIuL25hdlwiO1xuaW1wb3J0IGNyZWF0ZU1haW5EaXYsIHsgY3JlYXRlQ2FyZCB9IGZyb20gXCIuL21haW4tZGl2XCI7XG5cbmNvbnN0IG5hdiA9IGNyZWF0ZU5hdigpO1xuY29uc3QgbWFpbiA9IGNyZWF0ZU1haW5EaXYoXCJOb3ZcIiwgXCI0XCIsIFwiTW9ybmluZ1wiKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5pdGlhbGl6ZVdlYnNpdGVEb20oKSB7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobmF2KTtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtYWluKTtcbn1cblxuLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xuLy8gICAvLyBjb25zdCBjYXJkQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkLWNvbnRhaW5lclwiKTtcblxuLy8gICBjb25zdCBjYXJkMSA9IGNyZWF0ZUNhcmQoXG4vLyAgICAgMTIzNDUsXG4vLyAgICAgXCJDbGVhbiBhaXJjb25cIixcbi8vICAgICBcIkxvcmVtIGlwc3VtIGRvbG9yLCBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBPZGlvIHZlcml0YXRpcyBlbmltIG1pbnVzPyBMb3JlbSBpcHN1bSBkb2xvciwgc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gT2RpbyB2ZXJpdGF0aXMgZW5pbSBtaW51cz8gTG9yZW0gaXBzdW0gZG9sb3IsIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIE9kaW8gdmVyaXRhdGlzIGVuaW0gbWludXM/XCIsXG4vLyAgICAgXCIyMDI0LTEyLTA2XCJcbi8vICAgKTtcbiAgXG4vLyAgIC8vIGNhcmRDb250YWluZXIuYXBwZW5kQ2hpbGQoY2FyZDEpO1xuLy8gfSk7IiwiaW1wb3J0IHsgY3JlYXRlRGl2LCBjcmVhdGVMaSwgY3JlYXRlUGFyYSB9IGZyb20gXCIuL2RvbS1lbGVtZW50c1wiO1xuaW1wb3J0IGVkaXRJY29uIGZyb20gJy4uLy4uL2ltYWdlcy9lZGl0LWNvbG9yZWQucG5nJztcbmltcG9ydCB0cmFzaEljb24gZnJvbSAnLi4vLi4vaW1hZ2VzL3RyYXNoLWNvbG9yZWQucG5nJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlTWFpbkRpdihtb250aCwgZGF5LCB0aW1lKXtcbiAgY29uc3QgbWFpbkRpdiA9IGNyZWF0ZURpdignbWFpbicpO1xuXG4gIG1haW5EaXYuYXBwZW5kQ2hpbGQoY3JlYXRlR3JlZXRpbmdzKG1vbnRoLCBkYXksIHRpbWUpKTtcbiAgbWFpbkRpdi5hcHBlbmRDaGlsZChjcmVhdGVNYWluQ29udGFpbmVyKCkpO1xuXG4gIHJldHVybiBtYWluRGl2O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVHcmVldGluZ3MobW9udGgsIGRheSwgdGltZSl7XG4gIGNvbnN0IGdyZWV0aW5nc0RpdiA9IGNyZWF0ZURpdignZ3JlZXRpbmdzJyk7XG5cbiAgY29uc3QgZGF0ZURvbSA9IGNyZWF0ZURhdGVEb20obW9udGgsIGRheSk7XG4gIGNvbnN0IG1haW5HcmVldGluZ0RvbSA9IGNyZWF0ZU1haW5HcmVldGluZyh0aW1lKTtcblxuICBncmVldGluZ3NEaXYuYXBwZW5kQ2hpbGQoZGF0ZURvbSk7XG4gIGdyZWV0aW5nc0Rpdi5hcHBlbmRDaGlsZChtYWluR3JlZXRpbmdEb20pO1xuXG4gIHJldHVybiBncmVldGluZ3NEaXY7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZURhdGVEb20obW9udGgsIGRheSl7XG4gIGNvbnN0IGRhdGVEaXYgPSBjcmVhdGVEaXYoXCJkYXRlXCIpO1xuXG4gIGNvbnN0IG1vbnRoRGl2ID0gY3JlYXRlRGl2KFwiZGF0ZS1tb250aFwiKTtcbiAgbW9udGhEaXYudGV4dENvbnRlbnQgPSBtb250aDtcblxuICBjb25zdCBkYXlEaXYgPSBjcmVhdGVEaXYoJ2RhdGUtdG9kYXknKTtcbiAgZGF5RGl2LnRleHRDb250ZW50ID0gZGF5O1xuXG4gIGRhdGVEaXYuYXBwZW5kQ2hpbGQobW9udGhEaXYpO1xuICBkYXRlRGl2LmFwcGVuZENoaWxkKGRheURpdik7XG5cbiAgcmV0dXJuIGRhdGVEaXY7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1haW5HcmVldGluZyh0aW1lKXtcbiAgY29uc3QgbWFpbkdyZWV0aW5nRGl2ID0gY3JlYXRlRGl2KCdtYWluLWdyZWV0aW5nJyk7XG5cbiAgY29uc3QgZ3JlZXRpbmdEaXYgPSBjcmVhdGVEaXYoKTtcbiAgZ3JlZXRpbmdEaXYuaW5uZXJIVE1MID0gYEdvb2QgPHNwYW4+JHt0aW1lfTwvc3Bhbj4uYDtcblxuICBjb25zdCBwbGFuRGl2ID0gY3JlYXRlRGl2KCk7XG4gIHBsYW5EaXYudGV4dENvbnRlbnQgPSBgV2hhdCdzIHlvdXIgcGxhbiBmb3IgdG9kYXk/YDtcblxuICBtYWluR3JlZXRpbmdEaXYuYXBwZW5kQ2hpbGQoZ3JlZXRpbmdEaXYpO1xuICBtYWluR3JlZXRpbmdEaXYuYXBwZW5kQ2hpbGQocGxhbkRpdik7XG5cbiAgcmV0dXJuIG1haW5HcmVldGluZ0Rpdjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTWFpbkNvbnRhaW5lcigpe1xuICBjb25zdCBtYWluQ29udGFpbmVyRGl2ID0gY3JlYXRlRGl2KCdtYWluLWNvbnRhaW5lcicpXG4gIFxuICBjb25zdCBhZGRUb2RvRGl2ID0gY3JlYXRlRGl2KCk7XG4gIGFkZFRvZG9EaXYuc2V0QXR0cmlidXRlKCdpZCcsICdhZGQtdG9kbycpO1xuICBhZGRUb2RvRGl2LnRleHRDb250ZW50ID0gYCsgQWRkIFRvZG9gO1xuXG4gIGNvbnN0IGNhcmRDb250YWluZXJVbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gIGNhcmRDb250YWluZXJVbC5jbGFzc0xpc3QuYWRkKCdjYXJkLWNvbnRhaW5lcicpO1xuXG4gIG1haW5Db250YWluZXJEaXYuYXBwZW5kQ2hpbGQoYWRkVG9kb0Rpdik7XG4gIG1haW5Db250YWluZXJEaXYuYXBwZW5kQ2hpbGQoY2FyZENvbnRhaW5lclVsKTtcblxuICByZXR1cm4gbWFpbkNvbnRhaW5lckRpdjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNhcmQobmV3SWQsIG5ld1RpdGxlLCBuZXdEZXNjcmlwdGlvbiwgbmV3RHVlRGF0ZSwgY29tcGxldGlvblN0YXR1cyl7XG4gIGNvbnN0IGNhcmQgPSBjcmVhdGVMaSgnY2FyZCcpO1xuICBjYXJkLmRhdGFzZXQudG9kb0lkID0gbmV3SWQ7XG4gIGNhcmQuZGF0YXNldC5jb21wbGV0aW9uU3RhdHVzID0gY29tcGxldGlvblN0YXR1cztcblxuICBjb25zdCBsZWZ0RGl2ID0gY3JlYXRlRGl2KCdsZWZ0Jyk7XG4gIGNvbnN0IHRvZG9EZXRhaWxzRGl2ID0gY3JlYXRlRGl2KCd0b2RvLWRldGFpbHMnKTtcbiAgY29uc3QgdGl0bGUgPSBjcmVhdGVQYXJhKCd0aXRsZScsIG5ld1RpdGxlKTtcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBjcmVhdGVQYXJhKCdkZXNjcmlwdGlvbicsIG5ld0Rlc2NyaXB0aW9uKTtcbiAgY29uc3QgZHVlRGF0ZSA9IGNyZWF0ZVBhcmEoJ2R1ZS1kYXRlJywgXCJcIik7XG4gIGR1ZURhdGUuaW5uZXJIVE1MID0gYER1ZTogPHNwYW4gY2xhc3M9J2R1ZS1kYXRlJz4ke25ld0R1ZURhdGV9PC9zcGFuPmA7XG4gIGxlZnREaXYuYXBwZW5kQ2hpbGQodG9kb0RldGFpbHNEaXYpO1xuICB0b2RvRGV0YWlsc0Rpdi5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gIHRvZG9EZXRhaWxzRGl2LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcbiAgdG9kb0RldGFpbHNEaXYuYXBwZW5kQ2hpbGQoZHVlRGF0ZSk7XG5cbiAgaWYgKGNvbXBsZXRpb25TdGF0dXMgPT09IHRydWUpIHtcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZWQnKTtcbiAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZWQnKTtcbiAgICBkdWVEYXRlLmNsYXNzTGlzdC5hZGQoJ2NvbXBsZXRlZCcpO1xuICB9XG5cbiAgY29uc3QgcmlnaHREaXYgPSBjcmVhdGVEaXYoJ3JpZ2h0Jyk7XG4gIGNvbnN0IGVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgZWRpdC5zcmMgPSBlZGl0SWNvbjtcbiAgY29uc3QgdHJhc2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgdHJhc2guc3JjID0gdHJhc2hJY29uO1xuICByaWdodERpdi5hcHBlbmRDaGlsZChlZGl0KTtcbiAgcmlnaHREaXYuYXBwZW5kQ2hpbGQodHJhc2gpO1xuXG4gIGNhcmQuYXBwZW5kQ2hpbGQobGVmdERpdik7XG4gIGNhcmQuYXBwZW5kQ2hpbGQocmlnaHREaXYpO1xuXG4gIGNvbnN0IGNhcmRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZC1jb250YWluZXInKTtcbiAgY2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkKTtcblxuICByZXR1cm4gY2FyZDtcbn0iLCJpbXBvcnQgeyBjcmVhdGVEaXYsIGNyZWF0ZVBhcmEgfSBmcm9tIFwiLi9kb20tZWxlbWVudHNcIjtcbmltcG9ydCBsb2dvSWNvbiBmcm9tICcuLi8uLi9pbWFnZXMvY2hlY2tsaXN0LnBuZyc7XG5pbXBvcnQgcHJvamVjdCBmcm9tIFwiLi4vcHJvamVjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVOYXYoKXtcbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XG5cbiAgbmF2LmFwcGVuZENoaWxkKGNyZWF0ZUxvZ28oKSlcbiAgbmF2LmFwcGVuZENoaWxkKGNyZWF0ZUxpc3RDb250YWluZXIoKSk7O1xuXG4gIHJldHVybiBuYXY7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxvZ28oKXtcbiAgY29uc3QgbG9nb0RpdiA9IGNyZWF0ZURpdignbG9nbycpO1xuICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgaW1nLnNyYyA9IGxvZ29JY29uO1xuICBsb2dvRGl2LmlubmVySFRNTCA9IGBUb2Rvb2Rvb2A7XG4gIGxvZ29EaXYuYXBwZW5kQ2hpbGQoaW1nKTtcblxuICByZXR1cm4gbG9nb0Rpdjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlzdENvbnRhaW5lcigpe1xuICBjb25zdCBsaXN0Q29udGFpbmVyID0gY3JlYXRlRGl2KCdsaXN0LWNvbnRhaW5lcicpO1xuXG4gIGNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgaDIudGV4dENvbnRlbnQgPSBgTXkgUHJvamVjdHNgO1xuXG4gIGxpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQoaDIpO1xuICBsaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZVByb2plY3RDb250YWluZXIoKSk7XG4gIGxpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlTmV3UHJvamVjdEJ0bigpKTtcblxuICByZXR1cm4gbGlzdENvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTmV3UHJvamVjdEJ0bigpIHtcbiAgY29uc3QgbmV3UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBuZXdQcm9qZWN0LnNldEF0dHJpYnV0ZSgnaWQnLCAnbmV3LXByb2plY3QnKTtcbiAgbmV3UHJvamVjdC5pbm5lckhUTUwgPSBgPHNwYW4+Kzwvc3Bhbj4gTmV3IFByb2plY3RgO1xuXG4gIHJldHVybiBuZXdQcm9qZWN0O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0Q29udGFpbmVyKCl7XG4gIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBjcmVhdGVEaXYoJ3Byb2plY3QtY29udGFpbmVyJylcbiAgcHJvamVjdENvbnRhaW5lci5kYXRhc2V0LmFjdGl2ZVByb2plY3QgPSAnZGVmYXVsdCc7XG4gIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcblxuICAvLyB1bC5hcHBlbmRDaGlsZChjcmVhdGVEZWZhdWx0UHJvamVjdCgpKTtcbiAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZCh1bCk7XG5cbiAgcmV0dXJuIHByb2plY3RDb250YWluZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVEZWZhdWx0UHJvamVjdChuZXdQcm9qZWN0SWQsIG5ld1Byb2plY3ROYW1lKXtcbiAgY29uc3QgZGVmYXVsdFByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBkZWZhdWx0UHJvamVjdC5kYXRhc2V0LnByb2plY3RJZCA9IG5ld1Byb2plY3RJZDtcbiAgZGVmYXVsdFByb2plY3QuY2xhc3NMaXN0LmFkZCgncHJvamVjdCcsICdhY3RpdmUnKTtcbiAgY29uc3QgZGVmYXVsdFBhcmEgPSBjcmVhdGVQYXJhKFwicHJvamVjdC10aXRsZVwiLCBuZXdQcm9qZWN0TmFtZSk7XG4gIGRlZmF1bHRQcm9qZWN0LmFwcGVuZENoaWxkKGRlZmF1bHRQYXJhKTtcblxuICByZXR1cm4gZGVmYXVsdFByb2plY3Q7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRQcm9qZWN0VG9OYXZJbkRPTShwcm9qZWN0KXtcbiAgY29uc3QgdWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1jb250YWluZXIgPiB1bCcpO1xuICB1bC5hcHBlbmRDaGlsZChwcm9qZWN0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVByb2plY3RGcm9tTmF2SW5ET00ocHJvamVjdCkge1xuICBjb25zdCB1bCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWNvbnRhaW5lciA+IHVsJyk7XG4gIHVsLnJlbW92ZUNoaWxkKHByb2plY3QpO1xufSIsImltcG9ydCB7IGNyZWF0ZURpdiwgY3JlYXRlUGFyYSwgY3JlYXRlSW5wdXRUZXh0LCBjcmVhdGVMaSB9IGZyb20gJy4vZG9tLWVsZW1lbnRzLmpzJztcbmltcG9ydCBlZGl0SWNvbiBmcm9tICcuLi8uLi9pbWFnZXMvZWRpdC5wbmcnO1xuaW1wb3J0IHRyYXNoSWNvbiBmcm9tICcuLi8uLi9pbWFnZXMvdHJhc2gucG5nJztcbmltcG9ydCBjaGVja0ljb24gZnJvbSAnLi4vLi4vaW1hZ2VzL2NoZWNrLnBuZyc7XG5pbXBvcnQgcmVtb3ZlSWNvbiBmcm9tICcuLi8uLi9pbWFnZXMvcmVtb3ZlLnBuZyc7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVQcm9qZWN0RG9tID0gKHByb2plY3RJZCwgcHJvamVjdE5hbWUpID0+IHtcbiAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBsaS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0Jyk7XG4gIGxpLmRhdGFzZXQucHJvamVjdElkID0gcHJvamVjdElkO1xuXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICB0aXRsZS50ZXh0Q29udGVudCA9IHByb2plY3ROYW1lO1xuICB0aXRsZS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LXRpdGxlJyk7XG5cbiAgY29uc3QgZGl2ID0gY3JlYXRlRGl2KCk7XG4gIGNvbnN0IGVkaXRJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgZWRpdEltZy5zcmMgPSBlZGl0SWNvbjtcbiAgY29uc3QgdHJhc2hJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgdHJhc2hJbWcuc3JjID0gdHJhc2hJY29uO1xuXG4gIGxpLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgbGkuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgZGl2LmFwcGVuZENoaWxkKGVkaXRJbWcpO1xuICBkaXYuYXBwZW5kQ2hpbGQodHJhc2hJbWcpO1xuXG4gIHJldHVybiBsaTtcbn07XG5cbmV4cG9ydCBjb25zdCBlZGl0UHJvamVjdERvbSA9IChjdXJyZW50UHJvamVjdE5hbWUsIGN1cnJlbnRQcm9qZWN0SWQpID0+IHtcbiAgY29uc3QgbGkgPSBjcmVhdGVMaSgnZWRpdC1wcm9qZWN0Jyk7XG4gIGxpLmRhdGFzZXQucHJvamVjdElkID0gY3VycmVudFByb2plY3RJZDtcblxuICBjb25zdCBwcm9qZWN0VGl0bGUgPSBjcmVhdGVQYXJhKCdwcm9qZWN0LXRpdGxlJywgXCJFZGl0IHRoaXNcIik7XG4gIHByb2plY3RUaXRsZS5pbm5lckhUTUwgPSBgT2xkIE5hbWU6IDxzcGFuPiR7Y3VycmVudFByb2plY3ROYW1lfTwvc3Bhbj5gO1xuXG4gIGNvbnN0IHByb2plY3ROYW1lID0gY3JlYXRlSW5wdXRUZXh0KCdwcm9qZWN0LW5hbWUnLCAnRW50ZXIgbmV3IHByb2plY3QgbmFtZS4uLicpO1xuXG4gIGNvbnN0IG9wdGlvbnMgPSBjcmVhdGVEaXYoJ29wdGlvbnMnKTtcbiAgY29uc3QgY2hlY2tJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgY2hlY2tJbWcuc3JjID0gY2hlY2tJY29uO1xuICBjb25zdCByZW1vdmVJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgcmVtb3ZlSW1nLnNyYyA9IHJlbW92ZUljb247XG5cbiAgb3B0aW9ucy5hcHBlbmRDaGlsZChjaGVja0ltZyk7XG4gIG9wdGlvbnMuYXBwZW5kQ2hpbGQocmVtb3ZlSW1nKTtcblxuICBsaS5hcHBlbmRDaGlsZChwcm9qZWN0VGl0bGUpO1xuICBsaS5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZSk7XG4gIGxpLmFwcGVuZENoaWxkKG9wdGlvbnMpO1xuXG4gIHJldHVybiBsaTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcm9qZWN0Q29sbGVjdGlvbigpIHtcbiAgY29uc3QgY29sbGVjdGlvbiA9IFtdO1xuICBjb25zdCBhZGRQcm9qZWN0ID0gcHJvamVjdCA9PiBjb2xsZWN0aW9uLnB1c2gocHJvamVjdCk7XG5cbiAgY29uc3QgZmluZFByb2plY3RJbmRleCA9IHByb2plY3RJZCA9PiB7XG4gICAgcmV0dXJuIGNvbGxlY3Rpb24uZmluZEluZGV4KHByb2plY3QgPT4ge1xuICAgICAgcmV0dXJuIHByb2plY3QuZ2V0SWQoKSA9PT0gcHJvamVjdElkO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGZpbmRQcm9qZWN0TmFtZSA9IHByb2plY3ROYW1lID0+IHtcbiAgICByZXR1cm4gY29sbGVjdGlvbi5maW5kSW5kZXgocHJvamVjdCA9PiB7XG4gICAgICByZXR1cm4gcHJvamVjdC5nZXROYW1lKCkgPT09IHByb2plY3ROYW1lO1xuICAgIH0pO1xuICB9XG5cbiAgY29uc3QgcmVtb3ZlUHJvamVjdCA9IGluZGV4ID0+IHtcbiAgICBjb2xsZWN0aW9uLnNwbGljZShpbmRleCwgMSk7XG4gIH1cblxuICBjb25zdCBwcmludFByb2plY3REZXRhaWxzID0gKCkgPT57XG4gICAgcmV0dXJuIGNvbGxlY3Rpb24uZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgIHByb2plY3QucHJpbnREZXRhaWxzKCk7XG4gICAgfSk7XG4gIH1cblxuICBjb25zdCBtYXBQcm9qZWN0TmFtZSA9ICgpID0+IHtcbiAgICByZXR1cm4gY29sbGVjdGlvbi5tYXAocHJvamVjdCA9PiB7XG4gICAgICByZXR1cm4gcHJvamVjdC5nZXRJZCgpO1xuICAgIH0pO1xuICB9XG5cbiAgY29uc3QgbWFwUHJvamVjdE5hbWVBbmRJZCA9ICgpID0+IHtcbiAgICByZXR1cm4gY29sbGVjdGlvbi5tYXAocHJvamVjdCA9PiB7ICAgICAgXG4gICAgICByZXR1cm4ge1xuICAgICAgICBpZDogcHJvamVjdC5nZXRJZCgpLFxuICAgICAgICBuYW1lOiBwcm9qZWN0LmdldE5hbWUoKSxcbiAgICAgIH07XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgZ2V0UHJvamVjdCA9IGluZGV4ID0+IHtcbiAgICByZXR1cm4gY29sbGVjdGlvbltpbmRleF07XG4gIH07XG5cbiAgY29uc3QgY29udmVydFRvSlNPTiA9ICgpID0+IHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkocHJpbnRBbGwoKSk7XG4gIH1cblxuICBjb25zdCBwcmludEFsbCA9ICgpID0+IHtcbiAgICByZXR1cm4gY29sbGVjdGlvbi5tYXAocHJvamVjdCA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpZDogcHJvamVjdC5nZXRJZCgpLFxuICAgICAgICBuYW1lOiBwcm9qZWN0LmdldE5hbWUoKSxcbiAgICAgICAgdG9kb3M6IHByb2plY3QuZ2V0VG9kb3MoKSxcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBhZGRQcm9qZWN0LFxuICAgIGZpbmRQcm9qZWN0SW5kZXgsXG4gICAgZmluZFByb2plY3ROYW1lLFxuICAgIHJlbW92ZVByb2plY3QsXG4gICAgcHJpbnRQcm9qZWN0RGV0YWlscyxcbiAgICBtYXBQcm9qZWN0TmFtZSxcbiAgICBnZXRQcm9qZWN0LFxuICAgIGNvbnZlcnRUb0pTT04sXG4gICAgbWFwUHJvamVjdE5hbWVBbmRJZCxcbiAgICBwcmludEFsbFxuICB9XG59OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByb2plY3QoaWQsIG5hbWUpe1xuICBjb25zdCBnZXRJZCA9ICgpPT4gaWQ7XG4gIGNvbnN0IGdldE5hbWUgPSAoKT0+IG5hbWU7XG4gIGNvbnN0IHNldE5hbWUgPSBuZXdOYW1lID0+IG5hbWUgPSBuZXdOYW1lO1xuXG4gIGNvbnN0IGxpc3RPZlRvZG9zID0gW107XG4gIGNvbnN0IGFkZEFUb2RvID0gdG9kbyA9PiBsaXN0T2ZUb2Rvcy5wdXNoKHRvZG8pO1xuICBjb25zdCBnZXRUb2RvSW5kZXggPSBpZCA9PiB7XG4gICAgcmV0dXJuIGxpc3RPZlRvZG9zLmZpbmRJbmRleCh0b2RvID0+IHtcbiAgICAgIHJldHVybiB0b2RvLmdldElkKCkgPT09IGlkO1xuICAgIH0pO1xuICB9O1xuICBjb25zdCBnZXRUb2RvSW5kZXhCeUlkID0gdG9kb0lkID0+IHtcbiAgICByZXR1cm4gbGlzdE9mVG9kb3MuZmluZEluZGV4KHRvZG8gPT4ge1xuICAgICAgcmV0dXJuIHRvZG8uZ2V0SWQoKSA9PT0gdG9kb0lkO1xuICAgIH0pO1xuICB9O1xuICBjb25zdCByZW1vdmVBVG9kbyA9IGluZGV4ID0+IHtcbiAgICBsaXN0T2ZUb2Rvcy5zcGxpY2UoaW5kZXgsIDEpO1xuICB9O1xuICBjb25zdCBwcmludFRvZG9zID0gKCk9PiB7XG4gICAgbGlzdE9mVG9kb3MuZm9yRWFjaCh0b2RvID0+IHtcbiAgICAgIHRvZG8ucHJpbnREZXRhaWxzKCk7XG4gICAgfSk7XG4gIH07XG4gIGNvbnN0IHByaW50RGV0YWlscyA9ICgpPT4ge1xuICAgIGNvbnNvbGUubG9nKGBJRDogJHtnZXRJZCgpfVxcbk5hbWU6ICR7Z2V0TmFtZSgpfWApO1xuICB9O1xuXG4gIGNvbnN0IGdldFRvZG9zID0gKCkgPT4ge1xuICAgIHJldHVybiBsaXN0T2ZUb2Rvcy5tYXAodG9kbyA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpZDogdG9kby5nZXRJZCgpLFxuICAgICAgICB0aXRsZTogdG9kby5nZXRUaXRsZSgpLFxuICAgICAgICBkZXNjcmlwdGlvbjogdG9kby5nZXREZXNjcmlwdGlvbigpLFxuICAgICAgICBkdWVEYXRlOiB0b2RvLmdldER1ZURhdGUoKSxcbiAgICAgICAgY29tcGxldGlvblN0YXR1czogdG9kby5nZXRTdGF0dXMoKSxcbiAgICAgIH07XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgZ2V0VG9kbyA9ICh0b2RvSWQpID0+IHtcbiAgICByZXR1cm4gbGlzdE9mVG9kb3MuZmluZCh0b2RvID0+IHtcbiAgICAgIHJldHVybiB0b2RvLmdldElkKCkgPT09IHRvZG9JZDtcbiAgICB9KVxuICB9O1xuXG4gIHJldHVybiB7XG4gICAgZ2V0SWQsXG4gICAgZ2V0TmFtZSxcbiAgICBzZXROYW1lLFxuICAgIGFkZEFUb2RvLFxuICAgIGdldFRvZG9JbmRleCxcbiAgICByZW1vdmVBVG9kbyxcbiAgICBwcmludFRvZG9zLFxuICAgIHByaW50RGV0YWlscyxcbiAgICBnZXRUb2RvcyxcbiAgICBnZXRUb2RvSW5kZXhCeUlkLFxuICAgIGdldFRvZG9cbiAgfVxufSIsImltcG9ydCBwcm9qZWN0IGZyb20gXCIuL3Byb2plY3RcIjtcbmltcG9ydCB0b2RvIGZyb20gXCIuL3RvZG9cIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGltcG9ydERhdGFGcm9tU3RvcmFnZShzdG9yYWdlKXtcbiAgY2hlY2tUaGF0U3RvcmFnZUV4aXN0cygpO1xuICBsZXQgcHJvamVjdENvbGxlY3Rpb24gPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0Q29sbGVjdGlvbicpKTtcbiAgY2hlY2tUaGF0RGVmYXVsdFByb2plY3RFeGlzdHMocHJvamVjdENvbGxlY3Rpb24pO1xuXG4gIHByb2plY3RDb2xsZWN0aW9uLmZvckVhY2gocHJvaiA9PiB7XG4gICAgY29uc3QgbmV3UHJvamVjdCA9IHByb2plY3QocHJvai5pZCwgcHJvai5uYW1lKTtcblxuICAgIGlmIChwcm9qLnRvZG9zICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHByb2oudG9kb3MuZm9yRWFjaChteVRvZG8gPT4ge1xuICAgICAgICBjb25zdCBuZXdUb2RvID0gdG9kbyhteVRvZG8uaWQsIG15VG9kby50aXRsZSwgbXlUb2RvLmRlc2NyaXB0aW9uLCBteVRvZG8uZHVlRGF0ZSlcbiAgICAgICAgaWYgKG15VG9kby5jb21wbGV0aW9uU3RhdHVzID09PSAndHJ1ZScpIG5ld1RvZG8uc2V0U3RhdHVzKCd0cnVlJyk7XG4gICAgICAgIG5ld1Byb2plY3QuYWRkQVRvZG8obmV3VG9kbyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBzdG9yYWdlLmFkZFByb2plY3QobmV3UHJvamVjdCk7XG4gIH0pO1xuXG4gIHJldHVybiBwcm9qZWN0Q29sbGVjdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV4cG9ydERhdGFUb1N0b3JhZ2Uoc3RvcmFnZSl7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdENvbGxlY3Rpb25cIiwgc3RvcmFnZS5jb252ZXJ0VG9KU09OKCkpO1xufVxuXG5mdW5jdGlvbiBjaGVja1RoYXRTdG9yYWdlRXhpc3RzKCl7XG4gIGxldCBwcm9qZWN0Q29sbGVjdGlvbiA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RDb2xsZWN0aW9uJykpO1xuICBpZiAocHJvamVjdENvbGxlY3Rpb24gPT09IG51bGwpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdENvbGxlY3Rpb24nLCAnW10nKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjaGVja1RoYXREZWZhdWx0UHJvamVjdEV4aXN0cyhwcm9qZWN0Q29sbGVjdGlvbil7XG4gIGNvbnN0IGluZGV4ID0gcHJvamVjdENvbGxlY3Rpb24uZmluZEluZGV4KGl0ZW0gPT4ge1xuICAgIHJldHVybiBpdGVtLmlkID09PSAnZGVmYXVsdCc7XG4gIH0pO1xuXG4gIGlmIChpbmRleCAhPT0gLTEpIHJldHVybjtcbiAgY29uc3QgZGVmYXVsdFByb2plY3QgPSB7XG4gICAgaWQ6ICdkZWZhdWx0JyxcbiAgICBuYW1lOiAnRGVmYXVsdCcsXG4gIH07XG5cbiAgcHJvamVjdENvbGxlY3Rpb24udW5zaGlmdChkZWZhdWx0UHJvamVjdCk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9kbyhpZCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlKXtcbiAgY29uc3QgZ2V0SWQgPSAoKT0+IGlkO1xuICBjb25zdCBnZXRUaXRsZSA9ICgpPT4gdGl0bGU7XG4gIGNvbnN0IGdldERlc2NyaXB0aW9uID0gKCk9PiBkZXNjcmlwdGlvbjtcbiAgY29uc3QgZ2V0RHVlRGF0ZSA9ICgpPT4gZHVlRGF0ZTtcbiAgbGV0IGlzQ29tcGxldGVkID0gZmFsc2U7XG4gIGNvbnN0IGdldFN0YXR1cyA9ICgpID0+IGlzQ29tcGxldGVkO1xuICBcbiAgY29uc3Qgc2V0VGl0bGUgPSBuZXdUaXRsZSA9PiB0aXRsZSA9IG5ld1RpdGxlO1xuICBjb25zdCBzZXREZXNjcmlwdGlvbiA9IG5ld0Rlc2MgPT4gZGVzY3JpcHRpb24gPSBuZXdEZXNjO1xuICBjb25zdCBzZXREdWVEYXRlID0gbmV3RHVlRGF0ZSA9PiBkdWVEYXRlID0gbmV3RHVlRGF0ZTtcbiAgY29uc3Qgc2V0U3RhdHVzID0gbmV3U3RhdHVzID0+IGlzQ29tcGxldGVkID0gbmV3U3RhdHVzO1xuXG4gIGNvbnN0IHByaW50RGV0YWlscyA9ICgpPT4ge1xuICAgIGNvbnNvbGUubG9nKGBJRDogJHtnZXRJZCgpfVxcblRpdGxlOiAke2dldFRpdGxlKCl9XFxuRGVzY3JpcHRpb246ICR7Z2V0RGVzY3JpcHRpb24oKX1cXG5EdWUgRGF0ZTogJHtnZXREdWVEYXRlKCl9YCk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGdldElkLFxuICAgIGdldFRpdGxlLFxuICAgIGdldERlc2NyaXB0aW9uLFxuICAgIGdldER1ZURhdGUsXG4gICAgc2V0VGl0bGUsXG4gICAgc2V0RGVzY3JpcHRpb24sXG4gICAgc2V0RHVlRGF0ZSxcbiAgICBnZXRTdGF0dXMsXG4gICAgc2V0U3RhdHVzLFxuICAgIHByaW50RGV0YWlsc1xuICB9XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdCAmJiBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnRhZ05hbWUudG9VcHBlckNhc2UoKSA9PT0gJ1NDUklQVCcpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IGluaXRpYWxpemVXZWJzaXRlRG9tIGZyb20gXCIuL21vZHVsZXMvZG9tL2xhbmRpbmctcGFnZS5qc1wiO1xuaW1wb3J0IHtcbiAgY3JlYXRlQWRkUHJvamVjdCxcbiAgY3JlYXRlQWRkRGV0YWlscyxcbiAgY3JlYXRlRWRpdERldGFpbHMsXG59IGZyb20gXCIuL21vZHVsZXMvZG9tL2Rpdi1pbnB1dC5qc1wiO1xuaW1wb3J0IGNyZWF0ZVByb2plY3RDb2xsZWN0aW9uIGZyb20gXCIuL21vZHVsZXMvcHJvamVjdC1jb2xsZWN0aW9uLmpzXCI7XG5pbXBvcnQgcHJvamVjdCBmcm9tIFwiLi9tb2R1bGVzL3Byb2plY3QuanNcIjtcbmltcG9ydCB7XG4gIGNyZWF0ZURlZmF1bHRQcm9qZWN0LFxuICBhZGRQcm9qZWN0VG9OYXZJbkRPTSxcbiAgcmVtb3ZlUHJvamVjdEZyb21OYXZJbkRPTSxcbn0gZnJvbSBcIi4vbW9kdWxlcy9kb20vbmF2LmpzXCI7XG5pbXBvcnQgeyBjcmVhdGVQcm9qZWN0RG9tLCBlZGl0UHJvamVjdERvbSB9IGZyb20gXCIuL21vZHVsZXMvZG9tL3Byb2plY3QtZG9tLmpzXCI7XG5pbXBvcnQge1xuICBpbXBvcnREYXRhRnJvbVN0b3JhZ2UsXG4gIGV4cG9ydERhdGFUb1N0b3JhZ2UsXG59IGZyb20gXCIuL21vZHVsZXMvc3RvcmFnZS5qc1wiO1xuaW1wb3J0IHRvZG8gZnJvbSBcIi4vbW9kdWxlcy90b2RvLmpzXCI7XG5pbXBvcnQgeyBjcmVhdGVDYXJkIH0gZnJvbSBcIi4vbW9kdWxlcy9kb20vbWFpbi1kaXYuanNcIjtcblxuaW5pdGlhbGl6ZVdlYnNpdGVEb20oKTtcbmNvbnN0IHByb2plY3RDb2xsZWN0aW9uID0gaW5pdGlhbGl6ZVN0b3JhZ2UoKTtcblxubG9hZFByb2plY3RzKHByb2plY3RDb2xsZWN0aW9uKTtcblxuZnVuY3Rpb24gaW5pdGlhbGl6ZVN0b3JhZ2UoKSB7XG4gIGNvbnN0IG5ld1Byb2plY3RDb2xsZWN0aW9uID0gY3JlYXRlUHJvamVjdENvbGxlY3Rpb24oKTtcbiAgaW1wb3J0RGF0YUZyb21TdG9yYWdlKG5ld1Byb2plY3RDb2xsZWN0aW9uKTtcbiAgcmV0dXJuIG5ld1Byb2plY3RDb2xsZWN0aW9uO1xufVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XG4gIGFkZEV2ZW50TGlzdGVuZXJUb05ld1Byb2plY3QoKTtcbn0pO1xuXG5mdW5jdGlvbiBhZGRFdmVudExpc3RlbmVyVG9OZXdQcm9qZWN0KCkge1xuICBjb25zdCBuZXdQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXctcHJvamVjdFwiKTtcbiAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1jb250YWluZXIgPiB1bFwiKTtcblxuICBuZXdQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXByb2plY3RcIikgIT09IG51bGwpIHJldHVybjsgLy8gTWFrZSBzdXJlIHRoYXQgYWRkIG5ldyBwcm9qZWN0IHdpbmRvdyBpcyBub3QgZHVwbGljYXRlZDtcbiAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUFkZFByb2plY3QoKSk7XG5cbiAgICBhdHRhY2hFdmVudFJlbW92ZURpdigpO1xuICAgIGF0dGFjaEV2ZW50U2F2ZVByb2plY3QoKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGF0dGFjaEV2ZW50UmVtb3ZlRGl2KCkge1xuICBjb25zdCByZW1vdmVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RlbGV0ZS1uZXctcHJvamVjdFwiKTtcbiAgcmVtb3ZlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgcmVtb3ZlQWRkUHJvamVjdERpdigpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlQWRkUHJvamVjdERpdigpIHtcbiAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1jb250YWluZXIgPiB1bFwiKTtcbiAgY29uc3QgYWRkRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtcHJvamVjdFwiKTtcblxuICBwcm9qZWN0Q29udGFpbmVyLnJlbW92ZUNoaWxkKGFkZERpdik7XG59XG5cbmZ1bmN0aW9uIGF0dGFjaEV2ZW50U2F2ZVByb2plY3QoKSB7XG4gIGNvbnN0IHNhdmVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NhdmUtbmV3LXByb2plY3RcIik7XG4gIHNhdmVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAvLyBBZGQgcHJvamVjdCBoZXJlXG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtbmFtZVwiKTtcbiAgICBpZiAoc2F2ZU5ld1Byb2plY3RUb0NvbGxlY3Rpb24ocHJvamVjdE5hbWUudmFsdWUpID09PSBmYWxzZSkgcmV0dXJuOyAvLyBNYWtlIHN1cmUgdGhhdCBJRCBkb2Vzbid0IGFscmVhZHkgZXhpc3RzXG5cbiAgICByZW1vdmVBZGRQcm9qZWN0RGl2KCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzaG93UHJvamVjdE5hbWVBbHJlYWR5RXhpc3RzKG5ld05hbWUpIHtcbiAgaWYgKHByb2plY3RDb2xsZWN0aW9uLmZpbmRQcm9qZWN0TmFtZShuZXdOYW1lKSAhPT0gLTEpIHtcbiAgICBhbGVydChcIlByb2plY3QgbmFtZSBhbHJlYWR5IGV4aXN0cy4gQ2hvb3NlIGFub3RoZXIgbmFtZS5cIik7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBzYXZlTmV3UHJvamVjdFRvQ29sbGVjdGlvbihwcm9qZWN0TmFtZSkge1xuICBwcm9qZWN0TmFtZSA9IHByb2plY3ROYW1lLnRyaW0oKTtcbiAgY29uc3QgbmV3SWQgPSBnZW5lcmF0ZUlkKHByb2plY3ROYW1lKTtcblxuICBpZiAoc2hvd1Byb2plY3ROYW1lQWxyZWFkeUV4aXN0cyhwcm9qZWN0TmFtZSkgPT09IHRydWUpIHJldHVybiBmYWxzZTtcbiAgaWYgKHByb2plY3ROYW1lID09PSAnJykge1xuICAgIGFsZXJ0KCdQbGVhc2UgZW50ZXIgYSB2YWxpZCBwcm9qZWN0IG5hbWUuJyk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY29uc3QgbmV3UHJvamVjdCA9IHByb2plY3QobmV3SWQsIHByb2plY3ROYW1lKTtcbiAgcHJvamVjdENvbGxlY3Rpb24uYWRkUHJvamVjdChuZXdQcm9qZWN0KTsgLy8gQWRkIHByb2plY3QgdG8gY29sbGVjdGlvblxuICAvLyBwcm9qZWN0Q29sbGVjdGlvbi5wcmludFByb2plY3REZXRhaWxzKCk7XG5cbiAgY29uc3QgbmV3UHJvamVjdERPTSA9IGNyZWF0ZVByb2plY3REb20obmV3SWQsIHByb2plY3ROYW1lKTtcbiAgYWRkUHJvamVjdFRvTmF2SW5ET00obmV3UHJvamVjdERPTSk7IC8vIEFkZCBwcm9qZWN0IHRvIERPTSwgd2lsbCBzdGlsbCBuZWVkIHRvIGFkZCBldmVudGxpc3RlbmVycyBoZXJlXG5cbiAgYWRkRXZlbnRUb0RlbGV0ZVByb2plY3QobmV3UHJvamVjdERPTSwgbmV3SWQpO1xuICBhZGRFdmVudFRvRWRpdFByb2plY3QobmV3UHJvamVjdERPTSk7XG5cbiAgbmV3UHJvamVjdERPTS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgIGxvYWRUb2RvcyhuZXdJZCwgdGhpcyk7XG4gIH0pO1xuXG4gIGV4cG9ydERhdGFUb1N0b3JhZ2UocHJvamVjdENvbGxlY3Rpb24pO1xuXG4gIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZUlkKHByb2plY3ROYW1lKSB7XG4gIHJldHVybiBwcm9qZWN0TmFtZS5yZXBsYWNlQWxsKFwiIFwiLCBcIlwiKS50b0xvd2VyQ2FzZSgpO1xufVxuXG5mdW5jdGlvbiBsb2FkUHJvamVjdHMocHJvamVjdENvbGxlY3Rpb24pIHtcbiAgcHJvamVjdENvbGxlY3Rpb24ucHJpbnRBbGwoKS5mb3JFYWNoKChuZXdQcm9qZWN0KSA9PiB7XG4gICAgaWYgKG5ld1Byb2plY3QuaWQgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICBjb25zdCBkZWZhdWx0UHJvamVjdCA9IGNyZWF0ZURlZmF1bHRQcm9qZWN0KFxuICAgICAgICBuZXdQcm9qZWN0LmlkLFxuICAgICAgICBuZXdQcm9qZWN0Lm5hbWVcbiAgICAgICk7XG4gICAgICBhZGRQcm9qZWN0VG9OYXZJbkRPTShkZWZhdWx0UHJvamVjdCk7XG5cbiAgICAgIGNvbnN0IGNhcmRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmQtY29udGFpbmVyXCIpO1xuICAgICAgY2FyZENvbnRhaW5lci50ZXh0Q29udGVudCA9IFwiXCI7XG5cbiAgICAgIC8vIFRoaXMgaXMgdG8gbG9hZCB0aGUgRGVmYXVsdCdzIHRvZG9zIGZpcnN0XG4gICAgICBuZXdQcm9qZWN0LnRvZG9zLmZvckVhY2goKCkgPT4ge1xuICAgICAgICBsb2FkVG9kb3MobmV3UHJvamVjdC5pZCk7XG4gICAgICB9KTtcblxuICAgICAgZGVmYXVsdFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgY2xlYXJBY3RpdmVQcm9qZWN0KCk7XG5cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWNvbnRhaW5lclwiKS5kYXRhc2V0LmFjdGl2ZVByb2plY3QgPVxuICAgICAgICAgIFwiZGVmYXVsdFwiO1xuICAgICAgICBkb2N1bWVudFxuICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtcHJvamVjdC1pZD0nZGVmYXVsdCddXCIpXG4gICAgICAgICAgLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICAgIGxvYWRUb2RvcyhuZXdQcm9qZWN0LmlkKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBuZXdQcm9qZWN0RE9NID0gY3JlYXRlUHJvamVjdERvbShuZXdQcm9qZWN0LmlkLCBuZXdQcm9qZWN0Lm5hbWUpO1xuICAgICAgYWRkUHJvamVjdFRvTmF2SW5ET00obmV3UHJvamVjdERPTSk7XG5cbiAgICAgIG5ld1Byb2plY3RET00uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2xlYXJBY3RpdmVQcm9qZWN0KCk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1jb250YWluZXJcIikuZGF0YXNldC5hY3RpdmVQcm9qZWN0ID1cbiAgICAgICAgICBuZXdQcm9qZWN0LmlkO1xuICAgICAgICBkb2N1bWVudFxuICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1wcm9qZWN0LWlkPScke25ld1Byb2plY3QuaWR9J11gKVxuICAgICAgICAgIC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuXG4gICAgICAgIGNsZWFyQ2FyZENvbnRhaW5lcigpO1xuICAgICAgICBuZXdQcm9qZWN0LnRvZG9zLmZvckVhY2goKCkgPT4ge1xuICAgICAgICAgIGxvYWRUb2RvcyhuZXdQcm9qZWN0LmlkKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgICAgYWRkRXZlbnRUb0RlbGV0ZVByb2plY3QobmV3UHJvamVjdERPTSwgbmV3UHJvamVjdC5pZCk7XG4gICAgICBhZGRFdmVudFRvRWRpdFByb2plY3QobmV3UHJvamVjdERPTSk7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gY2xlYXJBY3RpdmVQcm9qZWN0KCkge1xuICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWNvbnRhaW5lclwiKTtcbiAgY29uc3QgcHJvamVjdHMgPSBwcm9qZWN0Q29udGFpbmVyLmZpcnN0Q2hpbGQuY2hpbGROb2RlcztcbiAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgIHByb2plY3QuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGxvYWRUb2Rvcyhwcm9qZWN0SWQpIHtcbiAgY2xlYXJDYXJkQ29udGFpbmVyKCk7XG5cbiAgY29uc3QgcHJvamVjdEluZGV4ID0gcHJvamVjdENvbGxlY3Rpb24uZmluZFByb2plY3RJbmRleChwcm9qZWN0SWQpO1xuICBjb25zdCB0b2RvQXJyID0gcHJvamVjdENvbGxlY3Rpb24uZ2V0UHJvamVjdChwcm9qZWN0SW5kZXgpLmdldFRvZG9zKCk7XG4gIHRvZG9BcnIuZm9yRWFjaCgodG9kbykgPT4ge1xuICAgIGNvbnN0IG5ld0NhcmQgPSBjcmVhdGVDYXJkKFxuICAgICAgdG9kby5pZCxcbiAgICAgIHRvZG8udGl0bGUsXG4gICAgICB0b2RvLmRlc2NyaXB0aW9uLFxuICAgICAgdG9kby5kdWVEYXRlLFxuICAgICAgdG9kby5jb21wbGV0aW9uU3RhdHVzXG4gICAgKTtcbiAgICBpZiAodG9kby5jb21wbGV0aW9uU3RhdHVzID09PSBcInRydWVcIikge1xuICAgICAgY29uc3QgdG9kb0RvbSA9IG5ld0NhcmQuZmlyc3RDaGlsZC5maXJzdENoaWxkO1xuICAgICAgdG9kb0RvbS5jaGlsZE5vZGVzWzBdLmNsYXNzTGlzdC5hZGQoXCJjb21wbGV0ZWRcIik7XG4gICAgICB0b2RvRG9tLmNoaWxkTm9kZXNbMV0uY2xhc3NMaXN0LmFkZChcImNvbXBsZXRlZFwiKTtcbiAgICAgIHRvZG9Eb20uY2hpbGROb2Rlc1syXS5jbGFzc0xpc3QuYWRkKFwiY29tcGxldGVkXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IGNhcmRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmQtY29udGFpbmVyXCIpO1xuICAgIGNhcmRDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3Q2FyZCk7XG5cbiAgICBjb25zdCBkZWxldGVJbWcgPSBuZXdDYXJkLmxhc3RDaGlsZC5sYXN0Q2hpbGQ7XG4gICAgYWRkRXZlbnRUb0RlbGV0ZUFUb2RvKFxuICAgICAgZGVsZXRlSW1nLFxuICAgICAgcHJvamVjdEluZGV4LFxuICAgICAgdG9kby5pZCxcbiAgICAgIGNhcmRDb250YWluZXIsXG4gICAgICBuZXdDYXJkXG4gICAgKTtcblxuICAgIGNvbnN0IGVkaXRJbWcgPSBuZXdDYXJkLmxhc3RDaGlsZC5maXJzdENoaWxkO1xuICAgIGFkZEV2ZW50VG9FZGl0QVRvZG8oXG4gICAgICBlZGl0SW1nLFxuICAgICAgdG9kby50aXRsZSxcbiAgICAgIHRvZG8uZGVzY3JpcHRpb24sXG4gICAgICB0b2RvLmR1ZURhdGUsXG4gICAgICB0b2RvLmNvbXBsZXRpb25TdGF0dXNcbiAgICApO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gYWRkRXZlbnRUb0RlbGV0ZUFUb2RvKFxuICBpbWcsXG4gIHByb2plY3RJbmRleCxcbiAgdG9kb0lkLFxuICBjYXJkQ29udGFpbmVyLFxuICBuZXdDYXJkXG4pIHtcbiAgaW1nLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgY3VycmVudFRvZG9JbmRleCA9IHByb2plY3RDb2xsZWN0aW9uXG4gICAgICAuZ2V0UHJvamVjdChwcm9qZWN0SW5kZXgpXG4gICAgICAuZ2V0VG9kb0luZGV4QnlJZCh0b2RvSWQpO1xuICAgIHByb2plY3RDb2xsZWN0aW9uLmdldFByb2plY3QocHJvamVjdEluZGV4KS5yZW1vdmVBVG9kbyhjdXJyZW50VG9kb0luZGV4KTtcbiAgICBjYXJkQ29udGFpbmVyLnJlbW92ZUNoaWxkKG5ld0NhcmQpO1xuICAgIGV4cG9ydERhdGFUb1N0b3JhZ2UocHJvamVjdENvbGxlY3Rpb24pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gYWRkRXZlbnRUb0VkaXRBVG9kbyhcbiAgaW1nLFxuICBjdXJyZW50VGl0bGUsXG4gIGN1cnJlbnREZXNjcmlwdGlvbixcbiAgY3VycmVudER1ZURhdGUsXG4gIGN1cnJlbnRTdGF0dXNcbikge1xuICBpbWcuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoZG9jdW1lbnQuYm9keS5sYXN0Q2hpbGQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWRkLWRldGFpbHNcIikpIHJldHVybjsgLy8gRW5zdXJlIG5vIGR1cGxpY2F0ZSBlZGl0IHdpbmRvdyBhcHBlYXJzXG4gICAgY29uc3QgZWRpdERldGFpbHMgPSBjcmVhdGVFZGl0RGV0YWlscyhcbiAgICAgIGN1cnJlbnRUaXRsZSxcbiAgICAgIGN1cnJlbnREZXNjcmlwdGlvbixcbiAgICAgIGN1cnJlbnREdWVEYXRlLFxuICAgICAgY3VycmVudFN0YXR1c1xuICAgICk7XG4gICAgY29uc3QgdG9kb0Zyb21TdG9yYWdlQ29tcGxldGlvblN0YXR1cyA9XG4gICAgICBpbWcucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmRhdGFzZXQuY29tcGxldGlvblN0YXR1cztcbiAgICBpZiAodG9kb0Zyb21TdG9yYWdlQ29tcGxldGlvblN0YXR1cyA9PT0gXCJ0cnVlXCIpIHtcbiAgICAgIGVkaXREZXRhaWxzLmxhc3RDaGlsZC5jaGlsZE5vZGVzWzNdLmNoaWxkTm9kZXNbMV0uY2hlY2tlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlZGl0RGV0YWlscyk7XG5cbiAgICBjb25zdCBzYXZlQ2hhbmdlc0J0biA9IGVkaXREZXRhaWxzLmxhc3RDaGlsZC5sYXN0Q2hpbGQ7XG4gICAgc2F2ZUNoYW5nZXNCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGNvbnN0IHRvZG8gPSBpbWcucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICAgICAgY29uc3QgdG9kb0lkID0gdG9kby5kYXRhc2V0LnRvZG9JZDtcbiAgICAgIGxldCBuZXdUaXRsZSA9IGVkaXREZXRhaWxzLmxhc3RDaGlsZC5jaGlsZE5vZGVzWzBdLmxhc3RDaGlsZC52YWx1ZTtcbiAgICAgIGxldCBuZXdEZXNjcmlwdGlvbiA9XG4gICAgICAgIGVkaXREZXRhaWxzLmxhc3RDaGlsZC5jaGlsZE5vZGVzWzFdLmxhc3RDaGlsZC52YWx1ZTtcbiAgICAgIGNvbnN0IG5ld0R1ZURhdGUgPSBlZGl0RGV0YWlscy5sYXN0Q2hpbGQuY2hpbGROb2Rlc1syXS5sYXN0Q2hpbGQudmFsdWU7XG4gICAgICBjb25zdCBuZXdTdGF0dXMgPSBkb2N1bWVudFxuICAgICAgICAucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cInN0YXR1c1wiXTpjaGVja2VkJylcbiAgICAgICAgLmdldEF0dHJpYnV0ZShcImlkXCIpO1xuXG4gICAgICBuZXdUaXRsZSA9IG5ld1RpdGxlLnRyaW0oKTtcbiAgICAgIG5ld0Rlc2NyaXB0aW9uID0gbmV3RGVzY3JpcHRpb24udHJpbSgpO1xuXG4gICAgICBpZiAobmV3VGl0bGUgPT09ICcnIHx8IG5ld0Rlc2NyaXB0aW9uID09PSAnJykge1xuICAgICAgICBhbGVydCgnUGxlYXNlIGVuc3VyZSB0aGF0IGFsbCBmaWVsZHMgaGF2ZSBhIHZhbHVlLicpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHByb2plY3RJZCA9XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1jb250YWluZXJcIikuZGF0YXNldC5hY3RpdmVQcm9qZWN0O1xuICAgICAgY29uc3QgcHJvamVjdEluZGV4ID0gcHJvamVjdENvbGxlY3Rpb24uZmluZFByb2plY3RJbmRleChwcm9qZWN0SWQpO1xuICAgICAgY29uc3QgY3VycmVudFRvZG8gPSBwcm9qZWN0Q29sbGVjdGlvblxuICAgICAgICAuZ2V0UHJvamVjdChwcm9qZWN0SW5kZXgpXG4gICAgICAgIC5nZXRUb2RvKHRvZG9JZCk7XG4gICAgICBjdXJyZW50VG9kby5zZXRUaXRsZShuZXdUaXRsZSk7XG4gICAgICBjdXJyZW50VG9kby5zZXREZXNjcmlwdGlvbihuZXdEZXNjcmlwdGlvbik7XG4gICAgICBjdXJyZW50VG9kby5zZXREdWVEYXRlKG5ld0R1ZURhdGUpO1xuICAgICAgY3VycmVudFRvZG8uc2V0U3RhdHVzKG5ld1N0YXR1cyk7XG5cbiAgICAgIHRvZG8uZmlyc3RDaGlsZC5maXJzdENoaWxkLmNoaWxkTm9kZXNbMF0udGV4dENvbnRlbnQgPSBuZXdUaXRsZTtcbiAgICAgIHRvZG8uZmlyc3RDaGlsZC5maXJzdENoaWxkLmNoaWxkTm9kZXNbMV0udGV4dENvbnRlbnQgPSBuZXdEZXNjcmlwdGlvbjtcbiAgICAgIHRvZG8uZmlyc3RDaGlsZC5maXJzdENoaWxkLmNoaWxkTm9kZXNbMl0udGV4dENvbnRlbnQgPSBgRHVlOiAke25ld0R1ZURhdGV9YDtcbiAgICAgIHRvZG8uZGF0YXNldC5jb21wbGV0aW9uU3RhdHVzID0gbmV3U3RhdHVzO1xuXG4gICAgICBpZiAobmV3U3RhdHVzID09PSBcInRydWVcIikge1xuICAgICAgICB0b2RvLmZpcnN0Q2hpbGQuZmlyc3RDaGlsZC5jaGlsZE5vZGVzWzBdLmNsYXNzTGlzdC5hZGQoXCJjb21wbGV0ZWRcIik7XG4gICAgICAgIHRvZG8uZmlyc3RDaGlsZC5maXJzdENoaWxkLmNoaWxkTm9kZXNbMV0uY2xhc3NMaXN0LmFkZChcImNvbXBsZXRlZFwiKTtcbiAgICAgICAgdG9kby5maXJzdENoaWxkLmZpcnN0Q2hpbGQuY2hpbGROb2Rlc1syXS5jbGFzc0xpc3QuYWRkKFwiY29tcGxldGVkXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdG9kby5maXJzdENoaWxkLmZpcnN0Q2hpbGQuY2hpbGROb2Rlc1swXS5jbGFzc0xpc3QucmVtb3ZlKFwiY29tcGxldGVkXCIpO1xuICAgICAgICB0b2RvLmZpcnN0Q2hpbGQuZmlyc3RDaGlsZC5jaGlsZE5vZGVzWzFdLmNsYXNzTGlzdC5yZW1vdmUoXCJjb21wbGV0ZWRcIik7XG4gICAgICAgIHRvZG8uZmlyc3RDaGlsZC5maXJzdENoaWxkLmNoaWxkTm9kZXNbMl0uY2xhc3NMaXN0LnJlbW92ZShcImNvbXBsZXRlZFwiKTtcbiAgICAgIH1cblxuICAgICAgZXhwb3J0RGF0YVRvU3RvcmFnZShwcm9qZWN0Q29sbGVjdGlvbik7XG4gICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGVkaXREZXRhaWxzKTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGFkZEV2ZW50VG9EZWxldGVQcm9qZWN0KG5ld1Byb2plY3RET00sIG5ld0lkKSB7XG4gIGNvbnN0IGRlbGV0ZUltZyA9IG5ld1Byb2plY3RET00ubGFzdENoaWxkLmxhc3RDaGlsZDtcbiAgZGVsZXRlSW1nLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgY29uc3QgaW5kZXggPSBwcm9qZWN0Q29sbGVjdGlvbi5maW5kUHJvamVjdEluZGV4KG5ld0lkKTtcbiAgICBwcm9qZWN0Q29sbGVjdGlvbi5yZW1vdmVQcm9qZWN0KGluZGV4KTtcbiAgICBleHBvcnREYXRhVG9TdG9yYWdlKHByb2plY3RDb2xsZWN0aW9uKTtcbiAgICByZW1vdmVQcm9qZWN0RnJvbU5hdkluRE9NKG5ld1Byb2plY3RET00pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gYWRkRXZlbnRUb0VkaXRQcm9qZWN0KG5ld1Byb2plY3RET00pIHtcbiAgY29uc3QgZWRpdEltZyA9IG5ld1Byb2plY3RET00ubGFzdENoaWxkLmZpcnN0Q2hpbGQ7XG4gIGNvbnN0IHByb2plY3RJZCA9IG5ld1Byb2plY3RET00uZGF0YXNldC5wcm9qZWN0SWQ7XG4gIGNvbnN0IHByb2plY3ROYW1lID0gbmV3UHJvamVjdERPTS5maXJzdENoaWxkLnRleHRDb250ZW50O1xuXG4gIGVkaXRJbWcuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBlZGl0Q3VycmVudFByb2plY3RET00gPSBlZGl0UHJvamVjdERvbShwcm9qZWN0TmFtZSwgcHJvamVjdElkKTtcbiAgICBuZXdQcm9qZWN0RE9NLnJlcGxhY2VXaXRoKGVkaXRDdXJyZW50UHJvamVjdERPTSk7XG4gICAgYWRkRXZlbnRUb0Nsb3NlVGhlRWRpdFByb2plY3QoZWRpdEN1cnJlbnRQcm9qZWN0RE9NLCBuZXdQcm9qZWN0RE9NKTtcbiAgICBhZGRFdmVudFRvU2F2ZUNoYW5nZXNBbmRDbG9zZVRoZUVkaXRQcm9qZWN0KGVkaXRDdXJyZW50UHJvamVjdERPTSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhZGRFdmVudFRvQ2xvc2VUaGVFZGl0UHJvamVjdChlZGl0Q3VycmVudFByb2plY3RET00sIG5ld1Byb2plY3RET00pIHtcbiAgY29uc3QgY2xvc2VCdG4gPSBlZGl0Q3VycmVudFByb2plY3RET00ubGFzdENoaWxkLmxhc3RDaGlsZDtcbiAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBlZGl0Q3VycmVudFByb2plY3RET00ucmVwbGFjZVdpdGgobmV3UHJvamVjdERPTSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhZGRFdmVudFRvU2F2ZUNoYW5nZXNBbmRDbG9zZVRoZUVkaXRQcm9qZWN0KGVkaXRDdXJyZW50UHJvamVjdERPTSkge1xuICBjb25zdCBzYXZlQnRuID0gZWRpdEN1cnJlbnRQcm9qZWN0RE9NLmxhc3RDaGlsZC5maXJzdENoaWxkO1xuICAvLyBjb25zdCBvbGROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInAucHJvamVjdC10aXRsZSA+IHNwYW5cIikudGV4dENvbnRlbnQ7XG4gIGNvbnN0IG9sZElkID0gZWRpdEN1cnJlbnRQcm9qZWN0RE9NLmRhdGFzZXQucHJvamVjdElkO1xuXG4gIHNhdmVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBpbnB1dFRleHQgPSBlZGl0Q3VycmVudFByb2plY3RET00uY2hpbGROb2Rlc1sxXTtcbiAgICAvLyBjb25zdCBuZXdJZCA9IGdlbmVyYXRlSWQoaW5wdXRUZXh0LnZhbHVlKTtcbiAgICBpZiAoaW5wdXRUZXh0LnZhbHVlLnRyaW0oKSA9PT0gXCJcIikge1xuICAgICAgYWxlcnQoXCJQbGVhc2UgZW50ZXIgYSB2YWxpZCBwcm9qZWN0IG5hbWUuXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoc2hvd1Byb2plY3ROYW1lQWxyZWFkeUV4aXN0cyhpbnB1dFRleHQudmFsdWUpKSByZXR1cm47XG5cbiAgICBjb25zdCBjdXJyZW50UHJvamVjdCA9IHByb2plY3RDb2xsZWN0aW9uLmdldFByb2plY3QoXG4gICAgICBwcm9qZWN0Q29sbGVjdGlvbi5maW5kUHJvamVjdEluZGV4KG9sZElkKVxuICAgICk7XG5cbiAgICBjdXJyZW50UHJvamVjdC5zZXROYW1lKGlucHV0VGV4dC52YWx1ZS50cmltKCkpO1xuXG4gICAgY29uc3QgbmV3UHJvamVjdERPTSA9IGNyZWF0ZVByb2plY3REb20ob2xkSWQsIGlucHV0VGV4dC52YWx1ZS50cmltKCkpO1xuICAgIGFkZFByb2plY3RUb05hdkluRE9NKG5ld1Byb2plY3RET00pO1xuICAgIGFkZEV2ZW50VG9FZGl0UHJvamVjdChuZXdQcm9qZWN0RE9NKTtcbiAgICBhZGRFdmVudFRvRGVsZXRlUHJvamVjdChuZXdQcm9qZWN0RE9NLCBvbGRJZCk7XG5cbiAgICBuZXdQcm9qZWN0RE9NLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBsb2FkVG9kb3Mob2xkSWQsIHRoaXMpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgcGFyZW50Q29udGFpbmVyID0gZWRpdEN1cnJlbnRQcm9qZWN0RE9NLnBhcmVudEVsZW1lbnQ7XG4gICAgcGFyZW50Q29udGFpbmVyLnJlbW92ZUNoaWxkKGVkaXRDdXJyZW50UHJvamVjdERPTSk7XG5cbiAgICBwcm9qZWN0Q29sbGVjdGlvbi5wcmludFByb2plY3REZXRhaWxzKCk7XG5cbiAgICBleHBvcnREYXRhVG9TdG9yYWdlKHByb2plY3RDb2xsZWN0aW9uKTtcbiAgfSk7XG59XG5cbmNvbnN0IGFkZFRvZG9CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC10b2RvXCIpO1xuYWRkVG9kb0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICBpZiAoZG9jdW1lbnQuYm9keS5sYXN0Q2hpbGQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWRkLWRldGFpbHNcIikgPT09IHRydWUpXG4gICAgcmV0dXJuOyAvLyBQcmV2ZW50IGR1cGxpY2F0ZSBhZGQgdG9kbyB3aW5kb3dcblxuICBjb25zdCBjdXJyZW50UHJvamVjdFNlbGVjdGVkRE9NID1cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtY29udGFpbmVyXCIpO1xuICBjb25zdCBjdXJyZW50UHJvamVjdElkID0gY3VycmVudFByb2plY3RTZWxlY3RlZERPTS5kYXRhc2V0LmFjdGl2ZVByb2plY3Q7XG4gIGNvbnN0IGN1cnJlbnRQcm9qZWN0SW5kZXggPVxuICAgIHByb2plY3RDb2xsZWN0aW9uLmZpbmRQcm9qZWN0SW5kZXgoY3VycmVudFByb2plY3RJZCk7XG5cbiAgY29uc3QgYWRkVG9kb1dpbmRvdyA9IGNyZWF0ZUFkZERldGFpbHMoKTtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhZGRUb2RvV2luZG93KTtcblxuICBjb25zdCBhZGRUb2RvQnRuID0gYWRkVG9kb1dpbmRvdy5sYXN0Q2hpbGQubGFzdENoaWxkO1xuICBhZGRUb2RvQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgbGV0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0aXRsZVwiKS52YWx1ZTtcbiAgICB0aXRsZSA9IHRpdGxlLnRyaW0oKTtcblxuICAgIGxldCBpZCA9IGdlbmVyYXRlSWQodGl0bGUpO1xuICAgIGlkID0gaWQudHJpbSgpO1xuXG4gICAgbGV0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkZXNjcmlwdGlvblwiKS52YWx1ZTtcbiAgICBkZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uLnRyaW0oKTtcblxuICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2R1ZS1kYXRlXCIpLnZhbHVlO1xuXG5cbiAgICAvLyBNYWtlIGNvbnRyb2wgc3RhdGVtZW50IHRvIGVuc3VyZSB0aGF0IGFsbCBmaWVsZHMgYXJlIGNvbXBsZXRlZFxuICAgIGlmICh0aXRsZSA9PT0gJycgfHwgZGVzY3JpcHRpb24gPT09ICcnIHx8IGR1ZURhdGUgPT09ICcnKSB7XG4gICAgICBhbGVydCgnUGxlYXNlIG1ha2Ugc3VyZSB0aGF0IGFsbCBmaWVsZHMgaGF2ZSB2YWx1ZS4nKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBuZXdUb2RvID0gdG9kbyhpZCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlKTtcblxuICAgIHByb2plY3RDb2xsZWN0aW9uLmdldFByb2plY3QoY3VycmVudFByb2plY3RJbmRleCkuYWRkQVRvZG8obmV3VG9kbyk7XG5cbiAgICAvLyBsb2FkIHRvZG8gaW4gcGFnZVxuICAgIGNvbnN0IGNhcmRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmQtY29udGFpbmVyXCIpO1xuICAgIGNvbnN0IG5ld0NhcmQgPSBjcmVhdGVDYXJkKFxuICAgICAgbmV3VG9kby5nZXRJZCgpLFxuICAgICAgbmV3VG9kby5nZXRUaXRsZSgpLFxuICAgICAgbmV3VG9kby5nZXREZXNjcmlwdGlvbigpLFxuICAgICAgbmV3VG9kby5nZXREdWVEYXRlKCksXG4gICAgICBmYWxzZVxuICAgICk7XG4gICAgY2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdDYXJkKTtcblxuICAgIGNvbnN0IGRlbGV0ZUltZyA9IG5ld0NhcmQubGFzdENoaWxkLmxhc3RDaGlsZDtcbiAgICBjb25zdCBlZGl0SW1nID0gbmV3Q2FyZC5sYXN0Q2hpbGQuZmlyc3RDaGlsZDtcbiAgICBjb25zdCBwcm9qZWN0SW5kZXggPSBwcm9qZWN0Q29sbGVjdGlvbi5maW5kUHJvamVjdEluZGV4KGN1cnJlbnRQcm9qZWN0SWQpO1xuXG4gICAgYWRkRXZlbnRUb0RlbGV0ZUFUb2RvKGRlbGV0ZUltZywgcHJvamVjdEluZGV4LCBpZCwgY2FyZENvbnRhaW5lciwgbmV3Q2FyZCk7XG4gICAgYWRkRXZlbnRUb0VkaXRBVG9kbyhlZGl0SW1nLCB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIGZhbHNlKTtcblxuICAgIGV4cG9ydERhdGFUb1N0b3JhZ2UocHJvamVjdENvbGxlY3Rpb24pO1xuXG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChhZGRUb2RvV2luZG93KTtcbiAgfSk7XG59KTtcblxuZnVuY3Rpb24gY2xlYXJDYXJkQ29udGFpbmVyKCkge1xuICBjb25zdCBjYXJkQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkLWNvbnRhaW5lclwiKTtcbiAgY2FyZENvbnRhaW5lci50ZXh0Q29udGVudCA9IFwiXCI7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=