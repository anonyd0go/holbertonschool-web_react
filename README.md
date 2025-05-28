# Web React

This repository serves as an introduction to TypeScript as the foundation for modern JavaScript and web development frameworks.

## Prerequisites

- Node.js (v12 or higher)
- npm (Node Package Manager)
- A code editor (VS Code recommended for TypeScript support)

## Project Structure

All work is contained in the [TypeScript](/TypeScript/) directory, organized into task-specific folders.

## Getting Started

1. Install project dependencies in each task folder:
```bash
cd TypeScript/task_0
npm install
```

2. Common npm scripts available in task folders:
- `npm run build`: Compiles TypeScript files using webpack
- `npm run start-dev`: Starts webpack development server
- `npm run test`: Runs unit tests
- `npm run lint`: Checks code style with ESLint

## Development Setup

Each task folder contains its own configuration files:
- `package.json`: Project dependencies and scripts
- `.eslintrc.js`: ESLint configuration for TypeScript
- `tsconfig.json`: TypeScript compiler options
- `webpack.config.js`: Webpack bundler configuration

## TypeScript Configuration

The `tsconfig.json` in each task folder configures TypeScript with:
- Strict type checking
- ES6 module support
- Source map generation
- DOM type definitions
- Output directory settings

## Code Quality

ESLint is configured to enforce:
- TypeScript best practices
- Code style consistency
- Error prevention
- Import/export rules

## Running the Projects

1. Navigate to a task folder
2. Install dependencies
3. Start development server:
```bash
cd TypeScript/task_0
npm install
npm run start-dev
```

The development server will start on `http://localhost:8080` by default.

## Testing

Test files use Jest framework. Run tests with:
```bash
npm run build
```

## Documentation

For detailed information about tasks and concepts covered, see the [TypeScript README](/TypeScript/README.md).
