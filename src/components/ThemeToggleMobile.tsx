import type { ReactNode } from 'react';

interface ThemeToggleMobileProps {
  sunIcon: ReactNode;
  moonIcon: ReactNode;
}

export function ThemeToggleMobile({ sunIcon, moonIcon }: ThemeToggleMobileProps) {
  return (
    <div className="theme-toggle-wrapper">
      <span className="theme-toggle-icon theme-toggle-sun" aria-hidden="true">
        {sunIcon}
      </span>
      <button
        id="theme-toggle"
        className="theme-toggle"
        type="button"
        aria-label="Toggle dark mode"
        title="Toggle theme"
      >
        <span className="theme-toggle-knob" />
      </button>
      <span className="theme-toggle-icon theme-toggle-moon" aria-hidden="true">
        {moonIcon}
      </span>
    </div>
  );
}
