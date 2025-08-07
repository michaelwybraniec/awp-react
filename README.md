# AWP React - Next.js TypeScript Project

[![Next.js](https://img.shields.io/badge/Next.js-15.4.6-black?style=flat-square&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org)
[![React](https://img.shields.io/badge/React-19.1.0-blue?style=flat-square&logo=react)](https://reactjs.org)
[![Vitest](https://img.shields.io/badge/Vitest-3.2.4-green?style=flat-square&logo=vitest)](https://vitest.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-blue?style=flat-square&logo=tailwind-css)](https://tailwindcss.com)
[![Playwright](https://img.shields.io/badge/Playwright-1.54.2-green?style=flat-square&logo=playwright)](https://playwright.dev)
[![Storybook](https://img.shields.io/badge/Storybook-9.1.1-orange?style=flat-square&logo=storybook)](https://storybook.js.org)

This is a [Next.js](https://nextjs.org) project following the **Agentic Workflow Protocol (AWP)** by the [overvibing.com](https://overvibing.com) community for React and TypeScript development, designed to connect research laboratories and pharmaceutical companies for successful partnerships.

## 🎯 Project Goal

Develop and maintain high-quality UIs using React and TypeScript with modern React features (Server Components, SSR), architect a robust component library/design system, and integrate with backend services via RESTful APIs to facilitate partnerships between labs and pharmaceutical companies.

### ⏱️ Development Timeline Comparison

| Development Approach        | Estimated Time | Key Benefits                                           |
| --------------------------- | -------------- | ------------------------------------------------------ |
| **Traditional Development** | 20-30 weeks    | Full control, established patterns                     |
| **AI-Assisted with AWP**    | 3-4 weeks      | 60-70% faster, consistent quality, automated workflows |

**Why AWP accelerates development:**

- 🤖 **AI-powered code generation** and component creation
- 🔄 **Automated workflow** with pre-defined protocols
- 🧪 **Built-in testing** and quality assurance
- 📚 **Comprehensive documentation** generation
- 🎯 **Focused development** with clear task breakdown

## 🚀 Getting Started

### Quick Start (for experienced developers)

```bash
git clone <repository-url>
cd awp-react
npm install
npm run dev
```

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation & Setup

1. **Clone the repository**

```bash
git clone <repository-url>
cd awp-react
```

2. **Install dependencies**

```bash
npm install
```

3. **Start the development server**

```bash
npm run dev
```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 🏗️ Project Architecture

```mermaid
graph TB
    subgraph "Frontend Application"
        A[Next.js App Router] --> B[React Components]
        B --> C[shadcn/ui Library]
        B --> D[Custom Components]
        C --> E[Design System]
        E --> F[Design Tokens]
        E --> G[Component Variants]
    end

    subgraph "Development Tools"
        H[TypeScript] --> A
        I[Tailwind CSS] --> E
        J[ESLint/Prettier] --> A
        K[Husky/lint-staged] --> A
    end

    subgraph "Testing & Quality"
        L[Vitest] --> B
        M[React Testing Library] --> B
        N[Playwright E2E] --> A
        O[Storybook] --> B
    end

    subgraph "CI/CD Pipeline"
        P[GitHub Actions] --> Q[Multi-Node Testing]
        Q --> R[Coverage Reporting]
        Q --> S[Build Verification]
        S --> T[Deployment]
    end

    subgraph "Project Structure"
        U[src/app] --> A
        V[src/components] --> B
        W[src/lib] --> E
        X[src/test] --> L
        Y[tests/e2e] --> N
    end

    style A fill:#007acc
    style B fill:#61dafb
    style E fill:#38bdf8
    style L fill:#22c55e
    style P fill:#f59e0b
```

## 🛠️ Technology Stack

- **Framework**: Next.js 15.4.6 with App Router
- **Language**: TypeScript 5.0
- **Styling**: Tailwind CSS v4 with custom design tokens
- **UI Components**: shadcn/ui with comprehensive design system
- **Testing**: Vitest + React Testing Library + Playwright E2E
- **Code Quality**: ESLint, Prettier, Husky, lint-staged
- **Development**: Turbopack for fast builds
- **Documentation**: Storybook 9.1.1 with interactive component documentation
- **CI/CD**: GitHub Actions with multi-node testing and coverage reporting

## 📁 Project Structure

```
awp-react/
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── layout.tsx       # Root layout
│   │   ├── page.tsx         # Home page
│   │   └── globals.css      # Global styles with Tailwind CSS
│   ├── components/          # React components
│   │   ├── ui/              # shadcn/ui components
│   │   ├── layout/          # Layout components (Header, Footer, etc.)
│   │   ├── forms/           # Form components
│   │   ├── common/          # Common reusable components
│   │   └── index.ts         # Components barrel exports
│   ├── stories/             # Storybook stories and examples
│   │   ├── Button.tsx       # Button component with stories
│   │   ├── Header.tsx       # Header component with stories
│   │   ├── Page.tsx         # Page component with stories
│   │   └── assets/          # Storybook assets
│   ├── lib/                 # Shared utilities and configuration
│   │   ├── config.ts        # Application configuration
│   │   ├── constants.ts     # Application constants and enums
│   │   ├── env.ts           # Environment validation utilities
│   │   ├── utils.ts         # Utility functions (cn, etc.)
│   │   ├── design-tokens.ts # Design system tokens
│   │   ├── responsive.ts    # Responsive utilities
│   │   ├── variants.ts      # Component variants and CVA
│   │   └── index.ts         # Barrel exports
│   ├── hooks/               # Custom React hooks
│   ├── types/               # TypeScript type definitions
│   ├── utils/               # Utility functions
│   ├── contexts/            # React contexts
│   ├── services/            # API services
│   ├── api/                 # API layer
│   ├── styles/              # Style utilities
│   └── test/                # Testing utilities and setup
│       ├── setup.ts         # Test environment setup
│       ├── utils.tsx        # Testing utilities
│       └── example.test.tsx # Example test
├── tests/                   # E2E tests with Playwright
│   └── e2e/
│       ├── home.spec.ts     # Home page E2E tests
│       └── navigation.spec.ts # Navigation E2E tests
├── public/                  # Static assets
├── agentic-sldc/           # Agentic SDLC and workflow documentation
│   ├── AWP.md              # Agentic Workflow Protocol
│   ├── ASDLC.md            # Agentic SDLC plan and lifecycle
│   └── README.md           # Project overview and philosophy
├── .github/workflows/       # CI/CD pipeline configuration
│   └── ci.yml              # Comprehensive CI/CD pipeline
├── .vscode/                # VS Code configuration
│   ├── settings.json       # Optimized settings
│   ├── extensions.json     # Recommended extensions
│   └── launch.json         # Debugging configuration
├── .storybook/             # Storybook configuration
│   ├── main.ts             # Storybook main config
│   ├── preview.ts          # Storybook preview config
│   └── vitest.setup.ts     # Vitest integration
├── .husky/                 # Git hooks configuration
│   └── pre-commit          # Pre-commit quality checks
└── [config files]          # Various configuration files
```

## 🔄 AWP Workflow

This project follows the **Agentic Workflow Protocol (AWP)** by the [overvibing.com](https://overvibing.com) community for human-AI collaboration:

### Current Status

**Phase 1: Project Foundation & Setup**

- ✅ **Task 1.1**: Initialize React TypeScript project with Next.js
  - ✅ 1.1.1. Set up Next.js 14+ with App Router and TypeScript
  - ✅ 1.1.2. Configure ESLint, Prettier, and Husky for code quality
  - ✅ 1.1.3. Set up environment variables and configuration files
  - ✅ 1.1.4. Initialize Git repository with proper .gitignore
  - ✅ 1.1.5. Configure build and development scripts
  - ✅ 1.1.6. Set up testing framework (Jest/Vitest) with React Testing Library

- ✅ **Task 1.2**: Set up Tailwind CSS and shadcn/ui component library
  - ✅ 1.2.1. Install and configure Tailwind CSS v3+ with custom theme
  - ✅ 1.2.2. Set up shadcn/ui with CLI and component configuration
  - ✅ 1.2.3. Create custom color palette and design tokens
  - ✅ 1.2.4. Configure responsive breakpoints and typography
  - ✅ 1.2.5. Set up component variants and utility classes

- ✅ **Task 1.3**: Configure project structure and folder organization
  - ✅ 1.3.1. Create organized folder structure (components, lib, hooks, types, etc.)
  - ✅ 1.3.2. Set up barrel exports for clean imports
  - ✅ 1.3.3. Configure path aliases in tsconfig.json
  - ✅ 1.3.4. Create shared types and interfaces
  - ✅ 1.3.5. Set up layout components and page structure

- ✅ **Task 1.4**: Set up development environment and tooling
  - ✅ 1.4.1. Configure VS Code settings and extensions
  - ✅ 1.4.2. Set up debugging configuration
  - ✅ 1.4.3. Set up Storybook for component documentation
  - ✅ 1.4.4. Configure CI/CD pipeline basics
  - ✅ 1.4.5. Set up E2E testing with Playwright or Cypress
  - 🔄 1.4.6. Configure test coverage reporting and thresholds

- 🔄 **Task 1.5**: Create basic project documentation and README
  - 🔄 1.5.1. Write comprehensive README with setup instructions
  - 🔄 1.5.2. Document project architecture and conventions
  - 🔄 1.5.3. Create component documentation guidelines
  - 🔄 1.5.4. Set up API documentation structure
  - 🔄 1.5.5. Document deployment procedures

- 🔄 **Task 1.6**: Verify app startup and basic functionality
  - 🔄 1.6.1. Ensure app starts successfully with npm run dev
  - 🔄 1.6.2. Verify basic page routing and navigation works
  - 🔄 1.6.3. Test responsive design on different screen sizes
  - 🔄 1.6.4. Verify basic component rendering and styling
  - 🔄 1.6.5. Test app build process (npm run build)

**Phase 2: Authentication & User Management**

- 🔄 **Task 2.1**: Design user authentication system (login/register)
- 🔄 **Task 2.2**: Implement role-based access control (Lab vs Pharmaceutical)
- 🔄 **Task 2.3**: Create user profile management components
- 🔄 **Task 2.4**: Set up user session management and security
- 🔄 **Task 2.5**: Implement password reset and account verification

**Next Action**: Complete Task 1.4.6 - Configure test coverage reporting and thresholds

## 📋 Project Roadmap

For the complete project backlog and detailed task breakdown, see: **[AWP.md - Project Backlog](agentic-sldc/AWP.md#project-backlog)**

### 🗺️ Project Git History

```mermaid
gitGraph
    commit id: "16cfa69" tag: "docs: README update"
    commit id: "43196c5" tag: "fix: CI/CD pipeline"
    commit id: "d162920" tag: "feat: E2E testing"
    commit id: "7c0a26d" tag: "fix: UI styling"
    commit id: "e42d1a2" tag: "docs: Husky issues"
    commit id: "8ded2a8" tag: "fix: Husky warning"
    commit id: "ce91781" tag: "docs: Husky task"
    commit id: "ad61771" tag: "fix: pre-commit hook"
    commit id: "12f85bf" tag: "fix: Turbopack"
    commit id: "b6f057e" tag: "docs: AWP update"
    commit id: "7aba9cd" tag: "feat: CI/CD pipeline"
    commit id: "b873ea0" tag: "fix: lockfiles & ESLint"
    commit id: "8d17343" tag: "feat: project structure"
    commit id: "28f301c" tag: "docs: AWP procedures"
    commit id: "c6fef03" tag: "feat: VS Code config"
    branch develop
    checkout develop
    commit id: "next" tag: "Task 1.4.6: Test Coverage"
    commit id: "future" tag: "Task 1.5: Documentation"
    commit id: "future2" tag: "Task 1.6: Verification"
    checkout main
    merge develop
    branch feature/auth
    commit id: "auth1" tag: "Task 2.1: Authentication"
    commit id: "auth2" tag: "Task 2.2: Role Control"
    checkout main
    merge feature/auth
    branch feature/core
    commit id: "core1" tag: "Task 3.1: Dashboard"
    commit id: "core2" tag: "Task 3.2: Lab Profiles"
    checkout main
    merge feature/core
```

### 📊 Current Progress (Based on Git Data)

```mermaid
pie title Project Completion Status
    "Completed (1.1-1.4.5)" : 50
    "In Progress (1.4.6)" : 8
    "Pending (1.5-1.6)" : 12
    "Phase 2: Authentication" : 12
    "Phase 3: Core Features" : 10
    "Phase 4: Collaboration" : 5
    "Phase 5: Advanced Features" : 3
```

### 📈 Development Metrics

```mermaid
gitGraph
    commit id: "16cfa69" type: HIGHLIGHT tag: "29 commits total"
    commit id: "43196c5" tag: "CI/CD complete"
    commit id: "d162920" tag: "E2E testing done"
    commit id: "7c0a26d" tag: "UI styling fixed"
    commit id: "e42d1a2" tag: "Documentation"
    commit id: "8ded2a8" tag: "Husky fixes"
    commit id: "ce91781" tag: "Task tracking"
    commit id: "ad61771" tag: "Pre-commit hooks"
    commit id: "12f85bf" tag: "Turbopack config"
    commit id: "b6f057e" tag: "AWP updates"
    commit id: "7aba9cd" tag: "Pipeline setup"
    commit id: "b873ea0" tag: "Code quality"
    commit id: "8d17343" tag: "Project structure"
    commit id: "28f301c" tag: "VS Code setup"
    commit id: "c6fef03" tag: "Initial config"
    commit id: "next" type: REVERSE tag: "Next: Test Coverage"
```

**Key Metrics:**

- **Total Commits**: 29 (all from 2025-08-07)
- **Completed Tasks**: 1.1, 1.2, 1.3, 1.4.1-1.4.5
- **Current Task**: 1.4.6 (Test Coverage Reporting)
- **Next Tasks**: 1.5 (Documentation), 1.6 (Verification)
- **Project Phase**: Foundation & Setup (Phase 1)

### 📈 Git Activity Overview

```mermaid
gitGraph
    commit id: "16cfa69" type: HIGHLIGHT tag: "Latest: README docs"
    commit id: "43196c5" tag: "CI/CD fix"
    commit id: "d162920" tag: "E2E testing"
    commit id: "7c0a26d" tag: "UI styling fix"
    commit id: "e42d1a2" tag: "Husky docs"
    commit id: "8ded2a8" tag: "Husky warning fix"
    commit id: "ce91781" tag: "Husky task docs"
    commit id: "ad61771" tag: "pre-commit fix"
    commit id: "12f85bf" tag: "Turbopack fix"
    commit id: "b6f057e" tag: "AWP update"
    commit id: "7aba9cd" tag: "CI/CD pipeline"
    commit id: "b873ea0" tag: "lockfiles & ESLint"
    commit id: "8d17343" tag: "project structure"
    commit id: "28f301c" tag: "AWP procedures"
    commit id: "c6fef03" tag: "VS Code config"
    commit id: "next" type: REVERSE tag: "Next: Task 1.4.6"
```

### AWP Commands

- `awp check` - Review current status and next actionable step
- `awp next` - Begin next actionable task
- `awp update` - Update documentation and status
- `awp commit` - Commit changes with AWP standard format

## 📝 Development Scripts

```bash
npm run dev              # Start development server with Turbopack
npm run build            # Build for production
npm run start            # Start production server
npm run lint             # Run ESLint
npm run lint:fix         # Run ESLint with auto-fix
npm run format           # Format code with Prettier
npm run format:check     # Check code formatting
npm run type-check       # Run TypeScript type checking
npm run type-check:watch # Run TypeScript type checking in watch mode
npm run test             # Run all tests
npm run test:watch       # Run tests in watch mode
npm run test:coverage    # Generate test coverage report
npm run test:ui          # Open Vitest UI for interactive testing
npm run test:e2e         # Run E2E tests with Playwright
npm run test:e2e:ui      # Run E2E tests with Playwright UI
npm run test:e2e:debug   # Run E2E tests in debug mode
npm run test:e2e:report  # Show Playwright test report
npm run storybook        # Start Storybook development server
npm run build-storybook  # Build Storybook for production
npm run clean            # Clean build artifacts
npm run clean:all        # Clean everything including node_modules
npm run reinstall        # Complete reinstall of dependencies
```

## 🎨 Features

- **Modern React**: Server Components, Suspense, hooks
- **TypeScript**: Full type safety with comprehensive type definitions
- **Tailwind CSS v4**: Utility-first styling with custom design tokens
- **shadcn/ui**: High-quality component library with design system
- **Design System**: Comprehensive design tokens, variants, and utilities
- **Responsive Design**: Mobile-first responsive utilities and breakpoints
- **Project Structure**: Organized folder structure with barrel exports and path aliases
- **Type Safety**: Comprehensive TypeScript types and interfaces
- **Layout Components**: Reusable header, footer, and layout components
- **App Router**: Next.js 15+ file-based routing
- **Turbopack**: Fast development builds
- **Code Quality**: Automated linting and formatting with pre-commit hooks
- **Git Hooks**: Pre-commit quality checks with Husky and lint-staged
- **Environment Management**: Centralized configuration with validation
- **Constants & Types**: Application-wide constants and enums
- **Build Scripts**: Comprehensive development and build scripts
- **Testing**: Complete testing setup with Vitest, React Testing Library, and Playwright
- **VS Code Integration**: Optimized settings, extensions, and debugging configuration
- **Storybook**: Component documentation and interactive development environment
- **CI/CD Pipeline**: Automated testing and deployment workflow with coverage reporting

## 🔧 Code Quality Tools

### ESLint

- Next.js recommended rules
- TypeScript support
- React-specific rules
- Prettier integration

### Prettier

- Consistent code formatting
- Single quotes
- 80 character line width
- Trailing commas

### Husky + lint-staged

- Pre-commit hooks
- Automatic code formatting
- Lint checking before commits

### VS Code Configuration

- **Settings**: Optimized for React/TypeScript development
- **Extensions**: Recommended extensions for productivity
- **Debugging**: Full-stack debugging configurations for Next.js

## 🧪 Testing

This project uses Vitest, React Testing Library, and Playwright for comprehensive testing:

### Test Commands

```bash
npm test             # Run all tests
npm run test:watch   # Run tests in watch mode
npm run test:coverage # Generate coverage report
npm run test:ui      # Open Vitest UI
npm run test:e2e     # Run E2E tests
npm run test:e2e:ui  # Run E2E tests with UI
npm run test:e2e:debug # Run E2E tests in debug mode
```

### Test Structure

- **Unit Tests**: Test individual components and functions with Vitest
- **Integration Tests**: Test component interactions with React Testing Library
- **E2E Tests**: End-to-end testing with Playwright across multiple browsers
- **Coverage**: Aim for 80%+ code coverage with V8 coverage provider
- **Mocking**: Comprehensive mocking for Next.js and browser APIs
- **Storybook Tests**: Component testing integrated with Storybook

### E2E Testing

- **Cross-browser**: Chrome, Firefox, Safari, Mobile Chrome, Mobile Safari
- **Parallel execution**: Tests run in parallel for faster feedback
- **CI integration**: Automated E2E testing in GitHub Actions
- **Debug mode**: Interactive debugging for test development

See [TESTING.md](./TESTING.md) for detailed testing guidelines and examples.

## 🚀 CI/CD Pipeline

The project includes a comprehensive CI/CD pipeline:

- **Multi-Node Testing**: Tests on Node.js 18.x and 20.x
- **Automated Testing**: Type checking, linting, unit tests, and E2E tests
- **Coverage Reporting**: Automated coverage upload to Codecov
- **Build Verification**: Production build testing
- **Artifact Management**: Build artifacts stored for deployment
- **Deployment Ready**: Placeholder for deployment configuration

## 🔧 Troubleshooting

### Common Issues

1. **Port already in use**

   ```bash
   # Kill process on port 3000
   lsof -ti:3000 | xargs kill -9
   ```

2. **TypeScript errors**

   ```bash
   # Run type checking
   npm run type-check
   # Fix auto-fixable issues
   npm run lint:fix
   ```

3. **Tests failing**

   ```bash
   # Clear test cache
   npx vitest --clearCache
   # Run tests with verbose output
   npx vitest run --reporter=verbose
   ```

4. **Build failures**

   ```bash
   # Clean and rebuild
   npm run clean
   npm run build
   ```

5. **Storybook issues**
   ```bash
   # Clear Storybook cache
   rm -rf node_modules/.cache/storybook
   # Restart Storybook
   npm run storybook
   ```

### Getting Help

- Check the [AWP Protocol](agentic-sldc/AWP.md) for workflow questions
- Review [TESTING.md](./TESTING.md) for testing issues
- Review [ENVIRONMENT.md](./ENVIRONMENT.md) for environment setup

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vitest Documentation](https://vitest.dev/guide/)
- [Playwright Documentation](https://playwright.dev/docs/intro)
- [Storybook Documentation](https://storybook.js.org/docs)
- [AWP Protocol](agentic-sldc/AWP.md)

## 🤝 Contributing

This project follows the AWP protocol by the [overvibing.com](https://overvibing.com) community for collaboration. Please refer to `agentic-sldc/AWP.md` for detailed workflow procedures.

## 📄 License

This project is private and proprietary.
