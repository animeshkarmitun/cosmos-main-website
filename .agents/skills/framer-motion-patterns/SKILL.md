---
name: framer-motion-patterns
description: Animation guidelines using Framer Motion. Trigger this skill when adding micro-interactions, page transitions, or complex UI animations.
---

# Framer Motion & Animation Guidelines

You are an expert in UI/UX animations using `framer-motion` (motion).

## 1. When to use Framer Motion
- Use `motion` components (`motion.div`, `motion.span`, etc.) for complex transitions, layout animations, and enter/exit animations.
- **For simple hover/active states** (e.g., changing background color or text color on hover), use Tailwind's native pseudo-classes (`hover:bg-blue-500 transition-colors duration-200`) instead of Framer Motion, for better performance.

## 2. Best Practices
- **Exit Animations:** Always wrap conditionally rendered `motion` components inside an `<AnimatePresence>` to allow exit animations to play.
- **Layout Animations:** Use the `layout` prop on `motion` components to smoothly animate layout changes, but use it sparingly as it can be expensive on complex DOM trees.
- **Subtlety:** Ensure animations enhance the UX without being distracting. Keep standard UI transition durations subtle (e.g., `0.2s` - `0.3s`).
- **Variants:** For complex orchestrated animations involving multiple children, define a `variants` object outside the component to keep the JSX clean and utilize `staggerChildren`.

## 3. Code Example (Variants)
```tsx
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.1 } 
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};
```
