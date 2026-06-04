---
name: dermam-fast-commit
description: >
  Fast, low-token Git commit workflow for the DermaM website repository.
  Trigger: when the user asks to commit, hacer commit, commitear, push after commit, or leave git aligned.
license: Apache-2.0
metadata:
  author: gentleman-programming
  version: "1.0"
---

## When to Use

Use this skill whenever the user asks to:
- `commit`, `hacer commit`, `commitear`, `git commit`.
- Commit assets or UI changes from the current session.
- Commit and push the current branch so the local repo and GitHub remote stay aligned.
- Push after an already-created commit.
- “Dejar todo alineado” when Git state is involved.

## Critical Patterns

### Non-negotiable repo rules

- Never add `Co-Authored-By` or AI attribution.
- Use conventional commits only: `fix:`, `feat:`, `chore:`, `docs:`, `refactor:`.
- Never run production build.
- Do not perform broad audits unless the user asked for review; this skill is for committing efficiently.
- In this project, the user preference is: “commit” means commit AND push the current branch, leaving local and remote aligned.
- Push is skipped only if the user explicitly says “commit local only”, “no push”, or “sin push”.

### Low-token commit path

Do exactly this, in order:

| Step | Command | Purpose |
| --- | --- | --- |
| 1 | `git status --short --branch` | See branch, tracked/untracked state. |
| 2 | `git diff --name-status` + `git diff --cached --name-status` | Identify changed files without dumping full diffs. |
| 3 | If code/text changed: `npm.cmd run lint` | This repo uses `tsc --noEmit`; allowed because it is not a build. Skip for image-only commits. |
| 4 | `git add <exact files>` | Stage only files relevant to the user request. Use explicit pathspecs. |
| 5 | `git diff --cached --name-status` | Verify staged set once. Do not over-explain. |
| 6 | `git commit -m "type: concise message"` | Create the commit. |
| 7 | `git status --short --branch` | Confirm clean/ahead status before push. |
| 8 | `git push origin <current-branch>` | Push the commit so GitHub is aligned. |
| 9 | `git status --short --branch` | Confirm clean and no ahead commits remain. |

### Decision tree for untracked files

- If user explicitly says “commit all changes from this session/project” → include all relevant tracked and untracked files, but still verify staged names once.
- If untracked files appear and user did not mention them → STOP before committing and ask whether to include them.
- If user just added files and then says to commit after a specific instruction → include those files if they are referenced by the changed code/data.
- If untracked files are not referenced anywhere → do not include them without confirmation.

### Validation policy

- Source/data/component changes → run `npm.cmd run lint` once before staging/commit.
- Image-only changes → do not run lint.
- Never run `npm run build` unless user explicitly says build.
- Do not run repeated status/diff loops. One pre-check, one staged check, one post-commit check.

### Push policy

- In DermaM, commit request = commit + push unless the user explicitly says not to push.
- Always push to the current branch from `git status --short --branch`; do not assume `main` if another branch is active.
- If network sandbox blocks push, rerun with escalation and a concise justification.
- After push, verify with `git status --short --branch` only.

## Commit Message Examples

```bash
git commit -m "fix: link PRF related treatments"
git commit -m "feat: add before-after treatment sliders"
git commit -m "chore: update treatment image assets"
```

## Response Format

Keep final answer short:

```text
Listo, commit creado:
- <hash> <message>

Validé:
- <lint or image-only/no lint reason>

Estado:
- <clean/pushed/aligned>
```

If staged successfully, emit the Codex directive:

```text
::git-stage{cwd="D:\Derma_Content\DermaM-WebSite"}
```

If committed successfully, emit:

```text
::git-commit{cwd="D:\Derma_Content\DermaM-WebSite"}
```

If pushed successfully, emit:

```text
::git-push{cwd="D:\Derma_Content\DermaM-WebSite" branch="main"}
```

## Commands

```bash
git status --short --branch
git diff --name-status
git diff --cached --name-status
npm.cmd run lint
git add <exact files>
git commit -m "fix: concise message"
git push origin <current-branch>
```

## Final Rule

- At the start of every new session in this repository, activate `[$caveman](D:\Derma_Content\DermaM-WebSite\.agents\skills\caveman\SKILL.md)` first unless the user explicitly says `stop caveman` or `normal mode`.
