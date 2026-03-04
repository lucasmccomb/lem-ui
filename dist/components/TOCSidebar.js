import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
const ACCENT_ACTIVE = {
    amber: 'border-amber-600 text-amber-600 dark:border-amber-400 dark:text-amber-400',
    blue: 'border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400',
    emerald: 'border-emerald-600 text-emerald-600 dark:border-emerald-400 dark:text-emerald-400',
    indigo: 'border-indigo-600 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400',
    rose: 'border-rose-600 text-rose-600 dark:border-rose-400 dark:text-rose-400',
    teal: 'border-teal-600 text-teal-600 dark:border-teal-400 dark:text-teal-400',
};
const defaultRenderLink = (props) => _jsx("a", { ...props });
export function TOCSidebar({ items, activeSection, onNavigate, accentColor = 'blue', backLink, renderLink = defaultRenderLink, className = '', }) {
    const backArrow = (_jsx("svg", { className: "h-3 w-3", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M19 12H5M12 19l-7-7 7-7" }) }));
    return (_jsx("aside", { className: `hidden w-44 shrink-0 self-start pt-4 lg:block ${className}`, "aria-label": "Table of contents", children: _jsxs("div", { className: "sticky top-8", children: [backLink &&
                    renderLink({
                        href: backLink.href,
                        className: 'mb-8 inline-flex items-center gap-2 pl-0 text-sm text-gray-500 transition-colors hover:text-gray-700 dark:text-neutral-500 dark:hover:text-neutral-300',
                        children: (_jsxs(_Fragment, { children: [backArrow, backLink.label] })),
                    }), _jsx("nav", { children: _jsx("ul", { className: "space-y-1 border-l border-gray-200 dark:border-neutral-700", children: items.map((item) => {
                            const isActive = activeSection === item.id;
                            return (_jsx("li", { children: _jsx("button", { type: "button", onClick: () => onNavigate?.(item.id), "data-toc-link": item.id, ...(isActive ? { 'data-toc-active': '' } : {}), className: `block w-full cursor-pointer border-l-2 bg-transparent py-1.5 pl-4 -ml-px text-left text-sm transition-colors ${isActive
                                        ? `${ACCENT_ACTIVE[accentColor]} font-medium`
                                        : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-neutral-500 dark:hover:text-neutral-300'}`, children: item.label }) }, item.id));
                        }) }) })] }) }));
}
export function TOCMobile({ items, title = 'Table of Contents', className = '', }) {
    return (_jsxs("details", { className: `mb-6 py-3 lg:hidden ${className}`, children: [_jsx("summary", { className: "cursor-pointer select-none text-[0.9375rem] font-semibold text-gray-900 dark:text-neutral-100", children: title }), _jsx("nav", { className: "mt-3", children: _jsx("ol", { className: "flex list-decimal flex-col gap-1.5 pl-7", children: items.map((item) => (_jsx("li", { children: _jsx("a", { href: `#${item.id}`, className: "text-sm text-blue-600 no-underline hover:underline dark:text-blue-400", children: item.label }) }, item.id))) }) })] }));
}
