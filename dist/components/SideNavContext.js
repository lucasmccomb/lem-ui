import { createContext, useContext } from 'react';
const SideNavContext = createContext(null);
export const SideNavProvider = SideNavContext.Provider;
export function useSideNavContext() {
    return useContext(SideNavContext);
}
