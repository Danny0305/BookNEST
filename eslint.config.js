import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";

/** @type {import('eslint').Linter.Config} */
export default {
  env: {
    browser: true,
    es2021: true, // Modern JavaScript syntax
  },
  extends: [
    "eslint:recommended", // Recommended JavaScript rules
    "plugin:react/recommended", // Recommended React rules
    "plugin:@eslint/js/recommended", // Recommended JavaScript plugin rules
  ],
  parserOptions: {
    ecmaVersion: 12, // Modern ECMAScript syntax
    sourceType: "module", // Allow the use of imports
  },
  globals: globals.browser, // Define browser globals
  plugins: ["react"], // Add react plugin
  rules: {
    // Add any custom rules you may need here
  },
};
