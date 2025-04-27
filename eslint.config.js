import vue from "eslint-plugin-vue";
import vueEslintParser from "vue-eslint-parser";
import typescriptParser from "@typescript-eslint/parser";
import prettierPlugin from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";

export default [
  {
    files: ["**/*.vue", "**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: vueEslintParser,
      parserOptions: {
        parser: typescriptParser,
        ecmaVersion: 2021,
        sourceType: "module",
      },
    },
    plugins: {
      vue,
      prettier: prettierPlugin, 
    },
    rules: {
      ...vue.configs["vue3-recommended"].rules,
      "vue/multi-word-component-names": "off",
      "no-console": "warn",
      "no-debugger": "warn",
      "prettier/prettier": [
        "error",
        {
          semi: true,
          singleQuote: true, 
          trailingComma: "all",
          printWidth: 100,
          tabWidth: 2,
        },
      ],
      ...prettierConfig.rules, 
    },
  },
];
