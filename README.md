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

## 📊 Current Status

### ✅ **Phase 1: Foundation & Setup** (COMPLETED)

- ✅ **1.1. Project Initialization**
  - ✅ 1.1.1. Create Next.js project with TypeScript
  - ✅ 1.1.2. Configure Tailwind CSS and shadcn/ui
  - ✅ 1.1.3. Set up ESLint and Prettier
  - ✅ 1.1.4. Configure Git hooks with Husky
  - ✅ 1.1.5. Initialize Git repository

- ✅ **1.2. Development Environment**
  - ✅ 1.2.1. Configure VS Code settings and extensions
  - ✅ 1.2.2. Set up debugging configuration
  - ✅ 1.2.3. Configure TypeScript strict mode
  - ✅ 1.2.4. Set up path aliases and imports
  - ✅ 1.2.5. Configure build and development scripts

- ✅ **1.3. Testing Infrastructure**
  - ✅ 1.3.1. Set up Vitest for unit testing
  - ✅ 1.3.2. Configure React Testing Library
  - ✅ 1.3.3. Set up Playwright for E2E testing
  - ✅ 1.3.4. Configure test coverage reporting
  - ✅ 1.3.5. Set up Storybook for component development

- ✅ **1.4. Core UI Components**
  - ✅ 1.4.1. Create Button component with variants
  - ✅ 1.4.2. Create Input component with validation
  - ✅ 1.4.3. Create Card component with sub-components
  - ✅ 1.4.4. Create Container component with responsive design
  - ✅ 1.4.5. Create Header and Footer components
  - ✅ 1.4.6. **CRITICAL** - Improve Test Coverage to Meet Thresholds ✅ **COMPLETED: 82.36% coverage achieved!**

### 🔄 **Phase 2: Authentication & User Management** (NEXT)

- 🔄 **2.1. User Authentication System**
- 🔄 **2.2. User Registration and Profile Management**
- 🔄 **2.3. Role-Based Access Control**
- 🔄 **2.4. Security and Validation**
- 🔄 **2.5. Password Reset and Account Verification**
- 🔄 **2.6. Manual Testing of Authentication System**

### 📋 **Project Backlog**

**[AWP.md - Project Backlog](agentic-sldc/AWP.md#project-backlog)**

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
