import type { ReactNode } from 'react';
interface SideNavSectionProps {
    label?: string;
    divider?: boolean;
    children: ReactNode;
}
export declare function SideNavSection({ label, divider, children, }: SideNavSectionProps): import("react/jsx-runtime").JSX.Element;
export {};
