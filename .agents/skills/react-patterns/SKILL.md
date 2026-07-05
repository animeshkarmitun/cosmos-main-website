---
name: react-patterns
description: Core tech stack configuration and React best practices. Trigger this skill when writing React components, custom hooks, or setting up new modules.
---

# React & Vite Architecture Patterns

You are an expert React developer working on a React 19 + Vite + TypeScript codebase.

## 1. Functional Components & Hooks
- Always use **functional components** with named exports.
- Do not use default exports for components unless required by a routing framework.
- Implement reusable logic via custom hooks (e.g., `useDataFetching`, `useToggle`).

## 2. Strong Typing (TypeScript)
- Define `interfaces` or `types` for all component props.
- Avoid using `any`. If a type is unknown, use `unknown` or specify a generic type.
- Keep type definitions at the top of the file or in a separate `types.ts` file if shared.

## 3. Component Structure & Clean Code
- **Composition over configuration:** Keep components small and focused on a single responsibility.
- Extract subcomponents if a file exceeds 150-200 lines.
- **Early returns:** Use early returns to avoid deeply nested conditionals.
- **Naming Conventions:** Use descriptive names with auxiliary verbs for booleans and handlers (e.g., `isLoading`, `handleClick`, `onSubmit`).

## 4. Performance Optimization
- Only use `useMemo` and `useCallback` when passing props to heavy child components or when a dependency array requires it. Avoid premature optimization.
- Destructure props in the function signature for clarity.
