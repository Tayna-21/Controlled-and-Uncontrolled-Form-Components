"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _index = _interopRequireDefault(require("../interfaces/index.tsx"));
var _reactFontawesome = require("@fortawesome/react-fontawesome");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var Input = function Input(_ref) {
  var onChange = _ref.onChange,
    onClick = _ref.onClick,
    attributes = _ref.attributes;
  return /*#__PURE__*/React.createElement("div", {
    className: "form-field"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: attributes.id
  }, attributes.label, "*"), /*#__PURE__*/React.createElement("div", {
    className: "input-container"
  }, /*#__PURE__*/React.createElement("input", {
    onChange: onChange,
    tabIndex: attributes.tabIndex,
    id: attributes.id,
    type: attributes.type,
    name: attributes.name,
    placeholder: attributes.placeholder,
    required: true,
    autoComplete: "off",
    validity: attributes.validity,
    value: attributes.value
  }), attributes.icon && /*#__PURE__*/React.createElement(_reactFontawesome.FontAwesomeIcon, {
    onClick: onClick,
    icon: attributes.icon,
    style: {
      color: "#ffffff"
    }
  })), /*#__PURE__*/React.createElement("span", {
    className: "error-message"
  }, attributes.error));
};
var _default = Input;
exports.default = _default;