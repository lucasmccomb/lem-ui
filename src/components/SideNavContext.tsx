import { createContext, useContext } from 'react';

interface SideNavContextValue {
  isExpanded: boolean;
}

const SideNavContext = createContext<SideNavContextValue | null>(null);

export const SideNavProvider = SideNavContext.Provider;

export function useSideNavContext(): SideNavContextValue | null {
  return useContext(SideNavContext);
}
