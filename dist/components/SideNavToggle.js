import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useSideNavContext } from './SideNavContext.js';
export function SideNavToggle({ isExpanded: isExpandedProp, onToggle, expandIcon, collapseIcon, id, }) {
    const ctx = useSideNavContext();
    const isVisuallyExpanded = isExpandedProp ?? ctx?.isExpanded ?? false;
    const isPersistentlyExpanded = ctx?.isPersistentlyExpanded ?? isExpandedProp ?? false;
    return (_jsx("div", { className: "border-t border-neutral-200 p-3 dark:border-neutral-700", children: _jsxs("button", { id: id, onClick: onToggle, className: `flex w-full cursor-pointer items-center rounded-lg p-2 text-neutral-600 transition-colors hover:bg-neutral-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 motion-reduce:transition-none dark:text-neutral-400 dark:hover:bg-neutral-800 ${isVisuallyExpanded ? '' : 'justify-center'}`, type: "button", "aria-label": isPersistentlyExpanded ? 'Collapse navigation' : 'Expand navigation', "aria-expanded": isPersistentlyExpanded, children: [_jsx("span", { "aria-hidden": "true", children: isPersistentlyExpanded ? collapseIcon : expandIcon }), _jsx("span", { className: `ml-3 text-sm ${isVisuallyExpanded ? '' : 'hidden'}`, "data-side-nav-label": "", children: isPersistentlyExpanded ? 'Collapse' : 'Expand' })] }) }));
}
