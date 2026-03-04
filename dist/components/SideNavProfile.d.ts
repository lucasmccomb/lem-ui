import type { RenderLinkFn } from './types.js';
interface SideNavProfileProps {
    initial: string;
    name: string;
    email?: string;
    isAdmin?: boolean;
    profileHref: string;
    renderLink?: RenderLinkFn;
}
export declare function SideNavProfile({ initial, name, email, isAdmin, profileHref, renderLink, }: SideNavProfileProps): import("react/jsx-runtime").JSX.Element;
export {};
