import type { ReactNode } from 'react';

interface SideNavSectionProps {
  label?: string;
  divider?: boolean;
  children: ReactNode;
}

export function SideNavSection({
  label,
  divider = false,
  children,
}: SideNavSectionProps) {
  return (
    <>
      {divider && <div className="my-2 border-t border-neutral-200 dark:border-neutral-700" />}
      {label && (
        <p
          className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-neutral-500"
          data-side-nav-label=""
        >
          {label}
        </p>
      )}
      {children}
    </>
  );
}
