# AGENTS.md

Behavioral guidelines for AI agents and developers working on **Cosmos Group Main Website**.

These rules bias toward simplicity, shipping, and robustness over architectural elegance, inspired by the gallery-laravel guidelines.

---

## Design System Reference (Mandatory)

- For any UI, styling, section-order, background, or visual-consistency change, read `DESIGN.md` first.
- Treat `DESIGN.md` as the visual source of truth for landing-page color rhythm, section separation, and palette consistency.
- If a request conflicts with `DESIGN.md`, follow the user request and then update `DESIGN.md` in the same change so future agents stay aligned.

---

## 1. Think Before Coding

- **State assumptions explicitly.** If the requirements are unclear, ask before implementing.
- **Surface tradeoffs.** If a simpler approach exists, say so.
- **No silent decisions.** When multiple interpretations exist, present them.
- **If confused, stop.** Name what is confusing and ask for clarification.

---

## 2. Simplicity First

- **No features beyond what was asked.** Defer nice-to-haves to future phases.
- **No speculative abstractions.** A component or hook must be used at least twice to justify its existence as a reusable piece.
- **No unnecessary configurability.** Hardcode sensible defaults unless a setting was explicitly requested.
- **No error handling for impossible scenarios.** Validate real inputs, not theoretical ones.
- **If it feels overcomplicated, it is.** Rewrite until a senior engineer would approve.

---

## 3. Surgical Changes

- **Touch only what the request requires.** Do not "improve" adjacent code.
- **Match existing style**, even if you prefer another.
- **Do not refactor unrelated code.** Mention dead code; do not delete it unless asked.
- **Clean up your own orphans.** Remove imports, variables, or functions made unused by *your* changes.

---

## 4. Stack & Conventions

### Stack
- React 19 + Vite + Tailwind CSS v4.
- TypeScript for strong typing.
- `framer-motion` (motion) for animations.
- Express (for any backend API/server-side requirements).

### Code Style
- Use Functional Components and Hooks.
- Use Tailwind CSS for all styling. Avoid writing custom CSS unless absolutely necessary.
- Strongly type your components, props, and states. Avoid using `any`.
- Keep components small and focused.
- Store assets in the `assets/` directory and components in the `src/` directory appropriately.

---

## 5. Performance & UI/UX

- **Mobile-First Approach.** Ensure the UI is fully responsive across all device sizes using Tailwind's breakpoint utilities.
- **Minimize Re-renders.** Use `useMemo`, `useCallback`, and React's built-in optimizations when passing props down to heavy components.
- **Smooth Animations.** Use `motion` for fluid micro-interactions and transitions, ensuring a premium feel.
- **Clean Console.** No React hydration errors, missing keys, or console warnings.

---

## 6. Goal-Driven Execution

Before implementing, state the plan clearly:

```
1. [Step] → verify: [check]
2. [Step] → verify: [check]
3. [Step] → verify: [check]
```

Examples:
- "Create hero section" → verify: responsive on mobile and desktop, animation triggers on load.
- "Add API route" → write endpoint in Express, verify response with test data.

Do not say "make it work." Define verifiable success.

---

## 7. Quality Gates

Before considering a task done:

- [ ] `npm run lint` (or `tsc --noEmit`) passes without errors.
- [ ] No TypeScript or ESLint syntax errors.
- [ ] UI renders correctly across breakpoints (Mobile, Tablet, Desktop).
- [ ] Code follows existing style and touches only requested files.
- [ ] Clean up of any unused imports or variables.

---

## 8. AI-Assisted Development Protocol

The rules below supplement Sections 1–7 when AI tools generate or modify code. 

### 8.1 Non-Negotiable Rules

| # | Rule | Rationale |
|---|------|-----------|
| 1 | **Never accept AI output without running it locally.** | AI hallucinates syntax, dependencies, and behavior. Verify before committing. |
| 2 | **Keep prompts atomic (one deliverable per context window).** | Large multi-file prompts produce lower-quality, inconsistent output. |
| 3 | **Challenge the AI — ask "what could go wrong?"** | Surfaces edge cases, performance issues, and scope creep early. |
| 4 | **Own architecture, outsource syntax.** | Humans decide structure; AI helps write the code. |
| 5 | **Version control every AI session on its own branch.** | Keep `main` clean. Review `git diff` before merge. |

### 8.2 Review Checklist for AI-Assisted Commits

- [ ] AI output was run and works perfectly in the browser.
- [ ] No hallucinated dependencies (check `package.json`).
- [ ] `git diff` is focused; split large changes into multiple reviewed commits.

---

## 9. Commit Hygiene & Repository Cleanliness

Source code lives in git. Generated artifacts and working notes do not.

### 9.1 Never commit generated artifacts

| Type | Examples | Why |
|------|----------|-----|
| Screenshots / image captures | `screenshots/**/*.png`, puppeteer output | Reproducible binaries that bloat repo size; regenerable on demand |
| Build output | `dist/`, `build/`, `coverage/` | Already gitignored; never bypass |
| Planning / scratch docs | `docs/**`, `*.plan.md`, `HOME2_*.md`, `*_UIUX_PLAN.md` | Local working material, not product source |
| Logs & temp files | `*.log`, `dev-server.log`, temp scratch files | Machine/session specific |

### 9.2 Rules

- **Review `git status` before staging.** Never `git add .` or `git add -A` blindly. Stage only the files your change actually requires.
- **One concern per commit.** If untracked binaries, notes, or logs appear alongside your source change, they do not belong in the same commit — leave them untracked (or gitignored).
- **Keep reusable dev tooling scripts** (e.g. `take-*-screenshots.js`, debug helpers) when they help others reproduce output — but never commit the *output* they produce.
- **If a folder is meant for output, gitignore it** (`screenshots/`, `docs/`). Add the rule to `.gitignore` in the same change that introduces the output-producing tool.
- **Planning docs go in `docs/`** (gitignored). They inform the work but are not part of the shipped product.
- **When you realize an artifact was committed by mistake** and the commit is still local/unpushed, fix it by amending or removing it before pushing — do not leave binaries in history.

### 9.3 Quick pre-commit check

Before `git commit`, ask: *"Is every staged file source code or a hand-written config the task required?"* If any answer is "no, it's output/notes/logs," unstage it.

### 9.4 Commit message structure

Use the following format so future agents and reviewers can scan history quickly:

```
type(scope): short imperative description

[optional body: why the change was needed, any tradeoffs]
```

**Types**

| Type | Use for |
|------|---------|
| `feat` | New feature or behavior |
| `fix` | Bug fix |
| `ui` | Visual / copy change with no logic change (e.g. label text, spacing) |
| `docs` | Documentation, README, AGENTS.md, comments |
| `style` | Code formatting, semicolons, lint fixes only |
| `refactor` | Code change that neither fixes a bug nor adds a feature |
| `chore` | Tooling, dependency updates, config changes |

**Rules**

- Keep the summary line under 72 characters.
- Use present tense and imperative mood: `add`, `fix`, `update` — not `added` or `fixes`.
- Use a scope in parentheses when it clarifies the area: `(navbar)`, `(hero)`, `(deps)`.
- If the change is purely visual/copy, prefer `ui` over `feat`.

**Examples**

```
fix(navbar): close mobile menu on route change

ui(hero): update headline copy per brand review

docs(agents): add commit message structure
```
