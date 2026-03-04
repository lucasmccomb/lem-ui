import type { ReactNode } from 'react';
import { useSideNavContext } from './SideNavContext.js';

interface SideNavToggleProps {
  isExpanded?: boolean;
  onToggle?: () => void;
  expandIcon: ReactNode;
  collapseIcon: ReactNode;
  id?: string;
}

export function SideNavToggle({
  isExpanded: isExpandedProp,
  onToggle,
  expandIcon,
  collapseIcon,
  id,
}: SideNavToggleProps) {
  const ctx = useSideNavContext();
  const isVisuallyExpanded = isExpandedProp ?? ctx?.isExpanded ?? false;
  const isPersistentlyExpanded = ctx?.isPersistentlyExpanded ?? isExpandedProp ?? false;

  return (
    <div className="border-t border-neutral-200 p-3 dark:border-neutral-700">
      <button
        id={id}
        onClick={onToggle}
        className="flex w-full cursor-pointer items-center rounded-lg p-2 text-neutral-600 transition-colors hover:bg-neutral-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 motion-reduce:transition-none dark:text-neutral-400 dark:hover:bg-neutral-800"
        type="button"
        aria-label={isPersistentlyExpanded ? 'Collapse navigation' : 'Expand navigation'}
        aria-expanded={isPersistentlyExpanded}
      >
        <span aria-hidden="true">{isPersistentlyExpanded ? collapseIcon : expandIcon}</span>
        <span
          className="ml-3 text-sm"
          data-side-nav-label=""
        >
          {isPersistentlyExpanded ? 'Collapse' : 'Expand'}
        </span>
      </button>
    </div>
  );
}
