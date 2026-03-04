import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
const HOVER_BORDER = {
    amber: 'hover:border-amber-300 dark:hover:border-amber-600',
    blue: 'hover:border-blue-300 dark:hover:border-blue-600',
    emerald: 'hover:border-emerald-300 dark:hover:border-emerald-600',
    indigo: 'hover:border-indigo-300 dark:hover:border-indigo-600',
    rose: 'hover:border-rose-300 dark:hover:border-rose-600',
    teal: 'hover:border-teal-300 dark:hover:border-teal-600',
};
const ICON_BG = {
    amber: 'bg-amber-50 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400',
    blue: 'bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400',
    emerald: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400',
    indigo: 'bg-indigo-50 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400',
    rose: 'bg-rose-50 text-rose-600 dark:bg-rose-900/30 dark:text-rose-400',
    teal: 'bg-teal-50 text-teal-600 dark:bg-teal-900/30 dark:text-teal-400',
};
const CTA_COLOR = {
    amber: 'text-amber-600 dark:text-amber-400',
    blue: 'text-blue-600 dark:text-blue-400',
    emerald: 'text-emerald-600 dark:text-emerald-400',
    indigo: 'text-indigo-600 dark:text-indigo-400',
    rose: 'text-rose-600 dark:text-rose-400',
    teal: 'text-teal-600 dark:text-teal-400',
};
const defaultRenderLink = (props) => _jsx("a", { ...props });
export function ContentCard({ href, title, description, image, icon, accentColor = 'blue', subtitle, badges, ctaText = 'Read more', renderLink = defaultRenderLink, className = '', }) {
    const hasSubtitle = !!subtitle;
    const content = (_jsxs(_Fragment, { children: [image && (_jsx("div", { className: "aspect-video overflow-hidden", children: _jsx("img", { src: image.src, alt: image.alt, loading: "lazy", className: "h-full w-full object-cover object-top" }) })), _jsxs("div", { className: "p-6", children: [icon && hasSubtitle && (_jsxs("div", { className: "mb-4 flex items-center gap-3", children: [_jsx("div", { className: `flex h-10 w-10 items-center justify-center rounded-lg ${ICON_BG[accentColor]}`, children: icon }), _jsxs("div", { children: [_jsx("h3", { className: "text-lg font-semibold text-gray-900 dark:text-neutral-100", children: title }), _jsx("p", { className: "text-sm text-gray-500 dark:text-neutral-500", children: subtitle })] })] })), icon && !hasSubtitle && (_jsxs(_Fragment, { children: [_jsx("div", { className: `mb-4 flex h-12 w-12 items-center justify-center rounded-lg ${ICON_BG[accentColor]}`, children: icon }), _jsx("h3", { className: "mb-2 text-xl font-semibold text-gray-900 dark:text-neutral-100", children: title })] })), !icon && (_jsx("h3", { className: `font-semibold text-gray-900 dark:text-neutral-100 ${hasSubtitle ? 'mb-1 text-lg' : 'mb-2 text-xl'}`, children: title })), !icon && hasSubtitle && (_jsx("p", { className: "mb-4 text-sm text-gray-500 dark:text-neutral-500", children: subtitle })), _jsx("p", { className: "mb-4 text-sm leading-relaxed text-gray-600 dark:text-neutral-400", children: description }), badges && badges.length > 0 && (_jsx("div", { className: "mb-4 flex flex-wrap gap-2", children: badges.map((badge) => (_jsxs("span", { className: "inline-flex items-center gap-1.5 rounded-full bg-gray-50 px-2.5 py-1 text-xs text-gray-600 dark:bg-neutral-700/50 dark:text-neutral-400", children: [badge.icon && _jsx("span", { className: "h-3.5 w-3.5", children: badge.icon }), badge.name] }, badge.name))) })), _jsxs("span", { className: `inline-flex items-center gap-1 text-sm font-medium transition-all group-hover:gap-2 ${CTA_COLOR[accentColor]}`, children: [ctaText, ' ', _jsx("svg", { className: "h-4 w-4 transition-transform group-hover:translate-x-0.5", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M5 12h14M12 5l7 7-7 7" }) })] })] })] }));
    return renderLink({
        href,
        className: `group block overflow-hidden rounded-xl border border-gray-200 bg-white transition-all hover:shadow-lg dark:border-neutral-700 dark:bg-neutral-800 ${HOVER_BORDER[accentColor]} ${className}`,
        children: content,
    });
}
