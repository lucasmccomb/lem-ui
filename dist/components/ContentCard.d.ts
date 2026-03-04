import type { ReactNode } from 'react';
import type { RenderLinkFn } from './types.js';
type AccentColor = 'amber' | 'blue' | 'emerald' | 'indigo' | 'rose' | 'teal';
interface ContentCardBadge {
    name: string;
    icon?: ReactNode;
}
interface ContentCardProps {
    href: string;
    title: string;
    description: string;
    image?: {
        src: string;
        alt: string;
    };
    icon?: ReactNode;
    accentColor?: AccentColor;
    subtitle?: string;
    badges?: ContentCardBadge[];
    ctaText?: string;
    renderLink?: RenderLinkFn;
    className?: string;
}
export declare function ContentCard({ href, title, description, image, icon, accentColor, subtitle, badges, ctaText, renderLink, className, }: ContentCardProps): ReactNode;
export type { ContentCardProps, ContentCardBadge, AccentColor };
