import React, { type ReactNode } from 'react';
import type { RenderLinkFn } from './types.js';

interface BottomNavItemBaseProps {
  icon: ReactNode;
  label: string;
  isActive?: boolean;
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

const defaultRenderLink: RenderLinkFn = (props) => <a {...props} />;

export function BottomNavItem(props: BottomNavItemProps) {
  const { icon, label, isActive = false, type = 'link' } = props;
  const className = `bottom-nav-item ${isActive ? 'bottom-nav-item-active' : ''}`;

  if (type === 'button') {
    const { onClick, id } = props as BottomNavItemButtonProps;
    return (
      <button className={className} id={id} type="button" onClick={onClick} aria-label={label}>
        <span className="bottom-nav-icon" aria-hidden="true">
          {icon}
        </span>
        <span className="bottom-nav-label">{label}</span>
      </button>
    );
  }

  const { href, renderLink = defaultRenderLink } = props as BottomNavItemLinkProps;
  return renderLink({
    href,
    className,
    'aria-label': label,
    'aria-current': isActive ? 'page' : undefined,
    children: (
      <>
        <span className="bottom-nav-icon" aria-hidden="true">
          {icon}
        </span>
        <span className="bottom-nav-label">{label}</span>
      </>
    ),
  });
}
