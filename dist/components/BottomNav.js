import { jsx as _jsx } from "react/jsx-runtime";
export function BottomNav({ children, className = '' }) {
    return (_jsx("nav", { className: `fixed bottom-0 left-0 right-0 z-50 flex items-stretch border-t border-neutral-200 bg-white pb-[env(safe-area-inset-bottom)] nav:hidden dark:border-neutral-800 dark:bg-neutral-900 ${className}`, "aria-label": "Mobile navigation", children: children }));
}
