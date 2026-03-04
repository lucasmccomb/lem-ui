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

const defaultRenderLink: RenderLinkFn = (props) => <a {...props} />;

export function SideNavItem({
  href,
  onClick,
  icon,
  label,
  isActive = false,
  badge,
  external = false,
  renderLink = defaultRenderLink,
}: SideNavItemProps) {
  const baseClasses = `relative flex items-center gap-3 rounded-lg p-3 text-sm font-medium whitespace-nowrap transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 motion-reduce:transition-none ${
    isActive
      ? 'bg-neutral-100 text-neutral-900 dark:bg-neutral-800 dark:text-neutral-100'
      : 'text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-neutral-100'
  }`;

  const content = (
    <>
      <span className="shrink-0" aria-hidden="true">
        {icon}
      </span>
      <span className="truncate" data-side-nav-label="">
        {label}
      </span>
      {badge !== undefined && badge > 0 && (
        <span
          className="absolute right-3 flex h-5 min-w-5 items-center justify-center rounded-full bg-red-500 px-1.5 text-xs font-medium text-white"
        >
          {badge > 99 ? '99+' : badge}
        </span>
      )}
    </>
  );

  if (!href) {
    return (
      <button
        onClick={onClick}
        className={`w-full ${baseClasses}`}
        type="button"
        title={label}
        aria-label={label}
      >
        {content}
      </button>
    );
  }

  return renderLink({
    href,
    className: baseClasses,
    'aria-current': isActive ? 'page' : undefined,
    title: label,
    ...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {}),
    children: content,
  });
}
