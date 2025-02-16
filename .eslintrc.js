module.exports = {
  parser: '@babel/eslint-parser', // Babel parser for modern JavaScript
  parserOptions: {
    requireConfigFile: false, // For projects without a Babel config file
    ecmaVersion: 2021, // Support modern ECMAScript features
    sourceType: 'module', // Allow the use of ES modules
    ecmaFeatures: {
      jsx: true, // Enable JSX
    },
  },
  env: {
    browser: true, // Enable browser global variables
    node: true, // Enable Node.js global variables
    es2021: true, // Use ES2021 globals like `Promise`
  },
  extends: [
    'eslint:recommended', // Base recommended ESLint rules
    'plugin:react/recommended', // React-specific rules
    'plugin:react/jsx-runtime', // For React 17+ (when importing React is no longer required)
    'plugin:@typescript-eslint/recommended', // Add TypeScript support
    'plugin:jsx-a11y/recommended', // Accessibility linting for JSX (optional but recommended)
    'plugin:prettier/recommended', // Integrate Prettier with ESLint
    'prettier',
  ],
  plugins: ['react', '@typescript-eslint', 'jsx-a11y', 'prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'es5',
        semi: true,
      },
    ], // Enforce Prettier formatting
    'react/react-in-jsx-scope': 'off', // Disable for React 17+ with JSX runtime
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }], // Ignore unused variables starting with `_`
    'jsx-a11y/anchor-is-valid': [
      'warn',
      {
        aspects: ['invalidHref'], // Warn if an `<a>` tag lacks a valid href
      },
    ],
  },
  settings: {
    react: {
      version: 'detect', // Automatically detect React version
    },
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'], // Apply specific rules for TypeScript files
      parser: '@typescript-eslint/parser', // Use TypeScript parser
      parserOptions: {
        project: './tsconfig.json', // Path to your TypeScript config
      },
    },
    {
      files: ['**/*.js', '**/*.jsx'], // Apply specific rules for JavaScript files
    },
  ],
};
