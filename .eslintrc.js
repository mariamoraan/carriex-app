module.exports = {
    env: {
      es6: true,
      node: true,
      jest: true,
      browser: true,
    },
    globals: {
        JSX: true,
    },
    extends: "eslint:recommended",
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint"],
    parserOptions: {
      ecmaVersion: 2017,
      sourceType: "module",
    },
    rules: {
      indent:  0,
      "linebreak-style": 0,
      quotes: 0,
      "no-console": "warn",
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        { vars: "all", args: "after-used", ignoreRestSiblings: false },
      ],
      //"@typescript-eslint/explicit-function-return-type": "warn", // Consider using explicit annotations for object literals and function return types even when they can be inferred.
      "no-empty": "warn",
    },
};