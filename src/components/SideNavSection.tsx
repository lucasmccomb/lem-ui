import type { ReactNode } from 'react';
import { useSideNavContext } from './SideNavContext.js';

interface SideNavSectionProps {
  label?: string;
  divider?: boolean;
  isExpanded?: boolean;
  children: ReactNode;
}

export function SideNavSection({
  label,
  divider = false,
  isExpanded: isExpandedProp,
  children,
}: SideNavSectionProps) {
  const ctx = useSideNavContext();
  const isExpanded = isExpandedProp ?? ctx?.isExpanded ?? false;

  return (
    <>
      {divider && <div className="my-2 border-t border-neutral-200 dark:border-neutral-700" />}
      {label && (
        <p
          className={`px-3 py-1 text-xs font-semibold uppercase tracking-wider text-neutral-500 ${isExpanded ? '' : 'hidden'}`}
          data-side-nav-label=""
        >
          {label}
        </p>
      )}
      {children}
    </>
  );
}
