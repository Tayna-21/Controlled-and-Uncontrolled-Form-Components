"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _index = _interopRequireDefault(require("../InputControlled/index.tsx"));
var _index2 = _interopRequireDefault(require("../interfaces/index.tsx"));
var _freeRegularSvgIcons = require("@fortawesome/free-regular-svg-icons");
var _utilities = require("../../utilities.ts");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var FormControlled = function FormControlled() {
  var _useState = (0, _react.useState)(_utilities.initialFormStateControlled),
    _useState2 = _slicedToArray(_useState, 2),
    form = _useState2[0],
    setForm = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    disabledBtn = _useState4[0],
    setDisableBtn = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    isChecked = _useState6[0],
    setChecked = _useState6[1];
  var handleChange = function handleChange(event) {
    setForm(function (form) {
      return _objectSpread(_objectSpread({}, form), {}, _defineProperty({}, event.target.name, _objectSpread(_objectSpread({}, form[event.target.name]), {}, {
        content: event.target.value.trim(),
        messageError: null,
        validity: ''
      })));
    });
    setDisableBtn(false);
  };
  var handleClick = function handleClick(field) {
    var type = form[field].type;
    var icon = form[field].icon;
    setForm(function (form) {
      return _objectSpread(_objectSpread({}, form), {}, _defineProperty({}, field, _objectSpread(_objectSpread({}, form[field]), {}, {
        type: type === 'password' ? 'text' : 'password',
        icon: icon === _freeRegularSvgIcons.faEyeSlash ? _freeRegularSvgIcons.faEye : _freeRegularSvgIcons.faEyeSlash
      })));
    });
  };
  var checkBox = function checkBox() {
    return isChecked === false ? setChecked(true) : setChecked(false);
  };
  var validateForm = function validateForm() {
    var validateInputValue = function validateInputValue(field, errorValue) {
      setForm(function (form) {
        return _objectSpread(_objectSpread({}, form), {}, _defineProperty({}, field, _objectSpread(_objectSpread({}, form[field]), {}, {
          messageError: errorValue,
          validity: errorValue === null ? '' : 'invalid'
        })));
      });
      if (errorValue !== null) {
        setDisableBtn(true);
      }
      ;
    };
    var isName = function isName() {
      var regexName = '^[a-zA-Z0-9]+$';
      var userName = form.name.content;
      if (!userName.match(regexName) && userName !== '') {
        validateInputValue('name', 'Alphabets and number only');
      } else if (userName.length === 1) {
        validateInputValue('name', 'The name is too short');
      } else if (userName === '') {
        validateInputValue('name', 'This field is required');
      } else if (!!userName.match(regexName) && userName !== '') {
        validateInputValue('name', null);
      }
      ;
    };
    var isEmail = function isEmail() {
      var regexEmail = '^[a-zA-Z0-9.!_]+@[a-zA-Z]+[.]+([a-zA-Z]+)*$';
      var userEmail = form.email.content;
      if (!userEmail.match(regexEmail) && userEmail !== '') {
        validateInputValue('email', 'Please enter a valid email adress');
      } else if (userEmail === '') {
        validateInputValue('email', 'This field is required');
      } else if (userEmail.match(regexEmail)) {
        validateInputValue('email', null);
      }
      ;
    };
    var isPassword = function isPassword() {
      var regexPassword = '^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$';
      var userPassword = form.password.content;
      if (!userPassword.match(regexPassword) && userPassword !== '') {
        validateInputValue('password', 'Password must contain at least 8 symbols, including numbers and special characters');
      } else if (form.password.content === '') {
        validateInputValue('password', 'This field is required');
      } else if (!!form.password.content.match(regexPassword)) {
        validateInputValue('password', null);
      }
      ;
    };
    var isConfirmPassword = function isConfirmPassword() {
      var userConfirmPassword = form.confirmPassword.content;
      if (userConfirmPassword !== form.password.content) {
        validateInputValue('confirmPassword', 'Password is not the same');
      } else if (userConfirmPassword === '') {
        validateInputValue('confirmPassword', 'This field is required');
      } else if (userConfirmPassword === form.password.content) {
        validateInputValue('confirmPassword', null);
      }
      ;
    };
    isName();
    isEmail();
    isPassword();
    isConfirmPassword();
  };
  var submitForm = function submitForm(e) {
    e.preventDefault();
    validateForm();
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("form", {
    onSubmit: submitForm,
    action: "#",
    method: "post",
    encType: "multipart/form-data",
    noValidate: true
  }, /*#__PURE__*/React.createElement(_index.default, {
    onChange: handleChange,
    attributes: {
      label: 'username',
      tabIndex: 1,
      id: 'user-name',
      type: 'text',
      name: 'name',
      placeholder: 'Enter your name',
      validity: form.name.validity,
      value: form.name.content,
      error: form.name.messageError
    }
  }), /*#__PURE__*/React.createElement(_index.default, {
    onChange: handleChange,
    attributes: {
      label: 'email',
      tabIndex: 2,
      id: 'user-email',
      type: 'email',
      name: 'email',
      placeholder: 'Enter your email',
      validity: form.email.validity,
      value: form.email.content,
      error: form.email.messageError
    }
  }), /*#__PURE__*/React.createElement(_index.default, {
    onChange: handleChange,
    onClick: function onClick() {
      return handleClick('password');
    },
    attributes: {
      label: 'password',
      tabIndex: 3,
      id: 'user-password',
      type: form.password.type,
      name: 'password',
      placeholder: 'Enter your password',
      validity: form.password.validity,
      value: form.password.content,
      error: form.password.messageError,
      icon: form.password.icon
    }
  }), /*#__PURE__*/React.createElement(_index.default, {
    onChange: handleChange,
    onClick: function onClick() {
      return handleClick('confirmPassword');
    },
    attributes: {
      label: 'confirm password',
      tabIndex: 4,
      id: 'user-confirm-password',
      type: form.confirmPassword.type,
      name: 'confirmPassword',
      placeholder: 'Enter your password again',
      validity: form.confirmPassword.validity,
      value: form.confirmPassword.content,
      error: form.confirmPassword.messageError,
      icon: form.confirmPassword.icon
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "agreement"
  }, /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("input", {
    onChange: checkBox,
    tabIndex: "5",
    type: "checkbox",
    checked: isChecked
  }), /*#__PURE__*/React.createElement("span", {
    className: "check-icon"
  })), /*#__PURE__*/React.createElement("p", null, "I agree to the ", /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "terms and conditions"))), /*#__PURE__*/React.createElement("input", {
    tabIndex: "-1",
    id: "submit-button",
    type: "submit",
    value: "Register",
    disabled: disabledBtn
  }), /*#__PURE__*/React.createElement("span", null, "*Required field")));
};
var _default = FormControlled;
exports.default = _default;