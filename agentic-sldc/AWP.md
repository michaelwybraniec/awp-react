# Agentic Workflow Protocol (AWP)

## Hard instructions for AI agents

1. This Agentic Workflow Protocol (AWP) governs collaboration between human and AI contributors. The following principles must always be followed:

   1.1. All work is guided strictly by the AWP; no deviations or improvisation.

   1.2. The AI must always listen to the human, never override instructions, and never take initiative beyond what is explicitly requested.

   1.3. Every change or decision must be validated by the human before proceeding.

   1.4. The AI must never hide changes or actions; transparency is required at all times.

   1.5. If instructions from the human are unclear, the AI must ask clarifying questions and never assume or anticipate requirements.

   1.6. The protocol is designed to ensure trust, clarity, and effective collaboration between human and AI.

   1.7. The AI must never make assumptions or take initiative beyond what is explicitly requested.

   1.8. Always use the commit standard for all changes.

   1.9. Never override the human's instructions, or any content in this AWP.

   1.10. Use numbers to reference changes in this AWP. Format 1.1, 1.2, 1.3, etc.

   1.11. Never use the word "AI" in any commit message.

   1.12 Read this AWP.md and if exists the main README.md to understand the workflow and project goal.

   1.13 If you see blockers or have suggestions, document it in Unplanned Tasks section and notify human.

   1.14 Always respect human oversight and approval gates

   1.15. Never make critical business decisions without human approval

   1.16. Always document your reasoning and decisions

   1.17. Follow the commit standard and reference step numbers

   1.18. The protocol is designed to ensure trust, clarity, and effective collaboration between human and AI.

## Author

Michael Wybraniec (ONE-FRONT.COM, OVERVIBING.COM)

## Goal

1. Develop and maintain high-quality UIs using React and TypeScript
2. Implement modern React features (Server Components, SSR)
3. Architect a robust component library/design system
4. Collaborate on design & UX with product teams
5. Integrate with backend services via RESTful APIs
6. Participate in agile development with continuous iteration

## Overview

1. UI/UX Design and Prototyping
2. Component Library Development
3. Frontend Application Development
4. Backend Integration
5. Testing and Quality Assurance
6. Deployment and Maintenance

## Technology

1. React 18+ with TypeScript
2. Modern React features (Server Components, Suspense, hooks)
3. Next.js or Remix for SSR capabilities
4. React Query for state management
5. react-hook-form for forms
6. shadcn/ui or Chakra UI for component kits
7. Tailwind CSS for styling
8. RESTful APIs for backend integration

## Outcome

1. Pixel-perfect, accessible, and user-friendly interfaces
2. Reusable component library that enforces consistency
3. Fast and scalable applications with SSR
4. Smooth frontend-backend communication
5. Intuitive and enjoyable user experience
6. Cross-browser compatibility and responsive design

## Collaboration

- **ai_agent_senior_developer:** Senior Developer (AI Agent)
- **ai_agent_junior_developer:** Junior Developer (AI Agent)
- **ai_agent_designer:** Designer (AI Agent)
- **ai_agent_tester:** Tester (AI Agent)
- **ai_agent_documentation:** Documentation (AI Agent)
- **ai_agent_project_manager:** Project Manager (AI Agent)
- **ai_agent_product_owner:** Product Owner (AI Agent)
- **ai_agent_scrum_master:** Scrum Master (AI Agent)
- **human_developer:** Developer (Human)
- **human_designer:** Designer (Human)
- **human_tester:** Tester (Human)
- **human_documentation:** Documentation (Human)
- **human_project_manager:** Project Manager (Human)
- **human_product_owner:** Product Owner (Human)
- **human_scrum_master:** Scrum Master (Human)
- **approver:** Human Only (Human)
- **approval_timeout:** 10 minutes
- **auto_handoff:** true

## Project Backlog

### 1. Project Foundation & Setup

1.1. [x] Initialize React TypeScript project with Next.js

- [x] 1.1.1. Set up Next.js 14+ with App Router and TypeScript
- [x] 1.1.2. Configure ESLint, Prettier, and Husky for code quality
- [x] 1.1.3. Set up environment variables and configuration files
- [x] 1.1.4. Initialize Git repository with proper .gitignore
- [x] 1.1.5. Configure build and development scripts
- [x] 1.1.6. Set up testing framework (Jest/Vitest) with React Testing Library

  1.2. [x] Set up Tailwind CSS and shadcn/ui component library

- [x] 1.2.1. Install and configure Tailwind CSS v3+ with custom theme
- [x] 1.2.2. Set up shadcn/ui with CLI and component configuration
- [x] 1.2.3. Create custom color palette and design tokens
- [x] 1.2.4. Configure responsive breakpoints and typography
- [x] 1.2.5. Set up component variants and utility classes

  1.3. [x] Configure project structure and folder organization

- [x] 1.3.1. Create organized folder structure (components, lib, hooks, types, etc.)
- [x] 1.3.2. Set up barrel exports for clean imports
- [x] 1.3.3. Configure path aliases in tsconfig.json
- [x] 1.3.4. Create shared types and interfaces
- [x] 1.3.5. Set up layout components and page structure

  1.4. [ ] Set up development environment and tooling

- [x] 1.4.1. Configure VS Code settings and extensions
- [x] 1.4.2. Set up debugging configuration
- [ ] 1.4.3. Set up Storybook for component documentation
- [ ] 1.4.4. Configure CI/CD pipeline basics
- [ ] 1.4.5. Set up E2E testing with Playwright or Cypress
- [ ] 1.4.6. Configure test coverage reporting and thresholds

  1.5. [ ] Create basic project documentation and README

- [ ] 1.5.1. Write comprehensive README with setup instructions
- [ ] 1.5.2. Document project architecture and conventions
- [ ] 1.5.3. Create component documentation guidelines
- [ ] 1.5.4. Set up API documentation structure
- [ ] 1.5.5. Document deployment procedures

  1.6. [ ] Verify app startup and basic functionality

- [ ] 1.6.1. Ensure app starts successfully with npm run dev
- [ ] 1.6.2. Verify basic page routing and navigation works
- [ ] 1.6.3. Test responsive design on different screen sizes
- [ ] 1.6.4. Verify basic component rendering and styling
- [ ] 1.6.5. Test app build process (npm run build)

### 2. Authentication & User Management

2.1. [ ] Design user authentication system (login/register)

- [ ] 2.1.1. Implement NextAuth.js or Clerk for authentication
- [ ] 2.1.2. Create login/register forms with validation (react-hook-form + zod)
- [ ] 2.1.3. Set up email/password and social login options
- [ ] 2.1.4. Implement form validation and error handling
- [ ] 2.1.5. Create protected route middleware and authentication guards
- [ ] 2.1.6. Write unit tests for authentication components and hooks
- [ ] 2.1.7. Create integration tests for authentication flows

  2.2. [ ] Implement role-based access control (Lab vs Pharmaceutical)

- [ ] 2.2.1. Define user roles and permissions schema
- [ ] 2.2.2. Create role-based component rendering logic
- [ ] 2.2.3. Implement route protection based on user roles
- [ ] 2.2.4. Set up admin dashboard for role management
- [ ] 2.2.5. Create role-specific navigation and layouts
- [ ] 2.2.6. Write unit tests for role-based access control logic
- [ ] 2.2.7. Create E2E tests for role-specific user journeys

  2.3. [ ] Create user profile management components

- [ ] 2.3.1. Build profile creation and editing forms
- [ ] 2.3.2. Implement avatar upload and image management
- [ ] 2.3.3. Create profile completion wizard for new users
- [ ] 2.3.4. Add profile verification and approval system
- [ ] 2.3.5. Implement profile privacy settings and visibility controls
- [ ] 2.3.6. Write unit tests for profile management components
- [ ] 2.3.7. Create integration tests for profile workflows

  2.4. [ ] Set up user session management and security

- [ ] 2.4.1. Implement JWT token management and refresh logic
- [ ] 2.4.2. Set up secure cookie handling and CSRF protection
- [ ] 2.4.3. Create session timeout and auto-logout functionality
- [ ] 2.4.4. Implement audit logging for user actions
- [ ] 2.4.5. Set up rate limiting and security headers
- [ ] 2.4.6. Write security tests for session management
- [ ] 2.4.7. Create penetration testing for authentication vulnerabilities

  2.5. [ ] Implement password reset and account verification

- [ ] 2.5.1. Create password reset flow with email verification
- [ ] 2.5.2. Implement account email verification system
- [ ] 2.5.3. Add two-factor authentication (2FA) support
- [ ] 2.5.4. Create account recovery and security questions
- [ ] 2.5.5. Implement account lockout and security measures
- [ ] 2.5.6. Write unit tests for password reset and verification flows
- [ ] 2.5.7. Create E2E tests for account recovery scenarios

  2.6. [ ] Manual testing of authentication system

- [ ] 2.6.1. Test user registration flow manually
- [ ] 2.6.2. Test user login/logout functionality manually
- [ ] 2.6.3. Test role-based access control manually (Lab vs Pharmaceutical)
- [ ] 2.6.4. Test profile creation and editing manually
- [ ] 2.6.5. Test password reset and account verification manually

### 3. Core Platform Features

3.1. [ ] Design and implement dashboard for both user types

- [ ] 3.1.1. Create role-specific dashboard layouts and components
- [ ] 3.1.2. Implement real-time data visualization with charts (recharts)
- [ ] 3.1.3. Add quick action buttons and navigation shortcuts
- [ ] 3.1.4. Create notification center and activity feed
- [ ] 3.1.5. Implement dashboard customization and widget management
- [ ] 3.1.6. Write unit tests for dashboard components and widgets
- [ ] 3.1.7. Create integration tests for dashboard data loading and interactions

  3.2. [ ] Create lab profile creation and management system

- [ ] 3.2.1. Build comprehensive lab profile forms with validation
- [ ] 3.2.2. Implement lab capabilities, certifications, and specializations
- [ ] 3.2.3. Create lab equipment and facility management
- [ ] 3.2.4. Add lab performance metrics and success stories
- [ ] 3.2.5. Implement lab profile verification and approval workflow
- [ ] 3.2.6. Write unit tests for lab profile forms and validation
- [ ] 3.2.7. Create E2E tests for lab profile creation and management workflows

  3.3. [ ] Build pharmaceutical company profile system

- [ ] 3.3.1. Create company profile forms with business information
- [ ] 3.3.2. Implement company portfolio and project history
- [ ] 3.3.3. Add company requirements and partnership criteria
- [ ] 3.3.4. Create company verification and compliance tracking
- [ ] 3.3.5. Implement company contact and decision-maker management
- [ ] 3.3.6. Write unit tests for company profile forms and validation
- [ ] 3.3.7. Create E2E tests for company profile management workflows

  3.4. [ ] Implement search and discovery functionality

- [ ] 3.4.1. Build advanced search with filters (location, capabilities, etc.)
- [ ] 3.4.2. Implement search result ranking and relevance algorithms
- [ ] 3.4.3. Create saved searches and search history
- [ ] 3.4.4. Add search result export and sharing functionality
- [ ] 3.4.5. Implement search analytics and optimization
- [ ] 3.4.6. Write unit tests for search functionality and filters
- [ ] 3.4.7. Create performance tests for search algorithms and large datasets

  3.5. [ ] Create partnership proposal and request system

- [ ] 3.5.1. Build proposal creation wizard with templates
- [ ] 3.5.2. Implement proposal review and approval workflow
- [ ] 3.5.3. Create proposal tracking and status management
- [ ] 3.5.4. Add proposal collaboration and commenting system
- [ ] 3.5.5. Implement proposal analytics and success metrics
- [ ] 3.5.6. Write unit tests for proposal creation and workflow logic
- [ ] 3.5.7. Create E2E tests for complete proposal lifecycle

  3.6. [ ] Manual testing of core platform features

- [ ] 3.6.1. Test dashboard functionality manually for both user types
- [ ] 3.6.2. Test lab profile creation and management manually
- [ ] 3.6.3. Test pharmaceutical company profile system manually
- [ ] 3.6.4. Test search and discovery functionality manually
- [ ] 3.6.5. Test partnership proposal system manually

### 4. Collaboration Tools

4.1. [ ] Build messaging and communication system

- [ ] 4.1.1. Implement real-time chat with WebSocket (Socket.io)
- [ ] 4.1.2. Create group chat and direct messaging functionality
- [ ] 4.1.3. Add file sharing and media support in messages
- [ ] 4.1.4. Implement message threading and conversation management
- [ ] 4.1.5. Create message search and archive functionality
- [ ] 4.1.6. Write unit tests for messaging components and WebSocket logic
- [ ] 4.1.7. Create integration tests for real-time messaging functionality

  4.2. [ ] Create document sharing and management

- [ ] 4.2.1. Build document upload and storage system (AWS S3/Cloudinary)
- [ ] 4.2.2. Implement document version control and history
- [ ] 4.2.3. Create document collaboration with real-time editing
- [ ] 4.2.4. Add document permissions and access control
- [ ] 4.2.5. Implement document templates and approval workflows
- [ ] 4.2.6. Write unit tests for document upload and management
- [ ] 4.2.7. Create integration tests for document collaboration features

  4.3. [ ] Implement project tracking and milestone management

- [ ] 4.3.1. Create project creation and management interface
- [ ] 4.3.2. Implement milestone tracking with deadlines and dependencies
- [ ] 4.3.3. Add task assignment and progress tracking
- [ ] 4.3.4. Create project timeline visualization (Gantt charts)
- [ ] 4.3.5. Implement project reporting and analytics
- [ ] 4.3.6. Write unit tests for project management components
- [ ] 4.3.7. Create E2E tests for project lifecycle and milestone tracking

  4.4. [ ] Design collaboration workspace interface

- [ ] 4.4.1. Build shared workspace with real-time collaboration
- [ ] 4.4.2. Implement whiteboard and brainstorming tools
- [ ] 4.4.3. Create meeting scheduling and video conferencing integration
- [ ] 4.4.4. Add workspace templates and customization options
- [ ] 4.4.5. Implement workspace analytics and usage tracking
- [ ] 4.4.6. Write unit tests for workspace components and real-time features
- [ ] 4.4.7. Create integration tests for collaboration tools and video conferencing

  4.5. [ ] Add notification and alert system

- [ ] 4.5.1. Implement real-time notifications with push support
- [ ] 4.5.2. Create notification preferences and filtering
- [ ] 4.5.3. Add email notification system with templates
- [ ] 4.5.4. Implement notification history and management
- [ ] 4.5.5. Create notification analytics and engagement tracking
- [ ] 4.5.6. Write unit tests for notification system and push functionality
- [ ] 4.5.7. Create integration tests for notification delivery and preferences

  4.6. [ ] Manual testing of collaboration tools

- [ ] 4.6.1. Test messaging and communication system manually
- [ ] 4.6.2. Test document sharing and management manually
- [ ] 4.6.3. Test project tracking and milestone management manually
- [ ] 4.6.4. Test collaboration workspace interface manually
- [ ] 4.6.5. Test notification and alert system manually

### 5. Advanced Features & Integration

5.1. [ ] Implement advanced search and filtering

- [ ] 5.1.1. Build Elasticsearch or Algolia integration for fast search
- [ ] 5.1.2. Implement faceted search with multiple filter categories
- [ ] 5.1.3. Create search result highlighting and snippet generation
- [ ] 5.1.4. Add search suggestions and autocomplete functionality
- [ ] 5.1.5. Implement search result personalization and recommendations
- [ ] 5.1.6. Write unit tests for search algorithms and filter logic
- [ ] 5.1.7. Create performance and load tests for search functionality

  5.2. [ ] Create analytics and reporting dashboard

- [ ] 5.2.1. Build comprehensive analytics with data visualization (D3.js)
- [ ] 5.2.2. Implement user behavior tracking and funnel analysis
- [ ] 5.2.3. Create partnership success metrics and ROI tracking
- [ ] 5.2.4. Add custom report generation and scheduling
- [ ] 5.2.5. Implement data export in multiple formats (CSV, PDF, Excel)
- [ ] 5.2.6. Write unit tests for analytics components and data visualization
- [ ] 5.2.7. Create integration tests for report generation and data export

  5.3. [ ] Build API integration for external systems

- [ ] 5.3.1. Create RESTful API with OpenAPI/Swagger documentation
- [ ] 5.3.2. Implement webhook system for real-time data sync
- [ ] 5.3.3. Add third-party integrations (CRM, ERP, etc.)
- [ ] 5.3.4. Create API rate limiting and authentication
- [ ] 5.3.5. Implement API versioning and backward compatibility
- [ ] 5.3.6. Write unit tests for API endpoints and integration logic
- [ ] 5.3.7. Create integration tests for third-party API connections

  5.4. [ ] Implement data export and import functionality

- [ ] 5.4.1. Build bulk data import with validation and error handling
- [ ] 5.4.2. Create data export in multiple formats and templates
- [ ] 5.4.3. Implement data migration and backup systems
- [ ] 5.4.4. Add data quality checks and validation rules
- [ ] 5.4.5. Create data synchronization with external databases
- [ ] 5.4.6. Write unit tests for data import/export functionality
- [ ] 5.4.7. Create integration tests for data migration and synchronization

  5.5. [ ] Add mobile responsiveness and PWA features

- [ ] 5.5.1. Implement responsive design for all screen sizes
- [ ] 5.5.2. Create Progressive Web App with offline functionality
- [ ] 5.5.3. Add mobile-specific features and touch interactions
- [ ] 5.5.4. Implement app installation and home screen shortcuts
- [ ] 5.5.5. Create mobile push notifications and background sync
- [ ] 5.5.6. Write unit tests for responsive components and PWA features
- [ ] 5.5.7. Create cross-browser and mobile device testing suite

  5.6. [ ] Manual testing of advanced features and integration

- [ ] 5.6.1. Test advanced search and filtering manually
- [ ] 5.6.2. Test analytics and reporting dashboard manually
- [ ] 5.6.3. Test API integration with external systems manually
- [ ] 5.6.4. Test data export and import functionality manually
- [ ] 5.6.5. Test mobile responsiveness and PWA features manually

## Unplanned Tasks

- [ ] 1.1: Test Coverage Review and Improvement - Review current test coverage and improve it to meet 80%+ threshold, focusing on critical user paths and edge cases
- [ ] 1.2: Unplanned task, Name, Title, Description, etc.

## Procedures

1. **update**

   1.1. Review README.md and AWP.md after each step.

   1.2. Update README.md to reflect the current state

   1.3. We review AWP.md to understand next actions.

   1.4. Check for blockers, if any we notify humans.

   1.5. Ensure docs and code are aligned, of not, notify humans.

2. **commit**

   2.1. Commit changes using the commitStandard.

   2.2. Use the format: type(scope step): subject.

   2.3. Reference the step number in every commit message.

   2.4. Follow conventional commit standards.

   2.5. Include relevant files and messages by checking git status what was changed in file with git diff?

3. **next**

   3.1. Move to the next actionable step only after update and commit are complete.

   3.2. Identify the next actionable step and begin work.

   3.3. Check for blockers before proceeding, and confirm additional plan with human.

   3.4. Mark the current step 'check' [ ] as done before you start.

4. **check**

   4.1. Review AWP.md to determine the current actionable step.

   4.2. Find the first step not done.

   4.3. Restore context and understand what needs to be done.

   4.4. Use this when returning to work after a break or context loss.

5. **handoff**

   5.1. Transfer task ownership between human and AI.

   5.2. Package current context and deliverables.

   5.3. Notify receiving party with clear expectations.

   5.4. Set timeout for response and escalation rules.

## Human Notes

1. Reference the step in every commit.
2. Update this file as the project progresses.
3. Check off each item as you complete it.
4. Respect human-AI collaboration boundaries.

## Commit Standard

- **format:** type(scope step): subject
- **types:** feat, fix, docs, test, chore
- **rules:**
  - Reference the step in every commit.
  - Use imperative mood.
  - Keep messages concise and descriptive.
- **examples:**
  - feat(api 3.1): add API endpoint
  - docs(readme 5.1): expand documentation
