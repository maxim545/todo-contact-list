/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/app.js":
/*!*******************************!*\
  !*** ./src/components/app.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model */ "./src/components/model.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }



var App = /*#__PURE__*/function () {
  function App() {
    _classCallCheck(this, App);

    this.model = new _model__WEBPACK_IMPORTED_MODULE_0__["default"]();
  }

  _createClass(App, [{
    key: "start",
    value: function start() {
      this.model.createItems();
    }
  }]);

  return App;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ "./src/components/common/createElement.js":
/*!************************************************!*\
  !*** ./src/components/common/createElement.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var CreateElement = /*#__PURE__*/function () {
  function CreateElement() {
    _classCallCheck(this, CreateElement);
  }

  _createClass(CreateElement, [{
    key: "create",
    value: function create(tagName, elementInner, className, insertTag) {
      var element = document.createElement(tagName);
      element.innerHTML = elementInner;
      element.className = className;

      if (insertTag) {
        insertTag.append(element);
      }

      return element;
    }
  }]);

  return CreateElement;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CreateElement);

/***/ }),

/***/ "./src/components/controller.js":
/*!**************************************!*\
  !*** ./src/components/controller.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Controller = /*#__PURE__*/function () {
  function Controller() {
    _classCallCheck(this, Controller);
  }

  _createClass(Controller, [{
    key: "addContact",
    value: function addContact(name, phone, groupe) {
      var listOfItems = JSON.parse(localStorage.getItem('items')) || {};
      var newContact = {
        id: listOfItems[groupe].length,
        name: name,
        phone: phone
      };
      listOfItems[groupe].push(newContact);
      localStorage.setItem('items', JSON.stringify(listOfItems));
      this.toggleMenu();
    }
  }, {
    key: "deleteContact",
    value: function deleteContact(id, groupeName) {
      var listOfItems = JSON.parse(localStorage.getItem('items'));
      var currentIndex = listOfItems[groupeName].findIndex(function (el) {
        return el.id === id;
      });
      listOfItems[groupeName].splice(currentIndex, 1);
      localStorage.setItem('items', JSON.stringify(listOfItems));
    }
  }, {
    key: "updateContact",
    value: function updateContact(id, name, phone, newGroupe, oldGroupe) {
      var listOfItems = JSON.parse(localStorage.getItem('items')) || {};
      var newContact = {
        id: listOfItems[newGroupe].length,
        name: name,
        phone: phone
      };

      if (newGroupe !== oldGroupe) {
        var currentIndex = listOfItems[oldGroupe].findIndex(function (el) {
          return el.id === id;
        });
        listOfItems[oldGroupe].splice(currentIndex, 1);
        listOfItems[newGroupe].push(newContact);
        localStorage.setItem('items', JSON.stringify(listOfItems));
      } else {
        var currentContact = listOfItems[newGroupe].find(function (el) {
          return el.id === id;
        });
        currentContact.name = name;
        currentContact.phone = phone;
        localStorage.setItem('items', JSON.stringify(listOfItems));
      }

      this.toggleMenu();
    }
  }, {
    key: "updateGroupNames",
    value: function updateGroupNames() {
      var listOfItems = JSON.parse(localStorage.getItem('items')) || {};
      var groupNameArr = Object.keys(listOfItems);
      var allInputs = document.querySelectorAll('.menu__input');
      var inputValues = [];
      allInputs.forEach(function (input) {
        if (input.value) {
          inputValues.push(input.value);
        }
      });
      var newNameArr = new Set([].concat(inputValues));
      var newItems = {};
      newNameArr.forEach(function (item) {
        if (groupNameArr.includes(item)) {
          newItems[item] = listOfItems[item];
        } else {
          newItems[item] = [];
        }
      });
      localStorage.setItem('items', JSON.stringify(newItems));
      this.toggleMenu();
    }
  }, {
    key: "toggleMenu",
    value: function toggleMenu() {
      var blur = document.querySelector('.blur');
      blur.classList.toggle("active");
      var headerMenu = document.querySelector('.header__menu');
      var contactsBtn = document.querySelector('.buttons__contact');
      var groupBtn = document.querySelector('.buttons__group');
      var menuIsOpen = false;
      headerMenu.classList.toggle("header__menu_active");
      menuIsOpen = !menuIsOpen;
    }
  }, {
    key: "makeNameMask",
    value: function makeNameMask(e, element, btn) {
      var value = e.target.value;
      var valueArr = value.split(" ").filter(function (str) {
        return str.trim() != '';
      });

      if (valueArr.length !== 3 || value.length <= 9 || /\d/.test(value)) {
        element.innerHTML = 'Введите ФИО в формате "Фамилия Имя Отчество"';
        btn.disabled = true;
      } else {
        element.innerHTML = '';
        btn.disabled = false;
      }
    }
  }, {
    key: "makePhoneMask",
    value: function makePhoneMask(e, element, btn) {
      var matrix = "+7 (___) ___ - __ - __";
      var def = matrix.replace(/\D/g, "");
      var i = 0;
      var val = e.target.value.replace(/\D/g, "");

      if (def.length >= val.length) {
        val = def;
      }

      ;
      e.target.value = matrix.replace(/./g, function (a) {
        return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a;
      });

      if (e.target.value.length !== 22) {
        element.innerHTML = 'Введите номер в формате +7 (XXX) XXX-XX-XX';
        btn.disabled = true;
      } else {
        element.innerHTML = '';
        btn.disabled = false;
      }
    }
  }]);

  return Controller;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Controller);

/***/ }),

/***/ "./src/components/model.js":
/*!*********************************!*\
  !*** ./src/components/model.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view */ "./src/components/view.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }



var Model = /*#__PURE__*/function () {
  function Model() {
    _classCallCheck(this, Model);

    this.view = new _view__WEBPACK_IMPORTED_MODULE_0__["default"]();
    this.listOfItems = JSON.parse(localStorage.getItem('items')) || {};
    this.groupNameArr = Object.keys(this.listOfItems);
  }

  _createClass(Model, [{
    key: "createItems",
    value: function createItems() {
      var _this = this;

      var contactsBtn = document.querySelector('.buttons__contact');
      var groupBtn = document.querySelector('.buttons__group');
      contactsBtn.addEventListener('click', function () {
        _this.view.renderContactEditor();
      });
      groupBtn.addEventListener('click', function () {
        _this.view.renderGroupEditor();
      });
      this.view.renderItems(this.listOfItems, this.groupNameArr);
    }
  }, {
    key: "handlAddGroup",
    value: function handlAddGroup(data) {
      this.model.updateGroup(data);
    }
  }]);

  return Model;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Model);

/***/ }),

/***/ "./src/components/view.js":
/*!********************************!*\
  !*** ./src/components/view.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _common_createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common/createElement */ "./src/components/common/createElement.js");
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controller */ "./src/components/controller.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }




var View = /*#__PURE__*/function () {
  function View() {
    _classCallCheck(this, View);

    this.controller = new _controller__WEBPACK_IMPORTED_MODULE_1__["default"]();
    this.createEl = new _common_createElement__WEBPACK_IMPORTED_MODULE_0__["default"]();
  }

  _createClass(View, [{
    key: "renderItems",
    value: function renderItems(items, groupNameArr) {
      var _this = this;

      var itemsElement = document.querySelector('.tabs');

      if (groupNameArr.length) {
        itemsElement.innerHTML = '';
        var itemGroup = this.createEl.create('div', '', 'tabs__wrapper', itemsElement);
        groupNameArr.forEach(function (groupName, i) {
          var itemEL = _this.createEl.create('div', '', 'tab', itemGroup);

          var input = _this.createEl.create('input', '', 'tab__input', itemEL);

          input.type = 'checkbox';
          input.id = "tab_".concat(i);

          var label = _this.createEl.create('label', '', 'tab__label', itemEL);

          label.htmlFor = "tab_".concat(i);

          _this.createEl.create('div', groupName, 'tab__header', label);

          var content = _this.createEl.create('div', '', 'tab__content', itemEL);

          if (!items[groupName].length) {
            _this.createEl.create('div', "\u0421\u043F\u0438\u0441\u043E\u043A ".concat(groupName.toLowerCase(), " \u043F\u0443\u0441\u0442"), 'tab__item', content);
          } else {
            items[groupName].forEach(function (item) {
              var contactEl = _this.createEl.create('div', '', 'tab__item item', content);

              _this.createEl.create('div', item.name, 'item__name', contactEl);

              _this.createEl.create('div', item.phone, 'item__phone', contactEl);

              var itemBtns = _this.createEl.create('div', '', 'item__btns', contactEl);

              var editBtn = _this.createEl.create('button', '', 'btn btn_edit item__btn', itemBtns);

              var deleteBtn = _this.createEl.create('button', '', 'btn btn_delete item__btn', itemBtns);

              editBtn.addEventListener('click', function () {
                _this.renderContactEditor(item.id, item.name, item.phone, groupName);
              });
              deleteBtn.addEventListener('click', function () {
                content.removeChild(contactEl);

                _this.controller.deleteContact(item.id, groupName);

                if (!item.id) {
                  _this.createEl.create('div', "\u0421\u043F\u0438\u0441\u043E\u043A ".concat(groupName.toLowerCase(), " \u043F\u0443\u0441\u0442"), 'tab__item', content);
                }
              });
            });
          }
        });
      } else {
        itemsElement.innerHTML = '';
        this.createEl.create('div', 'Список контактов пуст', 'tabs__message', itemsElement);
      }
    }
  }, {
    key: "reRenderItems",
    value: function reRenderItems() {
      var listOfItems = JSON.parse(localStorage.getItem('items')) || {};
      var groupNameArr = Object.keys(listOfItems);
      this.renderItems(listOfItems, groupNameArr);
    }
  }, {
    key: "renderMenu",
    value: function renderMenu(title) {
      var _this2 = this;

      var headerMenu = document.querySelector('.header__menu');

      if (headerMenu) {
        headerMenu.innerHTML = '';
        var menuWrapper = this.createEl.create('div', '', 'menu__wrapper', headerMenu);
        var menuTop = this.createEl.create('div', '', 'menu__top ', menuWrapper);
        this.createEl.create('div', title, 'menu__title', menuTop);
        var closeMenuBtn = this.createEl.create('button', '', 'btn menu__button menu__button_top', menuTop);
        closeMenuBtn.addEventListener('click', function () {
          _this2.controller.toggleMenu();
        });
        return [headerMenu, menuWrapper];
      }
    }
  }, {
    key: "renderContactEditor",
    value: function renderContactEditor(id, name, phone, groupName) {
      var _this3 = this;

      this.controller.toggleMenu();
      var listOfItems = JSON.parse(localStorage.getItem('items')) || {};
      var groupNameArr = Object.keys(listOfItems);

      var _this$renderMenu = this.renderMenu('Добавление контакта'),
          _this$renderMenu2 = _slicedToArray(_this$renderMenu, 2),
          headerMenu = _this$renderMenu2[0],
          menuWrapper = _this$renderMenu2[1];

      if (headerMenu) {
        var menuCenter = this.createEl.create('div', '', 'menu__center', menuWrapper);
        var menuItemName = this.createEl.create('div', '', 'menu__item', menuCenter);
        var inputName = this.createEl.create('input', '', 'menu__input', menuItemName);
        inputName.placeholder = 'Введите ФИО';
        var nameSubtitle = this.createEl.create('p', '', 'menu__subtitle', menuItemName);

        if (name) {
          inputName.value = name;
        }

        var menuItemPhone = this.createEl.create('div', '', 'menu__item', menuCenter);
        var inputPhone = this.createEl.create('input', '', 'menu__input', menuItemPhone);
        inputPhone.placeholder = 'Введите номер';
        var phoneSubtitle = this.createEl.create('p', '', 'menu__subtitle', menuItemPhone);

        if (phone) {
          inputPhone.value = phone;
        }

        var select = this.createEl.create('select', '', 'menu__select', menuCenter);
        this.createEl.create('option', 'Выберите группу', 'menu__option', select);
        groupNameArr.forEach(function (name) {
          _this3.createEl.create('option', name, 'menu__option', select);
        });

        if (groupName) {
          select.value = groupName;
        }

        var menuBottom = this.createEl.create('div', '', 'menu__bottom', menuWrapper);
        var saveBtn = this.createEl.create('button', 'Сохранить', 'btn btn_blue menu__btn', menuBottom);
        var btnSubtitle = this.createEl.create('p', '', 'menu__subtitle', menuBottom);
        inputName.addEventListener('input', function (e) {
          _this3.controller.makeNameMask(e, nameSubtitle, saveBtn);
        });
        inputPhone.addEventListener('input', function (e) {
          _this3.controller.makePhoneMask(e, phoneSubtitle, saveBtn);
        });
        saveBtn.addEventListener('click', function () {
          if (inputName.value && inputPhone.value && select.value !== 'Выберите группу') {
            if (id) {
              _this3.controller.updateContact(id, inputName.value, inputPhone.value, select.value, groupName);
            } else {
              _this3.controller.addContact(inputName.value, inputPhone.value, select.value);
            }

            _this3.reRenderItems();
          } else {
            btnSubtitle.innerHTML = 'Заполните все поля';
          }
        });
      }
    }
  }, {
    key: "renderGroupEditor",
    value: function renderGroupEditor() {
      var _this4 = this;

      var listOfItems = JSON.parse(localStorage.getItem('items')) || {};
      var groupNameArr = Object.keys(listOfItems);
      this.controller.toggleMenu();

      var _this$renderMenu3 = this.renderMenu('Добавление группы'),
          _this$renderMenu4 = _slicedToArray(_this$renderMenu3, 2),
          headerMenu = _this$renderMenu4[0],
          menuWrapper = _this$renderMenu4[1];

      if (headerMenu) {
        var menuCenter = this.createEl.create('div', '', 'menu__center', menuWrapper);
        var menuBottom = this.createEl.create('div', '', 'menu__bottom', menuWrapper);
        groupNameArr.forEach(function (name) {
          var menuItem = _this4.createEl.create('div', '', 'menu__item', menuCenter);

          var input = _this4.createEl.create('input', '', 'menu__input menu__input_groupe', menuItem);

          input.type = 'text';
          input.disabled = true;
          input.value = name;

          var deletNameBtn = _this4.createEl.create('button', '', 'btn btn_delete menu__button', menuItem);

          deletNameBtn.addEventListener('click', function (e) {
            e.stopPropagation();
            menuCenter.removeChild(menuItem);
          });
        });
        var addGroupBtn = this.createEl.create('button', 'Добавить', 'btn menu__btn menu__btn_add', menuBottom);
        var saveGroupeBtn = this.createEl.create('button', 'Сохранить', 'btn btn_blue menu__btn', menuBottom);
        addGroupBtn.addEventListener('click', function () {
          var menuItem = _this4.createEl.create('div', '', 'menu__item', menuCenter);

          var input = _this4.createEl.create('input', '', 'menu__input menu__input_groupe', menuItem);

          input.type = 'text';
          input.placeholder = 'Ввведите название';

          var deletNameBtn = _this4.createEl.create('button', '', 'btn btn_delete menu__button ', menuItem);

          deletNameBtn.addEventListener('click', function (e) {
            e.stopPropagation();
            menuCenter.removeChild(menuItem);
          });
          menuCenter.append(menuItem);
        });
        saveGroupeBtn.addEventListener('click', function () {
          _this4.controller.updateGroupNames();

          _this4.reRenderItems();
        });
      }
    }
  }]);

  return View;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (View);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_normalize_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./normalize.scss */ "./node_modules/css-loader/dist/cjs.js!./src/styles/normalize.scss");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_reboot_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./reboot.scss */ "./node_modules/css-loader/dist/cjs.js!./src/styles/reboot.scss");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_4__);
// Imports





var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/icons/plus.svg */ "./src/assets/icons/plus.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./../assets/icons/delete.svg */ "./src/assets/icons/delete.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./../assets/icons/delete-white.svg */ "./src/assets/icons/delete-white.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./../assets/icons/edit.svg */ "./src/assets/icons/edit.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./../assets/icons/edit-white.svg */ "./src/assets/icons/edit-white.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./../assets/icons/close.svg */ "./src/assets/icons/close.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/icons/arrow.svg */ "./src/assets/icons/arrow.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ./../assets/icons/arrow.svg */ "./src/assets/icons/arrow.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_normalize_scss__WEBPACK_IMPORTED_MODULE_2__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_reboot_scss__WEBPACK_IMPORTED_MODULE_3__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_4___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_4___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_4___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_4___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_4___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_4___default()(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_4___default()(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_4___default()(___CSS_LOADER_URL_IMPORT_7___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  font-family: \"Arial\";\n  background-color: #f6f7f9;\n  font-style: normal;\n}\n\n.container {\n  margin: 0 auto;\n  padding: 0 15px;\n  max-width: 1130px;\n}\n\n.btn {\n  border: 0;\n  cursor: pointer;\n}\n.btn_red {\n  padding: 10px 35px 10px 15px;\n  font-weight: 700;\n  font-size: 14px;\n  line-height: 18px;\n  color: #FFFFFF;\n  border-radius: 6px;\n  background-color: #f81155;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-repeat: no-repeat;\n  background-position: 150px center;\n}\n.btn_red:hover {\n  background-color: #D1003E;\n  transition: 0.4s ease-in-out;\n}\n.btn_blue {\n  padding: 10px 15px;\n  background: #005BFE;\n  font-weight: 700;\n  font-size: 14px;\n  line-height: 18px;\n  color: #FFFFFF;\n  border-radius: 6px;\n}\n.btn_blue:hover {\n  background-color: #0047C6;\n  transition: 0.4s ease-in-out;\n}\n.btn_blue:disabled {\n  background-color: #0d316e;\n  cursor: default;\n  color: #dadada;\n}\n.btn_delete {\n  display: block;\n  width: 38px;\n  height: 38px;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") no-repeat center center;\n  border: 1px solid #c6c6c6;\n  border-radius: 6px;\n}\n.btn_delete:hover {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") no-repeat center center;\n  background-color: #EA3D2F;\n  border-color: #EA3D2F;\n  transition: 0.4s ease-in-out;\n}\n.btn_edit {\n  display: block;\n  width: 38px;\n  height: 38px;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") no-repeat center center;\n  border: 1px solid #c6c6c6;\n  border-radius: 6px;\n}\n.btn_edit:hover {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") no-repeat center center;\n  background-color: #005BFE;\n  border-color: #005BFE;\n  transition: 0.4s ease-in-out;\n}\n\n.header {\n  background-color: #fff;\n  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);\n}\n.header__wrapper {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 16px 0;\n}\n.header__logo {\n  display: flex;\n  align-items: center;\n}\n.header__title {\n  font-weight: 700;\n  font-size: 18px;\n  line-height: 120%;\n  color: #005BFE;\n}\n.header__img {\n  margin-right: 16px;\n}\n.header__menu {\n  position: fixed;\n  left: -100%;\n  top: 0;\n  transform: translateX(-100%);\n  width: 312px;\n  height: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: start;\n  overflow: auto;\n  z-index: 3;\n  background-color: #fff;\n  transition: 0.6s ease-in-out;\n  box-shadow: 6px 0px 8px 0px rgba(34, 60, 80, 0.2);\n  overflow-x: hidden;\n}\n.header__menu_active {\n  left: 0;\n  transform: translateX(0);\n  transition: 0.4s ease-in-out;\n  z-index: 99;\n}\n.header__buttons {\n  display: flex;\n  gap: 0 20px;\n}\n\n.blur.active {\n  width: 100vw;\n  height: 100vh;\n  position: fixed;\n  left: 0;\n  top: 0;\n  background-color: #000;\n  opacity: 0.3;\n}\n\n.menu__wrapper {\n  height: 100%;\n  width: 100%;\n  padding: 22px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.menu__top {\n  position: relative;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-bottom: 25px;\n  font-weight: 700;\n  font-size: 18px;\n  line-height: 120%;\n  color: #000;\n}\n.menu__top::before {\n  content: \"\";\n  position: absolute;\n  bottom: 0;\n  left: -30px;\n  right: -40px;\n  border: 1px solid #e6e6e6;\n}\n.menu__button_top {\n  height: 16px;\n  width: 16px;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") no-repeat center center;\n  padding: 11px;\n  border-radius: 6px;\n  transition: 0.5s ease-in-out;\n}\n.menu__button_top:hover {\n  height: 16px;\n  width: 16px;\n  background-color: #D9D9D9;\n}\n.menu__center {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 16px 0;\n  padding-top: 25px;\n  margin-bottom: auto;\n}\n.menu__item {\n  display: flex;\n  justify-content: space-between;\n}\n.menu__input {\n  display: block;\n  width: 100%;\n  height: 38px;\n  padding: 0 10px;\n  color: #000;\n  background: #f2f2f2;\n  border-radius: 6px;\n  border: 0;\n  color: #797979;\n}\n.menu__input_groupe {\n  max-width: 214px;\n}\n.menu__select {\n  display: block;\n  position: relative;\n  width: 100%;\n  height: 38px;\n  padding: 0 10px;\n  background: #f2f2f2;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ");\n  background-repeat: no-repeat;\n  background-position: 245px center;\n  border-radius: 6px;\n  border: 0;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  cursor: pointer;\n  color: #797979;\n}\n.menu__item {\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n}\n.menu__bottom {\n  margin-left: auto;\n  padding-top: 24px;\n}\n.menu__btn_add {\n  margin-right: 12px;\n  padding: 10px 15px;\n  color: #005BFE;\n  background-color: transparent;\n  border-radius: 6px;\n  font-weight: 700;\n  font-size: 14px;\n  line-height: 18px;\n}\n.menu__btn_add:hover {\n  background-color: #ced8e7;\n  transition: 0.4s ease-in-out;\n}\n.menu__subtitle {\n  display: block;\n  margin: 4px 0 0 0;\n  font-size: 11px;\n  color: red;\n}\n\n.tabs {\n  margin-top: 55px;\n}\n.tabs__wrapper {\n  overflow: hidden;\n}\n.tabs__message {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n  color: #000000;\n  opacity: 0.3;\n  font-weight: 400;\n  font-size: 18px;\n  line-height: 18px;\n}\n\n.tab {\n  width: 100%;\n  overflow: hidden;\n  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);\n  border-radius: 6px;\n}\n.tab:not(:first-child) {\n  margin-top: 20px;\n}\n.tab__input {\n  position: absolute;\n  opacity: 0;\n  z-index: -1;\n}\n.tab__label {\n  display: flex;\n  justify-content: space-between;\n  padding: 24px;\n  background: #fff;\n  font-weight: bold;\n  cursor: pointer;\n}\n.tab__label:hover {\n  background-color: #fafafa;\n}\n.tab__label::after {\n  content: \"\";\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ") no-repeat center;\n  width: 16px;\n  color: #17696A;\n  height: 16px;\n  text-align: center;\n  transition: 0.45s ease-in-out;\n  transform: rotate(180deg);\n}\n.tab__label:hover::after {\n  color: #4ba2a3;\n}\n.tab__header {\n  width: 100%;\n  margin-right: 20px;\n  font-weight: 700;\n  font-size: 18px;\n  line-height: 120%;\n}\n.tab__content {\n  max-height: 0;\n  padding: 0 24px;\n  color: #2c3e50;\n  background: #fff;\n  transition: all 0.5s;\n}\n.tab__item {\n  display: flex;\n  justify-content: space-between;\n  gap: 0 20px;\n  align-items: center;\n  border-top: 1px solid #f6f6f6;\n  padding: 15px 0;\n}\n.tab__input:checked + .tab__label {\n  background: #fff;\n  color: #005BFE;\n}\n.tab__input:checked + .tab__label::after {\n  content: \"\";\n  transform: rotate(0deg);\n}\n.tab__input:checked ~ .tab__content {\n  max-height: 100vh;\n  padding: 0 24px;\n}\n\n.item__name {\n  font-weight: 400;\n  font-size: 18px;\n  line-height: 120%;\n  color: #000000;\n  opacity: 0.5;\n}\n.item__phone {\n  font-weight: 400;\n  font-size: 18px;\n  line-height: 120%;\n  color: #000000;\n  margin-left: auto;\n}\n.item__btns {\n  display: flex;\n  gap: 0 15px;\n}\n\n@media (max-width: 767px) {\n  .item {\n    flex-direction: column;\n    gap: 30px 0;\n  }\n\n  .item__phone {\n    margin-left: 0px;\n  }\n}\n@media (max-width: 650px) {\n  .header__wrapper {\n    flex-direction: column;\n    gap: 30px;\n  }\n}", "",{"version":3,"sources":["webpack://./src/styles/main.scss"],"names":[],"mappings":"AAgBA;EACE,oBALU;EAMV,yBAAA;EACA,kBAAA;AAbF;;AAiBA;EACE,cAAA;EACA,eAAA;EACA,iBAAA;AAdF;;AAiBA;EACE,SAAA;EACA,eAAA;AAdF;AAgBE;EACE,4BAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,cAAA;EACA,kBAAA;EACA,yBA7BQ;EA8BR,yDAAA;EACA,4BAAA;EACA,iCAAA;AAdJ;AAiBE;EACE,yBAAA;EACA,4BAAA;AAfJ;AAkBE;EACE,kBAAA;EACA,mBA/CG;EAgDH,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,cAAA;EACA,kBAAA;AAhBJ;AAmBE;EACE,yBArDQ;EAsDR,4BAAA;AAjBJ;AAoBE;EACE,yBAAA;EACA,eAAA;EACA,cAAA;AAlBJ;AAqBE;EACE,cAAA;EACA,WAAA;EACA,YAAA;EACA,2EAAA;EACA,yBAAA;EACA,kBAAA;AAnBJ;AAsBE;EACE,2EAAA;EACA,yBAzEE;EA0EF,qBA1EE;EA2EF,4BAAA;AApBJ;AAuBE;EACE,cAAA;EACA,WAAA;EACA,YAAA;EACA,2EAAA;EACA,yBAAA;EACA,kBAAA;AArBJ;AAwBE;EACE,2EAAA;EACA,yBA7FG;EA8FH,qBA9FG;EA+FH,4BAAA;AAtBJ;;AA8BA;EACE,sBAAA;EACA,4CAAA;AA3BF;AA6BE;EACE,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,eAAA;AA3BJ;AA8BE;EACE,aAAA;EACA,mBAAA;AA5BJ;AA+BE;EACE,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,cA3HG;AA8FP;AAgCE;EACE,kBAAA;AA9BJ;AAiCE;EACE,eAAA;EACA,WAAA;EACA,MAAA;EACA,4BAAA;EACA,YAAA;EACA,YAAA;EACA,aAAA;EACA,eAAA;EACA,kBAAA;EACA,cAAA;EACA,UAAA;EACA,sBAAA;EACA,4BAAA;EACA,iDAAA;EACA,kBAAA;AA/BJ;AAkCE;EACE,OAAA;EACA,wBAAA;EACA,4BAAA;EACA,WAAA;AAhCJ;AAmCE;EACE,aAAA;EACA,WAAA;AAjCJ;;AAsCA;EACE,YAAA;EACA,aAAA;EACA,eAAA;EACA,OAAA;EACA,MAAA;EACA,sBAzKI;EA0KJ,YAAA;AAnCF;;AAuCE;EACE,YAAA;EACA,WAAA;EACA,aAAA;EACA,aAAA;EACA,sBAAA;EACA,8BAAA;AApCJ;AAuCE;EACE,kBAAA;EACA,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,oBAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,WAhME;AA2JN;AAwCE;EACE,WAAA;EACA,kBAAA;EACA,SAAA;EACA,WAAA;EACA,YAAA;EACA,yBAAA;AAtCJ;AAyCE;EACE,YAAA;EACA,WAAA;EACA,2EAAA;EACA,aAAA;EACA,kBAAA;EACA,4BAAA;AAvCJ;AA0CE;EACE,YAAA;EACA,WAAA;EACA,yBAAA;AAxCJ;AA2CE;EACE,aAAA;EACA,eAAA;EACA,WAAA;EACA,iBAAA;EACA,mBAAA;AAzCJ;AA4CE;EACE,aAAA;EACA,8BAAA;AA1CJ;AA6CE;EACE,cAAA;EACA,WAAA;EACA,YAAA;EACA,eAAA;EACA,WA7OE;EA8OF,mBAAA;EACA,kBAAA;EACA,SAAA;EACA,cA9OG;AAmMP;AA8CE;EACE,gBAAA;AA5CJ;AA+CE;EACE,cAAA;EACA,kBAAA;EACA,WAAA;EACA,YAAA;EACA,eAAA;EACA,mBAAA;EACA,yDAAA;EACA,4BAAA;EACA,iCAAA;EACA,kBAAA;EACA,SAAA;EACA,wBAAA;EACA,qBAAA;EACA,gBAAA;EACA,eAAA;EACA,cArQG;AAwNP;AAiDE;EACE,WAAA;EACA,aAAA;EACA,eAAA;AA/CJ;AAkDE;EACE,iBAAA;EACA,iBAAA;AAhDJ;AAmDE;EACE,kBAAA;EACA,kBAAA;EACA,cAzRG;EA0RH,6BAAA;EACA,kBAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;AAjDJ;AAoDE;EACE,yBAjSI;EAkSJ,4BAAA;AAlDJ;AAqDE;EACE,cAAA;EACA,iBAAA;EACA,eAAA;EACA,UAAA;AAnDJ;;AAkEA;EACE,gBAAA;AA/DF;AAgEE;EACE,gBAAA;AA9DJ;AAgEE;EACE,kBAAA;EACA,SAAA;EACA,QAAA;EACA,wCAAA;EACA,gCAAA;EACA,cAAA;EACA,YAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;AA9DJ;;AAmEA;EACE,WAAA;EACA,gBAAA;EACA,4CAAA;EACA,kBAAA;AAhEF;AAiEE;EACE,gBAAA;AA/DJ;AAkEE;EACE,kBAAA;EACA,UAAA;EACA,WAAA;AAhEJ;AAmEE;EACE,aAAA;EACA,8BAAA;EACA,aAAA;EACA,gBAAA;EACA,iBAAA;EACA,eAAA;AAjEJ;AAoEE;EACE,yBAAA;AAlEJ;AAqEE;EACE,WAAA;EACA,oEAAA;EACA,WAAA;EACA,cAAA;EACA,YAAA;EACA,kBAAA;EACA,6BAAA;EACA,yBAAA;AAnEJ;AAsEE;EACE,cAAA;AApEJ;AAuEE;EACE,WAAA;EACA,kBAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;AArEJ;AAwEE;EACE,aAAA;EACA,eAAA;EACA,cAAA;EACA,gBAAA;EACA,oBAAA;AAtEJ;AAyEE;EACE,aAAA;EACA,8BAAA;EACA,WAAA;EACA,mBAAA;EACA,6BAAA;EACA,eAAA;AAvEJ;AA0EE;EACE,gBAAA;EACA,cAnZG;AA2UP;AA2EE;EACE,WAAA;EACA,uBAAA;AAzEJ;AA4EE;EACE,iBAAA;EACA,eAAA;AA1EJ;;AAgFE;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,cAAA;EACA,YAAA;AA7EF;AAgFE;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,cAAA;EACA,iBAAA;AA9EF;AAiFE;EACE,aAAA;EACA,WAAA;AA/EJ;;AAoFA;EACE;IACI,sBAAA;IACA,WAAA;EAjFJ;;EAoFA;IACI,gBAAA;EAjFJ;AACF;AAsFA;EAEE;IACE,sBAAA;IACA,SAAA;EArFF;AACF","sourcesContent":["@import url('./normalize.scss');\n@import url('./reboot.scss');\n\n//Variables\n\n$blk: #000;\n$blue: #005BFE;\n$light: #ced8e7;\n$gray: #797979;\n$dark-blue: #0047C6;\n$red: #EA3D2F;\n$light-red: #f81155;\n$main-font: 'Arial';\n$box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1);\n\n\nbody {\n  font-family: $main-font;\n  background-color: #f6f7f9;\n  font-style: normal;\n}\n\n//Global\n.container {\n  margin: 0 auto;\n  padding: 0 15px;\n  max-width: 1130px\n}\n\n.btn {\n  border: 0;\n  cursor: pointer;\n\n  &_red {\n    padding: 10px 35px 10px 15px;\n    font-weight: 700;\n    font-size: 14px;\n    line-height: 18px;\n    color: #FFFFFF;\n    border-radius: 6px;\n    background-color: $light-red;\n    background-image: url(../assets/icons/plus.svg);\n    background-repeat: no-repeat;\n    background-position: 150px center;\n  }\n\n  &_red:hover {\n    background-color: #D1003E;\n    transition: 0.4s ease-in-out;\n  }\n\n  &_blue {\n    padding: 10px 15px;\n    background: $blue;\n    font-weight: 700;\n    font-size: 14px;\n    line-height: 18px;\n    color: #FFFFFF;\n    border-radius: 6px;\n  }\n\n  &_blue:hover {\n    background-color: $dark-blue;\n    transition: 0.4s ease-in-out;\n  }\n\n  &_blue:disabled {\n    background-color: #0d316e;\n    cursor: default;\n    color:#dadada;\n  }\n\n  &_delete {\n    display: block;\n    width: 38px;\n    height: 38px;\n    background: url(./../assets/icons/delete.svg) no-repeat center center;\n    border: 1px solid #c6c6c6;\n    border-radius: 6px;\n  }\n\n  &_delete:hover {\n    background: url(./../assets/icons/delete-white.svg) no-repeat center center;\n    background-color: $red;\n    border-color: $red;\n    transition: 0.4s ease-in-out;\n  }\n\n  &_edit {\n    display: block;\n    width: 38px;\n    height: 38px;\n    background: url(./../assets/icons/edit.svg) no-repeat center center;\n    border: 1px solid #c6c6c6;\n    border-radius: 6px;\n  }\n\n  &_edit:hover {\n    background: url(./../assets/icons/edit-white.svg) no-repeat center center;\n    background-color: $blue;\n    border-color: $blue;\n    transition: 0.4s ease-in-out;\n  }\n}\n\n\n\n// Header\n\n.header {\n  background-color: #fff;\n  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);\n\n  &__wrapper {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 16px 0;\n  }\n\n  &__logo {\n    display: flex;\n    align-items: center;\n  }\n\n  &__title {\n    font-weight: 700;\n    font-size: 18px;\n    line-height: 120%;\n    color: $blue;\n  }\n\n  &__img {\n    margin-right: 16px;\n  }\n\n  &__menu {\n    position: fixed;\n    left: -100%;\n    top: 0;\n    transform: translateX(-100%);\n    width: 312px;\n    height: 100%;\n    display: flex;\n    flex-wrap: wrap;\n    align-items: start;\n    overflow: auto;\n    z-index: 3;\n    background-color: #fff;\n    transition: 0.6s ease-in-out;\n    box-shadow: 6px 0px 8px 0px rgba(34, 60, 80, 0.2);\n    overflow-x: hidden;\n  }\n  \n  &__menu_active {\n    left: 0;\n    transform: translateX(0);\n    transition: 0.4s ease-in-out;\n    z-index: 99;\n  }\n  \n  &__buttons  {\n    display: flex;\n    gap: 0 20px;\n  }\n}\n\n\n.blur.active {\n  width: 100vw;\n  height: 100vh;\n  position: fixed;\n  left: 0;\n  top: 0;\n  background-color: $blk;\n  opacity: 0.3;\n}\n\n.menu {\n  &__wrapper {\n    height: 100%;\n    width: 100%;\n    padding: 22px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n  }\n\n  &__top {\n    position: relative;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding-bottom: 25px;\n    font-weight: 700;\n    font-size: 18px;\n    line-height: 120%;\n    color: $blk;\n  }\n\n  &__top::before {\n    content: '';\n    position: absolute;\n    bottom: 0;\n    left: -30px;\n    right: -40px;\n    border: 1px solid #e6e6e6;\n  }\n  \n  &__button_top {\n    height: 16px;\n    width: 16px;\n    background: url(./../assets/icons/close.svg) no-repeat center center;\n    padding: 11px;\n    border-radius: 6px;\n    transition: 0.5s ease-in-out;\n  }\n\n  &__button_top:hover {\n    height: 16px;\n    width: 16px;\n    background-color: #D9D9D9;\n  }\n  \n  &__center {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 16px 0;\n    padding-top: 25px;\n    margin-bottom: auto;\n  }\n\n  &__item {\n    display: flex;\n    justify-content: space-between;\n  }\n  \n  &__input {\n    display: block;\n    width: 100%;\n    height: 38px;\n    padding: 0 10px;\n    color: $blk;\n    background: #f2f2f2;\n    border-radius: 6px;\n    border: 0;\n    color: $gray;\n  }\n\n  &__input_groupe {\n    max-width: 214px;\n  }\n\n  &__select {\n    display: block;\n    position: relative;\n    width: 100%;\n    height: 38px;\n    padding: 0 10px;\n    background: #f2f2f2;\n    background-image: url(../assets/icons/arrow.svg);\n    background-repeat: no-repeat;\n    background-position: 245px center;\n    border-radius: 6px;\n    border: 0;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n    cursor: pointer;\n    color: $gray;\n  }\n\n\n  &__item {\n    width: 100%;\n    display: flex;\n    flex-wrap: wrap;\n  }\n  \n  &__bottom {\n    margin-left: auto;\n    padding-top: 24px;\n  }\n\n  &__btn_add {\n    margin-right: 12px;\n    padding: 10px 15px;\n    color: $blue;\n    background-color: transparent;\n    border-radius: 6px;\n    font-weight: 700;\n    font-size: 14px;\n    line-height: 18px;\n  }\n\n  &__btn_add:hover {\n    background-color: $light;\n    transition: 0.4s ease-in-out;\n  }\n\n  &__subtitle {\n    display: block;\n    margin: 4px 0 0 0;\n    font-size: 11px;\n    color: red;\n  }\n\n\n}\n\n\n\n\n\n\n\n\n// Contacts list\n\n.tabs {\n  margin-top: 55px;\n  &__wrapper {\n    overflow: hidden;\n  }\n  &__message {\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    -webkit-transform: translate(-50%, -50%);\n    transform: translate(-50%, -50%);\n    color: #000000;\n    opacity: 0.3;\n    font-weight: 400;\n    font-size: 18px;\n    line-height: 18px;\n  }\n}\n\n\n.tab {\n  width: 100%;\n  overflow: hidden;\n  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);\n  border-radius: 6px;\n  &:not(:first-child) {\n    margin-top: 20px;\n  }\n  \n  &__input {\n    position: absolute;\n    opacity: 0;\n    z-index: -1;\n  }\n  \n  &__label {\n    display: flex;\n    justify-content: space-between;\n    padding: 24px;\n    background: #fff;\n    font-weight: bold;\n    cursor: pointer;\n  }\n  \n  &__label:hover {\n    background-color: rgb(250, 250, 250);\n  }\n  \n  &__label::after {\n    content: \"\";\n    background: url(./../assets/icons/arrow.svg) no-repeat center;\n    width: 16px;\n    color: #17696A;\n    height: 16px;\n    text-align: center;\n    transition: 0.45s ease-in-out;\n    transform: rotate(180deg);\n  }\n  \n  &__label:hover::after {\n    color: #4ba2a3;\n  }\n  \n  &__header {\n    width: 100%;\n    margin-right: 20px;\n    font-weight: 700;\n    font-size: 18px;\n    line-height: 120%;\n  }\n  \n  &__content {\n    max-height: 0;\n    padding: 0 24px;\n    color: #2c3e50;\n    background: #fff;\n    transition: all 0.5s;\n  }\n  \n  &__item {\n    display: flex;\n    justify-content: space-between;\n    gap: 0 20px;\n    align-items: center;\n    border-top: 1px solid #f6f6f6;\n    padding: 15px 0;\n  }\n  \n  &__input:checked+.tab__label {\n    background: #fff;\n    color: $blue;\n  }\n  \n  &__input:checked+.tab__label::after {\n    content: \"\";\n    transform: rotate(0deg);\n  }\n  \n  &__input:checked~.tab__content {\n    max-height: 100vh;\n    padding: 0 24px;\n  }\n\n}\n\n.item {\n  &__name {\n  font-weight: 400;\n  font-size: 18px;\n  line-height: 120%;\n  color: #000000;\n  opacity: 0.5;\n  }\n\n  &__phone {\n  font-weight: 400;\n  font-size: 18px;\n  line-height: 120%;\n  color: #000000;\n  margin-left: auto;\n  }\n\n  &__btns {\n    display: flex;\n    gap: 0 15px;\n  }\n}\n\n\n@media (max-width : 767px) {\n  .item {\n      flex-direction: column;\n      gap: 30px 0;\n  }\n\n  .item__phone {\n      margin-left: 0px;\n  }\n  \n}\n\n\n@media (max-width : 650px) {\n\n  .header__wrapper {\n    flex-direction: column;\n    gap: 30px;\n  }\n  \n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/normalize.scss":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/normalize.scss ***!
  \*************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\n html {\n    line-height: 1.15; /* 1 */\n    -webkit-text-size-adjust: 100%; /* 2 */\n  }\n  \n  /* Sections\n     ========================================================================== */\n  \n  /**\n   * Remove the margin in all browsers.\n   */\n  \n  body {\n    margin: 0;\n  }\n  \n  /**\n   * Render the `main` element consistently in IE.\n   */\n  \n  main {\n    display: block;\n  }\n  \n  /**\n   * Correct the font size and margin on `h1` elements within `section` and\n   * `article` contexts in Chrome, Firefox, and Safari.\n   */\n  \n  h1 {\n    font-size: 2em;\n    margin: 0.67em 0;\n  }\n  \n  /* Grouping content\n     ========================================================================== */\n  \n  /**\n   * 1. Add the correct box sizing in Firefox.\n   * 2. Show the overflow in Edge and IE.\n   */\n  \n  hr {\n    box-sizing: content-box; /* 1 */\n    height: 0; /* 1 */\n    overflow: visible; /* 2 */\n  }\n  \n  /**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\n  \n  pre {\n    font-family: monospace, monospace; /* 1 */\n    font-size: 1em; /* 2 */\n  }\n  \n  /* Text-level semantics\n     ========================================================================== */\n  \n  /**\n   * Remove the gray background on active links in IE 10.\n   */\n  \n  a {\n    background-color: transparent;\n  }\n  \n  /**\n   * 1. Remove the bottom border in Chrome 57-\n   * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n   */\n  \n  abbr[title] {\n    border-bottom: none; /* 1 */\n    text-decoration: underline; /* 2 */\n    text-decoration: underline dotted; /* 2 */\n  }\n  \n  /**\n   * Add the correct font weight in Chrome, Edge, and Safari.\n   */\n  \n  b,\n  strong {\n    font-weight: bolder;\n  }\n  \n  /**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\n  \n  code,\n  kbd,\n  samp {\n    font-family: monospace, monospace; /* 1 */\n    font-size: 1em; /* 2 */\n  }\n  \n  /**\n   * Add the correct font size in all browsers.\n   */\n  \n  small {\n    font-size: 80%;\n  }\n  \n  /**\n   * Prevent `sub` and `sup` elements from affecting the line height in\n   * all browsers.\n   */\n  \n  sub,\n  sup {\n    font-size: 75%;\n    line-height: 0;\n    position: relative;\n    vertical-align: baseline;\n  }\n  \n  sub {\n    bottom: -0.25em;\n  }\n  \n  sup {\n    top: -0.5em;\n  }\n  \n  /* Embedded content\n     ========================================================================== */\n  \n  /**\n   * Remove the border on images inside links in IE 10.\n   */\n  \n  img {\n    border-style: none;\n  }\n  \n  /* Forms\n     ========================================================================== */\n  \n  /**\n   * 1. Change the font styles in all browsers.\n   * 2. Remove the margin in Firefox and Safari.\n   */\n  \n  button,\n  input,\n  optgroup,\n  select,\n  textarea {\n    font-family: inherit; /* 1 */\n    font-size: 100%; /* 1 */\n    line-height: 1.15; /* 1 */\n    margin: 0; /* 2 */\n  }\n  \n  /**\n   * Show the overflow in IE.\n   * 1. Show the overflow in Edge.\n   */\n  \n  button,\n  input { /* 1 */\n    overflow: visible;\n  }\n  \n  /**\n   * Remove the inheritance of text transform in Edge, Firefox, and IE.\n   * 1. Remove the inheritance of text transform in Firefox.\n   */\n  \n  button,\n  select { /* 1 */\n    text-transform: none;\n  }\n  \n  /**\n   * Correct the inability to style clickable types in iOS and Safari.\n   */\n  \n  button,\n  [type=\"button\"],\n  [type=\"reset\"],\n  [type=\"submit\"] {\n    -webkit-appearance: button;\n  }\n  \n  /**\n   * Remove the inner border and padding in Firefox.\n   */\n  \n  button::-moz-focus-inner,\n  [type=\"button\"]::-moz-focus-inner,\n  [type=\"reset\"]::-moz-focus-inner,\n  [type=\"submit\"]::-moz-focus-inner {\n    border-style: none;\n    padding: 0;\n  }\n  \n  /**\n   * Restore the focus styles unset by the previous rule.\n   */\n  \n  button:-moz-focusring,\n  [type=\"button\"]:-moz-focusring,\n  [type=\"reset\"]:-moz-focusring,\n  [type=\"submit\"]:-moz-focusring {\n    outline: 1px dotted ButtonText;\n  }\n  \n  /**\n   * Correct the padding in Firefox.\n   */\n  \n  fieldset {\n    padding: 0.35em 0.75em 0.625em;\n  }\n  \n  /**\n   * 1. Correct the text wrapping in Edge and IE.\n   * 2. Correct the color inheritance from `fieldset` elements in IE.\n   * 3. Remove the padding so developers are not caught out when they zero out\n   *    `fieldset` elements in all browsers.\n   */\n  \n  legend {\n    box-sizing: border-box; /* 1 */\n    color: inherit; /* 2 */\n    display: table; /* 1 */\n    max-width: 100%; /* 1 */\n    padding: 0; /* 3 */\n    white-space: normal; /* 1 */\n  }\n  \n  /**\n   * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n   */\n  \n  progress {\n    vertical-align: baseline;\n  }\n  \n  /**\n   * Remove the default vertical scrollbar in IE 10+.\n   */\n  \n  textarea {\n    overflow: auto;\n  }\n  \n  /**\n   * 1. Add the correct box sizing in IE 10.\n   * 2. Remove the padding in IE 10.\n   */\n  \n  [type=\"checkbox\"],\n  [type=\"radio\"] {\n    box-sizing: border-box; /* 1 */\n    padding: 0; /* 2 */\n  }\n  \n  /**\n   * Correct the cursor style of increment and decrement buttons in Chrome.\n   */\n  \n  [type=\"number\"]::-webkit-inner-spin-button,\n  [type=\"number\"]::-webkit-outer-spin-button {\n    height: auto;\n  }\n  \n  /**\n   * 1. Correct the odd appearance in Chrome and Safari.\n   * 2. Correct the outline style in Safari.\n   */\n  \n  [type=\"search\"] {\n    -webkit-appearance: textfield; /* 1 */\n    outline-offset: -2px; /* 2 */\n  }\n  \n  /**\n   * Remove the inner padding in Chrome and Safari on macOS.\n   */\n  \n  [type=\"search\"]::-webkit-search-decoration {\n    -webkit-appearance: none;\n  }\n  \n  /**\n   * 1. Correct the inability to style clickable types in iOS and Safari.\n   * 2. Change font properties to `inherit` in Safari.\n   */\n  \n  ::-webkit-file-upload-button {\n    -webkit-appearance: button; /* 1 */\n    font: inherit; /* 2 */\n  }\n  \n  /* Interactive\n     ========================================================================== */\n  \n  /*\n   * Add the correct display in Edge, IE 10+, and Firefox.\n   */\n  \n  details {\n    display: block;\n  }\n  \n  /*\n   * Add the correct display in all browsers.\n   */\n  \n  summary {\n    display: list-item;\n  }\n  \n  /* Misc\n     ========================================================================== */\n  \n  /**\n   * Add the correct display in IE 10+.\n   */\n  \n  template {\n    display: none;\n  }\n  \n  /**\n   * Add the correct display in IE 10.\n   */\n  \n  [hidden] {\n    display: none;\n  }", "",{"version":3,"sources":["webpack://./src/styles/normalize.scss"],"names":[],"mappings":"AAAA,2EAA2E;;AAE3E;+EAC+E;;AAE/E;;;EAGE;;CAED;IACG,iBAAiB,EAAE,MAAM;IACzB,8BAA8B,EAAE,MAAM;EACxC;;EAEA;iFAC+E;;EAE/E;;IAEE;;EAEF;IACE,SAAS;EACX;;EAEA;;IAEE;;EAEF;IACE,cAAc;EAChB;;EAEA;;;IAGE;;EAEF;IACE,cAAc;IACd,gBAAgB;EAClB;;EAEA;iFAC+E;;EAE/E;;;IAGE;;EAEF;IACE,uBAAuB,EAAE,MAAM;IAC/B,SAAS,EAAE,MAAM;IACjB,iBAAiB,EAAE,MAAM;EAC3B;;EAEA;;;IAGE;;EAEF;IACE,iCAAiC,EAAE,MAAM;IACzC,cAAc,EAAE,MAAM;EACxB;;EAEA;iFAC+E;;EAE/E;;IAEE;;EAEF;IACE,6BAA6B;EAC/B;;EAEA;;;IAGE;;EAEF;IACE,mBAAmB,EAAE,MAAM;IAC3B,0BAA0B,EAAE,MAAM;IAClC,iCAAiC,EAAE,MAAM;EAC3C;;EAEA;;IAEE;;EAEF;;IAEE,mBAAmB;EACrB;;EAEA;;;IAGE;;EAEF;;;IAGE,iCAAiC,EAAE,MAAM;IACzC,cAAc,EAAE,MAAM;EACxB;;EAEA;;IAEE;;EAEF;IACE,cAAc;EAChB;;EAEA;;;IAGE;;EAEF;;IAEE,cAAc;IACd,cAAc;IACd,kBAAkB;IAClB,wBAAwB;EAC1B;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,WAAW;EACb;;EAEA;iFAC+E;;EAE/E;;IAEE;;EAEF;IACE,kBAAkB;EACpB;;EAEA;iFAC+E;;EAE/E;;;IAGE;;EAEF;;;;;IAKE,oBAAoB,EAAE,MAAM;IAC5B,eAAe,EAAE,MAAM;IACvB,iBAAiB,EAAE,MAAM;IACzB,SAAS,EAAE,MAAM;EACnB;;EAEA;;;IAGE;;EAEF;UACQ,MAAM;IACZ,iBAAiB;EACnB;;EAEA;;;IAGE;;EAEF;WACS,MAAM;IACb,oBAAoB;EACtB;;EAEA;;IAEE;;EAEF;;;;IAIE,0BAA0B;EAC5B;;EAEA;;IAEE;;EAEF;;;;IAIE,kBAAkB;IAClB,UAAU;EACZ;;EAEA;;IAEE;;EAEF;;;;IAIE,8BAA8B;EAChC;;EAEA;;IAEE;;EAEF;IACE,8BAA8B;EAChC;;EAEA;;;;;IAKE;;EAEF;IACE,sBAAsB,EAAE,MAAM;IAC9B,cAAc,EAAE,MAAM;IACtB,cAAc,EAAE,MAAM;IACtB,eAAe,EAAE,MAAM;IACvB,UAAU,EAAE,MAAM;IAClB,mBAAmB,EAAE,MAAM;EAC7B;;EAEA;;IAEE;;EAEF;IACE,wBAAwB;EAC1B;;EAEA;;IAEE;;EAEF;IACE,cAAc;EAChB;;EAEA;;;IAGE;;EAEF;;IAEE,sBAAsB,EAAE,MAAM;IAC9B,UAAU,EAAE,MAAM;EACpB;;EAEA;;IAEE;;EAEF;;IAEE,YAAY;EACd;;EAEA;;;IAGE;;EAEF;IACE,6BAA6B,EAAE,MAAM;IACrC,oBAAoB,EAAE,MAAM;EAC9B;;EAEA;;IAEE;;EAEF;IACE,wBAAwB;EAC1B;;EAEA;;;IAGE;;EAEF;IACE,0BAA0B,EAAE,MAAM;IAClC,aAAa,EAAE,MAAM;EACvB;;EAEA;iFAC+E;;EAE/E;;IAEE;;EAEF;IACE,cAAc;EAChB;;EAEA;;IAEE;;EAEF;IACE,kBAAkB;EACpB;;EAEA;iFAC+E;;EAE/E;;IAEE;;EAEF;IACE,aAAa;EACf;;EAEA;;IAEE;;EAEF;IACE,aAAa;EACf","sourcesContent":["/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\n html {\n    line-height: 1.15; /* 1 */\n    -webkit-text-size-adjust: 100%; /* 2 */\n  }\n  \n  /* Sections\n     ========================================================================== */\n  \n  /**\n   * Remove the margin in all browsers.\n   */\n  \n  body {\n    margin: 0;\n  }\n  \n  /**\n   * Render the `main` element consistently in IE.\n   */\n  \n  main {\n    display: block;\n  }\n  \n  /**\n   * Correct the font size and margin on `h1` elements within `section` and\n   * `article` contexts in Chrome, Firefox, and Safari.\n   */\n  \n  h1 {\n    font-size: 2em;\n    margin: 0.67em 0;\n  }\n  \n  /* Grouping content\n     ========================================================================== */\n  \n  /**\n   * 1. Add the correct box sizing in Firefox.\n   * 2. Show the overflow in Edge and IE.\n   */\n  \n  hr {\n    box-sizing: content-box; /* 1 */\n    height: 0; /* 1 */\n    overflow: visible; /* 2 */\n  }\n  \n  /**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\n  \n  pre {\n    font-family: monospace, monospace; /* 1 */\n    font-size: 1em; /* 2 */\n  }\n  \n  /* Text-level semantics\n     ========================================================================== */\n  \n  /**\n   * Remove the gray background on active links in IE 10.\n   */\n  \n  a {\n    background-color: transparent;\n  }\n  \n  /**\n   * 1. Remove the bottom border in Chrome 57-\n   * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n   */\n  \n  abbr[title] {\n    border-bottom: none; /* 1 */\n    text-decoration: underline; /* 2 */\n    text-decoration: underline dotted; /* 2 */\n  }\n  \n  /**\n   * Add the correct font weight in Chrome, Edge, and Safari.\n   */\n  \n  b,\n  strong {\n    font-weight: bolder;\n  }\n  \n  /**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\n  \n  code,\n  kbd,\n  samp {\n    font-family: monospace, monospace; /* 1 */\n    font-size: 1em; /* 2 */\n  }\n  \n  /**\n   * Add the correct font size in all browsers.\n   */\n  \n  small {\n    font-size: 80%;\n  }\n  \n  /**\n   * Prevent `sub` and `sup` elements from affecting the line height in\n   * all browsers.\n   */\n  \n  sub,\n  sup {\n    font-size: 75%;\n    line-height: 0;\n    position: relative;\n    vertical-align: baseline;\n  }\n  \n  sub {\n    bottom: -0.25em;\n  }\n  \n  sup {\n    top: -0.5em;\n  }\n  \n  /* Embedded content\n     ========================================================================== */\n  \n  /**\n   * Remove the border on images inside links in IE 10.\n   */\n  \n  img {\n    border-style: none;\n  }\n  \n  /* Forms\n     ========================================================================== */\n  \n  /**\n   * 1. Change the font styles in all browsers.\n   * 2. Remove the margin in Firefox and Safari.\n   */\n  \n  button,\n  input,\n  optgroup,\n  select,\n  textarea {\n    font-family: inherit; /* 1 */\n    font-size: 100%; /* 1 */\n    line-height: 1.15; /* 1 */\n    margin: 0; /* 2 */\n  }\n  \n  /**\n   * Show the overflow in IE.\n   * 1. Show the overflow in Edge.\n   */\n  \n  button,\n  input { /* 1 */\n    overflow: visible;\n  }\n  \n  /**\n   * Remove the inheritance of text transform in Edge, Firefox, and IE.\n   * 1. Remove the inheritance of text transform in Firefox.\n   */\n  \n  button,\n  select { /* 1 */\n    text-transform: none;\n  }\n  \n  /**\n   * Correct the inability to style clickable types in iOS and Safari.\n   */\n  \n  button,\n  [type=\"button\"],\n  [type=\"reset\"],\n  [type=\"submit\"] {\n    -webkit-appearance: button;\n  }\n  \n  /**\n   * Remove the inner border and padding in Firefox.\n   */\n  \n  button::-moz-focus-inner,\n  [type=\"button\"]::-moz-focus-inner,\n  [type=\"reset\"]::-moz-focus-inner,\n  [type=\"submit\"]::-moz-focus-inner {\n    border-style: none;\n    padding: 0;\n  }\n  \n  /**\n   * Restore the focus styles unset by the previous rule.\n   */\n  \n  button:-moz-focusring,\n  [type=\"button\"]:-moz-focusring,\n  [type=\"reset\"]:-moz-focusring,\n  [type=\"submit\"]:-moz-focusring {\n    outline: 1px dotted ButtonText;\n  }\n  \n  /**\n   * Correct the padding in Firefox.\n   */\n  \n  fieldset {\n    padding: 0.35em 0.75em 0.625em;\n  }\n  \n  /**\n   * 1. Correct the text wrapping in Edge and IE.\n   * 2. Correct the color inheritance from `fieldset` elements in IE.\n   * 3. Remove the padding so developers are not caught out when they zero out\n   *    `fieldset` elements in all browsers.\n   */\n  \n  legend {\n    box-sizing: border-box; /* 1 */\n    color: inherit; /* 2 */\n    display: table; /* 1 */\n    max-width: 100%; /* 1 */\n    padding: 0; /* 3 */\n    white-space: normal; /* 1 */\n  }\n  \n  /**\n   * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n   */\n  \n  progress {\n    vertical-align: baseline;\n  }\n  \n  /**\n   * Remove the default vertical scrollbar in IE 10+.\n   */\n  \n  textarea {\n    overflow: auto;\n  }\n  \n  /**\n   * 1. Add the correct box sizing in IE 10.\n   * 2. Remove the padding in IE 10.\n   */\n  \n  [type=\"checkbox\"],\n  [type=\"radio\"] {\n    box-sizing: border-box; /* 1 */\n    padding: 0; /* 2 */\n  }\n  \n  /**\n   * Correct the cursor style of increment and decrement buttons in Chrome.\n   */\n  \n  [type=\"number\"]::-webkit-inner-spin-button,\n  [type=\"number\"]::-webkit-outer-spin-button {\n    height: auto;\n  }\n  \n  /**\n   * 1. Correct the odd appearance in Chrome and Safari.\n   * 2. Correct the outline style in Safari.\n   */\n  \n  [type=\"search\"] {\n    -webkit-appearance: textfield; /* 1 */\n    outline-offset: -2px; /* 2 */\n  }\n  \n  /**\n   * Remove the inner padding in Chrome and Safari on macOS.\n   */\n  \n  [type=\"search\"]::-webkit-search-decoration {\n    -webkit-appearance: none;\n  }\n  \n  /**\n   * 1. Correct the inability to style clickable types in iOS and Safari.\n   * 2. Change font properties to `inherit` in Safari.\n   */\n  \n  ::-webkit-file-upload-button {\n    -webkit-appearance: button; /* 1 */\n    font: inherit; /* 2 */\n  }\n  \n  /* Interactive\n     ========================================================================== */\n  \n  /*\n   * Add the correct display in Edge, IE 10+, and Firefox.\n   */\n  \n  details {\n    display: block;\n  }\n  \n  /*\n   * Add the correct display in all browsers.\n   */\n  \n  summary {\n    display: list-item;\n  }\n  \n  /* Misc\n     ========================================================================== */\n  \n  /**\n   * Add the correct display in IE 10+.\n   */\n  \n  template {\n    display: none;\n  }\n  \n  /**\n   * Add the correct display in IE 10.\n   */\n  \n  [hidden] {\n    display: none;\n  }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/reboot.scss":
/*!**********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/reboot.scss ***!
  \**********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*::before,\n*::after {\n    box-sizing: border-box;\n}\n\nhtml,\nbody {\n    margin: 0;\n    padding: 0;\n}\n\nhtml {\n    box-sizing: border-box;\n    height: 100vh;\n    font-style: normal;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    text-rendering: optimizeLegibility;\n}\n\nbody {\n    width: 100%;\n    height: 100%;\n}\n\na {\n    text-decoration: none;\n}\n\nimg,\nvideo {\n    display: block;\n    max-width: 100%;\n    height: auto;\n}\n\ntextarea {\n    resize: none;\n}\n\ninput,\ntextarea {\n    border-radius: 0;\n}\n\ninput::placeholder,\ntextarea::placeholder {\n    opacity: 1;\n}\n\ninput:invalid,\ntextarea:invalid {\n    box-shadow: none;\n}\n\nselect {\n    border-radius: 0;\n}", "",{"version":3,"sources":["webpack://./src/styles/reboot.scss"],"names":[],"mappings":"AAAA;;;IAGI,sBAAsB;AAC1B;;AAEA;;IAEI,SAAS;IACT,UAAU;AACd;;AAEA;IACI,sBAAsB;IACtB,aAAa;IACb,kBAAkB;IAClB,mCAAmC;IACnC,kCAAkC;IAClC,kCAAkC;AACtC;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,qBAAqB;AACzB;;AAEA;;IAEI,cAAc;IACd,eAAe;IACf,YAAY;AAChB;;AAEA;IACI,YAAY;AAChB;;AAEA;;IAEI,gBAAgB;AACpB;;AAEA;;IAEI,UAAU;AACd;;AAEA;;IAEI,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;AACpB","sourcesContent":["*,\n*::before,\n*::after {\n    box-sizing: border-box;\n}\n\nhtml,\nbody {\n    margin: 0;\n    padding: 0;\n}\n\nhtml {\n    box-sizing: border-box;\n    height: 100vh;\n    font-style: normal;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    text-rendering: optimizeLegibility;\n}\n\nbody {\n    width: 100%;\n    height: 100%;\n}\n\na {\n    text-decoration: none;\n}\n\nimg,\nvideo {\n    display: block;\n    max-width: 100%;\n    height: auto;\n}\n\ntextarea {\n    resize: none;\n}\n\ninput,\ntextarea {\n    border-radius: 0;\n}\n\ninput::placeholder,\ntextarea::placeholder {\n    opacity: 1;\n}\n\ninput:invalid,\ntextarea:invalid {\n    box-shadow: none;\n}\n\nselect {\n    border-radius: 0;\n}"],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  } // For old IE

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

/***/ "./src/assets/icons/arrow.svg":
/*!************************************!*\
  !*** ./src/assets/icons/arrow.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "arrow.svg";

/***/ }),

/***/ "./src/assets/icons/close.svg":
/*!************************************!*\
  !*** ./src/assets/icons/close.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "close.svg";

/***/ }),

/***/ "./src/assets/icons/delete-white.svg":
/*!*******************************************!*\
  !*** ./src/assets/icons/delete-white.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "delete-white.svg";

/***/ }),

/***/ "./src/assets/icons/delete.svg":
/*!*************************************!*\
  !*** ./src/assets/icons/delete.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "delete.svg";

/***/ }),

/***/ "./src/assets/icons/edit-white.svg":
/*!*****************************************!*\
  !*** ./src/assets/icons/edit-white.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "edit-white.svg";

/***/ }),

/***/ "./src/assets/icons/edit.svg":
/*!***********************************!*\
  !*** ./src/assets/icons/edit.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "edit.svg";

/***/ }),

/***/ "./src/assets/icons/plus.svg":
/*!***********************************!*\
  !*** ./src/assets/icons/plus.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "plus.svg";

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
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
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
/******/ 			"bundle": 0
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.scss */ "./src/styles/main.scss");
/* harmony import */ var _components_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/app */ "./src/components/app.js");


var app = new _components_app__WEBPACK_IMPORTED_MODULE_1__["default"]();
app.start();
})();

/******/ })()
;
//# sourceMappingURL=bundleb1881a7a144f596a7626.js.map