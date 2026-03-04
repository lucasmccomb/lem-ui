import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from 'react';
import { SideNavProvider } from './SideNavContext.js';
export function SideNav({ isExpanded, onExpandedChange: _onExpandedChange, header, children, bottom, className = '', }) {
    const [isHoverExpanded, setIsHoverExpanded] = useState(false);
    const hoverTimeoutRef = useRef(null);
    useEffect(() => {
        return () => {
            if (hoverTimeoutRef.current) {
                clearTimeout(hoverTimeoutRef.current);
            }
        };
    }, []);
    const isVisuallyExpanded = isExpanded || isHoverExpanded;
    const handleMouseEnter = () => {
        if (!isExpanded) {
            hoverTimeoutRef.current = setTimeout(() => {
                setIsHoverExpanded(true);
            }, 200);
        }
    };
    const handleMouseLeave = () => {
        if (hoverTimeoutRef.current) {
            clearTimeout(hoverTimeoutRef.current);
            hoverTimeoutRef.current = null;
        }
        setIsHoverExpanded(false);
    };
    return (_jsx(SideNavProvider, { value: { isExpanded: isVisuallyExpanded }, children: _jsxs("aside", { "data-side-nav": isVisuallyExpanded ? 'expanded' : 'collapsed', onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave, "aria-label": "Main navigation", className: `fixed left-0 top-0 z-40 hidden h-full flex-col overflow-hidden border-r border-neutral-200 bg-white transition-all duration-200 ease-out motion-reduce:transition-none nav:flex dark:border-neutral-800 dark:bg-neutral-900 ${isVisuallyExpanded ? 'w-64' : 'w-16'} ${isHoverExpanded && !isExpanded ? 'shadow-xl' : ''} ${className}`, children: [_jsx("div", { className: "flex shrink-0 items-center justify-center border-b border-neutral-200 p-3 dark:border-neutral-700", children: header }), _jsx("nav", { className: "flex flex-1 flex-col gap-1 overflow-y-auto p-3", children: children }), bottom] }) }));
}
