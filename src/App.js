"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _index = _interopRequireDefault(require("./components/FormControlled/index.tsx"));
var _index2 = _interopRequireDefault(require("./components/FormUncontrolled/index.tsx"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function App() {
  return /*#__PURE__*/React.createElement("div", {
    className: "wrapper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "item"
  }, /*#__PURE__*/React.createElement("h1", null, "Uncontrolled Components"), /*#__PURE__*/React.createElement("div", {
    className: "form-background"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement(_index2.default, null)))), /*#__PURE__*/React.createElement("div", {
    className: "item"
  }, /*#__PURE__*/React.createElement("h1", null, "Controlled Components"), /*#__PURE__*/React.createElement("div", {
    className: "form-background"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement(_index.default, null)))));
}
var _default = App;
exports.default = _default;