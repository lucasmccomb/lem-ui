import { type ReactNode } from 'react';
interface SideNavProps {
    isExpanded?: boolean;
    onExpandedChange?: (expanded: boolean) => void;
    header: ReactNode;
    children: ReactNode;
    bottom?: ReactNode;
    className?: string;
}
export declare function SideNav({ isExpanded, onExpandedChange: _onExpandedChange, header, children, bottom, className, }: SideNavProps): import("react/jsx-runtime").JSX.Element;
export {};
