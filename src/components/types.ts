import type { ReactNode } from 'react';

export interface LinkRenderProps {
  href: string;
  className?: string;
  children: ReactNode;
  'aria-current'?: 'page' | undefined;
  'aria-label'?: string;
  title?: string;
  target?: string;
  rel?: string;
}

export type RenderLinkFn = (props: LinkRenderProps) => ReactNode;
