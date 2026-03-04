import type { ReactNode } from 'react';
import type { RenderLinkFn } from './types.js';

type AccentColor = 'amber' | 'blue' | 'emerald' | 'indigo' | 'rose' | 'teal';

interface TOCItem {
  id: string;
  label: string;
}

interface TOCSidebarProps {
  items: TOCItem[];
  activeSection?: string;
  onNavigate?: (sectionId: string) => void;
  accentColor?: AccentColor;
  backLink?: { label: string; href: string };
  renderLink?: RenderLinkFn;
  className?: string;
}

const ACCENT_ACTIVE: Record<AccentColor, string> = {
  amber: 'border-amber-600 text-amber-600 dark:border-amber-400 dark:text-amber-400',
  blue: 'border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400',
  emerald: 'border-emerald-600 text-emerald-600 dark:border-emerald-400 dark:text-emerald-400',
  indigo: 'border-indigo-600 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400',
  rose: 'border-rose-600 text-rose-600 dark:border-rose-400 dark:text-rose-400',
  teal: 'border-teal-600 text-teal-600 dark:border-teal-400 dark:text-teal-400',
};

const defaultRenderLink: RenderLinkFn = (props) => <a {...props} />;

export function TOCSidebar({
  items,
  activeSection,
  onNavigate,
  accentColor = 'blue',
  backLink,
  renderLink = defaultRenderLink,
  className = '',
}: TOCSidebarProps) {
  const backArrow = (
    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5M12 19l-7-7 7-7" />
    </svg>
  );

  return (
    <aside
      className={`hidden w-44 shrink-0 self-start pt-4 lg:block ${className}`}
      aria-label="Table of contents"
    >
      <div className="sticky top-8">
        {backLink &&
          renderLink({
            href: backLink.href,
            className:
              'mb-8 inline-flex items-center gap-2 pl-0 text-sm text-gray-500 transition-colors hover:text-gray-700 dark:text-neutral-500 dark:hover:text-neutral-300',
            children: (
              <>
                {backArrow}
                {backLink.label}
              </>
            ),
          })}
        <nav>
          <ul className="space-y-1 border-l border-gray-200 dark:border-neutral-700">
            {items.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => onNavigate?.(item.id)}
                    data-toc-link={item.id}
                    {...(isActive ? { 'data-toc-active': '' } : {})}
                    className={`block w-full cursor-pointer border-l-2 bg-transparent py-1.5 pl-4 -ml-px text-left text-sm transition-colors ${
                      isActive
                        ? `${ACCENT_ACTIVE[accentColor]} font-medium`
                        : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-neutral-500 dark:hover:text-neutral-300'
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </aside>
  );
}

export function TOCMobile({
  items,
  title = 'Table of Contents',
  className = '',
}: {
  items: TOCItem[];
  title?: string;
  className?: string;
}) {
  return (
    <details className={`mb-6 py-3 lg:hidden ${className}`}>
      <summary className="cursor-pointer select-none text-[0.9375rem] font-semibold text-gray-900 dark:text-neutral-100">
        {title}
      </summary>
      <nav className="mt-3">
        <ol className="flex list-decimal flex-col gap-1.5 pl-7">
          {items.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="text-sm text-blue-600 no-underline hover:underline dark:text-blue-400"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ol>
      </nav>
    </details>
  );
}

export type { TOCItem, TOCSidebarProps };
