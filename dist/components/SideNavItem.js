import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useSideNavContext } from './SideNavContext.js';
const defaultRenderLink = (props) => _jsx("a", { ...props });
export function SideNavItem({ href, onClick, icon, label, isExpanded: isExpandedProp, isActive = false, badge, external = false, renderLink = defaultRenderLink, }) {
    const ctx = useSideNavContext();
    const isExpanded = isExpandedProp ?? ctx?.isExpanded ?? false;
    const baseClasses = `relative flex items-center gap-3 rounded-lg p-3 text-sm font-medium whitespace-nowrap transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 motion-reduce:transition-none ${isActive
        ? 'bg-neutral-100 text-neutral-900 dark:bg-neutral-800 dark:text-neutral-100'
        : 'text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-neutral-100'}`;
    const content = (_jsxs(_Fragment, { children: [_jsx("span", { className: "shrink-0", "aria-hidden": "true", children: icon }), _jsx("span", { className: isExpanded ? 'truncate' : 'hidden', "data-side-nav-label": "", children: label }), badge !== undefined && badge > 0 && (_jsx("span", { className: `absolute flex items-center justify-center rounded-full bg-red-500 text-xs font-medium text-white ${isExpanded
                    ? 'right-3 h-5 min-w-5 px-1.5'
                    : 'right-1 top-1 h-4 min-w-4 px-1 text-[10px]'}`, children: badge > 99 ? '99+' : badge }))] }));
    if (!href) {
        return (_jsx("button", { onClick: onClick, className: `w-full ${baseClasses}`, type: "button", title: !isExpanded ? label : undefined, "aria-label": !isExpanded ? label : undefined, children: content }));
    }
    return renderLink({
        href,
        className: baseClasses,
        'aria-current': isActive ? 'page' : undefined,
        title: !isExpanded ? label : undefined,
        ...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {}),
        children: content,
    });
}
