import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export function ThemeToggleNav({ sunIcon, moonIcon }) {
    return (_jsxs("div", { className: "side-nav-theme", children: [_jsxs("div", { className: "side-nav-theme-pill", children: [_jsx("span", { className: "side-nav-theme-icon side-nav-theme-sun", "aria-hidden": "true", children: sunIcon }), _jsx("button", { id: "theme-toggle-nav", className: "side-nav-theme-toggle", type: "button", "aria-label": "Toggle dark mode", title: "Toggle theme", children: _jsx("span", { className: "side-nav-theme-knob" }) }), _jsx("span", { className: "side-nav-theme-icon side-nav-theme-moon", "aria-hidden": "true", children: moonIcon })] }), _jsx("span", { className: "side-nav-label", "data-side-nav-label": "", children: "Theme" })] }));
}
