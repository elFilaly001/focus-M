# GitHub Copilot Instructions

## Project Overview

This is **Focus-M**, a modern Next.js 16 web application built with React 19, TypeScript, and Tailwind CSS 4. The project features interactive displays and technology solutions showcase.

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **UI Components**: Radix UI primitives with shadcn/ui
- **Animations**: Framer Motion
- **Forms**: React Hook Form with Zod validation
- **Charts**: Recharts
- **Icons**: Lucide React

## Project Structure

```
app/           → Next.js App Router pages
components/    → React components
  ui/          → Reusable UI components (shadcn/ui)
hooks/         → Custom React hooks
lib/           → Utility functions
public/        → Static assets
styles/        → Additional CSS styles
```

## Coding Conventions

### TypeScript

- Always use TypeScript with strict mode
- Define explicit types for props and function returns
- Use interfaces for object shapes, types for unions/intersections
- Prefer `const` over `let`, avoid `var`
- Before you submit code, scan for any TypeScript errors and fix them 
- when scanning a file for a busness logic error scan the whole file not just the function being edited, scan also the parent component or function that calls it, as well as any child components or functions it uses.

### React Components

- Use functional components with hooks
- Prefer named exports for components
- Use `"use client"` directive for client-side components
- Follow this component structure:
  ```tsx
  "use client"
  
  import { useState } from "react"
  import { cn } from "@/lib/utils"
  
  interface ComponentProps {
    className?: string
    children?: React.ReactNode
  }
  
  export function Component({ className, children }: ComponentProps) {
    return (
      <div className={cn("base-classes", className)}>
        {children}
      </div>
    )
  }
  ```

### Styling

- Use Tailwind CSS utility classes
- Use the `cn()` utility from `@/lib/utils` for conditional classes
- Follow mobile-first responsive design
- Use CSS variables for theming (defined in globals.css)
- Primary: #C52133
- Secondary: #162030
- Make sure to use dark mode classes where appropriate and test in both light and dark modes
- use simple and consistent color schemes throughout the app no gradients or multiple colors that clash

### File Naming

- Components: PascalCase (e.g., `HeroPlatform.tsx`)
- Utilities/hooks: kebab-case (e.g., `use-mobile.ts`)
- Pages: lowercase with folders (e.g., `app/about/page.tsx`)

### Imports

- Use absolute imports with `@/` alias
- Order imports: React → external libs → internal components → utils → types
- Example:
  ```tsx
  import { useState, useEffect } from "react"
  import { motion } from "framer-motion"
  import { Button } from "@/components/ui/button"
  import { cn } from "@/lib/utils"
  import type { ComponentProps } from "@/types"
  ```

## UI Component Guidelines

### Using shadcn/ui Components

- Import from `@/components/ui/`
- Customize using className prop and Tailwind
- Example:
  ```tsx
  import { Button } from "@/components/ui/button"
  
  <Button variant="outline" size="lg" className="custom-class">
    Click me
  </Button>
  ```

### Creating New Components

1. Place reusable UI in `components/ui/`
2. Place feature components in `components/`
3. Use Radix UI primitives for accessibility
4. Support className prop for customization

## Animation Guidelines

- Use Framer Motion for complex animations
- Use Tailwind's `animate-*` classes for simple animations
- Respect `prefers-reduced-motion` media query

## Form Handling

- Use React Hook Form with Zod schemas
- Example:
  ```tsx
  import { useForm } from "react-hook-form"
  import { zodResolver } from "@hookform/resolvers/zod"
  import { z } from "zod"
  
  const schema = z.object({
    email: z.string().email(),
  })
  
  const form = useForm({
    resolver: zodResolver(schema),
  })
  ```

## Best Practices

1. **Performance**: Use `next/image` for images, lazy load when appropriate
2. **Accessibility**: Use semantic HTML, ARIA attributes, keyboard navigation
3. **SEO**: Use metadata exports in page files
4. **Error Handling**: Use error boundaries and proper error states
5. **Loading States**: Use Suspense and loading.tsx files

## Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```
