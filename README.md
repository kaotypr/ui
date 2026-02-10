# @kaotypr/ui

A modern, accessible React UI component library built with React 19, TypeScript, and Tailwind CSS 4. This monorepo is managed with [Turborepo](https://turbo.build/repo) and [pnpm](https://pnpm.io/).

## Project Structure

This project is organized as a monorepo:

### Packages

- **`packages/ui` (`@kaotypr/ui`)**: The core UI component library. It includes a set of reusable components, hooks, and utilities. It uses [Storybook](https://storybook.js.org/) for component development and documentation.

### Apps

- **`apps/ui-docs`**: The documentation site built with [Next.js 16](https://nextjs.org/) and [Fumadocs](https://fumadocs.vercel.app/). It serves as the official documentation for the UI library.
- **`apps/consumer-vite`**: A [Vite](https://vitejs.dev/) application used for testing and consuming the UI library in a real-world scenario.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (>= 18)
- [pnpm](https://pnpm.io/) (>= 9)

### Installation

Install dependencies from the root directory:

```bash
pnpm install
```

## Development

You can run development servers for different parts of the project using Turborepo.

### Run Everything

To start all applications and the UI library in development mode:

```bash
pnpm dev
```

### Run Specific Workspaces

- **UI Library (Storybook):**
  ```bash
  pnpm --filter=@kaotypr/ui storybook
  ```
  Runs Storybook on [http://localhost:6006](http://localhost:6006).

- **Documentation Site:**
  ```bash
  pnpm --filter=ui-docs dev
  ```
  Runs the docs site on [http://localhost:3000](http://localhost:3000).

- **Consumer App:**
  ```bash
  pnpm --filter=consumer-vite dev
  ```
  Runs the Vite consumer app.

## Building

To build all apps and packages:

```bash
pnpm build
```

To build a specific workspace:

```bash
pnpm --filter=@kaotypr/ui build
```

## Quality Control

### Linting & Formatting

This project uses [Biome](https://biomejs.dev/) for fast linting and formatting.

```bash
# Lint all packages
pnpm lint

# Format all packages
pnpm format
```

### Type Checking

```bash
pnpm check-types
```

## Tech Stack

- **Frameworks:** [React 19](https://react.dev/), [Next.js 16](https://nextjs.org/), [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Monorepo:** [Turborepo](https://turbo.build/)
- **Package Manager:** [pnpm](https://pnpm.io/)
- **Documentation:** [Fumadocs](https://fumadocs.vercel.app/), [Storybook](https://storybook.js.org/)
- **Linting/Formatting:** [Biome](https://biomejs.dev/)
