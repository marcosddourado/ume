module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
    "plugin:react/recommended",
    "airbnb"
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: [
    "react",
    "@typescript-eslint"
  ],
  rules: {
    indent: "off",
    "@typescript-eslint/indent": ["off", 2],
    quotes: "off",
    "@typescript-eslint/quotes": ["error", "double"],
    semi: "off",
    "@typescript-eslint/semi": ["error", "always"],
    "react/jsx-filename-extension": [1, { extensions: [".ts", ".tsx"] }],
    "prefer-destructuring": ["off"],
    "no-use-before-define": ["off"],
    "import/no-unresolved": ["off"],
    "import/extensions": ["off"],
    "no-undef": ["off"],
    "react/destructuring-assignment": ["off"],
    "react/require-default-props": ["off"],
    "import/no-extraneous-dependencies": ["off"],
    "react/state-in-constructor": ["off"],
    "no-console": ["off"],
    "no-underscore-dangle": ["off"],
    "react/sort-comp": ["off"],
    "global-require": ["off"],
    "class-methods-use-this": ["off"],
    "no-throw-literal": ["off"],
    "react/jsx-props-no-spreading": ["off"],
    "operator-linebreak": ["off"],
    "no-unused-expressions": ["off"],
    "prefer-const": ["off"],
    "no-param-reassign": ["off"],
    "react/prefer-stateless-function": ["off"],
    "@typescript-eslint/no-unused-vars": [2, { args: "none" }],
    "no-nested-ternary": ["off"],
    "no-shadow": ["off"],
    "comma-dangle": ["error", "never"],
    "func-names": ["off"],
    "no-plusplus": ["off"],
    "quote-props": ["off"],
    "no-unused-vars": "warn",
    "no-prototype-builtins": ["off"],
    "import/prefer-default-export": ["off"],
    "no-return-await": ["off"],
    "react/no-array-index-key": ["off"],
    "consistent-return": ["off"],
    "array-callback-return": ["off"],
    "no-restricted-syntax": ["off"],
    "react/jsx-wrap-multilines": ["off"],
    "no-control-regex": ["off"],
    "react/style-prop-object": ["off"],
    "react/jsx-closing-tag-location": ["off"],
    "prefer-promise-reject-errors": ["off"],
    "arrow-body-style": "warn",
    "camelcase": ["warn"]
  }
};
