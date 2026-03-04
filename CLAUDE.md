# CLAUDE.md - lem-ui

Shared UI component library (`@lem/ui`) consumed by multiple projects.

## Build

```bash
npm run build        # tsc - compiles src/ to dist/
npm run type-check   # tsc --noEmit
```

## Post-Merge: Update Downstream Consumers (MANDATORY)

After merging any PR to `main`, update every consuming repo. These repos reference `@lem/ui` via `github:lucasmccomb/lem-ui`, so they won't pick up changes automatically.

For each repo in the table below:

1. `cd` to the package path
2. `npm update @lem/ui`
3. Commit the `package-lock.json` change and push directly to `main`

```bash
# Example for each repo:
cd <package-path>
npm update @lem/ui
git add package-lock.json
git commit -m "Update @lem/ui"
git push
```

This is a lock file update only - no branch/PR/review needed, commit directly to `main`.

### Consuming Repos

<!-- Keep this list updated when repos add or remove @lem/ui -->

| Repo | Package path |
|------|-------------|
| lem-fyi | `~/code/lem-fyi-repos/lem-fyi-0/` |
| lem-work | `~/code/lem-work-repos/lem-work-0/client/` |
