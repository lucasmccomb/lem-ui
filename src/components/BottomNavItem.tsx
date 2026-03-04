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

const defaultRenderLink: RenderLinkFn = (props) => <a {...props} />;

export function BottomNavItem(props: BottomNavItemProps) {
  const { icon, activeIcon, label, isActive = false, badge, type = 'link' } = props;
  const className = `relative flex flex-1 flex-col items-center justify-center gap-0.5 py-2 transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-inset motion-reduce:transition-none ${
    isActive
      ? 'text-blue-600 dark:text-blue-400'
      : 'text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200'
  }`;

  const content = (
    <>
      <span className="relative" aria-hidden="true">
        {isActive && activeIcon ? activeIcon : icon}
        {badge !== undefined && badge > 0 && (
          <span className="absolute -right-2 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-red-500 px-1 text-[10px] font-medium text-white">
            {badge > 99 ? '99+' : badge}
          </span>
        )}
      </span>
      <span className="text-[10px] font-medium">{label}</span>
    </>
  );

  if (type === 'button') {
    const { onClick, id } = props as BottomNavItemButtonProps;
    return (
      <button className={className} id={id} type="button" onClick={onClick} aria-label={label}>
        {content}
      </button>
    );
  }

  const { href, renderLink = defaultRenderLink } = props as BottomNavItemLinkProps;
  return renderLink({
    href,
    className,
    'aria-label': label,
    'aria-current': isActive ? 'page' : undefined,
    children: content,
  });
}
