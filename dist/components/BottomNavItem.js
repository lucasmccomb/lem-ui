import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
const defaultRenderLink = (props) => _jsx("a", { ...props });
export function BottomNavItem(props) {
    const { icon, activeIcon, label, isActive = false, badge, type = 'link' } = props;
    const className = `relative flex flex-1 flex-col items-center justify-center gap-0.5 py-2 transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-inset motion-reduce:transition-none ${isActive
        ? 'text-blue-600 dark:text-blue-400'
        : 'text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200'}`;
    const content = (_jsxs(_Fragment, { children: [_jsxs("span", { className: "relative", "aria-hidden": "true", children: [isActive && activeIcon ? activeIcon : icon, badge !== undefined && badge > 0 && (_jsx("span", { className: "absolute -right-2 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-red-500 px-1 text-[10px] font-medium text-white", children: badge > 99 ? '99+' : badge }))] }), _jsx("span", { className: "text-[10px] font-medium", children: label })] }));
    if (type === 'button') {
        const { onClick, id } = props;
        return (_jsx("button", { className: className, id: id, type: "button", onClick: onClick, "aria-label": label, children: content }));
    }
    const { href, renderLink = defaultRenderLink } = props;
    return renderLink({
        href,
        className,
        'aria-label': label,
        'aria-current': isActive ? 'page' : undefined,
        children: content,
    });
}
