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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".project-card {\\n    margin-top: 100px;\\n}\\n\\n.projectCard {\\n    margin-top: 50px;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/styles/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/styles.css":
/*!*******************************!*\
  !*** ./src/styles/styles.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/styles/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/clearBox.js":
/*!*************************!*\
  !*** ./src/clearBox.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n//function clearBox(content, projectContainer){\n    //content.remove(projectContainer)\n//}\n\nfunction clearBox(projectContainer){\n    projectContainer.remove()\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clearBox);\n\n//# sourceURL=webpack://todo-list/./src/clearBox.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/styles.css */ \"./src/styles/styles.css\");\n/* harmony import */ var _todoList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoList */ \"./src/todoList.js\");\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects */ \"./src/projects.js\");\n/* harmony import */ var _clearBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./clearBox */ \"./src/clearBox.js\");\n/* harmony import */ var _mainpage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mainpage */ \"./src/mainpage.js\");\n/* harmony import */ var _projectone__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./projectone */ \"./src/projectone.js\");\n\n\n\n\n\n\n\n\n\n(0,_mainpage__WEBPACK_IMPORTED_MODULE_4__[\"default\"])()\nconst content = document.querySelector(\".content\")\nconst projectContainer = document.querySelector(\".project-container\")\n\n//project 1 on html\nconst project1Div = document.querySelector(\".project1\")\n//Home div on html\nconst home = document.querySelector(\".main-page\")\n\nhome.addEventListener(\"click\", () => {\n    // move the card declaration here\n    ;(0,_clearBox__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(projectContainer)\n    ;(0,_mainpage__WEBPACK_IMPORTED_MODULE_4__[\"default\"])()\n    \n      \n})\n\n\nproject1Div.addEventListener(\"click\", () => {\n    // move the card declaration here\n    ;(0,_clearBox__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(projectContainer)\n    ;(0,_projectone__WEBPACK_IMPORTED_MODULE_5__[\"default\"])()\n    \n      \n})\n\n\nconst addTodoBtn = document.querySelector(\".new-todo-btn\")\naddTodoBtn.addEventListener(\"click\", _todoList__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\n\nlet addProjectBtn = document.querySelector(\".add-project\")\naddProjectBtn.addEventListener(\"click\", _projects__WEBPACK_IMPORTED_MODULE_2__[\"default\"])\n\n\n//const sumbitBtn = document.querySelector(\".submit\")\n//sumbitBtn.addEventListener('click', projectCreate)\n  \n\n\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/mainpage.js":
/*!*************************!*\
  !*** ./src/mainpage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst content = document.querySelector(\".content\")\nfunction createMainPage() {\n    //add todo button\n    let todoContainer = document.createElement(\"div\")\n    let addTodoDiv = document.createElement(\"div\")\n    let addTodoButtonContainer = document.createElement(\"div\")\n    let addTodoButton = document.createElement(\"button\")\n    //project card\n    let  projectContainer = document.createElement(\"div\")\n    let projectCard = document.createElement(\"div\")\n    let currentCard = document.createElement(\"div\")\n    let currentCardTitle = document.createElement(\"div\")\n    let currentCardTasks = document.createElement(\"div\")\n    let currentProjectTasks = document.createElement(\"div\")\n    //append to the DOM add todo button\n    content.appendChild(projectContainer).className = \"project-container\"\n    projectContainer.appendChild(todoContainer).className = \"Todo-container\"\n    todoContainer.appendChild(addTodoDiv).className = \"add-todo-div\" //text content = add todo\n    todoContainer.appendChild(addTodoButtonContainer).className = \"button-container\"\n    addTodoButtonContainer.appendChild(addTodoButton).className = \"new-todo-btn\"\n\n    //append to the DOM project card\n    projectContainer.appendChild(projectCard).className = \"project-card\"\n    projectCard.appendChild(currentCard).className = \"current-card\"\n    currentCard.appendChild(currentCardTitle).className = \"current-card-title\"\n    currentCard.appendChild(currentCardTasks).className = \"current-card-tasks\"\n    projectCard.appendChild(currentProjectTasks).className = \"current-project-tasks\"\n    //add todo text contents\n    addTodoDiv.textContent = \"Add Todo\"\n    addTodoButton.textContent = \"+\"\n\n    //current projects card text contents\n    currentCardTitle.textContent = \"Default Project\"\n    currentCardTasks.textContent = \"Tasks\"\n\n}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMainPage);\n\n//# sourceURL=webpack://todo-list/./src/mainpage.js?");

/***/ }),

/***/ "./src/projectone.js":
/*!***************************!*\
  !*** ./src/projectone.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst content = document.querySelector(\".content\")\nfunction project1CreatePage() {\n    //add todo button\n    let todoContainer = document.createElement(\"div\")\n    let addTodoDiv = document.createElement(\"div\")\n    let addTodoButtonContainer = document.createElement(\"div\")\n    let addTodoButton = document.createElement(\"button\")\n    //project card\n    let  projectContainer = document.createElement(\"div\")\n    let projectCard = document.createElement(\"div\")\n    let currentCard = document.createElement(\"div\")\n    let currentCardTitle = document.createElement(\"div\")\n    let currentCardTasks = document.createElement(\"div\")\n    let currentProjectTasks = document.createElement(\"div\")\n    //append to the DOM add todo button\n    content.appendChild(projectContainer).className = \"project-container\"\n    projectContainer.appendChild(todoContainer).className = \"Todo-container\"\n    todoContainer.appendChild(addTodoDiv).className = \"add-todo-div\" //text content = add todo\n    todoContainer.appendChild(addTodoButtonContainer).className = \"button-container\"\n    addTodoButtonContainer.appendChild(addTodoButton).className = \"new-todo-btn\"\n\n    //append to the DOM project card\n    projectContainer.appendChild(projectCard).className = \"project-card\"\n    projectCard.appendChild(currentCard).className = \"current-card\"\n    currentCard.appendChild(currentCardTitle).className = \"current-card-title\"\n    currentCard.appendChild(currentCardTasks).className = \"current-card-tasks\"\n    projectCard.appendChild(currentProjectTasks).className = \"current-project-tasks\"\n    //add todo text contents\n    addTodoDiv.textContent = \"Add Todo\"\n    addTodoButton.textContent = \"+\"\n\n    //current projects card text contents\n    currentCardTitle.textContent = \"project 1\"\n    currentCardTasks.textContent = \"Tasks\"\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (project1CreatePage);\n\n//# sourceURL=webpack://todo-list/./src/projectone.js?");

/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"defaultProject\": () => (/* binding */ defaultProject)\n/* harmony export */ });\nlet addProjectBtn = document.querySelector(\".add-project\")\nlet formDiv = document.querySelector(\".form-container\")\nlet projectContainer = document.querySelector(\".projects-div\")\n// get the project add button from html\naddProjectBtn.addEventListener(\"click\", formProjectCreate)\n\n//creates the form to make a project\nfunction formProjectCreate() {\n    const form = document.createElement(\"form\")\n    const formBoxProject = document.createElement(\"div\")\n    const projectLabel = document.createElement(\"label\")\n    \n    const input = document.createElement(\"input\")\n    const submitProject = document.createElement(\"button\")\n    submitProject.type = \"submit\"\n\n    formDiv.appendChild(form).className = \"form\"\n    form.appendChild(formBoxProject).className = \"formBox\"\n    formBoxProject.appendChild(projectLabel).className = \"projectLabel\"\n    formBoxProject.appendChild(input).className =\"input\"\n    formBoxProject.appendChild(submitProject).className = \"submitProject\"\n\n    projectLabel.textContent = \"Project Name\"\n    submitProject.textContent = \"Add\"\n\n    submitProject.addEventListener(\"click\", projectCreate)\n}\n\n\n//takes the form details and creates a project card\nfunction projectCreate(ev) {\n    //stoping the submit\n    ev.preventDefault();\n     \n    \n    //getting the values\n   const input = document.querySelector(\".input\")\n\n    const project =  projectFactory(input.value)\n\n    console.log(project)\n\n   ev.target.closest(\"form\").remove() \n\n   //project card\n   const projectCard = document.createElement(\"div\")\n   const projectName = document.createElement(\"h1\")\n   const ProjectTask = document.createElement(\"div\")\n   const taskTitle = document.createElement(\"p\")\n   const todoCard = document.createElement(\"div\")\n   const addTodo = document.createElement('button') \n   \n   projectContainer.appendChild(projectCard).className = \"projectCard\"\n   projectCard.appendChild(projectName).className = input.value\n   projectCard.appendChild(ProjectTask).className = \"projectTask\"\n   ProjectTask.appendChild(taskTitle).className = \"taskTitle\" \n   projectCard.appendChild(todoCard).className = \"todoCard\"\n   projectCard.appendChild(addTodo).className = \"add-todo-Btn2\" \n\n\n   projectName.textContent = input.value\n   todoCard.textContent = \"Add Todo\"\n   addTodo.textContent = \"+\"\n   \n    \n\n} \n\n\n\n// default Project\n\nconst defaultProject = projectFactory(\"Default Project\")\nconsole.log(defaultProject)\n\n\n//project factory function\nfunction projectFactory(title) {\n    return { \n      title,\n      tasks: []\n    }\n    \n} \n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formProjectCreate);\n\n//# sourceURL=webpack://todo-list/./src/projects.js?");

/***/ }),

/***/ "./src/todoList.js":
/*!*************************!*\
  !*** ./src/todoList.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"makeTodo\": () => (/* binding */ makeTodo)\n/* harmony export */ });\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ \"./src/projects.js\");\n/* harmony import */ var _mainpage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mainpage */ \"./src/mainpage.js\");\n\n\nconst projectContainer = document.querySelector(\".project-container\")\n\nconst defaultProjectVar = _projects__WEBPACK_IMPORTED_MODULE_0__.defaultProject\n\nconst content = document.querySelector(\".content\")\nconst addTodoBtn = document.querySelector(\".new-todo-btn\")\n//storage for todos\nlet todoStorage = [];\n\n//todo constructor\nfunction Todo (title, description, date) {\n    this.title = title\n    this.description = description\n    this.date = date\n    this.id = Date.now()\n    \n}\n\n//function projectFactory(title) {\n   // return { \n   //   title,\n    //  tasks: []\n   // }\n//} \n\n//const home = projectFactory(\"Home\")\n\n// First FormCreate create a form\nfunction formCreate() {  \nconst form = document.createElement(\"form\")\nconst formBoxTitle = document.createElement(\"div\")\nconst labelTitle = document.createElement(\"label\")\nlabelTitle.for = \"title\"\nconst title = document.createElement(\"input\")\n\nconst formBoxDescription = document.createElement(\"div\")\nconst labelDescription = document.createElement(\"label\")\nlabelDescription.for = \"title\"\nconst description = document.createElement(\"input\")\n\nconst formBoxDate = document.createElement(\"div\")\nconst dueDateLabel = document.createElement(\"label\")\ndueDateLabel.for = \"date\"\nconst dueDate = document.createElement(\"input\")\ndueDate.type = \"date\"\n\nconst sumbitBtn = document.createElement(\"button\")\nsumbitBtn.type = \"submit\"\n\ncontent.appendChild(projectContainer).className = \"project-container\"\nprojectContainer.appendChild(form).className = \"form\";\nform.appendChild(formBoxTitle)\nformBoxTitle.appendChild(labelTitle)\nformBoxTitle.appendChild(title).className = \"title\"\nform.appendChild(formBoxDescription)\nformBoxDescription.appendChild(labelDescription)\nformBoxDescription.appendChild(description).className = \"description\"\nform.appendChild(formBoxDate)\nformBoxDate.appendChild(dueDateLabel)\nformBoxDate.appendChild(dueDate).className = \"date\"\n\nform.appendChild(sumbitBtn).className = \"submit\"\n\n\nlabelTitle.textContent = \"Title:\"\nlabelDescription.textContent = \"Description:\"\nsumbitBtn.textContent = \"Submit\"\n\nsumbitBtn.addEventListener('click', makeTodo)\n}\n\n\n//  make todo makes the todo object and and pushes it,and then creates a card with the info\nfunction makeTodo(ev) {\n    ev.preventDefault();\n    const title = document.querySelector(\".title\")\n    const description = document.querySelector(\".description\")\n    const date = document.querySelector(\".date\")\n\n    const card = document.createElement(\"div\")\n    let cardText = document.createElement(\"div\")\n    let para1 = document.createElement(\"p\");\n    let para2 = document.createElement(\"p\"); \n    let para3 = document.createElement(\"p\"); \n    const deleteBtn = document.createElement(\"button\")\n\n    // edw pou einai pou tha fanei sto DOM h karta\n    content.appendChild(projectContainer).className = \"project-container\"\n    projectContainer.appendChild(card).className = \"card\"\n    card.appendChild(cardText).className = \"cardText\"\n    cardText.appendChild(para1).className = \"title\"\n    cardText.appendChild(para2).className = \"description\"\n    cardText.appendChild(para3).className = \"date\"\n    card.appendChild(deleteBtn).className = \"delete\"\n\n    //creates todo \n    const todo = new Todo(title.value, description.value, date.value )\n    //matches the delete button with the todo id \n    deleteBtn.value = todo.id\n    //pushes the new todo to the todoStorage\n    todoStorage.push(todo)\n    //edw prepei na uparxei enas tropos na mporw na stelnw to kathe todo sto project pou thelw\n    defaultProjectVar.tasks.push(todo)\n    console.log(todoStorage)\n    // deletes the todo form\n    ev.target.closest(\"form\").remove() \n\n    //Fills the Todo Card with the inputs that it got from the Todo form\n    para1.textContent = \"Title:\" + \" \" + title.value\n    para2.textContent = \"Description:\" + \" \" +   description.value\n    para3.textContent = \"Date:\" + \" \" +    date.value\n    deleteBtn.textContent = \"Delete\"\n    deleteBtn.addEventListener(\"click\", deleteTodo)\n\n   console.log(defaultProjectVar)\n   // projectCreate(ev)\n      \n    \n}\n\n//function projectCreate(ev) {\n  //  ev.preventDefault();\n  //  console.log(home)\n//}\n\n\n// last deletes the todo from they array and from the DOM\n// second deletes the task(todo) that passed in to the given project\nfunction deleteTodo(ev){\n    const id = ev.target.value;\n    todoStorage = todoStorage.filter(\n       todo => {\n       if(todo.id == id) {\n        return false\n       } else {\n        return true\n       }\n    })\n    defaultProjectVar.tasks = defaultProjectVar.tasks.filter(\n        todo => {\n        if(todo.id == id) {\n         return false\n        } else {\n         return true\n        }\n     })\n    \n    ev.target.closest('.card').remove();\n}\n\n\n\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formCreate);\n\n\n//# sourceURL=webpack://todo-list/./src/todoList.js?");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;