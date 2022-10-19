import React from 'react';
export const Button = (props) => {
    const { children, color, textColor } = props;
    const className = `bg-${color} text-${textColor}`;
    return (React.createElement("button", Object.assign({ className: `${className} ${props.className}` }, props), children));
};
//# sourceMappingURL=Button.js.map