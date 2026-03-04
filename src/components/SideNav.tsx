import React, { type ReactNode, useEffect, useRef, useState } from 'react';

interface SideNavProps {
  isExpanded: boolean;
  onExpandedChange?: (expanded: boolean) => void;
  header: ReactNode;
  children: ReactNode;
  bottom?: ReactNode;
  className?: string;
}

export function SideNav({
  isExpanded,
  onExpandedChange,
  header,
  children,
  bottom,
  className = '',
}: SideNavProps) {
  const [isHoverExpanded, setIsHoverExpanded] = useState(false);
  const hoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);

  const isVisuallyExpanded = isExpanded || isHoverExpanded;

  const handleMouseEnter = () => {
    if (!isExpanded) {
      hoverTimeoutRef.current = setTimeout(() => {
        setIsHoverExpanded(true);
      }, 200);
    }
  };

  const handleMouseLeave = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    setIsHoverExpanded(false);
  };

  return (
    <aside
      data-side-nav={isVisuallyExpanded ? 'expanded' : 'collapsed'}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      aria-label="Main navigation"
      className={`fixed left-0 top-0 z-40 hidden h-full flex-col border-r border-neutral-200 bg-white transition-all duration-200 ease-out motion-reduce:transition-none nav:flex dark:border-neutral-800 dark:bg-neutral-900 ${isVisuallyExpanded ? 'w-64' : 'w-16'} ${isHoverExpanded && !isExpanded ? 'shadow-xl' : ''} ${className}`}
    >
      <div className="flex shrink-0 items-center justify-center border-b border-neutral-200 p-3 dark:border-neutral-700">
        {header}
      </div>
      <nav className="flex flex-1 flex-col gap-1 overflow-y-auto p-3">{children}</nav>
      {bottom && (
        <div className="flex shrink-0 flex-col gap-1 border-t border-neutral-200 p-3 dark:border-neutral-700">
          {bottom}
        </div>
      )}
    </aside>
  );
}
