# AWP React - Next.js TypeScript Project

This is a [Next.js](https://nextjs.org) project following the **Agentic Workflow Protocol (AWP)** for React and TypeScript development.

## 🎯 Project Goal

Develop and maintain high-quality UIs using React and TypeScript with modern React features (Server Components, SSR), architect a robust component library/design system, and integrate with backend services via RESTful APIs.

## 🚀 Getting Started

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

## 🛠️ Technology Stack

- **Framework**: Next.js 15.4.6 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
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
│   └── lib/                 # Shared utilities and configuration
│       ├── config.ts        # Application configuration
│       ├── constants.ts     # Application constants and enums
│       ├── env.ts           # Environment validation utilities
│       └── index.ts         # Barrel exports
├── public/                  # Static assets
├── agentic-sldc/           # AWP protocol documentation
│   ├── AWP.md              # Agentic Workflow Protocol
│   └── README.md           # AWP documentation
├── .husky/                 # Git hooks configuration
├── .prettierrc            # Prettier configuration
├── .prettierignore        # Prettier ignore rules
├── eslint.config.mjs      # ESLint configuration
├── ENVIRONMENT.md          # Environment configuration documentation
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
- 🔄 **Next**: Task 1.1.6 - Set up testing framework (Jest/Vitest) with React Testing Library

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

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [AWP Protocol](agentic-sldc/AWP.md)

## 🤝 Contributing

This project follows the AWP protocol for collaboration. Please refer to `agentic-sldc/AWP.md` for detailed workflow procedures.

## 📄 License

This project is private and proprietary.
