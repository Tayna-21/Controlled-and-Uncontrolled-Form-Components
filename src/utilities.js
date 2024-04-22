"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initialIconStateUncontrolled = exports.initialFormStateControlled = exports.initialErrorStateUncontrolled = void 0;
var _freeRegularSvgIcons = require("@fortawesome/free-regular-svg-icons");
var _index = require("../interfaces/index.tsx");
var initialErrorStateUncontrolled = {
  name: {
    messageError: null,
    validity: ''
  },
  email: {
    messageError: null,
    validity: ''
  },
  password: {
    messageError: null,
    validity: ''
  },
  confirmPassword: {
    messageError: null,
    validity: ''
  }
};
exports.initialErrorStateUncontrolled = initialErrorStateUncontrolled;
var initialIconStateUncontrolled = {
  password: _freeRegularSvgIcons.faEyeSlash,
  confirmPassword: _freeRegularSvgIcons.faEyeSlash
};
exports.initialIconStateUncontrolled = initialIconStateUncontrolled;
var initialFormStateControlled = {
  name: {
    content: '',
    messageError: null,
    validity: ''
  },
  email: {
    content: '',
    messageError: null,
    validity: ''
  },
  password: {
    content: '',
    type: 'password',
    messageError: null,
    validity: '',
    icon: _freeRegularSvgIcons.faEyeSlash
  },
  confirmPassword: {
    content: '',
    type: 'password',
    messageError: null,
    validity: '',
    icon: _freeRegularSvgIcons.faEyeSlash
  }
};
exports.initialFormStateControlled = initialFormStateControlled;