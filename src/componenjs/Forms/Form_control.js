"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _reactFontawesome = require("@fortawesome/react-fontawesome");
var _fontawesomeSvgCore = require("@fortawesome/fontawesome-svg-core");
var _freeRegularSvgIcons = require("@fortawesome/free-regular-svg-icons");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var FormCntrl = function FormCntrl() {
  var _useState = (0, _react.useState)(''),
    _useState2 = _slicedToArray(_useState, 2),
    userNameValue = _useState2[0],
    setUserNameValue = _useState2[1];
  var _useState3 = (0, _react.useState)(''),
    _useState4 = _slicedToArray(_useState3, 2),
    validityName = _useState4[0],
    setValidityName = _useState4[1];
  var _useState5 = (0, _react.useState)(''),
    _useState6 = _slicedToArray(_useState5, 2),
    email = _useState6[0],
    setEmail = _useState6[1];
  var _useState7 = (0, _react.useState)(''),
    _useState8 = _slicedToArray(_useState7, 2),
    validityEmail = _useState8[0],
    setValidityEmail = _useState8[1];
  var _useState9 = (0, _react.useState)(''),
    _useState10 = _slicedToArray(_useState9, 2),
    password = _useState10[0],
    setPassword = _useState10[1];
  var _useState11 = (0, _react.useState)('password'),
    _useState12 = _slicedToArray(_useState11, 2),
    type = _useState12[0],
    setType = _useState12[1];
  var _useState13 = (0, _react.useState)(''),
    _useState14 = _slicedToArray(_useState13, 2),
    validityPassword = _useState14[0],
    setValidityPassword = _useState14[1];
  var _useState15 = (0, _react.useState)(''),
    _useState16 = _slicedToArray(_useState15, 2),
    confirmPassword = _useState16[0],
    setConfirmPassword = _useState16[1];
  var _useState17 = (0, _react.useState)(''),
    _useState18 = _slicedToArray(_useState17, 2),
    validityConfirmPassword = _useState18[0],
    setValidityConfirmPassword = _useState18[1];
  var _useState19 = (0, _react.useState)(null),
    _useState20 = _slicedToArray(_useState19, 2),
    errorName = _useState20[0],
    setErrorName = _useState20[1];
  var _useState21 = (0, _react.useState)(null),
    _useState22 = _slicedToArray(_useState21, 2),
    errorEmail = _useState22[0],
    setErrorEmail = _useState22[1];
  var _useState23 = (0, _react.useState)(null),
    _useState24 = _slicedToArray(_useState23, 2),
    errorPassword = _useState24[0],
    setErrorPassword = _useState24[1];
  var _useState25 = (0, _react.useState)(null),
    _useState26 = _slicedToArray(_useState25, 2),
    errorConfirmPassword = _useState26[0],
    setErrorConfirmPassword = _useState26[1];
  var _useState27 = (0, _react.useState)(false),
    _useState28 = _slicedToArray(_useState27, 2),
    disabledBtn = _useState28[0],
    setDisableBtn = _useState28[1];
  var _useState29 = (0, _react.useState)(false),
    _useState30 = _slicedToArray(_useState29, 2),
    isChecked = _useState30[0],
    setChecked = _useState30[1];
  var _useState31 = (0, _react.useState)(_freeRegularSvgIcons.faEyeSlash),
    _useState32 = _slicedToArray(_useState31, 2),
    icon = _useState32[0],
    setIcon = _useState32[1];
  var validateForm = function validateForm() {
    var regexName = '^[a-zA-Z0-9]+$';
    var regexEmail = '^[a-zA-Z0-9.!_]+@[a-zA-Z]+[.]+([a-zA-Z]+)*$';
    var regexPassword = '^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$';
    if (!userNameValue.match(regexName) && userNameValue !== '') {
      setErrorName('Alphabets and number only');
      setValidityName('invalid');
      setDisableBtn(true);
    } else if (userNameValue.length === 1) {
      setErrorName('The name is too short');
      setValidityName('invalid');
      setDisableBtn(true);
    } else if (userNameValue === '') {
      setErrorName('The field is required');
      setValidityName('invalid');
      setDisableBtn(true);
    } else if (userNameValue.match(regexName) && userNameValue !== '') {
      setValidityName('');
    }
    ;
    if (!email.match(regexEmail) && email !== '') {
      setErrorEmail('Please enter a valid email adress');
      setValidityEmail('invalid');
      setDisableBtn(true);
    } else if (email === '') {
      setErrorEmail('The field is required');
      setValidityEmail('invalid');
      setDisableBtn(true);
    } else if (email.match(regexEmail)) {
      setValidityEmail('');
    }
    ;
    if (!password.match(regexPassword) && password !== '') {
      setErrorPassword('Password must contain at least 8 symbols, including numbers and special characters');
      setValidityPassword('invalid');
      setDisableBtn(true);
    } else if (password === '') {
      setErrorPassword('The field is required');
      setValidityPassword('invalid');
      setDisableBtn(true);
    } else if (!!password.match(regexPassword)) {
      setValidityPassword('');
    }
    ;
    if (confirmPassword !== password) {
      setErrorConfirmPassword('Password is not the same');
      setValidityConfirmPassword('invalid');
      setDisableBtn(true);
    } else if (confirmPassword === '') {
      setErrorConfirmPassword('The field is required');
      setValidityConfirmPassword('invalid');
      setDisableBtn(true);
    } else if (confirmPassword === password) {
      setValidityConfirmPassword('');
    }
    ;
  };
  var submitForm = function submitForm(e) {
    e.preventDefault();
    validateForm();
  };
  var makePasswordVisible = function makePasswordVisible() {
    icon === _freeRegularSvgIcons.faEyeSlash ? (setIcon(_freeRegularSvgIcons.faEye), setType('text')) : (setIcon(_freeRegularSvgIcons.faEyeSlash), setType('password'));
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("form", {
    onSubmit: submitForm,
    action: "#",
    method: "post",
    encType: "multipart/form-data",
    noValidate: true
  }, /*#__PURE__*/React.createElement("div", {
    className: "form-field"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "user-name"
  }, "Username*"), /*#__PURE__*/React.createElement("input", {
    onChange: function onChange(e) {
      return setUserNameValue(e.target.value), setValidityName(''), setDisableBtn(false), setErrorName(null);
    },
    tabIndex: "1",
    id: "user-name",
    type: "text",
    name: "user-name",
    placeholder: "Enter your name",
    required: true,
    autoComplete: "off",
    validity: validityName,
    value: userNameValue
  }), /*#__PURE__*/React.createElement("span", {
    className: "error-message"
  }, errorName)), /*#__PURE__*/React.createElement("div", {
    className: "form-field"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "email"
  }, "Email*"), /*#__PURE__*/React.createElement("input", {
    onChange: function onChange(e) {
      return setEmail(e.target.value), setValidityEmail(''), setDisableBtn(false), setErrorEmail(null);
    },
    tabIndex: "2",
    id: "email",
    type: "email",
    name: "email",
    placeholder: "Enter your email",
    required: true,
    autoComplete: "off",
    validity: validityEmail,
    value: email
  }), /*#__PURE__*/React.createElement("span", {
    className: "error-message"
  }, errorEmail)), /*#__PURE__*/React.createElement("div", {
    className: "form-field"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "user-pass"
  }, "Password*"), /*#__PURE__*/React.createElement("div", {
    className: "input-container"
  }, /*#__PURE__*/React.createElement("input", {
    onChange: function onChange(e) {
      return setPassword(e.target.value), setValidityPassword(''), setDisableBtn(false), setErrorPassword(null);
    },
    tabIndex: "3",
    id: "user-pass",
    type: type,
    name: "pass",
    placeholder: "Enter your password",
    required: true,
    validity: validityPassword,
    value: password
  }), /*#__PURE__*/React.createElement(_reactFontawesome.FontAwesomeIcon, {
    onClick: makePasswordVisible,
    icon: icon,
    style: {
      color: "#ffffff"
    }
  })), /*#__PURE__*/React.createElement("span", {
    className: "error-message"
  }, errorPassword)), /*#__PURE__*/React.createElement("div", {
    className: "form-field"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "confirm-pass"
  }, "Confirm password*"), /*#__PURE__*/React.createElement("div", {
    className: "input-container"
  }, /*#__PURE__*/React.createElement("input", {
    onChange: function onChange(e) {
      return setConfirmPassword(e.target.value), setValidityConfirmPassword(''), setDisableBtn(false), setErrorConfirmPassword(null);
    },
    tabIndex: "4",
    id: "confirm-pass",
    type: type,
    name: "confirm-pass",
    placeholder: "Enter your password",
    required: true,
    title: "Password must contain at least 8 symbols",
    validity: validityConfirmPassword,
    value: confirmPassword
  }), /*#__PURE__*/React.createElement(_reactFontawesome.FontAwesomeIcon, {
    onClick: makePasswordVisible,
    icon: icon,
    style: {
      color: "#ffffff"
    }
  })), /*#__PURE__*/React.createElement("span", {
    className: "error-message"
  }, errorConfirmPassword)), /*#__PURE__*/React.createElement("div", {
    className: "agreement"
  }, /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("input", {
    onChange: function onChange() {
      return isChecked === false ? setChecked(true) : setChecked(false);
    },
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
var _default = FormCntrl;
exports.default = _default;