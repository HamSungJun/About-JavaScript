module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["prettier"],
  plugins: ["import"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 13,
    sourceType: "module",
  },
  rules: {
    "func-names": 0,
    "no-plusplus": 0,
    "no-console": 0,
    "no-use-before-define": 0,
    "no-restricted-syntax": 0,
    "no-unused-vars": 0,
    "import/no-extraneous-dependencies": 0,
    "import/no-unresolved": 0,
    "import/extensions": 0,
  },
  overrides: [
    {
      files: ["src/**/*.ts"],
      excludedFiles: ["*.test.ts", "*.test.tsx"],
    },
  ],
  ignorePatterns: ["node_modules/**", "dist/**", "*.css", "*.scss"],
  settings: {},
};
