import type { RenderLinkFn } from './types.js';
type AccentColor = 'amber' | 'blue' | 'emerald' | 'indigo' | 'rose' | 'teal';
interface TOCItem {
    id: string;
    label: string;
}
interface TOCSidebarProps {
    items: TOCItem[];
    activeSection?: string;
    onNavigate?: (sectionId: string) => void;
    accentColor?: AccentColor;
    backLink?: {
        label: string;
        href: string;
    };
    renderLink?: RenderLinkFn;
    className?: string;
}
export declare function TOCSidebar({ items, activeSection, onNavigate, accentColor, backLink, renderLink, className, }: TOCSidebarProps): import("react/jsx-runtime").JSX.Element;
export declare function TOCMobile({ items, title, className, }: {
    items: TOCItem[];
    title?: string;
    className?: string;
}): import("react/jsx-runtime").JSX.Element;
export type { TOCItem, TOCSidebarProps };
