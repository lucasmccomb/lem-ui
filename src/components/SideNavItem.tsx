import React, { type ReactNode } from 'react';
import type { RenderLinkFn } from './types.js';

interface SideNavItemProps {
  href: string;
  icon: ReactNode;
  label: string;
  isActive?: boolean;
  external?: boolean;
  renderLink?: RenderLinkFn;
}

const defaultRenderLink: RenderLinkFn = (props) => <a {...props} />;

export function SideNavItem({
  href,
  icon,
  label,
  isActive = false,
  external = false,
  renderLink = defaultRenderLink,
}: SideNavItemProps) {
  return renderLink({
    href,
    className: `side-nav-item ${isActive ? 'side-nav-item-active' : ''}`,
    'aria-current': isActive ? 'page' : undefined,
    title: label,
    ...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {}),
    children: (
      <>
        <span className="side-nav-icon" aria-hidden="true">
          {icon}
        </span>
        <span className="side-nav-label">{label}</span>
      </>
    ),
  });
}
