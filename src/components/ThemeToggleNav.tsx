import React, { type ReactNode } from 'react';

interface ThemeToggleNavProps {
  sunIcon: ReactNode;
  moonIcon: ReactNode;
}

export function ThemeToggleNav({ sunIcon, moonIcon }: ThemeToggleNavProps) {
  return (
    <div className="side-nav-theme">
      <div className="side-nav-theme-pill">
        <span className="side-nav-theme-icon side-nav-theme-sun" aria-hidden="true">
          {sunIcon}
        </span>
        <button
          id="theme-toggle-nav"
          className="side-nav-theme-toggle"
          type="button"
          aria-label="Toggle dark mode"
          title="Toggle theme"
        >
          <span className="side-nav-theme-knob" />
        </button>
        <span className="side-nav-theme-icon side-nav-theme-moon" aria-hidden="true">
          {moonIcon}
        </span>
      </div>
      <span className="side-nav-label">Theme</span>
    </div>
  );
}
