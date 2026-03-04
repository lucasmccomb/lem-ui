import type { RenderLinkFn } from './types.js';
interface SideNavProfileProps {
    initial: string;
    name: string;
    email?: string;
    isAdmin?: boolean;
    profileHref: string;
    renderLink?: RenderLinkFn;
    isExpanded?: boolean;
}
export declare function SideNavProfile({ initial, name, email, isAdmin, profileHref, renderLink, isExpanded: isExpandedProp, }: SideNavProfileProps): import("react/jsx-runtime").JSX.Element;
export {};
