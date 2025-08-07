# AWP React - Next.js TypeScript Project

[![Next.js](https://img.shields.io/badge/Next.js-15.4.6-black?style=flat-square&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org)
[![React](https://img.shields.io/badge/React-19.1.0-blue?style=flat-square&logo=react)](https://reactjs.org)
[![Vitest](https://img.shields.io/badge/Vitest-3.2.4-green?style=flat-square&logo=vitest)](https://vitest.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-blue?style=flat-square&logo=tailwind-css)](https://tailwindcss.com)

This is a [Next.js](https://nextjs.org) project following the **Agentic Workflow Protocol (AWP)** for React and TypeScript development.

## 🎯 Project Goal

Develop and maintain high-quality UIs using React and TypeScript with modern React features (Server Components, SSR), architect a robust component library/design system, and integrate with backend services via RESTful APIs.

## 🚀 Getting Started

### Quick Start (for experienced developers)

```bash
git clone <repository-url>
cd awp-react
npm install
cp .env.example .env.local
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
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 🛠️ Technology Stack

- **Framework**: Next.js 15.4.6 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Testing**: Vitest + React Testing Library
- **Code Quality**: ESLint, Prettier, Husky, lint-staged
- **Development**: Turbopack for fast builds

## 📁 Project Structure

```
awp-react/
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── layout.tsx       # Root layout
│   │   ├── page.tsx         # Home page
│   │   └── globals.css      # Global styles
│   ├── lib/                 # Shared utilities and configuration
│   │   ├── config.ts        # Application configuration
│   │   ├── constants.ts     # Application constants and enums
│   │   ├── env.ts           # Environment validation utilities
│   │   └── index.ts         # Barrel exports
│   └── test/                # Testing utilities and setup
│       ├── setup.ts         # Test environment setup
│       ├── utils.tsx        # Test utilities and helpers
│       └── example.test.tsx # Example tests
├── public/                  # Static assets
├── agentic-sldc/           # AWP protocol documentation
│   ├── AWP.md              # Agentic Workflow Protocol
│   └── README.md           # AWP documentation
├── .husky/                 # Git hooks configuration
├── .prettierrc            # Prettier configuration
├── .prettierignore        # Prettier ignore rules
├── eslint.config.mjs      # ESLint configuration
├── vitest.config.ts       # Vitest testing configuration
├── ENVIRONMENT.md          # Environment configuration documentation
├── TESTING.md             # Testing guide and documentation
├── .env.example           # Environment variables template
├── .env.local             # Local environment variables (not committed)
└── package.json           # Dependencies and scripts
```

## 🔄 AWP Workflow

This project follows the **Agentic Workflow Protocol (AWP)** for human-AI collaboration:

### Current Status

- ✅ **Task 1.1.1**: Next.js 15+ with TypeScript and App Router initialized
- ✅ **Task 1.1.2**: ESLint, Prettier, and Husky configured for code quality
- ✅ **Task 1.1.3**: Environment variables and configuration files set up
- ✅ **Task 1.1.4**: Git repository initialized with proper .gitignore
- ✅ **Task 1.1.5**: Build and development scripts configured
- ✅ **Task 1.1.6**: Testing framework (Vitest + React Testing Library) set up
- 🔄 **Next**: Task 1.2.1 - Install and configure Tailwind CSS v3+ with custom theme

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
npm run clean            # Clean build artifacts
npm run clean:all        # Clean everything including node_modules
npm run reinstall        # Complete reinstall of dependencies
```

## 🎨 Features

- **Modern React**: Server Components, Suspense, hooks
- **TypeScript**: Full type safety
- **Tailwind CSS**: Utility-first styling
- **App Router**: Next.js 13+ file-based routing
- **Turbopack**: Fast development builds
- **Code Quality**: Automated linting and formatting
- **Git Hooks**: Pre-commit quality checks
- **Environment Management**: Centralized configuration with validation
- **Constants & Types**: Application-wide constants and enums
- **Build Scripts**: Comprehensive development and build scripts
- **Testing**: Complete testing setup with Vitest and React Testing Library

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

## 🧪 Testing

This project uses Vitest and React Testing Library for comprehensive testing:

### Test Commands

```bash
npm test             # Run all tests
npm run test:watch   # Run tests in watch mode
npm run test:coverage # Generate coverage report
npm run test:ui      # Open Vitest UI
```

### Test Structure

- **Unit Tests**: Test individual components and functions
- **Integration Tests**: Test component interactions
- **Coverage**: Aim for 80%+ code coverage
- **Mocking**: Comprehensive mocking for Next.js and browser APIs

See [TESTING.md](./TESTING.md) for detailed testing guidelines and examples.

## 🔧 Troubleshooting

### Common Issues

1. **Port already in use**

   ```bash
   # Kill process on port 3000
   lsof -ti:3000 | xargs kill -9
   ```

2. **Environment variables not loading**

   ```bash
   # Ensure .env.local exists
   cp .env.example .env.local
   # Restart development server
   npm run dev
   ```

3. **TypeScript errors**

   ```bash
   # Run type checking
   npm run type-check
   # Fix auto-fixable issues
   npm run lint:fix
   ```

4. **Tests failing**

   ```bash
   # Clear test cache
   npx vitest --clearCache
   # Run tests with verbose output
   npx vitest run --reporter=verbose
   ```

5. **Build failures**
   ```bash
   # Clean and rebuild
   npm run clean
   npm run build
   ```

### Getting Help

- Check the [AWP Protocol](agentic-sldc/AWP.md) for workflow questions
- Review [TESTING.md](./TESTING.md) for testing issues
- Review [ENVIRONMENT.md](./ENVIRONMENT.md) for environment setup

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [AWP Protocol](agentic-sldc/AWP.md)

## 🤝 Contributing

This project follows the AWP protocol for collaboration. Please refer to `agentic-sldc/AWP.md` for detailed workflow procedures.

## 📄 License

This project is private and proprietary.
