import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useSideNavContext } from './SideNavContext.js';
export function SideNavSection({ label, divider = false, isExpanded: isExpandedProp, children, }) {
    const ctx = useSideNavContext();
    const isExpanded = isExpandedProp ?? ctx?.isExpanded ?? false;
    return (_jsxs(_Fragment, { children: [divider && _jsx("div", { className: "my-2 border-t border-neutral-200 dark:border-neutral-700" }), label && (_jsx("p", { className: `px-3 py-1 text-xs font-semibold uppercase tracking-wider text-neutral-500 ${isExpanded ? '' : 'hidden'}`, "data-side-nav-label": "", children: label })), children] }));
}
