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
var FormUncntrl = function FormUncntrl() {
  var userName = (0, _react.useRef)();
  var userEmail = (0, _react.useRef)();
  var userPassword = (0, _react.useRef)();
  var userConfirmPassword = (0, _react.useRef)();
  var errorName = (0, _react.useRef)();
  var errorEmail = (0, _react.useRef)();
  var errorPassword = (0, _react.useRef)();
  var errorConfirmPassword = (0, _react.useRef)();
  var checkbox = (0, _react.useRef)();
  var submitBtn = (0, _react.useRef)();
  var _useState = (0, _react.useState)(_freeRegularSvgIcons.faEyeSlash),
    _useState2 = _slicedToArray(_useState, 2),
    icon = _useState2[0],
    setIcon = _useState2[1];
  var validateForm = function validateForm() {
    var regexName = '^[a-zA-Z0-9]+$';
    var regexEmail = '^[a-zA-Z0-9.!_]+@[a-zA-Z]+[.]+([a-zA-Z]+)*$';
    var regexPassword = '^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$';
    var name = userName.current.value;
    var email = userEmail.current.value;
    var password = userPassword.current.value;
    var confirmPassword = userConfirmPassword.current.value;
    if (!name.match(regexName) && name !== '') {
      errorName.current.innerText = 'Alphabets and number only';
      userName.current.setAttribute("validity", "invalid");
      submitBtn.current.setAttribute("disabled", true);
    } else if (name.length === 1) {
      errorName.current.innerText = 'The name is too short';
      userName.current.setAttribute("validity", "invalid");
      submitBtn.current.setAttribute("disabled", true);
    } else if (name === '') {
      errorName.current.innerText = 'The field is required';
      userName.current.setAttribute("validity", "invalid");
      submitBtn.current.setAttribute("disabled", true);
    } else if (!!name.match(regexName) && name !== '') {
      userName.current.removeAttribute("validity");
    }
    ;
    if (!email.match(regexEmail) && email !== '') {
      errorEmail.current.innerText = 'Please enter a valid email adress';
      userEmail.current.setAttribute("validity", "invalid");
      submitBtn.current.setAttribute("disabled", true);
    } else if (email === '') {
      errorEmail.current.innerText = 'The field is required';
      userEmail.current.setAttribute("validity", "invalid");
      submitBtn.current.setAttribute("disabled", true);
    } else if (!!email.match(regexEmail)) {
      userEmail.current.removeAttribute("validity");
    }
    ;
    if (!password.match(regexPassword) && password !== '') {
      errorPassword.current.innerText = 'Password must contain at least 8 symbols, including numbers and special characters';
      userPassword.current.setAttribute("validity", "invalid");
      submitBtn.current.setAttribute("disabled", true);
    } else if (password === '') {
      errorPassword.current.innerText = 'The field is required';
      userPassword.current.setAttribute("validity", "invalid");
      submitBtn.current.setAttribute("disabled", true);
    } else if (!!password.match(regexPassword)) {
      userPassword.current.removeAttribute("validity");
    }
    ;
    if (confirmPassword !== password) {
      errorConfirmPassword.current.innerText = 'Password is not the same';
      userConfirmPassword.current.setAttribute("validity", "invalid");
      submitBtn.current.setAttribute("disabled", true);
    } else if (confirmPassword === '') {
      errorConfirmPassword.current.innerText = 'The field is required';
      userConfirmPassword.current.setAttribute("validity", "invalid");
      submitBtn.current.setAttribute("disabled", true);
    } else if (confirmPassword === password) {
      userConfirmPassword.current.removeAttribute("validity");
    }
    ;
  };
  var submitForm = function submitForm(e) {
    e.preventDefault();
    validateForm();
  };
  var makePasswordVisible = function makePasswordVisible() {
    if (icon === _freeRegularSvgIcons.faEyeSlash) {
      setIcon(_freeRegularSvgIcons.faEye);
      userPassword.current.type = 'text';
      userConfirmPassword.current.type = 'text';
    } else if (icon === _freeRegularSvgIcons.faEye) {
      setIcon(_freeRegularSvgIcons.faEyeSlash);
      userPassword.current.type = 'password';
      userConfirmPassword.current.type = 'password';
    }
    ;
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
    htmlFor: "user_name"
  }, "Username*"), /*#__PURE__*/React.createElement("input", {
    ref: userName,
    onChange: function onChange() {
      return submitBtn.current.removeAttribute("disabled"), errorName.current.innerText = '', userName.current.removeAttribute('validity');
    },
    tabIndex: "1",
    id: "user_name",
    type: "text",
    name: "user-name",
    placeholder: "Enter your name",
    required: true,
    autoComplete: "off"
  }), /*#__PURE__*/React.createElement("span", {
    className: "error-message",
    ref: errorName
  })), /*#__PURE__*/React.createElement("div", {
    className: "form-field"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "mail"
  }, "Email*"), /*#__PURE__*/React.createElement("input", {
    ref: userEmail,
    onChange: function onChange() {
      return submitBtn.current.removeAttribute("disabled"), errorEmail.current.innerText = '', userEmail.current.removeAttribute('validity');
    },
    tabIndex: "2",
    id: "mail",
    type: "email",
    name: "email",
    placeholder: "Enter your email",
    required: true,
    autoComplete: "off"
  }), /*#__PURE__*/React.createElement("span", {
    className: "error-message",
    ref: errorEmail
  })), /*#__PURE__*/React.createElement("div", {
    className: "form-field"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "user_pass"
  }, "Password*"), /*#__PURE__*/React.createElement("div", {
    className: "input-container"
  }, /*#__PURE__*/React.createElement("input", {
    ref: userPassword,
    onChange: function onChange() {
      return submitBtn.current.removeAttribute("disabled"), errorPassword.current.innerText = '', userPassword.current.removeAttribute('validity');
    },
    tabIndex: "3",
    id: "user_pass",
    type: "password",
    name: "pass",
    placeholder: "Enter your password",
    required: true
  }), /*#__PURE__*/React.createElement(_reactFontawesome.FontAwesomeIcon, {
    onClick: makePasswordVisible,
    icon: icon,
    style: {
      color: "#ffffff"
    }
  })), /*#__PURE__*/React.createElement("span", {
    className: "error-message",
    ref: errorPassword
  })), /*#__PURE__*/React.createElement("div", {
    className: "form-field"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "confirm_pass"
  }, "Confirm password*"), /*#__PURE__*/React.createElement("div", {
    className: "input-container"
  }, /*#__PURE__*/React.createElement("input", {
    ref: userConfirmPassword,
    onChange: function onChange() {
      return submitBtn.current.removeAttribute("disabled"), errorConfirmPassword.current.innerText = '', userConfirmPassword.current.removeAttribute('validity');
    },
    tabIndex: "4",
    id: "confirm_pass",
    type: "password",
    name: "confirm-pass",
    placeholder: "Enter your password",
    required: true,
    title: "Password must contain at least 8 symbols"
  }), /*#__PURE__*/React.createElement(_reactFontawesome.FontAwesomeIcon, {
    onClick: makePasswordVisible,
    icon: icon,
    style: {
      color: "#ffffff"
    }
  })), /*#__PURE__*/React.createElement("span", {
    className: "error-message",
    ref: errorConfirmPassword
  })), /*#__PURE__*/React.createElement("div", {
    className: "agreement"
  }, /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("input", {
    tabIndex: "5",
    ref: checkbox,
    onChange: function onChange() {
      return !checkbox.current.checked ? checkbox.current.setAttribute('checked', true) : checkbox.current.removeAttribute('checked');
    },
    type: "checkbox"
  }), /*#__PURE__*/React.createElement("span", {
    className: "check-icon"
  })), /*#__PURE__*/React.createElement("p", null, "I agree to the ", /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "terms and conditions"))), /*#__PURE__*/React.createElement("input", {
    tabIndex: "-1",
    ref: submitBtn,
    id: "submit_button",
    type: "submit",
    value: "Register"
  }), /*#__PURE__*/React.createElement("span", null, "*Required field")));
};
var _default = FormUncntrl;
exports.default = _default;