# AWP React Platform

This is a [Next.js](https://nextjs.org) project following the **Agentic Workflow Protocol (AWP)** by the [overvibing.com](https://overvibing.com) community for React and TypeScript development, designed to connect research laboratories and pharmaceutical companies for successful partnerships.

## 🎯 Project Goal

The AWP React Platform bridges the gap between research laboratories and pharmaceutical companies, providing a comprehensive platform for partnership discovery, proposal management, and collaboration. Built with modern web technologies and following the Agentic Workflow Protocol for efficient human-AI collaboration.

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

### Prerequisites

- Node.js 18+
- npm or yarn
- Git

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/awp-react.git
   cd awp-react
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env.local
   # Edit .env.local with your configuration
   ```

4. **Start the development server**

   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🛠️ Technology Stack

- **Framework:** [Next.js 14](https://nextjs.org/) with App Router
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/)
- **Testing:** [Vitest](https://vitest.dev/) + [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- **E2E Testing:** [Playwright](https://playwright.dev/)
- **Component Development:** [Storybook](https://storybook.js.org/)
- **Code Quality:** [ESLint](https://eslint.org/) + [Prettier](https://prettier.io/)
- **Git Hooks:** [Husky](https://typicode.github.io/husky/) + [lint-staged](https://github.com/okonet/lint-staged/)
- **Build System:** [Turbopack](https://turbo.build/pack)
- **CI/CD:** [GitHub Actions](https://github.com/features/actions)

## 📊 Development Analytics

### Commit Distribution

```mermaid
pie showData
    title "AWP React Platform - Commit Distribution"
    "Documentation (43%)" : 16
    "Features (32%)" : 12
    "AWP (22%)" : 8
    "Testing (8%)" : 3
    "Maintenance (3%)" : 1
```

**Development Insights:**

- **Documentation (43%)** - Comprehensive AWP protocol compliance with continuous documentation updates
- **Features (32%)** - Systematic feature implementation following AWP task numbers
- **AWP (22%)** - Unplanned task resolutions and protocol-guided development
- **Testing (8%)** - Quality assurance with 82.36% test coverage achievement
- **Maintenance (3%)** - Configuration and cleanup tasks

## Project Backlog

### 1. Project Foundation & Setup

- [x] 1.1. Initialize React TypeScript project with Next.js
  - [x] 1.1.1. Set up Next.js 14+ with App Router and TypeScript
  - [x] 1.1.2. Configure ESLint, Prettier, and Husky for code quality
  - [x] 1.1.3. Set up environment variables and configuration files
  - [x] 1.1.4. Initialize Git repository with proper .gitignore
  - [x] 1.1.5. Configure build and development scripts
  - [x] 1.1.6. Set up testing framework (Jest/Vitest) with React Testing Library

- [x] 1.2. Set up Tailwind CSS and shadcn/ui component library
  - [x] 1.2.1. Install and configure Tailwind CSS v3+ with custom theme
  - [x] 1.2.2. Set up shadcn/ui with CLI and component configuration
  - [x] 1.2.3. Create custom color palette and design tokens
  - [x] 1.2.4. Configure responsive breakpoints and typography
  - [x] 1.2.5. Set up component variants and utility classes

- [x] 1.3. Configure project structure and folder organization
  - [x] 1.3.1. Create organized folder structure (components, lib, hooks, types, etc.)
  - [x] 1.3.2. Set up barrel exports for clean imports
  - [x] 1.3.3. Configure path aliases in tsconfig.json
  - [x] 1.3.4. Create shared types and interfaces
  - [x] 1.3.5. Set up layout components and page structure

- [x] 1.4. Set up development environment and tooling
  - [x] 1.4.1. Configure VS Code settings and extensions
  - [x] 1.4.2. Set up debugging configuration
  - [x] 1.4.3. Set up Storybook for component documentation
  - [x] 1.4.4. Configure CI/CD pipeline basics
  - [x] 1.4.5. Set up E2E testing with Playwright or Cypress
  - [x] 1.4.6. Configure test coverage reporting and thresholds

- [ ] 1.5. Create basic project documentation and README
  - [ ] 1.5.1. Write comprehensive README with setup instructions
  - [ ] 1.5.2. Document project architecture and conventions
  - [ ] 1.5.3. Create component documentation guidelines
  - [ ] 1.5.4. Set up API documentation structure
  - [ ] 1.5.5. Document deployment procedures

- [ ] 1.6. Verify app startup and basic functionality
  - [ ] 1.6.1. Ensure app starts successfully with npm run dev
  - [ ] 1.6.2. Verify basic page routing and navigation works
  - [ ] 1.6.3. Test responsive design on different screen sizes
  - [ ] 1.6.4. Verify basic component rendering and styling
  - [ ] 1.6.5. Test app build process (npm run build)

## AWP Tasks

- [x] U1: Test Coverage Review and Improvement - Review current test coverage and improve it to meet 80%+ threshold, focusing on critical user paths and edge cases
- [x] U2: Fix Multiple Lockfiles Issue - Remove conflicting package-lock.json files and ensure single lockfile
- [x] U3: Address ESLint Warnings - Fix console statements and replace `any` types with proper TypeScript types
- [x] U4: Fix Tailwind CSS Configuration - Resolve unknown utility class `ring-primary-500` error
- [x] U5: Address ESLint Warnings - Fix console statements and replace `any` types with proper TypeScript types
- [x] U6: Fix Next.js Turbopack Configuration - Update deprecated `experimental.turbo` to `config.turbopack` as Turbopack is now stable in Next.js 15.4.6
- [x] U7: Fix Husky Pre-commit Hook Deprecation - Remove deprecated lines from .husky/pre-commit file to prevent failures in Husky v10.0.0 (Note: Warning persists due to Husky v9.1.7, will resolve when upgrading to v10.0.0)
- [x] U8: Resolve Persistent Husky Deprecation Warning - The pre-commit hook was reverted to deprecated format, causing persistent warnings about Husky v10.0.0 compatibility
- [x] U9: Fix Husky Prepare Script Issue - The 'prepare: husky' script in package.json restores deprecated format, need to either remove prepare script or configure Husky properly
- [ ] U10: Persistent Husky Configuration Issue - User keeps reverting Husky pre-commit file and package.json prepare script back to deprecated format, causing persistent warnings
- [ ] U11: Upgrade to Husky v10.0.0 - When Husky v10.0.0 is released, upgrade to resolve deprecation warnings about pre-commit hook format
- [x] U12: Fix UI Styling Issues - Tailwind CSS styles not being applied, page rendering with basic unstyled HTML (black text, white background, blue underlined links) - Fixed Tailwind config to use standard color values instead of CSS variables, resolved all utility class errors
- [ ] U13: Unplanned task, Name, Title, Description, etc.
- [x] U14: Fix CI/CD Pipeline Configuration Issues - Fixed duplicate content in ci.yml, added proper error handling for E2E tests, improved coverage upload conditions, and resolved CI workflow structure
- [ ] U15: E2E Test Content Validation - Verify that E2E tests expect content that actually exists on the page, ensure all test assertions match the current page content and navigation elements
- [ ] U16: Configure Actual Deployment - Replace placeholder deployment configuration in CI/CD pipeline with actual deployment setup (Vercel, Netlify, or other platform)
- [x] U17: Test Coverage Configuration Issues - Resolved environment conflicts between Node.js and browser test environments, fixed global object access in test setup, configured proper path aliases for Vitest, and excluded node_modules from coverage runs
- [x] U18: **CRITICAL** - Improve Test Coverage to Meet Thresholds - ✅ COMPLETED: Achieved 82.36% coverage (256 tests) exceeding 80% threshold. Added comprehensive tests for all components, pages, and utilities. All major modules now have 100% coverage except variants.ts and types directory.
- [ ] U19: Storybook Test Integration - Temporarily disabled Storybook tests in coverage due to environment conflicts, need to properly configure Storybook test environment to work with Vitest coverage reporting
- [ ] U20: Coverage Report Optimization - Consider implementing coverage badges, CI integration for coverage reporting, and automated coverage threshold enforcement in pull requests

## 📋 **Full Project Backlog**

_For complete project roadmap and detailed task breakdown, see [AWP.md](agentic-sldc/AWP.md)_

## 🧪 Testing

### Test Coverage: **82.36%** ✅ (Exceeds 80% threshold!)

**Coverage Breakdown:**

- **UI Components:** 100% coverage
- **Layout Components:** 100% coverage
- **Pages:** 100% coverage
- **Lib Modules:** 71.53% coverage
- **Overall:** **82.36% coverage** (256 tests)

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage

# Run E2E tests
npm run test:e2e

# Run Storybook
npm run storybook
```

### Test Structure

```
src/
├── components/
│   ├── ui/
│   │   ├── button.test.tsx      # 9 tests
│   │   ├── card.test.tsx        # 22 tests
│   │   └── input.test.tsx       # 13 tests
│   └── layout/
│       ├── container.test.tsx   # 9 tests
│       ├── footer.test.tsx      # 13 tests
│       ├── header.test.tsx      # 9 tests
│       └── main-layout.test.tsx # 13 tests
├── app/
│   ├── layout.test.tsx          # 5 tests
│   └── page.test.tsx            # 18 tests
└── lib/
    ├── config.test.ts           # 13 tests
    ├── constants.test.ts        # 29 tests
    ├── design-tokens.test.ts    # 30 tests
    ├── env.test.ts              # 39 tests
    ├── responsive.test.ts       # 25 tests
    └── utils.test.ts            # 5 tests
```

## 📁 Project Structure

```
awp-react/
├── src/
│   ├── app/                     # Next.js App Router
│   │   ├── layout.tsx           # Root layout
│   │   ├── page.tsx             # Home page
│   │   └── globals.css          # Global styles
│   ├── components/
│   │   ├── ui/                  # Reusable UI components
│   │   │   ├── button.tsx       # Button component
│   │   │   ├── card.tsx         # Card component
│   │   │   └── input.tsx        # Input component
│   │   ├── layout/              # Layout components
│   │   │   ├── container.tsx    # Container component
│   │   │   ├── footer.tsx       # Footer component
│   │   │   ├── header.tsx       # Header component
│   │   │   └── main-layout.tsx  # Main layout wrapper
│   │   ├── common/              # Common components
│   │   └── forms/               # Form components
│   ├── lib/                     # Utility libraries
│   │   ├── config.ts            # App configuration
│   │   ├── constants.ts         # App constants
│   │   ├── design-tokens.ts     # Design system tokens
│   │   ├── env.ts               # Environment utilities
│   │   ├── responsive.ts        # Responsive utilities
│   │   ├── utils.ts             # General utilities
│   │   └── variants.ts          # Component variants
│   ├── types/                   # TypeScript type definitions
│   │   ├── api.ts               # API types
│   │   ├── common.ts            # Common types
│   │   ├── forms.ts             # Form types
│   │   └── user.ts              # User types
│   ├── hooks/                   # Custom React hooks
│   └── test/                    # Test utilities
├── public/                      # Static assets
├── .storybook/                  # Storybook configuration
├── agentic-sldc/                # AWP documentation
│   └── AWP.md                   # Agentic Workflow Protocol
├── coverage/                    # Test coverage reports
├── html/                        # Coverage HTML reports
└── docs/                        # Project documentation
```

## 🚀 Development Scripts

```bash
# Development
npm run dev              # Start development server
npm run build            # Build for production
npm run start            # Start production server
npm run lint             # Run ESLint
npm run lint:fix         # Fix ESLint issues
npm run type-check       # Run TypeScript type checking

# Testing
npm test                 # Run all tests
npm run test:watch       # Run tests in watch mode
npm run test:coverage    # Run tests with coverage
npm run test:ui          # Run Vitest UI
npm run test:e2e         # Run E2E tests
npm run test:e2e:ui      # Run E2E tests with UI

# Storybook
npm run storybook        # Start Storybook
npm run build-storybook  # Build Storybook

# Code Quality
npm run format           # Format code with Prettier
npm run format:check     # Check code formatting
npm run prepare          # Set up Git hooks
```

## 🎨 Design System

### Colors

- **Primary:** Blue (#3b82f6)
- **Secondary:** Gray (#64748b)
- **Success:** Green (#22c55e)
- **Warning:** Yellow (#f59e0b)
- **Error:** Red (#ef4444)

### Typography

- **Font Family:** Geist Sans (system fallback)
- **Font Sizes:** Responsive scale (xs to 9xl)
- **Line Heights:** Optimized for readability

### Spacing

- **Scale:** 0.5rem to 6rem
- **Responsive:** Adapts to breakpoints
- **Consistent:** 8px base unit system

### Breakpoints

- **SM:** 640px
- **MD:** 768px
- **LG:** 1024px
- **XL:** 1280px
- **2XL:** 1536px

## 🔧 Configuration Files

- **`next.config.ts`** - Next.js configuration
- **`tailwind.config.ts`** - Tailwind CSS configuration
- **`tsconfig.json`** - TypeScript configuration
- **`vitest.config.ts`** - Vitest configuration
- **`playwright.config.ts`** - Playwright configuration
- **`.eslintrc.json`** - ESLint configuration
- **`.prettierrc`** - Prettier configuration
- **`coverage.config.js`** - Coverage configuration

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Configure environment variables
3. Deploy automatically on push to main branch

### Other Platforms

- **Netlify:** Configure build settings
- **Railway:** Connect repository and deploy
- **Docker:** Use provided Dockerfile

## 🤝 Contributing

This project follows the **Agentic Workflow Protocol (AWP)** by the [overvibing.com](https://overvibing.com) community for human-AI collaboration:

1. **Check** - Review current status and next tasks
2. **Update** - Update documentation and code
3. **Commit** - Follow conventional commit standards
4. **Next** - Move to next actionable task

### Commit Standards

- **Format:** `type(scope step): subject`
- **Types:** `feat`, `fix`, `docs`, `test`, `chore`
- **Rules:** Reference step number, use imperative mood

### Examples

```bash
feat(ui 1.4.1): add Button component with variants
test(coverage 1.4.6): achieve 82.36% coverage
docs(readme 1.5.1): expand documentation
```

## 📚 Documentation

- **[AWP.md](agentic-sldc/AWP.md)** - Agentic Workflow Protocol
- **[TESTING.md](TESTING.md)** - Testing strategy and guidelines
- **[Storybook](http://localhost:6006)** - Component documentation
- **[Coverage Report](html/index.html)** - Test coverage details

## 🐛 Troubleshooting

### Common Issues

**Storybook not starting:**

```bash
npm run storybook:clean
npm run storybook
```

**Tests failing:**

```bash
npm run test:coverage:check
npm run lint
npm run type-check
```

**Build errors:**

```bash
npm run build
npm run lint:fix
```

**Coverage issues:**

```bash
rm -rf coverage/
npm run test:coverage
```

## 📄 License

This project follows the AWP protocol by the [overvibing.com](https://overvibing.com) community for collaboration.

## 🎯 Next Steps

**Current Focus:** Task 1.5 - Create basic project documentation

- 1.5.1. Write comprehensive README with setup instructions
- 1.5.2. Document project architecture and conventions
- 1.5.3. Create component documentation guidelines
- 1.5.4. Set up API documentation structure
- 1.5.5. Document deployment procedures

**Immediate Actions:**

1. Complete Task 1.5 documentation requirements
2. Move to Phase 2: Authentication & User Management
3. Implement user authentication system
4. Set up role-based access control

---

**Built with ❤️ using the Agentic Workflow Protocol by [overvibing.com](https://overvibing.com)**
