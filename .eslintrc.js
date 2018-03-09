"use strict";

module.exports = {
  parserOptions: {
    ecmaVersion: 8
  },
  env: {
    node: true,
    es6: true
  },
  plugins: ["node"],
  extends: ["eslint:recommended", "plugin:node/recommended", "prettier"]
};
