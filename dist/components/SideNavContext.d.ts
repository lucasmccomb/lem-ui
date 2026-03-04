interface SideNavContextValue {
    isExpanded: boolean;
}
export declare const SideNavProvider: import("react").Provider<SideNavContextValue | null>;
export declare function useSideNavContext(): SideNavContextValue | null;
export {};
