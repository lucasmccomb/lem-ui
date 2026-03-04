import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useSideNavContext } from './SideNavContext.js';
const defaultRenderLink = (props) => _jsx("a", { ...props });
export function SideNavProfile({ initial, name, email, isAdmin = false, profileHref, renderLink = defaultRenderLink, isExpanded: isExpandedProp, }) {
    const ctx = useSideNavContext();
    const isExpanded = isExpandedProp ?? ctx?.isExpanded ?? false;
    return (_jsx("div", { className: "border-t border-neutral-200 p-3 dark:border-neutral-700", children: renderLink({
            href: profileHref,
            className: `flex items-center gap-3 rounded-lg transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-800 ${isExpanded ? 'px-1 py-2' : 'justify-center py-1'}`,
            title: !isExpanded ? name : undefined,
            children: (_jsxs(_Fragment, { children: [_jsxs("div", { className: "relative shrink-0", children: [_jsx("div", { className: "flex h-9 w-9 items-center justify-center overflow-hidden rounded-full bg-neutral-200 text-sm font-medium text-neutral-700 dark:bg-neutral-700 dark:text-neutral-300", children: initial }), isAdmin && (_jsx("div", { className: "absolute -bottom-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-amber-500 text-white ring-2 ring-white dark:ring-neutral-900", title: "Admin", children: _jsx("svg", { className: "h-2.5 w-2.5", viewBox: "0 0 24 24", fill: "currentColor", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: _jsx("path", { d: "M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.77 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" }) }) }))] }), _jsxs("div", { className: `min-w-0 flex-1 ${isExpanded ? '' : 'hidden'}`, "data-side-nav-label": "", children: [_jsx("p", { className: "truncate text-sm font-medium text-neutral-900 dark:text-neutral-100", children: name }), email && (_jsx("p", { className: "truncate text-xs text-neutral-500 dark:text-neutral-400", children: email }))] })] })),
        }) }));
}
