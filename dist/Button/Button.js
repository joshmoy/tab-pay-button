"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./style.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = function Button(props) {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "tab_payment_button_container",
    style: props.containerStyle
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "tab_payment_button",
    style: props.buttonStyle
  }, props.text || "Pay now"));
};

var _default = Button;
exports.default = _default;