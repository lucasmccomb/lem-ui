import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export function ThemeToggleMobile({ sunIcon, moonIcon }) {
    return (_jsxs("div", { className: "theme-toggle-wrapper", children: [_jsx("span", { className: "theme-toggle-icon theme-toggle-sun", "aria-hidden": "true", children: sunIcon }), _jsx("button", { id: "theme-toggle", className: "theme-toggle", type: "button", "aria-label": "Toggle dark mode", title: "Toggle theme", children: _jsx("span", { className: "theme-toggle-knob" }) }), _jsx("span", { className: "theme-toggle-icon theme-toggle-moon", "aria-hidden": "true", children: moonIcon })] }));
}
