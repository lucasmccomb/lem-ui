import type { ReactNode } from 'react';
interface SideNavSectionProps {
    label?: string;
    divider?: boolean;
    isExpanded?: boolean;
    children: ReactNode;
}
export declare function SideNavSection({ label, divider, isExpanded: isExpandedProp, children, }: SideNavSectionProps): import("react/jsx-runtime").JSX.Element;
export {};
