import React, { type ReactNode } from 'react';

interface BottomNavShellProps {
  children: ReactNode;
}

export function BottomNavShell({ children }: BottomNavShellProps) {
  return (
    <nav className="bottom-nav" aria-label="Mobile navigation">
      {children}
    </nav>
  );
}
