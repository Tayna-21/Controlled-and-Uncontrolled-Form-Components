"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var Input = forwardRef(function (props, ref) {
  var onChange = props.onChange,
    onClick = props.onClick,
    id = props.id,
    tabIndex = props.tabIndex,
    type = props.type,
    name = props.name,
    placeholder = props.placeholder,
    message = props.message;
  return /*#__PURE__*/React.createElement("div", {
    className: "form-field"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: props.id
  }, props.id, "*"), props.type !== 'password' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("input", _extends({
    ref: ref
  }, props, {
    required: true,
    autoComplete: "off"
  })), /*#__PURE__*/React.createElement("span", {
    className: "error-message"
  }, props.message)), props.type === 'password' && /*#__PURE__*/React.createElement("div", {
    className: "input-container"
  }, /*#__PURE__*/React.createElement("input", _extends({
    ref: ref
  }, props, {
    required: true
  })), /*#__PURE__*/React.createElement("span", {
    className: "error-message"
  }, props.message), /*#__PURE__*/React.createElement(FontAwesomeIcon, {
    onClick: props.onClick,
    icon: props.icon,
    style: {
      color: "#ffffff"
    }
  })));
});
Input.displayName = 'Input';
var _default = Input;
exports.default = _default;