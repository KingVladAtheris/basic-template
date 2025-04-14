import { defineConfig } from 'eslint/config';
import js from '@eslint/js';
import globals from 'globals';
import eslintPluginPrettier from 'eslint-plugin-prettier'; // Import the Prettier plugin
import eslintConfigPrettier from 'eslint-config-prettier'; // Import the Prettier config

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: { js, prettier: eslintPluginPrettier }, // Add Prettier plugin
    extends: ['js/recommended', eslintConfigPrettier], // Extend Prettier's config
    rules: {
      'prettier/prettier': ['error', { singleQuote: true, semi: true }], // Optional: Prettier rules
    },
  },
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: { globals: globals.browser },
  },
]);
