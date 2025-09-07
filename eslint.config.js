import js from '@eslint/js';
import globals from 'globals';
import * as react from 'eslint-plugin-react';
import * as reactHooks from 'eslint-plugin-react-hooks';
import * as reactRefresh from 'eslint-plugin-react-refresh';
import parser from '@typescript-eslint/parser';
import tseslintPlugin from '@typescript-eslint/eslint-plugin';
import * as jsxA11y from 'eslint-plugin-jsx-a11y';
import * as eslintPluginImport from 'eslint-plugin-import';
import * as prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';
import { globalIgnores } from 'eslint/config';

export default [
  globalIgnores(['dist']),
  js.configs.recommended,
  prettierConfig,
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser,
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.browser,
    },
    plugins: {
      react: react.default,
      'react-hooks': reactHooks.default,
      'react-refresh': reactRefresh.default,
      import: eslintPluginImport.default,
      prettier: prettierPlugin.default,
      'jsx-a11y': jsxA11y.default,
      '@typescript-eslint': tseslintPlugin,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    ignores: ['node_modules', 'dist', 'dist-ssr', '*.config.js', '*.config.ts'],
    rules: {
      'react/react-in-jsx-scope': 'off',
      'no-console': 'off',
      // Use TS-aware unused vars rule and ignore leading underscore
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
      curly: 'error',
      'import/order': [
        'warn',
        {
          groups: [['builtin', 'external'], 'internal', ['parent', 'sibling', 'index']],
          'newlines-between': 'always',
        },
      ],
      'react/self-closing-comp': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      'react/jsx-pascal-case': 'error',
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      'prettier/prettier': 'error',
    },
  },
];
