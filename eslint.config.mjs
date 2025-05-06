import js from "@eslint/js";
import globals from "globals";
import unicorn from "eslint-plugin-unicorn";
import { defineConfig } from "eslint/config";


export default defineConfig([
  {
    ignores: ['eslint.config.mjs'], // ← これで設定ファイル自身を除外
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js, unicorn },
    // extends: ["js/recommended"]
    languageOptions: {
      globals: globals.browser,
      ecmaVersion: 2021,
      sourceType: 'module',
    },
    rules: {
      ...js.configs.recommended.rules,
      ...unicorn.configs.recommended.rules,
      semi: ["error", "always"],
      quotes: ["error", "single"],
    },
  },
]);
