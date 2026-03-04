import type { ReactNode } from 'react';
interface SideNavToggleProps {
    isExpanded?: boolean;
    onToggle?: () => void;
    expandIcon: ReactNode;
    collapseIcon: ReactNode;
    id?: string;
}
export declare function SideNavToggle({ isExpanded: isExpandedProp, onToggle, expandIcon, collapseIcon, id, }: SideNavToggleProps): import("react/jsx-runtime").JSX.Element;
export {};
