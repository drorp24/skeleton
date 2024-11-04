// eslint.config.mjs
import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import eslintConfigPrettier from 'eslint-config-prettier';
import typescriptParser from '@typescript-eslint/parser';
import typescriptPlugin from '@typescript-eslint/eslint-plugin';

export default [
  {
    files: ['client/**/*.{js,jsx,ts,tsx}', 'server/**/*.{js,ts}'],
    languageOptions: {
      parser: typescriptParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: {
      react: eslintPluginReact,
      prettier: eslintPluginPrettier,
      '@typescript-eslint': typescriptPlugin,
    },
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:react/recommended',
      'plugin:prettier/recommended', // Integrate Prettier
      eslintConfigPrettier, // Disables ESLint rules that conflict with Prettier
    ],
    settings: {
      react: {
        version: 'detect', // Automatically detect the React version
      },
    },
    rules: {
      'prettier/prettier': 'error', // Show Prettier formatting errors as ESLint errors
    },
  },
  // Optionally, add more specific configurations for client or server files here.
];
