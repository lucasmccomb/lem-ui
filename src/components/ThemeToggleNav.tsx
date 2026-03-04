import type { ReactNode } from 'react';

interface ThemeToggleNavProps {
  sunIcon: ReactNode;
  moonIcon: ReactNode;
}

export function ThemeToggleNav({ sunIcon, moonIcon }: ThemeToggleNavProps) {
  return (
    <div className="flex items-center gap-3 px-2.5 py-2">
      <div className="flex w-5 shrink-0 flex-col items-center gap-1">
        <span
          className="flex items-center justify-center text-amber-500 drop-shadow-[0_0_4px_rgba(59,130,246,0.5)] transition-colors duration-200 dark:text-[var(--text-muted)] dark:drop-shadow-none dark:filter-none"
          aria-hidden="true"
        >
          {sunIcon}
        </span>
        <button
          id="theme-toggle-nav"
          className="relative h-9 w-5 cursor-pointer rounded-full border border-[var(--border)] bg-[var(--bg-tertiary)] p-0 transition-colors duration-200 hover:border-[var(--text-muted)]"
          type="button"
          aria-label="Toggle dark mode"
          title="Toggle theme"
        >
          <span className="absolute left-0.5 top-0.5 h-3.5 w-3.5 rounded-full bg-[var(--text-primary)] transition-transform duration-200 ease-out motion-reduce:transition-none dark:translate-y-4" />
        </button>
        <span
          className="flex items-center justify-center text-[var(--text-muted)] transition-colors duration-200 dark:text-amber-500 dark:drop-shadow-[0_0_4px_rgba(59,130,246,0.5)]"
          aria-hidden="true"
        >
          {moonIcon}
        </span>
      </div>
      <span className="hidden text-sm text-neutral-600 dark:text-neutral-400" data-side-nav-label="">
        Theme
      </span>
    </div>
  );
}
