import React, { type ReactNode } from 'react';

interface SideNavToggleProps {
  isExpanded: boolean;
  onToggle?: () => void;
  expandIcon: ReactNode;
  collapseIcon: ReactNode;
  id?: string;
}

export function SideNavToggle({
  isExpanded,
  onToggle,
  expandIcon,
  collapseIcon,
  id,
}: SideNavToggleProps) {
  return (
    <div className="border-t border-neutral-200 p-3 dark:border-neutral-700">
      <button
        id={id}
        onClick={onToggle}
        className={`flex w-full items-center rounded-lg p-2 text-neutral-600 transition-colors hover:bg-neutral-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 motion-reduce:transition-none dark:text-neutral-400 dark:hover:bg-neutral-800 ${isExpanded ? '' : 'justify-center'}`}
        type="button"
        aria-label={isExpanded ? 'Collapse navigation' : 'Expand navigation'}
        aria-expanded={isExpanded}
      >
        <span aria-hidden="true">{isExpanded ? collapseIcon : expandIcon}</span>
        <span
          className={`ml-3 text-sm ${isExpanded ? '' : 'hidden'}`}
          data-side-nav-label=""
        >
          {isExpanded ? 'Collapse' : 'Expand'}
        </span>
      </button>
    </div>
  );
}
