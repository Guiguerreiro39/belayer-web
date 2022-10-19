"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
const react_1 = __importDefault(require("react"));
const Button = (props) => {
    const { children, color, textColor } = props;
    const className = `bg-${color} text-${textColor}`;
    return (react_1.default.createElement("button", Object.assign({ className: `${className} ${props.className}` }, props), children));
};
exports.Button = Button;
//# sourceMappingURL=Button.js.map