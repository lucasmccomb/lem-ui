import type { ReactNode } from 'react';
import type { RenderLinkFn } from './types.js';
interface SideNavItemProps {
    href?: string;
    onClick?: () => void;
    icon: ReactNode;
    label: string;
    isActive?: boolean;
    badge?: number;
    external?: boolean;
    renderLink?: RenderLinkFn;
}
export declare function SideNavItem({ href, onClick, icon, label, isActive, badge, external, renderLink, }: SideNavItemProps): string | number | bigint | boolean | import("react/jsx-runtime").JSX.Element | Iterable<ReactNode> | Promise<string | number | bigint | boolean | import("react").ReactPortal | import("react").ReactElement<unknown, string | import("react").JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined;
export {};
