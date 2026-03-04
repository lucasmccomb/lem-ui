# CLAUDE.md - lem-ui

Shared UI component library (`@lem/ui`) consumed by multiple projects.

## Build

```bash
npm run build        # tsc - compiles src/ to dist/
npm run type-check   # tsc --noEmit
```

## Post-Merge: Update Downstream Consumers

After merging any PR to `main`, run `npm update @lem/ui` in every consuming repo to pull in the latest changes. These repos reference `@lem/ui` via `github:lucasmccomb/lem-ui`, so they won't pick up changes automatically.

```bash
# Run in each consuming repo's package directory:
npm update @lem/ui
```

### Consuming Repos

<!-- Keep this list updated when repos add or remove @lem/ui -->

| Repo | Package path | Install command |
|------|-------------|-----------------|
| lem-fyi | `~/code/lem-fyi-repos/lem-fyi-0/` | `npm update @lem/ui` |
| lem-work | `~/code/lem-work-repos/lem-work-0/client/` | `npm update @lem/ui` |
