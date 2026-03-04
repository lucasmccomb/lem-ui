import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useSideNavContext } from './SideNavContext.js';
export function SideNavToggle({ isExpanded: isExpandedProp, onToggle, expandIcon, collapseIcon, id, }) {
    const ctx = useSideNavContext();
    const isExpanded = isExpandedProp ?? ctx?.isExpanded ?? false;
    return (_jsx("div", { className: "border-t border-neutral-200 p-3 dark:border-neutral-700", children: _jsxs("button", { id: id, onClick: onToggle, className: `flex w-full items-center rounded-lg p-2 text-neutral-600 transition-colors hover:bg-neutral-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 motion-reduce:transition-none dark:text-neutral-400 dark:hover:bg-neutral-800 ${isExpanded ? '' : 'justify-center'}`, type: "button", "aria-label": isExpanded ? 'Collapse navigation' : 'Expand navigation', "aria-expanded": isExpanded, children: [_jsx("span", { "aria-hidden": "true", children: isExpanded ? collapseIcon : expandIcon }), _jsx("span", { className: `ml-3 text-sm ${isExpanded ? '' : 'hidden'}`, "data-side-nav-label": "", children: isExpanded ? 'Collapse' : 'Expand' })] }) }));
}
