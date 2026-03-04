import type { ReactNode } from 'react';
import type { RenderLinkFn } from './types.js';
interface BottomNavItemBaseProps {
    icon: ReactNode;
    activeIcon?: ReactNode;
    label: string;
    isActive?: boolean;
    badge?: number;
}
interface BottomNavItemLinkProps extends BottomNavItemBaseProps {
    type?: 'link';
    href: string;
    onClick?: never;
    id?: never;
    renderLink?: RenderLinkFn;
}
interface BottomNavItemButtonProps extends BottomNavItemBaseProps {
    type: 'button';
    onClick?: () => void;
    id?: string;
    href?: never;
    renderLink?: never;
}
type BottomNavItemProps = BottomNavItemLinkProps | BottomNavItemButtonProps;
export declare function BottomNavItem(props: BottomNavItemProps): string | number | bigint | boolean | import("react/jsx-runtime").JSX.Element | Iterable<ReactNode> | Promise<string | number | bigint | boolean | import("react").ReactPortal | import("react").ReactElement<unknown, string | import("react").JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined;
export {};
