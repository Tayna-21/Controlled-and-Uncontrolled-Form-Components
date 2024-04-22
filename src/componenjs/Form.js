"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
function Form() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("form", {
    action: "#",
    method: "post",
    encType: "multipart/form-data"
  }, /*#__PURE__*/React.createElement("div", {
    className: "form-field"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "username"
  }, "Username*"), /*#__PURE__*/React.createElement("input", {
    tabIndex: "1",
    id: "username",
    type: "text",
    name: "username",
    placeholder: "enter your name",
    required: true,
    pattern: "[A-Za-z]+",
    minLength: "2",
    title: "Alphabets and number only",
    autoComplete: "off"
  })), /*#__PURE__*/React.createElement("div", {
    className: "form-field"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "email"
  }, "Email*"), /*#__PURE__*/React.createElement("input", {
    tabIndex: "2",
    id: "email",
    type: "email",
    name: "email",
    placeholder: "enter your email",
    required: true,
    title: "Please enter a valid email adress",
    autoComplete: "off",
    pattern: "^[a-zA-Z0-9.!_]+@[a-zA-Z]+[.]+([a-zA-Z]+)*$"
  }), /*#__PURE__*/React.createElement("span", {
    className: "error-message"
  })), /*#__PURE__*/React.createElement("div", {
    className: "form-field"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "user-pass"
  }, "Password*"), /*#__PURE__*/React.createElement("input", {
    tabIndex: "3",
    id: "user-pass",
    type: "password",
    name: "pass",
    placeholder: "enter your password",
    required: true,
    minLength: "8",
    maxLength: "30",
    pattern: "(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{6,}",
    title: "Password must contain at least 8 symbols"
  })), /*#__PURE__*/React.createElement("div", {
    className: "form-field"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "confirm-pass"
  }, "Confirm password*"), /*#__PURE__*/React.createElement("input", {
    tabIndex: "4",
    id: "confirm-pass",
    type: "password",
    name: "confirm-pass",
    placeholder: "enter your password",
    required: true,
    minLength: "8",
    maxLength: "30",
    pattern: "(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{6,}",
    title: "Password must contain at least 8 symbols"
  })), /*#__PURE__*/React.createElement("input", {
    tabIndex: "5",
    type: "checkbox"
  }), /*#__PURE__*/React.createElement("p", null, "I agree to the ", /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "terms and conditions")), /*#__PURE__*/React.createElement("input", {
    tabIndex: "-1",
    id: "submit-button",
    type: "submit",
    value: "Register"
  }), /*#__PURE__*/React.createElement("span", null, "*Required")));
}
var _default = Form;
exports.default = _default;