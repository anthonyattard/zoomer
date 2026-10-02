import { defineConfig } from "eslint/config";
import stylistic from "@stylistic/eslint-plugin";
import tseslint from "typescript-eslint";

export default defineConfig({
  files: ["**/*.ts"],
  languageOptions: {
    parser: tseslint.parser,
    ecmaVersion: 2022,
    sourceType: "module",
  },
  plugins: {
    "@typescript-eslint": tseslint.plugin,
    "@stylistic": stylistic,
  },
  rules: {
    "@typescript-eslint/naming-convention": "warn",
    "@stylistic/semi": "warn",
    curly: "warn",
    eqeqeq: "warn",
    "no-throw-literal": "warn",
  },
});
