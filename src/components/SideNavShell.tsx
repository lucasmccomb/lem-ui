import React, { type ReactNode } from 'react';

interface SideNavShellProps {
  header: ReactNode;
  children: ReactNode;
  bottom: ReactNode;
}

export function SideNavShell({ header, children, bottom }: SideNavShellProps) {
  return (
    <aside className="side-nav" aria-label="Main navigation">
      <div className="side-nav-header">{header}</div>
      <nav className="side-nav-items">{children}</nav>
      <div className="side-nav-bottom">{bottom}</div>
    </aside>
  );
}
