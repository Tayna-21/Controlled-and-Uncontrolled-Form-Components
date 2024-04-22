"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _index = _interopRequireDefault(require("../InputUncontrolled/index.tsx"));
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
var FormUncontrolled = function FormUncontrolled() {
  var refName = (0, _react.useRef)('');
  var refEmail = (0, _react.useRef)('');
  var refPassword = (0, _react.useRef)('');
  var refConfirmPassword = (0, _react.useRef)('');
  var refCheckbox = (0, _react.useRef)();
  var refSubmitBtn = (0, _react.useRef)();
  var _useState = (0, _react.useState)(_utilities.initialErrorStateUncontrolled),
    _useState2 = _slicedToArray(_useState, 2),
    error = _useState2[0],
    setError = _useState2[1];
  var handleChange = function handleChange(event) {
    setError(function (error) {
      return _objectSpread(_objectSpread({}, error), {}, _defineProperty({}, event.target.name, {
        messageError: null,
        validity: ''
      }));
    });
    refSubmitBtn.current.disabled = false;
  };
  var handleCheckboxChange = function handleCheckboxChange() {
    refCheckbox.current.checked === false ? true : false;
  };
  var validateForm = function validateForm() {
    var validateInputValue = function validateInputValue(field, errorValue) {
      setError(function (error) {
        return _objectSpread(_objectSpread({}, error), {}, _defineProperty({}, field, {
          messageError: errorValue,
          validity: errorValue !== null ? 'invalid' : ''
        }));
      });
      if (errorValue !== null) {
        refSubmitBtn.current.disabled = true;
      }
      ;
    };
    var isName = function isName() {
      var name = refName.current.value.trim();
      var regexName = '^[a-zA-Z0-9]+$';
      if (!name.match(regexName) && name != '') {
        validateInputValue('name', 'Alphabets and number only');
      } else if (name === '') {
        validateInputValue('name', 'This field is required');
      } else if (name.length === 1) {
        validateInputValue('name', 'The name is too short');
      } else if (name.match(regexName) && name != '') {
        validateInputValue('name', null);
      }
      ;
    };
    var isEmail = function isEmail() {
      var email = refEmail.current.value.trim();
      var regexEmail = '^[a-zA-Z0-9.!_]+@[a-zA-Z]+[.]+([a-zA-Z]+)*$';
      if (!email.match(regexEmail) && email != '') {
        validateInputValue('email', 'Please enter a valid email adress');
      } else if (email === '') {
        validateInputValue('email', 'This field is required');
      } else if (email.match(regexEmail)) {
        validateInputValue('email', null);
      }
      ;
    };
    var isPassword = function isPassword() {
      var password = refPassword.current.value.trim();
      var regexPassword = '^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$';
      if (!password.match(regexPassword) && password != '') {
        validateInputValue('password', 'Password must contain at least 8 symbols, including numbers and special characters');
      } else if (password === '') {
        validateInputValue('password', 'This field is required');
      } else if (password.match(regexPassword)) {
        validateInputValue('password', null);
      }
      ;
    };
    var isConfirmPassword = function isConfirmPassword() {
      var confirmPassword = refConfirmPassword.current.value.trim();
      if (confirmPassword != refPassword.current.value.trim()) {
        validateInputValue('confirmPassword', 'Password is not the same');
      } else if (confirmPassword === '') {
        validateInputValue('confirmPassword', 'This field is required');
      } else if (confirmPassword === refPassword.current.value.trim()) {
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
    ref: refName,
    onChange: handleChange,
    label: "username",
    tabIndex: "1",
    id: "name",
    type: "text",
    name: "name",
    placeholder: "Enter your name",
    validity: error.name.validity,
    message: error.name.messageError
  }), /*#__PURE__*/React.createElement(_index.default, {
    ref: refEmail,
    onChange: handleChange,
    label: "email",
    tabIndex: "2",
    id: "email",
    type: "email",
    name: "email",
    placeholder: "Enter your email",
    message: error.email.messageError,
    validity: error.email.validity
  }), /*#__PURE__*/React.createElement(_index.default, {
    ref: refPassword,
    onChange: handleChange,
    label: "password",
    tabIndex: "3",
    id: "password",
    type: "password",
    name: "password",
    placeholder: "Enter your password",
    message: error.password.messageError,
    validity: error.password.validity
  }), /*#__PURE__*/React.createElement(_index.default, {
    ref: refConfirmPassword,
    onChange: handleChange,
    label: "confirm password",
    tabIndex: "3",
    id: "confirm-password",
    type: "password",
    name: "confirmPassword",
    placeholder: "Enter your password again",
    message: error.confirmPassword.messageError,
    validity: error.confirmPassword.validity
  }), /*#__PURE__*/React.createElement("div", {
    className: "agreement"
  }, /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("input", {
    ref: refCheckbox,
    onClick: handleCheckboxChange,
    tabIndex: "5",
    type: "checkbox"
  }), /*#__PURE__*/React.createElement("span", {
    className: "check-icon"
  })), /*#__PURE__*/React.createElement("p", null, "I agree to the ", /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "terms and conditions"))), /*#__PURE__*/React.createElement("input", {
    tabIndex: "-1",
    ref: refSubmitBtn,
    id: "submit_button",
    type: "submit",
    value: "Register"
  }), /*#__PURE__*/React.createElement("span", null, "*Required field")));
};
var _default = FormUncontrolled;
exports.default = _default;