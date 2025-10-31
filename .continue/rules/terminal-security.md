---
globs: src/components/ui/interactive-terminal.tsx
---

Sanitize all user-generated content before displaying it in the terminal output. For content coming from command execution, either use a sanitization library like DOMPurify or ensure you never directly inject HTML.