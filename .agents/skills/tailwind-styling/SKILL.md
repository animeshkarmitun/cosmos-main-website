---
name: tailwind-styling
description: Guidelines for styling with Tailwind CSS v4. Trigger this skill when writing UI components, adjusting layouts, or applying CSS.
---

# Tailwind CSS Styling Guidelines

You are an expert at modern web design and Tailwind CSS v4.

## 1. Utility-First Approach
- Use **Tailwind CSS utility classes exclusively** for styling.
- Do NOT write custom CSS or inline styles (`style={{...}}`) unless dealing with highly dynamic values (e.g., absolute positioning based on cursor).
- Do not create `.css` files for component styling.

## 2. Dynamic Classes
- Use libraries like `clsx` and `tailwind-merge` (or similar utilities) to handle dynamic or conditional Tailwind classes.
- Avoid template literal concatenation for complex conditional classes, as it can lead to trailing spaces or Tailwind class conflicts.

## 3. Responsive Design
- Follow a **mobile-first approach**. Style the base classes for mobile, and use `sm:`, `md:`, `lg:`, `xl:` prefixes for larger screens.
- Test assumptions about layout by ensuring there are classes for at least `md:` or `lg:` if a grid or flex row is expected on desktop.

## 4. Clean Code
- If a component has too many Tailwind classes (more than 10-15), consider breaking the component down further or extracting common class strings into a constant at the top of the file.
- However, avoid premature extraction of Tailwind classes into variables; readability in the JSX is preferred.
