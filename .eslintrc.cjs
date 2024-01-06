module.exports = {
  root: true,
  env: { browser: true, es2021: true, "cypress/globals": true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:cypress/recommended",
    "plugin:storybook/recommended",
  ],
  overrides: [],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "cypress"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/no-empty-function": "off",
    "react/no-unknown-property": ["error", { ignore: ["css"] }],
    "no-unused-vars": "off",
    "no-undef": "off",
    "@typescript-eslint/no-unused-vars": ["warn", { ignoreRestSiblings: true }],
    "cypress/no-assigning-return-values": "error",
    "cypress/no-unnecessary-waiting": "error",
    "cypress/assertion-before-screenshot": "warn",
    "cypress/no-force": "warn",
    "cypress/no-async-tests": "error",
    "cypress/no-pause": "error",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
